import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import { AnimatePresence, motion } from "framer-motion";

export interface Screenshot {
  src: string;
  alt: string;
}

export default function ScreenshotGallery({ screenshots }: { screenshots: Screenshot[] }) {
  const [isOpen, setIsOpen] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);

  const close = () => setIsOpen(false);
  const showPrev = () => setActiveIndex((i) => (i - 1 + screenshots.length) % screenshots.length);
  const showNext = () => setActiveIndex((i) => (i + 1) % screenshots.length);

  useEffect(() => {
    if (!isOpen) return;
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
      if (e.key === "ArrowLeft") showPrev();
      if (e.key === "ArrowRight") showNext();
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [isOpen]);

  return (
    <>
      <button
        type="button"
        onClick={() => {
          setActiveIndex(0);
          setIsOpen(true);
        }}
        className="inline-flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-semibold bg-[var(--emerald-700)]/40 text-[var(--emerald-300)] border border-[var(--emerald-500)]/30 hover:bg-[var(--emerald-700)]/60 transition-colors duration-200">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round">
          <path d="M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z" />
          <circle cx="12" cy="13" r="4" />
        </svg>
        See It In Action
      </button>

      {typeof document !== "undefined" &&
        createPortal(
          <AnimatePresence>
            {isOpen && (
              <motion.div
                className="fixed inset-0 z-[1000] flex items-center justify-center bg-black/85 p-4"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.18 }}
                onMouseDown={close}>
                <div
                  className="relative flex flex-col items-center max-w-full"
                  onMouseDown={(e) => e.stopPropagation()}>
                  <motion.img
                    key={activeIndex}
                    src={screenshots[activeIndex].src}
                    alt={screenshots[activeIndex].alt}
                    className="max-h-[78vh] w-auto rounded-2xl border-4 border-[var(--gray-700)] shadow-2xl touch-none"
                    drag="x"
                    dragConstraints={{ left: 0, right: 0 }}
                    dragElastic={0.6}
                    onDragEnd={(_e, info) => {
                      const swipeThreshold = 60;
                      if (info.offset.x < -swipeThreshold) showNext();
                      else if (info.offset.x > swipeThreshold) showPrev();
                    }}
                  />
                  <p className="text-sm text-[var(--gray-300)] mt-3">
                    {screenshots[activeIndex].alt}
                  </p>
                  <p className="text-xs text-[var(--gray-500)] mt-1">
                    {activeIndex + 1} / {screenshots.length}
                  </p>
                </div>

                <button
                  type="button"
                  onMouseDown={(e) => {
                    e.stopPropagation();
                    close();
                  }}
                  aria-label="Close"
                  className="absolute top-4 right-4 text-white/80 hover:text-white text-3xl leading-none">
                  &times;
                </button>
                <button
                  type="button"
                  onMouseDown={(e) => {
                    e.stopPropagation();
                    showPrev();
                  }}
                  aria-label="Previous screenshot"
                  className="absolute left-2 sm:left-6 top-1/2 -translate-y-1/2 text-white/70 hover:text-white text-4xl leading-none px-2">
                  &#8249;
                </button>
                <button
                  type="button"
                  onMouseDown={(e) => {
                    e.stopPropagation();
                    showNext();
                  }}
                  aria-label="Next screenshot"
                  className="absolute right-2 sm:right-6 top-1/2 -translate-y-1/2 text-white/70 hover:text-white text-4xl leading-none px-2">
                  &#8250;
                </button>
              </motion.div>
            )}
          </AnimatePresence>,
          document.body
        )}
    </>
  );
}
