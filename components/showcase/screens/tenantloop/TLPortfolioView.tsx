import { ProductShell } from "../../ProductShell";

const NAV_ITEMS = [
  { icon: "◆", label: "Renewals" },
  { icon: "◎", label: "Tenants" },
  { icon: "▣", label: "Portfolio" },
  { icon: "◈", label: "Reports" },
  { icon: "⚙", label: "Settings" },
];

const METRICS = [
  { label: "Occupancy", value: "91.4%", note: "Target 93%" },
  { label: "WALT", value: "4.2 yrs", note: "Down 0.4 yrs" },
  { label: "Rent Roll", value: "£38.6M", note: "Across 640 units" },
  { label: "Top 5 Concentration", value: "22%", note: "Of total income" },
];

const PROPERTIES = [
  {
    name: "Cornmarket House",
    occupancy: 96,
    walt: 4.8,
    income: "£6.2M",
    risk: "Medium",
  },
  {
    name: "Kingsway Point",
    occupancy: 88,
    walt: 3.4,
    income: "£5.1M",
    risk: "High",
  },
  {
    name: "Aldgate Exchange",
    occupancy: 94,
    walt: 4.1,
    income: "£7.4M",
    risk: "Medium",
  },
  {
    name: "The Foundry",
    occupancy: 82,
    walt: 2.9,
    income: "£3.8M",
    risk: "High",
  },
  {
    name: "Regent Wharf",
    occupancy: 97,
    walt: 5.6,
    income: "£9.2M",
    risk: "Low",
  },
  {
    name: "Bevis Court",
    occupancy: 93,
    walt: 4.4,
    income: "£6.9M",
    risk: "Low",
  },
];

const SECTORS = [
  { name: "Professional services", share: 34 },
  { name: "Technology", share: 24 },
  { name: "Healthcare", share: 16 },
  { name: "Creative", share: 14 },
  { name: "Financial", share: 12 },
];

function riskColor(risk: string): string {
  if (risk === "High") return "text-red-600";
  if (risk === "Medium") return "text-amber-600";
  return "text-emerald-600";
}

export function TLPortfolioView() {
  return (
    <ProductShell
      productName="TenantLoop"
      accentColor="blue"
      navItems={NAV_ITEMS}
      activeNav="Portfolio"
      title="Portfolio View"
      subtitle="Managed portfolio, July 2026"
      actions={
        <button className="rounded-lg border border-neutral-200 px-3 py-1.5 text-xs font-medium text-neutral-700">
          Export for board
        </button>
      }
    >
      <div className="space-y-5">
        <div className="grid grid-cols-2 gap-3 lg:grid-cols-4">
          {METRICS.map((metric) => (
            <div
              key={metric.label}
              className="rounded-xl border border-neutral-200 bg-white p-4"
            >
              <p className="text-[10px] font-medium uppercase tracking-wider text-neutral-400">
                {metric.label}
              </p>
              <p className="mt-1 text-xl font-semibold text-neutral-900">
                {metric.value}
              </p>
              <p className="mt-1 text-[11px] text-neutral-500">{metric.note}</p>
            </div>
          ))}
        </div>

        <div className="grid gap-4 lg:grid-cols-3">
          <div className="rounded-xl border border-neutral-200 bg-white p-5 lg:col-span-2">
            <p className="text-sm font-semibold text-neutral-900">Properties</p>
            <div className="mt-4 overflow-x-auto">
              <table className="w-full min-w-[480px] text-left">
                <thead>
                  <tr className="border-b border-neutral-100">
                    {["Property", "Occupancy", "WALT", "Income", "Risk"].map(
                      (h) => (
                        <th
                          key={h}
                          className="pb-2 text-[10px] font-medium uppercase tracking-wider text-neutral-400"
                        >
                          {h}
                        </th>
                      )
                    )}
                  </tr>
                </thead>
                <tbody>
                  {PROPERTIES.map((property) => (
                    <tr
                      key={property.name}
                      className="border-b border-neutral-50"
                    >
                      <td className="py-2.5 text-sm text-neutral-800">
                        {property.name}
                      </td>
                      <td className="py-2.5 text-sm text-neutral-600">
                        {property.occupancy}%
                      </td>
                      <td className="py-2.5 text-sm text-neutral-600">
                        {property.walt} yrs
                      </td>
                      <td className="py-2.5 text-sm text-neutral-800">
                        {property.income}
                      </td>
                      <td
                        className={`py-2.5 text-xs font-medium ${riskColor(property.risk)}`}
                      >
                        {property.risk}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          <div className="rounded-xl border border-neutral-200 bg-white p-5">
            <p className="text-sm font-semibold text-neutral-900">
              Income by tenant sector
            </p>
            <div className="mt-4 space-y-3">
              {SECTORS.map((sector) => (
                <div key={sector.name}>
                  <div className="flex items-center justify-between text-xs">
                    <span className="text-neutral-600">{sector.name}</span>
                    <span className="font-medium text-neutral-800">
                      {sector.share}%
                    </span>
                  </div>
                  <div className="mt-1.5 h-1.5 overflow-hidden rounded-full bg-neutral-100">
                    <div
                      className="h-full rounded-full bg-blue-500"
                      style={{ width: `${sector.share * 2.5}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </ProductShell>
  );
}
