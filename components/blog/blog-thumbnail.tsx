"use client";

import { motion } from "framer-motion";
import type { BlogCategory, BlogThumbnailVariant } from "@/content/blog";
import { paletteFor } from "./blog-palettes";

const STRONG = "var(--tn-strong)";
const MID = "var(--tn-mid)";
const SOFT = "var(--tn-soft)";
/** Matches the tile background, for shapes that punch a hole through a mark. */
const BG = "var(--tn-bg)";

function RisingBars() {
  const heights = [28, 44, 36, 52, 40];
  return (
    <svg viewBox="0 0 200 80" className="h-full w-full">
      {heights.map((h, i) => (
        <motion.rect
          key={i}
          x={28 + i * 32}
          y={80 - h}
          width={16}
          height={h}
          rx={3}
          fill={i % 2 === 0 ? STRONG : MID}
          initial={{ scaleY: 0 }}
          animate={{ scaleY: [0, 1, 0.6, 1] }}
          transition={{
            duration: 2.4,
            delay: i * 0.15,
            repeat: Infinity,
            repeatType: "mirror",
            ease: "easeInOut",
          }}
          style={{ originY: 1, originX: 0.5 }}
        />
      ))}
    </svg>
  );
}

function OrbitRings() {
  return (
    <svg viewBox="0 0 200 80" className="h-full w-full">
      <circle
        cx="100"
        cy="40"
        r="16"
        fill="none"
        stroke={SOFT}
        strokeWidth="1.5"
      />
      <circle
        cx="100"
        cy="40"
        r="28"
        fill="none"
        stroke={SOFT}
        strokeWidth="1"
      />
      <circle cx="100" cy="40" r="4" fill={STRONG} />
      <motion.circle
        cx="100"
        cy="40"
        r="3"
        fill={MID}
        animate={{ rotate: 360 }}
        transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
        style={{
          originX: "100px",
          originY: "40px",
          offsetPath:
            "path('M 128 40 A 28 28 0 1 1 72 40 A 28 28 0 1 1 128 40')",
        }}
      >
        <animateMotion
          dur="3s"
          repeatCount="indefinite"
          path="M 28 0 A 28 28 0 1 1 -28 0 A 28 28 0 1 1 28 0"
        />
      </motion.circle>
    </svg>
  );
}

function PulseRadar() {
  return (
    <svg viewBox="0 0 200 80" className="h-full w-full">
      <circle cx="100" cy="40" r="4" fill={STRONG} />
      {[0, 1, 2].map((i) => (
        <motion.circle
          key={i}
          cx="100"
          cy="40"
          r="8"
          fill="none"
          stroke={MID}
          strokeWidth="1.5"
          initial={{ scale: 1, opacity: 0.8 }}
          animate={{ scale: 3.5, opacity: 0 }}
          transition={{
            duration: 2.4,
            delay: i * 0.8,
            repeat: Infinity,
            ease: "easeOut",
          }}
        />
      ))}
    </svg>
  );
}

function NodeNetwork() {
  const nodes = [
    { x: 60, y: 24 },
    { x: 140, y: 20 },
    { x: 100, y: 44 },
    { x: 50, y: 60 },
    { x: 150, y: 58 },
  ];
  const edges: [number, number][] = [
    [0, 2],
    [1, 2],
    [2, 3],
    [2, 4],
    [0, 3],
    [1, 4],
  ];
  return (
    <svg viewBox="0 0 200 80" className="h-full w-full">
      {edges.map(([a, b], i) => (
        <motion.line
          key={i}
          x1={nodes[a].x}
          y1={nodes[a].y}
          x2={nodes[b].x}
          y2={nodes[b].y}
          stroke={SOFT}
          strokeWidth="1.5"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{
            duration: 1.2,
            delay: i * 0.18,
            repeat: Infinity,
            repeatType: "mirror",
            repeatDelay: 1,
          }}
        />
      ))}
      {nodes.map((n, i) => (
        <motion.circle
          key={i}
          cx={n.x}
          cy={n.y}
          r="5"
          fill={i === 2 ? STRONG : MID}
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.4, delay: 0.6 + i * 0.1 }}
        />
      ))}
    </svg>
  );
}

