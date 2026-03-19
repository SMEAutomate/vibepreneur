"use client";

import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { howItWorksCopy } from "@/content/how-it-works";

export function ExampleJourneys() {
  const { examples } = howItWorksCopy;

  return (
    <div className="mt-12 grid gap-6 md:grid-cols-3">
      {examples.map((ex, i) => (
        <motion.div
          key={ex.title}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ delay: i * 0.08, duration: 0.4 }}
        >
          <Card className="flex h-full flex-col p-6">
            <span className="text-xs font-medium text-brand-600">
              {ex.persona}
            </span>
            <h3 className="mt-2 text-base font-semibold text-neutral-900">
              {ex.title}
            </h3>
            <p className="mt-3 flex-1 text-sm leading-relaxed text-neutral-600">
              {ex.journey}
            </p>
            <div className="mt-4 rounded-lg bg-brand-50 px-4 py-2.5">
              <p className="text-xs font-semibold uppercase tracking-wider text-brand-500">
                Outcome
              </p>
              <p className="mt-0.5 text-sm font-medium text-neutral-800">
                {ex.outcome}
              </p>
            </div>
          </Card>
        </motion.div>
      ))}
    </div>
  );
}
