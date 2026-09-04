import { motion } from "framer-motion";

const difficultyColors = {
  Easy: "bg-green-100 text-green-700 border-green-300",
  Medium: "bg-amber-100 text-amber-700 border-amber-300",
  Hard: "bg-red-100 text-red-700 border-red-300",
};

export default function CTFCard({ challenge }) {
  return (
    <motion.div
      className="group relative rounded-2xl overflow-hidden glass-card transition-all duration-500"
      variants={{
        hidden: { opacity: 0, y: 40 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.25, 0.1, 0.25, 1] } },
      }}
      whileHover={{ y: -6, boxShadow: "0 20px 48px rgba(124,58,237,0.12)", borderColor: "rgba(124,58,237,0.25)" }}
    >
      <div className="relative h-40 md:h-48 overflow-hidden">
        <img
          src={challenge.image || `https://placehold.co/800x400/f3e8ff/7c3aed?text=${encodeURIComponent(challenge.title)}`}
          alt={challenge.title}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-white/20 via-white/5 to-transparent" />

        <div className="absolute top-4 left-4 flex gap-2">
          <span className="px-3 py-1 rounded-full text-xs font-dm font-medium bg-white/85 text-violet-700 border border-violet-200 backdrop-blur-sm">{challenge.platform}</span>
          <span className={`px-3 py-1 rounded-full text-xs font-dm font-medium border backdrop-blur-sm ${difficultyColors[challenge.difficulty]}`}>
            {challenge.difficulty}
          </span>
        </div>

        <div className="absolute top-4 right-4 px-2 py-1 rounded-md text-xs font-mono text-slate-700 bg-white/80 backdrop-blur-sm border border-violet-200">{challenge.year}</div>
      </div>

      <div className="p-5 md:p-6">
        <h3 className="font-syne text-lg font-normal text-slate-900 mb-2 group-hover:text-violet-700 transition-colors duration-300">{challenge.title}</h3>
        <p className="text-slate-600 text-sm leading-relaxed mb-4 line-clamp-2">{challenge.description}</p>

        <div className="flex flex-wrap gap-2">
          {challenge.tags.map((tag) => (
            <span key={tag} className="px-2.5 py-1 text-xs font-mono rounded-md bg-violet-50 text-violet-700 border border-violet-200">{tag}</span>
          ))}
        </div>
      </div>
    </motion.div>
  );
}
