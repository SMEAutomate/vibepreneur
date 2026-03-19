"use client";

import { motion } from "framer-motion";
import { Section } from "@/components/ui/section";
import { siteCopy } from "@/content/copy";

function ProcessColumn({
  title,
  items,
  color,
  delay,
  icon,
}: {
  title: string;
  items: readonly string[];
  color: "neutral" | "brand" | "emerald";
  delay: number;
  icon: string;
}) {
  const colorMap = {
    neutral: {
      bg: "bg-neutral-50",
      border: "border-neutral-200",
      dot: "bg-neutral-400",
      title: "text-neutral-700",
      iconBg: "bg-neutral-100",
      iconColor: "text-neutral-600",
    },
    brand: {
      bg: "bg-brand-50",
      border: "border-brand-200",
      dot: "bg-brand-500",
      title: "text-brand-800",
      iconBg: "bg-brand-100",
      iconColor: "text-brand-700",
    },
    emerald: {
      bg: "bg-emerald-50",
      border: "border-emerald-200",
      dot: "bg-emerald-500",
      title: "text-emerald-800",
      iconBg: "bg-emerald-100",
      iconColor: "text-emerald-700",
    },
  };

  const c = colorMap[color];

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ delay, duration: 0.4 }}
      className={`rounded-xl border ${c.border} ${c.bg} p-6`}
    >
      <div className="flex items-center gap-3">
        <div
          className={`flex h-8 w-8 items-center justify-center rounded-lg ${c.iconBg}`}
        >
          <svg
            className={`h-4 w-4 ${c.iconColor}`}
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={1.5}
          >
            <path strokeLinecap="round" strokeLinejoin="round" d={icon} />
          </svg>
        </div>
        <h3
          className={`text-sm font-semibold uppercase tracking-wider ${c.title}`}
        >
          {title}
        </h3>
      </div>
      <ul className="mt-5 space-y-3">
        {items.map((item, i) => (
          <motion.li
            key={item}
            className="flex items-center gap-2.5"
            initial={{ opacity: 0, x: -8 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: delay + 0.1 + i * 0.06, duration: 0.3 }}
          >
            <span className={`h-1.5 w-1.5 shrink-0 rounded-full ${c.dot}`} />
            <span className="text-sm text-neutral-700">{item}</span>
          </motion.li>
        ))}
      </ul>
    </motion.div>
  );
}

export function WhatActuallyHappens() {
  const { whatActuallyHappens } = siteCopy;

  return (
    <Section>
      <h2 className="mx-auto max-w-3xl text-center text-display-sm">
        {whatActuallyHappens.headline}
      </h2>

      <div className="mt-12 grid gap-6 md:grid-cols-3">
        <ProcessColumn
          title={whatActuallyHappens.youProvide.title}
          items={whatActuallyHappens.youProvide.items}
          color="neutral"
          delay={0}
          icon="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z"
        />
        <ProcessColumn
          title={whatActuallyHappens.vibepreneurBuilds.title}
          items={whatActuallyHappens.vibepreneurBuilds.items}
          color="brand"
          delay={0.1}
          icon="M9.594 3.94c.09-.542.56-.94 1.11-.94h2.593c.55 0 1.02.398 1.11.94l.213 1.281c.063.374.313.686.645.87.074.04.147.083.22.127.325.196.72.257 1.075.124l1.217-.456a1.125 1.125 0 011.37.49l1.296 2.247a1.125 1.125 0 01-.26 1.431l-1.003.827c-.293.241-.438.613-.43.992a7.723 7.723 0 010 .255c-.008.378.137.75.43.991l1.004.827c.424.35.534.955.26 1.43l-1.298 2.247a1.125 1.125 0 01-1.369.491l-1.217-.456c-.355-.133-.75-.072-1.076.124a6.47 6.47 0 01-.22.128c-.331.183-.581.495-.644.869l-.213 1.281c-.09.543-.56.94-1.11.94h-2.594c-.55 0-1.019-.398-1.11-.94l-.213-1.281c-.062-.374-.312-.686-.644-.87a6.52 6.52 0 01-.22-.127c-.325-.196-.72-.257-1.076-.124l-1.217.456a1.125 1.125 0 01-1.369-.49l-1.297-2.247a1.125 1.125 0 01.26-1.431l1.004-.827c.292-.24.437-.613.43-.991a6.932 6.932 0 010-.255c.007-.38-.138-.751-.43-.992l-1.004-.827a1.125 1.125 0 01-.26-1.43l1.297-2.247a1.125 1.125 0 011.37-.491l1.216.456c.356.133.751.072 1.076-.124.072-.044.146-.086.22-.128.332-.183.582-.495.644-.869l.214-1.28z M15 12a3 3 0 11-6 0 3 3 0 016 0z"
        />
        <ProcessColumn
          title={whatActuallyHappens.vibepreneurExecutes.title}
          items={whatActuallyHappens.vibepreneurExecutes.items}
          color="emerald"
          delay={0.2}
          icon="M15.59 14.37a6 6 0 01-5.84 7.38v-4.8m5.84-2.58a14.98 14.98 0 006.16-12.12A14.98 14.98 0 009.631 8.41m5.96 5.96a14.926 14.926 0 01-5.841 2.58m-.119-8.54a6 6 0 00-7.381 5.84h4.8m2.581-5.84a14.927 14.927 0 00-2.58 5.84m2.699 2.7c-.103.021-.207.041-.311.06a15.09 15.09 0 01-2.448-2.448 14.9 14.9 0 01.06-.312m-2.24 2.39a4.493 4.493 0 00-1.757 4.306 4.493 4.493 0 004.306-1.758M16.5 9a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0z"
        />
      </div>

      <div className="mt-8 hidden items-center justify-center md:flex">
        <div className="flex items-center gap-4 rounded-full border border-neutral-200 bg-white px-6 py-2.5">
          <span className="flex items-center gap-1.5 text-xs text-neutral-500">
            <span className="h-2 w-2 rounded-full bg-neutral-400" /> Input
          </span>
          <svg
            className="h-3 w-8 text-neutral-300"
            fill="none"
            viewBox="0 0 32 12"
          >
            <path
              d="M0 6h24m0 0l-4-4m4 4l-4 4"
              stroke="currentColor"
              strokeWidth={1.5}
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
          <span className="flex items-center gap-1.5 text-xs text-brand-600">
            <span className="h-2 w-2 rounded-full bg-brand-500" /> Structure
          </span>
          <svg
            className="h-3 w-8 text-neutral-300"
            fill="none"
            viewBox="0 0 32 12"
          >
            <path
              d="M0 6h24m0 0l-4-4m4 4l-4 4"
              stroke="currentColor"
              strokeWidth={1.5}
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
          <span className="flex items-center gap-1.5 text-xs text-emerald-600">
            <span className="h-2 w-2 rounded-full bg-emerald-500" /> Execution
          </span>
        </div>
      </div>
    </Section>
  );
}
