import { useRef, useEffect, useState } from "react";
import { motion, useInView } from "framer-motion";
import GhostCursor from "../three/GhostCursor";
import SectionHeading from "../ui/SectionHeading";
import { aboutText, stats } from "../../data/portfolioData";

function AnimatedCounter({ value, suffix = "" }) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.5 });

  useEffect(() => {
    if (!isInView) return;

    let start = 0;
    const duration = 2000;
    const startTime = Date.now();

    const animate = () => {
      const elapsed = Date.now() - startTime;
      const progress = Math.min(elapsed / duration, 1);
      // Ease out cubic
      const eased = 1 - Math.pow(1 - progress, 3);
      const current = Math.floor(eased * value);
      setCount(current);

      if (progress < 1) {
        requestAnimationFrame(animate);
      }
    };

    requestAnimationFrame(animate);
  }, [isInView, value]);

  return (
    <span ref={ref} className="font-syne text-3xl md:text-4xl font-800 text-gradient">
      {count}
      {suffix}
    </span>
  );
}

export default function About() {
  return (
    <section id="about" className="relative section-padding bg-bg-secondary">
      {/* Ghost Cursor Background Effect - About Section */}
      <div className="absolute inset-0 z-0 opacity-30">
        <GhostCursor
          color="#a855f7"
          brightness={0.6}
          trailLength={20}
          inertia={0.6}
          bloomStrength={0.3}
          bloomRadius={0.6}
          bloomThreshold={0.1}
          grainIntensity={0.02}
          fadeDelayMs={800}
          fadeDurationMs={1500}
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto">
        <SectionHeading title="About Me" />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left - Bio */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
          >
            <p className="text-text-secondary text-base md:text-lg leading-relaxed font-dm">
              {aboutText}
            </p>
          </motion.div>

          {/* Right - Stats */}
          <motion.div
            className="grid grid-cols-2 gap-4"
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{
              duration: 0.6,
              delay: 0.2,
              ease: [0.25, 0.1, 0.25, 1],
            }}
          >
            {stats.map((stat, i) => (
              <motion.div
                key={stat.label}
                className="glass-card rounded-2xl p-5 md:p-6 border-glow-hover text-center transition-all duration-300"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 * i + 0.3 }}
                whileHover={{
                  y: -4,
                  boxShadow: "0 15px 40px rgba(168,85,247,0.15)",
                }}
              >
                <div className="text-3xl mb-3">{stat.icon}</div>
                <AnimatedCounter value={stat.value} suffix={stat.suffix} />
                <p className="text-text-muted text-xs mt-2 font-dm">
                  {stat.label}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
