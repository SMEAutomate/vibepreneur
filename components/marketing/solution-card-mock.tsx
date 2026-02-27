"use client";

import { motion } from "framer-motion";

const fields = [
  {
    label: "Problem",
    value: "HR teams spend 12+ hrs/week on manual onboarding",
  },
  { label: "Buyer", value: "VP People Ops at 50-200 person startups" },
  { label: "Offer", value: "Automated onboarding workflow builder" },
  {
    label: "Distribution",
    value: "LinkedIn content + free onboarding audit tool",
  },
];

export function SolutionCardMock() {
  return (
    <motion.div
      className="relative mx-auto max-w-sm overflow-hidden rounded-2xl border border-neutral-200 bg-white shadow-xl"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.6 }}
    >
      <div className="border-b border-neutral-100 px-5 py-3">
        <div className="flex items-center gap-2">
          <div className="h-2.5 w-2.5 rounded-full bg-red-300" />
          <div className="h-2.5 w-2.5 rounded-full bg-amber-300" />
          <div className="h-2.5 w-2.5 rounded-full bg-emerald-300" />
          <span className="ml-3 text-xs font-medium text-neutral-400">
            Solution Builder
          </span>
        </div>
      </div>

      <div className="space-y-3 p-5">
        {fields.map((field, i) => (
          <motion.div
            key={field.label}
            className="rounded-lg border border-neutral-100 p-3"
            initial={{ opacity: 0, x: -12 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 + i * 0.15, duration: 0.35 }}
          >
            <p className="text-[10px] font-semibold uppercase tracking-wider text-neutral-400">
              {field.label}
            </p>
            <p className="mt-1 text-xs text-neutral-700">{field.value}</p>
          </motion.div>
        ))}

        <motion.div
          className="mt-2"
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 1, duration: 0.8, ease: "easeOut" }}
          style={{ originX: 0 }}
        >
          <div className="h-1.5 rounded-full bg-brand-200">
            <div className="h-full w-full rounded-full bg-brand-500" />
          </div>
          <p className="mt-1 text-right text-[10px] font-medium text-brand-600">
            Complete
          </p>
        </motion.div>
      </div>
    </motion.div>
  );
}
