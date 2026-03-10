import React, { useRef, useState, useCallback, useEffect } from 'react';
import {
  motion,
  useMotionValue,
  useSpring,
  AnimatePresence,
} from 'framer-motion';

/* ─────────────────────────────────────────────
   Injected keyframes (shimmer + spinner)
   ───────────────────────────────────────────── */
const KEYFRAMES_ID = 'portfolio-button-keyframes';

const keyframeCSS = `
@keyframes shimmer-sweep {
  0%   { transform: translateX(-100%) skewX(-15deg); }
  100% { transform: translateX(400%) skewX(-15deg); }
}
@keyframes spin {
  to { transform: rotate(360deg); }
}
`;

function injectKeyframes() {
  if (typeof document === 'undefined') return;
  if (document.getElementById(KEYFRAMES_ID)) return;
  const style = document.createElement('style');
  style.id = KEYFRAMES_ID;
  style.textContent = keyframeCSS;
  document.head.appendChild(style);
}

/* ─────────────────────────────────────────────
   Design tokens
   ───────────────────────────────────────────── */
const TOKENS = {
  primary: '#a855f7',
  secondary: '#6b21a8',
  accent: '#ec4899',
  bg: '#0a0a0f',
  gradient: 'linear-gradient(135deg, #6b21a8, #a855f7)',
  glowShadow: '0 0 30px rgba(168,85,247,0.5)',
  glowShadowStrong: '0 0 40px rgba(168,85,247,0.6), 0 0 80px rgba(168,85,247,0.2)',
  cubicEase: [0.25, 0.1, 0.25, 1],
};

/* ─────────────────────────────────────────────
   Shared spring / transition configs
   ───────────────────────────────────────────── */
const magnetSpring = { stiffness: 180, damping: 18, mass: 0.1 };

const baseTransition = {
  type: 'tween',
  ease: TOKENS.cubicEase,
  duration: 0.3,
};

const entranceVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { type: 'tween', ease: TOKENS.cubicEase, duration: 0.55 },
  },
};

/* ─────────────────────────────────────────────
   useMagnetic — hook that makes the element
   subtly follow the cursor on hover
   ───────────────────────────────────────────── */
function useMagnetic(strength = 0.35) {
  const ref = useRef(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const springX = useSpring(x, magnetSpring);
  const springY = useSpring(y, magnetSpring);
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseMove = useCallback(
    (e) => {
      if (!ref.current) return;
      const rect = ref.current.getBoundingClientRect();
      const cx = rect.left + rect.width / 2;
      const cy = rect.top + rect.height / 2;
      x.set((e.clientX - cx) * strength);
      y.set((e.clientY - cy) * strength);
    },
    [strength, x, y]
  );

  const handleMouseEnter = useCallback(() => setIsHovered(true), []);

  const handleMouseLeave = useCallback(() => {
    x.set(0);
    y.set(0);
    setIsHovered(false);
  }, [x, y]);

  return {
    ref,
    springX,
    springY,
    isHovered,
    magnetHandlers: {
      onMouseMove: handleMouseMove,
      onMouseEnter: handleMouseEnter,
      onMouseLeave: handleMouseLeave,
    },
  };
}

/* ─────────────────────────────────────────────
   Shimmer overlay — absolutely positioned div
   that sweeps left→right on hover
   ───────────────────────────────────────────── */
function ShimmerOverlay({ active }) {
  return (
    <span
      aria-hidden="true"
      style={{
        position: 'absolute',
        inset: 0,
        overflow: 'hidden',
        borderRadius: 'inherit',
        pointerEvents: 'none',
      }}
    >
      <span
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '40%',
          height: '100%',
          background:
            'linear-gradient(90deg, transparent, rgba(255,255,255,0.15), transparent)',
          animation: active ? 'shimmer-sweep 1.4s ease-in-out infinite' : 'none',
          willChange: 'transform',
        }}
      />
    </span>
  );
}

/* ─────────────────────────────────────────────
   Spinner icon (SVG)
   ───────────────────────────────────────────── */
function Spinner() {
  return (
    <svg
      aria-hidden="true"
      style={{ animation: 'spin 0.8s linear infinite' }}
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.5"
      strokeLinecap="round"
    >
      <path d="M12 2a10 10 0 0 1 10 10" />
    </svg>
  );
}

/* ─────────────────────────────────────────────
   Checkmark icon (SVG)
   ───────────────────────────────────────────── */
function Checkmark() {
  return (
    <motion.svg
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ type: 'spring', stiffness: 300, damping: 20 }}
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <polyline points="20 6 9 17 4 12" />
    </motion.svg>
  );
}

