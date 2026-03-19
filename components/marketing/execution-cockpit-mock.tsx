"use client";

import { motion } from "framer-motion";

const COCKPIT_ITEMS = [
  { label: "Opportunity selected", status: "complete", icon: "M5 13l4 4L19 7" },
  { label: "Offer drafted", status: "complete", icon: "M5 13l4 4L19 7" },
  {
    label: "Landing page generated",
    status: "complete",
    icon: "M5 13l4 4L19 7",
  },
  {
    label: "Outreach plan created",
    status: "active",
    icon: "M12 6v6m0 0v6m0-6h6m-6 0H6",
  },
  {
    label: "Lead magnet ready",
    status: "active",
    icon: "M12 6v6m0 0v6m0-6h6m-6 0H6",
  },
  {
    label: "Waitlist live",
    status: "pending",
    icon: "M8 12h.01M12 12h.01M16 12h.01",
  },
  {
    label: "Daily brief prepared",
    status: "pending",
    icon: "M8 12h.01M12 12h.01M16 12h.01",
  },
];

const statusColor: Record<string, string> = {
  complete: "bg-emerald-500",
  active: "bg-amber-400",
  pending: "bg-neutral-300",
};

const statusRing: Record<string, string> = {
  complete: "ring-emerald-500/20",
  active: "ring-amber-400/20",
  pending: "ring-neutral-300/20",
};

const statusIcon: Record<string, string> = {
  complete: "text-emerald-600",
  active: "text-amber-600",
  pending: "text-neutral-400",
};

export function ExecutionCockpitMock() {
  return (
    <div className="relative rounded-xl border border-neutral-200 bg-white p-5 shadow-lg">
      <div className="mb-4 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="h-2.5 w-2.5 rounded-full bg-emerald-500" />
          <span className="text-xs font-semibold uppercase tracking-wider text-neutral-500">
            Execution Cockpit
          </span>
        </div>
        <span className="text-xs text-neutral-400">Live</span>
      </div>

      <div className="mb-4 rounded-lg bg-neutral-50 px-4 py-3">
        <p className="text-xs font-medium text-neutral-500">Active Venture</p>
        <p className="mt-0.5 text-sm font-semibold text-neutral-900">
          HR Onboarding Automation Platform
        </p>
        <div className="mt-2 flex gap-3">
          <span className="text-xs text-neutral-500">
            Stage: <span className="font-medium text-brand-700">Launch</span>
          </span>
          <span className="text-xs text-neutral-500">
            Progress: <span className="font-medium text-neutral-800">68%</span>
          </span>
        </div>
      </div>

      <div className="space-y-2">
        {COCKPIT_ITEMS.map((item, i) => (
          <motion.div
            key={item.label}
            className="flex items-center gap-3 rounded-lg px-3 py-2 transition-colors hover:bg-neutral-50"
            initial={{ opacity: 0, x: -12 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4 + i * 0.1, duration: 0.35 }}
          >
            <div
              className={`flex h-6 w-6 shrink-0 items-center justify-center rounded-full ring-2 ${statusColor[item.status]} ${statusRing[item.status]}`}
            >
              <svg
                className={`h-3 w-3 text-white`}
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2.5}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d={item.icon}
                />
              </svg>
            </div>
            <span
              className={`text-sm ${item.status === "complete" ? "text-neutral-500 line-through decoration-neutral-300" : item.status === "active" ? "font-medium text-neutral-900" : "text-neutral-400"}`}
            >
              {item.label}
            </span>
            {item.status === "active" && (
              <motion.div
                className="ml-auto h-1.5 w-1.5 rounded-full bg-amber-400"
                animate={{ opacity: [1, 0.3, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
              />
            )}
          </motion.div>
        ))}
      </div>

      <div className="mt-4 flex items-center justify-between rounded-lg bg-brand-50 px-4 py-2.5">
        <span className="text-xs font-medium text-brand-700">
          Next: Generate outbound sequences
        </span>
        <svg
          className="h-4 w-4 text-brand-500"
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
      </div>
    </div>
  );
}
