import { useEffect, useRef, useState } from "react";
import { motion, useMotionTemplate, useScroll, useTransform } from "framer-motion";
import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";
import { SiTryhackme } from "react-icons/si";
import { Download, ArrowRight } from "lucide-react";
import { PrimaryButton, SecondaryButton, IconSocialButton } from "../ui/Button";
import { scrollToElement } from "../../utils/scroll";
import { personalInfo } from "../../data/portfolioData";

export default function Hero() {
  const [displayedName, setDisplayedName] = useState("");
  const heroRef = useRef(null);
  const fullName = personalInfo.name;
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });
  const heroScale = useTransform(scrollYProgress, [0, 1], [1, 1.1]);
  const heroBlur = useTransform(scrollYProgress, [0, 1], [0, 7]);
  const heroFilter = useMotionTemplate`blur(${heroBlur}px)`;
  const textX = useTransform(scrollYProgress, [0, 1], [0, -90]);
  const portraitX = useTransform(scrollYProgress, [0, 1], [0, 90]);
  const textOpacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);
  const portraitOpacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);
  const textBlur = useTransform(scrollYProgress, [0, 1], [0, 5]);
  const portraitBlur = useTransform(scrollYProgress, [0, 1], [0, 8]);
  const textFilter = useMotionTemplate`blur(${textBlur}px)`;
  const portraitFilter = useMotionTemplate`blur(${portraitBlur}px)`;

  useEffect(() => {
    let i = 0;
    const timer = setInterval(() => {
      setDisplayedName(fullName.slice(0, i + 1));
      i++;
      if (i >= fullName.length) clearInterval(timer);
    }, 80);
    return () => clearInterval(timer);
  }, [fullName]);

  const socialLinks = [
    { icon: FaGithub, href: personalInfo.socials.github, label: "GitHub" },
    { icon: FaLinkedin, href: personalInfo.socials.linkedin, label: "LinkedIn" },
    { icon: FaInstagram, href: personalInfo.socials.instagram, label: "Instagram" },
    { icon: SiTryhackme, href: personalInfo.socials.tryhackme, label: "TryHackMe" },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.15, delayChildren: 0.3 } },
  };

  const childVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: [0.25, 0.1, 0.25, 1] },
    },
  };

  return (
    <section ref={heroRef} id="hero" className="relative min-h-[120vh] overflow-hidden bg-hero-gradient lg:min-h-[150vh]">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(124,58,237,0.08),transparent_36%)]" />

      <motion.div
        className="sticky top-0 z-10 mx-auto flex min-h-screen w-full max-w-7xl items-center px-4 py-24 sm:px-6 sm:py-28 lg:px-8 lg:py-0"
        style={{ scale: heroScale, filter: heroFilter }}
      >
        <div className="grid grid-cols-1 lg:grid-cols-[1.05fr_0.95fr] gap-12 lg:gap-10 items-center">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            style={{ x: textX, opacity: textOpacity, filter: textFilter }}
          >
            <motion.div variants={childVariants} className="mb-6 inline-flex items-center gap-2 rounded-full border border-violet-300/30 bg-white/70 px-3 py-1.5 text-[10px] font-mono uppercase tracking-[0.28em] text-violet-700 shadow-sm">
              <span className="h-2 w-2 rounded-full bg-violet-600 shadow-[0_0_16px_rgba(109,40,217,0.6)]" />
              Security Engineer / Builder
            </motion.div>

            <motion.h1 variants={childVariants} className="font-syne text-4xl sm:text-5xl md:text-6xl lg:text-[5.2rem] font-normal tracking-[-0.06em] leading-[0.9] mb-5 text-slate-900">
              <span className="text-gradient">{displayedName}</span>
              <motion.span
                className="inline-block w-[3px] h-[0.82em] bg-violet-700 ml-2 align-middle"
                animate={{ opacity: [1, 0] }}
                transition={{ duration: 0.7, repeat: Infinity, repeatType: "reverse" }}
              />
            </motion.h1>

            <motion.div variants={childVariants} className="mb-4">
              <p className="font-dm text-lg md:text-xl text-slate-700 font-medium">
                {personalInfo.tagline}
              </p>
            </motion.div>

            <motion.p variants={childVariants} className="font-dm text-base md:text-lg text-slate-600 mb-8 max-w-xl leading-relaxed">
              {personalInfo.subTagline}
            </motion.p>

            <motion.div variants={childVariants} className="flex flex-wrap gap-4 mb-8">
              <PrimaryButton onClick={() => scrollToElement("#projects")}>View My Work <ArrowRight size={18} /></PrimaryButton>
              <SecondaryButton href={personalInfo.resumeUrl} download="Hammad_Naeem_Resume.pdf" target="_self" ariaLabel="Download CV">Download CV <Download size={18} /></SecondaryButton>
            </motion.div>

            <motion.div variants={childVariants} className="flex gap-3">
              {socialLinks.map(({ icon: Icon, href, label }) => (
                <IconSocialButton key={label} href={href} label={label} icon={<Icon size={20} />} shape="square" />
              ))}
            </motion.div>
          </motion.div>

          <motion.div
            className="relative mt-4 flex items-center justify-center lg:mt-0"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.5, ease: [0.25, 0.1, 0.25, 1] }}
            style={{ x: portraitX, opacity: portraitOpacity, filter: portraitFilter }}
          >
            <div className="absolute inset-0 mx-auto h-full w-full max-w-[360px] rounded-[3rem] bg-[radial-gradient(circle,_rgba(124,58,237,0.16),_rgba(255,255,255,0)_65%)] blur-2xl sm:max-w-[420px]" />

            <div className="relative z-10">
              <div className="absolute -inset-3 rounded-[2.75rem] border border-violet-200/80 bg-white/50 shadow-[0_20px_60px_rgba(109,40,217,0.08)]" />

              <div className="relative w-60 h-72 sm:w-72 sm:h-[22rem] md:w-[22rem] md:h-[28rem] rounded-[2.25rem] border border-white/90 bg-white/65 shadow-[0_24px_70px_rgba(109,40,217,0.14)] backdrop-blur-sm">
                <div className="relative h-full w-full overflow-hidden rounded-[2.25rem] border border-violet-200/70 bg-[linear-gradient(145deg,#ffffff,#f5f3ff_55%,#ede9fe)]">
                  <motion.div
                    className="absolute -inset-24 rounded-full border border-violet-400/20"
                    animate={{ rotate: 360 }}
                    transition={{ duration: 28, repeat: Infinity, ease: "linear" }}
                  />
                  <motion.div
                    className="absolute left-1/2 top-[34%] h-48 w-48 -translate-x-1/2 -translate-y-1/2 rounded-full bg-violet-400/20 blur-3xl"
                    animate={{ scale: [0.9, 1.12, 0.9], opacity: [0.4, 0.7, 0.4] }}
                    transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
                  />
                  <motion.div
                    className="absolute left-[18%] top-[22%] h-3 w-3 rounded-full bg-fuchsia-300/80 blur-[2px]"
                    animate={{ x: [0, 34, 10, 0], y: [0, 18, 42, 0], opacity: [0.2, 0.8, 0.35, 0.2] }}
                    transition={{ duration: 9, repeat: Infinity, ease: "easeInOut" }}
                  />
                  <motion.div
                    className="absolute right-[16%] top-[46%] h-2 w-2 rounded-full bg-violet-500/70 blur-[1px]"
                    animate={{ x: [0, -24, -8, 0], y: [0, -22, 20, 0], opacity: [0.25, 0.75, 0.3, 0.25] }}
                    transition={{ duration: 8, repeat: Infinity, ease: "easeInOut", delay: 1.5 }}
                  />
                  <motion.div
                    className="absolute -left-1/3 top-1/3 h-px w-[170%] rotate-[-28deg] bg-gradient-to-r from-transparent via-violet-300/50 to-transparent"
                    animate={{ x: ["-18%", "18%"] }}
                    transition={{ duration: 6, repeat: Infinity, repeatType: "reverse", ease: "easeInOut" }}
                  />
                  <div className="absolute inset-0 opacity-15 [background-image:linear-gradient(rgba(109,40,217,0.2)_1px,transparent_1px),linear-gradient(90deg,rgba(109,40,217,0.2)_1px,transparent_1px)] [background-size:30px_30px]" />
                  <div className="absolute inset-x-0 bottom-0 h-2/5 bg-gradient-to-t from-violet-200/40 to-transparent" />
                  <img src={personalInfo.profilePhoto} alt={personalInfo.name} className="absolute inset-0 z-10 h-full w-full object-contain object-[center_0%] translate-y-4 scale-[1.28] sm:translate-y-6 sm:scale-[1.4] md:translate-y-8 md:scale-[1.55]" />
                  <div className="absolute bottom-3 left-3 z-20 flex max-w-[calc(100%-1.5rem)] items-center gap-2 rounded-full border border-white/70 bg-white/80 px-2.5 py-2 backdrop-blur-md sm:bottom-4 sm:left-4 sm:px-3">
                    <span className="h-2 w-2 rounded-full bg-emerald-500" />
                    <span className="truncate font-mono text-[8px] uppercase tracking-[0.14em] text-violet-700 sm:text-[9px] sm:tracking-[0.18em]">Available to build</span>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </motion.div>

      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 0.6 }}
      >
        <span className="text-slate-500 text-[10px] font-dm tracking-[0.35em] uppercase">Scroll</span>
        <motion.div className="w-5 h-8 rounded-full border border-violet-300/60 flex items-start justify-center p-1">
          <motion.div className="w-1.5 h-1.5 rounded-full bg-violet-600" animate={{ y: [0, 12, 0] }} transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }} />
        </motion.div>
      </motion.div>
    </section>
  );
}
