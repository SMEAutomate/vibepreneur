"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Section } from "@/components/ui/section";
import { siteCopy } from "@/content/copy";

const moduleIcons = [
  "M12 18v-5.25m0 0a6.01 6.01 0 001.5-.189m-1.5.189a6.01 6.01 0 01-1.5-.189m3.75 7.478a12.06 12.06 0 01-4.5 0m3.75 2.383a14.406 14.406 0 01-3 0M14.25 18v-.192c0-.983.658-1.823 1.508-2.316a7.5 7.5 0 10-7.517 0c.85.493 1.509 1.333 1.509 2.316V18",
  "M3.75 3v11.25A2.25 2.25 0 006 16.5h2.25M3.75 3h-1.5m1.5 0h16.5m0 0h1.5m-1.5 0v11.25A2.25 2.25 0 0118 16.5h-2.25m-7.5 0h7.5m-7.5 0l-1 3m8.5-3l1 3m0 0l.5 1.5m-.5-1.5h-9.5m0 0l-.5 1.5",
  "M15.59 14.37a6 6 0 01-5.84 7.38v-4.8m5.84-2.58a14.98 14.98 0 006.16-12.12A14.98 14.98 0 009.631 8.41m5.96 5.96a14.926 14.926 0 01-5.841 2.58m-.119-8.54a6 6 0 00-7.381 5.84h4.8m2.581-5.84a14.927 14.927 0 00-2.58 5.84m2.699 2.7c-.103.021-.207.041-.311.06a15.09 15.09 0 01-2.448-2.448 14.9 14.9 0 01.06-.312m-2.24 2.39a4.493 4.493 0 00-1.757 4.306 4.493 4.493 0 004.306-1.758M16.5 9a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0z",
  "M2.25 18L9 11.25l4.306 4.307a11.95 11.95 0 015.814-5.519l2.74-1.22m0 0l-5.94-2.28m5.94 2.28l-2.28 5.941",
  "M3.75 6A2.25 2.25 0 016 3.75h2.25A2.25 2.25 0 0110.5 6v2.25a2.25 2.25 0 01-2.25 2.25H6a2.25 2.25 0 01-2.25-2.25V6zM3.75 15.75A2.25 2.25 0 016 13.5h2.25a2.25 2.25 0 012.25 2.25V18a2.25 2.25 0 01-2.25 2.25H6A2.25 2.25 0 013.75 18v-2.25zM13.5 6a2.25 2.25 0 012.25-2.25H18A2.25 2.25 0 0120.25 6v2.25A2.25 2.25 0 0118 10.5h-2.25a2.25 2.25 0 01-2.25-2.25V6zM13.5 15.75a2.25 2.25 0 012.25-2.25H18a2.25 2.25 0 012.25 2.25V18A2.25 2.25 0 0118 20.25h-2.25A2.25 2.25 0 0113.5 18v-2.25z",
  "M12 7.5h1.5m-1.5 3h1.5m-7.5 3h7.5m-7.5 3h7.5m3-9h3.375c.621 0 1.125.504 1.125 1.125V18a2.25 2.25 0 01-2.25 2.25H5.625a2.25 2.25 0 01-2.25-2.25V8.625c0-.621.504-1.125 1.125-1.125H6.75",
];

export function VentureOS() {
  const { ventureOs } = siteCopy;
  const [activeIndex, setActiveIndex] = useState(0);
  const activeItem = ventureOs.items[activeIndex];

  return (
    <Section id="modules" background="light">
      <h2 className="text-center text-display-sm">{ventureOs.headline}</h2>

      <div className="mt-12 grid gap-8 lg:grid-cols-[280px_1fr]">
        <div className="flex flex-row gap-2 overflow-x-auto lg:flex-col lg:gap-1 lg:overflow-visible">
          {ventureOs.items.map((item, i) => (
            <button
              key={item.title}
              onClick={() => setActiveIndex(i)}
              className={`flex shrink-0 items-center gap-3 rounded-lg px-4 py-3 text-left text-sm transition-all ${
                i === activeIndex
                  ? "bg-white font-semibold text-neutral-900 shadow-sm ring-1 ring-neutral-200"
                  : "text-neutral-600 hover:bg-white/60 hover:text-neutral-900"
              }`}
            >
              <svg
                className={`h-5 w-5 shrink-0 ${i === activeIndex ? "text-brand-600" : "text-neutral-400"}`}
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={1.5}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d={moduleIcons[i]}
                />
              </svg>
              <span className="whitespace-nowrap">{item.title}</span>
            </button>
          ))}
        </div>

        <AnimatePresence mode="wait">
          <motion.div
            key={activeIndex}
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.25 }}
            className="rounded-xl border border-neutral-200 bg-white p-8 shadow-sm"
          >
            <div className="flex items-start gap-4">
              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-brand-50">
                <svg
                  className="h-6 w-6 text-brand-700"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={1.5}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d={moduleIcons[activeIndex]}
                  />
                </svg>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-neutral-900">
                  {activeItem.title}
                </h3>
                <p className="mt-3 leading-relaxed text-neutral-600">
                  {activeItem.description}
                </p>
                <div className="mt-5 inline-flex items-center gap-2 rounded-full bg-brand-50 px-4 py-2">
                  <svg
                    className="h-4 w-4 text-brand-600"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
                    />
                  </svg>
                  <span className="text-sm font-medium text-brand-700">
                    {activeItem.outcome}
                  </span>
                </div>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </Section>
  );
}