/* ═════════════════════════════════════════════
   1. PrimaryButton
   ═════════════════════════════════════════════ */
export function PrimaryButton({
  children,
  onClick,
  href,
  disabled = false,
  className = '',
  ariaLabel,
  ...rest
}) {
  useEffect(injectKeyframes, []);

  const { ref, springX, springY, isHovered, magnetHandlers } = useMagnetic(0.35);

  const Component = href ? motion.a : motion.button;
  const linkProps = href
    ? { href, target: '_blank', rel: 'noopener noreferrer' }
    : { type: 'button' };

  return (
    <Component
      ref={ref}
      {...linkProps}
      onClick={disabled ? undefined : onClick}
      disabled={!href && disabled}
      aria-label={ariaLabel || (typeof children === 'string' ? children : undefined)}
      aria-disabled={disabled}
      variants={entranceVariants}
      initial="hidden"
      animate="visible"
      whileHover={disabled ? {} : { y: -2 }}
      whileTap={disabled ? {} : { scale: 0.97 }}
      transition={baseTransition}
      style={{
        x: springX,
        y: springY,
        background: TOKENS.gradient,
        boxShadow: isHovered && !disabled ? TOKENS.glowShadow : '0 0 0 rgba(0,0,0,0)',
        cursor: disabled ? 'not-allowed' : 'pointer',
        opacity: disabled ? 0.45 : 1,
      }}
      className={[
        'relative inline-flex items-center justify-center gap-2',
        'px-8 py-3.5 min-h-[44px] min-w-[44px]',
        'rounded-xl',
        'font-[Syne] font-semibold text-sm tracking-wide text-white',
        'select-none outline-none',
        'focus-visible:ring-2 focus-visible:ring-purple-400 focus-visible:ring-offset-2 focus-visible:ring-offset-[#0a0a0f]',
        'transition-shadow duration-300',
        className,
      ].join(' ')}
      {...magnetHandlers}
      {...rest}
    >
      <ShimmerOverlay active={isHovered && !disabled} />
      <span className="relative z-10 flex items-center gap-2">{children}</span>
    </Component>
  );
}

/* ═════════════════════════════════════════════
   2. SecondaryButton
   ═════════════════════════════════════════════ */
export function SecondaryButton({
  children,
  onClick,
  href,
  disabled = false,
  className = '',
  ariaLabel,
  ...rest
}) {
  useEffect(injectKeyframes, []);

  const { ref, springX, springY, isHovered, magnetHandlers } = useMagnetic(0.3);

  const Component = href ? motion.a : motion.button;
  const linkProps = href
    ? { href, target: '_blank', rel: 'noopener noreferrer' }
    : { type: 'button' };

  return (
    <Component
      ref={ref}
      {...linkProps}
      onClick={disabled ? undefined : onClick}
      disabled={!href && disabled}
      aria-label={ariaLabel || (typeof children === 'string' ? children : undefined)}
      aria-disabled={disabled}
      variants={entranceVariants}
      initial="hidden"
      animate="visible"
      whileHover={disabled ? {} : { y: -2 }}
      whileTap={disabled ? {} : { scale: 0.97 }}
      transition={baseTransition}
      style={{
        x: springX,
        y: springY,
        background: isHovered && !disabled ? TOKENS.gradient : 'transparent',
        border: `1px solid ${isHovered && !disabled ? 'transparent' : TOKENS.primary}`,
        boxShadow:
          isHovered && !disabled
            ? TOKENS.glowShadow
            : '0 0 0 rgba(0,0,0,0)',
        cursor: disabled ? 'not-allowed' : 'pointer',
        opacity: disabled ? 0.45 : 1,
      }}
      className={[
        'relative inline-flex items-center justify-center gap-2',
        'px-8 py-3.5 min-h-[44px] min-w-[44px]',
        'rounded-xl',
        'font-[Syne] font-semibold text-sm tracking-wide',
        'select-none outline-none',
        'focus-visible:ring-2 focus-visible:ring-purple-400 focus-visible:ring-offset-2 focus-visible:ring-offset-[#0a0a0f]',
        'transition-all duration-300',
        isHovered && !disabled ? 'text-white' : 'text-purple-400',
        className,
      ].join(' ')}
      {...magnetHandlers}
      {...rest}
    >
      <ShimmerOverlay active={isHovered && !disabled} />
      <span className="relative z-10 flex items-center gap-2">{children}</span>
    </Component>
  );
}

/* ═════════════════════════════════════════════
   3. IconSocialButton
   ═════════════════════════════════════════════ */
