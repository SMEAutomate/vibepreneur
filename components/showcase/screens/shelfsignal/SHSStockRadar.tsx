import { TopBarShell } from "../../TopBarShell";

const NAV_ITEMS = [
  { icon: "◆", label: "Stock Radar" },
  { icon: "◎", label: "Stores" },
  { icon: "▣", label: "Reorder" },
  { icon: "◈", label: "Suppliers" },
  { icon: "⚙", label: "Settings" },
];

const KPIS = [
  { label: "Predicted Stockouts", value: "38", note: "Next 14 days" },
  { label: "Revenue at Risk", value: "$71.4K", note: "If unaddressed" },
  { label: "Availability", value: "94.2%", note: "Up 1.8 pts" },
  { label: "Overstock Value", value: "$126K", note: "Slow movers" },
];

const AT_RISK = [
  {
    sku: "BEV-2210",
    name: "Sparkling Water 12pk",
    stores: 14,
    cover: "3 days",
    risk: "$9.2K",
    urgency: "Critical",
  },
  {
    sku: "SNK-1184",
    name: "Sea Salt Crisps 150g",
    stores: 9,
    cover: "5 days",
    risk: "$6.8K",
    urgency: "Critical",
  },
  {
    sku: "HOM-3092",
    name: "Laundry Pods 40ct",
    stores: 11,
    cover: "6 days",
    risk: "$5.4K",
    urgency: "High",
  },
  {
    sku: "BEV-2401",
    name: "Cold Brew 750ml",
    stores: 6,
    cover: "8 days",
    risk: "$3.9K",
    urgency: "High",
  },
  {
    sku: "PET-0771",
    name: "Grain Free Dog Food 5kg",
    stores: 4,
    cover: "11 days",
    risk: "$2.1K",
    urgency: "Watch",
  },
];

function urgencyBadge(urgency: string): string {
  if (urgency === "Critical") return "bg-red-50 text-red-700";
  if (urgency === "High") return "bg-amber-50 text-amber-700";
  return "bg-neutral-100 text-neutral-600";
}

export function SHSStockRadar() {
  return (
    <TopBarShell
      productName="ShelfSignal"
      accentColor="rose"
      navItems={NAV_ITEMS}
      activeNav="Stock Radar"
      title="Stock Radar"
      subtitle="14 day stockout forecast"
      actions={
        <button className="rounded-md bg-rose-600 px-3 py-1.5 text-xs font-medium text-white">
          Generate orders
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

        <div className="rounded-lg border border-neutral-200 bg-white p-5">
          <p className="text-sm font-semibold text-neutral-900">
            Predicted stockouts by lost revenue
          </p>
          <div className="mt-4 overflow-x-auto">
            <table className="w-full min-w-[600px] text-left">
              <thead>
                <tr className="border-b border-neutral-100">
                  {[
                    "SKU",
                    "Product",
                    "Stores",
                    "Days cover",
                    "Revenue at risk",
                    "",
                  ].map((h) => (
                    <th
                      key={h}
                      className="pb-2 text-[10px] font-medium uppercase tracking-wider text-neutral-400"
                    >
                      {h}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {AT_RISK.map((item) => (
                  <tr key={item.sku} className="border-b border-neutral-50">
                    <td className="py-2.5 font-mono text-xs text-neutral-500">
                      {item.sku}
                    </td>
                    <td className="py-2.5 text-sm text-neutral-800">
                      {item.name}
                    </td>
                    <td className="py-2.5 text-sm text-neutral-600">
                      {item.stores}
                    </td>
                    <td className="py-2.5 text-sm text-neutral-600">
                      {item.cover}
                    </td>
                    <td className="py-2.5 text-sm font-medium text-neutral-900">
                      {item.risk}
                    </td>
                    <td className="py-2.5">
                      <span
                        className={`rounded-full px-2 py-0.5 text-[10px] font-medium ${urgencyBadge(item.urgency)}`}
                      >
                        {item.urgency}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </TopBarShell>
  );
}
