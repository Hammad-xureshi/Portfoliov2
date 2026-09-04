import { useRef, useEffect, useState } from "react";
import { motion, useInView } from "framer-motion";
import { Rocket, ShieldCheck, Award, Zap } from "lucide-react";
import SectionHeading from "../ui/SectionHeading";
import { aboutText, stats } from "../../data/portfolioData";

const statIcons = {
  rocket: Rocket,
  shield: ShieldCheck,
  award: Award,
  zap: Zap,
};

function AnimatedCounter({ value, suffix = "" }) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.5 });

  useEffect(() => {
    if (!isInView) return;

    let start = 0;
    const duration = 2000;
    const startTime = Date.now();

    const animate = () => {
      const elapsed = Date.now() - startTime;
      const progress = Math.min(elapsed / duration, 1);
      // Ease out cubic
      const eased = 1 - Math.pow(1 - progress, 3);
      const current = Math.floor(eased * value);
      setCount(current);

      if (progress < 1) {
        requestAnimationFrame(animate);
      }
    };

    requestAnimationFrame(animate);
  }, [isInView, value]);

  return (
    <span ref={ref} className="font-syne text-3xl md:text-4xl font-normal text-gradient">
      {count}
      {suffix}
    </span>
  );
}

export default function About() {
  return (
    <section id="about" className="relative z-20 -mt-[20vh] section-padding bg-bg-secondary lg:-mt-[50vh]">
      <div className="relative z-10 max-w-7xl mx-auto">
        <SectionHeading title="About Me" subtitle="I build secure systems, lead communities, and turn research into products." />

        <div className="grid grid-cols-1 lg:grid-cols-[1.1fr_0.9fr] gap-12 lg:gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
          >
            <div className="glass-card rounded-[1.75rem] p-6 md:p-8">
              <p className="text-slate-700 text-base md:text-lg leading-relaxed font-dm">
                {aboutText}
              </p>
            </div>
          </motion.div>

          <motion.div
            className="grid grid-cols-2 gap-4"
            initial={{ opacity: 0, y: 140 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, delay: 0.2, ease: [0.25, 0.1, 0.25, 1] }}
          >
            {stats.map((stat, i) => {
              const StatIcon = statIcons[stat.icon] || ShieldCheck;

              return (
                <motion.div
                  key={stat.label}
                  className="glass-card rounded-2xl p-5 md:p-6 text-center transition-all duration-300"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.1 * i + 0.3 }}
                  whileHover={{ y: -4, boxShadow: "0 18px 40px rgba(124,58,237,0.10)" }}
                >
                  <div className="w-12 h-12 mx-auto mb-3 flex items-center justify-center rounded-xl bg-violet-50 border border-violet-200">
                    <StatIcon size={22} className="text-violet-700" />
                  </div>
                  <AnimatedCounter value={stat.value} suffix={stat.suffix} />
                  <p className="text-slate-500 text-xs mt-2 font-dm">{stat.label}</p>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
