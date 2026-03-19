"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const outreachSequence = [
  {
    day: "Day 1",
    subject: "The hidden cost of slow onboarding at [Company]",
    preview:
      "Hi [Name], I noticed [Company] has been scaling headcount this year. When teams grow fast, onboarding tends to break first.",
    body: "Hi [Name],\n\nI noticed [Company] has been scaling headcount this year. When teams grow fast, onboarding tends to break first.\n\nMost People Ops teams I talk to are losing 3+ months of productivity per new hire because onboarding is still a manual checklist that varies by department.\n\nI built a system that cuts time-to-productivity by 40% by adapting onboarding flows to department, seniority, and role type, automatically.\n\nWould it be worth a 15-minute call to see if this applies to how [Company] onboards?",
    channel: "Email",
  },
  {
    day: "Day 3",
    subject: "Quick follow-up: onboarding at scale",
    preview:
      "Just bumping this in case it got buried. I put together a short breakdown of the five patterns that cause onboarding to fail at companies growing 30%+ annually.",
    body: "Hi [Name],\n\nJust bumping this in case it got buried.\n\nI put together a short breakdown of the five patterns that cause onboarding to fail at companies growing 30%+ annually. It takes about 3 minutes to read.\n\n[Link to lead magnet: '5 Signs Your Onboarding Costs $50k/Hire']\n\nHappy to walk through how these apply to [Company] specifically if any of them resonate.",
    channel: "Email",
  },
  {
    day: "Day 5",
    subject: null,
    preview:
      "Shared the onboarding audit framework we use. Thought it might be useful given the growth at [Company]. No strings attached.",
    body: null,
    channel: "LinkedIn",
  },
  {
    day: "Day 7",
    subject: "Last note: onboarding audit for [Company]",
    preview:
      "I will keep this short. I am offering a free onboarding audit for 10 companies this quarter. It takes 30 minutes, and you walk away with a scored breakdown of where your onboarding pipeline leaks.",
    body: "Hi [Name],\n\nI will keep this short. I am offering a free onboarding audit for 10 companies this quarter.\n\nIt takes 30 minutes, and you walk away with a scored breakdown of where your onboarding pipeline leaks productivity, retention risk, and time.\n\nNo pitch, no follow-up unless you ask.\n\nWant one of the 10 spots?",
    channel: "Email",
  },
];

export function OutreachDemo() {
  const [expanded, setExpanded] = useState<number | null>(null);

  return (
    <div className="mx-auto max-w-2xl">
      <div className="overflow-hidden rounded-xl border border-neutral-200 bg-white shadow-lg">
        <div className="flex items-center gap-1.5 border-b border-neutral-100 bg-neutral-50 px-4 py-2.5">
          <span className="h-2.5 w-2.5 rounded-full bg-neutral-300" />
          <span className="h-2.5 w-2.5 rounded-full bg-neutral-300" />
          <span className="h-2.5 w-2.5 rounded-full bg-neutral-300" />
          <span className="ml-3 text-xs text-neutral-400">
            Outreach Studio: HR Onboarding Platform
          </span>
        </div>

        <div className="p-6">
          <div className="relative">
            <div className="absolute left-[19px] top-0 h-full w-px bg-neutral-200" />

            <div className="space-y-6">
              {outreachSequence.map((step, i) => (
                <motion.div
                  key={step.day}
                  initial={{ opacity: 0, x: -12 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1, duration: 0.3 }}
                  className="relative pl-12"
                >
                  <div className="absolute left-0 top-0 flex h-10 w-10 items-center justify-center">
                    <div
                      className={`flex h-10 w-10 items-center justify-center rounded-full border-2 ${
                        i === 0
                          ? "border-brand-500 bg-brand-50"
                          : "border-neutral-200 bg-white"
                      }`}
                    >
                      <span
                        className={`text-[10px] font-bold ${
                          i === 0 ? "text-brand-700" : "text-neutral-500"
                        }`}
                      >
                        {step.day.replace("Day ", "D")}
                      </span>
                    </div>
                  </div>

                  <button
                    onClick={() => setExpanded(expanded === i ? null : i)}
                    className="w-full text-left"
                  >
                    <div className="rounded-lg border border-neutral-200 bg-white p-4 transition-shadow hover:shadow-sm">
                      <div className="flex items-center justify-between gap-2">
                        <div className="min-w-0">
                          <div className="flex items-center gap-2">
                            <span className="text-xs font-medium text-neutral-400">
                              {step.day}
                            </span>
                            <span
                              className={`rounded-full px-2 py-0.5 text-[10px] font-medium ${
                                step.channel === "LinkedIn"
                                  ? "bg-blue-100 text-blue-700"
                                  : "bg-neutral-100 text-neutral-600"
                              }`}
                            >
                              {step.channel}
                            </span>
                          </div>
                          {step.subject && (
                            <p className="mt-1 text-sm font-medium text-neutral-900">
                              {step.subject}
                            </p>
                          )}
                          <p className="mt-1 text-xs leading-relaxed text-neutral-500">
                            {step.preview}
                          </p>
                        </div>
                        {step.body && (
                          <svg
                            className={`h-4 w-4 shrink-0 text-neutral-400 transition-transform ${
                              expanded === i ? "rotate-180" : ""
                            }`}
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            strokeWidth={2}
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                            />
                          </svg>
                        )}
                      </div>
                    </div>
                  </button>

                  <AnimatePresence>
                    {expanded === i && step.body && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.25 }}
                        className="overflow-hidden"
                      >
                        <div className="mt-2 rounded-lg border border-neutral-100 bg-neutral-50 p-4">
                          <p className="whitespace-pre-line text-xs leading-relaxed text-neutral-700">
                            {step.body}
                          </p>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
