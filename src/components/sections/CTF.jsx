import { motion } from "framer-motion";
import { Shield } from "lucide-react";
import GhostCursor from "../three/GhostCursor";
import SectionHeading from "../ui/SectionHeading";
import CTFCard from "../ui/CTFCard";
import { ctfChallenges } from "../../data/portfolioData";

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: 0.1 },
  },
};

export default function CTF() {
  return (
    <section id="ctf" className="relative section-padding">
      {/* Ghost Cursor Background Effect - CTF Section */}
      <div className="absolute inset-0 z-0 opacity-35">
        <GhostCursor
          color="#ef4444"
          brightness={0.75}
          trailLength={28}
          inertia={0.52}
          bloomStrength={0.55}
          bloomRadius={0.85}
          bloomThreshold={0.03}
          grainIntensity={0.02}
          fadeDelayMs={850}
          fadeDurationMs={1450}
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto">
        <SectionHeading
          title="CTF Journey"
          subtitle="My ethical hacking adventures through CTF platforms"
        />

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
        >
          {ctfChallenges.map((challenge) => (
            <CTFCard key={challenge.id} challenge={challenge} />
          ))}
        </motion.div>
      </div>
    </section>
  );
}
