import { AppShell } from "../AppShell";
import { StaggerItem } from "../stagger-item";

export function HomeOverview() {
  return (
    <AppShell
      activeNav="Home"
      title="Good morning, Sarah"
      subtitle="Here's what needs your attention today."
    >
      <div className="grid gap-6 lg:grid-cols-3">
        <div className="space-y-6 lg:col-span-2">
          <StaggerItem index={0}>
            <div className="rounded-2xl border border-neutral-200 bg-white p-6">
              <div className="flex items-center justify-between">
                <h2 className="text-sm font-semibold text-neutral-900">
                  Top Opportunity
                </h2>
                <span className="rounded-full bg-emerald-50 px-3 py-1 text-xs font-medium text-emerald-700">
                  Score: 87
                </span>
              </div>
              <p className="mt-3 text-base font-medium text-neutral-800">
                HR teams spend 12+ hours/week on manual onboarding
              </p>
              <p className="mt-1 text-sm text-neutral-500">
                VP People Ops at 50–200 person startups are actively seeking
                solutions.
              </p>
              <div className="mt-4 flex gap-2">
                <button className="rounded-lg bg-brand-600 px-4 py-2 text-xs font-medium text-white">
                  Explore this
                </button>
                <button className="rounded-lg border border-neutral-200 px-4 py-2 text-xs font-medium text-neutral-600">
                  Save for later
                </button>
              </div>
            </div>
          </StaggerItem>

          <StaggerItem index={1}>
            <div className="rounded-2xl border border-neutral-200 bg-white p-6">
              <h2 className="text-sm font-semibold text-neutral-900">
                Next 3 GTM Moves
              </h2>
              <div className="mt-4 space-y-3">
                {[
                  {
                    n: 1,
                    text: "Publish positioning article on LinkedIn",
                    due: "Today",
                  },
                  {
                    n: 2,
                    text: "Launch free onboarding audit tool",
                    due: "This week",
                  },
                  {
                    n: 3,
                    text: "Run cold outreach to 50 target buyers",
                    due: "Next week",
                  },
                ].map((m) => (
                  <div
                    key={m.n}
                    className="flex items-center gap-3 rounded-lg border border-neutral-100 p-3"
                  >
                    <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-md bg-brand-50 text-xs font-bold text-brand-700">
                      {m.n}
                    </span>
                    <span className="flex-1 text-sm text-neutral-700">
                      {m.text}
                    </span>
                    <span className="text-xs text-neutral-400">{m.due}</span>
                  </div>
                ))}
              </div>
            </div>
          </StaggerItem>
        </div>

        <div className="space-y-6">
          <StaggerItem index={2}>
            <div className="rounded-2xl border border-neutral-200 bg-white p-6">
              <h2 className="text-sm font-semibold text-neutral-900">
                Launch Readiness
              </h2>
              <div className="mt-4 space-y-4">
                {[
                  {
                    label: "Positioning clarity",
                    pct: 85,
                    color: "bg-emerald-500",
                  },
                  { label: "Channel fit", pct: 72, color: "bg-amber-500" },
                  { label: "Content prepared", pct: 40, color: "bg-brand-500" },
                  { label: "Outreach ready", pct: 60, color: "bg-brand-400" },
                ].map((r) => (
                  <div key={r.label}>
                    <div className="flex justify-between text-xs">
                      <span className="text-neutral-600">{r.label}</span>
                      <span className="font-medium text-neutral-900">
                        {r.pct}%
                      </span>
                    </div>
                    <div className="mt-1 h-1.5 rounded-full bg-neutral-100">
                      <div
                        className={`h-full rounded-full ${r.color}`}
                        style={{ width: `${r.pct}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </StaggerItem>

          <StaggerItem index={3}>
            <div className="rounded-2xl border border-neutral-200 bg-white p-6">
              <h2 className="text-sm font-semibold text-neutral-900">
                Recent Activity
              </h2>
              <div className="mt-4 space-y-3">
                {[
                  { text: "Solution brief exported", time: "2h ago" },
                  { text: "Positioning canvas updated", time: "5h ago" },
                  { text: "New opportunity detected", time: "1d ago" },
                ].map((a) => (
                  <div
                    key={a.text}
                    className="flex items-center justify-between"
                  >
                    <span className="text-xs text-neutral-600">{a.text}</span>
                    <span className="text-[10px] text-neutral-400">
                      {a.time}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </StaggerItem>
        </div>
      </div>
    </AppShell>
  );
}
