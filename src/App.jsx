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
import GhostCursor from "./components/three/GhostCursor";

export default function App() {
  // Initialize Lenis smooth scroll
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smooth: true,
      smoothTouch: false,
    });

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
    };
  }, []);

  return (
    <div className="relative min-h-screen bg-bg-primary text-text-primary overflow-x-hidden">
      {/* Global Ghost Cursor Effect */}
      <div className="fixed inset-0 pointer-events-none z-0">
        <Suspense fallback={null}>
          <GhostCursor
            color="#a855f7"
            brightness={0.8}
            trailLength={35}
            inertia={0.45}
            bloomStrength={0.4}
            bloomRadius={0.8}
            bloomThreshold={0}
            grainIntensity={0.03}
            fadeDelayMs={1200}
            fadeDurationMs={1800}
            className="opacity-40"
          />
        </Suspense>
      </div>

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
