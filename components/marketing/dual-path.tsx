"use client";

import { motion } from "framer-motion";
import { Section } from "@/components/ui/section";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { siteCopy } from "@/content/copy";

function PathCard({
  path,
  index,
  icon,
}: {
  path: {
    title: string;
    body: string;
    outcomes: readonly string[];
    cta: string;
  };
  index: number;
  icon: string;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ delay: index * 0.1, duration: 0.4 }}
    >
      <Card className="flex h-full flex-col p-8">
        <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-brand-50">
          <svg
            className="h-5 w-5 text-brand-700"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={1.5}
          >
            <path strokeLinecap="round" strokeLinejoin="round" d={icon} />
          </svg>
        </div>
        <h3 className="mt-5 text-xl font-semibold text-neutral-900">
          {path.title}
        </h3>
        <p className="mt-3 text-neutral-600">{path.body}</p>
        <ul className="mt-6 flex-1 space-y-3">
          {path.outcomes.map((outcome, i) => (
            <li key={i} className="flex items-start gap-2.5 text-sm">
              <svg
                className="mt-0.5 h-4 w-4 shrink-0 text-brand-600"
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
              <span className="text-neutral-700">{outcome}</span>
            </li>
          ))}
        </ul>
        <div className="mt-8">
          <Button href="/waitlist" variant="secondary" className="w-full">
            {path.cta}
          </Button>
        </div>
      </Card>
    </motion.div>
  );
}

export function DualPath() {
  const { dualPath } = siteCopy;

  return (
    <Section>
      <h2 className="text-center text-display-sm">{dualPath.headline}</h2>
      <div className="mt-12 grid gap-6 md:grid-cols-2">
        <PathCard
          path={dualPath.pathA}
          index={0}
          icon="M12 18v-5.25m0 0a6.01 6.01 0 001.5-.189m-1.5.189a6.01 6.01 0 01-1.5-.189m3.75 7.478a12.06 12.06 0 01-4.5 0m3.75 2.383a14.406 14.406 0 01-3 0M14.25 18v-.192c0-.983.658-1.823 1.508-2.316a7.5 7.5 0 10-7.517 0c.85.493 1.509 1.333 1.509 2.316V18"
        />
        <PathCard
          path={dualPath.pathB}
          index={1}
          icon="M2.25 18L9 11.25l4.306 4.307a11.95 11.95 0 015.814-5.519l2.74-1.22m0 0l-5.94-2.28m5.94 2.28l-2.28 5.941"
        />
      </div>
    </Section>
  );
}
