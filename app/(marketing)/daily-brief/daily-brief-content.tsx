"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Section } from "@/components/ui/section";
import { Button } from "@/components/ui/button";

interface BriefData {
  date: string;
  venture: string;
  yesterday: { task: string; status: string }[];
  today: { task: string; status: string }[];
  needsInput: { task: string; priority: string }[];
  metrics: Record<string, number>;
}

const personaBriefs: { persona: string; brief: BriefData }[] = [
  {
    persona: "Consultant",
    brief: {
      date: "Wednesday, March 19, 2026",
      venture: "Supply Chain Audit Framework",
      yesterday: [
        {
          task: "Productised audit landing page went live",
          status: "completed",
        },
        {
          task: "Outreach sequence B sent to 75 VP Operations",
          status: "completed",
        },
        {
          task: "Case study draft from pilot client approved",
          status: "completed",
        },
      ],
      today: [
        {
          task: "Follow up on 6 demo requests from outreach",
          status: "scheduled",
        },
        {
          task: "Publish LinkedIn post with audit framework teaser",
          status: "scheduled",
        },
        {
          task: "Refine pricing tiers based on pilot feedback",
          status: "scheduled",
        },
      ],
      needsInput: [
        {
          task: "Choose between annual retainer or per-audit pricing for enterprise tier",
          priority: "high",
        },
        {
          task: "Approve updated case study copy for landing page",
          priority: "medium",
        },
      ],
      metrics: {
        demoRequests: 6,
        outboundSent: 75,
        landingPageViews: 238,
        conversionRate: 4,
      },
    },
  },
  {
    persona: "Operator",
    brief: {
      date: "Wednesday, March 19, 2026",
      venture: "Logistics Compliance Checker",
      yesterday: [
        {
          task: "Landing page hit 200 visits from LinkedIn content",
          status: "completed",
        },
        {
          task: "12 signups collected via lead magnet download",
          status: "completed",
        },
        {
          task: "Competitor analysis updated with 3 new entrants",
          status: "completed",
        },
      ],
      today: [
        {
          task: "Launch cold outreach to 100 supply chain directors",
          status: "scheduled",
        },
        {
          task: "Publish compliance audit checklist on LinkedIn",
          status: "scheduled",
        },
        {
          task: "Set up automated follow-up for lead magnet downloads",
          status: "scheduled",
        },
      ],
      needsInput: [
        {
          task: "Select which 3 compliance frameworks to support first",
          priority: "high",
        },
        {
          task: "Review draft outreach sequence before send",
          priority: "medium",
        },
      ],
      metrics: {
        pageViews: 200,
        signups: 12,
        linkedinReach: 4200,
        contentEngagement: 8,
      },
    },
  },
  {
    persona: "Corporate Professional",
    brief: {
      date: "Wednesday, March 19, 2026",
      venture: "Finance Reporting Automation Tool",
      yesterday: [
        {
          task: "Positioning canvas updated with ICP refinements",
          status: "completed",
        },
        {
          task: "3 validation conversations completed with CFOs",
          status: "completed",
        },
        {
          task: "Lead magnet performing at 18% conversion rate",
          status: "completed",
        },
      ],
      today: [
        {
          task: "Refine ICP based on conversation feedback",
          status: "scheduled",
        },
        {
          task: "Create demo video walkthrough for landing page",
          status: "scheduled",
        },
        {
          task: "Draft partnership proposal for finance newsletter",
          status: "scheduled",
        },
      ],
      needsInput: [
        {
          task: "Decide between freemium and free-trial model for launch",
          priority: "high",
        },
        {
          task: "Approve updated messaging for CFO persona",
          priority: "medium",
        },
      ],
      metrics: {
        validationCalls: 3,
        leadMagnetCR: 18,
        landingPageViews: 164,
        emailSubscribers: 47,
      },
    },
  },
];

function BriefCard({ data }: { data: BriefData }) {
  return (
    <motion.div
      className="rounded-xl border border-neutral-200 bg-white p-6 shadow-lg"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.3 }}
    >
      <div className="flex items-center justify-between border-b border-neutral-100 pb-4">
        <div>
          <p className="text-xs text-neutral-400">{data.date}</p>
          <p className="mt-0.5 text-sm font-semibold text-neutral-900">
            {data.venture}
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
            {data.yesterday.map((item) => (
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
            {data.today.map((item) => (
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
            {data.needsInput.map((item) => (
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
          {Object.entries(data.metrics).map(([key, val]) => (
            <div key={key} className="rounded-lg bg-neutral-50 p-3 text-center">
              <p className="text-lg font-bold text-neutral-900">
                {(typeof val === "number" &&
                  key.toLowerCase().includes("rate")) ||
                key.toLowerCase().includes("cr")
                  ? `${val}%`
                  : val}
              </p>
              <p className="text-[10px] uppercase tracking-wider text-neutral-400">
                {key.replace(/([A-Z])/g, " $1").trim()}
              </p>
            </div>
          ))}
        </div>
      </div>
    </motion.div>
  );
}

export function DailyBriefContent() {
  const [activePersona, setActivePersona] = useState(0);

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
          <p className="mx-auto mt-4 max-w-xl text-center text-sm text-neutral-500">
            Click a persona to see their personalized brief.
          </p>

          <div className="mt-8 flex justify-center">
            <div className="inline-flex rounded-lg bg-neutral-100 p-1">
              {personaBriefs.map((p, i) => (
                <button
                  key={p.persona}
                  onClick={() => setActivePersona(i)}
                  className={`relative rounded-md px-4 py-2 text-sm font-medium transition-all ${
                    i === activePersona
                      ? "text-neutral-900"
                      : "text-neutral-500 hover:text-neutral-700"
                  }`}
                >
                  {i === activePersona && (
                    <motion.div
                      layoutId="persona-tab"
                      className="absolute inset-0 rounded-md bg-white shadow-sm"
                      transition={{
                        type: "spring",
                        stiffness: 400,
                        damping: 30,
                      }}
                    />
                  )}
                  <span className="relative">{p.persona}</span>
                </button>
              ))}
            </div>
          </div>

          <div className="mt-8">
            <AnimatePresence mode="wait">
              <BriefCard
                key={activePersona}
                data={personaBriefs[activePersona].brief}
              />
            </AnimatePresence>
          </div>
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
