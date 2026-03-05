"use client";

import { useState, useEffect, useCallback, useRef } from "react";
import { AnimatePresence, motion, useInView } from "framer-motion";
import { MockScreenRenderer } from "@/components/demo/MockScreenRenderer";

interface ScreenSlideshowProps {
  screenNames: string[];
  children: React.ReactNode;
}

const CYCLE_MS = 4000;
const SCALE = 0.55;

export function ScreenSlideshow({
  screenNames,
  children,
}: ScreenSlideshowProps) {
  const [index, setIndex] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);
  const inView = useInView(containerRef, { once: false, amount: 0.3 });

  const advance = useCallback(() => {
    setIndex((prev) => (prev + 1) % screenNames.length);
  }, [screenNames.length]);

  useEffect(() => {
    if (!inView) return;
    const id = setInterval(advance, CYCLE_MS);
    return () => clearInterval(id);
  }, [inView, advance]);

  return (
    <div
      ref={containerRef}
      className="relative h-80 overflow-hidden rounded-xl sm:h-96"
    >
      <AnimatePresence mode="wait">
        <motion.div
          key={screenNames[index]}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.4 }}
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

      <div className="pointer-events-none absolute inset-x-0 bottom-0 rounded-b-xl bg-black/70 p-5 backdrop-blur-sm">
        {children}
      </div>
    </div>
  );
}
