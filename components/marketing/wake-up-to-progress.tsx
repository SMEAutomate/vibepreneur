"use client";

import { motion } from "framer-motion";
import { Section } from "@/components/ui/section";
import { AnimatedHeadline } from "@/components/ui/animated-headline";
import { siteCopy } from "@/content/copy";

function BriefSection({
  title,
  items,
  color,
  icon,
  delay,
}: {
  title: string;
  items: readonly string[];
  color: "emerald" | "brand" | "amber";
  icon: string;
  delay: number;
}) {
  const colorMap = {
    emerald: {
      badge: "bg-emerald-100 text-emerald-700",
      dot: "bg-emerald-500",
    },
    brand: {
      badge: "bg-brand-100 text-brand-700",
      dot: "bg-brand-500",
    },
    amber: {
      badge: "bg-amber-100 text-amber-700",
      dot: "bg-amber-500",
    },
  };
  const c = colorMap[color];

  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay, duration: 0.35 }}
    >
      <div className="mb-3 flex items-center gap-2">
        <span
          className={`inline-flex items-center gap-1.5 rounded-full px-2.5 py-1 text-xs font-medium ${c.badge}`}
        >
          <svg
            className="h-3 w-3"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path strokeLinecap="round" strokeLinejoin="round" d={icon} />
          </svg>
          {title}
        </span>
      </div>
      <ul className="space-y-2">
        {items.map((item, i) => (
          <li key={i} className="flex items-start gap-2.5 text-sm">
            <span
              className={`mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full ${c.dot}`}
            />
            <span className="text-neutral-700">{item}</span>
          </li>
        ))}
      </ul>
    </motion.div>
  );
}

export function WakeUpToProgress() {
  const { wakeUpToProgress } = siteCopy;

  return (
    <Section background="light">
      <div className="grid items-center gap-12 lg:grid-cols-2">
        <div>
          <AnimatedHeadline
            text={wakeUpToProgress.headline}
            className="text-display-sm"
          />
          <p className="mt-4 text-lg text-neutral-600">
            {wakeUpToProgress.body}
          </p>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.5 }}
          className="rounded-xl border border-neutral-200 bg-white p-6 shadow-lg"
        >
          <div className="mb-5 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <svg
                className="h-5 w-5 text-brand-600"
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

          <div className="space-y-5">
            <BriefSection
              title="Yesterday"
              items={wakeUpToProgress.brief.yesterday}
              color="emerald"
              icon="M5 13l4 4L19 7"
              delay={0.1}
            />
            <div className="border-t border-neutral-100" />
            <BriefSection
              title="Today"
              items={wakeUpToProgress.brief.today}
              color="brand"
              icon="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z"
              delay={0.2}
            />
            <div className="border-t border-neutral-100" />
            <BriefSection
              title="Needs your input"
              items={wakeUpToProgress.brief.needsInput}
              color="amber"
              icon="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126z"
              delay={0.3}
            />
          </div>
        </motion.div>
      </div>
    </Section>
  );
}
