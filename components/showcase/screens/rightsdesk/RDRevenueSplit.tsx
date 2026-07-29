import { DarkShell } from "../../DarkShell";

const NAV_ITEMS = [
  { icon: "◆", label: "Rights Grid" },
  { icon: "◎", label: "Deals" },
  { icon: "▣", label: "Revenue" },
  { icon: "◈", label: "Catalogue" },
  { icon: "⚙", label: "Settings" },
];

const SUMMARY = [
  { label: "Gross Receipts", value: "€412,800", note: "Period to date" },
  { label: "Distribution Fee", value: "€82,560", note: "20% retained" },
  { label: "Payable To Holders", value: "€268,140", note: "Across 34 parties" },
  { label: "Unrecouped", value: "€61,200", note: "4 titles" },
];

const TITLES = [
  {
    name: "The Longest Winter",
    gross: "€118,400",
    recouped: true,
    holders: [
      { name: "Producer", share: 50, amount: "€44,400" },
      { name: "Director", share: 15, amount: "€13,320" },
      { name: "Co-financier", share: 25, amount: "€22,200" },
      { name: "Talent pool", share: 10, amount: "€8,880" },
    ],
  },
  {
    name: "Harbour Lights",
    gross: "€76,200",
    recouped: true,
    holders: [
      { name: "Producer", share: 60, amount: "€34,290" },
      { name: "Co-producer", share: 30, amount: "€17,145" },
      { name: "Talent pool", share: 10, amount: "€5,715" },
    ],
  },
];

const UNRECOUPED = [
  { name: "Sunfall", advance: "€40,000", recovered: "€12,400" },
  { name: "Quiet Territory", advance: "€25,000", recovered: "€9,800" },
  { name: "Broken Compass", advance: "€18,000", recovered: "€4,100" },
  { name: "Northern Passage", advance: "€22,000", recovered: "€17,500" },
];

export function RDRevenueSplit() {
  return (
    <DarkShell
      productName="RightsDesk"
      accentColor="red"
      navItems={NAV_ITEMS}
      activeNav="Revenue"
      title="Revenue Split"
      subtitle="Participation statements, H1 2026"
      actions={
        <button className="rounded-md bg-red-600 px-3 py-1.5 text-xs font-medium text-white">
          Issue statements
        </button>
      }
    >
      <div className="space-y-5">
        <div className="grid grid-cols-2 gap-3 lg:grid-cols-4">
          {SUMMARY.map((item) => (
            <div
              key={item.label}
              className="rounded-lg border border-neutral-700 bg-neutral-800/60 p-4"
            >
              <p className="text-[10px] font-medium uppercase tracking-wider text-neutral-500">
                {item.label}
              </p>
              <p className="mt-1 text-lg font-semibold text-neutral-100">
                {item.value}
              </p>
              <p className="mt-1 text-[11px] text-neutral-500">{item.note}</p>
            </div>
          ))}
        </div>

        <div className="grid gap-4 lg:grid-cols-3">
          <div className="space-y-4 lg:col-span-2">
            {TITLES.map((title) => (
              <div
                key={title.name}
                className="rounded-lg border border-neutral-700 bg-neutral-800/60 p-5"
              >
                <div className="flex items-center justify-between">
                  <p className="text-sm font-semibold text-neutral-100">
                    {title.name}
                  </p>
                  <div className="flex items-center gap-3">
                    <span className="text-sm text-neutral-300">
                      {title.gross}
                    </span>
                    <span className="rounded-full bg-emerald-500/20 px-2 py-0.5 text-[10px] font-medium text-emerald-300">
                      Recouped
                    </span>
                  </div>
                </div>
                <div className="mt-4 space-y-2">
                  {title.holders.map((holder) => (
                    <div key={holder.name}>
                      <div className="flex items-center justify-between text-xs">
                        <span className="text-neutral-400">{holder.name}</span>
                        <span className="text-neutral-200">
                          {holder.amount}
                          <span className="ml-2 text-neutral-500">
                            {holder.share}%
                          </span>
                        </span>
                      </div>
                      <div className="mt-1 h-1 overflow-hidden rounded-full bg-neutral-700">
                        <div
                          className="h-full rounded-full bg-red-500"
                          style={{ width: `${holder.share}%` }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <div className="rounded-lg border border-neutral-700 bg-neutral-800/60 p-5">
            <p className="text-sm font-semibold text-neutral-100">
              Unrecouped advances
            </p>
            <div className="mt-4 space-y-3">
              {UNRECOUPED.map((title) => {
                const advance = Number(title.advance.replace(/[^0-9]/g, ""));
                const recovered = Number(
                  title.recovered.replace(/[^0-9]/g, "")
                );
                const pct = Math.round((recovered / advance) * 100);
                return (
                  <div key={title.name}>
                    <div className="flex items-center justify-between text-xs">
                      <span className="text-neutral-300">{title.name}</span>
                      <span className="text-neutral-400">{pct}%</span>
                    </div>
                    <div className="mt-1 h-1.5 overflow-hidden rounded-full bg-neutral-700">
                      <div
                        className="h-full rounded-full bg-amber-500"
                        style={{ width: `${pct}%` }}
                      />
                    </div>
                    <p className="mt-0.5 text-[10px] text-neutral-500">
                      {title.recovered} of {title.advance}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </DarkShell>
  );
}