function SplitPath() {
  return (
    <svg viewBox="0 0 200 80" className="h-full w-full">
      <motion.path
        d="M 40 40 L 100 40"
        fill="none"
        stroke={STRONG}
        strokeWidth="2.5"
        strokeLinecap="round"
        initial={{ pathLength: 0 }}
        animate={{ pathLength: 1 }}
        transition={{ duration: 1, repeat: Infinity, repeatDelay: 2 }}
      />
      <motion.path
        d="M 100 40 Q 120 40 140 24 L 165 16"
        fill="none"
        stroke={MID}
        strokeWidth="2"
        strokeLinecap="round"
        initial={{ pathLength: 0 }}
        animate={{ pathLength: 1 }}
        transition={{
          duration: 0.8,
          delay: 1,
          repeat: Infinity,
          repeatDelay: 2.2,
        }}
      />
      <motion.path
        d="M 100 40 Q 120 40 140 56 L 165 64"
        fill="none"
        stroke={SOFT}
        strokeWidth="2"
        strokeLinecap="round"
        initial={{ pathLength: 0 }}
        animate={{ pathLength: 1 }}
        transition={{
          duration: 0.8,
          delay: 1,
          repeat: Infinity,
          repeatDelay: 2.2,
        }}
      />
    </svg>
  );
}

function WaveFlow() {
  return (
    <svg viewBox="0 0 200 80" className="h-full w-full">
      <motion.path
        d="M 20 40 C 50 20, 70 60, 100 40 C 130 20, 150 60, 180 40"
        fill="none"
        stroke={STRONG}
        strokeWidth="2.5"
        strokeLinecap="round"
        initial={{ pathLength: 0 }}
        animate={{ pathLength: 1 }}
        transition={{
          duration: 2,
          repeat: Infinity,
          repeatDelay: 1,
          ease: "easeInOut",
        }}
      />
      <motion.path
        d="M 20 48 C 50 28, 70 68, 100 48 C 130 28, 150 68, 180 48"
        fill="none"
        stroke={SOFT}
        strokeWidth="1.5"
        strokeLinecap="round"
        initial={{ pathLength: 0 }}
        animate={{ pathLength: 1 }}
        transition={{
          duration: 2,
          delay: 0.3,
          repeat: Infinity,
          repeatDelay: 1,
          ease: "easeInOut",
        }}
      />
    </svg>
  );
}

