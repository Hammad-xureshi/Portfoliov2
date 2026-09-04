import { motion } from "framer-motion";
import { Award } from "lucide-react";

export default function CertCard({ cert }) {
  return (
    <motion.div
      className="group glass-card rounded-2xl overflow-hidden transition-all duration-500"
      variants={{
        hidden: { opacity: 0, scale: 0.8 },
        visible: { opacity: 1, scale: 1, transition: { duration: 0.5, ease: [0.25, 0.1, 0.25, 1] } },
      }}
      whileHover={{ y: -6, boxShadow: "0 18px 42px rgba(124,58,237,0.10)" }}
    >
      {cert.image ? (
        <div className="h-44 overflow-hidden">
          <img src={cert.image} alt={cert.name} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
        </div>
      ) : (
        <div className="h-44 flex items-center justify-center bg-gradient-to-br from-violet-50 to-white">
          <Award className="w-16 h-16 text-violet-500/70 group-hover:text-violet-700 transition-colors duration-500" />
        </div>
      )}

      <div className="p-5">
        <h3 className="font-syne text-base font-normal text-slate-900 mb-1 group-hover:text-violet-700 transition-colors duration-300">{cert.name}</h3>
        <p className="text-slate-600 text-sm">{cert.issuer}</p>
        <p className="text-slate-500 text-xs mt-1 font-mono">{cert.year}</p>
      </div>
    </motion.div>
  );
}
