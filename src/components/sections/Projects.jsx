import { motion } from "framer-motion";
import GhostCursor from "../three/GhostCursor";
import SectionHeading from "../ui/SectionHeading";
import ProjectCard from "../ui/ProjectCard";
import { projects } from "../../data/portfolioData";

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: 0.1 },
  },
};

export default function Projects() {
  const featured = projects.filter((p) => p.featured);
  const regular = projects.filter((p) => !p.featured);

  return (
    <section id="projects" className="relative section-padding bg-bg-secondary">
      {/* Ghost Cursor Background Effect - Projects Section */}
      <div className="absolute inset-0 z-0 opacity-40">
        <GhostCursor
          color="#f59e0b"
          brightness={0.7}
          trailLength={30}
          inertia={0.55}
          bloomStrength={0.5}
          bloomRadius={0.9}
          bloomThreshold={0.05}
          grainIntensity={0.01}
          fadeDelayMs={900}
          fadeDurationMs={1400}
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto">
        <SectionHeading
          title="Projects"
          subtitle="Some of the things I've built"
        />

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
        >
          {/* Featured projects (full width) */}
          {featured.map((project) => (
            <ProjectCard key={project.id} project={project} featured />
          ))}

          {/* Regular projects */}
          {regular.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </motion.div>
      </div>
    </section>
  );
}
