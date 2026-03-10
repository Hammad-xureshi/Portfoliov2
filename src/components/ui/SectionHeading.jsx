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
      <h2 className="font-syne text-3xl sm:text-4xl md:text-5xl font-800 text-text-primary mb-4 tracking-tight">
        {title}
      </h2>
      <motion.div
        className="h-1 w-20 mx-auto rounded-full bg-button-gradient"
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.8, delay: 0.3, ease: [0.25, 0.1, 0.25, 1] }}
        style={{
          background: "linear-gradient(to right, #a855f7, #ec4899)",
        }}
      />
      {subtitle && (
        <motion.p
          className="text-text-secondary mt-4 max-w-xl mx-auto text-base md:text-lg"
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
