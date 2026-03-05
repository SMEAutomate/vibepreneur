import { DarkShell } from "../../DarkShell";

const NAV_ITEMS = [
  { icon: "◆", label: "Pipeline" },
  { icon: "◎", label: "Deals" },
  { icon: "▣", label: "Forecast" },
  { icon: "◈", label: "Insights" },
  { icon: "⚙", label: "Settings" },
];

const SCORING = [
  { factor: "Champion Strength", score: 8, max: 10, color: "bg-emerald-500" },
  { factor: "Budget Confirmed", score: 9, max: 10, color: "bg-emerald-500" },
  { factor: "Decision Timeline", score: 6, max: 10, color: "bg-amber-500" },
  { factor: "Competition Risk", score: 7, max: 10, color: "bg-emerald-500" },
  { factor: "Technical Fit", score: 9, max: 10, color: "bg-emerald-500" },
];

const RISKS = [
  { text: "Decision timeline pushed from Q1 to Q2", level: "red" },
  { text: "Champion recently changed roles internally", level: "amber" },
  { text: "Competitor mentioned in last call", level: "amber" },
  { text: "Budget approved by CFO", level: "green" },
  { text: "Technical POC passed all criteria", level: "green" },
];

const SIGNALS = [
  { action: "Viewed pricing page 3 times", time: "2 hours ago" },
  { action: "Downloaded security whitepaper", time: "Yesterday" },
  { action: "Invited CTO to next meeting", time: "2 days ago" },
  { action: "Asked about implementation timeline", time: "3 days ago" },
  { action: "Requested customer references", time: "5 days ago" },
];

const ACTIONS = [
  "Schedule a technical deep-dive with their CTO",
  "Share customer reference from similar industry",
  "Prepare ROI analysis tailored to their use case",
  "Follow up on procurement process timeline",
];

function levelDot(level: string): string {
  if (level === "red") return "bg-red-500";
  if (level === "amber") return "bg-amber-500";
  return "bg-emerald-500";
}

export function DSDScorecard() {
  return (
    <DarkShell
      productName="DealScore"
      accentColor="emerald"
      navItems={NAV_ITEMS}
      activeNav="Deals"
      title="Acme Corp: Enterprise License"
      subtitle="Negotiation stage, $120K TCV"
      actions={
        <>
          <button className="rounded border border-neutral-300 bg-white px-3 py-1.5 text-xs font-medium text-neutral-600">
            View history
          </button>
          <button className="rounded bg-emerald-500 px-3 py-1.5 text-xs font-medium text-white">
            Update deal
          </button>
        </>
      }
    >
      <div className="grid gap-4 lg:grid-cols-3">
        <div className="space-y-4 lg:col-span-2">
          <div className="rounded-md border border-neutral-200 bg-white p-4">
            <div className="flex items-center justify-between">
              <p className="text-[10px] text-neutral-400">Overall Deal Score</p>
              <div className="flex items-baseline gap-1">
                <span className="text-3xl font-bold text-emerald-600">78</span>
                <span className="text-xs text-neutral-400">/100</span>
              </div>
            </div>
            <div className="mt-2 h-2 w-full rounded bg-neutral-100">
              <div
                className="h-2 rounded bg-emerald-500"
                style={{ width: "78%" }}
              />
            </div>
          </div>

          <div className="rounded-md border border-neutral-200 bg-white p-4">
            <h2 className="text-xs font-semibold text-neutral-800">
              Scoring Breakdown
            </h2>
            <div className="mt-3 space-y-3">
              {SCORING.map((s) => (
                <div key={s.factor}>
                  <div className="flex items-center justify-between">
                    <span className="text-xs text-neutral-600">{s.factor}</span>
                    <span className="text-xs font-bold text-emerald-600">
                      {s.score}/{s.max}
                    </span>
                  </div>
                  <div className="mt-1 h-1.5 w-full rounded bg-neutral-100">
                    <div
                      className={`h-1.5 rounded ${s.color}`}
                      style={{ width: `${(s.score / s.max) * 100}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-md border border-neutral-200 bg-white p-4">
            <h2 className="text-xs font-semibold text-neutral-800">
              Risk Factors
            </h2>
            <div className="mt-3 space-y-1.5">
              {RISKS.map((r) => (
                <div
                  key={r.text}
                  className="flex items-center gap-3 rounded-md bg-neutral-50 px-3 py-2.5"
                >
                  <span
                    className={`h-2 w-2 shrink-0 rounded-full ${levelDot(r.level)}`}
                  />
                  <span className="text-xs text-neutral-700">{r.text}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="space-y-4">
          <div className="rounded-md border border-neutral-200 bg-white p-4">
            <h2 className="text-xs font-semibold text-neutral-800">
              Buying Signals
            </h2>
            <div className="mt-3 space-y-2.5">
              {SIGNALS.map((s) => (
                <div
                  key={s.action}
                  className="border-b border-neutral-100 pb-2.5 last:border-0 last:pb-0"
                >
                  <p className="text-xs text-neutral-700">{s.action}</p>
                  <p className="mt-0.5 text-[10px] text-neutral-400">
                    {s.time}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-md border border-emerald-200 bg-emerald-50/40 p-4">
            <h2 className="text-xs font-semibold text-emerald-800">
              Recommended Actions
            </h2>
            <div className="mt-3 space-y-2">
              {ACTIONS.map((a, i) => (
                <div key={a} className="flex items-start gap-2">
                  <span className="flex h-4 w-4 shrink-0 items-center justify-center rounded bg-emerald-500 text-[9px] font-bold text-white">
                    {i + 1}
                  </span>
                  <span className="text-xs leading-relaxed text-emerald-800">
                    {a}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </DarkShell>
  );
}
