"use client";

import { motion } from "framer-motion";

const competitors = [
  { label: "A", cx: 45, cy: 35 },
  { label: "B", cx: 70, cy: 55 },
  { label: "C", cx: 30, cy: 65 },
  { label: "D", cx: 60, cy: 75 },
];

const youDot = { cx: 80, cy: 22 };

export function PositioningCanvasMock() {
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
            Positioning Canvas
          </span>
        </div>
      </div>

      <div className="p-5">
        <svg viewBox="0 0 100 100" className="w-full" aria-hidden="true">
          <line
            x1="50"
            y1="5"
            x2="50"
            y2="95"
            stroke="currentColor"
            className="text-neutral-200"
            strokeWidth={0.5}
          />
          <line
            x1="5"
            y1="50"
            x2="95"
            y2="50"
            stroke="currentColor"
            className="text-neutral-200"
            strokeWidth={0.5}
          />

          <text x="52" y="10" fontSize={4} className="fill-neutral-400">
            High value
          </text>
          <text x="52" y="96" fontSize={4} className="fill-neutral-400">
            Low value
          </text>
          <text x="2" y="48" fontSize={4} className="fill-neutral-400">
            Narrow
          </text>
          <text x="78" y="48" fontSize={4} className="fill-neutral-400">
            Broad reach
          </text>

          {competitors.map((c, i) => (
            <motion.g key={c.label}>
              <motion.circle
                cx={c.cx}
                cy={c.cy}
                r={4}
                className="fill-neutral-300"
                initial={{ opacity: 0, scale: 0 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4 + i * 0.12 }}
              />
              <motion.text
                x={c.cx}
                y={c.cy + 1.5}
                textAnchor="middle"
                fontSize={4}
                className="fill-neutral-500 font-medium"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5 + i * 0.12 }}
              >
                {c.label}
              </motion.text>
            </motion.g>
          ))}

          <motion.circle
            cx={youDot.cx}
            cy={youDot.cy}
            r={5}
            className="fill-brand-500"
            initial={{ opacity: 0, scale: 0 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 1, type: "spring", stiffness: 200 }}
          />
          <motion.circle
            cx={youDot.cx}
            cy={youDot.cy}
            r={5}
            fill="none"
            className="stroke-brand-400"
            strokeWidth={1}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: [0, 0.6, 0] }}
            viewport={{ once: true }}
            transition={{
              delay: 1.2,
              duration: 2,
              repeat: Infinity,
            }}
          />
          <motion.text
            x={youDot.cx}
            y={youDot.cy + 1.5}
            textAnchor="middle"
            fontSize={3.5}
            className="fill-white font-bold"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 1.1 }}
          >
            YOU
          </motion.text>
        </svg>
      </div>
    </motion.div>
  );
}
