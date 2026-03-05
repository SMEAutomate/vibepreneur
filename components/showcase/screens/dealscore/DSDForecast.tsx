import { DarkShell } from "../../DarkShell";

const NAV_ITEMS = [
  { icon: "◆", label: "Pipeline" },
  { icon: "◎", label: "Deals" },
  { icon: "▣", label: "Forecast" },
  { icon: "◈", label: "Insights" },
  { icon: "⚙", label: "Settings" },
];

const KPIS = [
  { label: "Projected Close", value: "$1.2M" },
  { label: "Win Rate", value: "34%" },
  { label: "Avg Deal Size", value: "$48K" },
  { label: "Pipeline Velocity", value: "42 days" },
];

const MONTHS = [
  { month: "Oct", won: 85, pipeline: 140 },
  { month: "Nov", won: 110, pipeline: 180 },
  { month: "Dec", won: 95, pipeline: 160 },
  { month: "Jan", won: 130, pipeline: 210 },
  { month: "Feb", won: 120, pipeline: 190 },
  { month: "Mar", won: 0, pipeline: 240 },
];

const BUCKETS = [
  { range: "0-20%", deals: 8, value: "$320K" },
  { range: "21-40%", deals: 6, value: "$280K" },
  { range: "41-60%", deals: 5, value: "$240K" },
  { range: "61-80%", deals: 4, value: "$190K" },
  { range: "81-100%", deals: 3, value: "$170K" },
];

const SCENARIOS = [
  { name: "Conservative", value: "$840K", winRate: "25%", active: false },
  { name: "Base", value: "$1.2M", winRate: "34%", active: true },
  { name: "Optimistic", value: "$1.6M", winRate: "45%", active: false },
];

export function DSDForecast() {
  const maxBar = Math.max(...MONTHS.map((m) => m.pipeline));

  return (
    <DarkShell
      productName="DealScore"
      accentColor="emerald"
      navItems={NAV_ITEMS}
      activeNav="Forecast"
      title="Revenue Forecast"
      subtitle="Q1 2026 projections based on pipeline analysis"
      actions={
        <button className="rounded bg-emerald-500 px-3 py-1.5 text-xs font-medium text-white">
          Export report
        </button>
      }
    >
      <div className="grid grid-cols-4 gap-3">
        {KPIS.map((k) => (
          <div
            key={k.label}
            className="rounded-md border border-neutral-200 bg-white p-4"
          >
            <p className="text-[10px] text-neutral-400">{k.label}</p>
            <p className="mt-1 text-xl font-bold text-emerald-600">{k.value}</p>
          </div>
        ))}
      </div>

      <div className="mt-4 grid gap-4 lg:grid-cols-2">
        <div className="rounded-md border border-neutral-200 bg-white p-4">
          <h2 className="text-xs font-semibold text-neutral-800">
            Monthly Forecast
          </h2>
          <div className="mt-2 flex items-center gap-4">
            <div className="flex items-center gap-1.5">
              <span className="h-2 w-2 rounded-sm bg-emerald-500" />
              <span className="text-[10px] text-neutral-500">Won</span>
            </div>
            <div className="flex items-center gap-1.5">
              <span className="h-2 w-2 rounded-sm bg-emerald-200" />
              <span className="text-[10px] text-neutral-500">Pipeline</span>
            </div>
          </div>
          <div className="mt-4 flex items-end gap-3">
            {MONTHS.map((m) => (
              <div
                key={m.month}
                className="flex flex-1 flex-col items-center gap-1"
              >
                <div className="flex w-full flex-col items-center gap-0.5">
                  <div
                    className="w-full rounded-t bg-emerald-200"
                    style={{ height: `${(m.pipeline / maxBar) * 140}px` }}
                  />
                  <div
                    className="w-full rounded-t bg-emerald-500"
                    style={{ height: `${(m.won / maxBar) * 140}px` }}
                  />
                </div>
                <span className="text-[10px] text-neutral-400">{m.month}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="rounded-md border border-neutral-200 bg-white p-4">
          <h2 className="text-xs font-semibold text-neutral-800">
            Win Probability Distribution
          </h2>
          <table className="mt-3 w-full text-xs">
            <thead>
              <tr className="border-b border-neutral-200 text-left text-[10px] font-semibold uppercase tracking-wider text-neutral-500">
                <th className="pb-2">Range</th>
                <th className="pb-2">Deals</th>
                <th className="pb-2">Value</th>
                <th className="w-1/3 pb-2">Distribution</th>
              </tr>
            </thead>
            <tbody>
              {BUCKETS.map((b) => (
                <tr
                  key={b.range}
                  className="border-b border-neutral-100 last:border-0 even:bg-neutral-50"
                >
                  <td className="py-2 font-medium text-neutral-700">
                    {b.range}
                  </td>
                  <td className="py-2 text-neutral-600">{b.deals}</td>
                  <td className="py-2 font-medium text-emerald-600">
                    {b.value}
                  </td>
                  <td className="py-2">
                    <div className="h-1.5 w-full rounded bg-neutral-100">
                      <div
                        className="h-1.5 rounded bg-emerald-500"
                        style={{ width: `${(b.deals / 8) * 100}%` }}
                      />
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      <div className="mt-4">
        <h2 className="text-xs font-semibold text-neutral-800">
          Scenario Analysis
        </h2>
        <div className="mt-3 grid grid-cols-3 gap-3">
          {SCENARIOS.map((s) => (
            <div
              key={s.name}
              className={`rounded-md border p-4 text-center ${
                s.active
                  ? "border-emerald-300 bg-emerald-50/50"
                  : "border-neutral-200 bg-white"
              }`}
            >
              <p className="text-[10px] uppercase tracking-wide text-neutral-400">
                {s.name}
              </p>
              <p className="mt-1 text-2xl font-bold text-emerald-600">
                {s.value}
              </p>
              <p className="mt-0.5 text-[10px] text-neutral-400">
                Win rate: {s.winRate}
              </p>
            </div>
          ))}
        </div>
      </div>
    </DarkShell>
  );
}
