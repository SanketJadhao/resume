import { motion } from "framer-motion";
import { projects } from "../data/projects";
import { fadeUp, staggerContainer, staggerItem, viewportOnce } from "./motion/variants";
import ScreenshotGallery from "./ScreenshotGallery";

export default function ProjectsSection() {
  return (
    <motion.section
      id="projects"
      className="section-texture py-16 md:py-20 bg-[var(--gray-800)]/50"
      initial="hidden"
      whileInView="visible"
      viewport={viewportOnce}
      variants={staggerContainer}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2
          className="text-4xl font-bold text-[var(--emerald-400)] mb-12 text-center"
          variants={fadeUp}>
          Projects
        </motion.h2>
        <motion.div
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={staggerContainer}>
          {projects.map((project) => (
            <motion.div
              key={project.title}
              className="bg-[var(--gray-800)] p-6 rounded-xl shadow-lg h-full"
              variants={staggerItem}
              whileHover={{ y: -4, scale: 1.01, boxShadow: "0 10px 30px -10px rgba(16,185,129,0.25)" }}
              transition={{ duration: 0.25 }}>
              <div className="flex items-start justify-between gap-2 mb-2">
                <h3 className="text-xl font-semibold text-[var(--gray-100)]">
                  {project.title}
                </h3>
                {project.link && (
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    title="View on GitHub"
                    aria-label={`View ${project.title} on GitHub`}
                    className="text-[var(--gray-400)] hover:text-[var(--emerald-400)] transition-colors duration-200 shrink-0">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round">
                      <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
                    </svg>
                  </a>
                )}
              </div>
              <p className="text-sm text-[var(--gray-400)] mb-1">
                {project.category}
                {project.year ? ` | ${project.year}` : ""}
              </p>
              <div className="mb-3">
                {project.tags.map((tagText) => (
                  <span
                    key={tagText}
                    className="inline-block bg-[var(--emerald-700)]/50 text-[var(--emerald-300)] text-xs font-semibold mr-2 mb-2 px-3 py-1 rounded-full">
                    {tagText}
                  </span>
                ))}
              </div>
              {project.descriptionPoints && (
                <ul className="list-disc list-outside space-y-1 text-sm text-[var(--gray-300)] pl-5 mb-3">
                  {project.descriptionPoints.map((point) => (
                    <li key={point}>{point}</li>
                  ))}
                </ul>
              )}
              {project.screenshots && (
                <div className="mt-1">
                  <ScreenshotGallery screenshots={project.screenshots} />
                </div>
              )}
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.section>
  );
}
