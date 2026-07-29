import { CompactShell } from "../../CompactShell";

const NAV_ITEMS = [
  { icon: "◆", label: "Punch List" },
  { icon: "◎", label: "Site Map" },
  { icon: "▣", label: "Handover" },
  { icon: "◈", label: "Trades" },
  { icon: "⚙", label: "Settings" },
];

const KPIS = [
  { label: "Open Defects", value: "142", note: "Across 3 floors" },
  { label: "Overdue", value: "28", note: "Past agreed date" },
  { label: "Avg Close Time", value: "4.2 days", note: "Down from 11" },
  { label: "Handover Blockers", value: "9", note: "Critical path" },
];

const DEFECTS = [
  {
    ref: "PL-0412",
    description: "Ceiling grid misaligned, east corridor",
    trade: "Ceilings",
    zone: "L3 East",
    age: 2,
    status: "Open",
  },
  {
    ref: "PL-0398",
    description: "Socket plate damaged, meeting room 4",
    trade: "Electrical",
    zone: "L2 North",
    age: 6,
    status: "In progress",
  },
  {
    ref: "PL-0377",
    description: "Paint finish inconsistent above skirting",
    trade: "Decoration",
    zone: "L1 Reception",
    age: 9,
    status: "Overdue",
  },
  {
    ref: "PL-0361",
    description: "Door closer not adjusted, fire door FD12",
    trade: "Joinery",
    zone: "L2 Core",
    age: 12,
    status: "Overdue",
  },
  {
    ref: "PL-0344",
    description: "Sealant missing at vanity junction",
    trade: "Plumbing",
    zone: "L3 WC",
    age: 3,
    status: "Awaiting sign-off",
  },
];

const TRADES = [
  { name: "Electrical", open: 34, overdue: 8 },
  { name: "Decoration", open: 31, overdue: 11 },
  { name: "Joinery", open: 27, overdue: 5 },
  { name: "Ceilings", open: 22, overdue: 2 },
  { name: "Plumbing", open: 18, overdue: 1 },
  { name: "Flooring", open: 10, overdue: 1 },
];

function statusBadge(status: string): string {
  if (status === "Overdue") return "bg-red-50 text-red-700";
  if (status === "In progress") return "bg-amber-50 text-amber-700";
  if (status === "Awaiting sign-off") return "bg-blue-50 text-blue-700";
  return "bg-neutral-100 text-neutral-600";
}

export function SPPunchList() {
  return (
    <CompactShell
      productName="SitePunch"
      accentColor="stone"
      navItems={NAV_ITEMS}
      activeNav="Punch List"
      title="Punch List"
      subtitle="Meridian Court, Level 1 to 3"
      breadcrumb={["SitePunch", "Meridian Court", "Punch List"]}
      actions={
        <button className="rounded-md bg-stone-700 px-3 py-1.5 text-xs font-medium text-white">
          Add defect
        </button>
      }
    >
      <div className="space-y-5">
        <div className="grid grid-cols-2 gap-3 lg:grid-cols-4">
          {KPIS.map((kpi) => (
            <div
              key={kpi.label}
              className="rounded-lg border border-neutral-200 bg-white p-4"
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

        <div className="grid gap-4 lg:grid-cols-4">
          <div className="rounded-lg border border-neutral-200 bg-white p-5 lg:col-span-3">
            <p className="text-sm font-semibold text-neutral-900">
              Open defects
            </p>
            <div className="mt-4 space-y-2.5">
              {DEFECTS.map((defect) => (
                <div
                  key={defect.ref}
                  className="flex flex-wrap items-center justify-between gap-2 border-b border-neutral-100 pb-2.5 last:border-0 last:pb-0"
                >
                  <div className="min-w-0 flex-1">
                    <p className="text-sm text-neutral-800">
                      {defect.description}
                    </p>
                    <p className="text-[11px] text-neutral-500">
                      {defect.ref} · {defect.trade} · {defect.zone} ·{" "}
                      {defect.age}d open
                    </p>
                  </div>
                  <span
                    className={`rounded-full px-2 py-0.5 text-[10px] font-medium ${statusBadge(defect.status)}`}
                  >
                    {defect.status}
                  </span>
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-lg border border-neutral-200 bg-white p-5">
            <p className="text-sm font-semibold text-neutral-900">By trade</p>
            <div className="mt-4 space-y-3">
              {TRADES.map((trade) => (
                <div key={trade.name}>
                  <div className="flex items-center justify-between text-xs">
                    <span className="text-neutral-600">{trade.name}</span>
                    <span className="font-medium text-neutral-800">
                      {trade.open}
                    </span>
                  </div>
                  {trade.overdue > 0 && (
                    <p className="text-[10px] text-red-600">
                      {trade.overdue} overdue
                    </p>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </CompactShell>
  );
}
