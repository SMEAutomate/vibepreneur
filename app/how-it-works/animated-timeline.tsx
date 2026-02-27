"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { howItWorksCopy } from "@/content/how-it-works";

export function AnimatedTimeline() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start center", "end center"],
  });
  const lineHeight = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  const { stages } = howItWorksCopy;

  return (
    <div ref={containerRef} className="relative">
      <div className="absolute left-[23px] top-0 hidden h-full w-0.5 bg-neutral-100 md:block" />
      <motion.div
        className="absolute left-[23px] top-0 hidden w-0.5 origin-top bg-brand-400 md:block"
        style={{ height: lineHeight }}
      />

      <div className="space-y-8">
        {stages.map((stage, i) => (
          <motion.div
            key={stage.title}
            className="grid items-start gap-8 md:grid-cols-12"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ delay: i * 0.1, duration: 0.45 }}
          >
            <div className="md:col-span-1">
              <motion.span
                className="inline-flex h-12 w-12 items-center justify-center rounded-full border-2 border-brand-100 text-xl font-bold text-brand-300"
                whileInView={{ scale: [1, 1.15, 1] }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 + i * 0.1, duration: 0.5 }}
              >
                {String(i + 1).padStart(2, "0")}
              </motion.span>
            </div>
            <div className="md:col-span-3">
              <h3 className="text-lg font-semibold text-neutral-900">
                {stage.title}
              </h3>
              <p className="mt-1 text-sm font-medium text-brand-600">
                Output: {stage.output}
              </p>
            </div>
            <div className="md:col-span-8">
              <p className="leading-relaxed text-neutral-600">
                {stage.description}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
