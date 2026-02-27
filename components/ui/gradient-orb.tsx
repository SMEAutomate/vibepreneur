"use client";

import { motion } from "framer-motion";

interface GradientOrbProps {
  className?: string;
  size?: number;
  color?: string;
}

export function GradientOrb({
  className = "",
  size = 400,
  color = "bg-brand-200/30",
}: GradientOrbProps) {
  return (
    <motion.div
      className={`pointer-events-none absolute rounded-full blur-3xl ${color} ${className}`}
      style={{ width: size, height: size }}
      animate={{ scale: [1, 1.05, 1] }}
      transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      aria-hidden="true"
    />
  );
}
