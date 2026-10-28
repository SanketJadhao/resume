import { useRef } from "react";
import { motion, useScroll, useSpring } from "framer-motion";
import { experiences } from "../data/experience";
import { fadeUp, staggerContainer, staggerItem, viewportOnce } from "./motion/variants";

export default function ExperienceSection() {
  // The accent line on the left fills in as you scroll through the roles.
  const listRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: listRef, offset: ["start 0.7", "end 0.6"] });
  const lineProgress = useSpring(scrollYProgress, { stiffness: 120, damping: 30 });

  return (
    <motion.section
      id="experience"
      className="section-texture py-24 md:py-32 bg-[var(--gray-900)]"
      initial="hidden"
      whileInView="visible"
      viewport={viewportOnce}
      variants={staggerContainer}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
        <motion.h2
          className="text-5xl md:text-7xl font-medium text-white mb-16"
          variants={fadeUp}>
          Professional Experience
        </motion.h2>
        <div ref={listRef} className="relative pl-8 md:pl-12">
          <div className="absolute left-0 top-0 bottom-0 w-[3px] rounded-full bg-[var(--gray-700)]" />
          <motion.div
            className="absolute left-0 top-0 bottom-0 w-[3px] rounded-full bg-gradient-to-b from-[var(--emerald-400)] to-[var(--violet-500)] origin-top"
            style={{ scaleY: lineProgress }}
          />
          <motion.div className="space-y-16" variants={staggerContainer}>
            {experiences.map((exp) => (
              <motion.div
                key={exp.company}
                className="flex flex-col md:flex-row items-start gap-6 md:gap-12"
                variants={staggerItem}>
                <div className="md:w-1/3 shrink-0">
                  <h3 className="text-3xl md:text-4xl font-medium text-white leading-tight">
                    {exp.company}
                  </h3>
                  <p className="text-base text-[var(--gray-300)] mt-2">
                    {exp.role}
                  </p>
                  <p className="text-sm text-[var(--gray-500)] mt-1">{exp.location} · {exp.period}</p>
                </div>
                <div className="md:w-2/3">
                  <ul className="list-disc list-outside space-y-3 text-[var(--gray-400)] pl-5 marker:text-[var(--gray-600)]">
                    {exp.descriptionPoints.map((point) => (
                      <li key={point}>{point}</li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
}
