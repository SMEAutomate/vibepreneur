"use client";

import { motion } from "framer-motion";
import { Section } from "@/components/ui/section";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { roadmapColumns, weeklyUpdates } from "@/content/roadmap";

const statusVariant: Record<string, "live" | "progress" | "planned"> = {
  live: "live",
  "in-progress": "progress",
  planned: "planned",
};

const statusLabel: Record<string, string> = {
  live: "Live",
  "in-progress": "In Progress",
  planned: "Planned",
};

const phases = [
  {
    name: "Phase 1: Opportunity Intelligence",
    description:
      "Surface opportunities from professional backgrounds. Score by demand, gaps, and fit.",
  },
  {
    name: "Phase 2: Venture Structuring",
    description:
      "Turn opportunities into structured offers with positioning, pricing, and buyer profiles.",
  },
  {
    name: "Phase 3: Launch Systems",
    description:
      "Generate launch assets, GTM playbooks, outreach sequences, and campaign structure.",
  },
  {
    name: "Phase 4: Execution Automation",
    description:
      "Daily briefs, task orchestration, and progress tracking across active ventures.",
  },
  {
    name: "Phase 5: Growth Loops",
    description:
      "Traction experiments, channel scoring, referral mechanics, and compounding distribution.",
  },
  {
    name: "Phase 6: Portfolio Mode",
    description:
      "Manage multiple ventures, compare performance, and run parallel experiments.",
  },
];

export function RoadmapContent() {
  let cardIndex = 0;

  return (
    <>
      <Section>
        <div className="mx-auto max-w-3xl">
          <p className="text-sm font-medium uppercase tracking-wider text-brand-600">
            Building in public
          </p>
          <h1 className="mt-4 text-display-md">
            Building the venture operating system.
          </h1>
          <p className="mt-4 text-lg text-neutral-600">
            We share what we are building, why, and what is coming next.
            Transparency is how we earn trust before we earn revenue.
          </p>
        </div>
      </Section>

      <Section background="light">
        <h2 className="text-center text-display-sm">Product maturity</h2>
        <p className="mx-auto mt-4 max-w-xl text-center text-neutral-600">
          Six phases of development. Each phase makes the system more capable.
        </p>
        <div className="mx-auto mt-10 grid max-w-3xl gap-4">
          {phases.map((phase, i) => (
            <motion.div
              key={phase.name}
              className="rounded-lg border border-neutral-100 bg-white p-5"
              style={{ boxShadow: "0 1px 2px rgba(0,0,0,0.04)" }}
              initial={{ opacity: 0, x: -12 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.06, duration: 0.35 }}
            >
              <div className="flex items-center gap-3">
                <span
                  className={`h-2.5 w-2.5 shrink-0 rounded-full ${i < 3 ? "bg-emerald-500" : i < 5 ? "bg-amber-400" : "bg-neutral-300"}`}
                />
                <h3 className="text-sm font-semibold text-neutral-900">
                  {phase.name}
                </h3>
                <Badge
                  variant={i < 3 ? "live" : i < 5 ? "progress" : "planned"}
                >
                  {i < 3 ? "Live" : i < 5 ? "In Progress" : "Planned"}
                </Badge>
              </div>
              <p className="mt-2 pl-[22px] text-sm text-neutral-600">
                {phase.description}
              </p>
            </motion.div>
          ))}
        </div>
      </Section>

      <Section>
        <h2 className="text-center text-display-sm">What is shipping now</h2>
        <div className="mt-10 grid gap-8 md:grid-cols-3">
          {(["now", "next", "later"] as const).map((key) => {
            const column = roadmapColumns[key];
            return (
              <div key={key}>
                <h3 className="mb-6 text-lg font-semibold text-neutral-900">
                  {column.label}
                </h3>
                <div className="space-y-4">
                  {column.items.map((item) => {
                    const idx = cardIndex++;
                    return (
                      <motion.div
                        key={item.title}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-40px" }}
                        transition={{ delay: idx * 0.06, duration: 0.4 }}
                      >
                        <Card>
                          <div className="flex items-start justify-between gap-2">
                            <h4 className="text-sm font-semibold text-neutral-900">
                              {item.title}
                            </h4>
                            <Badge variant={statusVariant[item.status]}>
                              {statusLabel[item.status]}
                            </Badge>
                          </div>
                          <p className="mt-2 text-xs leading-relaxed text-neutral-500">
                            {item.description}
                          </p>
                        </Card>
                      </motion.div>
                    );
                  })}
                </div>
              </div>
            );
          })}
        </div>
      </Section>

      <Section background="light">
        <h2 className="text-display-sm">Weekly updates</h2>
        <p className="mt-3 text-neutral-600">
          What we shipped, what we learned, and what is next.
        </p>

        <div className="mt-12 space-y-8">
          {weeklyUpdates.map((update, i) => (
            <motion.div
              key={update.week}
              className="border-l-2 border-brand-100 pl-6"
              initial={{ opacity: 0, x: -16 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ delay: i * 0.08, duration: 0.4 }}
            >
              <div className="flex items-center gap-3">
                <span className="text-sm font-semibold text-brand-700">
                  {update.week}
                </span>
                <span className="text-xs text-neutral-400">{update.date}</span>
              </div>
              <h3 className="mt-2 text-base font-semibold text-neutral-900">
                {update.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-neutral-600">
                {update.body}
              </p>
            </motion.div>
          ))}
        </div>
      </Section>

      <Section background="brand">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-display-sm">Want to shape what we build?</h2>
          <p className="mt-4 text-neutral-600">
            Join the waitlist and help us prioritise what matters most.
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
