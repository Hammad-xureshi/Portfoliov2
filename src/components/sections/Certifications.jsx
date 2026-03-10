import { motion } from "framer-motion";
import GhostCursor from "../three/GhostCursor";
import SectionHeading from "../ui/SectionHeading";
import CertCard from "../ui/CertCard";
import { certifications } from "../../data/portfolioData";

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: 0.1 },
  },
};

export default function Certifications() {
  return (
    <section id="certifications" className="relative section-padding">
      {/* Ghost Cursor Background Effect - Certifications Section */}
      <div className="absolute inset-0 z-0 opacity-40">
        <GhostCursor
          color="#8b5cf6"
          brightness={0.7}
          trailLength={26}
          inertia={0.54}
          bloomStrength={0.45}
          bloomRadius={0.75}
          bloomThreshold={0.06}
          grainIntensity={0.015}
          fadeDelayMs={900}
          fadeDurationMs={1500}
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto">
        <SectionHeading
          title="Certifications"
          subtitle="Recognized achievements and continuous learning"
        />

        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
        >
          {certifications.map((cert) => (
            <CertCard key={cert.id} cert={cert} />
          ))}
        </motion.div>
      </div>
    </section>
  );
}
