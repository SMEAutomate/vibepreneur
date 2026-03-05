import { CompactShell } from "../../CompactShell";

const NAV_ITEMS = [
  { icon: "◆", label: "Dashboard" },
  { icon: "◎", label: "Approvals" },
  { icon: "▣", label: "Budgets" },
  { icon: "◈", label: "Reports" },
  { icon: "⚙", label: "Settings" },
];

const KPIS = [
  {
    label: "Total Spend",
    value: "$1.24M",
    change: "YTD through March",
    positive: true,
  },
  {
    label: "vs Budget",
    value: "-$82K",
    change: "Under budget",
    positive: true,
  },
  {
    label: "Pending Approvals",
    value: "14",
    change: "5 high priority",
    positive: false,
  },
  {
    label: "Anomalies Detected",
    value: "3",
    change: "Requires review",
    positive: false,
  },
];

const CATEGORIES = [
  { name: "Personnel", amount: "$520K", pct: 42, color: "bg-amber-500" },
  { name: "Software", amount: "$340K", pct: 27, color: "bg-amber-400" },
  { name: "Marketing", amount: "$180K", pct: 15, color: "bg-amber-300" },
  { name: "Operations", amount: "$120K", pct: 10, color: "bg-amber-200" },
  { name: "Travel", amount: "$80K", pct: 6, color: "bg-amber-100" },
];

const MONTHLY_SPEND = [
  { month: "Oct", amount: 185 },
  { month: "Nov", amount: 198 },
  { month: "Dec", amount: 210 },
  { month: "Jan", amount: 215 },
  { month: "Feb", amount: 208 },
  { month: "Mar", amount: 224 },
];

const MAX_SPEND = 224;

const ANOMALIES = [
  {
    description: "Unusual AWS spike in Engineering",
    amount: "$14.2K",
    severity: "High",
  },
  {
    description: "Duplicate vendor payment to Acme Corp",
    amount: "$8.7K",
    severity: "Medium",
  },
  {
    description: "Travel expense exceeds policy limit",
    amount: "$3.1K",
    severity: "Low",
  },
];

function severityBadge(severity: string): string {
  if (severity === "High") return "bg-red-50 text-red-700";
  if (severity === "Medium") return "bg-amber-50 text-amber-700";
  return "bg-neutral-100 text-neutral-600";
}

export function SLSpendDashboard() {
  return (
    <CompactShell
      productName="SpendLens"
      accentColor="amber"
      navItems={NAV_ITEMS}
      activeNav="Dashboard"
      title="Spend Dashboard"
      subtitle="March 2026"
      breadcrumb={["SpendLens", "Dashboard"]}
      actions={
        <button className="rounded-md bg-amber-600 px-3 py-1.5 text-xs font-medium text-white">
          Export report
        </button>
      }
    >
      <div className="space-y-5">
        <div className="grid grid-cols-2 gap-3 lg:grid-cols-4">
          {KPIS.map((kpi) => (
            <div
              key={kpi.label}
              className="rounded-md border border-t-2 border-neutral-200 border-t-amber-400 bg-white p-4"
            >
              <p className="text-[10px] uppercase tracking-wider text-neutral-500">
                {kpi.label}
              </p>
              <p className="mt-1 font-mono text-lg font-semibold tabular-nums text-neutral-900">
                {kpi.value}
              </p>
              <p
                className={`mt-1 text-[10px] font-medium ${
                  kpi.positive ? "text-emerald-600" : "text-amber-600"
                }`}
              >
                {kpi.change}
              </p>
            </div>
          ))}
        </div>

        <div className="grid gap-5 lg:grid-cols-3">
          <div className="rounded-md border border-neutral-200 bg-white p-4 lg:col-span-1">
            <h2 className="text-xs font-semibold uppercase tracking-wider text-neutral-700">
              Spend by Category
            </h2>
            <div className="mt-3 space-y-3">
              {CATEGORIES.map((cat) => (
                <div key={cat.name}>
                  <div className="flex items-center justify-between text-xs">
                    <span className="font-medium text-neutral-700">
                      {cat.name}
                    </span>
                    <span className="font-mono text-sm font-semibold tabular-nums text-neutral-800">
                      {cat.amount}
                    </span>
                  </div>
                  <div className="mt-1 h-1.5 w-full rounded-sm bg-neutral-100">
                    <div
                      className={`h-1.5 rounded-sm ${cat.color}`}
                      style={{ width: `${cat.pct}%` }}
                    />
                  </div>
                  <p className="mt-0.5 text-[10px] text-neutral-400">
                    {cat.pct}% of total
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-md border border-neutral-200 bg-white p-4 lg:col-span-2">
            <h2 className="text-xs font-semibold uppercase tracking-wider text-neutral-700">
              Monthly Spend Trend
            </h2>
            <div className="mt-5 flex items-end gap-3">
              {MONTHLY_SPEND.map((m) => (
                <div
                  key={m.month}
                  className="flex flex-1 flex-col items-center"
                >
                  <span className="font-mono text-[10px] font-semibold tabular-nums text-amber-700">
                    ${m.amount}K
                  </span>
                  <div
                    className="mt-1 w-full rounded-sm bg-amber-500"
                    style={{ height: `${(m.amount / MAX_SPEND) * 140}px` }}
                  />
                  <span className="mt-2 text-[10px] text-neutral-500">
                    {m.month}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="rounded-md border border-neutral-200 bg-white">
          <div className="bg-neutral-50 px-4 py-2">
            <h2 className="text-[10px] font-semibold uppercase tracking-wider text-neutral-600">
              Recent Anomalies
            </h2>
          </div>
          <div className="divide-y divide-neutral-100">
            {ANOMALIES.map((a) => (
              <div
                key={a.description}
                className={`flex items-center justify-between px-4 py-3 ${
                  a.severity === "High"
                    ? "border-l-2 border-l-red-400"
                    : a.severity === "Medium"
                      ? "border-l-2 border-l-amber-500"
                      : ""
                }`}
              >
                <div className="flex items-center gap-3">
                  <span
                    className={`rounded px-1.5 py-0.5 text-[10px] font-medium ${severityBadge(a.severity)}`}
                  >
                    {a.severity}
                  </span>
                  <span className="text-xs text-neutral-700">
                    {a.description}
                  </span>
                </div>
                <span className="font-mono text-sm font-semibold tabular-nums text-neutral-900">
                  {a.amount}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </CompactShell>
  );
}