function ScatterConverge() {
  const offsets = [
    { x: -40, y: -24 },
    { x: 40, y: -20 },
    { x: -36, y: 20 },
    { x: 44, y: 24 },
    { x: 0, y: -30 },
    { x: 0, y: 28 },
  ];
  return (
    <svg viewBox="0 0 200 80" className="h-full w-full">
      {offsets.map((o, i) => (
        <motion.circle
          key={i}
          cx={100}
          cy={40}
          r="5"
          fill={i % 2 === 0 ? STRONG : MID}
          initial={{ x: o.x, y: o.y, opacity: 0.4 }}
          animate={{
            x: [o.x, 0, o.x],
            y: [o.y, 0, o.y],
            opacity: [0.4, 1, 0.4],
          }}
          transition={{
            duration: 3,
            delay: i * 0.1,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      ))}
    </svg>
  );
}

function GridLight() {
  const cells: { x: number; y: number }[] = [];
  for (let row = 0; row < 3; row++) {
    for (let col = 0; col < 3; col++) {
      cells.push({ x: 68 + col * 28, y: 12 + row * 22 });
    }
  }
  return (
    <svg viewBox="0 0 200 80" className="h-full w-full">
      {cells.map((c, i) => (
        <motion.rect
          key={i}
          x={c.x}
          y={c.y}
          width={20}
          height={16}
          rx={3}
          fill={MID}
          initial={{ opacity: 0.15 }}
          animate={{ opacity: [0.15, 0.9, 0.15] }}
          transition={{
            duration: 2,
            delay: i * 0.22,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      ))}
    </svg>
  );
}

function SpiralDraw() {
  return (
    <svg viewBox="0 0 200 80" className="h-full w-full">
      <motion.path
        d="M 100 40 C 100 32, 108 28, 112 32 C 118 38, 114 48, 106 48 C 94 48, 88 36, 92 26 C 96 16, 112 12, 120 22 C 128 32, 124 52, 110 56 C 94 60, 82 48, 84 32"
        fill="none"
        stroke={STRONG}
        strokeWidth="2"
        strokeLinecap="round"
        initial={{ pathLength: 0 }}
        animate={{ pathLength: [0, 1, 1, 0] }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut",
          times: [0, 0.4, 0.7, 1],
        }}
      />
    </svg>
  );
}

function LadderSteps() {
  const rungs = [{ y: 58 }, { y: 40 }, { y: 22 }];
  return (
    <svg viewBox="0 0 200 80" className="h-full w-full">
      <line x1="80" y1="14" x2="80" y2="66" stroke={SOFT} strokeWidth="2" />
      <line x1="120" y1="14" x2="120" y2="66" stroke={SOFT} strokeWidth="2" />
      {rungs.map((r, i) => (
        <rect
          key={i}
          x="80"
          y={r.y - 2}
          width="40"
          height="4"
          rx="2"
          fill={SOFT}
        />
      ))}
      <motion.circle
        cx="100"
        r="6"
        fill={STRONG}
        initial={{ cy: 58 }}
        animate={{ cy: [58, 40, 22, 22, 58] }}
        transition={{
          duration: 3,
          repeat: Infinity,
          ease: "easeInOut",
          times: [0, 0.25, 0.5, 0.75, 1],
        }}
      />
    </svg>
  );
}

function GearTurn() {
  const teeth = 8;
  const outerR = 22;
  const innerR = 16;
  let d = "";
  for (let i = 0; i < teeth; i++) {
    const a1 = (i / teeth) * Math.PI * 2;
    const a2 = ((i + 0.35) / teeth) * Math.PI * 2;
    const a3 = ((i + 0.5) / teeth) * Math.PI * 2;
    const a4 = ((i + 0.85) / teeth) * Math.PI * 2;
    const pts = [
      [Math.cos(a1) * innerR, Math.sin(a1) * innerR],
      [Math.cos(a2) * outerR, Math.sin(a2) * outerR],
      [Math.cos(a3) * outerR, Math.sin(a3) * outerR],
      [Math.cos(a4) * innerR, Math.sin(a4) * innerR],
    ];
    pts.forEach(([x, y], j) => {
      // Rounded because Math.cos/sin precision is implementation-defined in
      // the last places. Unrounded, the server and browser can emit different
      // path strings and React reports a hydration mismatch.
      const px = (100 + x).toFixed(3);
      const py = (40 + y).toFixed(3);
      d += `${i === 0 && j === 0 ? "M" : "L"} ${px} ${py} `;
    });
  }
  d += "Z";

  return (
    <svg viewBox="0 0 200 80" className="h-full w-full">
      <motion.g
        animate={{ rotate: 360 }}
        transition={{ duration: 6, repeat: Infinity, ease: "linear" }}
        style={{ originX: "100px", originY: "40px" }}
      >
        <path d={d} fill={MID} />
        <circle cx="100" cy="40" r="7" fill={BG} />
      </motion.g>
    </svg>
  );
}

function ArrowBounce() {
  return (
    <svg viewBox="0 0 200 80" className="h-full w-full">
      <motion.g
        initial={{ x: -20, opacity: 0 }}
        animate={{ x: [-20, 0, 4, 0], opacity: [0, 1, 1, 1] }}
        transition={{
          duration: 2,
          repeat: Infinity,
          repeatDelay: 1,
          ease: "easeOut",
        }}
      >
        <path
          d="M 60 40 L 130 40"
          fill="none"
          stroke={STRONG}
          strokeWidth="3"
          strokeLinecap="round"
        />
        <path
          d="M 122 30 L 138 40 L 122 50"
          fill="none"
          stroke={STRONG}
          strokeWidth="3"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </motion.g>
    </svg>
  );
}

function CalendarCheck() {
  return (
    <svg viewBox="0 0 200 80" className="h-full w-full">
      {[0, 1, 2, 3, 4, 5, 6].map((i) => (
        <motion.rect
          key={i}
          x={32 + i * 20}
          y={24}
          width={14}
          height={14}
          rx={2}
          fill={SOFT}
          initial={{ opacity: 0.3 }}
          animate={{
            opacity: [0.3, 1, 1],
            fill: [SOFT, STRONG, STRONG],
          }}
          transition={{
            duration: 0.5,
            delay: i * 0.4,
            repeat: Infinity,
            repeatDelay: 3.2 - i * 0.4,
          }}
        />
      ))}
      {[0, 1, 2, 3, 4, 5, 6].map((i) => (
        <motion.path
          key={`check-${i}`}
          d={`M ${35 + i * 20} 31 L ${38 + i * 20} 34 L ${43 + i * 20} 28`}
          fill="none"
          stroke="#fff"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ pathLength: [0, 1, 1], opacity: [0, 1, 1] }}
          transition={{
            duration: 0.3,
            delay: i * 0.4 + 0.3,
            repeat: Infinity,
            repeatDelay: 3.5 - i * 0.4,
          }}
        />
      ))}
      <text
        x="32"
        y="58"
        fill={MID}
        fontSize="10"
        fontFamily="sans-serif"
        fontWeight="500"
      >
        Day 1
      </text>
      <text
        x="148"
        y="58"
        fill={MID}
        fontSize="10"
        fontFamily="sans-serif"
        fontWeight="500"
      >
        Day 7
      </text>
    </svg>
  );
}

function SeedSprout() {
  return (
    <svg viewBox="0 0 200 80" className="h-full w-full">
      <motion.line
        x1="100"
        y1="68"
        x2="100"
        y2="28"
        stroke={STRONG}
        strokeWidth="2.5"
        strokeLinecap="round"
        initial={{ pathLength: 0 }}
        animate={{ pathLength: 1 }}
        transition={{ duration: 1.2, repeat: Infinity, repeatDelay: 2.5 }}
      />
      <motion.path
        d="M 100 44 Q 88 38 80 28"
        fill="none"
        stroke={MID}
        strokeWidth="2"
        strokeLinecap="round"
        initial={{ pathLength: 0 }}
        animate={{ pathLength: 1 }}
        transition={{
          duration: 0.6,
          delay: 0.8,
          repeat: Infinity,
          repeatDelay: 3.1,
        }}
      />
      <motion.path
        d="M 100 36 Q 112 30 122 22"
        fill="none"
        stroke={MID}
        strokeWidth="2"
        strokeLinecap="round"
        initial={{ pathLength: 0 }}
        animate={{ pathLength: 1 }}
        transition={{
          duration: 0.6,
          delay: 1.2,
          repeat: Infinity,
          repeatDelay: 2.7,
        }}
      />
      <motion.circle
        cx="80"
        cy="28"
        r="4"
        fill={MID}
        initial={{ scale: 0 }}
        animate={{ scale: [0, 1.2, 1] }}
        transition={{
          duration: 0.4,
          delay: 1.4,
          repeat: Infinity,
          repeatDelay: 3.1,
        }}
      />
      <motion.circle
        cx="122"
        cy="22"
        r="4"
        fill={MID}
        initial={{ scale: 0 }}
        animate={{ scale: [0, 1.2, 1] }}
        transition={{
          duration: 0.4,
          delay: 1.8,
          repeat: Infinity,
          repeatDelay: 2.7,
        }}
      />
      <motion.ellipse
        cx="100"
        cy="68"
        rx="8"
        ry="4"
        fill={SOFT}
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ duration: 0.3, repeat: Infinity, repeatDelay: 3.4 }}
      />
    </svg>
  );
}

