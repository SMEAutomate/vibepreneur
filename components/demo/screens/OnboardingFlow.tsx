import { AppShell } from "../AppShell";

const steps = [
  { n: 1, label: "Your role", done: true },
  { n: 2, label: "Problems you see", done: true },
  { n: 3, label: "Choose opportunity", active: true },
  { n: 4, label: "Generate solution", done: false },
  { n: 5, label: "First GTM moves", done: false },
];

const opportunities = [
  { title: "Manual onboarding workflows", score: 87, selected: true },
  { title: "Compliance reporting gaps", score: 79, selected: false },
  { title: "Client handoff inefficiencies", score: 74, selected: false },
];

export function OnboardingFlow() {
  return (
    <div className="flex h-full min-h-[600px] flex-col bg-white">
      <div className="border-b border-neutral-100 px-8 py-4">
        <span className="text-sm font-bold tracking-tight text-neutral-900">
          vibepreneur
        </span>
      </div>

      <div className="flex-1 overflow-auto">
        <div className="mx-auto max-w-2xl px-8 py-12">
          <div className="mb-12 flex items-center justify-center gap-2">
            {steps.map((step, i) => (
              <div key={step.n} className="flex items-center gap-2">
                <div
                  className={`flex h-8 w-8 items-center justify-center rounded-full text-xs font-bold ${step.done ? "bg-brand-600 text-white" : step.active ? "border-2 border-brand-600 text-brand-600" : "border-2 border-neutral-200 text-neutral-400"}`}
                >
                  {step.done ? "✓" : step.n}
                </div>
                <span
                  className={`hidden text-xs sm:inline ${step.active ? "font-medium text-brand-700" : "text-neutral-400"}`}
                >
                  {step.label}
                </span>
                {i < steps.length - 1 && (
                  <div
                    className={`mx-1 h-px w-8 ${step.done ? "bg-brand-400" : "bg-neutral-200"}`}
                  />
                )}
              </div>
            ))}
          </div>

          <div className="text-center">
            <h1 className="text-xl font-semibold text-neutral-900">
              Choose your first opportunity
            </h1>
            <p className="mt-2 text-sm text-neutral-500">
              Based on your Operations Manager background, here are your top
              matches.
            </p>
          </div>

          <div className="mt-8 space-y-3">
            {opportunities.map((opp) => (
              <div
                key={opp.title}
                className={`flex items-center gap-4 rounded-2xl border p-5 transition-colors ${opp.selected ? "border-brand-200 bg-brand-50/30 ring-2 ring-brand-100" : "border-neutral-200 bg-white hover:border-neutral-300"}`}
              >
                <div
                  className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-xl ${opp.selected ? "bg-brand-100" : "bg-neutral-100"}`}
                >
                  <span
                    className={`text-sm font-bold ${opp.selected ? "text-brand-700" : "text-neutral-500"}`}
                  >
                    {opp.score}
                  </span>
                </div>
                <div className="flex-1">
                  <p className="text-sm font-medium text-neutral-900">
                    {opp.title}
                  </p>
                </div>
                <div
                  className={`h-5 w-5 rounded-full border-2 ${opp.selected ? "border-brand-600 bg-brand-600" : "border-neutral-300"}`}
                >
                  {opp.selected && (
                    <div className="mx-auto mt-0.5 h-2.5 w-2.5 rounded-full bg-white" />
                  )}
                </div>
              </div>
            ))}
          </div>

          <div className="mt-8 flex justify-between">
            <button className="rounded-lg border border-neutral-200 px-6 py-2.5 text-sm font-medium text-neutral-600">
              Back
            </button>
            <button className="rounded-lg bg-brand-600 px-6 py-2.5 text-sm font-medium text-white">
              Continue →
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
