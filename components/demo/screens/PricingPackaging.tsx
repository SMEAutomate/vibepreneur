import { AppShell } from "../AppShell";

const tiers = [
  {
    name: "Starter",
    price: "$49",
    period: "mo",
    metric: "Up to 50 employees",
    features: [
      "5 onboarding workflows",
      "Email + Slack notifications",
      "Basic compliance checklist",
      "Standard support",
    ],
    highlighted: false,
  },
  {
    name: "Growth",
    price: "$149",
    period: "mo",
    metric: "Up to 200 employees",
    features: [
      "Unlimited workflows",
      "Tool provisioning (Slack, Google, HRIS)",
      "Advanced compliance & audit trail",
      "Custom new hire portal",
      "Priority support",
    ],
    highlighted: true,
  },
  {
    name: "Scale",
    price: "$399",
    period: "mo",
    metric: "Unlimited employees",
    features: [
      "Everything in Growth",
      "Multi-office support",
      "API access",
      "Custom integrations",
      "Dedicated success manager",
      "SSO & advanced security",
    ],
    highlighted: false,
  },
];

export function PricingPackaging() {
  return (
    <AppShell
      activeNav="Solutions"
      title="Pricing & Packaging"
      subtitle="OnboardFlow — Tier builder"
      actions={
        <button className="rounded-lg bg-brand-600 px-4 py-2 text-xs font-medium text-white">
          Save pricing
        </button>
      }
    >
      <div className="grid gap-6 lg:grid-cols-3">
        {tiers.map((tier) => (
          <div
            key={tier.name}
            className={`rounded-2xl border bg-white p-6 ${tier.highlighted ? "border-brand-200 ring-2 ring-brand-100" : "border-neutral-200"}`}
          >
            {tier.highlighted && (
              <span className="mb-3 inline-block rounded-full bg-brand-600 px-3 py-0.5 text-[10px] font-medium text-white">
                Recommended
              </span>
            )}
            <h3 className="text-lg font-semibold text-neutral-900">
              {tier.name}
            </h3>
            <div className="mt-2 flex items-baseline gap-1">
              <span className="text-3xl font-bold text-neutral-900">
                {tier.price}
              </span>
              <span className="text-sm text-neutral-500">/{tier.period}</span>
            </div>
            <p className="mt-2 text-xs text-neutral-500">{tier.metric}</p>

            <div className="mt-6 space-y-2.5">
              {tier.features.map((f) => (
                <div
                  key={f}
                  className="flex items-start gap-2 text-sm text-neutral-600"
                >
                  <svg
                    className="mt-0.5 h-4 w-4 shrink-0 text-brand-500"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  {f}
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      <div className="mt-8 rounded-2xl border border-neutral-200 bg-white p-6">
        <h2 className="text-sm font-semibold text-neutral-900">
          Value Metrics
        </h2>
        <div className="mt-4 grid gap-4 md:grid-cols-4">
          {[
            { label: "Primary metric", value: "Employees onboarded" },
            { label: "Usage driver", value: "Active workflows" },
            { label: "Expansion trigger", value: "Headcount growth" },
            { label: "Retention anchor", value: "Time saved per hire" },
          ].map((m) => (
            <div key={m.label} className="rounded-lg bg-neutral-50 p-4">
              <p className="text-[10px] font-medium uppercase tracking-wider text-neutral-400">
                {m.label}
              </p>
              <p className="mt-1 text-sm font-medium text-neutral-800">
                {m.value}
              </p>
            </div>
          ))}
        </div>
      </div>
    </AppShell>
  );
}
