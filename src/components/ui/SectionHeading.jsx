import { motion } from "framer-motion";

export default function SectionHeading({ title, subtitle }) {
  return (
    <motion.div
      className="text-center mb-16 md:mb-20"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
    >
      <div className="inline-flex items-center gap-2 rounded-full border border-violet-200 bg-white/80 px-3 py-1.5 text-[10px] font-mono uppercase tracking-[0.28em] text-violet-700 mb-5 shadow-sm">
        <span className="h-2 w-2 rounded-full bg-violet-600 shadow-[0_0_12px_rgba(109,40,217,0.45)]" />
        Portfolio
      </div>
      <h2 className="font-syne text-3xl sm:text-4xl md:text-5xl font-normal text-text-primary mb-4 tracking-[-0.05em]">
        {title}
      </h2>
      <motion.div
        className="h-1 w-20 mx-auto rounded-full bg-button-gradient"
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.8, delay: 0.3, ease: [0.25, 0.1, 0.25, 1] }}
        style={{
          background: "linear-gradient(to right, #8b5cf6, #c084fc, #f472b6)",
          boxShadow: "0 0 20px rgba(139, 92, 246, 0.8)",
        }}
      />
      {subtitle && (
        <motion.p
          className="text-text-secondary mt-5 max-w-2xl mx-auto text-base md:text-lg"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          {subtitle}
        </motion.p>
      )}
    </motion.div>
  );
}
