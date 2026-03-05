"use client";

import { useState, useEffect, useCallback, useRef } from "react";
import { AnimatePresence, motion, useInView } from "framer-motion";
import { MockScreenRenderer } from "@/components/demo/MockScreenRenderer";

interface ScreenSlideshowProps {
  screenNames: string[];
}

const CYCLE_MS = 4000;

export function ScreenSlideshow({ screenNames }: ScreenSlideshowProps) {
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
      className="relative h-44 overflow-hidden bg-neutral-50 sm:h-48"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      <div className="flex items-center gap-1 border-b border-neutral-100 px-3 py-1.5">
        <span className="h-1.5 w-1.5 rounded-full bg-neutral-300" />
        <span className="h-1.5 w-1.5 rounded-full bg-neutral-300" />
        <span className="h-1.5 w-1.5 rounded-full bg-neutral-300" />
      </div>

      <div className="relative h-[calc(100%-24px)] overflow-hidden">
        <AnimatePresence mode="wait">
          <motion.div
            key={screenNames[index]}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="absolute inset-0 origin-top-left"
            style={{
              transform: "scale(0.35)",
              width: `${100 / 0.35}%`,
              height: `${100 / 0.35}%`,
            }}
          >
            <MockScreenRenderer componentName={screenNames[index]} />
          </motion.div>
        </AnimatePresence>
      </div>

      <div className="absolute bottom-2 left-1/2 flex -translate-x-1/2 gap-1.5">
        {screenNames.map((_, i) => (
          <span
            key={i}
            className={`h-1.5 w-1.5 rounded-full transition-colors ${
              i === index ? "bg-brand-600" : "bg-neutral-300"
            }`}
          />
        ))}
      </div>
    </div>
  );
}
