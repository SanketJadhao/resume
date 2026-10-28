import { motion } from "framer-motion";
import { education, researchPaper } from "../data/education";
import { fadeUp, staggerContainer, staggerItem, viewportOnce } from "./motion/variants";

export default function EducationSection() {
  return (
    <motion.section
      id="education"
      className="section-texture py-24 md:py-32 bg-[var(--gray-900)]"
      initial="hidden"
      whileInView="visible"
      viewport={viewportOnce}
      variants={staggerContainer}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
        <motion.h2
          className="text-5xl md:text-7xl font-medium text-white mb-16"
          variants={fadeUp}>
          Education & Research
        </motion.h2>
        <motion.div
          className="grid md:grid-cols-2 gap-5 mb-5"
          variants={staggerContainer}>
          {education.map((edu) => (
            <motion.div
              key={edu.degree}
              className="bg-[var(--gray-800)] border border-white/10 p-8 rounded-[28px]"
              variants={staggerItem}
              whileHover={{ y: -4 }}
              transition={{ duration: 0.25 }}>
              <h3 className="text-2xl font-medium text-[var(--gray-100)] mb-2">
                {edu.degree}
              </h3>
              <p className="text-md text-[var(--gray-300)]">{edu.institution}</p>
              <p className="text-sm text-[var(--gray-400)]">{edu.period}</p>
              <p className="text-sm text-[var(--gray-400)]">{edu.gpa}</p>
            </motion.div>
          ))}
        </motion.div>
        <motion.div
          className="bg-[var(--gray-800)] border border-white/10 p-8 rounded-[28px]"
          variants={staggerItem}
          whileHover={{ y: -4 }}
          transition={{ duration: 0.25 }}>
          <h3 className="text-sm font-medium uppercase tracking-[0.2em] text-[var(--emerald-400)] mb-3">
            Research Paper
          </h3>
          <h4 className="text-lg font-medium text-[var(--gray-200)]">
            {researchPaper.title}
          </h4>
          <p className="text-sm text-[var(--gray-300)] italic mt-1">
            {researchPaper.authors}
          </p>
          <p className="text-sm text-[var(--gray-400)] mt-1">
            {researchPaper.conference}
          </p>
          {researchPaper.link && (
            <a
              href={researchPaper.link}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block mt-2 text-[var(--emerald-400)] hover:text-[var(--emerald-300)] hover:underline text-sm font-medium">
              View on IEEE Xplore
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                className="inline-block w-4 h-4 ml-0.5">
                <path
                  fillRule="evenodd"
                  d="M4.25 5.5a.75.75 0 000 1.5h5.5a.75.75 0 000-1.5h-5.5zm0 3a.75.75 0 000 1.5h3.5a.75.75 0 000-1.5h-3.5zm0 3a.75.75 0 000 1.5h3.5a.75.75 0 000-1.5h-3.5zM12.923 5.173a.75.75 0 01.023 1.06L10.22 10l2.725 3.768a.75.75 0 11-1.087.986l-3.25-4.5a.75.75 0 010-.986l3.25-4.5a.75.75 0 011.06-.023z"
                  clipRule="evenodd"
                />
              </svg>
            </a>
          )}
        </motion.div>
      </div>
    </motion.section>
  );
}
