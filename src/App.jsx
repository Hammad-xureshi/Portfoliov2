import { useEffect, Suspense } from "react";
import Lenis from "lenis";
import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";
import Hero from "./components/sections/Hero";
import About from "./components/sections/About";
import Skills from "./components/sections/Skills";
import Projects from "./components/sections/Projects";
import CTF from "./components/sections/CTF";
import Journey from "./components/sections/Journey";
import Certifications from "./components/sections/Certifications";
import Contact from "./components/sections/Contact";

export default function App() {
  // Initialize Lenis smooth scroll
  useEffect(() => {
    const prefersReducedMotion =
      typeof window !== "undefined" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const isMobile =
      typeof window !== "undefined" &&
      window.matchMedia("(max-width: 767px)").matches;

    if (prefersReducedMotion || isMobile) return undefined;

    const lenis = new Lenis({
      duration: 0.45,
      easing: (t) => 1 - Math.pow(1 - t, 4),
      smooth: true,
      smoothTouch: false,
    });

    window.__lenis = lenis;

    let animationFrame;
    function raf(time) {
      lenis.raf(time);
      animationFrame = requestAnimationFrame(raf);
    }

    animationFrame = requestAnimationFrame(raf);

    return () => {
      cancelAnimationFrame(animationFrame);
      window.__lenis = undefined;
      lenis.destroy();
    };
  }, []);

  return (
    <div className="ambient-shell relative min-h-screen bg-bg-primary text-text-primary overflow-x-hidden">
      <div className="pointer-events-none fixed inset-0 bg-grid opacity-20" />
      <div className="pointer-events-none fixed inset-x-0 top-0 h-64 bg-gradient-to-b from-violet-500/5 to-transparent" />
      <Navbar />

      <main className="relative z-10">
        <Hero />
        <About />
        <Skills />
        <Projects />
        <CTF />
        <Journey />
        <Certifications />
        <Contact />
      </main>

      <Footer />
    </div>
  );
}
