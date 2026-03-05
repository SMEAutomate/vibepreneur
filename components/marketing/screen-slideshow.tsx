"use client";

import { useState, useEffect, useCallback, useRef } from "react";
import { AnimatePresence, motion, useInView } from "framer-motion";
import { MockScreenRenderer } from "@/components/demo/MockScreenRenderer";

interface ScreenSlideshowProps {
  screenNames: string[];
  children: React.ReactNode;
}

const CYCLE_MS = 4000;
const SCALE = 0.45;

export function ScreenSlideshow({
  screenNames,
  children,
}: ScreenSlideshowProps) {
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const inView = useInView(containerRef, { once: false, amount: 0.3 });

  const advance = useCallback(() => {
    setIndex((prev) => (prev + 1) % screenNames.length);
  }, [screenNames.length]);

  useEffect(() => {
    if (paused || !inView) return;
    const id = setInterval(advance, CYCLE_MS);
    return () => clearInterval(id);
  }, [paused, inView, advance]);

  return (
    <div
      ref={containerRef}
      className="relative h-72 overflow-hidden rounded-xl sm:h-80"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      <AnimatePresence mode="wait">
        <motion.div
          key={screenNames[index]}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="absolute inset-0 origin-top-left"
          style={{
            transform: `scale(${SCALE})`,
            width: `${100 / SCALE}%`,
            height: `${100 / SCALE}%`,
          }}
        >
          <MockScreenRenderer componentName={screenNames[index]} />
        </motion.div>
      </AnimatePresence>

      <div className="pointer-events-none absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/70 via-black/40 to-transparent p-5 pt-12">
        {children}
      </div>

      <div className="absolute right-3 top-3 flex gap-1.5">
        {screenNames.map((_, i) => (
          <span
            key={i}
            className={`h-1.5 w-1.5 rounded-full transition-colors ${
              i === index ? "bg-white" : "bg-white/40"
            }`}
          />
        ))}
      </div>
    </div>
  );
}
