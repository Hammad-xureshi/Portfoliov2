import { motion } from "framer-motion";

const difficultyColors = {
  Easy: "bg-green-500/15 text-green-400 border-green-500/30",
  Medium: "bg-yellow-500/15 text-yellow-400 border-yellow-500/30",
  Hard: "bg-red-500/15 text-red-400 border-red-500/30",
};

export default function CTFCard({ challenge }) {
  return (
    <motion.div
      className="group relative rounded-2xl overflow-hidden glass-card transition-all duration-500"
      variants={{
        hidden: { opacity: 0, y: 40 },
        visible: {
          opacity: 1,
          y: 0,
          transition: { duration: 0.5, ease: [0.25, 0.1, 0.25, 1] },
        },
      }}
      whileHover={{
        y: -6,
        boxShadow: "0 20px 50px rgba(168,85,247,0.2)",
        borderColor: "rgba(168, 85, 247, 0.35)",
      }}
    >
      {/* Image */}
      <div className="relative h-40 md:h-48 overflow-hidden">
        {/* IMAGE: ctf-{challenge.id} */}
        <img
          src={
            challenge.image ||
            `https://placehold.co/800x400/0f0f1a/a855f7?text=${encodeURIComponent(challenge.title)}`
          }
          alt={challenge.title}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-bg-card via-bg-card/30 to-transparent" />

        {/* Badges */}
        <div className="absolute top-4 left-4 flex gap-2">
          <span className="px-3 py-1 rounded-full text-xs font-dm font-600 bg-purple-mid/80 text-white backdrop-blur-sm">
            {challenge.platform}
          </span>
          <span
            className={`px-3 py-1 rounded-full text-xs font-dm font-600 border backdrop-blur-sm ${difficultyColors[challenge.difficulty]}`}
          >
            {challenge.difficulty}
          </span>
        </div>

        <div className="absolute top-4 right-4 px-2 py-1 rounded-md text-xs font-mono text-text-muted bg-bg-primary/60 backdrop-blur-sm">
          {challenge.year}
        </div>
      </div>

      {/* Content */}
      <div className="p-5 md:p-6">
        <h3 className="font-syne text-lg font-700 text-text-primary mb-2 group-hover:text-purple-bright transition-colors duration-300">
          {challenge.title}
        </h3>
        <p className="text-text-secondary text-sm leading-relaxed mb-4 line-clamp-2">
          {challenge.description}
        </p>

        <div className="flex flex-wrap gap-2">
          {challenge.tags.map((tag) => (
            <span
              key={tag}
              className="px-2.5 py-1 text-xs font-mono rounded-md bg-purple-deep/50 text-purple-glow border border-border-purple"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  );
}