function StackBuild() {
  const blocks = [
    { y: 56, w: 60, color: SOFT },
    { y: 42, w: 52, color: MID },
    { y: 28, w: 44, color: STRONG },
    { y: 14, w: 36, color: STRONG },
  ];
  return (
    <svg viewBox="0 0 200 80" className="h-full w-full">
      {blocks.map((b, i) => (
        <motion.rect
          key={i}
          x={100 - b.w / 2}
          y={b.y}
          width={b.w}
          height={10}
          rx={2}
          fill={b.color}
          initial={{ y: 70, opacity: 0 }}
          animate={{ y: b.y, opacity: 1 }}
          transition={{
            duration: 0.5,
            delay: i * 0.5,
            repeat: Infinity,
            repeatDelay: 3 - i * 0.5,
            ease: "easeOut",
          }}
        />
      ))}
    </svg>
  );
}

function ShieldGlow() {
  return (
    <svg viewBox="0 0 200 80" className="h-full w-full">
      <motion.path
        d="M 100 10 L 130 22 L 130 46 Q 130 62 100 72 Q 70 62 70 46 L 70 22 Z"
        fill={MID}
        initial={{ opacity: 0.6 }}
        animate={{ opacity: [0.6, 1, 0.6] }}
        transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.path
        d="M 100 10 L 130 22 L 130 46 Q 130 62 100 72 Q 70 62 70 46 L 70 22 Z"
        fill="none"
        stroke={STRONG}
        strokeWidth="2"
      />
      <motion.path
        d="M 100 10 L 130 22 L 130 46 Q 130 62 100 72 Q 70 62 70 46 L 70 22 Z"
        fill="none"
        stroke={SOFT}
        strokeWidth="4"
        initial={{ opacity: 0 }}
        animate={{ opacity: [0, 0.6, 0], scale: [1, 1.08, 1] }}
        transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
        style={{ originX: "100px", originY: "40px" }}
      />
      <path
        d="M 90 40 L 98 48 L 114 32"
        fill="none"
        stroke="#fff"
        strokeWidth="3"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function SignalRestore() {
  const nodes = [
    { x: 44, y: 28 },
    { x: 44, y: 56 },
    { x: 100, y: 40 },
    { x: 156, y: 28 },
    { x: 156, y: 56 },
  ];
  const links: [number, number][] = [
    [0, 2],
    [1, 2],
    [2, 3],
    [2, 4],
  ];
  return (
    <svg viewBox="0 0 200 80" className="h-full w-full">
      {links.map(([a, b], i) => (
        <motion.line
          key={i}
          x1={nodes[a].x}
          y1={nodes[a].y}
          x2={nodes[b].x}
          y2={nodes[b].y}
          stroke={SOFT}
          strokeWidth="1.5"
          strokeDasharray="4 4"
          initial={{ strokeDasharray: "4 4", stroke: SOFT }}
          animate={{
            strokeDasharray: ["4 4", "100 0", "100 0"],
            stroke: [SOFT, STRONG, STRONG],
          }}
          transition={{
            duration: 1,
            delay: i * 0.4,
            repeat: Infinity,
            repeatDelay: 2.4 - i * 0.4,
          }}
        />
      ))}
      {nodes.map((n, i) => (
        <motion.circle
          key={i}
          cx={n.x}
          cy={n.y}
          r="5"
          fill={i === 2 ? STRONG : SOFT}
          initial={{ opacity: i === 2 ? 1 : 0.3 }}
          animate={{ opacity: 1 }}
          transition={{
            duration: 0.5,
            delay: i === 2 ? 0 : 0.8 + i * 0.3,
            repeat: Infinity,
            repeatDelay: 3,
          }}
        />
      ))}
    </svg>
  );
}

function MorphShape() {
  return (
    <svg viewBox="0 0 200 80" className="h-full w-full">
      <motion.rect
        x="80"
        y="20"
        width="40"
        height="40"
        fill={STRONG}
        animate={{
          rx: [4, 20, 4, 20, 4],
          rotate: [0, 0, 45, 45, 0],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut",
          times: [0, 0.25, 0.5, 0.75, 1],
        }}
        style={{ originX: "100px", originY: "40px" }}
      />
    </svg>
  );
}

function InboxStack() {
  const lines = [
    { y: 18, w: 70 },
    { y: 30, w: 56 },
    { y: 42, w: 64 },
    { y: 54, w: 48 },
    { y: 66, w: 60 },
  ];
  return (
    <svg viewBox="0 0 200 80" className="h-full w-full">
      <rect
        x="56"
        y="10"
        width="88"
        height="64"
        rx="4"
        fill="none"
        stroke={SOFT}
        strokeWidth="1.5"
      />
      {lines.map((l, i) => (
        <motion.rect
          key={i}
          x={100 - l.w / 2}
          y={l.y}
          width={l.w}
          height={6}
          rx={3}
          fill={i === 0 ? STRONG : MID}
          initial={{ x: 50, opacity: 0 }}
          animate={{ x: 0, opacity: [0, 1, 1] }}
          transition={{
            duration: 0.5,
            delay: i * 0.35,
            repeat: Infinity,
            repeatDelay: 3.25 - i * 0.35,
            ease: "easeOut",
          }}
        />
      ))}
    </svg>
  );
}

function FilterFunnel() {
  const topDots = [-36, -18, 0, 18, 36];
  return (
    <svg viewBox="0 0 200 80" className="h-full w-full">
      {topDots.map((dx, i) => (
        <motion.circle
          key={i}
          cx={100 + dx}
          cy={16}
          r="4"
          fill={SOFT}
          initial={{ opacity: 0.4 }}
          animate={{ opacity: [0.4, 1, 0.4] }}
          transition={{
            duration: 1,
            delay: i * 0.15,
            repeat: Infinity,
            repeatDelay: 2,
          }}
        />
      ))}
      <path
        d="M 60 28 L 140 28 L 112 52 L 88 52 Z"
        fill="none"
        stroke={MID}
        strokeWidth="1.5"
      />
      {topDots.map((dx, i) => (
        <motion.circle
          key={`fall-${i}`}
          r="3"
          fill={i < 2 ? MID : SOFT}
          initial={{ cx: 100 + dx, cy: 16, opacity: 1 }}
          animate={{
            cy: [16, 28, i < 2 ? 60 : 44],
            opacity: [1, 1, i < 2 ? 1 : 0],
            cx: [
              100 + dx,
              100 + dx,
              i < 2 ? 100 + (dx > 0 ? 4 : -4) : 100 + dx,
            ],
          }}
          transition={{
            duration: 1.5,
            delay: 1 + i * 0.12,
            repeat: Infinity,
            repeatDelay: 2.3 - i * 0.12,
          }}
        />
      ))}
      <motion.circle
        cx="100"
        cy="68"
        r="5"
        fill={STRONG}
        initial={{ scale: 0 }}
        animate={{ scale: [0, 0, 1.2, 1] }}
        transition={{
          duration: 2,
          delay: 2,
          repeat: Infinity,
          repeatDelay: 1.5,
          times: [0, 0.3, 0.7, 1],
        }}
      />
    </svg>
  );
}

function TimelineMarch() {
  const milestones = [
    { x: 36, label: "" },
    { x: 72, label: "" },
    { x: 108, label: "" },
    { x: 144, label: "" },
    { x: 170, label: "" },
  ];
  return (
    <svg viewBox="0 0 200 80" className="h-full w-full">
      <line x1="30" y1="40" x2="176" y2="40" stroke={SOFT} strokeWidth="2" />
      {milestones.map((m, i) => (
        <motion.g key={i}>
          <circle
            cx={m.x}
            cy={40}
            r="7"
            fill="none"
            stroke={SOFT}
            strokeWidth="1.5"
          />
          <motion.circle
            cx={m.x}
            cy={40}
            r="7"
            fill={STRONG}
            initial={{ scale: 0 }}
            animate={{ scale: [0, 1, 1] }}
            transition={{
              duration: 0.4,
              delay: i * 0.5,
              repeat: Infinity,
              repeatDelay: 4 - i * 0.5,
            }}
          />
        </motion.g>
      ))}
      <motion.line
        x1="30"
        y1="40"
        x2="176"
        y2="40"
        stroke={STRONG}
        strokeWidth="2"
        initial={{ pathLength: 0 }}
        animate={{ pathLength: 1 }}
        transition={{
          duration: 2.5,
          repeat: Infinity,
          repeatDelay: 1.5,
          ease: "easeInOut",
        }}
      />
    </svg>
  );
}

function MegaphoneBurst() {
  return (
    <svg viewBox="0 0 200 80" className="h-full w-full">
      <path d="M 70 30 L 100 20 L 100 60 L 70 50 Z" fill={STRONG} />
      <rect x="60" y="30" width="10" height="20" rx="2" fill={MID} />
      <rect x="66" y="52" width="6" height="10" rx="1" fill={MID} />
      {[0, 1, 2].map((i) => (
        <motion.line
          key={i}
          x1="108"
          y1={32 + i * 8}
          x2="140"
          y2={24 + i * 12}
          stroke={MID}
          strokeWidth="2"
          strokeLinecap="round"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ pathLength: [0, 1, 0], opacity: [0, 1, 0] }}
          transition={{
            duration: 1.2,
            delay: i * 0.25,
            repeat: Infinity,
            repeatDelay: 1.3,
          }}
        />
      ))}
      {[0, 1, 2].map((i) => (
        <motion.circle
          key={`dot-${i}`}
          cx={144}
          cy={24 + i * 12}
          r="2.5"
          fill={MID}
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: [0, 1, 0], scale: [0, 1, 0] }}
          transition={{
            duration: 0.6,
            delay: i * 0.25 + 0.8,
            repeat: Infinity,
            repeatDelay: 1.9,
          }}
        />
      ))}
    </svg>
  );
}

