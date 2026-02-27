"use client";

import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { howItWorksCopy } from "@/content/how-it-works";

export function StaggeredExamples() {
  const { solutionExamples } = howItWorksCopy;

  return (
    <div className="mt-12 grid gap-8 lg:grid-cols-2">
      {solutionExamples.map((example, i) => (
        <motion.div
          key={example.title}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ delay: i * 0.12, duration: 0.4 }}
        >
          <Card className="h-full space-y-4">
            <h3 className="text-lg font-semibold text-neutral-900">
              {example.title}
            </h3>

            <div>
              <p className="text-xs font-semibold uppercase tracking-wider text-neutral-400">
                Problem
              </p>
              <p className="mt-1 text-sm text-neutral-600">{example.problem}</p>
            </div>

            <div>
              <p className="text-xs font-semibold uppercase tracking-wider text-neutral-400">
                Buyer
              </p>
              <p className="mt-1 text-sm text-neutral-600">{example.buyer}</p>
            </div>

            <div>
              <p className="text-xs font-semibold uppercase tracking-wider text-neutral-400">
                Offer
              </p>
              <p className="mt-1 text-sm text-neutral-600">{example.offer}</p>
            </div>

            <div>
              <p className="text-xs font-semibold uppercase tracking-wider text-neutral-400">
                Distribution wedge
              </p>
              <p className="mt-1 text-sm text-neutral-600">
                {example.distributionWedge}
              </p>
            </div>

            <div>
              <p className="text-xs font-semibold uppercase tracking-wider text-neutral-400">
                First 3 moves
              </p>
              <ol className="mt-1 space-y-1">
                {example.firstMoves.map((move, j) => (
                  <li
                    key={j}
                    className="flex items-start gap-2 text-sm text-neutral-600"
                  >
                    <span className="mt-0.5 flex h-4 w-4 shrink-0 items-center justify-center rounded bg-brand-50 text-[10px] font-bold text-brand-700">
                      {j + 1}
                    </span>
                    {move}
                  </li>
                ))}
              </ol>
            </div>
          </Card>
        </motion.div>
      ))}
    </div>
  );
}
