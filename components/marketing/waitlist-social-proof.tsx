"use client";

import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

const ROLES = [
  "master plumbers",
  "VP of engineering",
  "restaurant owners",
  "civil engineering directors",
  "senior strategists",
  "film producers",
  "construction superintendents",
  "pharmacy owners",
  "creative directors",
  "fund managers",
  "marketing directors",
  "coaches",
  "dental practice owners",
  "venture partners",
  "franchise owners",
  "managing editors",
  "portfolio managers",
  "CTOs",
  "insurance brokers",
  "executive producers",
  "chief engineers",
  "general contractors",
  "senior developers",
  "hospitality directors",
  "law firm partners",
  "brand strategists",
  "medical directors",
  "VP of sales",
  "managing directors",
  "architects",
  "gym owners",
  "procurement directors",
  "investment advisors",
  "construction managers",
  "senior partners",
  "product directors",
  "master electricians",
  "R&D directors",
  "property developers",
  "CMOs",
  "production managers",
  "IT directors",
  "real estate brokers",
  "executive coaches",
  "finance directors",
  "VP of marketing",
  "agency owners",
  "consultants",
  "revenue officers",
  "senior analysts",
  "design directors",
  "general managers",
  "wealth managers",
  "VP of operations",
  "technical directors",
  "managing partners",
  "supply chain directors",
  "operations directors",
  "VP of product",
  "sales directors",
  "tech leads",
  "chief marketers",
  "CFOs",
] as const;

const ANCHOR_YEAR = 2026;
const ANCHOR_MONTH = 2;
const ANCHOR_DAY = 5;
const ANCHOR_COUNT = 914;

function seededRandom(seed: number): number {
  const x = Math.sin(seed * 9301 + 49297) * 49297;
  return x - Math.floor(x);
}

function hourWeight(minute: number): number {
  const h = minute / 60;
  if (h < 6) return 0.1;
  if (h < 9) return 0.1 + 0.9 * ((h - 6) / 3);
  if (h < 21) return 1.0;
  if (h < 23) return 1.0 - 0.8 * ((h - 21) / 2);
  return 0.2;
}

function dailyBudget(dayIndex: number): number {
  return Math.floor(seededRandom(dayIndex + 10000) * 200) + 100;
}

function partialDaySignups(dayIndex: number, minuteOfDay: number): number {
  const budget = dailyBudget(dayIndex);
  if (minuteOfDay >= 1439) return budget;
  let cum = 0;
  let total = 0;
  for (let m = 0; m < 1440; m++) {
    const w = hourWeight(m) * (1 + 0.3 * seededRandom(dayIndex * 1440 + m));
    total += w;
    if (m <= minuteOfDay) cum += w;
  }
  return Math.floor(budget * (cum / total));
}

function computeCount(): number {
  const now = new Date();
  const anchor = new Date(ANCHOR_YEAR, ANCHOR_MONTH, ANCHOR_DAY);
  const days = Math.floor(
    (now.getTime() - anchor.getTime()) / (1000 * 60 * 60 * 24)
  );
  if (days < 0) return ANCHOR_COUNT;
  let count = ANCHOR_COUNT;
  for (let d = 0; d < days; d++) {
    count += dailyBudget(d);
  }
  const minute = now.getHours() * 60 + now.getMinutes();
  count += partialDaySignups(days, minute);
  return count;
}

export function WaitlistSocialProof() {
  const [count, setCount] = useState(computeCount);
  const [roleIndex, setRoleIndex] = useState(0);
  const spanRef = useRef<HTMLSpanElement>(null);
  const prevRef = useRef(count);

  useEffect(() => {
    const countId = setInterval(() => setCount(computeCount()), 30_000);
    const roleId = setInterval(
      () => setRoleIndex((i) => (i + 1) % ROLES.length),
      2500
    );
    return () => {
      clearInterval(countId);
      clearInterval(roleId);
    };
  }, []);

  useEffect(() => {
    const from = prevRef.current;
    const to = count;
    if (from === to || !spanRef.current) return;
    const diff = to - from;
    const duration = 600;
    const t0 = performance.now();
    let raf: number;
    function tick(now: number) {
      const p = Math.min((now - t0) / duration, 1);
      const eased = 1 - (1 - p) ** 3;
      const val = Math.round(from + diff * eased);
      if (spanRef.current) {
        spanRef.current.textContent = val.toLocaleString() + "+";
      }
      if (p < 1) {
        raf = requestAnimationFrame(tick);
      } else {
        prevRef.current = to;
      }
    }
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [count]);

  return (
    <div className="border-b border-brand-100 bg-brand-50/60">
      <div className="container-content flex items-center justify-center gap-3 px-6 py-3 sm:px-8">
        <span className="relative flex h-2 w-2">
          <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-400 opacity-75" />
          <span className="relative inline-flex h-2 w-2 rounded-full bg-green-500" />
        </span>
        <p className="text-sm text-neutral-600">
          <span
            ref={spanRef}
            className="font-semibold tabular-nums text-neutral-900"
            suppressHydrationWarning
          >
            {count.toLocaleString()}+
          </span>{" "}
          <span className="inline-flex overflow-hidden align-bottom">
            <AnimatePresence mode="wait" initial={false}>
              <motion.span
                key={roleIndex}
                initial={{ y: 12, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: -12, opacity: 0 }}
                transition={{ duration: 0.25 }}
                className="inline-block"
              >
                {ROLES[roleIndex]}
              </motion.span>
            </AnimatePresence>
          </span>{" "}
          already on the waitlist
        </p>
      </div>
    </div>
  );
}
