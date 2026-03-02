"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { howItWorksCopy } from "@/content/how-it-works";

const SECTION_ICONS = {
  problem:
    "M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126ZM12 15.75h.007v.008H12v-.008Z",
  buyer:
    "M18 18.72a9.094 9.094 0 0 0 3.741-.479 3 3 0 0 0-4.682-2.72m.94 3.198.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0 1 12 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 0 1 6 18.719m12 0a5.971 5.971 0 0 0-.941-3.197m0 0A5.995 5.995 0 0 0 12 12.75a5.995 5.995 0 0 0-5.058 2.772m0 0a3 3 0 0 0-4.681 2.72 8.986 8.986 0 0 0 3.74.477m.94-3.197a5.971 5.971 0 0 0-.94 3.197M15 6.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Zm6 3a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0Zm-13.5 0a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0Z",
  offer:
    "M12 18v-5.25m0 0a6.01 6.01 0 0 0 1.5-.189m-1.5.189a6.01 6.01 0 0 1-1.5-.189m3.75 7.478a12.06 12.06 0 0 1-4.5 0m3.75 2.383a14.406 14.406 0 0 1-3 0M14.25 18v-.192c0-.983.658-1.823 1.508-2.316a7.5 7.5 0 1 0-7.517 0c.85.493 1.509 1.333 1.509 2.316V18",
  distribution:
    "M10.34 15.84c-.688-.06-1.386-.09-2.09-.09H7.5a4.5 4.5 0 1 1 0-9h.75c.704 0 1.402-.03 2.09-.09m0 9.18c.253.962.584 1.892.985 2.783.247.55.06 1.21-.463 1.511l-.657.38c-.551.318-1.26.117-1.527-.461a20.845 20.845 0 0 1-1.44-4.282m3.102.069a18.03 18.03 0 0 1-.59-4.59c0-1.586.205-3.124.59-4.59m0 9.18a23.848 23.848 0 0 1 8.835 2.535M10.34 6.66a23.847 23.847 0 0 0 8.835-2.535m0 0A23.74 23.74 0 0 0 18.795 3m.38 1.125a23.91 23.91 0 0 1 1.014 5.395m-1.014 8.855c-.118.38-.245.754-.38 1.125m.38-1.125a23.91 23.91 0 0 0 1.014-5.395m0-3.46c.495.413.811 1.035.811 1.73 0 .695-.316 1.317-.811 1.73m0-3.46a24.347 24.347 0 0 1 0 3.46",
} as const;

const SECTIONS = [
  { key: "problem", label: "Problem", icon: SECTION_ICONS.problem },
  { key: "buyer", label: "Buyer", icon: SECTION_ICONS.buyer },
  { key: "offer", label: "Offer", icon: SECTION_ICONS.offer },
  {
    key: "distributionChannel",
    label: "Go-to-market channel",
    icon: SECTION_ICONS.distribution,
  },
] as const;

function SectionIcon({ d }: { d: string }) {
  return (
    <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-brand-50 text-brand-700">
      <svg
        className="h-5 w-5"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
      >
        <path strokeLinecap="round" strokeLinejoin="round" d={d} />
      </svg>
    </span>
  );
}

export function StaggeredExamples() {
  const { solutionExamples } = howItWorksCopy;
  const [active, setActive] = useState(0);
  const example = solutionExamples[active];

  return (
    <div className="mt-12">
      {/* Toggle bar */}
      <div className="flex justify-center gap-2">
        {solutionExamples.map((ex, i) => (
          <button
            key={ex.title}
            onClick={() => setActive(i)}
            className="relative px-4 py-2 text-sm font-medium transition-colors"
          >
            <span
              className={
                active === i
                  ? "font-semibold text-brand-700"
                  : "text-neutral-400 hover:text-neutral-600"
              }
            >
              {ex.title}
            </span>
            {active === i && (
              <motion.div
                layoutId="active-example"
                className="absolute inset-x-0 -bottom-px h-0.5 rounded-full bg-brand-600"
                transition={{ type: "spring", stiffness: 400, damping: 30 }}
              />
            )}
          </button>
        ))}
      </div>

      {/* Content */}
      <AnimatePresence mode="wait">
        <motion.div
          key={example.title}
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -8 }}
          transition={{ duration: 0.3 }}
          className="mt-8 rounded-xl border border-neutral-100 bg-white p-6 sm:p-8"
          style={{ boxShadow: "0 1px 2px rgba(0,0,0,0.04)" }}
        >
          {/* 2x2 grid: Problem, Buyer, Offer, Distribution */}
          <div className="grid gap-6 md:grid-cols-2">
            {SECTIONS.map((section, i) => (
              <motion.div
                key={section.key}
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.08, duration: 0.35 }}
                className="space-y-2"
              >
                <div className="flex items-center gap-3">
                  <SectionIcon d={section.icon} />
                  <p className="text-xs font-semibold uppercase tracking-wider text-neutral-400">
                    {section.label}
                  </p>
                </div>
                <p className="text-sm leading-relaxed text-neutral-600">
                  {example[section.key]}
                </p>
              </motion.div>
            ))}
          </div>

          {/* First 3 Moves */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.32, duration: 0.35 }}
            className="mt-8"
          >
            <p className="text-xs font-semibold uppercase tracking-wider text-neutral-400">
              First 3 Moves
            </p>
            <div className="mt-3 grid gap-4 md:grid-cols-3">
              {example.firstMoves.map((move, j) => (
                <motion.div
                  key={j}
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.4 + j * 0.08, duration: 0.3 }}
                  className="rounded-xl bg-brand-50 p-4"
                >
                  <span className="flex h-7 w-7 items-center justify-center rounded-full bg-brand-600 text-xs font-bold text-white">
                    {j + 1}
                  </span>
                  <p className="mt-2 text-sm leading-relaxed text-neutral-700">
                    {move}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
