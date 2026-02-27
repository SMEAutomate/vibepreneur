import { AppShell } from "../AppShell";

const hypotheses = [
  {
    hypothesis: "VP People Ops will trade email for a free audit checklist",
    status: "validated",
    result: "42 downloads in first week, 18% conversion to demo call",
    decision: "Scale",
  },
  {
    hypothesis: "Cold LinkedIn DMs convert at 5%+ reply rate",
    status: "validated",
    result: "7.2% reply rate, 3 demo calls from 50 messages",
    decision: "Iterate",
  },
  {
    hypothesis: "HR communities are a high-intent distribution channel",
    status: "testing",
    result: "Posted in 3 communities, tracking engagement...",
    decision: "Pending",
  },
  {
    hypothesis: "Comparison blog post drives organic search traffic",
    status: "testing",
    result: "Published 5 days ago, monitoring impressions...",
    decision: "Pending",
  },
  {
    hypothesis: "Webinar co-hosted with HRIS vendor drives 50+ signups",
    status: "planned",
    result: "-",
    decision: "-",
  },
  {
    hypothesis: "Product Hunt launch generates 200+ waitlist signups",
    status: "planned",
    result: "-",
    decision: "-",
  },
];

const statusColors: Record<string, string> = {
  validated: "bg-emerald-50 text-emerald-700",
  testing: "bg-amber-50 text-amber-700",
  planned: "bg-neutral-100 text-neutral-500",
};

const decisionColors: Record<string, string> = {
  Scale: "bg-emerald-50 text-emerald-700",
  Iterate: "bg-brand-50 text-brand-700",
  Pivot: "bg-red-50 text-red-700",
  Pending: "bg-neutral-100 text-neutral-500",
  "-": "",
};

export function ValidationTracker() {
  return (
    <AppShell
      activeNav="Growth"
      title="Validation Tracker"
      subtitle="OnboardFlow. Hypotheses and results"
      actions={
        <button className="rounded-lg bg-brand-600 px-4 py-2 text-xs font-medium text-white">
          Add hypothesis
        </button>
      }
    >
      <div className="space-y-3">
        {hypotheses.map((h) => (
          <div
            key={h.hypothesis}
            className="rounded-2xl border border-neutral-200 bg-white p-5"
          >
            <div className="flex items-start justify-between gap-4">
              <div className="flex-1">
                <div className="flex items-center gap-2">
                  <span
                    className={`rounded-full px-2 py-0.5 text-[10px] font-medium ${statusColors[h.status]}`}
                  >
                    {h.status}
                  </span>
                  {h.decision !== "-" && (
                    <span
                      className={`rounded-full px-2 py-0.5 text-[10px] font-medium ${decisionColors[h.decision]}`}
                    >
                      {h.decision}
                    </span>
                  )}
                </div>
                <p className="mt-2 text-sm font-medium text-neutral-900">
                  {h.hypothesis}
                </p>
                <p className="mt-2 text-xs text-neutral-500">{h.result}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-8 grid gap-6 md:grid-cols-3">
        {[
          { label: "Validated", count: 2, color: "text-emerald-600" },
          { label: "In testing", count: 2, color: "text-amber-600" },
          { label: "Planned", count: 2, color: "text-neutral-500" },
        ].map((s) => (
          <div
            key={s.label}
            className="rounded-2xl border border-neutral-200 bg-white p-5 text-center"
          >
            <p className={`text-2xl font-bold ${s.color}`}>{s.count}</p>
            <p className="mt-1 text-xs text-neutral-500">{s.label}</p>
          </div>
        ))}
      </div>
    </AppShell>
  );
}
