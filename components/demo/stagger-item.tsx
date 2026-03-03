"use client";

import { type ReactNode } from "react";
import { motion } from "framer-motion";

interface StaggerItemProps {
  index: number;
  children: ReactNode;
  className?: string;
}

export function StaggerItem({ index, children, className }: StaggerItemProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{
        delay: index * 0.06,
        duration: 0.4,
        ease: [0.32, 0.72, 0, 1],
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
