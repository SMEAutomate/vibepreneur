"use client";

import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Button } from "@/components/ui/button";

const ROLES = [
  "agency owners",
  "architects",
  "attorneys",
  "brand strategists",
  "CFOs",
  "chief marketers",
  "clinic directors",
  "CMOs",
  "coaches",
  "commercial brokers",
  "construction managers",
  "consultants",
  "creative directors",
  "CTOs",
  "dental practice owners",
  "design directors",
  "e-commerce directors",
  "engineering managers",
  "executive coaches",
  "executive producers",
  "film producers",
  "finance directors",
  "fitness studio owners",
  "fleet managers",
  "franchise owners",
  "fund managers",
  "general contractors",
  "general managers",
  "gym owners",
  "head brewers",
  "head chefs",
  "hospitality directors",
  "HR directors",
  "insurance brokers",
  "investment advisors",
  "IT directors",
  "law firm partners",
  "logistics directors",
  "managing directors",
  "managing editors",
  "managing partners",
  "manufacturing directors",
  "marketing directors",
  "master electricians",
  "master plumbers",
  "media buyers",
  "medical directors",
  "operations directors",
  "optometry practice owners",
  "PE firm partners",
  "pharmacy owners",
  "photography studio owners",
  "portfolio managers",
  "practice managers",
  "principal architects",
  "principal consultants",
  "principal engineers",
  "procurement directors",
  "product directors",
  "production managers",
  "property developers",
  "property managers",
  "publishing directors",
  "R&D directors",
  "real estate brokers",
  "regional managers",
  "restaurant owners",
  "retail directors",
  "revenue officers",
  "salon owners",
  "sales directors",
  "senior advisors",
  "senior analysts",
  "senior brokers",
  "senior developers",
  "senior designers",
  "senior partners",
  "senior strategists",
  "spa owners",
  "staffing directors",
  "studio owners",
  "supply chain directors",
  "technical directors",
  "tech leads",
  "therapy practice owners",
  "trade contractors",
  "training directors",
  "treasury managers",
  "underwriting directors",
  "venture partners",
  "vet practice owners",
  "vineyard owners",
  "VP of engineering",
  "VP of marketing",
  "VP of operations",
  "VP of product",
  "VP of sales",
  "warehouse directors",
  "wealth managers",
  "workshop owners",
  "civil engineering directors",
  "site superintendents",
  "structural engineers",
  "project engineers",
  "construction superintendents",
  "MEP directors",
  "estimating directors",
  "chief engineers",
  "preconstruction directors",
  "safety directors",
  "field operations managers",
  "commissioning managers",
  "bridge engineers",
  "geotechnical engineers",
  "environmental engineers",
  "construction firm owners",
  "land development managers",
  "building envelope consultants",
  "heavy civil managers",
  "surveying firm owners",
] as const;

const ANCHOR_YEAR = 2026;
const ANCHOR_MONTH = 2;
const ANCHOR_DAY = 5;
const ANCHOR_COUNT = 914;
const TICK_MS = 30_000;

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

export function WaitlistTicker(): React.ReactElement {
  const [count, setCount] = useState(computeCount);
  const [roleIndex, setRoleIndex] = useState(0);
  const spanRef = useRef<HTMLSpanElement>(null);
  const prevRef = useRef(count);

  useEffect(() => {
    const countId = setInterval(() => setCount(computeCount()), TICK_MS);
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
            on the waitlist
          </p>
        </motion.div>

        <Button href="/waitlist" size="sm">
          Join the Waitlist
        </Button>
      </div>
    </div>
  );
}
