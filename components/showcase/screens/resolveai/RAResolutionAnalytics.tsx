import { SoftShell } from "../../SoftShell";

const NAV_ITEMS = [
  { icon: "◆", label: "Tickets" },
  { icon: "◎", label: "Analytics" },
  { icon: "▣", label: "Knowledge Base" },
  { icon: "◈", label: "Routing" },
  { icon: "⚙", label: "Settings" },
];

const KPIS = [
  { label: "First Response", value: "4.2 min", change: "-18%", positive: true },
  {
    label: "Resolution Time",
    value: "2.4 hrs",
    change: "-22%",
    positive: true,
  },
  { label: "CSAT", value: "4.6/5", change: "+0.3", positive: true },
  {
    label: "First Contact Resolution",
    value: "68%",
    change: "+5%",
    positive: true,
  },
];

const AGENTS = [
  {
    name: "Mia Chen",
    initials: "MC",
    resolved: 342,
    avgTime: "1.8 hrs",
    csat: 4.8,
    fcr: "74%",
  },
  {
    name: "James Park",
    initials: "JP",
    resolved: 298,
    avgTime: "2.1 hrs",
    csat: 4.7,
    fcr: "71%",
  },
  {
    name: "Priya Nair",
    initials: "PN",
    resolved: 276,
    avgTime: "2.4 hrs",
    csat: 4.6,
    fcr: "68%",
  },
  {
    name: "Omar Diaz",
    initials: "OD",
    resolved: 254,
    avgTime: "2.6 hrs",
    csat: 4.5,
    fcr: "65%",
  },
  {
    name: "Sophie Kim",
    initials: "SK",
    resolved: 231,
    avgTime: "2.9 hrs",
    csat: 4.4,
    fcr: "62%",
  },
  {
    name: "Luca Rossi",
    initials: "LR",
    resolved: 218,
    avgTime: "3.1 hrs",
    csat: 4.3,
    fcr: "59%",
  },
];

const CSAT_TREND = [
  { week: "W1", value: 4.2 },
  { week: "W2", value: 4.3 },
  { week: "W3", value: 4.4 },
  { week: "W4", value: 4.5 },
  { week: "W5", value: 4.5 },
  { week: "W6", value: 4.6 },
];

const CATEGORIES = [
  { name: "Bug reports", pct: 34 },
  { name: "How-to questions", pct: 28 },
  { name: "Feature requests", pct: 18 },
  { name: "Account issues", pct: 12 },
  { name: "Billing", pct: 8 },
];

const MAX_CSAT = 5;

function starRating(value: number): string {
  const full = Math.floor(value);
  return "★".repeat(full) + "☆".repeat(5 - full);
}

export function RAResolutionAnalytics() {
  return (
    <SoftShell
      productName="ResolveAI"
      accentColor="sky"
      navItems={NAV_ITEMS}
      activeNav="Analytics"
      title="Resolution Analytics"
      subtitle="Last 30 days"
      actions={
        <button className="rounded-xl bg-sky-600 px-4 py-2 text-xs font-medium text-white">
          Export report
        </button>
      }
    >
      <div className="space-y-6">
        <div className="grid grid-cols-2 gap-4 lg:grid-cols-4">
          {KPIS.map((kpi) => (
            <div
              key={kpi.label}
              className="rounded-xl border border-sky-100 bg-white p-4"
            >
              <p className="text-xs text-sky-600/80">{kpi.label}</p>
              <p className="mt-1 text-2xl font-bold text-neutral-900">
                {kpi.value}
              </p>
              <p className="mt-1 text-xs font-medium text-emerald-600">
                {kpi.change} vs prior period
              </p>
            </div>
          ))}
        </div>

        <div className="rounded-xl border border-sky-100 bg-white p-4">
          <h2 className="text-sm font-semibold text-neutral-900">
            Agent Performance
          </h2>
          <div className="mt-4 space-y-2">
            {AGENTS.map((a) => (
              <div
                key={a.name}
                className="flex items-center gap-4 rounded-lg border border-sky-50 bg-white px-4 py-3 shadow-sm"
              >
                <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-sky-100 text-[8px] font-bold text-sky-700">
                  {a.initials}
                </div>
                <span className="w-28 shrink-0 text-sm font-medium text-neutral-800">
                  {a.name}
                </span>
                <div className="flex shrink-0 items-center gap-1">
                  <span className="text-xs text-neutral-500">Resolved:</span>
                  <span className="text-xs font-medium text-neutral-800">
                    {a.resolved}
                  </span>
                </div>
                <div className="flex shrink-0 items-center gap-1">
                  <span className="text-xs text-neutral-500">Avg:</span>
                  <span className="text-xs text-neutral-700">{a.avgTime}</span>
                </div>
                <div className="flex shrink-0 items-center gap-1">
                  <span className="text-2xl font-bold text-sky-600">
                    {a.csat}
                  </span>
                  <span className="text-[10px] text-amber-400">
                    {starRating(a.csat)}
                  </span>
                </div>
                <div className="flex shrink-0 items-center gap-1">
                  <span className="text-xs text-neutral-500">FCR:</span>
                  <span className="text-xs font-medium text-neutral-700">
                    {a.fcr}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="grid gap-6 lg:grid-cols-2">
          <div className="rounded-xl border border-sky-100 bg-white p-4">
            <h2 className="text-sm font-semibold text-neutral-900">
              CSAT Trend (6 Weeks)
            </h2>
            <div className="mt-6 flex items-end gap-3">
              {CSAT_TREND.map((w) => (
                <div key={w.week} className="flex flex-1 flex-col items-center">
                  <span className="text-xs font-bold text-sky-700">
                    {w.value}
                  </span>
                  <div
                    className="mt-1 w-full rounded-t-lg bg-gradient-to-t from-sky-500 to-sky-400"
                    style={{ height: `${(w.value / MAX_CSAT) * 120}px` }}
                  />
                  <span className="mt-2 text-[10px] text-neutral-500">
                    {w.week}
                  </span>
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-xl border border-sky-100 bg-white p-4">
            <h2 className="text-sm font-semibold text-neutral-900">
              Category Breakdown
            </h2>
            <div className="mt-4 space-y-4">
              {CATEGORIES.map((cat) => (
                <div key={cat.name}>
                  <div className="flex items-center justify-between text-xs">
                    <span className="font-medium text-neutral-700">
                      {cat.name}
                    </span>
                    <span className="text-neutral-500">{cat.pct}%</span>
                  </div>
                  <div className="mt-1.5 h-2 rounded-lg bg-sky-100">
                    <div
                      className="h-2 rounded-lg bg-sky-500"
                      style={{ width: `${cat.pct}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </SoftShell>
  );
}
