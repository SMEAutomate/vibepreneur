import { AppShell } from "../AppShell";

const competitors = [
  {
    name: "BambooHR",
    type: "HRIS with onboarding add-on",
    strengths: ["Strong brand recognition", "All-in-one HR suite"],
    weaknesses: ["Onboarding is an afterthought", "Rigid workflows"],
    threat: "Medium",
    pricing: "$8–25/employee/mo",
  },
  {
    name: "Rippling",
    type: "IT + HR platform",
    strengths: ["Deep IT automation", "Modern UX"],
    weaknesses: ["Over-engineered for mid-market", "Expensive"],
    threat: "High",
    pricing: "$8–35/employee/mo",
  },
  {
    name: "Enboarder",
    type: "Experience-focused onboarding",
    strengths: ["Strong engagement features", "Good templates"],
    weaknesses: ["Enterprise-only pricing", "No mid-market tier"],
    threat: "Low",
    pricing: "Custom (enterprise)",
  },
  {
    name: "Manual process",
    type: "Spreadsheets + email + Slack",
    strengths: ["Free", "Familiar"],
    weaknesses: ["Error-prone", "Unscalable", "No audit trail"],
    threat: "High",
    pricing: "$0 (hidden costs: 12+ hrs/week)",
  },
];

const threatColors: Record<string, string> = {
  High: "bg-red-50 text-red-700",
  Medium: "bg-amber-50 text-amber-700",
  Low: "bg-emerald-50 text-emerald-700",
};

export function CompetitorRadar() {
  return (
    <AppShell
      activeNav="Insights"
      title="Competitor Radar"
      subtitle="OnboardFlow. Know your landscape"
      actions={
        <button className="rounded-lg bg-brand-600 px-4 py-2 text-xs font-medium text-white">
          Add competitor
        </button>
      }
    >
      <div className="grid gap-4 lg:grid-cols-2">
        {competitors.map((c) => (
          <div
            key={c.name}
            className="rounded-2xl border border-neutral-200 bg-white p-6"
          >
            <div className="flex items-start justify-between">
              <div>
                <h3 className="text-sm font-semibold text-neutral-900">
                  {c.name}
                </h3>
                <p className="mt-0.5 text-xs text-neutral-500">{c.type}</p>
              </div>
              <span
                className={`rounded-full px-2.5 py-0.5 text-[10px] font-medium ${threatColors[c.threat]}`}
              >
                {c.threat} threat
              </span>
            </div>

            <div className="mt-4 grid grid-cols-2 gap-4">
              <div>
                <p className="text-[10px] font-medium uppercase tracking-wider text-emerald-600">
                  Strengths
                </p>
                <ul className="mt-2 space-y-1">
                  {c.strengths.map((s) => (
                    <li
                      key={s}
                      className="flex items-start gap-1.5 text-xs text-neutral-600"
                    >
                      <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-emerald-400" />
                      {s}
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <p className="text-[10px] font-medium uppercase tracking-wider text-red-500">
                  Weaknesses
                </p>
                <ul className="mt-2 space-y-1">
                  {c.weaknesses.map((w) => (
                    <li
                      key={w}
                      className="flex items-start gap-1.5 text-xs text-neutral-600"
                    >
                      <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-red-400" />
                      {w}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="mt-4 flex items-center justify-between border-t border-neutral-100 pt-3">
              <span className="text-[10px] text-neutral-400">
                Pricing: {c.pricing}
              </span>
              <button className="rounded-md border border-neutral-200 px-2 py-1 text-[10px] font-medium text-neutral-600">
                Deep dive
              </button>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-6 rounded-2xl border border-brand-100 bg-brand-50/30 p-6">
        <h2 className="text-sm font-semibold text-brand-800">
          Your Competitive Edge
        </h2>
        <div className="mt-3 grid gap-3 md:grid-cols-3">
          {[
            "Purpose-built for mid-market (50–200 employees)",
            "Works with existing tools, not instead of them",
            "Visible ROI from day one. no 6-month rollout",
          ].map((edge, i) => (
            <div
              key={edge}
              className="flex items-start gap-2 rounded-lg bg-white p-3"
            >
              <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded bg-brand-100 text-[10px] font-bold text-brand-700">
                {i + 1}
              </span>
              <p className="text-xs text-brand-700">{edge}</p>
            </div>
          ))}
        </div>
      </div>
    </AppShell>
  );
}
