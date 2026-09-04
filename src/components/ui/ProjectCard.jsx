import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";
import { FaGithub } from "react-icons/fa";

export default function ProjectCard({ project, featured = false }) {
  return (
    <motion.a
      href={project.githubUrl}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={`View ${project.title} on GitHub`}
      className={`group relative rounded-2xl overflow-hidden glass-card cursor-pointer block ${featured ? "col-span-full" : ""} transition-all duration-500`}
      variants={{
        hidden: { opacity: 0, y: 40 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.25, 0.1, 0.25, 1] } },
      }}
      whileHover={{ y: -6, boxShadow: "0 20px 48px rgba(124,58,237,0.12)", borderColor: "rgba(124,58,237,0.25)" }}
      whileTap={{ scale: 0.99 }}
    >
      <div className={`relative overflow-hidden ${featured ? "h-56 md:h-72" : "h-44 md:h-52"}`}>
        <img
          src={project.image || `https://placehold.co/800x400/f3e8ff/7c3aed?text=${encodeURIComponent(project.title)}`}
          alt={project.title}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-white/20 via-white/5 to-transparent" />

        <div className="absolute top-4 right-4 p-2 rounded-full bg-white/80 border border-violet-200 opacity-0 group-hover:opacity-100 transition-opacity duration-300 shadow-sm">
          <FaGithub className="w-5 h-5 text-violet-700" />
        </div>

        {featured && (
          <div className="absolute top-4 left-4 px-3 py-1 rounded-full bg-white/85 text-xs font-dm font-medium text-violet-700 backdrop-blur-sm border border-violet-200">
            ★ Featured
          </div>
        )}
      </div>

      <div className="p-5 md:p-6">
        <h3 className="font-syne text-lg md:text-xl font-normal text-slate-900 mb-2 flex items-center gap-2 group-hover:text-violet-700 transition-colors duration-300">
          {project.title}
          <ExternalLink className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        </h3>
        <p className="text-slate-600 text-sm leading-relaxed mb-4 line-clamp-2">{project.description}</p>

        <div className="flex flex-wrap gap-2">
          {project.tags.map((tag) => (
            <span key={tag} className="px-2.5 py-1 text-xs font-mono rounded-md bg-violet-50 text-violet-700 border border-violet-200">{tag}</span>
          ))}
        </div>
      </div>
    </motion.a>
  );
}
