import { motion } from "framer-motion";
import { fadeUp, staggerContainer, staggerItem, viewportOnce } from "./motion/variants";

const aboutText =
  "I'm a Software Engineer at Univirture Inc., where I build cross-platform mobile apps with Flutter and real-time backends. I hold a Master's in Computer Science from the University of Florida, and I'm passionate about Android app development, machine learning, and NLP — with hands-on experience spanning blockchain, AI-driven applications, and full-stack development. I enjoy shipping ambitious products and am always looking to expand my technical horizons.";

export default function AboutSection() {
  return (
    <motion.section
      id="about"
      className="section-texture py-16 md:py-24 bg-[var(--gray-800)]/50"
      initial="hidden"
      whileInView="visible"
      viewport={viewportOnce}
      variants={staggerContainer}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.h2
          className="text-4xl font-bold text-[var(--emerald-400)] mb-12 text-center"
          variants={fadeUp}>
          About Me
        </motion.h2>
        <motion.p
          className="text-xl text-[var(--gray-300)] mb-8 max-w-3xl mx-auto leading-relaxed"
          variants={fadeUp}>
          {aboutText}
        </motion.p>
        <motion.div
          className="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-4"
          variants={staggerItem}>
          <motion.a
            href="#contact"
            className="px-6 py-3 rounded-lg font-semibold shadow-md transition-colors duration-300 ease-in-out focus:outline-none focus:ring-2 focus:ring-[var(--emerald-400)] focus:ring-opacity-50 bg-[var(--emerald-600)] text-white hover:bg-[var(--emerald-500)] w-full sm:w-auto"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}>
            Get in Touch
          </motion.a>
          <motion.a
            href="/resume"
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3 rounded-lg font-semibold shadow-md transition-colors duration-300 ease-in-out focus:outline-none focus:ring-2 focus:ring-[var(--emerald-400)] focus:ring-opacity-50 bg-[var(--gray-700)] text-[var(--gray-200)] hover:bg-[var(--gray-600)] w-full sm:w-auto"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}>
            View Resume
          </motion.a>
        </motion.div>
      </div>
    </motion.section>
  );
}
