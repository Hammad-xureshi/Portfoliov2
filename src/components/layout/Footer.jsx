import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";
import { SiTryhackme } from "react-icons/si";
import { ArrowUp } from "lucide-react";
import { IconSocialButton } from "../ui/Button";
import { personalInfo } from "../../data/portfolioData";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

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

  return (
    <footer className="relative border-t border-border-purple py-10 px-4">
      <div className="max-w-7xl mx-auto flex flex-col items-center gap-6">
        {/* Social Icons */}
        <div className="flex gap-4">
          {socialLinks.map(({ icon: Icon, href, label }) => (
            <IconSocialButton
              key={label}
              href={href}
              label={label}
              icon={<Icon size={18} />}
            />
          ))}
        </div>

        {/* Copyright */}
        <p className="text-text-muted text-sm font-dm text-center">
          Made by Hammad Naeem  Front-End Developer
        </p>

        {/* Back to top */}
        <IconSocialButton
          onClick={scrollToTop}
          label="Back to top"
          icon={<ArrowUp size={18} />}
        />
      </div>
    </footer>
  );
}
