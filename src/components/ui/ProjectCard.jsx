import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";
import { FaGithub } from "react-icons/fa";

export default function ProjectCard({ project, featured = false }) {
  const handleClick = () => {
    window.open(project.githubUrl, "_blank", "noreferrer");
  };

  return (
    <motion.div
      className={`group relative rounded-2xl overflow-hidden glass-card cursor-pointer
        ${featured ? "col-span-full" : ""}
        transition-all duration-500`}
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
      onClick={handleClick}
    >
      {/* Image */}
      <div
        className={`relative overflow-hidden ${featured ? "h-56 md:h-72" : "h-44 md:h-52"}`}
      >
        {/* IMAGE: project-{project.id} */}
        <img
          src={
            project.image ||
            `https://placehold.co/800x400/1a0a2e/a855f7?text=${encodeURIComponent(project.title)}`
          }
          alt={project.title}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-bg-card via-bg-card/20 to-transparent" />

        {/* GitHub Icon */}
        <div className="absolute top-4 right-4 p-2 rounded-full glass opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <FaGithub className="w-5 h-5 text-purple-glow" />
        </div>

        {featured && (
          <div className="absolute top-4 left-4 px-3 py-1 rounded-full bg-purple-mid/80 text-xs font-dm font-600 text-white backdrop-blur-sm">
            ⭐ Featured
          </div>
        )}
      </div>

      {/* Content */}
      <div className="p-5 md:p-6">
        <h3 className="font-syne text-lg md:text-xl font-700 text-text-primary mb-2 flex items-center gap-2 group-hover:text-purple-bright transition-colors duration-300">
          {project.title}
          <ExternalLink className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        </h3>
        <p className="text-text-secondary text-sm leading-relaxed mb-4 line-clamp-2">
          {project.description}
        </p>

        {/* Tags */}
        <div className="flex flex-wrap gap-2">
          {project.tags.map((tag) => (
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
