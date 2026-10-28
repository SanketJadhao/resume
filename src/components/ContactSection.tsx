import { motion } from "framer-motion";
import { fadeUp, staggerContainer, staggerItem, viewportOnce } from "./motion/variants";

const contactInfo = {
  email: "sanketjadhao2002@gmail.com",
  linkedinUrl: "https://www.linkedin.com/in/sanket-jadhao/",
  tagline:
    "I'm actively seeking new opportunities and collaborations. If you have an interesting project or just want to connect, please don't hesitate to reach out!",
};

export default function ContactSection() {
  return (
    <motion.section
      id="contact"
      className="py-24 md:py-32 bg-[var(--gray-900)] text-white px-4 sm:px-6 lg:px-8"
      initial="hidden"
      whileInView="visible"
      viewport={viewportOnce}
      variants={staggerContainer}>
      <div className="relative overflow-hidden container mx-auto max-w-6xl rounded-[36px] bg-[var(--gray-800)] border border-white/10 px-8 py-20 md:px-16 md:py-28">
        <span className="card-glow -left-20 -top-28 bg-[var(--emerald-500)]" />
        <span className="card-glow -right-24 -bottom-28 bg-[var(--violet-500)]" style={{ animationDelay: "-4s" }} />
        <motion.h2 className="relative text-5xl md:text-7xl font-medium mb-6 text-white leading-[0.95]" variants={fadeUp}>
          Get In Touch
        </motion.h2>
        <motion.p
          className="relative text-lg md:text-xl text-[var(--gray-300)] mb-10 max-w-xl"
          variants={fadeUp}>
          {contactInfo.tagline}
        </motion.p>
        <motion.div
          className="relative flex flex-col sm:flex-row items-start sm:items-center space-y-4 sm:space-y-0 sm:space-x-3"
          variants={staggerItem}>
          <motion.a
            href={`mailto:${contactInfo.email}`}
            className="rounded-full font-medium transition-colors duration-300 ease-in-out focus:outline-none focus:ring-2 focus:ring-[var(--emerald-400)]/50 bg-white text-black hover:bg-[var(--gray-200)] px-8 py-4 text-lg"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}>
            Email Me
          </motion.a>
          <a
            href={contactInfo.linkedinUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full border border-white/20 hover:bg-white/10 px-8 py-4 text-lg font-medium transition-colors">
            LinkedIn Profile
          </a>
        </motion.div>
      </div>
    </motion.section>
  );
}
