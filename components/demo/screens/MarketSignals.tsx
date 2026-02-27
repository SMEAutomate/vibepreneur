import { AppShell } from "../AppShell";

const signals = [
  {
    type: "Search trend",
    signal: '"onboarding automation" searches up 34% QoQ',
    source: "Google Trends",
    strength: "strong",
    time: "2h ago",
  },
  {
    type: "Hiring signal",
    signal: '12 mid-market companies hiring "People Operations Manager"',
    source: "LinkedIn Jobs",
    strength: "strong",
    time: "6h ago",
  },
  {
    type: "Funding signal",
    signal: "HR tech sector raised $2.1B in Q1 2026",
    source: "Crunchbase",
    strength: "moderate",
    time: "1d ago",
  },
  {
    type: "Complaint pattern",
    signal: '"onboarding is broken" appearing in 8 Reddit threads this week',
    source: "Reddit / r/humanresources",
    strength: "strong",
    time: "1d ago",
  },
  {
    type: "Regulation",
    signal: "New EU onboarding compliance requirements effective Q3 2026",
    source: "EU Commission",
    strength: "moderate",
    time: "3d ago",
  },
  {
    type: "Search trend",
    signal: '"employee onboarding checklist template" volume: 14,800/mo',
    source: "Keyword data",
    strength: "moderate",
    time: "5d ago",
  },
];

const strengthColors: Record<string, string> = {
  strong: "bg-emerald-50 text-emerald-700",
  moderate: "bg-amber-50 text-amber-700",
  weak: "bg-neutral-100 text-neutral-500",
};

export function MarketSignals() {
  return (
    <AppShell
      activeNav="Insights"
      title="Market Signals"
      subtitle="OnboardFlow. Real-time demand intelligence"
      actions={
        <button className="rounded-lg bg-brand-600 px-4 py-2 text-xs font-medium text-white">
          Set alerts
        </button>
      }
    >
      <div className="grid gap-4 md:grid-cols-3">
        {[
          { label: "Active signals", value: "24", change: "+6 this week" },
          { label: "Strong signals", value: "14", change: "58% of total" },
          {
            label: "Signal score",
            value: "82",
            change: "Up from 71 last month",
          },
        ].map((m) => (
          <div
            key={m.label}
            className="rounded-2xl border border-neutral-200 bg-white p-5"
          >
            <p className="text-xs text-neutral-500">{m.label}</p>
            <p className="mt-2 text-2xl font-bold text-neutral-900">
              {m.value}
            </p>
            <p className="mt-1 text-[10px] text-neutral-400">{m.change}</p>
          </div>
        ))}
      </div>

      <div className="mt-8 rounded-2xl border border-neutral-200 bg-white p-6">
        <div className="flex items-center justify-between">
          <h2 className="text-sm font-semibold text-neutral-900">
            Signal Feed
          </h2>
          <div className="flex gap-1.5">
            {["All", "Search", "Hiring", "Funding", "Complaints"].map((f) => (
              <button
                key={f}
                className={`rounded-full px-3 py-1 text-[10px] font-medium ${f === "All" ? "bg-brand-600 text-white" : "bg-neutral-100 text-neutral-600"}`}
              >
                {f}
              </button>
            ))}
          </div>
        </div>
        <div className="mt-4 space-y-3">
          {signals.map((s) => (
            <div
              key={s.signal}
              className="flex items-start gap-4 rounded-lg border border-neutral-100 p-4"
            >
              <div className="flex-1">
                <div className="flex items-center gap-2">
                  <span className="rounded-full bg-neutral-100 px-2 py-0.5 text-[10px] font-medium text-neutral-600">
                    {s.type}
                  </span>
                  <span
                    className={`rounded-full px-2 py-0.5 text-[10px] font-medium ${strengthColors[s.strength]}`}
                  >
                    {s.strength}
                  </span>
                </div>
                <p className="mt-2 text-sm text-neutral-800">{s.signal}</p>
                <p className="mt-1 text-[10px] text-neutral-400">
                  via {s.source} · {s.time}
                </p>
              </div>
              <button className="shrink-0 rounded-md border border-neutral-200 px-2 py-1 text-[10px] font-medium text-neutral-600">
                Explore
              </button>
            </div>
          ))}
        </div>
      </div>
    </AppShell>
  );
}
