"use client";

import { motion } from "framer-motion";

const metrics = [
  {
    label: "Opportunity Score",
    value: "87",
    suffix: "/100",
    color: "text-emerald-600",
  },
  {
    label: "Buyer Clarity",
    value: "High",
    suffix: "",
    color: "text-brand-600",
  },
  {
    label: "Channel Fit",
    value: "3 strong",
    suffix: "",
    color: "text-brand-600",
  },
  {
    label: "Launch Readiness",
    value: "72%",
    suffix: "",
    color: "text-amber-600",
  },
];

const gtmMoves = [
  "Publish positioning article on LinkedIn",
  "Launch free assessment tool for lead capture",
  "Run cold outreach to 50 target buyers",
];

export function DashboardMock() {
  return (
    <motion.div
      className="relative mx-auto max-w-lg overflow-hidden rounded-2xl border border-neutral-200 bg-white shadow-xl"
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.3, duration: 0.6 }}
    >
      <div className="border-b border-neutral-100 px-6 py-4">
        <div className="flex items-center gap-2">
          <div className="h-3 w-3 rounded-full bg-red-300" />
          <div className="h-3 w-3 rounded-full bg-amber-300" />
          <div className="h-3 w-3 rounded-full bg-emerald-300" />
          <span className="ml-3 text-xs font-medium text-neutral-400">
            Strategic Dashboard
          </span>
        </div>
      </div>

      <div className="p-6">
        <div className="grid grid-cols-2 gap-4">
          {metrics.map((metric, i) => (
            <motion.div
              key={metric.label}
              className="rounded-lg border border-neutral-100 p-3"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.5 + i * 0.1 }}
            >
              <p className="text-xs font-medium text-neutral-500">
                {metric.label}
              </p>
              <p className={`mt-1 text-lg font-bold ${metric.color}`}>
                {metric.value}
                <span className="text-xs font-normal text-neutral-400">
                  {metric.suffix}
                </span>
              </p>
            </motion.div>
          ))}
        </div>

        <motion.div
          className="mt-4 rounded-lg bg-neutral-50 p-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.9 }}
        >
          <p className="text-xs font-semibold text-neutral-700">
            Next 3 GTM Moves
          </p>
          <ul className="mt-2 space-y-2">
            {gtmMoves.map((move, i) => (
              <li
                key={i}
                className="flex items-start gap-2 text-xs text-neutral-600"
              >
                <span className="mt-0.5 flex h-4 w-4 shrink-0 items-center justify-center rounded bg-brand-100 text-[10px] font-bold text-brand-700">
                  {i + 1}
                </span>
                {move}
              </li>
            ))}
          </ul>
        </motion.div>
      </div>
    </motion.div>
  );
}
