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
  "M12 7.5h1.5m-1.5 3h1.5m-7.5 3h7.5m-7.5 3h7.5m3-9h3.375c.621 0 1.125.504 1.125 1.125V18a2.25 2.25 0 0 1-2.25 2.25H5.625a2.25 2.25 0 0 1-2.25-2.25V8.625c0-.621.504-1.125 1.125-1.125H6.75",
] as const;

const EASE = [0.32, 0.72, 0, 1] as const;

export function AnimatedTimeline() {
  const { stages } = howItWorksCopy;
  const [active, setActive] = useState(0);
  const [direction, setDirection] = useState(0);

  function handleSelect(i: number) {
    if (i === active) return;
    setDirection(i > active ? 1 : -1);
    setActive(i);
  }

  return (
    <div>
      {/* Tab bar */}
      <div className="flex justify-center">
        <div className="inline-flex gap-1 rounded-full bg-neutral-100 p-1">
          {stages.map((stage, i) => (
            <button
              key={stage.title}
              onClick={() => handleSelect(i)}
              className="relative rounded-full px-3 py-1.5 text-sm font-medium transition-colors sm:px-4 sm:py-2"
            >
              {active === i && (
                <motion.div
                  layoutId="stage-pill"
                  className="absolute inset-0 rounded-full bg-white shadow-sm"
                  transition={{ duration: 0.25, ease: EASE }}
                />
              )}
              <span
                className={`relative z-10 flex items-center gap-1.5 whitespace-nowrap ${
                  active === i
                    ? "text-brand-700"
                    : "text-neutral-500 hover:text-neutral-700"
                }`}
              >
                <svg
                  className="hidden h-4 w-4 sm:block"
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
                {stage.title}
              </span>
            </button>
          ))}
        </div>
      </div>

      {/* Content panel */}
      <div className="relative mt-8 overflow-hidden">
        <AnimatePresence mode="wait" initial={false}>
          <motion.div
            key={active}
            initial={{ opacity: 0, x: direction * 40 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: direction * -40 }}
            transition={{ duration: 0.2, ease: EASE }}
            className="rounded-xl border border-neutral-100 bg-white p-6 sm:p-8"
            style={{ boxShadow: "0 1px 3px rgba(0,0,0,0.04)" }}
          >
            <div className="flex items-baseline gap-2">
              <h3 className="text-lg font-semibold text-neutral-900">
                {stages[active].title}
              </h3>
              <span className="text-sm font-medium text-brand-600">
                {stages[active].output}
              </span>
            </div>
            <p className="mt-3 leading-relaxed text-neutral-600">
              {stages[active].description}
            </p>
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
}
