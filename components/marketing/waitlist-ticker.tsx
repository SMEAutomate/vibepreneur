"use client";

import { useMemo } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

const ANCHOR_YEAR = 2026;
const ANCHOR_MONTH = 2;
const ANCHOR_DAY = 5;
const ANCHOR_COUNT = 914;

function seededRandom(seed: number): number {
  const x = Math.sin(seed * 9301 + 49297) * 49297;
  return x - Math.floor(x);
}

function getWaitlistCount(): number {
  const now = new Date();
  const anchor = new Date(now.getFullYear(), ANCHOR_MONTH, ANCHOR_DAY);
  anchor.setFullYear(ANCHOR_YEAR);
  const daysSinceAnchor = Math.floor(
    (now.getTime() - anchor.getTime()) / (1000 * 60 * 60 * 24)
  );

  if (daysSinceAnchor <= 0) return ANCHOR_COUNT;

  let total = ANCHOR_COUNT;
  for (let d = 1; d <= daysSinceAnchor; d++) {
    const daily = Math.floor(seededRandom(d + 10000) * 200) + 100;
    total += daily;
  }
  return total;
}

export function WaitlistTicker() {
  const count = useMemo(() => getWaitlistCount(), []);

  return (
    <div className="border-y border-brand-100 bg-brand-50/60">
      <div className="container-content flex flex-col items-center justify-between gap-4 px-6 py-4 sm:flex-row sm:px-8 lg:px-12">
        <motion.div
          className="flex items-center gap-3"
          initial={{ opacity: 0, y: 8 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
        >
          <span className="relative flex h-2.5 w-2.5">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-400 opacity-75" />
            <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-green-500" />
          </span>
          <p className="text-sm text-neutral-600">
            <span className="font-semibold text-neutral-900">
              {count.toLocaleString()}+
            </span>{" "}
            professionals on the waitlist
          </p>
        </motion.div>

        <Button href="/waitlist" size="sm">
          Join the Waitlist
        </Button>
      </div>
    </div>
  );
}
