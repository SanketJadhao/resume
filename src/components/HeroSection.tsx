import { useEffect, useRef } from "react";
import { motion } from "framer-motion";

// Portrait or near-square screens get the tall cut with the phone centred; wider ones the landscape cut.
const PORTRAIT_QUERY = "(max-aspect-ratio: 5/4)";
const HERO_VIDEOS = {
  portrait: { src: "/videos/hero-mobile.mp4", poster: "/videos/hero-mobile-poster.webp" },
  landscape: { src: "/videos/hero.mp4", poster: "/videos/hero-poster.webp" },
};

const name = "Sanket Jadhao";
const mainTitle = "A Software Engineer.";
const tagline =
  "Mainly working in the Python and JavaScript ecosystem, I'm a dedicated problem-solver who thrives on learning and building impactful software solutions.";
const githubUrl = "https://github.com/SanketJadhao";
const linkedinUrl = "https://linkedin.com/in/sanket-jadhao/";
const email = "sanketjadhao2002@gmail.com";

export default function HeroSection() {
  // <source media> is only checked when the page loads, so swap cuts ourselves when the screen
  // shape changes (a resized window, or a tablet rotating).
  const videoRef = useRef<HTMLVideoElement>(null);
  useEffect(() => {
    const query = window.matchMedia(PORTRAIT_QUERY);
    const applyCut = () => {
      const video = videoRef.current;
      const cut = query.matches ? HERO_VIDEOS.portrait : HERO_VIDEOS.landscape;
      if (!video || video.currentSrc.endsWith(cut.src)) return;
      video.src = cut.src;
      video.play().catch(() => {});
    };
    applyCut();
    query.addEventListener("change", applyCut);
    return () => query.removeEventListener("change", applyCut);
  }, []);

  return (
    <section
      id="hero"
      className="landscape-wide:min-h-screen flex flex-col landscape-wide:justify-center hero-background px-6 pt-28 pb-2 landscape-wide:pb-6 text-center landscape-wide:text-left relative overflow-hidden">
      <motion.div
        className="relative z-10 container mx-auto max-w-6xl"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}>
        <span className="inline-flex items-center px-3 py-1 mb-6 text-[var(--gray-300)] text-sm font-medium rounded-full border border-white/15 bg-black/40 backdrop-blur-md">
          <motion.span
            className="w-2 h-2 mr-2 bg-[var(--emerald-400)] rounded-full"
            animate={{ opacity: [1, 0.3, 1] }}
            transition={{ duration: 1.6, repeat: Infinity, ease: "easeInOut" }}
          />
          Looking for more opportunities
        </span>
        <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-medium text-white mb-2 leading-[0.95] max-w-3xl mx-auto landscape-wide:mx-0">
          Hi, I'm <span className="text-[var(--emerald-400)]">{name}</span>.
        </h1>
        <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-medium text-[var(--gray-600)] mb-6 landscape-wide:mb-8 leading-[0.95]">
          {mainTitle}
        </h2>
        {/* Phones skip the tagline (About covers it) so the headline and render fit on one screen. */}
        <p className="hidden landscape-wide:block text-base md:text-xl text-[var(--gray-400)] mb-10 max-w-xl">
          {tagline}
        </p>

        <motion.div
          className="flex justify-center landscape-wide:justify-start space-x-5 sm:space-x-6 landscape-wide:mb-10"
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
          className="hidden landscape-wide:inline-block rounded-full font-medium transition-colors duration-300 ease-in-out focus:outline-none focus:ring-2 focus:ring-[var(--emerald-400)]/50 bg-white text-black hover:bg-[var(--gray-200)] px-8 sm:px-10 py-3.5 sm:py-4 text-base sm:text-lg"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}>
          Explore More
          <span className="ml-2">&#8595;</span>
        </motion.a>
      </motion.div>

      {/* Looping 3D render. On portrait screens it sits under the text (like fancy.design's mobile hero);
          on landscape screens it fills the background on the right. object-contain never crops the phone,
          and the render's black background blends into the page. */}
      <div className="relative w-full max-w-md mx-auto aspect-square mt-2 landscape-wide:absolute landscape-wide:inset-0 landscape-wide:h-svh landscape-wide:max-w-none landscape-wide:aspect-auto landscape-wide:mt-0 pointer-events-none">
        {/* The first frame as a plain image under the video: the right size is picked straight from
            the HTML and fetched first, and the video covers it once it starts playing. */}
        <picture>
          <source srcSet={HERO_VIDEOS.portrait.poster} media={PORTRAIT_QUERY} />
          <img
            src={HERO_VIDEOS.landscape.poster}
            alt=""
            fetchPriority="high"
            className="absolute inset-0 w-full h-full object-contain landscape-wide:object-right"
          />
        </picture>
        <video
          ref={videoRef}
          className="absolute inset-0 w-full h-full object-contain landscape-wide:object-right motion-reduce:hidden"
          autoPlay
          muted
          loop
          playsInline
          aria-hidden="true">
          <source src={HERO_VIDEOS.portrait.src} type="video/mp4" media={PORTRAIT_QUERY} />
          <source src={HERO_VIDEOS.landscape.src} type="video/mp4" />
        </video>
        <div className="absolute inset-0 hidden landscape-wide:block bg-gradient-to-r from-black via-black/40 to-transparent" />
      </div>
    </section>
  );
}
