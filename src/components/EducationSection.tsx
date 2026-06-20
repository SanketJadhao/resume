import { motion } from "framer-motion";
import { education, researchPaper } from "../data/education";
import { fadeUp, staggerContainer, staggerItem, viewportOnce } from "./motion/variants";

export default function EducationSection() {
  return (
    <motion.section
      id="education"
      className="section-texture py-16 md:py-20 bg-[var(--gray-800)]/50"
      initial="hidden"
      whileInView="visible"
      viewport={viewportOnce}
      variants={staggerContainer}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2
          className="text-4xl font-bold text-[var(--emerald-400)] mb-12 text-center"
          variants={fadeUp}>
          Education & Research
        </motion.h2>
        <motion.div
          className="space-y-8 max-w-3xl mx-auto mb-12"
          variants={staggerContainer}>
          {education.map((edu) => (
            <motion.div
              key={edu.degree}
              className="bg-[var(--gray-800)] p-6 rounded-xl shadow-lg"
              variants={staggerItem}
              whileHover={{ y: -4, scale: 1.005, boxShadow: "0 10px 30px -10px rgba(16,185,129,0.25)" }}
              transition={{ duration: 0.25 }}>
              <h3 className="text-xl font-semibold text-[var(--gray-100)]">
                {edu.degree}
              </h3>
              <p className="text-md text-[var(--gray-300)]">{edu.institution}</p>
              <p className="text-sm text-[var(--gray-400)]">{edu.period}</p>
              <p className="text-sm text-[var(--gray-400)]">{edu.gpa}</p>
            </motion.div>
          ))}
        </motion.div>
        <motion.div
          className="max-w-3xl mx-auto bg-[var(--gray-800)] p-6 rounded-xl shadow-lg"
          variants={staggerItem}
          whileHover={{ y: -4, scale: 1.005, boxShadow: "0 10px 30px -10px rgba(16,185,129,0.25)" }}
          transition={{ duration: 0.25 }}>
          <h3 className="text-xl font-semibold text-[var(--gray-100)] mb-1">
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
