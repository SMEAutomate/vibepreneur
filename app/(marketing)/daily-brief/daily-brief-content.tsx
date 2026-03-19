"use client";

import { motion } from "framer-motion";
import { Section } from "@/components/ui/section";
import { Button } from "@/components/ui/button";

const sampleBrief = {
  date: "Wednesday, March 19, 2026",
  venture: "HR Onboarding Automation Platform",
  yesterday: [
    { task: "Landing page v2 published", status: "completed" },
    {
      task: "ICP refined: VP People Ops, 200-2000 employees",
      status: "completed",
    },
    {
      task: "Lead magnet draft: '5 Signs Your Onboarding Costs $50k/Hire'",
      status: "completed",
    },
  ],
  today: [
    {
      task: "Launch outreach sequence to 50 target buyers",
      status: "scheduled",
    },
    {
      task: "Publish LinkedIn post with lead magnet hook",
      status: "scheduled",
    },
    {
      task: "Set up validation tracking for landing page",
      status: "scheduled",
    },
  ],
  needsInput: [
    {
      task: "Approve pricing tier structure (3 options prepared)",
      priority: "high",
    },
    {
      task: "Choose between webinar and case study for Week 2 content",
      priority: "medium",
    },
  ],
  metrics: {
    pageViews: 142,
    signups: 8,
    outboundSent: 23,
    responsesReceived: 4,
  },
};

const personaExamples = [
  {
    persona: "Consultant",
    brief:
      "Your productised audit framework generated 6 demo requests this week. Outbound sequence B outperformed A by 2.3x. Recommended: scale sequence B and pause A.",
  },
  {
    persona: "Operator",
    brief:
      "Logistics compliance checker landing page hit 200 visits. 12 signups from LinkedIn content. Next: launch cold outreach to supply chain directors.",
  },
  {
    persona: "Corporate Professional",
    brief:
      "Finance reporting tool positioning updated. 3 validation conversations scheduled. Lead magnet performing at 18% conversion. Next: refine ICP based on conversation feedback.",
  },
];

