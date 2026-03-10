import { motion } from "framer-motion";
import GhostCursor from "../three/GhostCursor";
import SectionHeading from "../ui/SectionHeading";
import TimelineItem from "../ui/TimelineItem";
import { journey } from "../../data/portfolioData";

export default function Journey() {
  return (
    <section id="journey" className="relative section-padding bg-bg-secondary">
      {/* Ghost Cursor Background Effect - Journey Section */}
      <div className="absolute inset-0 z-0 opacity-30">
        <GhostCursor
          color="#10b981"
          brightness={0.6}
          trailLength={24}
          inertia={0.6}
          bloomStrength={0.35}
          bloomRadius={0.65}
          bloomThreshold={0.12}
          grainIntensity={0.01}
          fadeDelayMs={1000}
          fadeDurationMs={1600}
        />
      </div>

      <div className="relative z-10 max-w-5xl mx-auto">
        <SectionHeading
          title="My Journey"
          subtitle="The path that brought me here"
        />

        <div className="mt-12">
          {journey.map((item, i) => (
            <TimelineItem
              key={item.year + item.title}
              item={item}
              index={i}
              isLast={i === journey.length - 1}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
