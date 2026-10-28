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
      className="section-texture py-24 md:py-32 bg-[var(--gray-900)]"
      initial="hidden"
      whileInView="visible"
      viewport={viewportOnce}
      variants={staggerContainer}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
        <motion.h2
          className="text-5xl md:text-7xl font-medium text-white mb-16"
          variants={fadeUp}>
          Technical Skills
        </motion.h2>
        <div className="divide-y divide-white/10 border-y border-white/10">
          {categories.map((category) => (
            <div key={category.label} className="grid md:grid-cols-[14rem_1fr] gap-4 py-8">
              <motion.h3
                className="text-xl font-medium text-[var(--gray-300)]"
                variants={fadeUp}>
                {category.label}
              </motion.h3>
              <motion.div
                className="flex flex-wrap gap-2.5"
                variants={chipContainer}>
                {category.items.map((item) => (
                  <motion.span
                    key={item}
                    className="inline-block border border-white/15 text-[var(--gray-200)] text-sm font-medium px-4 py-1.5 rounded-full hover:bg-white hover:text-black transition-colors"
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
