import { AppShell } from "../AppShell";

const formats = [
  {
    name: "Audit checklist",
    description: "Prospects self-assess their current process",
    selected: true,
  },
  {
    name: "Calculator",
    description: "Quantify the cost of their current approach",
    selected: false,
  },
  {
    name: "Template kit",
    description: "Ready-to-use templates they can start with",
    selected: false,
  },
  {
    name: "Mini course",
    description: "3-day email series teaching a framework",
    selected: false,
  },
];

export function LeadMagnetBuilder() {
  return (
    <AppShell
      activeNav="Distribution"
      title="Lead Magnet Builder"
      subtitle="OnboardFlow. Create your entry point"
      actions={
        <button className="rounded-lg bg-brand-600 px-4 py-2 text-xs font-medium text-white">
          Generate concept
        </button>
      }
    >
      <div className="grid gap-8 lg:grid-cols-2">
        <div className="space-y-6">
          <div className="rounded-2xl border border-neutral-200 bg-white p-6">
            <h2 className="text-sm font-semibold text-neutral-900">
              Choose Format
            </h2>
            <div className="mt-4 space-y-2">
              {formats.map((f) => (
                <div
                  key={f.name}
                  className={`flex items-center gap-3 rounded-xl border p-4 ${f.selected ? "border-brand-200 bg-brand-50/30" : "border-neutral-200"}`}
                >
                  <div
                    className={`h-4 w-4 rounded-full border-2 ${f.selected ? "border-brand-600 bg-brand-600" : "border-neutral-300"}`}
                  >
                    {f.selected && (
                      <div className="mx-auto mt-0.5 h-2 w-2 rounded-full bg-white" />
                    )}
                  </div>
                  <div>
                    <p className="text-sm font-medium text-neutral-800">
                      {f.name}
                    </p>
                    <p className="text-xs text-neutral-500">{f.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-2xl border border-neutral-200 bg-white p-6">
            <h2 className="text-sm font-semibold text-neutral-900">
              Concept Preview
            </h2>
            <div className="mt-4 space-y-4">
              <div>
                <p className="text-[10px] font-medium uppercase tracking-wider text-neutral-400">
                  Title
                </p>
                <p className="mt-1 text-sm font-medium text-neutral-800">
                  The Onboarding Health Check
                </p>
              </div>
              <div>
                <p className="text-[10px] font-medium uppercase tracking-wider text-neutral-400">
                  Subtitle
                </p>
                <p className="mt-1 text-sm text-neutral-600">
                  Score your onboarding process in 5 minutes. Find out
                  what&apos;s costing you time, money, and new hires.
                </p>
              </div>
              <div>
                <p className="text-[10px] font-medium uppercase tracking-wider text-neutral-400">
                  Sections
                </p>
                <div className="mt-2 space-y-1">
                  {[
                    "Process efficiency (5 questions)",
                    "New hire experience (4 questions)",
                    "Compliance readiness (3 questions)",
                    "Results + recommendations",
                  ].map((s) => (
                    <div
                      key={s}
                      className="flex items-center gap-2 text-xs text-neutral-600"
                    >
                      <span className="h-1 w-1 rounded-full bg-brand-400" />
                      {s}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="space-y-6">
          <div className="rounded-2xl border border-neutral-200 bg-white p-6">
            <h2 className="text-sm font-semibold text-neutral-900">
              Distribution Plan
            </h2>
            <div className="mt-4 space-y-3">
              {[
                {
                  channel: "LinkedIn",
                  action: "Pin to featured section + share as post",
                  timing: "Launch day",
                },
                {
                  channel: "Email",
                  action: "Send to existing newsletter list",
                  timing: "Launch day",
                },
                {
                  channel: "Website",
                  action: "Add to landing page as secondary CTA",
                  timing: "Launch day",
                },
                {
                  channel: "Cold outreach",
                  action: "Include link in DM sequences",
                  timing: "Week 2",
                },
                {
                  channel: "Communities",
                  action: "Share in relevant Slack/Discord groups",
                  timing: "Week 2",
                },
              ].map((d) => (
                <div
                  key={d.channel}
                  className="rounded-lg border border-neutral-100 p-3"
                >
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-medium text-neutral-800">
                      {d.channel}
                    </span>
                    <span className="text-[10px] text-neutral-400">
                      {d.timing}
                    </span>
                  </div>
                  <p className="mt-1 text-xs text-neutral-500">{d.action}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-2xl border border-brand-100 bg-brand-50/30 p-6">
            <h2 className="text-sm font-semibold text-brand-800">
              Expected Outcome
            </h2>
            <div className="mt-3 grid grid-cols-2 gap-3">
              {[
                { label: "Downloads (30 days)", value: "200–400" },
                { label: "Qualified leads", value: "15–25%" },
                { label: "Cost", value: "$0" },
                { label: "Time to build", value: "2–3 hours" },
              ].map((m) => (
                <div key={m.label} className="rounded-lg bg-white p-3">
                  <p className="text-[10px] text-neutral-400">{m.label}</p>
                  <p className="mt-0.5 text-sm font-bold text-brand-700">
                    {m.value}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </AppShell>
  );
}
