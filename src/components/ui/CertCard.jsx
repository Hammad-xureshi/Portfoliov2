import { motion } from "framer-motion";
import { Award } from "lucide-react";

export default function CertCard({ cert }) {
  return (
    <motion.div
      className="group glass-card rounded-2xl overflow-hidden border-glow-hover transition-all duration-500"
      variants={{
        hidden: { opacity: 0, scale: 0.8 },
        visible: {
          opacity: 1,
          scale: 1,
          transition: { duration: 0.5, ease: [0.25, 0.1, 0.25, 1] },
        },
      }}
      whileHover={{
        y: -6,
        boxShadow: "0 20px 50px rgba(168,85,247,0.2)",
      }}
    >
      {cert.image ? (
        <div className="h-44 overflow-hidden">
          {/* IMAGE: cert-{cert.id} */}
          <img
            src={cert.image}
            alt={cert.name}
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
          />
        </div>
      ) : (
        <div className="h-44 flex items-center justify-center bg-gradient-to-br from-purple-deep/60 to-bg-card">
          <Award className="w-16 h-16 text-purple-bright/40 group-hover:text-purple-bright/70 transition-colors duration-500" />
        </div>
      )}

      <div className="p-5">
        <h3 className="font-syne text-base font-700 text-text-primary mb-1 group-hover:text-purple-bright transition-colors duration-300">
          {cert.name}
        </h3>
        <p className="text-text-secondary text-sm">{cert.issuer}</p>
        <p className="text-text-muted text-xs mt-1 font-mono">{cert.year}</p>
      </div>
    </motion.div>
  );
}
