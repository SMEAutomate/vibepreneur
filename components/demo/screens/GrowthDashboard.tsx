import { AppShell } from "../AppShell";
import { StaggerItem } from "../stagger-item";

const metrics = [
  { label: "Waitlist signups", value: "347", change: "+23%", up: true },
  { label: "Audit completions", value: "128", change: "+41%", up: true },
  { label: "Demo requests", value: "18", change: "+12%", up: true },
  { label: "Activation rate", value: "64%", change: "-2%", up: false },
];

const sources = [
  { source: "LinkedIn organic", visitors: 812, signups: 147, rate: "18.1%" },
  { source: "Cold outreach", visitors: 234, signups: 89, rate: "38.0%" },
  { source: "Audit checklist", visitors: 189, signups: 67, rate: "35.4%" },
  { source: "Direct / referral", visitors: 156, signups: 28, rate: "17.9%" },
  { source: "SEO / Blog", visitors: 94, signups: 16, rate: "17.0%" },
];

const experiments = [
  {
    name: "LinkedIn DM variant B (question-first)",
    result: "+2.1% reply rate",
    status: "Winner",
  },
  {
    name: "Audit checklist v2 (shorter)",
    result: "+8% completion",
    status: "Winner",
  },
  {
    name: "Blog post with embedded tool",
    result: "Testing...",
    status: "Running",
  },
  {
    name: "Email subject line: pain vs curiosity",
    result: "Waiting for data",
    status: "Running",
  },
];

export function GrowthDashboard() {
  return (
    <AppShell
      activeNav="Growth"
      title="Growth Dashboard"
      subtitle="OnboardFlow. Last 30 days"
    >
      <div className="grid gap-4 md:grid-cols-4">
        {metrics.map((m, i) => (
          <StaggerItem key={m.label} index={i}>
            <div className="rounded-2xl border border-neutral-200 bg-white p-5">
              <p className="text-xs text-neutral-500">{m.label}</p>
              <div className="mt-2 flex items-end gap-2">
                <span className="text-2xl font-bold text-neutral-900">
                  {m.value}
                </span>
                <span
                  className={`mb-0.5 text-xs font-medium ${m.up ? "text-emerald-600" : "text-red-500"}`}
                >
                  {m.change}
                </span>
              </div>
            </div>
          </StaggerItem>
        ))}
      </div>

      <div className="mt-8 grid gap-6 lg:grid-cols-2">
        <StaggerItem index={4}>
          <div className="rounded-2xl border border-neutral-200 bg-white p-6">
            <h2 className="text-sm font-semibold text-neutral-900">
              Traffic Sources
            </h2>
            <div className="mt-4">
              <div className="grid grid-cols-4 gap-2 border-b border-neutral-100 pb-2 text-[10px] font-medium uppercase tracking-wider text-neutral-400">
                <span className="col-span-1">Source</span>
                <span className="text-right">Visitors</span>
                <span className="text-right">Signups</span>
                <span className="text-right">Conv.</span>
              </div>
              {sources.map((s) => (
                <div
                  key={s.source}
                  className="grid grid-cols-4 gap-2 border-b border-neutral-50 py-3 text-xs"
                >
                  <span className="col-span-1 font-medium text-neutral-700">
                    {s.source}
                  </span>
                  <span className="text-right text-neutral-500">
                    {s.visitors}
                  </span>
                  <span className="text-right text-neutral-500">
                    {s.signups}
                  </span>
                  <span className="text-right font-medium text-neutral-800">
                    {s.rate}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </StaggerItem>

        <StaggerItem index={5}>
          <div className="rounded-2xl border border-neutral-200 bg-white p-6">
            <h2 className="text-sm font-semibold text-neutral-900">
              Experiment Results
            </h2>
            <div className="mt-4 space-y-3">
              {experiments.map((e) => (
                <div
                  key={e.name}
                  className="rounded-lg border border-neutral-100 p-3"
                >
                  <div className="flex items-center justify-between">
                    <p className="text-xs font-medium text-neutral-800">
                      {e.name}
                    </p>
                    <span
                      className={`rounded-full px-2 py-0.5 text-[10px] font-medium ${e.status === "Winner" ? "bg-emerald-50 text-emerald-700" : "bg-amber-50 text-amber-700"}`}
                    >
                      {e.status}
                    </span>
                  </div>
                  <p className="mt-1 text-[10px] text-neutral-500">
                    {e.result}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </StaggerItem>
      </div>

      <StaggerItem index={6}>
        <div className="mt-6 rounded-2xl border border-brand-100 bg-brand-50/30 p-6">
          <h2 className="text-sm font-semibold text-brand-800">
            Next 3 Growth Moves
          </h2>
          <div className="mt-3 grid gap-3 md:grid-cols-3">
            {[
              "Scale LinkedIn DM variant B to 100 prospects/week",
              "Publish 3 SEO articles targeting 'onboarding automation'",
              "Launch referral incentive for audit checklist shares",
            ].map((move, i) => (
              <div
                key={move}
                className="flex items-start gap-2 rounded-lg bg-white p-3"
              >
                <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded bg-brand-100 text-[10px] font-bold text-brand-700">
                  {i + 1}
                </span>
                <p className="text-xs text-brand-700">{move}</p>
              </div>
            ))}
          </div>
        </div>
      </StaggerItem>
    </AppShell>
  );
}
