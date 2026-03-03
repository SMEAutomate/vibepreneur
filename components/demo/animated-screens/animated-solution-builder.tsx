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

const features = [
  "Automated document collection & e-signatures",
  "Tool provisioning workflows (Slack, Google, HRIS)",
  "Training schedule builder with calendar sync",
  "Compliance checklist with audit trail",
  "New hire portal with day-by-day guide",
];

const outcomes = [
  {
    outcome: "Reduce onboarding time from 5 days to 1 day",
    metric: "80% faster",
  },
  {
    outcome: "Eliminate manual errors in provisioning",
    metric: "Zero missed steps",
  },
  { outcome: "Improve new hire satisfaction scores", metric: "+35 NPS points" },
  { outcome: "Free HR team for strategic work", metric: "12 hrs/week saved" },
];

const formats = ["SaaS platform", "Service", "Template kit", "Course"];

const pricing = [
  { tier: "Starter", price: "$49/mo", for: "1–50 employees" },
  { tier: "Growth", price: "$149/mo", for: "51–200 employees" },
  { tier: "Scale", price: "$399/mo", for: "201+ employees" },
];

export function AnimatedSolutionBuilder() {
  const phase = useAnimationLoop(7);

  return (
    <AppShell
      activeNav="Solutions"
      title="Solution Builder"
      subtitle="Structuring: Onboarding Automation Platform"
      actions={
        <>
          <button className="rounded-lg border border-neutral-200 px-4 py-2 text-xs font-medium text-neutral-600">
            Save draft
          </button>
          <button className="rounded-lg bg-brand-600 px-4 py-2 text-xs font-medium text-white">
            Generate brief →
          </button>
        </>
      }
    >
      <div className="grid gap-6 lg:grid-cols-2">
        <div className="space-y-5">
          {/* Offer Definition - phase 0 */}
          <motion.div
            animate={show(phase, 0)}
            transition={{ duration: 0.4, ease: EASE }}
            className="rounded-2xl border border-neutral-200 bg-white p-6"
          >
            <h2 className="text-sm font-semibold text-neutral-900">
              Offer Definition
            </h2>
            <div className="mt-4 space-y-4">
              <div>
                <label className="text-[10px] font-medium uppercase tracking-wider text-neutral-400">
                  Solution name
                </label>
                <div className="mt-1 rounded-lg border border-neutral-200 bg-neutral-50 px-4 py-2.5 text-sm text-neutral-800">
                  OnboardFlow
                </div>
              </div>
              <div>
                <label className="text-[10px] font-medium uppercase tracking-wider text-neutral-400">
                  One-line promise
                </label>
                <div className="mt-1 rounded-lg border border-neutral-200 bg-neutral-50 px-4 py-2.5 text-sm text-neutral-800">
                  Cut onboarding time by 80%. without changing your existing
                  tools.
                </div>
              </div>
              <div>
                <label className="text-[10px] font-medium uppercase tracking-wider text-neutral-400">
                  Format
                </label>
                <div className="mt-1 flex gap-2">
                  {formats.map((f) => (
                    <motion.span
                      key={f}
                      animate={{
                        backgroundColor:
                          f === "SaaS platform" && phase >= 6
                            ? "rgb(224, 219, 255)"
                            : f === "SaaS platform"
                              ? "rgb(238, 234, 255)"
                              : "rgb(245, 245, 245)",
                        scale: f === "SaaS platform" && phase >= 6 ? 1.05 : 1,
                      }}
                      transition={{ duration: 0.3, ease: EASE }}
                      className={`rounded-full px-3 py-1 text-xs font-medium ${f === "SaaS platform" ? "text-brand-700" : "text-neutral-500"}`}
                    >
                      {f}
                    </motion.span>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>

          {/* Features - phase 1 */}
          <motion.div
            animate={show(phase, 1)}
            transition={{ duration: 0.4, ease: EASE }}
            className="rounded-2xl border border-neutral-200 bg-white p-6"
          >
            <h2 className="text-sm font-semibold text-neutral-900">
              Core Features
            </h2>
            <div className="mt-4 space-y-2">
              {features.map((f, i) => (
                <div
                  key={f}
                  className="flex items-center gap-3 rounded-lg border border-neutral-100 p-3"
                >
                  <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded bg-brand-50 text-[10px] font-bold text-brand-700">
                    {i + 1}
                  </span>
                  <span className="text-sm text-neutral-700">{f}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>

        <div className="space-y-5">
          {/* Outcomes - phase 2 */}
          <motion.div
            animate={show(phase, 2)}
            transition={{ duration: 0.4, ease: EASE }}
            className="rounded-2xl border border-neutral-200 bg-white p-6"
          >
            <h2 className="text-sm font-semibold text-neutral-900">
              Buyer Outcomes
            </h2>
            <div className="mt-4 space-y-3">
              {outcomes.map((o) => (
                <div
                  key={o.outcome}
                  className="flex items-start gap-3 rounded-lg bg-neutral-50 p-3"
                >
                  <div className="flex-1">
                    <p className="text-sm text-neutral-700">{o.outcome}</p>
                  </div>
                  <span className="shrink-0 rounded-full bg-emerald-50 px-2.5 py-0.5 text-xs font-medium text-emerald-700">
                    {o.metric}
                  </span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Pricing - phase 3 */}
          <motion.div
            animate={show(phase, 3)}
            transition={{ duration: 0.4, ease: EASE }}
            className="rounded-2xl border border-neutral-200 bg-white p-6"
          >
            <h2 className="text-sm font-semibold text-neutral-900">
              Pricing Suggestion
            </h2>
            <div className="mt-4 grid grid-cols-3 gap-3">
              {pricing.map((t) => (
                <div
                  key={t.tier}
                  className={`rounded-xl border p-4 text-center ${t.tier === "Growth" ? "border-brand-200 bg-brand-50/30" : "border-neutral-200"}`}
                >
                  <p className="text-xs font-medium text-neutral-500">
                    {t.tier}
                  </p>
                  <p className="mt-1 text-lg font-bold text-neutral-900">
                    {t.price}
                  </p>
                  <p className="mt-1 text-[10px] text-neutral-400">{t.for}</p>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Readiness - phase 4, bar fills at phase 5 */}
          <motion.div
            animate={show(phase, 4)}
            transition={{ duration: 0.4, ease: EASE }}
            className="rounded-2xl border border-brand-100 bg-brand-50/30 p-6"
          >
            <h2 className="text-sm font-semibold text-brand-800">
              Solution Readiness
            </h2>
            <div className="mt-3 flex items-end gap-2">
              <span className="text-2xl font-bold text-brand-700">72%</span>
            </div>
            <motion.div
              className="mt-2 h-1.5 rounded-full bg-brand-100"
              style={{ overflow: "hidden" }}
            >
              <motion.div
                className="h-full rounded-full bg-brand-500"
                animate={{ width: phase >= 5 ? "72%" : "0%" }}
                transition={{ duration: 0.6, ease: EASE }}
              />
            </motion.div>
            <p className="mt-2 text-xs text-brand-600">
              Add competitive positioning and distribution plan to reach 90%.
            </p>
          </motion.div>
        </div>
      </div>
    </AppShell>
  );
}
