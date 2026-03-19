"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Section } from "@/components/ui/section";
import { Button } from "@/components/ui/button";
import { MockScreenRenderer } from "@/components/demo/MockScreenRenderer";

const LAYER_SCREENS: (string | null)[] = [
  "OpportunityFinder",
  "PositioningCanvas",
  "GoToMarketPlan",
  "GrowthDashboard",
  "HomeOverview",
  null,
];

const dailyBriefItems = {
  yesterday: [
    "Landing page v2 published",
    "ICP refined: VP People Ops, 200-2000 employees",
    "Lead magnet draft completed",
  ],
  today: [
    "Launch outreach sequence to 50 target buyers",
    "Publish LinkedIn post with lead magnet hook",
    "Set up validation tracking",
  ],
  needsInput: [
    "Approve pricing tier structure",
    "Choose Week 2 content format",
  ],
};

const layers = [
  {
    title: "Opportunity Engine",
    tagline: "Finds where your expertise has commercial advantage.",
    description:
      "The Opportunity Engine analyses your professional background, market signals, and competitive gaps to surface the highest-potential business opportunities. Instead of guessing what to build, you start with validated demand matched to your unique strengths.",
    replaces:
      "Months of manual market research, scattered idea lists, and gut-feel decisions about what to build.",
    outcome:
      "A ranked list of business opportunities scored by demand, competition, and your personal fit.",
    icon: "M12 18v-5.25m0 0a6.01 6.01 0 001.5-.189m-1.5.189a6.01 6.01 0 01-1.5-.189m3.75 7.478a12.06 12.06 0 01-4.5 0m3.75 2.383a14.406 14.406 0 01-3 0M14.25 18v-.192c0-.983.658-1.823 1.508-2.316a7.5 7.5 0 10-7.517 0c.85.493 1.509 1.333 1.509 2.316V18",
    featureLink: "/features/insight-engine",
  },
  {
    title: "Offer & Positioning Studio",
    tagline:
      "Turns opportunities into a buyer-ready offer with messaging, pricing, and angle.",
    description:
      "Once you have identified the right opportunity, the Studio structures it into a complete offer: who it is for, what they get, how it is priced, and why it wins against alternatives. Positioning, messaging, and competitive differentiation are built in from day one.",
    replaces:
      "Guessing at pricing, struggling with positioning, and launching without a clear angle.",
    outcome:
      "A structured offer with buyer profile, pricing tiers, messaging framework, and competitive positioning.",
    icon: "M3.75 3v11.25A2.25 2.25 0 006 16.5h2.25M3.75 3h-1.5m1.5 0h16.5m0 0h1.5m-1.5 0v11.25A2.25 2.25 0 0118 16.5h-2.25m-7.5 0h7.5m-7.5 0l-1 3m8.5-3l1 3m0 0l.5 1.5m-.5-1.5h-9.5m0 0l-.5 1.5",
    featureLink: "/features/positioning-engine",
  },
  {
    title: "Launch Builder",
    tagline: "Creates the assets that take an idea into the market.",
    description:
      "The Launch Builder generates everything you need to go to market: landing page plans, outreach sequences, lead magnets, content angles, and campaign structure. Every asset is tailored to your specific offer and buyer.",
    replaces:
      "Hiring agencies for landing pages, writing outreach from scratch, and launching without a plan.",
    outcome:
      "Launch-ready assets: landing page, lead magnet, outreach sequences, content plan, and GTM playbook.",
    icon: "M15.59 14.37a6 6 0 01-5.84 7.38v-4.8m5.84-2.58a14.98 14.98 0 006.16-12.12A14.98 14.98 0 009.631 8.41m5.96 5.96a14.926 14.926 0 01-5.841 2.58m-.119-8.54a6 6 0 00-7.381 5.84h4.8m2.581-5.84a14.927 14.927 0 00-2.58 5.84m2.699 2.7c-.103.021-.207.041-.311.06a15.09 15.09 0 01-2.448-2.448 14.9 14.9 0 01.06-.312m-2.24 2.39a4.493 4.493 0 00-1.757 4.306 4.493 4.493 0 004.306-1.758M16.5 9a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0z",
    featureLink: "/features/go-to-market",
  },
  {
    title: "Growth Engine",
    tagline: "Builds repeatable acquisition and validation systems.",
    description:
      "After launch, the Growth Engine runs structured experiments across channels, tracks what converts, builds referral mechanics, and creates distribution loops that compound. Traction is measured, not assumed.",
    replaces:
      "Random marketing experiments, no measurement framework, and scattered growth efforts.",
    outcome:
      "Traction experiments, channel performance data, referral programs, and compounding growth loops.",
    icon: "M2.25 18L9 11.25l4.306 4.307a11.95 11.95 0 015.814-5.519l2.74-1.22m0 0l-5.94-2.28m5.94 2.28l-2.28 5.941",
    featureLink: "/features/growth-system",
  },
  {
    title: "Execution Cockpit",
    tagline:
      "Shows the state of your business, active tasks, outputs, and next moves.",
    description:
      "Your single view into everything happening across your venture. Tasks in progress, assets being built, experiments running, metrics moving, and decisions waiting. The cockpit replaces scattered spreadsheets and project management tools.",
    replaces:
      "Multiple tabs, spreadsheets, Notion boards, and context-switching between tools.",
    outcome:
      "One operational view of your entire venture with clear next actions.",
    icon: "M3.75 6A2.25 2.25 0 016 3.75h2.25A2.25 2.25 0 0110.5 6v2.25a2.25 2.25 0 01-2.25 2.25H6a2.25 2.25 0 01-2.25-2.25V6zM3.75 15.75A2.25 2.25 0 016 13.5h2.25a2.25 2.25 0 012.25 2.25V18a2.25 2.25 0 01-2.25 2.25H6A2.25 2.25 0 013.75 18v-2.25zM13.5 6a2.25 2.25 0 012.25-2.25H18A2.25 2.25 0 0120.25 6v2.25A2.25 2.25 0 0118 10.5h-2.25a2.25 2.25 0 01-2.25-2.25V6zM13.5 15.75a2.25 2.25 0 012.25-2.25H18a2.25 2.25 0 012.25 2.25V18A2.25 2.25 0 0118 20.25h-2.25A2.25 2.25 0 0113.5 18v-2.25z",
    featureLink: null,
  },
  {
    title: "Daily Briefs",
    tagline:
      "Summarises progress, highlights decisions, and keeps the system moving.",
    description:
      "Every morning, a structured update shows what happened yesterday, what is planned for today, and where your input is needed. You stay in control without micromanaging. The system moves. You direct.",
    replaces: "Starting each day unsure what happened or what to do next.",
    outcome:
      "A daily operational summary with clear decisions and next actions.",
    icon: "M12 7.5h1.5m-1.5 3h1.5m-7.5 3h7.5m-7.5 3h7.5m3-9h3.375c.621 0 1.125.504 1.125 1.125V18a2.25 2.25 0 01-2.25 2.25H5.625a2.25 2.25 0 01-2.25-2.25V8.625c0-.621.504-1.125 1.125-1.125H6.75",
    featureLink: "/daily-brief",
  },
];

