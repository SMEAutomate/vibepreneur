"use client";

import { motion } from "framer-motion";

type ExperimentStatus = "winner" | "running" | "cut" | "planned";

interface Experiment {
  name: string;
  hypothesis: string;
  metric: string;
  result: string;
  status: ExperimentStatus;
}

const STATUS_STYLES: Record<
  ExperimentStatus,
  { label: string; bg: string; text: string; dot: string }
> = {
  winner: {
    label: "Winner: scale",
    bg: "bg-emerald-100",
    text: "text-emerald-700",
    dot: "bg-emerald-500",
  },
  running: {
    label: "Running",
    bg: "bg-brand-100",
    text: "text-brand-700",
    dot: "bg-brand-500",
  },
  cut: {
    label: "Cut: no signal",
    bg: "bg-neutral-100",
    text: "text-neutral-600",
    dot: "bg-neutral-400",
  },
  planned: {
    label: "Planned",
    bg: "bg-amber-100",
    text: "text-amber-700",
    dot: "bg-amber-500",
  },
};

const experiments: Experiment[] = [
  {
    name: "LinkedIn thought leadership",
    hypothesis:
      "Publishing 3x/week on onboarding pain points will drive 20+ inbound leads/month from VP People Ops.",
    metric: "Demo requests from LinkedIn profile views",
    result: "34 demo requests in 4 weeks. 12% reply rate on DMs.",
    status: "winner",
  },
  {
    name: "Cold outreach to Series B-C",
    hypothesis:
      "Personalized emails referencing recent funding rounds will convert at 5%+ to booked calls.",
    metric: "Booked calls per 100 emails sent",
    result: "6.2% conversion after 200 emails. 14 calls booked.",
    status: "running",
  },
  {
    name: "HR newsletter sponsorship",
    hypothesis:
      "Sponsoring People Ops Weekly will drive 50+ qualified landing page visits per issue.",
    metric: "Qualified visits and signups per sponsorship",
    result: "22 visits, 1 signup across 2 issues. CPL too high.",
    status: "cut",
  },
  {
    name: "SEO content hub",
    hypothesis:
      "Publishing 10 long-form articles on onboarding best practices will rank for mid-tail keywords within 90 days.",
    metric: "Organic traffic and keyword positions",
    result: "Content planned. Publishing starts next week.",
    status: "planned",
  },
];

export function GrowthExperimentsDemo() {
  return (
    <div className="mx-auto max-w-3xl">
      <div className="overflow-hidden rounded-xl border border-neutral-200 bg-white shadow-lg">
        <div className="flex items-center gap-1.5 border-b border-neutral-100 bg-neutral-50 px-4 py-2.5">
          <span className="h-2.5 w-2.5 rounded-full bg-neutral-300" />
          <span className="h-2.5 w-2.5 rounded-full bg-neutral-300" />
          <span className="h-2.5 w-2.5 rounded-full bg-neutral-300" />
          <span className="ml-3 text-xs text-neutral-400">
            Growth Engine: Experiment Tracker
          </span>
        </div>

        <div className="grid gap-px bg-neutral-100 sm:grid-cols-2">
          {experiments.map((exp, i) => {
            const style = STATUS_STYLES[exp.status];
            return (
              <motion.div
                key={exp.name}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08, duration: 0.35 }}
                className="bg-white p-5"
              >
                <div className="flex items-center justify-between">
                  <h4 className="text-sm font-semibold text-neutral-900">
                    {exp.name}
                  </h4>
                  <span
                    className={`inline-flex items-center gap-1 rounded-full px-2 py-0.5 text-[10px] font-medium ${style.bg} ${style.text}`}
                  >
                    <span className={`h-1.5 w-1.5 rounded-full ${style.dot}`} />
                    {style.label}
                  </span>
                </div>

                <div className="mt-3 space-y-2">
                  <div>
                    <p className="text-[10px] font-semibold uppercase tracking-wider text-neutral-400">
                      Hypothesis
                    </p>
                    <p className="mt-0.5 text-xs leading-relaxed text-neutral-600">
                      {exp.hypothesis}
                    </p>
                  </div>
                  <div>
                    <p className="text-[10px] font-semibold uppercase tracking-wider text-neutral-400">
                      Key metric
                    </p>
                    <p className="mt-0.5 text-xs text-neutral-600">
                      {exp.metric}
                    </p>
                  </div>
                  <div className="rounded-md bg-neutral-50 p-2.5">
                    <p className="text-[10px] font-semibold uppercase tracking-wider text-neutral-400">
                      Result
                    </p>
                    <p className="mt-0.5 text-xs font-medium text-neutral-800">
                      {exp.result}
                    </p>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