function CrossroadsPause() {
  return (
    <svg viewBox="0 0 200 80" className="h-full w-full">
      <line x1="40" y1="40" x2="160" y2="40" stroke={SOFT} strokeWidth="2" />
      <line x1="100" y1="8" x2="100" y2="72" stroke={SOFT} strokeWidth="2" />
      <motion.path
        d="M 40 40 L 100 40"
        fill="none"
        stroke={STRONG}
        strokeWidth="2.5"
        strokeLinecap="round"
        initial={{ pathLength: 0 }}
        animate={{ pathLength: 1 }}
        transition={{ duration: 1, repeat: Infinity, repeatDelay: 3 }}
      />
      <motion.circle
        cx="100"
        cy="40"
        r="6"
        fill={STRONG}
        initial={{ scale: 0 }}
        animate={{ scale: [0, 0, 1.3, 1, 1, 1] }}
        transition={{
          duration: 3,
          delay: 1,
          repeat: Infinity,
          repeatDelay: 1,
          times: [0, 0.1, 0.2, 0.3, 0.7, 1],
        }}
      />
      <motion.path
        d="M 100 40 L 160 40"
        fill="none"
        stroke={MID}
        strokeWidth="2"
        strokeLinecap="round"
        initial={{ pathLength: 0 }}
        animate={{ pathLength: [0, 0, 1] }}
        transition={{
          duration: 2,
          delay: 2,
          repeat: Infinity,
          repeatDelay: 2,
          times: [0, 0.2, 1],
        }}
      />
      <motion.path
        d="M 100 40 L 100 8"
        fill="none"
        stroke={SOFT}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeDasharray="4 3"
        initial={{ opacity: 0.3 }}
        animate={{ opacity: [0.3, 0.3, 0.6, 0.3] }}
        transition={{
          duration: 3,
          delay: 1,
          repeat: Infinity,
          repeatDelay: 1,
        }}
      />
    </svg>
  );
}

