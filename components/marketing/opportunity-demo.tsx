"use client";

import { useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Section } from "@/components/ui/section";
import { roles, industries } from "@/content/waitlist";
import {
  generateSolutions,
  type GeneratedSolution,
} from "@/lib/solutionGenerator";

function hashScore(s: GeneratedSolution): number {
  let hash = 0;
  const str = s.problem + s.buyer + s.offer;
  for (let i = 0; i < str.length; i++) {
    hash = (hash << 5) - hash + str.charCodeAt(i);
    hash |= 0;
  }
  return 72 + (Math.abs(hash) % 22);
}

function urgencyLabel(score: number): { text: string; color: string } {
  if (score >= 90)
    return { text: "High demand", color: "text-emerald-700 bg-emerald-100" };
  if (score >= 80)
    return { text: "Growing demand", color: "text-brand-700 bg-brand-100" };
  return { text: "Emerging", color: "text-amber-700 bg-amber-100" };
}

function OpportunityCard({
  solution,
  index,
}: {
  solution: GeneratedSolution;
  index: number;
}) {
  const score = hashScore(solution);
  const urgency = urgencyLabel(score);

  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -8 }}
      transition={{ delay: index * 0.1, duration: 0.3 }}
      className="rounded-lg border border-neutral-200 bg-white p-5"
    >
      <div className="flex items-start justify-between gap-3">
        <div className="min-w-0 flex-1">
          <div className="flex flex-wrap items-center gap-2">
            <span className="inline-flex rounded-full bg-neutral-100 px-2.5 py-0.5 text-[10px] font-medium uppercase tracking-wider text-neutral-600">
              {solution.solutionTypeLabel}
            </span>
            <span
              className={`inline-flex rounded-full px-2.5 py-0.5 text-[10px] font-medium ${urgency.color}`}
            >
              {urgency.text}
            </span>
          </div>
          <p className="mt-2 text-sm font-medium text-neutral-900">
            {solution.problem}
          </p>
        </div>
        <div className="flex h-11 w-11 shrink-0 flex-col items-center justify-center rounded-lg bg-brand-50">
          <span className="text-lg font-bold leading-none text-brand-700">
            {score}
          </span>
          <span className="text-[8px] uppercase tracking-wider text-brand-500">
            Score
          </span>
        </div>
      </div>

      <div className="mt-3 flex items-center gap-1.5 text-xs text-neutral-500">
        <svg
          className="h-3.5 w-3.5 shrink-0"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={1.5}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z"
          />
        </svg>
        <span className="truncate">{solution.buyer}</span>
      </div>

      <div className="mt-3 rounded-md bg-neutral-50 p-3">
        <p className="text-[10px] font-semibold uppercase tracking-wider text-neutral-400">
          First move
        </p>
        <p className="mt-1 text-xs text-neutral-700">
          {solution.firstMoves[0]}
        </p>
      </div>
    </motion.div>
  );
}

export function OpportunityDemo() {
  const [role, setRole] = useState("");
  const [industry, setIndustry] = useState("");

  const solutions = useMemo(() => {
    if (!role) return null;
    return generateSolutions(role, industry || undefined).slice(0, 3);
  }, [role, industry]);

  return (
    <Section>
      <div className="mx-auto max-w-3xl">
        <h2 className="text-center text-display-sm">
          Try the Opportunity Engine
        </h2>
        <p className="mx-auto mt-4 max-w-xl text-center text-neutral-600">
          Select your role and industry to see what opportunities the system
          would surface for your background.
        </p>

        <div className="mt-10 overflow-hidden rounded-xl border border-neutral-200 bg-white shadow-lg">
          <div className="flex items-center gap-1.5 border-b border-neutral-100 bg-neutral-50 px-4 py-2.5">
            <span className="h-2.5 w-2.5 rounded-full bg-neutral-300" />
            <span className="h-2.5 w-2.5 rounded-full bg-neutral-300" />
            <span className="h-2.5 w-2.5 rounded-full bg-neutral-300" />
            <span className="ml-3 text-xs text-neutral-400">
              vibepreneur.com / opportunity-engine
            </span>
          </div>

          <div className="p-6">
            <div className="grid gap-4 sm:grid-cols-2">
              <div>
                <label className="mb-1.5 block text-xs font-medium text-neutral-700">
                  Your role
                </label>
                <select
                  value={role}
                  onChange={(e) => setRole(e.target.value)}
                  className="w-full rounded-lg border border-neutral-200 bg-white px-3 py-2 text-sm text-neutral-900 outline-none transition-colors focus:border-brand-500 focus:ring-2 focus:ring-brand-100"
                >
                  <option value="">Select a role</option>
                  {roles
                    .filter((r) => r.value !== "other")
                    .map((r) => (
                      <option key={r.value} value={r.value}>
                        {r.label}
                      </option>
                    ))}
                </select>
              </div>
              <div>
                <label className="mb-1.5 block text-xs font-medium text-neutral-700">
                  Industry (optional)
                </label>
                <select
                  value={industry}
                  onChange={(e) => setIndustry(e.target.value)}
                  className="w-full rounded-lg border border-neutral-200 bg-white px-3 py-2 text-sm text-neutral-900 outline-none transition-colors focus:border-brand-500 focus:ring-2 focus:ring-brand-100"
                >
                  <option value="">Any industry</option>
                  {industries
                    .filter((ind) => ind.value !== "other")
                    .map((ind) => (
                      <option key={ind.value} value={ind.value}>
                        {ind.label}
                      </option>
                    ))}
                </select>
              </div>
            </div>

            <AnimatePresence mode="wait">
              {solutions ? (
                <motion.div
                  key={role + industry}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.2 }}
                  className="mt-6 space-y-3"
                >
                  <p className="text-xs font-medium uppercase tracking-wider text-neutral-400">
                    Top opportunities for your profile
                  </p>
                  {solutions.map((s, i) => (
                    <OpportunityCard key={s.problem} solution={s} index={i} />
                  ))}
                </motion.div>
              ) : (
                <motion.div
                  key="empty"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="mt-6 rounded-lg border border-dashed border-neutral-200 p-8 text-center"
                >
                  <svg
                    className="mx-auto h-8 w-8 text-neutral-300"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={1.5}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M12 18v-5.25m0 0a6.01 6.01 0 001.5-.189m-1.5.189a6.01 6.01 0 01-1.5-.189m3.75 7.478a12.06 12.06 0 01-4.5 0m3.75 2.383a14.406 14.406 0 01-3 0M14.25 18v-.192c0-.983.658-1.823 1.508-2.316a7.5 7.5 0 10-7.517 0c.85.493 1.509 1.333 1.509 2.316V18"
                    />
                  </svg>
                  <p className="mt-3 text-sm text-neutral-500">
                    Select a role to discover opportunities
                  </p>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </Section>
  );
}
