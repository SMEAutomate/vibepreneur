import { DarkShell } from "../../DarkShell";

const NAV_ITEMS = [
  { icon: "◆", label: "Rights Grid" },
  { icon: "◎", label: "Deals" },
  { icon: "▣", label: "Revenue" },
  { icon: "◈", label: "Catalogue" },
  { icon: "⚙", label: "Settings" },
];

const DEALS = [
  {
    licensee: "Nordvision AB",
    titles: 12,
    territory: "Nordics",
    mg: "€84,000",
    term: "Mar 26 to Mar 29",
    status: "Active",
    owed: "€0",
  },
  {
    licensee: "Canal Sud Distribution",
    titles: 6,
    territory: "France",
    mg: "€52,000",
    term: "Jan 26 to Jan 28",
    status: "Reporting late",
    owed: "€18,400",
  },
  {
    licensee: "Brightwater Media",
    titles: 21,
    territory: "UK & Ireland",
    mg: "£110,000",
    term: "Sep 25 to Sep 28",
    status: "Active",
    owed: "£6,200",
  },
  {
    licensee: "Iberia Screen Group",
    titles: 9,
    territory: "Spain, Portugal",
    mg: "€41,000",
    term: "Jun 24 to Jun 26",
    status: "Expiring",
    owed: "€0",
  },
  {
    licensee: "Ostwind Filmvertrieb",
    titles: 14,
    territory: "DACH",
    mg: "€96,000",
    term: "Nov 25 to Nov 28",
    status: "Active",
    owed: "€2,900",
  },
];

const OBLIGATIONS = [
  { item: "Canal Sud Q2 statement", due: "14 days overdue", severity: "High" },
  {
    item: "Brightwater audit rights window",
    due: "Closes 12 Aug",
    severity: "Medium",
  },
  { item: "Iberia renewal notice", due: "Due 30 Apr 2026", severity: "Medium" },
  {
    item: "Nordvision marketing spend proof",
    due: "Due 30 Sep",
    severity: "Low",
  },
];

function statusColor(status: string): string {
  if (status === "Active") return "text-emerald-400";
  if (status === "Expiring") return "text-amber-400";
  return "text-red-400";
}

function severityColor(severity: string): string {
  if (severity === "High") return "text-red-400";
  if (severity === "Medium") return "text-amber-400";
  return "text-neutral-400";
}

export function RDDealTracker() {
  return (
    <DarkShell
      productName="RightsDesk"
      accentColor="red"
      navItems={NAV_ITEMS}
      activeNav="Deals"
      title="Deal Tracker"
      subtitle="Active licensing agreements"
      actions={
        <button className="rounded-md bg-red-600 px-3 py-1.5 text-xs font-medium text-white">
          New deal
        </button>
      }
    >
      <div className="grid gap-4 lg:grid-cols-3">
        <div className="rounded-lg border border-neutral-700 bg-neutral-800/60 p-5 lg:col-span-2">
          <p className="text-sm font-semibold text-neutral-100">
            Licensing agreements
          </p>
          <div className="mt-4 space-y-3">
            {DEALS.map((deal) => (
              <div
                key={deal.licensee}
                className="border-b border-neutral-700/50 pb-3 last:border-0 last:pb-0"
              >
                <div className="flex flex-wrap items-center justify-between gap-2">
                  <div>
                    <p className="text-sm font-medium text-neutral-100">
                      {deal.licensee}
                    </p>
                    <p className="text-[11px] text-neutral-500">
                      {deal.titles} titles · {deal.territory} · {deal.term}
                    </p>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="text-right">
                      <p className="text-[10px] uppercase tracking-wider text-neutral-500">
                        MG
                      </p>
                      <p className="text-sm text-neutral-200">{deal.mg}</p>
                    </div>
                    <div className="text-right">
                      <p className="text-[10px] uppercase tracking-wider text-neutral-500">
                        Owed
                      </p>
                      <p
                        className={`text-sm ${deal.owed.endsWith("0") && deal.owed.length <= 3 ? "text-neutral-400" : "text-amber-400"}`}
                      >
                        {deal.owed}
                      </p>
                    </div>
                    <span
                      className={`w-24 text-right text-xs font-medium ${statusColor(deal.status)}`}
                    >
                      {deal.status}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="space-y-4">
          <div className="rounded-lg border border-neutral-700 bg-neutral-800/60 p-5">
            <p className="text-sm font-semibold text-neutral-100">
              Reporting obligations
            </p>
            <div className="mt-4 space-y-3">
              {OBLIGATIONS.map((obligation) => (
                <div key={obligation.item}>
                  <p className="text-sm text-neutral-200">{obligation.item}</p>
                  <p
                    className={`text-[11px] ${severityColor(obligation.severity)}`}
                  >
                    {obligation.due}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-lg border border-red-500/30 bg-red-500/10 p-5">
            <p className="text-sm font-semibold text-red-300">Action needed</p>
            <p className="mt-2 text-xs leading-relaxed text-red-200/80">
              Canal Sud is fourteen days late on the Q2 statement with €18,400
              outstanding. The agreement allows a written notice at fifteen
              days, which starts the cure period.
            </p>
          </div>
        </div>
      </div>
    </DarkShell>
  );
}
