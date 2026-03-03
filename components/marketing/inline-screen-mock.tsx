"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { MockScreenRenderer } from "@/components/demo/MockScreenRenderer";

interface InlineScreenMockProps {
  componentName: string;
  caption: string;
}

export function InlineScreenMock({
  componentName,
  caption,
}: InlineScreenMockProps) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const rotateX = useTransform(scrollYProgress, [0, 0.5, 1], [2, 0, -1]);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 32 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      style={{ perspective: 1200 }}
    >
      <motion.div
        className="overflow-hidden rounded-xl border border-neutral-200 bg-white shadow-lg"
        style={{ rotateX }}
      >
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
            <MockScreenRenderer componentName={componentName} />
          </div>
        </div>
      </motion.div>
      <p className="mt-4 text-center text-sm text-neutral-500">{caption}</p>
    </motion.div>
  );
}
