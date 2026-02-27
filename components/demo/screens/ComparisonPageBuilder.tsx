import { AppShell } from "../AppShell";

const features = [
  {
    feature: "Purpose-built onboarding",
    us: true,
    competitor: false,
  },
  {
    feature: "Mid-market pricing",
    us: true,
    competitor: false,
  },
  {
    feature: "Automated provisioning",
    us: true,
    competitor: true,
  },
  {
    feature: "Compliance audit trail",
    us: true,
    competitor: false,
  },
  {
    feature: "New hire portal",
    us: true,
    competitor: false,
  },
  {
    feature: "Core HRIS features",
    us: false,
    competitor: true,
  },
  {
    feature: "Live in under 1 week",
    us: true,
    competitor: false,
  },
  {
    feature: "Existing tool integrations",
    us: true,
    competitor: true,
  },
];

export function ComparisonPageBuilder() {
  return (
    <AppShell
      activeNav="Distribution"
      title="Comparison Page Builder"
      subtitle="OnboardFlow vs BambooHR"
      actions={
        <>
          <button className="rounded-lg border border-neutral-200 px-4 py-2 text-xs font-medium text-neutral-600">
            Switch competitor
          </button>
          <button className="rounded-lg bg-brand-600 px-4 py-2 text-xs font-medium text-white">
            Export page
          </button>
        </>
      }
    >
      <div className="grid gap-6 lg:grid-cols-[1fr_320px]">
        <div className="space-y-6">
          <div className="rounded-2xl border border-neutral-200 bg-white p-6">
            <h2 className="text-sm font-semibold text-neutral-900">
              Feature Comparison
            </h2>
            <div className="mt-4">
              <div className="grid grid-cols-3 gap-2 border-b border-neutral-100 pb-2">
                <span className="text-[10px] font-medium uppercase tracking-wider text-neutral-400">
                  Feature
                </span>
                <span className="text-center text-[10px] font-medium uppercase tracking-wider text-brand-600">
                  OnboardFlow
                </span>
                <span className="text-center text-[10px] font-medium uppercase tracking-wider text-neutral-400">
                  BambooHR
                </span>
              </div>
              {features.map((f) => (
                <div
                  key={f.feature}
                  className="grid grid-cols-3 gap-2 border-b border-neutral-50 py-3"
                >
                  <span className="text-xs text-neutral-700">{f.feature}</span>
                  <span className="text-center">
                    {f.us ? (
                      <span className="inline-flex h-5 w-5 items-center justify-center rounded-full bg-emerald-50 text-[10px] text-emerald-600">
                        ✓
                      </span>
                    ) : (
                      <span className="inline-flex h-5 w-5 items-center justify-center rounded-full bg-neutral-100 text-[10px] text-neutral-400">
                        —
                      </span>
                    )}
                  </span>
                  <span className="text-center">
                    {f.competitor ? (
                      <span className="inline-flex h-5 w-5 items-center justify-center rounded-full bg-emerald-50 text-[10px] text-emerald-600">
                        ✓
                      </span>
                    ) : (
                      <span className="inline-flex h-5 w-5 items-center justify-center rounded-full bg-neutral-100 text-[10px] text-neutral-400">
                        —
                      </span>
                    )}
                  </span>
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-2xl border border-neutral-200 bg-white p-6">
            <h2 className="text-sm font-semibold text-neutral-900">SEO Meta</h2>
            <div className="mt-4 space-y-3">
              <div>
                <p className="text-[10px] font-medium uppercase tracking-wider text-neutral-400">
                  Page title
                </p>
                <p className="mt-1 rounded-lg border border-neutral-200 bg-neutral-50 px-3 py-2 text-xs text-neutral-700">
                  OnboardFlow vs BambooHR: Which Onboarding Tool Is Right for
                  Growing Teams?
                </p>
              </div>
              <div>
                <p className="text-[10px] font-medium uppercase tracking-wider text-neutral-400">
                  Meta description
                </p>
                <p className="mt-1 rounded-lg border border-neutral-200 bg-neutral-50 px-3 py-2 text-xs text-neutral-700">
                  Compare OnboardFlow and BambooHR side-by-side. See which
                  platform is best for mid-market onboarding automation,
                  pricing, and time-to-value.
                </p>
              </div>
              <div>
                <p className="text-[10px] font-medium uppercase tracking-wider text-neutral-400">
                  Target keywords
                </p>
                <div className="mt-1 flex flex-wrap gap-1.5">
                  {[
                    "onboardflow vs bamboohr",
                    "bamboohr alternative",
                    "onboarding automation comparison",
                  ].map((kw) => (
                    <span
                      key={kw}
                      className="rounded-full bg-neutral-100 px-2.5 py-0.5 text-[10px] text-neutral-600"
                    >
                      {kw}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="space-y-4">
          <div className="rounded-2xl border border-neutral-200 bg-white p-5">
            <h3 className="text-xs font-semibold text-neutral-900">
              Comparison Pages
            </h3>
            <div className="mt-3 space-y-2">
              {[
                { name: "vs BambooHR", status: "Live" },
                { name: "vs Rippling", status: "Draft" },
                { name: "vs Manual Process", status: "Draft" },
                { name: "vs Enboarder", status: "Planned" },
              ].map((p) => (
                <div
                  key={p.name}
                  className="flex items-center justify-between rounded-lg border border-neutral-100 p-3"
                >
                  <span className="text-xs font-medium text-neutral-800">
                    {p.name}
                  </span>
                  <span
                    className={`rounded-full px-2 py-0.5 text-[10px] font-medium ${p.status === "Live" ? "bg-emerald-50 text-emerald-700" : p.status === "Draft" ? "bg-amber-50 text-amber-700" : "bg-neutral-100 text-neutral-500"}`}
                  >
                    {p.status}
                  </span>
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-2xl border border-brand-100 bg-brand-50/30 p-5">
            <h3 className="text-xs font-semibold text-brand-800">
              Page Performance
            </h3>
            <div className="mt-3 space-y-2">
              {[
                { label: "Monthly visits", value: "340" },
                { label: "Avg time on page", value: "2m 14s" },
                { label: "CTA clicks", value: "12%" },
                { label: "Signups sourced", value: "18" },
              ].map((s) => (
                <div key={s.label} className="flex justify-between text-xs">
                  <span className="text-brand-600">{s.label}</span>
                  <span className="font-medium text-brand-800">{s.value}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </AppShell>
  );
}
