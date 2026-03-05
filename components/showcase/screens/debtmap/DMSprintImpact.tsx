import { DarkShell } from "../../DarkShell";

const NAV_ITEMS = [
  { icon: "◆", label: "Dashboard" },
  { icon: "◎", label: "Debt Items" },
  { icon: "▣", label: "Code Health" },
  { icon: "◈", label: "Sprint Impact" },
  { icon: "⚙", label: "Settings" },
];

const KPIS = [
  {
    label: "Velocity Impact",
    value: "-18%",
    change: "vs baseline",
    positive: false,
  },
  {
    label: "Debt Items in Sprint",
    value: "8",
    change: "+2 from last",
    positive: false,
  },
  {
    label: "Remediation Planned",
    value: "24h",
    change: "of 80h total",
    positive: true,
  },
  {
    label: "Capacity Allocated",
    value: "30%",
    change: "target: 25%",
    positive: false,
  },
];

const SPRINT_DEBT_ITEMS = [
  {
    name: "Migrate legacy auth middleware",
    type: "Architecture",
    impact: 9,
    estimate: "8h",
  },
  {
    name: "Fix untyped billing webhook responses",
    type: "Code Quality",
    impact: 8,
    estimate: "4h",
  },
  {
    name: "Remove duplicate validation logic",
    type: "Code Quality",
    impact: 6,
    estimate: "3h",
  },
  {
    name: "Upgrade Redis client from v3 to v5",
    type: "Dependencies",
    impact: 7,
    estimate: "6h",
  },
  {
    name: "Add error boundaries to notification flow",
    type: "Architecture",
    impact: 5,
    estimate: "2h",
  },
  {
    name: "Backfill integration tests for auth-service",
    type: "Testing",
    impact: 7,
    estimate: "5h",
  },
  {
    name: "Replace deprecated Stripe SDK calls",
    type: "Dependencies",
    impact: 6,
    estimate: "3h",
  },
  {
    name: "Consolidate logging across microservices",
    type: "Architecture",
    impact: 4,
    estimate: "4h",
  },
];

const REMEDIATION_PLAN = [
  {
    description: "Replace legacy auth middleware with JWT-based flow",
    effort: "8h",
    velocityGain: "+7%",
  },
  {
    description: "Upgrade Redis client and fix connection pooling",
    effort: "6h",
    velocityGain: "+5%",
  },
  {
    description: "Backfill auth-service integration test suite",
    effort: "5h",
    velocityGain: "+3%",
  },
];

const DEBT_RATIO = [
  { sprint: "Sprint 11", debt: 18, feature: 82 },
  { sprint: "Sprint 12", debt: 22, feature: 78 },
  { sprint: "Sprint 13", debt: 25, feature: 75 },
  { sprint: "Sprint 14", debt: 30, feature: 70 },
];

function typeColor(type: string): string {
  if (type === "Architecture") return "bg-red-500";
  if (type === "Code Quality") return "bg-amber-500";
  if (type === "Testing") return "bg-blue-500";
  return "bg-violet-500";
}