function HandshakeMeet() {
  return (
    <svg viewBox="0 0 200 80" className="h-full w-full">
      <motion.circle
        r="8"
        fill={STRONG}
        initial={{ cx: 40, cy: 40 }}
        animate={{ cx: [40, 88, 88, 40] }}
        transition={{
          duration: 3,
          repeat: Infinity,
          ease: "easeInOut",
          times: [0, 0.35, 0.65, 1],
        }}
      />
      <motion.circle
        r="8"
        fill={MID}
        initial={{ cx: 160, cy: 40 }}
        animate={{ cx: [160, 112, 112, 160] }}
        transition={{
          duration: 3,
          repeat: Infinity,
          ease: "easeInOut",
          times: [0, 0.35, 0.65, 1],
        }}
      />
      <motion.path
        d="M 92 36 L 100 44 L 108 36"
        fill="none"
        stroke={SOFT}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        initial={{ opacity: 0, scale: 0 }}
        animate={{
          opacity: [0, 0, 1, 1, 0],
          scale: [0, 0, 1, 1, 0],
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          times: [0, 0.3, 0.4, 0.6, 0.7],
        }}
        style={{ originX: "100px", originY: "40px" }}
      />
    </svg>
  );
}

const VARIANTS: Record<BlogThumbnailVariant, React.FC> = {
  "rising-bars": RisingBars,
  "orbit-rings": OrbitRings,
  "pulse-radar": PulseRadar,
  "node-network": NodeNetwork,
  "split-path": SplitPath,
  "wave-flow": WaveFlow,
  "scatter-converge": ScatterConverge,
  "grid-light": GridLight,
  "spiral-draw": SpiralDraw,
  "ladder-steps": LadderSteps,
  "gear-turn": GearTurn,
  "arrow-bounce": ArrowBounce,
  "calendar-check": CalendarCheck,
  "seed-sprout": SeedSprout,
  "stack-build": StackBuild,
  "shield-glow": ShieldGlow,
  "signal-restore": SignalRestore,
  "morph-shape": MorphShape,
  "inbox-stack": InboxStack,
  "filter-funnel": FilterFunnel,
  "timeline-march": TimelineMarch,
  "megaphone-burst": MegaphoneBurst,
  "crossroads-pause": CrossroadsPause,
  "handshake-meet": HandshakeMeet,
};

export function BlogThumbnail({
  variant,
  category,
  size = "default",
}: {
  variant: BlogThumbnailVariant;
  category?: BlogCategory;
  /**
   * "tall" for the full-width featured card. The artwork has a 2.5:1 viewBox,
   * so in a very wide short box it letterboxes down to a small centred motif.
   * More height lets it scale up to fill the card properly.
   */
  size?: "default" | "tall";
}) {
  const Variant = VARIANTS[variant];
  const palette = paletteFor(category);

  return (
    <div
      className={`flex w-full items-center justify-center overflow-hidden ${
        size === "tall" ? "h-32 sm:h-56" : "h-32"
      }`}
      style={
        {
          backgroundColor: palette.bg,
          "--tn-strong": palette.strong,
          "--tn-mid": palette.mid,
          "--tn-soft": palette.soft,
          "--tn-bg": palette.bg,
        } as React.CSSProperties
      }
    >
      <Variant />
    </div>
  );
}
