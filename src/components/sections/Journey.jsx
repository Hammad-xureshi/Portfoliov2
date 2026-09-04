import { motion } from "framer-motion";
import SectionHeading from "../ui/SectionHeading";
import TimelineItem from "../ui/TimelineItem";
import { journey } from "../../data/portfolioData";

export default function Journey() {
  return (
    <section id="journey" className="relative section-padding bg-bg-secondary">
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
