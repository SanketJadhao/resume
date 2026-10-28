import { motion } from "framer-motion";
import { projects } from "../data/projects";
import { fadeUp, staggerContainer, staggerItem, viewportOnce } from "./motion/variants";
import ScreenshotGallery from "./ScreenshotGallery";
import LoopVideo from "./LoopVideo";

// Each card gets its own muted colour and a drifting glow, cycling through these.
const cardColors = [
  { bg: "#7c2d12", glow: "#fdba74" },
  { bg: "#5b3d4d", glow: "#f9a8d4" },
  { bg: "#064e3b", glow: "#34d399" },
  { bg: "#1e3a5f", glow: "#60a5fa" },
  { bg: "#4c1d95", glow: "#c084fc" },
  { bg: "#3f3f46", glow: "#a1a1aa" },
];

export default function ProjectsSection() {
  return (
    <motion.section
      id="projects"
      className="section-texture py-24 md:py-32 bg-[var(--gray-900)]"
      initial="hidden"
      whileInView="visible"
      viewport={viewportOnce}
      variants={staggerContainer}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
        <motion.h2
          className="text-5xl md:text-7xl font-medium text-white mb-16"
          variants={fadeUp}>
          Projects
        </motion.h2>
        {/* On phones the cards stick and stack like a deck as you scroll (a flex column, since sticky
            grid items can't leave their own grid cell); tablets and up get the grid. */}
        <motion.div
          className="flex flex-col gap-5 md:grid md:grid-cols-2 lg:grid-cols-3"
          variants={staggerContainer}>
          {projects.map((project, i) => {
            const color = cardColors[i % cardColors.length];
            return (
              <motion.div
                key={project.title}
                className="relative overflow-hidden p-7 rounded-[28px] h-full flex flex-col text-white max-md:sticky max-md:shadow-[0_-12px_40px_rgba(0,0,0,0.55)]"
                style={{ backgroundColor: color.bg, top: `${88 + i * 14}px` }}
                variants={staggerItem}
                whileHover={{ y: -6, rotate: -0.5 }}
                transition={{ duration: 0.25 }}>
                <span
                  className="card-glow -right-24 -top-24"
                  style={{ backgroundColor: color.glow, animationDelay: `${-i * 2}s` }}
                />
                <div className="relative flex items-start justify-between gap-2 mb-2">
                  <p className="text-xs font-medium px-3 py-1 rounded-full bg-white/15">
                    {project.category}
                    {project.year ? ` · ${project.year}` : ""}
                  </p>
                  {project.link && (
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      title="View on GitHub"
                      aria-label={`View ${project.title} on GitHub`}
                      className="text-white/70 hover:text-white transition-colors duration-200 shrink-0">
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
                {project.render && (
                  // Screen blending drops the render's black background onto the card colour.
                  <div className="relative h-56 -mx-4 flex items-center justify-center">
                    <LoopVideo
                      src={`/videos/projects/${project.render}.mp4`}
                      className="h-full aspect-square object-contain mix-blend-screen"
                    />
                  </div>
                )}
                <h3 className={`relative text-3xl font-medium leading-tight mb-4 ${project.render ? "mt-2" : "mt-10"}`}>
                  {project.title}
                </h3>
                {project.descriptionPoints && (
                  <ul className="relative list-disc list-outside space-y-2 text-sm text-white/75 pl-5 mb-5">
                    {project.descriptionPoints.map((point, j) => (
                      // Phones show just the first point so each stacked card fits on screen.
                      <li key={point} className={j > 0 ? "max-md:hidden" : undefined}>
                        {point}
                      </li>
                    ))}
                  </ul>
                )}
                <div className="relative mt-auto">
                  {project.tags.map((tagText) => (
                    <span
                      key={tagText}
                      className="inline-block bg-black/25 text-white/90 text-xs font-medium mr-2 mb-2 px-3 py-1 rounded-full">
                      {tagText}
                    </span>
                  ))}
                  {project.screenshots && (
                    <div className="mt-3">
                      <ScreenshotGallery screenshots={project.screenshots} />
                    </div>
                  )}
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </motion.section>
  );
}