function DailyBriefMini() {
  return (
    <div className="rounded-xl border border-neutral-200 bg-white p-5 shadow-sm">
      <div className="mb-4 flex items-center justify-between">
        <div className="flex items-center gap-2">
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
          <span className="text-sm font-semibold text-neutral-900">
            Daily Brief
          </span>
        </div>
        <span className="text-xs text-neutral-400">March 19, 2026</span>
      </div>

      <div className="space-y-3">
        <div>
          <span className="inline-flex items-center gap-1 rounded-full bg-emerald-100 px-2 py-0.5 text-[10px] font-medium text-emerald-700">
            <svg
              className="h-2.5 w-2.5"
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
          <ul className="mt-1.5 space-y-1">
            {dailyBriefItems.yesterday.map((item) => (
              <li
                key={item}
                className="flex items-start gap-1.5 text-xs text-neutral-600"
              >
                <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-emerald-500" />
                {item}
              </li>
            ))}
          </ul>
        </div>

        <div className="border-t border-neutral-100 pt-3">
          <span className="inline-flex items-center gap-1 rounded-full bg-brand-100 px-2 py-0.5 text-[10px] font-medium text-brand-700">
            <svg
              className="h-2.5 w-2.5"
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
          <ul className="mt-1.5 space-y-1">
            {dailyBriefItems.today.map((item) => (
              <li
                key={item}
                className="flex items-start gap-1.5 text-xs text-neutral-600"
              >
                <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-brand-500" />
                {item}
              </li>
            ))}
          </ul>
        </div>

        <div className="border-t border-neutral-100 pt-3">
          <span className="inline-flex items-center gap-1 rounded-full bg-amber-100 px-2 py-0.5 text-[10px] font-medium text-amber-700">
            <svg
              className="h-2.5 w-2.5"
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
            Needs input
          </span>
          <ul className="mt-1.5 space-y-1">
            {dailyBriefItems.needsInput.map((item) => (
              <li
                key={item}
                className="flex items-start gap-1.5 text-xs font-medium text-neutral-700"
              >
                <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-amber-500" />
                {item}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

function LayerScreenPreview({ activeIndex }: { activeIndex: number }) {
  const screenName = LAYER_SCREENS[activeIndex];

  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={activeIndex}
        initial={{ opacity: 0, scale: 0.98 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.98 }}
        transition={{ duration: 0.3 }}
      >
        {screenName ? (
          <div className="overflow-hidden rounded-xl border border-neutral-200 bg-white shadow-lg">
            <div className="flex items-center gap-1.5 border-b border-neutral-100 bg-neutral-50 px-4 py-2.5">
              <span className="h-2.5 w-2.5 rounded-full bg-neutral-300" />
              <span className="h-2.5 w-2.5 rounded-full bg-neutral-300" />
              <span className="h-2.5 w-2.5 rounded-full bg-neutral-300" />
            </div>
            <div className="relative h-[380px] overflow-hidden sm:h-[440px]">
              <div
                className="origin-top-left"
                style={{
                  transform: "scale(0.55)",
                  width: "181.82%",
                  height: "181.82%",
                }}
              >
                <MockScreenRenderer componentName={screenName} />
              </div>
            </div>
          </div>
        ) : (
          <DailyBriefMini />
        )}
      </motion.div>
    </AnimatePresence>
  );
}

export function TheSystemContent() {
  const [activeIndex, setActiveIndex] = useState(0);
  const active = layers[activeIndex];

  return (
    <>
      <Section>
        <div className="mx-auto max-w-3xl text-center">
          <h1 className="text-display-md">Six layers. One operating system.</h1>
          <p className="mt-4 text-lg text-neutral-600">
            Vibepreneur is not a collection of features. It is a structured
            system where each layer builds on the last, taking you from
            expertise to operating business.
          </p>
        </div>
      </Section>

      <Section background="light">
        <div className="grid gap-8 lg:grid-cols-[320px_1fr]">
          <div className="flex flex-row gap-2 overflow-x-auto lg:flex-col lg:gap-1 lg:overflow-visible">
            {layers.map((layer, i) => (
              <button
                key={layer.title}
                onClick={() => setActiveIndex(i)}
                className={`flex shrink-0 items-center gap-3 rounded-lg px-4 py-3 text-left text-sm transition-all ${
                  i === activeIndex
                    ? "bg-white font-semibold text-neutral-900 shadow-sm ring-1 ring-neutral-200"
                    : "text-neutral-600 hover:bg-white/60 hover:text-neutral-900"
                }`}
              >
                <div
                  className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-lg ${i === activeIndex ? "bg-brand-50" : "bg-neutral-100"}`}
                >
                  <svg
                    className={`h-4 w-4 ${i === activeIndex ? "text-brand-700" : "text-neutral-500"}`}
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={1.5}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d={layer.icon}
                    />
                  </svg>
                </div>
                <div>
                  <span className="whitespace-nowrap">{layer.title}</span>
                  <span className="block text-xs font-normal text-neutral-400 lg:hidden">
                    Layer {i + 1}
                  </span>
                </div>
              </button>
            ))}
          </div>

          <div className="space-y-6">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeIndex}
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -8 }}
                transition={{ duration: 0.25 }}
                className="rounded-xl border border-neutral-200 bg-white p-8 shadow-sm"
              >
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-brand-50">
                    <svg
                      className="h-5 w-5 text-brand-700"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={1.5}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d={active.icon}
                      />
                    </svg>
                  </div>
                  <div>
                    <span className="text-xs font-medium text-brand-600">
                      Layer {activeIndex + 1}
                    </span>
                    <h2 className="text-xl font-semibold text-neutral-900">
                      {active.title}
                    </h2>
                  </div>
                </div>

                <p className="mt-2 text-sm font-medium text-neutral-500">
                  {active.tagline}
                </p>

                <p className="mt-4 leading-relaxed text-neutral-600">
                  {active.description}
                </p>

                <div className="mt-6 grid gap-4 sm:grid-cols-2">
                  <div className="rounded-lg bg-neutral-50 p-4">
                    <p className="text-xs font-semibold uppercase tracking-wider text-neutral-400">
                      Replaces
                    </p>
                    <p className="mt-1 text-sm text-neutral-600">
                      {active.replaces}
                    </p>
                  </div>
                  <div className="rounded-lg bg-brand-50 p-4">
                    <p className="text-xs font-semibold uppercase tracking-wider text-brand-500">
                      Outcome
                    </p>
                    <p className="mt-1 text-sm text-neutral-800">
                      {active.outcome}
                    </p>
                  </div>
                </div>

                {active.featureLink && (
                  <div className="mt-6">
                    <Button
                      href={active.featureLink}
                      variant="secondary"
                      size="sm"
                    >
                      Explore this layer
                    </Button>
                  </div>
                )}
              </motion.div>
            </AnimatePresence>

            <LayerScreenPreview activeIndex={activeIndex} />
          </div>
        </div>
      </Section>

      <Section background="brand">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-display-sm">See the system in action.</h2>
          <p className="mt-4 text-neutral-600">
            Join the waitlist and experience how Vibepreneur turns your
            expertise into an operating business.
          </p>
          <div className="mt-8">
            <Button href="/waitlist" size="lg">
              Start My Business System
            </Button>
          </div>
        </div>
      </Section>
    </>
  );
}
