import { motion } from "framer-motion";
import { skills } from "../data/skills";
import { fadeUp, staggerContainer, chipContainer, chipItem, viewportOnce } from "./motion/variants";

const categories: { label: string; items: string[] }[] = [
  { label: "Languages", items: skills.languages },
  { label: "Web & Mobile", items: skills.webAndMobile },
  { label: "Databases", items: skills.databases },
  { label: "ML & Data Science", items: skills.mlAndDataScience },
  { label: "Tools", items: skills.tools },
];

export default function SkillsSection() {
  return (
    <motion.section
      id="skills"
      className="section-texture py-16 md:py-20 bg-[var(--gray-900)]"
      initial="hidden"
      whileInView="visible"
      viewport={viewportOnce}
      variants={staggerContainer}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2
          className="text-4xl font-bold text-[var(--emerald-400)] mb-12 text-center"
          variants={fadeUp}>
          Technical Skills
        </motion.h2>
        <div className="max-w-4xl mx-auto space-y-8">
          {categories.map((category) => (
            <div key={category.label}>
              <motion.h3
                className="text-xl font-semibold text-[var(--gray-200)] mb-4 text-center"
                variants={fadeUp}>
                {category.label}:
              </motion.h3>
              <motion.div
                className="flex flex-wrap gap-3 justify-center"
                variants={chipContainer}>
                {category.items.map((item) => (
                  <motion.span
                    key={item}
                    className="inline-block bg-[var(--emerald-700)]/50 text-[var(--emerald-300)] text-xs font-semibold mr-2 mb-2 px-3 py-1 rounded-full"
                    variants={chipItem}
                    whileHover={{ scale: 1.08 }}>
                    {item}
                  </motion.span>
                ))}
              </motion.div>
            </div>
          ))}
        </div>
      </div>
    </motion.section>
  );
}
