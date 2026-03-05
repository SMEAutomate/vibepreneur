import { AppShell } from "@/components/demo/AppShell";

const TIERS = [
  {
    name: "Starter",
    price: "$39",
    period: "mo",
    metric: "Up to 50 vendors",
    features: [
      "Vendor directory with search",
      "Basic contract tracking",
      "Spend overview dashboard",
      "Email renewal reminders",
    ],
    highlighted: false,
  },
  {
    name: "Growth",
    price: "$99",
    period: "mo",
    metric: "Up to 200 vendors",
    features: [
      "Everything in Starter",
      "Duplicate vendor detection",
      "Category spend analytics",
      "Approval workflows",
      "Priority support",
    ],
    highlighted: true,
  },
  {
    name: "Scale",
    price: "$249",
    period: "mo",
    metric: "Unlimited vendors",
    features: [
      "Everything in Growth",
      "Auto-renewal clause alerts",
      "Custom reporting and exports",
      "API access",
      "Dedicated success manager",
      "SSO and audit trail",
    ],
    highlighted: false,
  },
];

export function VVVibePricing() {
  return (
    <AppShell
      activeNav="Solutions"
      title="Pricing & Packaging"
      subtitle="VendorVault. Tier builder"
      actions={
        <button className="rounded-lg bg-brand-600 px-4 py-2 text-xs font-medium text-white">
          Save pricing
        </button>
      }
    >
      <div className="grid gap-6 lg:grid-cols-3">
        {TIERS.map((tier) => (
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
            { label: "Primary metric", value: "Active vendors" },
            { label: "Usage driver", value: "Contracts managed" },
            { label: "Expansion trigger", value: "New vendor additions" },
            { label: "Retention anchor", value: "Savings identified" },
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
