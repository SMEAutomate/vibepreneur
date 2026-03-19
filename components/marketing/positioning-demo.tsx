"use client";

import { motion } from "framer-motion";
import { Section } from "@/components/ui/section";

const canvasPanels = [
  {
    label: "Ideal Customer Profile",
    content:
      "VP of People Operations at mid-market companies (200-2,000 employees) scaling headcount 30%+ annually. Frustrated by manual onboarding that slows new hire productivity.",
    icon: "M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z",
  },
  {
    label: "Core Pains",
    content:
      "3+ months to full productivity per hire. Inconsistent onboarding across departments. No visibility into where new hires get stuck. $50k+ hidden cost per bad onboarding.",
    icon: "M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126z",
  },
  {
    label: "Promise",
    content:
      "Cut time-to-productivity by 40% with structured, role-adaptive onboarding that runs automatically and surfaces problems before they compound.",
    icon: "M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z",
  },
  {
    label: "Differentiation",
    content:
      "Unlike generic HRIS onboarding modules, this adapts to department, seniority, and role type. Built by someone who ran People Ops at scale, not a product team guessing at HR workflows.",
    icon: "M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z",
  },
  {
    label: "Why Now",
    content:
      "Remote and hybrid work made onboarding harder. Companies scaling post-2024 have larger, more distributed cohorts. Legacy HRIS tools still treat onboarding as a checklist, not a system.",
    icon: "M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z",
  },
  {
    label: "Competitive Landscape",
    content:
      "BambooHR and Rippling offer basic onboarding checklists. No competitor provides adaptive, role-specific flows with progress tracking and manager alerts. Clear gap in the mid-market.",
    icon: "M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 013 19.875v-6.75zM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V8.625zM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V4.125z",
  },
];

export function PositioningDemo() {
  return (
    <Section>
      <div className="mx-auto max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
          className="text-center"
        >
          <h2 className="text-display-sm">
            Your positioning, structured from day one
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-neutral-600">
            The Positioning Canvas takes your opportunity and structures it into
            a complete competitive position. Here is what one looks like for an
            HR Onboarding venture.
          </p>
        </motion.div>

        <div className="mt-10 overflow-hidden rounded-xl border border-neutral-200 bg-white shadow-lg">
          <div className="flex items-center gap-1.5 border-b border-neutral-100 bg-neutral-50 px-4 py-2.5">
            <span className="h-2.5 w-2.5 rounded-full bg-neutral-300" />
            <span className="h-2.5 w-2.5 rounded-full bg-neutral-300" />
            <span className="h-2.5 w-2.5 rounded-full bg-neutral-300" />
            <span className="ml-3 text-xs text-neutral-400">
              Positioning Canvas: HR Onboarding Platform
            </span>
          </div>

          <div className="grid gap-px bg-neutral-100 sm:grid-cols-2 lg:grid-cols-3">
            {canvasPanels.map((panel, i) => (
              <motion.div
                key={panel.label}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08, duration: 0.35 }}
                className="bg-white p-5"
              >
                <div className="mb-3 flex items-center gap-2">
                  <div className="flex h-7 w-7 items-center justify-center rounded-md bg-brand-50">
                    <svg
                      className="h-3.5 w-3.5 text-brand-700"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={1.5}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d={panel.icon}
                      />
                    </svg>
                  </div>
                  <span className="text-xs font-semibold uppercase tracking-wider text-neutral-500">
                    {panel.label}
                  </span>
                </div>
                <p className="text-sm leading-relaxed text-neutral-700">
                  {panel.content}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </Section>
  );
}
