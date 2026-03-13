import { useEffect, useState, Suspense, lazy } from "react";
import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";
import { SiTryhackme } from "react-icons/si";
import { Download, ArrowRight } from "lucide-react";
import { PrimaryButton, SecondaryButton, IconSocialButton } from "../ui/Button";
import GhostCursor from "../three/GhostCursor";
import { personalInfo } from "../../data/portfolioData";

const FloatingGeometry = lazy(
  () => import("../three/FloatingGeometry")
);

export default function Hero() {
  const [displayedName, setDisplayedName] = useState("");
  const fullName = personalInfo.name;

  // Typewriter effect
  useEffect(() => {
    let i = 0;
    const timer = setInterval(() => {
      setDisplayedName(fullName.slice(0, i + 1));
      i++;
      if (i >= fullName.length) clearInterval(timer);
    }, 80);
    return () => clearInterval(timer);
  }, []);

  const socialLinks = [
    { icon: FaGithub, href: personalInfo.socials.github, label: "GitHub" },
    {
      icon: FaLinkedin,
      href: personalInfo.socials.linkedin,
      label: "LinkedIn",
    },
    {
      icon: FaInstagram,
      href: personalInfo.socials.instagram,
      label: "Instagram",
    },
    {
      icon: SiTryhackme,
      href: personalInfo.socials.tryhackme,
      label: "TryHackMe",
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15, delayChildren: 0.3 },
    },
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
    <section
      id="hero"
      className="relative min-h-screen flex items-center overflow-hidden bg-hero-gradient"
    >
      {/* Ghost Cursor Background Effect - Hero Section */}
      <div className="absolute inset-0 z-0 opacity-50">
        <GhostCursor
          color="#ec4899"
          brightness={1.0}
          trailLength={25}
          inertia={0.5}
          bloomStrength={0.6}
          bloomRadius={1.0}
          bloomThreshold={0}
          grainIntensity={0}
          fadeDelayMs={600}
          fadeDurationMs={1200}
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full py-20 lg:py-0">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-8 items-center">
          {/* Left Side - Content */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            {/* Label */}
            <motion.p
              variants={childVariants}
              className="text-text-muted font-dm text-sm md:text-base mb-4 tracking-wider uppercase"
            >
              Hello, I&apos;m
            </motion.p>

            {/* Name with typewriter */}
            <motion.h1
              variants={childVariants}
              className="font-syne text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-800 tracking-tight mb-4 leading-[1.1]"
            >
              <span className="text-gradient">{displayedName}</span>
              <motion.span
                className="inline-block w-[3px] h-[0.85em] bg-purple-bright ml-1 align-middle"
                animate={{ opacity: [1, 0] }}
                transition={{
                  duration: 0.6,
                  repeat: Infinity,
                  repeatType: "reverse",
                }}
              />
            </motion.h1>

            {/* Tagline */}
            <motion.div variants={childVariants} className="mb-2">
              <p className="font-dm text-lg md:text-xl text-text-secondary font-500">
                {personalInfo.tagline}
              </p>
            </motion.div>

            {/* Sub-tagline */}
            <motion.p
              variants={childVariants}
              className="font-dm text-base text-text-muted mb-8 max-w-md"
            >
              {personalInfo.subTagline}
            </motion.p>

            {/* Buttons */}
            <motion.div
              variants={childVariants}
              className="flex flex-wrap gap-4 mb-8"
            >
              <PrimaryButton
                onClick={() =>
                  document
                    .querySelector("#projects")
                    ?.scrollIntoView({ behavior: "smooth" })
                }
              >
                View My Work
                <ArrowRight size={18} />
              </PrimaryButton>
              <SecondaryButton
                href={personalInfo.resumeUrl}
                download="Hammad_Naeem_Resume.pdf"
                target="_self"
                ariaLabel="Download CV"
              >
                Download CV
                <Download size={18} />
              </SecondaryButton>
            </motion.div>

            {/* Social Icons */}
            <motion.div
              variants={childVariants}
              className="flex gap-3"
            >
              {socialLinks.map(({ icon: Icon, href, label }) => (
                <IconSocialButton
                  key={label}
                  href={href}
                  label={label}
                  icon={<Icon size={20} />}
                  shape="square"
                />
              ))}
            </motion.div>
          </motion.div>

          {/* Right Side - Profile Photo + 3D */}
          <motion.div
            className="relative flex items-center justify-center"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              duration: 0.8,
              delay: 0.5,
              ease: [0.25, 0.1, 0.25, 1],
            }}
          >
            {/* 3D Floating Geometry (behind photo) */}
            <div className="absolute inset-0 w-full h-full max-w-[450px] max-h-[450px] mx-auto">
              <Suspense fallback={null}>
                <FloatingGeometry />
              </Suspense>
            </div>

            {/* Profile Photo */}
            <div className="relative z-10">
              {/* Rotating ring */}
              <motion.div
                className="absolute -inset-4 rounded-full border-2 border-dashed border-purple-bright/20"
                animate={{ rotate: 360 }}
                transition={{
                  duration: 20,
                  repeat: Infinity,
                  ease: "linear",
                }}
              />
              <motion.div
                className="absolute -inset-8 rounded-full border border-purple-mid/10"
                animate={{ rotate: -360 }}
                transition={{
                  duration: 30,
                  repeat: Infinity,
                  ease: "linear",
                }}
              />

              {/* Photo container */}
              <div
                className="w-56 h-56 sm:w-64 sm:h-64 md:w-72 md:h-72 rounded-full overflow-hidden border-2 border-purple-bright/30 relative"
                style={{
                  boxShadow:
                    "0 0 60px rgba(168, 85, 247, 0.25), inset 0 0 40px rgba(168, 85, 247, 0.1)",
                }}
              >

                <img
                  src={personalInfo.profilePhoto}
                  alt={personalInfo.name}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-purple-deep/40 to-transparent" />
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 0.6 }}
      >
        <span className="text-text-muted text-xs font-dm tracking-widest uppercase">
          Scroll
        </span>
        <motion.div
          className="w-5 h-8 rounded-full border border-purple-bright/30 flex items-start justify-center p-1"
          animate={{}}
        >
          <motion.div
            className="w-1.5 h-1.5 rounded-full bg-purple-bright"
            animate={{ y: [0, 12, 0] }}
            transition={{
              duration: 1.8,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        </motion.div>
      </motion.div>
    </section>
  );
}
