"use client";

import { motion } from "framer-motion";

const bars = [
  { label: "Wk1", height: 20 },
  { label: "Wk2", height: 35 },
  { label: "Wk3", height: 28 },
  { label: "Wk4", height: 52 },
  { label: "Wk5", height: 45 },
  { label: "Wk6", height: 68 },
  { label: "Wk7", height: 60 },
  { label: "Wk8", height: 85 },
];

const tiles = [
  { label: "Traction Velocity", value: "+34%", color: "text-emerald-600" },
  { label: "Top Channel", value: "LinkedIn", color: "text-brand-600" },
];

export function GrowthDashboardMock() {
  return (
    <motion.div
      className="relative mx-auto max-w-sm overflow-hidden rounded-2xl border border-neutral-200 bg-white shadow-xl"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.6 }}
    >
      <div className="border-b border-neutral-100 px-5 py-3">
        <div className="flex items-center gap-2">
          <div className="h-2.5 w-2.5 rounded-full bg-red-300" />
          <div className="h-2.5 w-2.5 rounded-full bg-amber-300" />
          <div className="h-2.5 w-2.5 rounded-full bg-emerald-300" />
          <span className="ml-3 text-xs font-medium text-neutral-400">
            Growth Metrics
          </span>
        </div>
      </div>

      <div className="p-5">
        <div className="mb-4 grid grid-cols-2 gap-3">
          {tiles.map((tile, i) => (
            <motion.div
              key={tile.label}
              className="rounded-lg border border-neutral-100 p-3"
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 + i * 0.1 }}
            >
              <p className="text-[10px] font-medium text-neutral-500">
                {tile.label}
              </p>
              <p className={`mt-0.5 text-base font-bold ${tile.color}`}>
                {tile.value}
              </p>
            </motion.div>
          ))}
        </div>

        <div className="rounded-lg border border-neutral-100 p-3">
          <p className="mb-3 text-[10px] font-medium text-neutral-500">
            Weekly Signups
          </p>
          <svg viewBox="0 0 200 90" className="w-full" aria-hidden="true">
            {bars.map((bar, i) => (
              <g key={bar.label}>
                <motion.rect
                  x={i * 25 + 2}
                  width={18}
                  rx={3}
                  fill="currentColor"
                  className="text-brand-400"
                  initial={{ y: 75, height: 0 }}
                  whileInView={{ y: 75 - bar.height, height: bar.height }}
                  viewport={{ once: true }}
                  transition={{
                    delay: 0.5 + i * 0.08,
                    duration: 0.5,
                    ease: "easeOut",
                  }}
                />
                <text
                  x={i * 25 + 11}
                  y={88}
                  textAnchor="middle"
                  className="fill-neutral-400"
                  fontSize={7}
                >
                  {bar.label}
                </text>
              </g>
            ))}
          </svg>
        </div>
      </div>
    </motion.div>
  );
}
