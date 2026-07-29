import { CompactShell } from "../../CompactShell";

const NAV_ITEMS = [
  { icon: "◆", label: "Lines" },
  { icon: "◎", label: "Changeovers" },
  { icon: "▣", label: "Capacity" },
  { icon: "◈", label: "Products" },
  { icon: "⚙", label: "Settings" },
];

const KPIS = [
  { label: "Changeover Time", value: "18.4%", note: "Of available hours" },
  { label: "Hours Lost", value: "612", note: "This month" },
  { label: "Vs Benchmark", value: "+6.1 pts", note: "Top quartile 12.3%" },
  { label: "Recoverable", value: "$284K", note: "Annualised" },
];

const LINES = [
  {
    name: "Line 1, Fill & Seal",
    changeovers: 42,
    avgMins: 84,
    target: 55,
    scrap: "1.2%",
  },
  {
    name: "Line 2, Blister Pack",
    changeovers: 38,
    avgMins: 61,
    target: 50,
    scrap: "0.8%",
  },
  {
    name: "Line 3, Bulk Blend",
    changeovers: 21,
    avgMins: 148,
    target: 90,
    scrap: "2.4%",
  },
  {
    name: "Line 4, Labelling",
    changeovers: 56,
    avgMins: 34,
    target: 30,
    scrap: "0.4%",
  },
  {
    name: "Line 5, Cartoning",
    changeovers: 47,
    avgMins: 72,
    target: 45,
    scrap: "1.6%",
  },
];

function varianceColor(avg: number, target: number): string {
  const ratio = avg / target;
  if (ratio <= 1.1) return "text-emerald-600";
  if (ratio <= 1.4) return "text-amber-600";
  return "text-red-600";
}

export function CYLineOverview() {
  return (
    <CompactShell
      productName="CycleTime"
      accentColor="lime"
      navItems={NAV_ITEMS}
      activeNav="Lines"
      title="Line Overview"
      subtitle="Plant 2, Ostrava · July 2026"
      breadcrumb={["CycleTime", "Plant 2", "Lines"]}
      actions={
        <button className="rounded-md bg-lime-700 px-3 py-1.5 text-xs font-medium text-white">
          Compare plants
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
            Changeover performance by line
          </p>
          <div className="mt-4 space-y-4">
            {LINES.map((line) => (
              <div
                key={line.name}
                className="border-b border-neutral-100 pb-4 last:border-0 last:pb-0"
              >
                <div className="flex flex-wrap items-center justify-between gap-2">
                  <div>
                    <p className="text-sm font-medium text-neutral-800">
                      {line.name}
                    </p>
                    <p className="text-[11px] text-neutral-500">
                      {line.changeovers} changeovers · {line.scrap} scrap at
                      restart
                    </p>
                  </div>
                  <div className="text-right">
                    <p
                      className={`text-sm font-semibold ${varianceColor(line.avgMins, line.target)}`}
                    >
                      {line.avgMins} min
                    </p>
                    <p className="text-[10px] text-neutral-400">
                      target {line.target}
                    </p>
                  </div>
                </div>
                <div className="mt-2 h-1.5 overflow-hidden rounded-full bg-neutral-100">
                  <div
                    className="h-full rounded-full bg-lime-600"
                    style={{
                      width: `${Math.min((line.avgMins / 150) * 100, 100)}%`,
                    }}
                  />
                </div>
              </div>
            ))}
          </div>
          <p className="mt-4 text-xs text-neutral-500">
            Line 3 runs 65% over target on the longest changeover in the plant.
            Twenty-one events a month at 58 minutes of avoidable time is 20
            hours of capacity, before the scrap cost at restart.
          </p>
        </div>
      </div>
    </CompactShell>
  );
}
