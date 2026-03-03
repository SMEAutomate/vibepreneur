"use client";

import { motion } from "framer-motion";
import { AppShell } from "../AppShell";
import { useAnimationLoop } from "../use-animation-loop";

const EASE = [0.32, 0.72, 0, 1] as const;

function show(phase: number, threshold: number) {
  return {
    opacity: phase >= threshold ? 1 : 0,
    y: phase >= threshold ? 0 : 16,
  };
}

const readinessData = [
  { label: "Positioning clarity", pct: 85, color: "bg-emerald-500" },
  { label: "Channel fit", pct: 72, color: "bg-amber-500" },
  { label: "Content prepared", pct: 40, color: "bg-brand-500" },
  { label: "Outreach ready", pct: 60, color: "bg-brand-400" },
];

const gtmMoves = [
  { n: 1, text: "Publish positioning article on LinkedIn", due: "Today" },
  { n: 2, text: "Launch free onboarding audit tool", due: "This week" },
  { n: 3, text: "Run cold outreach to 50 target buyers", due: "Next week" },
];

const activityItems = [
  { text: "Solution brief exported", time: "2h ago" },
  { text: "Positioning canvas updated", time: "5h ago" },
  { text: "New opportunity detected", time: "1d ago" },
];

export function AnimatedHomeOverview() {
  const phase = useAnimationLoop(6);

  return (
    <AppShell
      activeNav="Home"
      title="Good morning, Sarah"
      subtitle="Here's what needs your attention today."
    >
      <div className="grid gap-6 lg:grid-cols-3">
        <div className="space-y-6 lg:col-span-2">
          {/* Top Opportunity - phase 0 */}
          <motion.div
            animate={show(phase, 0)}
            transition={{ duration: 0.4, ease: EASE }}
            className="rounded-2xl border border-neutral-200 bg-white p-6"
          >
            <div className="flex items-center justify-between">
              <h2 className="text-sm font-semibold text-neutral-900">
                Top Opportunity
              </h2>
              <span className="rounded-full bg-emerald-50 px-3 py-1 text-xs font-medium text-emerald-700">
                Score: 87
              </span>
            </div>
            <p className="mt-3 text-base font-medium text-neutral-800">
              HR teams spend 12+ hours/week on manual onboarding
            </p>
            <p className="mt-1 text-sm text-neutral-500">
              VP People Ops at 50–200 person startups are actively seeking
              solutions.
            </p>
            <div className="mt-4 flex gap-2">
              <motion.button
                animate={{
                  boxShadow:
                    phase >= 5
                      ? "0 0 0 3px rgba(79, 70, 229, 0.3)"
                      : "0 0 0 0px rgba(79, 70, 229, 0)",
                }}
                transition={{ duration: 0.4, ease: EASE }}
                className="rounded-lg bg-brand-600 px-4 py-2 text-xs font-medium text-white"
              >
                Explore this
              </motion.button>
              <button className="rounded-lg border border-neutral-200 px-4 py-2 text-xs font-medium text-neutral-600">
                Save for later
              </button>
            </div>
          </motion.div>

          {/* GTM Moves - phase 1 */}
          <motion.div
            animate={show(phase, 1)}
            transition={{ duration: 0.4, ease: EASE }}
            className="rounded-2xl border border-neutral-200 bg-white p-6"
          >
            <h2 className="text-sm font-semibold text-neutral-900">
              Next 3 GTM Moves
            </h2>
            <div className="mt-4 space-y-3">
              {gtmMoves.map((m) => (
                <div
                  key={m.n}
                  className="flex items-center gap-3 rounded-lg border border-neutral-100 p-3"
                >
                  <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-md bg-brand-50 text-xs font-bold text-brand-700">
                    {m.n}
                  </span>
                  <span className="flex-1 text-sm text-neutral-700">
                    {m.text}
                  </span>
                  <span className="text-xs text-neutral-400">{m.due}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>

        <div className="space-y-6">
          {/* Readiness bars - phase 2, bars fill at phase 3 */}
          <motion.div
            animate={show(phase, 2)}
            transition={{ duration: 0.4, ease: EASE }}
            className="rounded-2xl border border-neutral-200 bg-white p-6"
          >
            <h2 className="text-sm font-semibold text-neutral-900">
              Launch Readiness
            </h2>
            <div className="mt-4 space-y-4">
              {readinessData.map((r) => (
                <div key={r.label}>
                  <div className="flex justify-between text-xs">
                    <span className="text-neutral-600">{r.label}</span>
                    <span className="font-medium text-neutral-900">
                      {r.pct}%
                    </span>
                  </div>
                  <div className="mt-1 h-1.5 rounded-full bg-neutral-100">
                    <motion.div
                      className={`h-full rounded-full ${r.color}`}
                      animate={{ width: phase >= 3 ? `${r.pct}%` : "0%" }}
                      transition={{ duration: 0.6, ease: EASE }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Activity - phase 4 */}
          <motion.div
            animate={show(phase, 4)}
            transition={{ duration: 0.4, ease: EASE }}
            className="rounded-2xl border border-neutral-200 bg-white p-6"
          >
            <h2 className="text-sm font-semibold text-neutral-900">
              Recent Activity
            </h2>
            <div className="mt-4 space-y-3">
              {activityItems.map((a) => (
                <div key={a.text} className="flex items-center justify-between">
                  <span className="text-xs text-neutral-600">{a.text}</span>
                  <span className="text-[10px] text-neutral-400">{a.time}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </AppShell>
  );
}
