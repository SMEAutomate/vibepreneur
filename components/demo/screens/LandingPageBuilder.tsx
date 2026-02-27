import { AppShell } from "../AppShell";

const sections = [
  {
    order: 1,
    name: "Hero",
    description: "Headline, subheadline, primary CTA, trust indicators",
  },
  {
    order: 2,
    name: "Problem",
    description: "Pain point articulation with data",
  },
  { order: 3, name: "Solution", description: "How it works in 3 steps" },
  { order: 4, name: "Benefits", description: "Outcome-focused feature blocks" },
  { order: 5, name: "Social Proof", description: "Testimonials and metrics" },
  { order: 6, name: "Pricing", description: "Tier cards with clear value" },
  { order: 7, name: "FAQ", description: "Objection handling" },
  { order: 8, name: "Final CTA", description: "Urgency + action" },
];

const ctaVariants = [
  {
    label: "Direct",
    text: "Start onboarding smarter today",
    style: "bg-brand-600 text-white",
  },
  {
    label: "Value-led",
    text: "See how much time you'll save",
    style: "bg-emerald-600 text-white",
  },
  {
    label: "Low friction",
    text: "Get the free audit checklist",
    style: "bg-neutral-900 text-white",
  },
];

export function LandingPageBuilder() {
  return (
    <AppShell
      activeNav="Distribution"
      title="Landing Page Builder"
      subtitle="OnboardFlow. Section outline"
      actions={
        <button className="rounded-lg bg-brand-600 px-4 py-2 text-xs font-medium text-white">
          Preview page
        </button>
      }
    >
      <div className="grid gap-8 lg:grid-cols-3">
        <div className="lg:col-span-2">
          <h2 className="text-sm font-semibold text-neutral-900">
            Page Sections
          </h2>
          <div className="mt-4 space-y-2">
            {sections.map((s) => (
              <div
                key={s.order}
                className="flex items-center gap-4 rounded-xl border border-neutral-200 bg-white p-4"
              >
                <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-md bg-neutral-100 text-xs font-bold text-neutral-500">
                  {s.order}
                </span>
                <div className="flex-1">
                  <p className="text-sm font-medium text-neutral-800">
                    {s.name}
                  </p>
                  <p className="text-xs text-neutral-500">{s.description}</p>
                </div>
                <button className="text-[10px] text-neutral-400 hover:text-neutral-600">
                  ⋮
                </button>
              </div>
            ))}
          </div>
        </div>

        <div className="space-y-6">
          <div className="rounded-2xl border border-neutral-200 bg-white p-6">
            <h2 className="text-sm font-semibold text-neutral-900">
              CTA Variants
            </h2>
            <div className="mt-4 space-y-3">
              {ctaVariants.map((cta) => (
                <div key={cta.label} className="space-y-2">
                  <p className="text-[10px] font-medium uppercase tracking-wider text-neutral-400">
                    {cta.label}
                  </p>
                  <div
                    className={`rounded-lg px-4 py-3 text-center text-sm font-medium ${cta.style}`}
                  >
                    {cta.text}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-2xl border border-neutral-200 bg-white p-6">
            <h2 className="text-sm font-semibold text-neutral-900">
              Page Stats
            </h2>
            <div className="mt-4 space-y-3">
              {[
                { label: "Estimated read time", value: "2.5 min" },
                { label: "Sections", value: "8" },
                { label: "CTAs", value: "3 placements" },
                { label: "Mobile optimised", value: "Yes" },
              ].map((s) => (
                <div key={s.label} className="flex justify-between text-xs">
                  <span className="text-neutral-500">{s.label}</span>
                  <span className="font-medium text-neutral-700">
                    {s.value}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </AppShell>
  );
}
