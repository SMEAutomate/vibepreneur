"use client";

import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { howItWorksCopy } from "@/content/how-it-works";

export function TechnicalPillars() {
  const { headline, subheadline, pillars } = howItWorksCopy.technical;

  return (
    <>
      <h2 className="text-center text-display-sm">{headline}</h2>
      <p className="mx-auto mt-4 max-w-2xl text-center text-neutral-600">
        {subheadline}
      </p>
      <div className="mt-12 grid gap-6 sm:grid-cols-2">
        {pillars.map((pillar, i) => (
          <motion.div
            key={pillar.title}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.08 }}
          >
            <Card hover className="h-full">
              <div className="mb-3 flex h-9 w-9 items-center justify-center rounded-lg bg-brand-50 text-brand-700">
                <svg
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={1.5}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d={pillar.icon}
                  />
                </svg>
              </div>
              <h3 className="text-base font-semibold text-neutral-900">
                {pillar.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-neutral-600">
                {pillar.body}
              </p>
            </Card>
          </motion.div>
        ))}
      </div>
    </>
  );
}
