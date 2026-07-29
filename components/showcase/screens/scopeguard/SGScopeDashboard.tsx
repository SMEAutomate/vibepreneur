import { SoftShell } from "../../SoftShell";

const NAV_ITEMS = [
  { icon: "◆", label: "Dashboard" },
  { icon: "◎", label: "Change Log" },
  { icon: "▣", label: "Margin" },
  { icon: "◈", label: "Accounts" },
  { icon: "⚙", label: "Settings" },
];

const KPIS = [
  { label: "Scope Drift", value: "14.2%", note: "Above contracted effort" },
  { label: "Unbilled Effort", value: "$84.6K", note: "This quarter" },
  { label: "Accounts Over", value: "9 of 24", note: "Beyond tolerance" },
  { label: "Recovered", value: "$41.2K", note: "Billed after flag" },
];

const ACCOUNTS = [
  {
    name: "Ardent Financial",
    contracted: 320,
    delivered: 412,
    margin: 18,
    state: "Critical",
  },
  {
    name: "Wexford Retail Group",
    contracted: 180,
    delivered: 226,
    margin: 24,
    state: "Critical",
  },
  {
    name: "Pinehurst Labs",
    contracted: 240,
    delivered: 268,
    margin: 34,
    state: "Watch",
  },
  {
    name: "Calder & Voss",
    contracted: 160,
    delivered: 171,
    margin: 41,
    state: "Healthy",
  },
  {
    name: "Meridian Foods",
    contracted: 400,
    delivered: 388,
    margin: 46,
    state: "Healthy",
  },
];

const DRIVERS = [
  { name: "Extra revision rounds", share: 38 },
  { name: "Unscoped stakeholder reviews", share: 24 },
  { name: "Asset resizing and variants", share: 18 },
  { name: "Ad hoc reporting requests", share: 12 },
  { name: "Meetings beyond cadence", share: 8 },
];

function stateColor(state: string): string {
  if (state === "Critical") return "text-red-600";
  if (state === "Watch") return "text-amber-600";
  return "text-emerald-600";
}

export function SGScopeDashboard() {
  return (
    <SoftShell
      productName="ScopeGuard"
      accentColor="sky"
      navItems={NAV_ITEMS}
      activeNav="Dashboard"
      title="Scope Dashboard"
      subtitle="Contracted versus delivered, Q3 2026"
      actions={
        <button className="rounded-lg bg-sky-600 px-3 py-1.5 text-xs font-medium text-white">
          Prepare conversation
        </button>
      }
    >
      <div className="space-y-5">
        <div className="grid grid-cols-2 gap-3 lg:grid-cols-4">
          {KPIS.map((kpi) => (
            <div
              key={kpi.label}
              className="rounded-xl border border-sky-100 bg-white p-4"
            >
              <p className="text-[10px] font-medium uppercase tracking-wider text-neutral-400">
                {kpi.label}
              </p>
              <p className="mt-1 text-xl font-semibold text-neutral-900">
                {kpi.value}
              </p>
              <p className="mt-1 text-[11px] text-neutral-500">{kpi.note}</p>
            </div>
          ))}
        </div>

        <div className="grid gap-4 lg:grid-cols-3">
          <div className="rounded-xl border border-sky-100 bg-white p-5 lg:col-span-2">
            <p className="text-sm font-semibold text-neutral-900">
              Effort against contract
            </p>
            <div className="mt-4 space-y-4">
              {ACCOUNTS.map((account) => {
                const over = Math.round(
                  ((account.delivered - account.contracted) /
                    account.contracted) *
                    100
                );
                return (
                  <div
                    key={account.name}
                    className="border-b border-neutral-100 pb-4 last:border-0 last:pb-0"
                  >
                    <div className="flex flex-wrap items-center justify-between gap-2">
                      <div>
                        <p className="text-sm font-medium text-neutral-800">
                          {account.name}
                        </p>
                        <p className="text-[11px] text-neutral-500">
                          {account.delivered}h delivered of {account.contracted}
                          h contracted
                        </p>
                      </div>
                      <div className="flex items-center gap-4 text-right">
                        <div>
                          <p className="text-[10px] uppercase tracking-wider text-neutral-400">
                            Drift
                          </p>
                          <p
                            className={`text-sm font-semibold ${over > 10 ? "text-red-600" : over > 0 ? "text-amber-600" : "text-emerald-600"}`}
                          >
                            {over > 0 ? "+" : ""}
                            {over}%
                          </p>
                        </div>
                        <div>
                          <p className="text-[10px] uppercase tracking-wider text-neutral-400">
                            Margin
                          </p>
                          <p
                            className={`text-sm font-semibold ${stateColor(account.state)}`}
                          >
                            {account.margin}%
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="mt-2 flex h-1.5 overflow-hidden rounded-full bg-neutral-100">
                      <div
                        className="h-full bg-sky-500"
                        style={{
                          width: `${Math.min((account.contracted / 450) * 100, 100)}%`,
                        }}
                      />
                      {account.delivered > account.contracted && (
                        <div
                          className="h-full bg-red-400"
                          style={{
                            width: `${((account.delivered - account.contracted) / 450) * 100}%`,
                          }}
                        />
                      )}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          <div className="space-y-4">
            <div className="rounded-xl border border-sky-100 bg-white p-5">
              <p className="text-sm font-semibold text-neutral-900">
                What drives the drift
              </p>
              <div className="mt-4 space-y-3">
                {DRIVERS.map((driver) => (
                  <div key={driver.name}>
                    <div className="flex items-center justify-between text-xs">
                      <span className="text-neutral-600">{driver.name}</span>
                      <span className="font-medium text-neutral-800">
                        {driver.share}%
                      </span>
                    </div>
                    <div className="mt-1 h-1 overflow-hidden rounded-full bg-neutral-100">
                      <div
                        className="h-full rounded-full bg-sky-500"
                        style={{ width: `${driver.share * 2.6}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="rounded-xl border border-sky-100 bg-sky-50/60 p-5">
              <p className="text-sm font-semibold text-sky-900">
                The conversation to have
              </p>
              <p className="mt-2 text-xs leading-relaxed text-sky-800">
                Ardent is 92 hours over on revision rounds alone. That is a
                scope conversation, not a relationship problem, and it is easier
                to have now than at renewal.
              </p>
            </div>
          </div>
        </div>
      </div>
    </SoftShell>
  );
}
