import { motion } from "framer-motion";

export default function SkillBadge({ name }) {
  return (
    <motion.span
      className="inline-flex items-center gap-2 px-4 py-2 rounded-full font-mono text-sm
                 bg-bg-card border border-border-purple text-purple-glow
                 hover:border-purple-bright/40 hover:bg-purple-deep/30
                 transition-all duration-300 cursor-default select-none"
      variants={{
        hidden: { opacity: 0, scale: 0.7, y: 10 },
        visible: {
          opacity: 1,
          scale: 1,
          y: 0,
          transition: {
            type: "spring",
            stiffness: 260,
            damping: 20,
          },
        },
      }}
      whileHover={{ scale: 1.08, y: -2 }}
    >
      {name}
    </motion.span>
  );
}
