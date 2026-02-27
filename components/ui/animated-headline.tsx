"use client";

import { motion } from "framer-motion";

interface AnimatedHeadlineProps {
  text: string;
  className?: string;
  as?: "h1" | "h2" | "h3";
}

const container = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.06 },
  },
};

const word = {
  hidden: { opacity: 0, y: 12 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.4, ease: "easeOut" },
  },
};

export function AnimatedHeadline({
  text,
  className = "",
  as: Tag = "h2",
}: AnimatedHeadlineProps) {
  const words = text.split(" ");

  return (
    <Tag className={className}>
      <motion.span
        className="inline"
        variants={container}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-60px" }}
      >
        {words.map((w, i) => (
          <motion.span key={i} className="inline-block" variants={word}>
            {w}
            {i < words.length - 1 ? "\u00A0" : ""}
          </motion.span>
        ))}
      </motion.span>
    </Tag>
  );
}