export function DMSprintImpact() {
  return (
    <DarkShell
      productName="DebtMap"
      accentColor="red"
      navItems={NAV_ITEMS}
      activeNav="Sprint Impact"
      title="Sprint Impact"
      subtitle="Sprint 14 debt analysis"
      actions={
        <button className="rounded-md bg-red-600 px-3 py-1.5 text-xs font-medium text-white">
          Plan remediation
        </button>
      }
    >
      <div className="space-y-4">
        <div className="grid grid-cols-2 gap-3 lg:grid-cols-4">
          {KPIS.map((kpi) => (
            <div
              key={kpi.label}
              className="rounded-lg bg-white p-4 ring-1 ring-neutral-200"
            >
              <p className="text-[10px] uppercase tracking-wider text-neutral-400">
                {kpi.label}
              </p>
              <p className="mt-1 font-mono text-2xl font-bold tabular-nums text-neutral-900">
                {kpi.value}
              </p>
              <p
                className={`mt-1 font-mono text-xs tabular-nums ${kpi.positive ? "text-emerald-600" : "text-red-500"}`}
              >
                {kpi.change}
              </p>
            </div>
          ))}
        </div>

        <div className="rounded-lg bg-white p-4 ring-1 ring-neutral-200">
          <h2 className="text-xs font-semibold text-neutral-800">
            Sprint Debt Items
          </h2>
          <div className="mt-3 overflow-x-auto">
            <table className="w-full text-left text-xs">
              <thead>
                <tr className="border-b border-neutral-200">
                  {["Item", "Type", "Impact", "Estimate"].map((h) => (
                    <th
                      key={h}
                      className="pb-2 pr-4 text-[10px] font-semibold uppercase tracking-wider text-neutral-500"
                    >
                      {h}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {SPRINT_DEBT_ITEMS.map((item) => (
                  <tr
                    key={item.name}
                    className="border-b border-neutral-100 last:border-0"
                  >
                    <td className="py-2.5 pr-4 font-medium text-neutral-800">
                      {item.name}
                    </td>
                    <td className="py-2.5 pr-4">
                      <div className="flex items-center gap-1.5">
                        <span
                          className={`h-2 w-2 rounded-full ${typeColor(item.type)}`}
                        />
                        <span className="text-neutral-600">{item.type}</span>
                      </div>
                    </td>
                    <td className="py-2.5 pr-4">
                      <div className="flex items-center gap-1">
                        <div className="flex gap-px">
                          {Array.from({ length: 10 }).map((_, i) => (
                            <div
                              key={i}
                              className={`h-3 w-1.5 rounded-sm ${i < item.impact ? "bg-red-400" : "bg-neutral-100"}`}
                            />
                          ))}
                        </div>
                        <span className="font-mono text-[10px] tabular-nums text-neutral-500">
                          {item.impact}
                        </span>
                      </div>
                    </td>
                    <td className="py-2.5 pr-4 font-mono tabular-nums text-neutral-600">
                      {item.estimate}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        <div className="grid gap-4 lg:grid-cols-2">
          <div className="rounded-lg bg-white p-4 ring-1 ring-neutral-200">
            <h2 className="text-xs font-semibold text-neutral-800">
              Remediation Plan
            </h2>
            <div className="mt-3 space-y-2">
              {REMEDIATION_PLAN.map((r, i) => (
                <div
                  key={r.description}
                  className="rounded-lg bg-neutral-50 p-3"
                >
                  <div className="flex items-start gap-3">
                    <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-red-100 font-mono text-[10px] font-bold text-red-700">
                      {i + 1}
                    </span>
                    <div className="flex-1">
                      <p className="text-xs font-medium text-neutral-900">
                        {r.description}
                      </p>
                      <div className="mt-2 flex gap-4">
                        <span className="font-mono text-[10px] tabular-nums text-neutral-400">
                          effort:{" "}
                          <span className="font-medium text-neutral-600">
                            {r.effort}
                          </span>
                        </span>
                        <span className="font-mono text-[10px] tabular-nums text-neutral-400">
                          gain:{" "}
                          <span className="font-medium text-emerald-600">
                            {r.velocityGain}
                          </span>
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-lg bg-white p-4 ring-1 ring-neutral-200">
            <h2 className="text-xs font-semibold text-neutral-800">
              Debt vs Feature Ratio
            </h2>
            <div className="mt-3 space-y-2.5">
              {DEBT_RATIO.map((s) => (
                <div key={s.sprint}>
                  <div className="flex items-center justify-between">
                    <span className="font-mono text-xs text-neutral-600">
                      {s.sprint}
                    </span>
                    <span className="font-mono text-[10px] tabular-nums text-neutral-400">
                      {s.debt}% / {s.feature}%
                    </span>
                  </div>
                  <div className="mt-1.5 flex h-3 gap-px overflow-hidden rounded">
                    <div
                      className="bg-red-400"
                      style={{ width: `${s.debt}%` }}
                    />
                    <div
                      className="bg-emerald-400"
                      style={{ width: `${s.feature}%` }}
                    />
                  </div>
                </div>
              ))}
              <div className="mt-2 flex gap-4">
                <div className="flex items-center gap-1.5">
                  <span className="h-2 w-2 rounded-full bg-red-400" />
                  <span className="text-[10px] text-neutral-500">
                    Debt work
                  </span>
                </div>
                <div className="flex items-center gap-1.5">
                  <span className="h-2 w-2 rounded-full bg-emerald-400" />
                  <span className="text-[10px] text-neutral-500">
                    Feature work
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </DarkShell>
  );
}
