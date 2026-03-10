import { motion } from "framer-motion";
import {
  Code2,
  Layout,
  Server,
  Shield,
  Wrench,
  Brain,
} from "lucide-react";
import GhostCursor from "../three/GhostCursor";
import SectionHeading from "../ui/SectionHeading";
import SkillBadge from "../ui/SkillBadge";
import { skills } from "../../data/portfolioData";

const iconMap = {
  code: Code2,
  layout: Layout,
  server: Server,
  shield: Shield,
  wrench: Wrench,
  brain: Brain,
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.06, delayChildren: 0.1 },
  },
};

export default function Skills() {
  return (
    <section id="skills" className="relative section-padding">
      {/* Ghost Cursor Background Effect - Skills Section */}
      <div className="absolute inset-0 z-0 opacity-35">
        <GhostCursor
          color="#06b6d4"
          brightness={0.65}
          trailLength={22}
          inertia={0.58}
          bloomStrength={0.4}
          bloomRadius={0.7}
          bloomThreshold={0.08}
          grainIntensity={0.015}
          fadeDelayMs={750}
          fadeDurationMs={1350}
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto">
        <SectionHeading
          title="Skills & Technologies"
          subtitle="The tools and technologies I work with"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {Object.values(skills).map((category, catIndex) => {
            const Icon = iconMap[category.icon] || Code2;

            return (
              <motion.div
                key={category.title}
                className="glass-card rounded-2xl p-6 border-glow-hover transition-all duration-300"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{
                  duration: 0.5,
                  delay: catIndex * 0.1,
                  ease: [0.25, 0.1, 0.25, 1],
                }}
                whileHover={{
                  y: -4,
                  boxShadow: "0 15px 40px rgba(168,85,247,0.12)",
                }}
              >
                {/* Category header */}
                <div className="flex items-center gap-3 mb-5">
                  <div className="p-2.5 rounded-xl bg-purple-deep/60 border border-purple-bright/20">
                    <Icon size={20} className="text-purple-bright" />
                  </div>
                  <h3 className="font-syne text-lg font-700 text-text-primary">
                    {category.title}
                  </h3>
                </div>

                {/* Skill Badges */}
                <motion.div
                  className="flex flex-wrap gap-2"
                  variants={staggerContainer}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.2 }}
                >
                  {category.items.map((skill) => (
                    <SkillBadge key={skill} name={skill} />
                  ))}
                </motion.div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
