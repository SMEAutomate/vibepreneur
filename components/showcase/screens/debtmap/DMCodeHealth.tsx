import { DarkShell } from "../../DarkShell";

const NAV_ITEMS = [
  { icon: "◆", label: "Dashboard" },
  { icon: "◎", label: "Debt Items" },
  { icon: "▣", label: "Code Health" },
  { icon: "◈", label: "Sprint Impact" },
  { icon: "⚙", label: "Settings" },
];

const SERVICES = [
  {
    name: "search-indexer",
    grade: "A",
    debt: 14,
    trend: "up",
    gradeColor: "text-emerald-600",
    gradeBg: "bg-emerald-100",
  },
  {
    name: "notification-svc",
    grade: "B",
    debt: 24,
    trend: "up",
    gradeColor: "text-green-600",
    gradeBg: "bg-green-100",
  },
  {
    name: "analytics-engine",
    grade: "B",
    debt: 19,
    trend: "stable",
    gradeColor: "text-green-600",
    gradeBg: "bg-green-100",
  },
  {
    name: "user-gateway",
    grade: "C",
    debt: 28,
    trend: "stable",
    gradeColor: "text-amber-600",
    gradeBg: "bg-amber-100",
  },
  {
    name: "billing-api",
    grade: "D",
    debt: 31,
    trend: "down",
    gradeColor: "text-orange-600",
    gradeBg: "bg-orange-100",
  },
  {
    name: "auth-service",
    grade: "F",
    debt: 38,
    trend: "down",
    gradeColor: "text-red-600",
    gradeBg: "bg-red-100",
  },
];

const HOTSPOTS = [
  {
    path: "auth-service/middleware/legacy-auth.ts",
    debt: 14,
    severity: "Critical",
  },
  {
    path: "billing-api/webhooks/stripe-handler.ts",
    debt: 11,
    severity: "High",
  },
  { path: "user-gateway/validators/index.ts", debt: 9, severity: "High" },
  { path: "billing-api/models/subscription.ts", debt: 8, severity: "Medium" },
  {
    path: "auth-service/utils/token-manager.ts",
    debt: 7,
    severity: "Critical",
  },
];

const QUALITY_METRICS = [
  { label: "Test Coverage", value: "72%", bar: 72, color: "bg-amber-400" },
  { label: "Code Duplication", value: "8.4%", bar: 8, color: "bg-red-400" },
  {
    label: "Dependency Freshness",
    value: "64%",
    bar: 64,
    color: "bg-amber-400",
  },
  {
    label: "Documentation Coverage",
    value: "41%",
    bar: 41,
    color: "bg-red-400",
  },
];

const WEEKLY_TREND = [
  { week: "W9", score: 61 },
  { week: "W10", score: 63 },
  { week: "W11", score: 60 },
  { week: "W12", score: 64 },
  { week: "W13", score: 62 },
  { week: "W14", score: 66 },
];

function trendArrow(trend: string): string {
  if (trend === "up") return "↑";
  if (trend === "down") return "↓";
  return "→";
}

function trendColor(trend: string): string {
  if (trend === "up") return "text-emerald-500";
  if (trend === "down") return "text-red-500";
  return "text-neutral-400";
}

function severityDot(severity: string): string {
  if (severity === "Critical") return "bg-red-500";
  if (severity === "High") return "bg-orange-500";
  return "bg-yellow-500";
}

export function DMCodeHealth() {
  return (
    <DarkShell
      productName="DebtMap"
      accentColor="red"
      navItems={NAV_ITEMS}
      activeNav="Code Health"
      title="Code Health"
      subtitle="Service-level quality metrics"
      actions={
        <button className="rounded-md bg-red-600 px-3 py-1.5 text-xs font-medium text-white">
          Run scan
        </button>
      }
    >
      <div className="space-y-4">
        <div className="grid grid-cols-2 gap-3 lg:grid-cols-3">
          {SERVICES.map((svc) => (
            <div
              key={svc.name}
              className="rounded-lg bg-white p-4 ring-1 ring-neutral-200"
            >
              <div className="flex items-start justify-between">
                <div>
                  <p className="font-mono text-xs text-neutral-900">
                    {svc.name}
                  </p>
                  <p className="mt-0.5 font-mono text-[10px] tabular-nums text-neutral-400">
                    {svc.debt} debt items
                  </p>
                </div>
                <div className="flex items-center gap-1.5">
                  <span
                    className={`flex h-10 w-10 items-center justify-center rounded-full font-bold ${svc.gradeBg} ${svc.gradeColor}`}
                  >
                    {svc.grade}
                  </span>
                  <span
                    className={`font-mono text-xs font-medium ${trendColor(svc.trend)}`}
                  >
                    {trendArrow(svc.trend)}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="grid gap-4 lg:grid-cols-2">
          <div className="rounded-lg bg-white p-4 ring-1 ring-neutral-200">
            <h2 className="text-xs font-semibold text-neutral-800">Hotspots</h2>
            <div className="mt-3 space-y-1.5">
              {HOTSPOTS.map((h, i) => (
                <div
                  key={h.path}
                  className="flex items-center gap-3 rounded-lg bg-neutral-50 px-3 py-2.5"
                >
                  <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-red-100 font-mono text-[10px] font-bold text-red-700">
                    {i + 1}
                  </span>
                  <div className="min-w-0 flex-1">
                    <p className="truncate font-mono text-xs text-neutral-900">
                      {h.path}
                    </p>
                    <p className="font-mono text-[10px] tabular-nums text-neutral-400">
                      {h.debt} items
                    </p>
                  </div>
                  <span
                    className={`h-2 w-2 shrink-0 rounded-full ${severityDot(h.severity)}`}
                  />
                </div>
              ))}
            </div>
          </div>

          <div className="space-y-4">
            <div className="rounded-lg bg-white p-4 ring-1 ring-neutral-200">
              <h2 className="text-xs font-semibold text-neutral-800">
                Quality Metrics
              </h2>
              <div className="mt-3 space-y-3">
                {QUALITY_METRICS.map((m) => (
                  <div key={m.label}>
                    <div className="flex items-center justify-between">
                      <span className="text-xs text-neutral-500">
                        {m.label}
                      </span>
                      <span className="font-mono text-xs font-semibold tabular-nums text-neutral-900">
                        {m.value}
                      </span>
                    </div>
                    <div className="mt-1.5 flex h-1.5 gap-px overflow-hidden rounded">
                      <div className={m.color} style={{ width: `${m.bar}%` }} />
                      <div className="flex-1 bg-neutral-100" />
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="rounded-lg bg-white p-4 ring-1 ring-neutral-200">
              <h2 className="text-xs font-semibold text-neutral-800">
                Health Score Trend
              </h2>
              <div className="mt-3 flex items-end gap-2">
                {WEEKLY_TREND.map((w) => (
                  <div
                    key={w.week}
                    className="flex flex-1 flex-col items-center gap-1"
                  >
                    <div
                      className="w-full rounded-t bg-red-200"
                      style={{ height: `${w.score * 1.2}px` }}
                    />
                    <span className="text-[10px] text-neutral-400">
                      {w.week}
                    </span>
                    <span className="font-mono text-[10px] font-medium tabular-nums text-neutral-600">
                      {w.score}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </DarkShell>
  );
}
