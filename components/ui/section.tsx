"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";

interface SectionProps {
  children: ReactNode;
  className?: string;
  id?: string;
  background?: "white" | "light" | "brand";
}

const bgStyles = {
  white: "bg-white",
  light: "bg-neutral-50",
  brand: "bg-brand-50",
};

export function Section({
  children,
  className = "",
  id,
  background = "white",
}: SectionProps) {
  return (
    <section
      id={id}
      className={`section-padding ${bgStyles[background]} ${className}`}
    >
      <motion.div
        className="container-content"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.5, ease: "easeOut" }}
      >
        {children}
      </motion.div>
    </section>
  );
}
