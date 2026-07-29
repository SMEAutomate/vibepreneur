import { ProductShell } from "../../ProductShell";

const NAV_ITEMS = [
  { icon: "◆", label: "Renewals" },
  { icon: "◎", label: "Tenants" },
  { icon: "▣", label: "Portfolio" },
  { icon: "◈", label: "Reports" },
  { icon: "⚙", label: "Settings" },
];

const TENANT = {
  name: "Harlow & Finch LLP",
  property: "Cornmarket House, Floors 4 to 5",
  rent: "£412K per annum",
  since: "Tenant since 2019",
  risk: 88,
};

const SIGNALS = [
  {
    label: "Payment behaviour",
    detail: "On time, no arrears in 24 months",
    state: "Positive",
  },
  {
    label: "Space utilisation",
    detail: "Badge data averaging 34% of desk capacity, down from 71%",
    state: "Negative",
  },
  {
    label: "Service requests",
    detail: "Two open items past target, one escalated twice",
    state: "Negative",
  },
  {
    label: "Engagement",
    detail: "No response to the last two portfolio updates",
    state: "Negative",
  },
  {
    label: "Sector outlook",
    detail: "Legal sector footprint contracting 8% nationally",
    state: "Watch",
  },
];

const HISTORY = [
  { period: "Q3 2025", risk: 22 },
  { period: "Q4 2025", risk: 31 },
  { period: "Q1 2026", risk: 54 },
  { period: "Q2 2026", risk: 76 },
  { period: "Q3 2026", risk: 88 },
];

function stateColor(state: string): string {
  if (state === "Positive") return "text-emerald-600";
  if (state === "Watch") return "text-amber-600";
  return "text-red-600";
}

export function TLTenantHealth() {
  return (
    <ProductShell
      productName="TenantLoop"
      accentColor="blue"
      navItems={NAV_ITEMS}
      activeNav="Tenants"
      title="Tenant Health"
      subtitle={TENANT.name}
      actions={
        <button className="rounded-lg bg-blue-600 px-3 py-1.5 text-xs font-medium text-white">
          Log conversation
        </button>
      }
    >
      <div className="grid gap-4 lg:grid-cols-3">
        <div className="space-y-4 lg:col-span-2">
          <div className="rounded-xl border border-neutral-200 bg-white p-5">
            <div className="flex flex-wrap items-start justify-between gap-3">
              <div>
                <p className="text-sm font-semibold text-neutral-900">
                  {TENANT.property}
                </p>
                <p className="text-[11px] text-neutral-500">
                  {TENANT.rent} · {TENANT.since}
                </p>
              </div>
              <div className="text-right">
                <p className="text-[10px] uppercase tracking-wider text-neutral-400">
                  Renewal risk
                </p>
                <p className="text-2xl font-bold text-red-600">{TENANT.risk}</p>
              </div>
            </div>
          </div>

          <div className="rounded-xl border border-neutral-200 bg-white p-5">
            <p className="text-sm font-semibold text-neutral-900">
              Contributing signals
            </p>
            <div className="mt-4 space-y-3">
              {SIGNALS.map((signal) => (
                <div
                  key={signal.label}
                  className="flex items-start justify-between gap-4 border-b border-neutral-100 pb-3 last:border-0 last:pb-0"
                >
                  <div>
                    <p className="text-sm font-medium text-neutral-800">
                      {signal.label}
                    </p>
                    <p className="mt-0.5 text-xs text-neutral-600">
                      {signal.detail}
                    </p>
                  </div>
                  <span
                    className={`shrink-0 text-xs font-medium ${stateColor(signal.state)}`}
                  >
                    {signal.state}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="space-y-4">
          <div className="rounded-xl border border-neutral-200 bg-white p-5">
            <p className="text-sm font-semibold text-neutral-900">
              Risk trajectory
            </p>
            <div className="mt-4 flex h-28 items-end gap-2">
              {HISTORY.map((point) => (
                <div
                  key={point.period}
                  className="flex flex-1 flex-col items-center"
                >
                  <div
                    className={`w-full rounded-t ${point.risk >= 75 ? "bg-red-400" : point.risk >= 50 ? "bg-amber-400" : "bg-blue-400"}`}
                    style={{ height: `${point.risk}%` }}
                  />
                  <span className="mt-1.5 text-[9px] text-neutral-400">
                    {point.period.split(" ")[0]}
                  </span>
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-xl border border-blue-100 bg-blue-50/60 p-5">
            <p className="text-sm font-semibold text-blue-900">
              Recommended action
            </p>
            <p className="mt-2 text-xs leading-relaxed text-blue-800">
              Open the space conversation now rather than at review. Utilisation
              at 34% means this tenant is deciding whether to halve their
              footprint, not whether to leave. A floor surrender with a longer
              term protects £240K of the £412K.
            </p>
          </div>
        </div>
      </div>
    </ProductShell>
  );
}
