"use client";

import { motion } from "framer-motion";
import { MockScreenRenderer } from "@/components/demo/MockScreenRenderer";

export interface ScreenCallout {
  number: number;
  label: string;
  description: string;
  x: string;
  y: string;
}

interface AnnotatedScreenExplainerProps {
  componentName: string;
  callouts: ScreenCallout[];
  title: string;
}

export function AnnotatedScreenExplainer({
  componentName,
  callouts,
  title,
}: AnnotatedScreenExplainerProps) {
  return (
    <div>
      {/* Screen with callout markers */}
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-60px" }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <div className="overflow-hidden rounded-xl border border-neutral-200 bg-white shadow-lg">
          <div className="flex items-center gap-1.5 border-b border-neutral-100 bg-neutral-50 px-4 py-2.5">
            <span className="h-2.5 w-2.5 rounded-full bg-red-300" />
            <span className="h-2.5 w-2.5 rounded-full bg-amber-300" />
            <span className="h-2.5 w-2.5 rounded-full bg-emerald-300" />
            <span className="ml-3 text-xs font-medium text-neutral-400">
              {title}
            </span>
          </div>
          <div className="relative h-[500px] overflow-hidden sm:h-[580px] lg:h-[660px]">
            <div
              className="origin-top-left"
              style={{
                transform: "scale(0.65)",
                width: "153.85%",
                height: "153.85%",
              }}
            >
              <MockScreenRenderer componentName={componentName} />
            </div>

            {/* Callout markers overlaid on the screen */}
            {callouts.map((callout, i) => (
              <motion.div
                key={callout.number}
                className="absolute z-10"
                style={{ left: callout.x, top: callout.y }}
                initial={{ opacity: 0, scale: 0 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{
                  delay: 0.4 + i * 0.1,
                  type: "spring",
                  stiffness: 300,
                  damping: 20,
                }}
              >
                <div className="ring-3 flex h-7 w-7 items-center justify-center rounded-full bg-brand-700 text-xs font-bold text-white shadow-md ring-brand-200/60">
                  {callout.number}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>

      {/* Legend below */}
      <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {callouts.map((callout, i) => (
          <motion.div
            key={callout.number}
            className="flex gap-3"
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.06 }}
          >
            <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-brand-100 text-xs font-bold text-brand-700">
              {callout.number}
            </div>
            <div>
              <p className="text-sm font-semibold text-neutral-900">
                {callout.label}
              </p>
              <p className="mt-0.5 text-sm leading-relaxed text-neutral-500">
                {callout.description}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
