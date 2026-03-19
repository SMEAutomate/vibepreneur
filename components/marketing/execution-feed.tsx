"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Section } from "@/components/ui/section";
import { siteCopy } from "@/content/copy";

const actionIcons: Record<string, string> = {
  generated:
    "M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09z",
  drafted:
    "M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931z",
  identified:
    "M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z",
  prepared:
    "M3.75 12h16.5m-16.5 3.75h16.5M3.75 19.5h16.5M5.625 4.5h12.75a1.875 1.875 0 010 3.75H5.625a1.875 1.875 0 010-3.75z",
  updated:
    "M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0l3.181 3.183a8.25 8.25 0 0013.803-3.7M4.031 9.865a8.25 8.25 0 0113.803-3.7l3.181 3.182",
  completed: "M5 13l4 4L19 7",
  refined:
    "M10.5 6h9.75M10.5 6a1.5 1.5 0 11-3 0m3 0a1.5 1.5 0 10-3 0M3.75 6H7.5m3 12h9.75m-9.75 0a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m-3.75 0H7.5m9-6h3.75m-3.75 0a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m-9.75 0h9.75",
  mapped: "M9 6.75V15m0 0l3-3m-3 3l-3-3m12 0a9 9 0 11-18 0 9 9 0 0118 0z",
  created: "M12 4.5v15m7.5-7.5h-15",
};

function getIcon(action: string): string {
  const lower = action.toLowerCase();
  for (const [key, path] of Object.entries(actionIcons)) {
    if (lower.includes(key)) return path;
  }
  return actionIcons.generated;
}

export function ExecutionFeed() {
  const { executionFeed } = siteCopy;
  const containerRef = useRef<HTMLDivElement>(null);
  const inView = useInView(containerRef, { once: true, margin: "-60px" });

  return (
    <Section background="light">
      <div className="mx-auto max-w-2xl text-center">
        <h2 className="text-display-sm">{executionFeed.headline}</h2>
        <p className="mt-4 text-neutral-600">{executionFeed.body}</p>
      </div>

      <div
        ref={containerRef}
        className="mx-auto mt-12 max-w-2xl overflow-hidden rounded-xl border border-neutral-200 bg-white shadow-sm"
      >
        <div className="flex items-center justify-between border-b border-neutral-100 px-5 py-3">
          <div className="flex items-center gap-2">
            <motion.div
              className="h-2 w-2 rounded-full bg-emerald-500"
              animate={inView ? { opacity: [1, 0.3, 1] } : {}}
              transition={{ duration: 2, repeat: Infinity }}
            />
            <span className="text-xs font-semibold uppercase tracking-wider text-neutral-500">
              Activity Feed
            </span>
          </div>
          <span className="text-xs text-neutral-400">Live</span>
        </div>

        <div className="divide-y divide-neutral-50">
          {executionFeed.items.map((item, i) => (
            <motion.div
              key={item.action}
              className="flex items-center gap-3 px-5 py-3 transition-colors hover:bg-neutral-50"
              initial={{ opacity: 0, x: -12 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ delay: i * 0.08, duration: 0.35 }}
            >
              <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded-md bg-brand-50">
                <svg
                  className="h-3.5 w-3.5 text-brand-600"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={1.5}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d={getIcon(item.action)}
                  />
                </svg>
              </div>
              <span className="flex-1 text-sm text-neutral-700">
                {item.action}
              </span>
              <span className="shrink-0 text-xs text-neutral-400">
                {item.time}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </Section>
  );
}
