"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";

interface CardProps {
  children: ReactNode;
  className?: string;
  hover?: boolean;
}

export function Card({ children, className = "", hover = true }: CardProps) {
  return (
    <motion.div
      className={`rounded-xl border border-neutral-100 bg-white p-6 ${className}`}
      whileHover={{ scale: 1.015, y: -2 }}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
      style={{ boxShadow: "0 1px 2px rgba(0,0,0,0.04)" }}
      whileTap={{ scale: 1 }}
    >
      {children}
    </motion.div>
  );
}
