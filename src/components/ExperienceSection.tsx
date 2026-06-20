import { motion } from "framer-motion";
import { experiences } from "../data/experience";
import { fadeUp, staggerContainer, staggerItem, viewportOnce } from "./motion/variants";

export default function ExperienceSection() {
  return (
    <motion.section
      id="experience"
      className="section-texture py-16 md:py-20 bg-[var(--gray-900)]"
      initial="hidden"
      whileInView="visible"
      viewport={viewportOnce}
      variants={staggerContainer}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2
          className="text-4xl font-bold text-[var(--emerald-400)] mb-12 text-center"
          variants={fadeUp}>
          Professional Experience
        </motion.h2>
        <motion.div className="space-y-12" variants={staggerContainer}>
          {experiences.map((exp) => (
            <motion.div
              key={exp.company}
              className="bg-[var(--gray-800)] p-6 rounded-xl shadow-lg flex flex-col md:flex-row items-start"
              variants={staggerItem}
              whileHover={{ y: -4, scale: 1.005, boxShadow: "0 10px 30px -10px rgba(16,185,129,0.25)" }}
              transition={{ duration: 0.25 }}>
              <div className="md:w-1/4 mb-4 md:mb-0 md:pr-8">
                <h3 className="text-xl font-semibold text-[var(--gray-100)]">
                  {exp.company}
                </h3>
                <p className="text-sm text-[var(--gray-400)]">{exp.location}</p>
                <p className="text-sm text-[var(--gray-400)] font-medium">
                  {exp.role}
                </p>
                <p className="text-sm text-[var(--gray-400)]">{exp.period}</p>
              </div>
              <div className="md:w-3/4">
                <ul className="list-disc list-outside space-y-2 text-[var(--gray-300)] pl-5">
                  {exp.descriptionPoints.map((point) => (
                    <li key={point}>{point}</li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.section>
  );
}
