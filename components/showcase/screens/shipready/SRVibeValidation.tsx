import { AppShell } from "@/components/demo/AppShell";

const HYPOTHESES = [
  {
    hypothesis: "PMs will trade email for a free prioritization template",
    status: "validated",
    result: "68 downloads in first week, 22% conversion to waitlist",
    decision: "Scale",
  },
  {
    hypothesis: "Product teams with 5+ members pay $149/mo for scoring tools",
    status: "validated",
    result: "12 of 18 interviewed teams confirmed willingness to pay",
    decision: "Scale",
  },
  {
    hypothesis: "LinkedIn posts about roadmap chaos drive signups at 3%+ CTR",
    status: "validated",
    result: "4.1% CTR across 8 posts, 94 waitlist signups",
    decision: "Iterate",
  },
  {
    hypothesis: "Product Hunt launch generates 300+ waitlist signups",
    status: "testing",
    result: "Launched 3 days ago, 187 signups so far, trending in top 10...",
    decision: "Pending",
  },
  {
    hypothesis: "Jira integration is a top-3 requested feature for enterprise",
    status: "testing",
    result: "Surveying 25 enterprise prospects, 14 responses collected...",
    decision: "Pending",
  },
  {
    hypothesis: "Free tier converts to paid at 8%+ within 30 days",
    status: "planned",
    result: "-",
    decision: "-",
  },
];

const STATUS_COLORS: Record<string, string> = {
  validated: "bg-emerald-50 text-emerald-700",
  testing: "bg-amber-50 text-amber-700",
  planned: "bg-neutral-100 text-neutral-500",
};

const DECISION_COLORS: Record<string, string> = {
  Scale: "bg-emerald-50 text-emerald-700",
  Iterate: "bg-brand-50 text-brand-700",
  Pivot: "bg-red-50 text-red-700",
  Pending: "bg-neutral-100 text-neutral-500",
  "-": "",
};

export function SRVibeValidation() {
  return (
    <AppShell
      activeNav="Growth"
      title="Validation Tracker"
      subtitle="ShipReady. Hypotheses and results"
      actions={
        <button className="rounded-lg bg-brand-600 px-4 py-2 text-xs font-medium text-white">
          Add hypothesis
        </button>
      }
    >
      <div className="space-y-3">
        {HYPOTHESES.map((h) => (
          <div
            key={h.hypothesis}
            className="rounded-2xl border border-neutral-200 bg-white p-5"
          >
            <div className="flex items-start justify-between gap-4">
              <div className="flex-1">
                <div className="flex items-center gap-2">
                  <span
                    className={`rounded-full px-2 py-0.5 text-[10px] font-medium ${STATUS_COLORS[h.status]}`}
                  >
                    {h.status}
                  </span>
                  {h.decision !== "-" && (
                    <span
                      className={`rounded-full px-2 py-0.5 text-[10px] font-medium ${DECISION_COLORS[h.decision]}`}
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
          { label: "Validated", count: 3, color: "text-emerald-600" },
          { label: "In testing", count: 2, color: "text-amber-600" },
          { label: "Planned", count: 1, color: "text-neutral-500" },
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
