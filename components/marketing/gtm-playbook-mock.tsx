"use client";

import { motion } from "framer-motion";

const phases = [
  {
    title: "Channel Strategy",
    items: [
      "LinkedIn organic (primary)",
      "Newsletter cross-promo",
      "SEO long-tail",
    ],
  },
  {
    title: "Outreach",
    items: [
      "50 warm DMs/week",
      "3 case study partnerships",
      "1 co-marketing webinar",
    ],
  },
  {
    title: "Content",
    items: [
      "Weekly insight post",
      "Free audit tool",
      "Comparison landing page",
    ],
  },
];

export function GtmPlaybookMock() {
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
            GTM Playbook
          </span>
          <motion.span
            className="ml-auto rounded-full bg-brand-50 px-2 py-0.5 text-[10px] font-medium text-brand-600"
            animate={{ opacity: [1, 0.5, 1] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            generating...
          </motion.span>
        </div>
      </div>

      <div className="space-y-4 p-5">
        {phases.map((phase, pi) => (
          <motion.div
            key={phase.title}
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 + pi * 0.2, duration: 0.4 }}
          >
            <p className="text-[10px] font-semibold uppercase tracking-wider text-neutral-400">
              {phase.title}
            </p>
            <ul className="mt-1.5 space-y-1">
              {phase.items.map((item, ii) => (
                <motion.li
                  key={item}
                  className="flex items-center gap-2 text-xs text-neutral-700"
                  initial={{ opacity: 0, x: -8 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.5 + pi * 0.2 + ii * 0.08 }}
                >
                  <span className="h-1 w-1 shrink-0 rounded-full bg-brand-400" />
                  {item}
                </motion.li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
}