export function IconSocialButton({
  icon,
  href,
  label,
  onClick,
  disabled = false,
  className = '',
  shape = 'circle', // 'circle' | 'square'
  ...rest
}) {
  const Component = href ? motion.a : motion.button;
  const linkProps = href
    ? { href, target: '_blank', rel: 'noopener noreferrer' }
    : { type: 'button' };

  return (
    <Component
      {...linkProps}
      onClick={disabled ? undefined : onClick}
      disabled={!href && disabled}
      aria-label={label}
      title={label}
      variants={entranceVariants}
      initial="hidden"
      animate="visible"
      whileHover={
        disabled
          ? {}
          : {
              scale: 1.1,
              borderColor: TOKENS.primary,
              boxShadow: `0 0 20px rgba(168,85,247,0.4), inset 0 0 20px rgba(168,85,247,0.05)`,
            }
      }
      whileTap={disabled ? {} : { scale: 0.95 }}
      transition={baseTransition}
      style={{
        cursor: disabled ? 'not-allowed' : 'pointer',
        opacity: disabled ? 0.45 : 1,
      }}
      className={[
        'relative inline-flex items-center justify-center',
        'w-12 h-12 min-w-[44px] min-h-[44px]',
        shape === 'circle' ? 'rounded-full' : 'rounded-xl',
        'bg-white/5 backdrop-blur-md',
        'border border-white/10',
        'text-white/70 hover:text-white',
        'select-none outline-none',
        'focus-visible:ring-2 focus-visible:ring-purple-400 focus-visible:ring-offset-2 focus-visible:ring-offset-[#0a0a0f]',
        'transition-colors duration-300',
        className,
      ].join(' ')}
      {...rest}
    >
      {icon}
    </Component>
  );
}

/* ═════════════════════════════════════════════
   4. SubmitButton
   ═════════════════════════════════════════════ */
export function SubmitButton({
  children = 'Send Message',
  onClick,
  disabled = false,
  isLoading = false,
  isSuccess = false,
  className = '',
  ariaLabel,
  ...rest
}) {
  useEffect(injectKeyframes, []);

  const { ref, springX, springY, isHovered, magnetHandlers } = useMagnetic(0.25);

  const isDisabled = disabled || isLoading || isSuccess;

  /* Determine displayed content */
  let content;
  if (isSuccess) {
    content = (
      <motion.span
        key="success"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.8 }}
        className="flex items-center gap-2 text-emerald-300"
      >
        <Checkmark />
        Sent!
      </motion.span>
    );
  } else if (isLoading) {
    content = (
      <motion.span
        key="loading"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="flex items-center gap-2"
      >
        <Spinner />
        Sending…
      </motion.span>
    );
  } else {
    content = (
      <motion.span
        key="idle"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="flex items-center gap-2"
      >
        {children}
      </motion.span>
    );
  }

  return (
    <motion.button
      ref={ref}
      type="submit"
      onClick={isDisabled ? undefined : onClick}
      disabled={isDisabled}
      aria-label={
        ariaLabel ||
        (isLoading ? 'Sending message' : isSuccess ? 'Message sent' : undefined)
      }
      aria-disabled={isDisabled}
      aria-busy={isLoading}
      variants={entranceVariants}
      initial="hidden"
      animate="visible"
      whileHover={isDisabled ? {} : { y: -2 }}
      whileTap={isDisabled ? {} : { scale: 0.97 }}
      transition={baseTransition}
      style={{
        x: springX,
        y: springY,
        background: isSuccess
          ? 'linear-gradient(135deg, #065f46, #059669)'
          : TOKENS.gradient,
        boxShadow:
          isHovered && !isDisabled
            ? TOKENS.glowShadow
            : isSuccess
            ? '0 0 30px rgba(16,185,129,0.4)'
            : '0 0 0 rgba(0,0,0,0)',
        cursor: isDisabled ? 'not-allowed' : 'pointer',
        opacity: disabled ? 0.45 : 1,
      }}
      className={[
        'relative w-full inline-flex items-center justify-center gap-2',
        'px-8 py-4 min-h-[48px]',
        'rounded-xl',
        'font-[Syne] font-semibold text-sm tracking-wide text-white',
        'select-none outline-none',
        'focus-visible:ring-2 focus-visible:ring-purple-400 focus-visible:ring-offset-2 focus-visible:ring-offset-[#0a0a0f]',
        'transition-shadow duration-300',
        className,
      ].join(' ')}
      {...magnetHandlers}
      {...rest}
    >
      <ShimmerOverlay active={isHovered && !isDisabled && !isSuccess} />
      <span className="relative z-10">
        <AnimatePresence mode="wait">{content}</AnimatePresence>
      </span>
    </motion.button>
  );
}
