import { useRef } from "react";
import { motion, useScroll, useTransform, type MotionValue } from "framer-motion";
import { fadeUp, staggerContainer, staggerItem, viewportOnce } from "./motion/variants";

const aboutText =
  "I'm a software engineer who ships production work across mobile, backend, and full-stack. I'm comfortable in Flutter, Kotlin, Python, and Go, and I do my best work where engineering directly drives product outcomes.";

// Each word brightens from gray to white as the paragraph scrolls through the viewport.
function RevealWord({ word, range, progress }: { word: string; range: [number, number]; progress: MotionValue<number> }) {
  const opacity = useTransform(progress, range, [0.2, 1]);
  return <motion.span style={{ opacity }}>{word} </motion.span>;
}

export default function AboutSection() {
  const textRef = useRef<HTMLParagraphElement>(null);
  const { scrollYProgress } = useScroll({ target: textRef, offset: ["start 0.85", "end 0.5"] });
  const words = aboutText.split(" ");

  return (
    <motion.section
      id="about"
      className="section-texture pt-12 pb-24 md:py-36 bg-[var(--gray-900)]"
      initial="hidden"
      whileInView="visible"
      viewport={viewportOnce}
      variants={staggerContainer}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
        <motion.h2
          className="text-sm font-medium uppercase tracking-[0.2em] text-[var(--emerald-400)] mb-8"
          variants={fadeUp}>
          About Me
        </motion.h2>
        <p
          ref={textRef}
          className="text-3xl md:text-5xl font-medium text-white mb-14 leading-[1.15] tracking-tight">
          {words.map((word, i) => (
            <RevealWord
              key={i}
              word={word}
              range={[i / words.length, (i + 1) / words.length]}
              progress={scrollYProgress}
            />
          ))}
        </p>
        <motion.div
          className="flex flex-col sm:flex-row items-start space-y-4 sm:space-y-0 sm:space-x-3"
          variants={staggerItem}>
          <motion.a
            href="#contact"
            className="px-7 py-3.5 rounded-full font-medium transition-colors duration-300 ease-in-out focus:outline-none focus:ring-2 focus:ring-[var(--emerald-400)]/50 bg-white text-black hover:bg-[var(--gray-200)] w-full sm:w-auto text-center"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}>
            Get in Touch
          </motion.a>
          <motion.a
            href="/resume"
            target="_blank"
            rel="noopener noreferrer"
            className="px-7 py-3.5 rounded-full font-medium transition-colors duration-300 ease-in-out focus:outline-none focus:ring-2 focus:ring-[var(--emerald-400)]/50 border border-white/20 text-white hover:bg-white/10 w-full sm:w-auto text-center"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}>
            View Resume
          </motion.a>
        </motion.div>
      </div>
    </motion.section>
  );
}
