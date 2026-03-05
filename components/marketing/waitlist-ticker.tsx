"use client";

import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Button } from "@/components/ui/button";

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
  "site superintendents",
  "fund managers",
  "therapy practice owners",
  "marketing directors",
  "bridge engineers",
  "coaches",
  "MEP directors",
  "dental practice owners",
  "venture partners",
  "structural engineers",
  "franchise owners",
  "managing editors",
  "safety directors",
  "portfolio managers",
  "head chefs",
  "principal engineers",
  "construction firm owners",
  "media buyers",
  "geotechnical engineers",
  "salon owners",
  "CTOs",
  "land development managers",
  "insurance brokers",
  "executive producers",
  "heavy civil managers",
  "retail directors",
  "chief engineers",
  "photography studio owners",
  "general contractors",
  "senior developers",
  "commissioning managers",
  "hospitality directors",
  "project engineers",
  "law firm partners",
  "estimating directors",
  "fitness studio owners",
  "brand strategists",
  "surveying firm owners",
  "medical directors",
  "VP of sales",
  "field operations managers",
  "managing directors",
  "architects",
  "preconstruction directors",
  "gym owners",
  "procurement directors",
  "environmental engineers",
  "investment advisors",
  "studio owners",
  "construction managers",
  "senior partners",
  "building envelope consultants",
  "fleet managers",
  "principal architects",
  "warehouse directors",
  "product directors",
  "master electricians",
  "spa owners",
  "R&D directors",
  "trade contractors",
  "vineyard owners",
  "engineering managers",
  "property developers",
  "CMOs",
  "production managers",
  "staffing directors",
  "vet practice owners",
  "IT directors",
  "real estate brokers",
  "executive coaches",
  "manufacturing directors",
  "workshop owners",
  "finance directors",
  "VP of marketing",
  "commercial brokers",
  "agency owners",
  "training directors",
  "consultants",
  "revenue officers",
  "head brewers",
  "senior analysts",
  "design directors",
  "logistics directors",
  "general managers",
  "wealth managers",
  "VP of operations",
  "optometry practice owners",
  "technical directors",
  "practice managers",
  "managing partners",
  "supply chain directors",
  "e-commerce directors",
  "publishing directors",
  "PE firm partners",
  "property managers",
  "treasury managers",
  "attorneys",
  "principal consultants",
  "regional managers",
  "operations directors",
  "senior brokers",
  "VP of product",
  "underwriting directors",
  "sales directors",
  "clinic directors",
  "tech leads",
  "senior advisors",
  "chief marketers",
  "senior designers",
  "HR directors",
  "CFOs",
  "accountants",
  "entertainment managers",
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
