import { motion } from "framer-motion";

export default function TimelineItem({ item, index, isLast }) {
  const isLeft = index % 2 === 0;

  return (
    <div className="relative">
      {/* Desktop layout */}
      <div className="hidden md:flex items-center justify-center">
        {/* Left content */}
        <div className="w-5/12 flex justify-end pr-8">
          {isLeft && (
            <motion.div
              className="glass-card rounded-2xl p-6 max-w-sm border-glow-hover transition-all duration-300"
              initial={{ opacity: 0, x: -60 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{
                duration: 0.6,
                delay: 0.1,
                ease: [0.25, 0.1, 0.25, 1],
              }}
            >
              <div className="text-3xl mb-3">{item.icon}</div>
              <h3 className="font-syne text-lg font-700 text-text-primary mb-1">
                {item.title}
              </h3>
              <p className="text-text-secondary text-sm leading-relaxed">
                {item.description}
              </p>
            </motion.div>
          )}
        </div>

        {/* Center circle + line */}
        <div className="relative flex flex-col items-center z-10">
          <motion.div
            className="w-14 h-14 rounded-full bg-purple-deep border-2 border-purple-bright flex items-center justify-center font-syne text-xs font-700 text-purple-bright shadow-lg"
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{
              type: "spring",
              stiffness: 260,
              damping: 20,
              delay: 0.2,
            }}
            style={{ boxShadow: "0 0 20px rgba(168, 85, 247, 0.3)" }}
          >
            {item.year}
          </motion.div>
          {!isLast && (
            <div className="w-px h-24 bg-gradient-to-b from-purple-bright/40 to-transparent" />
          )}
        </div>

        {/* Right content */}
        <div className="w-5/12 flex justify-start pl-8">
          {!isLeft && (
            <motion.div
              className="glass-card rounded-2xl p-6 max-w-sm border-glow-hover transition-all duration-300"
              initial={{ opacity: 0, x: 60 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{
                duration: 0.6,
                delay: 0.1,
                ease: [0.25, 0.1, 0.25, 1],
              }}
            >
              <div className="text-3xl mb-3">{item.icon}</div>
              <h3 className="font-syne text-lg font-700 text-text-primary mb-1">
                {item.title}
              </h3>
              <p className="text-text-secondary text-sm leading-relaxed">
                {item.description}
              </p>
            </motion.div>
          )}
        </div>
      </div>

      {/* Mobile layout */}
      <div className="flex md:hidden gap-4">
        {/* Left line + circle */}
        <div className="flex flex-col items-center">
          <motion.div
            className="w-12 h-12 rounded-full bg-purple-deep border-2 border-purple-bright flex items-center justify-center font-syne text-[10px] font-700 text-purple-bright shrink-0"
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ type: "spring", stiffness: 260, damping: 20 }}
            style={{ boxShadow: "0 0 15px rgba(168, 85, 247, 0.3)" }}
          >
            {item.year}
          </motion.div>
          {!isLast && (
            <div className="w-px flex-1 bg-gradient-to-b from-purple-bright/40 to-transparent min-h-[2rem]" />
          )}
        </div>

        {/* Content */}
        <motion.div
          className="glass-card rounded-2xl p-5 mb-4 flex-1 border-glow-hover transition-all duration-300"
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5, ease: [0.25, 0.1, 0.25, 1] }}
        >
          <div className="text-2xl mb-2">{item.icon}</div>
          <h3 className="font-syne text-base font-700 text-text-primary mb-1">
            {item.title}
          </h3>
          <p className="text-text-secondary text-sm leading-relaxed">
            {item.description}
          </p>
        </motion.div>
      </div>
    </div>
  );
}
