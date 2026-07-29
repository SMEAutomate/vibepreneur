import { SoftShell } from "../../SoftShell";

const NAV_ITEMS = [
  { icon: "◆", label: "Dashboard" },
  { icon: "◎", label: "Change Log" },
  { icon: "▣", label: "Margin" },
  { icon: "◈", label: "Accounts" },
  { icon: "⚙", label: "Settings" },
];

const REQUESTS = [
  {
    ref: "CR-2214",
    account: "Ardent Financial",
    request: "Fourth revision round on Q3 campaign assets",
    estimate: "14h",
    raisedBy: "S. Merrick",
    age: "2d",
    status: "Awaiting approval",
  },
  {
    ref: "CR-2209",
    account: "Wexford Retail Group",
    request: "Additional regional variants, 6 markets",
    estimate: "22h",
    raisedBy: "J. Achebe",
    age: "4d",
    status: "Approved, billable",
  },
  {
    ref: "CR-2201",
    account: "Ardent Financial",
    request: "Weekly stakeholder review added to cadence",
    estimate: "18h / quarter",
    raisedBy: "S. Merrick",
    age: "9d",
    status: "Absorbed",
  },
  {
    ref: "CR-2196",
    account: "Pinehurst Labs",
    request: "Ad hoc performance report, board request",
    estimate: "6h",
    raisedBy: "N. Halvard",
    age: "11d",
    status: "Approved, billable",
  },
  {
    ref: "CR-2188",
    account: "Calder & Voss",
    request: "Social resizing for two extra placements",
    estimate: "4h",
    raisedBy: "T. Bright",
    age: "16d",
    status: "Absorbed",
  },
];

const TOTALS = [
  { label: "Logged this quarter", value: "64 requests" },
  { label: "Approved as billable", value: "28 (44%)" },
  { label: "Absorbed", value: "31 (48%)" },
  { label: "Declined", value: "5 (8%)" },
];

function statusBadge(status: string): string {
  if (status === "Approved, billable") return "bg-emerald-50 text-emerald-700";
  if (status === "Awaiting approval") return "bg-amber-50 text-amber-700";
  return "bg-neutral-100 text-neutral-600";
}

export function SGChangeLog() {
  return (
    <SoftShell
      productName="ScopeGuard"
      accentColor="sky"
      navItems={NAV_ITEMS}
      activeNav="Change Log"
      title="Change Log"
      subtitle="Out-of-scope requests, captured at the ask"
      actions={
        <button className="rounded-lg bg-sky-600 px-3 py-1.5 text-xs font-medium text-white">
          Log request
        </button>
      }
    >
      <div className="space-y-5">
        <div className="grid grid-cols-2 gap-3 lg:grid-cols-4">
          {TOTALS.map((total) => (
            <div
              key={total.label}
              className="rounded-xl border border-sky-100 bg-white p-4"
            >
              <p className="text-[10px] font-medium uppercase tracking-wider text-neutral-400">
                {total.label}
              </p>
              <p className="mt-1 text-lg font-semibold text-neutral-900">
                {total.value}
              </p>
            </div>
          ))}
        </div>

        <div className="rounded-xl border border-sky-100 bg-white p-5">
          <p className="text-sm font-semibold text-neutral-900">
            Recent requests
          </p>
          <div className="mt-4 space-y-3">
            {REQUESTS.map((request) => (
              <div
                key={request.ref}
                className="border-b border-neutral-100 pb-3 last:border-0 last:pb-0"
              >
                <div className="flex flex-wrap items-start justify-between gap-2">
                  <div className="min-w-0 flex-1">
                    <p className="text-sm text-neutral-800">
                      {request.request}
                    </p>
                    <p className="text-[11px] text-neutral-500">
                      {request.ref} · {request.account} · raised by{" "}
                      {request.raisedBy} · {request.age} ago
                    </p>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="text-sm font-medium text-neutral-900">
                      {request.estimate}
                    </span>
                    <span
                      className={`rounded-full px-2 py-0.5 text-[10px] font-medium ${statusBadge(request.status)}`}
                    >
                      {request.status}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <p className="mt-4 text-xs text-neutral-500">
            Absorbed requests are not failures. They are a record of goodwill
            that becomes evidence at renewal, provided somebody logged them.
          </p>
        </div>
      </div>
    </SoftShell>
  );
}
