"use client";

import { motion, useScroll, useTransform } from "framer-motion";

export function ReadingProgress() {
  const { scrollYProgress } = useScroll();
  const width = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <motion.div
      className="fixed left-0 top-0 z-50 h-0.5 origin-left bg-brand-400"
      style={{ width }}
    />
  );
}
