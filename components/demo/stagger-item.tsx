"use client";

import { type ReactNode } from "react";
import { motion } from "framer-motion";

const BASE_DELAY = 0.45;
const STAGGER_INTERVAL = 0.08;

interface StaggerItemProps {
  index: number;
  children: ReactNode;
  className?: string;
}

export function StaggerItem({ index, children, className }: StaggerItemProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 18 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{
        delay: BASE_DELAY + index * STAGGER_INTERVAL,
        duration: 0.5,
        ease: [0.32, 0.72, 0, 1],
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
