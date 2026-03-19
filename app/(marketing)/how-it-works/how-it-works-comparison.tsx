"use client";

import { motion } from "framer-motion";
import { howItWorksCopy } from "@/content/how-it-works";

export function HowItWorksComparison() {
  const { comparison } = howItWorksCopy;

  return (
    <div className="mx-auto max-w-3xl">
      <h2 className="text-center text-display-sm">
        What you do vs what Vibepreneur does
      </h2>
      <div className="mt-10 grid gap-6 sm:grid-cols-2">
        <motion.div
          className="rounded-xl border border-neutral-200 bg-white p-6"
          initial={{ opacity: 0, x: -16 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
        >
          <h3 className="text-sm font-semibold uppercase tracking-wider text-neutral-500">
            {comparison.you.title}
          </h3>
          <ul className="mt-4 space-y-3">
            {comparison.you.items.map((item) => (
              <li key={item} className="flex items-start gap-2.5 text-sm">
                <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-neutral-400" />
                <span className="text-neutral-700">{item}</span>
              </li>
            ))}
          </ul>
        </motion.div>

        <motion.div
          className="rounded-xl border border-brand-200 bg-brand-50 p-6"
          initial={{ opacity: 0, x: 16 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
        >
          <h3 className="text-sm font-semibold uppercase tracking-wider text-brand-600">
            {comparison.vibepreneur.title}
          </h3>
          <ul className="mt-4 space-y-3">
            {comparison.vibepreneur.items.map((item) => (
              <li key={item} className="flex items-start gap-2.5 text-sm">
                <svg
                  className="mt-0.5 h-4 w-4 shrink-0 text-brand-600"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M5 13l4 4L19 7"
                  />
                </svg>
                <span className="text-neutral-800">{item}</span>
              </li>
            ))}
          </ul>
        </motion.div>
      </div>
    </div>
  );
}
