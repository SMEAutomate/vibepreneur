import { TopBarShell } from "../../TopBarShell";

const NAV_ITEMS = [
  { icon: "◆", label: "Stock Radar" },
  { icon: "◎", label: "Stores" },
  { icon: "▣", label: "Reorder" },
  { icon: "◈", label: "Suppliers" },
  { icon: "⚙", label: "Settings" },
];

const STORES = [
  {
    name: "Ashford High Street",
    availability: 97,
    sellThrough: 82,
    drift: "On plan",
  },
  {
    name: "Brackenfield Retail Park",
    availability: 95,
    sellThrough: 78,
    drift: "On plan",
  },
  { name: "Carlton Mews", availability: 92, sellThrough: 71, drift: "Watch" },
  {
    name: "Dunmore Central",
    availability: 88,
    sellThrough: 64,
    drift: "Off plan",
  },
  {
    name: "Eastvale Square",
    availability: 84,
    sellThrough: 59,
    drift: "Off plan",
  },
  { name: "Fenwick Row", availability: 96, sellThrough: 80, drift: "On plan" },
];

const CATEGORIES = [
  { name: "Beverages", availability: 96 },
  { name: "Snacks", availability: 93 },
  { name: "Household", availability: 89 },
  { name: "Chilled", availability: 85 },
  { name: "Pet", availability: 91 },
];

function driftColor(drift: string): string {
  if (drift === "On plan") return "text-emerald-600";
  if (drift === "Watch") return "text-amber-600";
  return "text-red-600";
}

export function SHSStorePerformance() {
  return (
    <TopBarShell
      productName="ShelfSignal"
      accentColor="rose"
      navItems={NAV_ITEMS}
      activeNav="Stores"
      title="Store Performance"
      subtitle="Availability and sell-through by location"
      actions={
        <button className="rounded-md border border-neutral-200 px-3 py-1.5 text-xs font-medium text-neutral-700">
          Last 4 weeks
        </button>
      }
    >
      <div className="grid gap-4 lg:grid-cols-5">
        <div className="rounded-lg border border-neutral-200 bg-white p-5 lg:col-span-3">
          <p className="text-sm font-semibold text-neutral-900">
            Location scorecard
          </p>
          <div className="mt-4 space-y-3">
            {STORES.map((store) => (
              <div
                key={store.name}
                className="border-b border-neutral-100 pb-3 last:border-0 last:pb-0"
              >
                <div className="flex items-center justify-between">
                  <p className="text-sm font-medium text-neutral-800">
                    {store.name}
                  </p>
                  <span
                    className={`text-xs font-medium ${driftColor(store.drift)}`}
                  >
                    {store.drift}
                  </span>
                </div>
                <div className="mt-2 flex items-center gap-4">
                  <div className="flex-1">
                    <div className="flex justify-between text-[10px] text-neutral-400">
                      <span>Availability</span>
                      <span>{store.availability}%</span>
                    </div>
                    <div className="mt-1 h-1.5 overflow-hidden rounded-full bg-neutral-100">
                      <div
                        className="h-full rounded-full bg-rose-500"
                        style={{ width: `${store.availability}%` }}
                      />
                    </div>
                  </div>
                  <div className="flex-1">
                    <div className="flex justify-between text-[10px] text-neutral-400">
                      <span>Sell-through</span>
                      <span>{store.sellThrough}%</span>
                    </div>
                    <div className="mt-1 h-1.5 overflow-hidden rounded-full bg-neutral-100">
                      <div
                        className="h-full rounded-full bg-neutral-400"
                        style={{ width: `${store.sellThrough}%` }}
                      />
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="space-y-4 lg:col-span-2">
          <div className="rounded-lg border border-neutral-200 bg-white p-5">
            <p className="text-sm font-semibold text-neutral-900">
              Availability by category
            </p>
            <div className="mt-4 space-y-3">
              {CATEGORIES.map((category) => (
                <div
                  key={category.name}
                  className="flex items-center justify-between text-xs"
                >
                  <span className="text-neutral-600">{category.name}</span>
                  <span className="font-medium text-neutral-800">
                    {category.availability}%
                  </span>
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-lg border border-rose-100 bg-rose-50/60 p-5">
            <p className="text-sm font-semibold text-rose-900">
              Where to look first
            </p>
            <p className="mt-2 text-xs leading-relaxed text-rose-800">
              Dunmore Central and Eastvale Square account for 41% of predicted
              lost revenue. Both drifted after the delivery schedule changed in
              May. Chilled is the category driving it.
            </p>
          </div>
        </div>
      </div>
    </TopBarShell>
  );
}
