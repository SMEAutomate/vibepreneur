import { DarkShell } from "../../DarkShell";

const NAV_ITEMS = [
  { icon: "◆", label: "Dashboard" },
  { icon: "◎", label: "Debt Items" },
  { icon: "▣", label: "Code Health" },
  { icon: "◈", label: "Sprint Impact" },
  { icon: "⚙", label: "Settings" },
];

const KPIS = [
  { label: "Total Debt Items", value: "184", change: "+12", positive: false },
  { label: "Critical", value: "12", change: "+3", positive: false },
  { label: "Avg Age", value: "47d", change: "+4d", positive: false },
  { label: "Est. Remediation", value: "320h", change: "-18h", positive: true },
];

const SEVERITY_BREAKDOWN = [
  { level: "Critical", count: 12, color: "bg-red-500", width: "6%" },
  { level: "High", count: 34, color: "bg-orange-500", width: "18%" },
  { level: "Medium", count: 78, color: "bg-yellow-500", width: "42%" },
  { level: "Low", count: 60, color: "bg-green-500", width: "33%" },
];

const SERVICES = [
  { name: "auth-service", debt: 38, severity: "Critical", trend: "up" },
  { name: "billing-api", debt: 31, severity: "High", trend: "up" },
  { name: "user-gateway", debt: 28, severity: "High", trend: "stable" },
  { name: "notification-svc", debt: 24, severity: "Medium", trend: "down" },
  { name: "analytics-engine", debt: 19, severity: "Medium", trend: "stable" },
  { name: "search-indexer", debt: 14, severity: "Low", trend: "down" },
];

const RECENT_ADDITIONS = [
  {
    title: "Deprecated auth middleware still in use",
    service: "auth-service",
    severity: "Critical",
    date: "Mar 4",
  },
  {
    title: "Untyped API response in billing webhook",
    service: "billing-api",
    severity: "High",
    date: "Mar 3",
  },
  {
    title: "Duplicate validation logic across 4 endpoints",
    service: "user-gateway",
    severity: "Medium",
    date: "Mar 3",
  },
  {
    title: "Outdated Redis client (v3) blocking upgrade",
    service: "analytics-engine",
    severity: "High",
    date: "Mar 2",
  },
  {
    title: "Missing error boundaries in notification flow",
    service: "notification-svc",
    severity: "Medium",
    date: "Mar 1",
  },
];

function severityDot(severity: string): string {
  if (severity === "Critical") return "bg-red-500";
  if (severity === "High") return "bg-orange-500";
  if (severity === "Medium") return "bg-yellow-500";
  return "bg-green-500";
}

function trendIcon(trend: string): string {
  if (trend === "up") return "↑";
  if (trend === "down") return "↓";
  return "→";
}

function trendColor(trend: string): string {
  if (trend === "up") return "text-red-500";
  if (trend === "down") return "text-emerald-500";
  return "text-neutral-400";
}

export function DMDebtDashboard() {
  return (
    <DarkShell
      productName="DebtMap"
      accentColor="red"
      navItems={NAV_ITEMS}
      activeNav="Dashboard"
      title="Debt Dashboard"
      subtitle="Engineering health overview"
      actions={
        <button className="rounded-md bg-red-600 px-3 py-1.5 text-xs font-medium text-white">
          Export report
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
                {kpi.change} vs last sprint
              </p>
            </div>
          ))}
        </div>

        <div className="rounded-lg bg-white p-4 ring-1 ring-neutral-200">
          <h2 className="text-xs font-semibold text-neutral-800">
            Severity Breakdown
          </h2>
          <div className="mt-3 flex h-5 gap-0.5 overflow-hidden rounded">
            {SEVERITY_BREAKDOWN.map((s) => (
              <div
                key={s.level}
                className={s.color}
                style={{ width: s.width }}
              />
            ))}
          </div>
          <div className="mt-3 flex gap-4">
            {SEVERITY_BREAKDOWN.map((s) => (
              <div key={s.level} className="flex items-center gap-1.5">
                <span className={`h-2 w-2 rounded-full ${s.color}`} />
                <span className="font-mono text-xs tabular-nums text-neutral-500">
                  {s.level} ({s.count})
                </span>
              </div>
            ))}
          </div>
        </div>

        <div className="rounded-lg bg-white p-4 ring-1 ring-neutral-200">
          <h2 className="text-xs font-semibold text-neutral-800">
            Service Impact
          </h2>
          <div className="mt-3 space-y-1.5">
            {SERVICES.map((svc) => (
              <div
                key={svc.name}
                className="flex items-center gap-3 rounded-lg bg-neutral-50 px-3 py-2.5"
              >
                <span
                  className={`h-2 w-2 shrink-0 rounded-full ${severityDot(svc.severity)}`}
                />
                <span className="w-36 shrink-0 font-mono text-xs text-neutral-900">
                  {svc.name}
                </span>
                <span className="font-mono text-xs tabular-nums text-neutral-600">
                  {svc.debt} items
                </span>
                <span
                  className={`ml-auto font-mono text-xs font-medium ${trendColor(svc.trend)}`}
                >
                  {trendIcon(svc.trend)}
                </span>
              </div>
            ))}
          </div>
        </div>

        <div className="rounded-lg bg-white p-4 ring-1 ring-neutral-200">
          <h2 className="text-xs font-semibold text-neutral-800">
            Recent Additions
          </h2>
          <div className="mt-3 space-y-1.5">
            {RECENT_ADDITIONS.map((item) => (
              <div
                key={item.title}
                className="flex items-center gap-3 border-b border-neutral-100 py-2.5 last:border-0"
              >
                <span
                  className={`h-2 w-2 shrink-0 rounded-full ${severityDot(item.severity)}`}
                />
                <div className="min-w-0 flex-1">
                  <p className="text-xs font-medium text-neutral-900">
                    {item.title}
                  </p>
                  <p className="mt-0.5 font-mono text-[10px] text-neutral-400">
                    {item.service}
                  </p>
                </div>
                <span className="shrink-0 font-mono text-xs tabular-nums text-neutral-400">
                  {item.date}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </DarkShell>
  );
}
