import { AppShell } from "../AppShell";

export function ICPDefinition() {
  return (
    <AppShell
      activeNav="Go-To-Market"
      title="ICP Definition"
      subtitle="OnboardFlow. Your ideal customer, precisely defined"
      actions={
        <button className="rounded-lg bg-brand-600 px-4 py-2 text-xs font-medium text-white">
          Export ICP
        </button>
      }
    >
      <div className="grid gap-6 lg:grid-cols-2">
        <div className="space-y-5">
          <div className="rounded-2xl border border-neutral-200 bg-white p-6">
            <h2 className="text-sm font-semibold text-neutral-900">
              Firmographics
            </h2>
            <div className="mt-4 space-y-3">
              {[
                { label: "Company size", value: "50–200 employees" },
                { label: "Revenue range", value: "$5M–$50M ARR" },
                { label: "Industry", value: "B2B SaaS, Professional Services" },
                { label: "Growth stage", value: "Series A–B, scaling rapidly" },
                { label: "Hiring velocity", value: "5–15 new hires/month" },
              ].map((f) => (
                <div
                  key={f.label}
                  className="flex items-center justify-between rounded-lg border border-neutral-100 p-3"
                >
                  <span className="text-xs text-neutral-500">{f.label}</span>
                  <span className="text-xs font-medium text-neutral-800">
                    {f.value}
                  </span>
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-2xl border border-neutral-200 bg-white p-6">
            <h2 className="text-sm font-semibold text-neutral-900">
              Technographics
            </h2>
            <div className="mt-4 space-y-2">
              {[
                {
                  category: "HRIS",
                  tools: ["Gusto", "Rippling", "BambooHR", "Deel"],
                },
                {
                  category: "Collaboration",
                  tools: ["Slack", "Google Workspace", "Notion"],
                },
                {
                  category: "ATS",
                  tools: ["Lever", "Greenhouse", "Ashby"],
                },
              ].map((t) => (
                <div
                  key={t.category}
                  className="rounded-lg border border-neutral-100 p-3"
                >
                  <p className="text-[10px] font-medium uppercase tracking-wider text-neutral-400">
                    {t.category}
                  </p>
                  <div className="mt-1.5 flex flex-wrap gap-1">
                    {t.tools.map((tool) => (
                      <span
                        key={tool}
                        className="rounded-full bg-neutral-100 px-2 py-0.5 text-[10px] text-neutral-600"
                      >
                        {tool}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="space-y-5">
          <div className="rounded-2xl border border-neutral-200 bg-white p-6">
            <h2 className="text-sm font-semibold text-neutral-900">
              Intent Signals
            </h2>
            <div className="mt-4 space-y-3">
              {[
                {
                  signal: "Hiring for People Ops roles",
                  weight: "Strong",
                  color: "bg-emerald-50 text-emerald-700",
                },
                {
                  signal: "Searching onboarding automation terms",
                  weight: "Strong",
                  color: "bg-emerald-50 text-emerald-700",
                },
                {
                  signal: "Recent Series A/B funding",
                  weight: "Moderate",
                  color: "bg-amber-50 text-amber-700",
                },
                {
                  signal: "Posting about growing pains on LinkedIn",
                  weight: "Moderate",
                  color: "bg-amber-50 text-amber-700",
                },
                {
                  signal: "Evaluating HRIS tools",
                  weight: "Weak",
                  color: "bg-neutral-100 text-neutral-500",
                },
              ].map((s) => (
                <div
                  key={s.signal}
                  className="flex items-center justify-between rounded-lg border border-neutral-100 p-3"
                >
                  <span className="text-xs text-neutral-700">{s.signal}</span>
                  <span
                    className={`rounded-full px-2 py-0.5 text-[10px] font-medium ${s.color}`}
                  >
                    {s.weight}
                  </span>
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-2xl border border-neutral-200 bg-white p-6">
            <h2 className="text-sm font-semibold text-neutral-900">
              Disqualifiers
            </h2>
            <div className="mt-4 space-y-2">
              {[
                "Fewer than 30 employees (too small)",
                "Enterprise with dedicated onboarding team (overserved)",
                "No HRIS or modern toolstack (integration risk)",
                "Hiring fewer than 3/month (low urgency)",
              ].map((d) => (
                <div
                  key={d}
                  className="flex items-start gap-2 text-xs text-neutral-600"
                >
                  <span className="mt-1 text-red-400">✕</span>
                  {d}
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-2xl border border-brand-100 bg-brand-50/30 p-6">
            <h2 className="text-sm font-semibold text-brand-800">ICP Score</h2>
            <div className="mt-2 flex items-end gap-2">
              <span className="text-2xl font-bold text-brand-700">94</span>
              <span className="mb-0.5 text-xs text-brand-600">/100</span>
            </div>
            <p className="mt-2 text-xs text-brand-600">
              Well-defined ICP with strong intent signals. Consider adding
              geographic targeting for initial outreach focus.
            </p>
          </div>
        </div>
      </div>
    </AppShell>
  );
}