export function DailyBriefContent() {
  return (
    <>
      <Section>
        <div className="mx-auto max-w-3xl text-center">
          <h1 className="text-display-md">
            Your business should move every day.
          </h1>
          <p className="mt-4 text-lg text-neutral-600">
            Daily briefs show what changed, what shipped, what was learned, and
            what needs your input next. Progress without chaos.
          </p>
        </div>
      </Section>

      <Section background="light">
        <div className="mx-auto max-w-2xl">
          <h2 className="text-center text-display-sm">A sample daily brief</h2>
          <motion.div
            className="mt-10 rounded-xl border border-neutral-200 bg-white p-6 shadow-lg"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="flex items-center justify-between border-b border-neutral-100 pb-4">
              <div>
                <p className="text-xs text-neutral-400">{sampleBrief.date}</p>
                <p className="mt-0.5 text-sm font-semibold text-neutral-900">
                  {sampleBrief.venture}
                </p>
              </div>
              <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-brand-50">
                <svg
                  className="h-4 w-4 text-brand-600"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={1.5}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 7.5h1.5m-1.5 3h1.5m-7.5 3h7.5m-7.5 3h7.5m3-9h3.375c.621 0 1.125.504 1.125 1.125V18a2.25 2.25 0 01-2.25 2.25H5.625a2.25 2.25 0 01-2.25-2.25V8.625c0-.621.504-1.125 1.125-1.125H6.75"
                  />
                </svg>
              </div>
            </div>

            <div className="mt-4 space-y-5">
              <div>
                <span className="inline-flex items-center gap-1.5 rounded-full bg-emerald-100 px-2.5 py-1 text-xs font-medium text-emerald-700">
                  <svg
                    className="h-3 w-3"
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
                  Yesterday
                </span>
                <ul className="mt-2 space-y-1.5">
                  {sampleBrief.yesterday.map((item) => (
                    <li
                      key={item.task}
                      className="flex items-start gap-2 text-sm text-neutral-600"
                    >
                      <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-emerald-500" />
                      {item.task}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="border-t border-neutral-100 pt-4">
                <span className="inline-flex items-center gap-1.5 rounded-full bg-brand-100 px-2.5 py-1 text-xs font-medium text-brand-700">
                  <svg
                    className="h-3 w-3"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                  Today
                </span>
                <ul className="mt-2 space-y-1.5">
                  {sampleBrief.today.map((item) => (
                    <li
                      key={item.task}
                      className="flex items-start gap-2 text-sm text-neutral-600"
                    >
                      <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-brand-500" />
                      {item.task}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="border-t border-neutral-100 pt-4">
                <span className="inline-flex items-center gap-1.5 rounded-full bg-amber-100 px-2.5 py-1 text-xs font-medium text-amber-700">
                  <svg
                    className="h-3 w-3"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126z"
                    />
                  </svg>
                  Needs your input
                </span>
                <ul className="mt-2 space-y-1.5">
                  {sampleBrief.needsInput.map((item) => (
                    <li
                      key={item.task}
                      className="flex items-start gap-2 text-sm font-medium text-neutral-700"
                    >
                      <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-amber-500" />
                      {item.task}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="grid grid-cols-4 gap-3 border-t border-neutral-100 pt-4">
                {Object.entries(sampleBrief.metrics).map(([key, val]) => (
                  <div
                    key={key}
                    className="rounded-lg bg-neutral-50 p-3 text-center"
                  >
                    <p className="text-lg font-bold text-neutral-900">{val}</p>
                    <p className="text-[10px] uppercase tracking-wider text-neutral-400">
                      {key.replace(/([A-Z])/g, " $1").trim()}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </Section>

      <Section>
        <div className="mx-auto max-w-3xl">
          <h2 className="text-center text-display-sm">
            Why this matters for busy professionals
          </h2>
          <div className="mt-10 grid gap-6 sm:grid-cols-2">
            {[
              {
                title: "No context switching",
                body: "One brief replaces checking multiple tools, spreadsheets, and dashboards.",
              },
              {
                title: "Decisions surfaced",
                body: "The system identifies what needs your input. Everything else runs automatically.",
              },
              {
                title: "Progress is visible",
                body: "You see what moved yesterday and what moves today. No guessing.",
              },
              {
                title: "Async by default",
                body: "Review your brief when it suits you. The system works on your schedule.",
              },
            ].map((item, i) => (
              <motion.div
                key={item.title}
                className="rounded-lg border border-neutral-100 bg-white p-5"
                style={{ boxShadow: "0 1px 2px rgba(0,0,0,0.04)" }}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.06 }}
              >
                <h3 className="text-sm font-semibold text-neutral-900">
                  {item.title}
                </h3>
                <p className="mt-1 text-sm text-neutral-600">{item.body}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </Section>

      <Section background="light">
        <h2 className="text-center text-display-sm">Briefs by persona</h2>
        <p className="mx-auto mt-4 max-w-xl text-center text-neutral-600">
          Every brief is tailored to your venture, your stage, and your
          decisions.
        </p>
        <div className="mx-auto mt-10 grid max-w-3xl gap-5">
          {personaExamples.map((ex, i) => (
            <motion.div
              key={ex.persona}
              className="rounded-lg border border-neutral-100 bg-white p-5"
              style={{ boxShadow: "0 1px 2px rgba(0,0,0,0.04)" }}
              initial={{ opacity: 0, x: -12 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
            >
              <span className="text-xs font-semibold uppercase tracking-wider text-brand-600">
                {ex.persona}
              </span>
              <p className="mt-2 text-sm leading-relaxed text-neutral-600">
                {ex.brief}
              </p>
            </motion.div>
          ))}
        </div>
      </Section>

      <Section background="brand">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-display-sm">
            Start receiving progress, not noise.
          </h2>
          <p className="mt-4 text-neutral-600">
            Join the waitlist and be among the first to experience daily briefs
            that move your business forward.
          </p>
          <div className="mt-8">
            <Button href="/waitlist" size="lg">
              Join the Waitlist
            </Button>
          </div>
        </div>
      </Section>
    </>
  );
}
