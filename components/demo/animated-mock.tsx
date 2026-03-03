"use client";

import { motion } from "framer-motion";
import { AnimatedMockScreenRenderer } from "./AnimatedMockScreenRenderer";

interface AnimatedInlineScreenMockProps {
  componentName: string;
  caption: string;
}

export function AnimatedInlineScreenMock({
  componentName,
  caption,
}: AnimatedInlineScreenMockProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 32 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <div className="overflow-hidden rounded-xl border border-neutral-200 bg-white shadow-lg">
        <div className="flex items-center gap-1.5 border-b border-neutral-100 bg-neutral-50 px-4 py-2.5">
          <span className="h-2.5 w-2.5 rounded-full bg-neutral-300" />
          <span className="h-2.5 w-2.5 rounded-full bg-neutral-300" />
          <span className="h-2.5 w-2.5 rounded-full bg-neutral-300" />
        </div>
        <div className="relative h-[480px] overflow-hidden sm:h-[540px] lg:h-[600px]">
          <div
            className="origin-top-left"
            style={{
              transform: "scale(0.7)",
              width: "142.86%",
              height: "142.86%",
            }}
          >
            <AnimatedMockScreenRenderer componentName={componentName} />
          </div>
        </div>
      </div>
      <p className="mt-4 text-center text-sm text-neutral-500">{caption}</p>
    </motion.div>
  );
}
