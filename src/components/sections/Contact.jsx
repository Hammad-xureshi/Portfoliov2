import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Send, CheckCircle, Mail } from "lucide-react";
import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";
import { SiTryhackme } from "react-icons/si";
import GhostCursor from "../three/GhostCursor";
import { SubmitButton, SecondaryButton } from "../ui/Button";
import SectionHeading from "../ui/SectionHeading";
import { personalInfo } from "../../data/portfolioData";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [errors, setErrors] = useState({});

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

  const validate = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = "Name is required";
    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Email is invalid";
    }
    if (!formData.message.trim()) newErrors.message = "Message is required";
    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newErrors = validate();
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }
    setErrors({});
    setSubmitted(true);
    setFormData({ name: "", email: "", message: "" });
    setTimeout(() => setSubmitted(false), 4000);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: "" }));
    }
  };

  return (
    <section id="contact" className="relative section-padding bg-bg-secondary">
      {/* Ghost Cursor Background Effect - Contact Section */}
      <div className="absolute inset-0 z-0 opacity-45">
        <GhostCursor
          color="#d946ef"
          brightness={0.85}
          trailLength={32}
          inertia={0.48}
          bloomStrength={0.6}
          bloomRadius={0.95}
          bloomThreshold={0.02}
          grainIntensity={0.025}
          fadeDelayMs={800}
          fadeDurationMs={1300}
        />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto">
        <SectionHeading
          title="Get In Touch"
          subtitle="Have a project in mind or just want to say hi?"
        />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 mt-12">
          {/* Left - Text + Socials */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
          >
            <p className="text-text-secondary text-base md:text-lg leading-relaxed mb-8 font-dm">
              Whether you have a project, want to collaborate, or just want to
              say hi — my inbox is open. I&apos;ll get back to you as soon as
              possible!
            </p>

            {/* Email */}
            <div className="flex items-center gap-3 mb-8">
              <div className="p-3 rounded-xl bg-purple-deep/60 border border-purple-bright/20">
                <Mail size={20} className="text-purple-bright" />
              </div>
              <a
                href={`mailto:${personalInfo.email}`}
                className="text-text-secondary hover:text-purple-bright transition-colors duration-300 font-dm"
              >
                {personalInfo.email}
              </a>
            </div>

            {/* Social Links */}
            <div className="flex flex-wrap gap-3">
              {socialLinks.map(({ icon: Icon, href, label }) => (
                <SecondaryButton
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  title={label}
                >
                  <Icon size={18} />
                  {label}
                </SecondaryButton>
              ))}
            </div>
          </motion.div>

          {/* Right - Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{
              duration: 0.6,
              delay: 0.2,
              ease: [0.25, 0.1, 0.25, 1],
            }}
          >
            <form
              onSubmit={handleSubmit}
              className="glass-card rounded-2xl p-6 md:p-8 space-y-5"
            >
              {/* Name */}
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-dm font-500 text-text-secondary mb-2"
                >
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className={`w-full px-4 py-3 rounded-xl bg-bg-primary border text-text-primary font-dm text-sm placeholder:text-text-muted focus:outline-none focus:border-purple-bright/50 focus:ring-1 focus:ring-purple-bright/30 transition-all duration-300 ${
                    errors.name
                      ? "border-red-500/50"
                      : "border-border-purple"
                  }`}
                  placeholder="Your name"
                />
                {errors.name && (
                  <p className="text-red-400 text-xs mt-1">{errors.name}</p>
                )}
              </div>

              {/* Email */}
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-dm font-500 text-text-secondary mb-2"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className={`w-full px-4 py-3 rounded-xl bg-bg-primary border text-text-primary font-dm text-sm placeholder:text-text-muted focus:outline-none focus:border-purple-bright/50 focus:ring-1 focus:ring-purple-bright/30 transition-all duration-300 ${
                    errors.email
                      ? "border-red-500/50"
                      : "border-border-purple"
                  }`}
                  placeholder="your@email.com"
                />
                {errors.email && (
                  <p className="text-red-400 text-xs mt-1">{errors.email}</p>
                )}
              </div>

              {/* Message */}
              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-dm font-500 text-text-secondary mb-2"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows="5"
                  value={formData.message}
                  onChange={handleChange}
                  className={`w-full px-4 py-3 rounded-xl bg-bg-primary border text-text-primary font-dm text-sm placeholder:text-text-muted focus:outline-none focus:border-purple-bright/50 focus:ring-1 focus:ring-purple-bright/30 transition-all duration-300 resize-none ${
                    errors.message
                      ? "border-red-500/50"
                      : "border-border-purple"
                  }`}
                  placeholder="Your message..."
                />
                {errors.message && (
                  <p className="text-red-400 text-xs mt-1">{errors.message}</p>
                )}
              </div>

              {/* Submit */}
              <SubmitButton
                disabled={Object.keys(errors).length > 0}
                isLoading={false}
                isSuccess={submitted}
              >
                Send Message
                <Send size={18} />
              </SubmitButton>
            </form>
          </motion.div>
        </div>
      </div>

      {/* Success Toast */}
      <AnimatePresence>
        {submitted && (
          <motion.div
            className="fixed bottom-8 right-8 z-50 glass-card rounded-xl p-4 px-6 flex items-center gap-3 border border-green-500/30 shadow-2xl"
            initial={{ opacity: 0, y: 40, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.9 }}
            transition={{ type: "spring", stiffness: 300, damping: 25 }}
          >
            <CheckCircle size={20} className="text-green-400" />
            <span className="text-text-primary font-dm text-sm font-500">
              Message sent! 🚀
            </span>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
