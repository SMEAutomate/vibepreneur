import { AppShell } from "../AppShell";

const deals = [
  {
    company: "TechCorp",
    size: "142 employees",
    outcome: "Won",
    value: "$149/mo",
    reason: "Fast setup, compliance tracking sealed the deal",
    channel: "LinkedIn DM",
    cycle: "12 days",
  },
  {
    company: "ScaleUp Inc",
    size: "89 employees",
    outcome: "Won",
    value: "$49/mo",
    reason: "Audit checklist converted to demo, loved the portal",
    channel: "Lead magnet",
    cycle: "8 days",
  },
  {
    company: "DataFlow",
    size: "112 employees",
    outcome: "Won",
    value: "$149/mo",
    reason: "Needed compliance audit trail before Q3 review",
    channel: "Cold email",
    cycle: "21 days",
  },
  {
    company: "CloudBase",
    size: "67 employees",
    outcome: "Lost",
    value: "—",
    reason: "Chose Rippling — wanted all-in-one HR platform",
    channel: "Referral",
    cycle: "30 days",
  },
  {
    company: "GrowthCo",
    size: "45 employees",
    outcome: "Lost",
    value: "—",
    reason: "Too small — decided to keep manual process for now",
    channel: "Website",
    cycle: "14 days",
  },
  {
    company: "InnovateLab",
    size: "178 employees",
    outcome: "Lost",
    value: "—",
    reason: "Budget frozen — interested but timing wrong",
    channel: "LinkedIn DM",
    cycle: "45 days",
  },
];

export function WinLossAnalysis() {
  return (
    <AppShell
      activeNav="Growth"
      title="Win/Loss Analysis"
      subtitle="OnboardFlow — Learn from every outcome"
      actions={
        <button className="rounded-lg bg-brand-600 px-4 py-2 text-xs font-medium text-white">
          Log deal
        </button>
      }
    >
      <div className="grid gap-4 md:grid-cols-4">
        {[
          { label: "Won", value: "3", color: "text-emerald-600" },
          { label: "Lost", value: "3", color: "text-red-500" },
          { label: "Win rate", value: "50%", color: "text-neutral-900" },
          { label: "Avg cycle", value: "22 days", color: "text-neutral-900" },
        ].map((m) => (
          <div
            key={m.label}
            className="rounded-2xl border border-neutral-200 bg-white p-5"
          >
            <p className="text-xs text-neutral-500">{m.label}</p>
            <p className={`mt-2 text-2xl font-bold ${m.color}`}>{m.value}</p>
          </div>
        ))}
      </div>

      <div className="mt-8 space-y-3">
        {deals.map((d) => (
          <div
            key={d.company}
            className={`rounded-2xl border bg-white p-5 ${d.outcome === "Won" ? "border-emerald-200" : "border-neutral-200"}`}
          >
            <div className="flex items-start justify-between gap-4">
              <div className="flex-1">
                <div className="flex items-center gap-2">
                  <span
                    className={`rounded-full px-2.5 py-0.5 text-[10px] font-medium ${d.outcome === "Won" ? "bg-emerald-50 text-emerald-700" : "bg-red-50 text-red-600"}`}
                  >
                    {d.outcome}
                  </span>
                  <span className="rounded-full bg-neutral-100 px-2 py-0.5 text-[10px] text-neutral-500">
                    via {d.channel}
                  </span>
                </div>
                <p className="mt-2 text-sm font-medium text-neutral-900">
                  {d.company}
                </p>
                <p className="text-[10px] text-neutral-500">{d.size}</p>
              </div>
              <div className="text-right">
                <p className="text-sm font-bold text-neutral-900">{d.value}</p>
                <p className="text-[10px] text-neutral-400">Cycle: {d.cycle}</p>
              </div>
            </div>
            <div className="mt-3 rounded-lg bg-neutral-50 p-3">
              <p className="text-xs text-neutral-600">{d.reason}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-6 grid gap-6 md:grid-cols-2">
        <div className="rounded-2xl border border-emerald-200 bg-emerald-50/30 p-6">
          <h3 className="text-sm font-semibold text-emerald-800">Why We Win</h3>
          <ul className="mt-3 space-y-2">
            {[
              "Fast setup (under 1 week)",
              "Compliance tracking is a differentiator",
              "Audit checklist creates trust before demo",
            ].map((r) => (
              <li
                key={r}
                className="flex items-start gap-2 text-xs text-emerald-700"
              >
                <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-emerald-400" />
                {r}
              </li>
            ))}
          </ul>
        </div>
        <div className="rounded-2xl border border-red-200 bg-red-50/30 p-6">
          <h3 className="text-sm font-semibold text-red-800">Why We Lose</h3>
          <ul className="mt-3 space-y-2">
            {[
              "Buyers wanting all-in-one HR suite (not our play)",
              "Companies too small for automation ROI",
              "Budget timing — not a product issue",
            ].map((r) => (
              <li
                key={r}
                className="flex items-start gap-2 text-xs text-red-700"
              >
                <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-red-400" />
                {r}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </AppShell>
  );
}
