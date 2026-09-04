import { motion } from "framer-motion";
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
