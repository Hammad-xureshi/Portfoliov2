import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { navLinks } from "../../data/portfolioData";
import { scrollToElement } from "../../utils/scroll";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("#hero");

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);

      // Determine active section
      const sections = navLinks.map((link) => link.href.slice(1));
      for (let i = sections.length - 1; i >= 0; i--) {
        const el = document.getElementById(sections[i]);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 150) {
            setActiveSection(`#${sections[i]}`);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (e, href) => {
    e.preventDefault();
    setIsOpen(false);
    scrollToElement(href);
  };

  return (
    <>
      {/* Scroll Progress Bar */}
      <ScrollProgress />

      <motion.nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? "glass py-3 shadow-[0_10px_32px_rgba(15,23,42,0.08)]"
            : "bg-transparent py-5"
        }`}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          <motion.a
            href="#hero"
            onClick={(e) => handleNavClick(e, "#hero")}
            className="relative flex items-center gap-2 font-syne text-xl font-bold tracking-[0.16em] text-gradient select-none"
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.96 }}
          >
            <span className="inline-flex h-8 w-8 items-center justify-center rounded-lg border border-violet-400/40 bg-violet-500/10 text-[0.7rem]">HN</span>
          </motion.a>

          <div className="hidden lg:flex items-center gap-1 rounded-full border border-violet-200/80 bg-white/80 px-2 py-2 shadow-[0_6px_24px_rgba(124,58,237,0.08)] backdrop-blur-md">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className={`relative px-4 py-2 text-sm font-dm font-medium rounded-full transition-colors duration-300 ${
                  activeSection === link.href
                    ? "text-violet-700"
                    : "text-slate-600 hover:text-slate-900"
                }`}
              >
                {link.label}
                {activeSection === link.href && (
                  <motion.div
                    className="absolute inset-x-2 bottom-1 h-[2px] rounded-full"
                    style={{
                      background: "linear-gradient(to right, #6d28d9, #8b5cf6, #a78bfa)",
                      boxShadow: "0 0 14px rgba(109, 40, 217, 0.25)",
                    }}
                    layoutId="activeNav"
                    transition={{
                      type: "spring",
                      stiffness: 380,
                      damping: 30,
                    }}
                  />
                )}
              </a>
            ))}
          </div>

          <button
            className="lg:hidden p-2 rounded-lg border border-violet-200 bg-white/80 text-text-primary shadow-sm"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </motion.nav>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              className="fixed inset-0 bg-black/60 z-40 lg:hidden"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
            />

            {/* Drawer */}
            <motion.div
              className="fixed top-0 right-0 h-full w-72 bg-white/90 z-50 lg:hidden border-l border-violet-200 backdrop-blur-xl"
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
            >
              <div className="p-6 pt-20 flex flex-col gap-2">
                {navLinks.map((link, i) => (
                  <motion.a
                    key={link.href}
                    href={link.href}
                    onClick={(e) => handleNavClick(e, link.href)}
                    className={`block px-4 py-3 rounded-xl font-dm text-base font-medium transition-all duration-300 ${
                      activeSection === link.href
                        ? "text-violet-700 bg-violet-50 border border-violet-200"
                        : "text-slate-700 hover:text-slate-900 hover:bg-slate-50"
                    }`}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.05 }}
                  >
                    {link.label}
                  </motion.a>
                ))}
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}

function ScrollProgress() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollHeight =
        document.documentElement.scrollHeight - window.innerHeight;
      const scrolled = window.scrollY;
      setProgress(scrolled / scrollHeight);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.div
      className="fixed top-0 left-0 right-0 h-[3px] z-[60] origin-left"
      style={{
        scaleX: progress,
        background: "linear-gradient(to right, #6d28d9, #8b5cf6, #a78bfa)",
        boxShadow: "0 0 15px rgba(109, 40, 217, 0.25)",
      }}
    />
  );
}
