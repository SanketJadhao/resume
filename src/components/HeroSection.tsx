import { motion } from "framer-motion";

const name = "Sanket Jadhao";
const mainTitle = "A Software Engineer.";
const tagline =
  "Mainly working in the Python and JavaScript ecosystem, I'm a dedicated problem-solver who thrives on learning and building impactful software solutions.";
const githubUrl = "https://github.com/SanketJadhao";
const linkedinUrl = "https://linkedin.com/in/sanket-jadhao/";
const email = "sanketjadhao2002@gmail.com";

export default function HeroSection() {
  return (
    <section
      id="hero"
      className="min-h-screen flex flex-col items-center justify-center hero-background py-6 p-6 text-center relative overflow-hidden">
      <motion.div
        className="absolute top-6 right-6 sm:top-8 sm:right-8"
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}>
        <span className="inline-flex items-center px-3 py-1 bg-[var(--emerald-500)]/10 text-[var(--emerald-300)] text-sm font-medium rounded-full border border-[var(--emerald-500)]/30 shadow-md">
          <motion.span
            className="w-2 h-2 mr-2 bg-[var(--emerald-400)] rounded-full"
            animate={{ opacity: [1, 0.3, 1] }}
            transition={{ duration: 1.6, repeat: Infinity, ease: "easeInOut" }}
          />
          Looking for more opportunities
        </span>
      </motion.div>

      <motion.div
        className="z-10"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}>
        <h1 className="text-5xl sm:text-6xl md:text-7xl font-extrabold text-[var(--gray-100)] mb-3 leading-tight">
          Hi, I'm <span className="text-[var(--emerald-400)]">{name}</span>.
        </h1>
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold text-[var(--gray-200)] mb-6">
          {mainTitle}
        </h2>
        <p className="text-lg md:text-xl text-[var(--gray-400)] mb-10 max-w-2xl mx-auto">
          {tagline}
        </p>

        <motion.div
          className="flex justify-center space-x-5 sm:space-x-6 mb-12"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}>
          <a
            href={githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-[var(--gray-400)] hover:text-[var(--emerald-400)] transition-colors duration-200 text-3xl"
            title="GitHub"
            aria-label="GitHub">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="30"
              height="30"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round">
              <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
            </svg>
          </a>
          <a
            href={linkedinUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-[var(--gray-400)] hover:text-[var(--emerald-400)] transition-colors duration-200 text-3xl"
            title="LinkedIn"
            aria-label="LinkedIn">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="30"
              height="30"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round">
              <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
              <rect x="2" y="9" width="4" height="12" />
              <circle cx="4" cy="4" r="2" />
            </svg>
          </a>
          <a
            href={`mailto:${email}`}
            className="text-[var(--gray-400)] hover:text-[var(--emerald-400)] transition-colors duration-200 text-3xl"
            title="Email"
            aria-label="Email">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="30"
              height="30"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round">
              <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
              <polyline points="22,6 12,13 2,6" />
            </svg>
          </a>
          <a
            href="/resume"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[var(--gray-400)] hover:text-[var(--emerald-400)] transition-colors duration-200 text-3xl"
            title="View Resume"
            aria-label="View Resume">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="30"
              height="30"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round">
              <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
              <polyline points="14 2 14 8 20 8" />
              <line x1="16" y1="13" x2="8" y2="13" />
              <line x1="16" y1="17" x2="8" y2="17" />
              <polyline points="10 9 9 9 8 9" />
            </svg>
          </a>
        </motion.div>

        <motion.a
          href="#about"
          className="rounded-lg font-semibold shadow-md transition-colors duration-300 ease-in-out focus:outline-none focus:ring-2 focus:ring-[var(--emerald-400)] focus:ring-opacity-50 border border-[var(--emerald-500)] text-[var(--emerald-400)] hover:bg-[var(--emerald-500)] hover:text-[var(--gray-900)] px-8 sm:px-10 py-3 sm:py-4 text-base sm:text-lg inline-block"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}>
          Explore More
          <span className="ml-2">&#8595;</span>
        </motion.a>
      </motion.div>
    </section>
  );
}
