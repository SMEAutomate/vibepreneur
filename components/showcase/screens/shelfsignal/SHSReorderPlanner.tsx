import { TopBarShell } from "../../TopBarShell";

const NAV_ITEMS = [
  { icon: "◆", label: "Stock Radar" },
  { icon: "◎", label: "Stores" },
  { icon: "▣", label: "Reorder" },
  { icon: "◈", label: "Suppliers" },
  { icon: "⚙", label: "Settings" },
];

const ORDERS = [
  {
    supplier: "Halden Beverages",
    lines: 12,
    units: "4,320",
    cost: "$18,240",
    lead: "3 days",
    status: "Ready",
  },
  {
    supplier: "Corby Snack Co",
    lines: 8,
    units: "2,880",
    cost: "$9,110",
    lead: "5 days",
    status: "Ready",
  },
  {
    supplier: "Marlow Household",
    lines: 15,
    units: "1,950",
    cost: "$12,470",
    lead: "7 days",
    status: "Below MOQ",
  },
  {
    supplier: "Northfield Chilled",
    lines: 6,
    units: "1,140",
    cost: "$6,880",
    lead: "2 days",
    status: "Ready",
  },
];

const SUMMARY = [
  { label: "Total order value", value: "$46,700" },
  { label: "Stockouts prevented", value: "31 of 38" },
  { label: "Revenue protected", value: "$58.2K" },
  { label: "Cash tied up", value: "+9 days" },
];

function statusBadge(status: string): string {
  if (status === "Ready") return "bg-emerald-50 text-emerald-700";
  return "bg-amber-50 text-amber-700";
}

export function SHSReorderPlanner() {
  return (
    <TopBarShell
      productName="ShelfSignal"
      accentColor="rose"
      navItems={NAV_ITEMS}
      activeNav="Reorder"
      title="Reorder Planner"
      subtitle="Week commencing 27 July 2026"
      actions={
        <button className="rounded-md bg-rose-600 px-3 py-1.5 text-xs font-medium text-white">
          Approve all ready
        </button>
      }
    >
      <div className="space-y-5">
        <div className="grid grid-cols-2 gap-3 lg:grid-cols-4">
          {SUMMARY.map((item) => (
            <div
              key={item.label}
              className="rounded-lg border border-neutral-200 bg-white p-4"
            >
              <p className="text-[10px] font-medium uppercase tracking-wider text-neutral-400">
                {item.label}
              </p>
              <p className="mt-1 text-lg font-semibold text-neutral-900">
                {item.value}
              </p>
            </div>
          ))}
        </div>

        <div className="rounded-lg border border-neutral-200 bg-white p-5">
          <p className="text-sm font-semibold text-neutral-900">
            Suggested purchase orders
          </p>
          <div className="mt-4 space-y-3">
            {ORDERS.map((order) => (
              <div
                key={order.supplier}
                className="flex flex-wrap items-center justify-between gap-3 rounded-lg border border-neutral-100 p-3"
              >
                <div className="min-w-0">
                  <p className="text-sm font-medium text-neutral-800">
                    {order.supplier}
                  </p>
                  <p className="text-[11px] text-neutral-500">
                    {order.lines} lines · {order.units} units · lead{" "}
                    {order.lead}
                  </p>
                </div>
                <div className="flex items-center gap-4">
                  <span className="text-sm font-semibold text-neutral-900">
                    {order.cost}
                  </span>
                  <span
                    className={`rounded-full px-2 py-0.5 text-[10px] font-medium ${statusBadge(order.status)}`}
                  >
                    {order.status}
                  </span>
                </div>
              </div>
            ))}
          </div>
          <p className="mt-4 text-xs text-neutral-500">
            Marlow Household sits 340 units below the minimum order quantity.
            Adding the four slow movers flagged in overstock clears it without
            new spend.
          </p>
        </div>
      </div>
    </TopBarShell>
  );
}
