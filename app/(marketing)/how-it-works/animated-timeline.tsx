"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { howItWorksCopy } from "@/content/how-it-works";

const STAGE_ICONS = [
  "M2.036 12.322a1.012 1.012 0 0 1 0-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178ZM15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z",
  "M9.53 16.122a3 3 0 0 0-5.78 1.128 2.25 2.25 0 0 1-2.4 2.245 4.5 4.5 0 0 0 8.4-2.245c0-.399-.078-.78-.22-1.128Zm0 0a15.998 15.998 0 0 0 3.388-1.62m-5.043-.025a15.994 15.994 0 0 1 1.622-3.395m3.42 3.42a15.995 15.995 0 0 0 4.764-4.648l3.876-5.814a1.151 1.151 0 0 0-1.597-1.597L14.146 6.32a15.996 15.996 0 0 0-4.649 4.763m3.42 3.42a6.776 6.776 0 0 0-3.42-3.42",
  "M3.75 3v11.25A2.25 2.25 0 0 0 6 16.5h2.25M3.75 3h-1.5m1.5 0h16.5m0 0h1.5m-1.5 0v11.25A2.25 2.25 0 0 1 18 16.5h-2.25m-7.5 0h7.5m-7.5 0-1 3m8.5-3 1 3m0 0 .5 1.5m-.5-1.5h-9.5m0 0-.5 1.5m.75-9 3-3 2.148 2.148A12.061 12.061 0 0 1 16.5 7.605",
  "M15.59 14.37a48.474 48.474 0 0 0-6.05-6.05l-2.007 2.007a4.127 4.127 0 0 1-1.308 6.135A16.005 16.005 0 0 0 3.1 19.587 11.89 11.89 0 0 0 12 24c3.065 0 5.881-1.153 8.012-3.05a4.127 4.127 0 0 1-1.308-6.135l-2.007 2.007a48.474 48.474 0 0 0-1.107-.452ZM15.59 14.37l4.95-4.95",
  "M2.25 18 9 11.25l4.306 4.306a11.95 11.95 0 0 1 5.814-5.518l2.74-1.22m0 0-5.94-2.281m5.94 2.28-2.28 5.941",
] as const;

export function AnimatedTimeline() {
  const { stages } = howItWorksCopy;
  const [active, setActive] = useState(0);

  return (
    <div>
      {/* Step indicators */}
      <div className="relative flex items-center justify-between">
        {/* Connecting line (behind nodes) */}
        <div className="absolute inset-x-0 top-1/2 hidden h-px -translate-y-1/2 bg-neutral-200 md:block" />
        <motion.div
          className="absolute top-1/2 hidden h-px origin-left -translate-y-1/2 bg-brand-500 md:block"
          style={{ left: 0 }}
          animate={{ width: `${(active / (stages.length - 1)) * 100}%` }}
          transition={{ type: "spring", stiffness: 300, damping: 30 }}
        />

        {stages.map((stage, i) => {
          const isActive = i === active;
          const isPast = i < active;

          return (
            <button
              key={stage.title}
              onClick={() => setActive(i)}
              className="group relative z-10 flex flex-col items-center gap-2"
            >
              <motion.span
                className={`flex h-10 w-10 items-center justify-center rounded-full border-2 transition-colors ${
                  isActive
                    ? "border-brand-600 bg-brand-600 text-white"
                    : isPast
                      ? "border-brand-500 bg-brand-50 text-brand-600"
                      : "border-neutral-200 bg-white text-neutral-400 group-hover:border-neutral-300"
                }`}
                animate={isActive ? { scale: [1, 1.1, 1] } : { scale: 1 }}
                transition={{ duration: 0.3 }}
              >
                <svg
                  className="h-4.5 w-4.5"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d={STAGE_ICONS[i]}
                  />
                </svg>
              </motion.span>
              <span
                className={`hidden text-xs font-medium md:block ${
                  isActive
                    ? "text-brand-700"
                    : isPast
                      ? "text-brand-600"
                      : "text-neutral-400 group-hover:text-neutral-600"
                }`}
              >
                {stage.title}
              </span>
            </button>
          );
        })}
      </div>

      {/* Expanded content panel */}
      <AnimatePresence mode="wait">
        <motion.div
          key={active}
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -8 }}
          transition={{ duration: 0.3 }}
          className="mt-10 rounded-xl border border-neutral-100 bg-white p-6 sm:p-8"
          style={{ boxShadow: "0 1px 2px rgba(0,0,0,0.04)" }}
        >
          <div className="flex items-start gap-4">
            <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-brand-50 text-brand-700">
              <svg
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d={STAGE_ICONS[active]}
                />
              </svg>
            </span>
            <div className="min-w-0">
              <h3 className="text-lg font-semibold text-neutral-900">
                {stages[active].title}
              </h3>
              <p className="mt-1 text-sm font-medium text-brand-600">
                Output: {stages[active].output}
              </p>
            </div>
          </div>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.12, duration: 0.3 }}
            className="mt-4 leading-relaxed text-neutral-600"
          >
            {stages[active].description}
          </motion.p>

          {/* Stage navigation */}
          <div className="mt-6 flex items-center justify-between border-t border-neutral-100 pt-4">
            <button
              onClick={() => setActive(Math.max(0, active - 1))}
              disabled={active === 0}
              className="text-sm font-medium text-neutral-400 transition-colors hover:text-neutral-600 disabled:invisible"
            >
              Previous
            </button>
            <span className="text-xs text-neutral-400">
              {active + 1} of {stages.length}
            </span>
            <button
              onClick={() => setActive(Math.min(stages.length - 1, active + 1))}
              disabled={active === stages.length - 1}
              className="text-sm font-medium text-brand-600 transition-colors hover:text-brand-700 disabled:invisible"
            >
              Next
            </button>
          </div>
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
