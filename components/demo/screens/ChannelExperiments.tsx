import { AppShell } from "../AppShell";

const experiments = [
  {
    name: "LinkedIn DM: question-first vs value-first",
    channel: "LinkedIn",
    hypothesis: "Question-first DMs get 2x more replies",
    metric: "Reply rate",
    status: "completed",
    result: "7.2% vs 3.1% — question-first wins",
    decision: "Scale",
  },
  {
    name: "Audit checklist: short (8 Qs) vs long (15 Qs)",
    channel: "Lead magnet",
    hypothesis: "Shorter checklist has higher completion rate",
    metric: "Completion rate",
    status: "completed",
    result: "72% vs 64% — short form wins",
    decision: "Iterate",
  },
  {
    name: "Cold email: pain vs curiosity subject line",
    channel: "Email",
    hypothesis: "Pain-focused subject lines get higher open rates",
    metric: "Open rate",
    status: "running",
    result: "48% vs 39% — 247 emails sent, 3 days remaining",
    decision: "Pending",
  },
  {
    name: "Blog post with embedded ROI calculator",
    channel: "SEO / Content",
    hypothesis: "Interactive content doubles time on page",
    metric: "Time on page + signups",
    status: "running",
    result: "Avg 3m 12s vs 1m 44s — tracking signups",
    decision: "Pending",
  },
  {
    name: "Reddit AMA in r/humanresources",
    channel: "Community",
    hypothesis: "AMA drives 50+ landing page visits",
    metric: "Referral traffic",
    status: "planned",
    result: "—",
    decision: "—",
  },
  {
    name: "Partner webinar with Gusto",
    channel: "Partnerships",
    hypothesis: "Co-branded webinar generates 30+ qualified leads",
    metric: "Lead quality score",
    status: "planned",
    result: "—",
    decision: "—",
  },
];

const statusColors: Record<string, string> = {
  completed: "bg-emerald-50 text-emerald-700",
  running: "bg-amber-50 text-amber-700",
  planned: "bg-neutral-100 text-neutral-500",
};

const decisionColors: Record<string, string> = {
  Scale: "bg-emerald-50 text-emerald-700",
  Iterate: "bg-brand-50 text-brand-700",
  Pending: "bg-neutral-100 text-neutral-500",
  "—": "",
};

export function ChannelExperiments() {
  return (
    <AppShell
      activeNav="Growth"
      title="Channel Experiments"
      subtitle="OnboardFlow — Test, measure, decide"
      actions={
        <button className="rounded-lg bg-brand-600 px-4 py-2 text-xs font-medium text-white">
          New experiment
        </button>
      }
    >
      <div className="grid gap-4 md:grid-cols-3">
        {[
          { label: "Completed", value: "2", color: "text-emerald-600" },
          { label: "Running", value: "2", color: "text-amber-600" },
          { label: "Planned", value: "2", color: "text-neutral-500" },
        ].map((m) => (
          <div
            key={m.label}
            className="rounded-2xl border border-neutral-200 bg-white p-5 text-center"
          >
            <p className={`text-2xl font-bold ${m.color}`}>{m.value}</p>
            <p className="mt-1 text-xs text-neutral-500">{m.label}</p>
          </div>
        ))}
      </div>

      <div className="mt-8 space-y-4">
        {experiments.map((e) => (
          <div
            key={e.name}
            className="rounded-2xl border border-neutral-200 bg-white p-6"
          >
            <div className="flex items-start justify-between gap-4">
              <div className="flex-1">
                <div className="flex items-center gap-2">
                  <span
                    className={`rounded-full px-2 py-0.5 text-[10px] font-medium ${statusColors[e.status]}`}
                  >
                    {e.status}
                  </span>
                  <span className="rounded-full bg-neutral-100 px-2 py-0.5 text-[10px] text-neutral-500">
                    {e.channel}
                  </span>
                  {e.decision !== "—" && (
                    <span
                      className={`rounded-full px-2 py-0.5 text-[10px] font-medium ${decisionColors[e.decision]}`}
                    >
                      {e.decision}
                    </span>
                  )}
                </div>
                <p className="mt-2 text-sm font-medium text-neutral-900">
                  {e.name}
                </p>
                <p className="mt-1 text-xs text-neutral-500">
                  Hypothesis: {e.hypothesis}
                </p>
              </div>
              <span className="shrink-0 text-[10px] text-neutral-400">
                Metric: {e.metric}
              </span>
            </div>

            {e.result !== "—" && (
              <div className="mt-3 rounded-lg bg-neutral-50 p-3">
                <p className="text-xs text-neutral-700">{e.result}</p>
              </div>
            )}
          </div>
        ))}
      </div>
    </AppShell>
  );
}
