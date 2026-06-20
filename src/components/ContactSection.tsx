import { motion } from "framer-motion";
import { fadeUp, staggerContainer, staggerItem, viewportOnce } from "./motion/variants";

const contactInfo = {
  email: "sanketjadhao2002@gmail.com",
  phone: "(352) 709-0771",
  linkedinUrl: "https://www.linkedin.com/in/sanket-jadhao/",
  tagline:
    "I'm actively seeking new opportunities and collaborations. If you have an interesting project or just want to connect, please don't hesitate to reach out!",
};

export default function ContactSection() {
  return (
    <motion.section
      id="contact"
      className="py-16 md:py-24 bg-[var(--emerald-700)] text-white"
      initial="hidden"
      whileInView="visible"
      viewport={viewportOnce}
      variants={staggerContainer}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.h2 className="text-3xl font-bold mb-6 text-white" variants={fadeUp}>
          Get In Touch
        </motion.h2>
        <motion.p
          className="text-lg text-[var(--emerald-100)] mb-10 max-w-xl mx-auto"
          variants={fadeUp}>
          {contactInfo.tagline}
        </motion.p>
        <motion.div
          className="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-6"
          variants={staggerItem}>
          <motion.a
            href={`mailto:${contactInfo.email}`}
            className="rounded-lg font-semibold transition-colors duration-300 ease-in-out focus:outline-none focus:ring-2 focus:ring-[var(--emerald-400)] focus:ring-opacity-50 bg-white text-[var(--emerald-700)] hover:bg-[var(--emerald-100)]/90 px-8 py-3 text-lg shadow-xl"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}>
            Email Me
          </motion.a>
          <a
            href={contactInfo.linkedinUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-[var(--emerald-100)] hover:text-white underline text-lg font-medium">
            LinkedIn Profile
          </a>
        </motion.div>
        <motion.p className="text-[var(--emerald-100)] text-md mt-8" variants={fadeUp}>
          Phone: {contactInfo.phone}
        </motion.p>
      </div>
    </motion.section>
  );
}
