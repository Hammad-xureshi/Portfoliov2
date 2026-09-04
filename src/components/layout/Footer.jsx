import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";
import { SiTryhackme } from "react-icons/si";
import { ArrowUp, ShieldCheck, Mail } from "lucide-react";
import { IconSocialButton } from "../ui/Button";
import { personalInfo } from "../../data/portfolioData";
import { scrollToTop } from "../../utils/scroll";

export default function Footer() {
  const socialLinks = [
    { icon: FaGithub, href: personalInfo.socials.github, label: "GitHub" },
    { icon: FaLinkedin, href: personalInfo.socials.linkedin, label: "LinkedIn" },
    { icon: FaInstagram, href: personalInfo.socials.instagram, label: "Instagram" },
    { icon: SiTryhackme, href: personalInfo.socials.tryhackme, label: "TryHackMe" },
  ];

  return (
    <footer className="relative border-t border-violet-200/80 py-10 px-4 bg-white/90">
      <div className="max-w-7xl mx-auto flex flex-col items-center gap-6">
        <div className="flex flex-col items-center gap-1">
          <p className="font-syne text-lg font-bold text-slate-900">Hammad Naeem</p>
          <p className="flex items-center gap-1.5 text-slate-600 text-sm font-dm">
            <ShieldCheck size={14} className="text-violet-300" />
            Founder & CEO, NineByte Security
          </p>
        </div>

        <div className="flex gap-4">
          {socialLinks.map(({ icon: Icon, href, label }) => (
            <IconSocialButton key={label} href={href} label={label} icon={<Icon size={18} />} />
          ))}
        </div>

        <a href={`mailto:${personalInfo.email}`} className="flex items-center gap-2 text-slate-700 text-sm font-dm hover:text-violet-700 transition-colors duration-300">
          <Mail size={14} className="text-violet-300" />
          {personalInfo.email}
        </a>

        <p className="text-slate-500 text-xs font-dm text-center">
          © {new Date().getFullYear()} Hammad Naeem. Built with React, Three.js & TailwindCSS. All rights reserved.
        </p>

        <IconSocialButton onClick={scrollToTop} label="Back to top" icon={<ArrowUp size={18} />} />
      </div>
    </footer>
  );
}