import { DarkShell } from "../../DarkShell";

const NAV_ITEMS = [
  { icon: "◆", label: "Rights Grid" },
  { icon: "◎", label: "Deals" },
  { icon: "▣", label: "Revenue" },
  { icon: "◈", label: "Catalogue" },
  { icon: "⚙", label: "Settings" },
];

const KPIS = [
  { label: "Titles Tracked", value: "312", note: "Across 40 territories" },
  { label: "Windows Expiring", value: "47", note: "Next 90 days" },
  { label: "Available To License", value: "128", note: "Unsold rights" },
  { label: "Conflict Alerts", value: "3", note: "Overlapping grants" },
];

const TERRITORIES = ["UK", "DE", "FR", "ES", "IT", "NL", "SE", "PL"];

const TITLES = [
  {
    name: "The Longest Winter",
    states: ["L", "L", "A", "A", "E", "L", "A", "A"],
  },
  { name: "Harbour Lights", states: ["L", "E", "L", "A", "A", "A", "L", "X"] },
  { name: "Sunfall", states: ["A", "A", "A", "L", "L", "E", "A", "A"] },
  { name: "Quiet Territory", states: ["L", "L", "L", "L", "A", "A", "E", "A"] },
  { name: "Broken Compass", states: ["E", "A", "L", "A", "L", "L", "A", "L"] },
  {
    name: "Northern Passage",
    states: ["A", "L", "E", "L", "A", "X", "L", "A"],
  },
];

const LEGEND = [
  {
    key: "L",
    label: "Licensed",
    className: "bg-emerald-500/25 text-emerald-300",
  },
  {
    key: "A",
    label: "Available",
    className: "bg-neutral-700 text-neutral-400",
  },
  {
    key: "E",
    label: "Expiring 90d",
    className: "bg-amber-500/25 text-amber-300",
  },
  { key: "X", label: "Conflict", className: "bg-red-500/25 text-red-300" },
];

function cellClass(state: string): string {
  const entry = LEGEND.find((l) => l.key === state);
  return entry ? entry.className : "bg-neutral-700 text-neutral-400";
}

export function RDRightsGrid() {
  return (
    <DarkShell
      productName="RightsDesk"
      accentColor="red"
      navItems={NAV_ITEMS}
      activeNav="Rights Grid"
      title="Rights Grid"
      subtitle="Title by territory by window"
      actions={
        <button className="rounded-md bg-red-600 px-3 py-1.5 text-xs font-medium text-white">
          Export availability
        </button>
      }
    >
      <div className="space-y-5">
        <div className="grid grid-cols-2 gap-3 lg:grid-cols-4">
          {KPIS.map((kpi) => (
            <div
              key={kpi.label}
              className="rounded-lg border border-neutral-700 bg-neutral-800/60 p-4"
            >
              <p className="text-[10px] font-medium uppercase tracking-wider text-neutral-500">
                {kpi.label}
              </p>
              <p className="mt-1 text-xl font-semibold text-neutral-100">
                {kpi.value}
              </p>
              <p className="mt-1 text-[11px] text-neutral-500">{kpi.note}</p>
            </div>
          ))}
        </div>

        <div className="rounded-lg border border-neutral-700 bg-neutral-800/60 p-5">
          <div className="flex flex-wrap items-center justify-between gap-3">
            <p className="text-sm font-semibold text-neutral-100">
              Availability grid, theatrical window
            </p>
            <div className="flex flex-wrap gap-3">
              {LEGEND.map((entry) => (
                <span
                  key={entry.key}
                  className="flex items-center gap-1.5 text-[10px] text-neutral-400"
                >
                  <span className={`h-3 w-3 rounded ${entry.className}`} />
                  {entry.label}
                </span>
              ))}
            </div>
          </div>

          <div className="mt-4 overflow-x-auto">
            <table className="w-full min-w-[560px]">
              <thead>
                <tr>
                  <th className="pb-2 text-left text-[10px] font-medium uppercase tracking-wider text-neutral-500">
                    Title
                  </th>
                  {TERRITORIES.map((territory) => (
                    <th
                      key={territory}
                      className="pb-2 text-center text-[10px] font-medium uppercase tracking-wider text-neutral-500"
                    >
                      {territory}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {TITLES.map((title) => (
                  <tr key={title.name}>
                    <td className="py-1.5 pr-4 text-sm text-neutral-200">
                      {title.name}
                    </td>
                    {title.states.map((state, i) => (
                      <td key={TERRITORIES[i]} className="px-1 py-1.5">
                        <div
                          className={`flex h-7 items-center justify-center rounded text-[10px] font-semibold ${cellClass(state)}`}
                        >
                          {state}
                        </div>
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <p className="mt-4 text-xs text-neutral-500">
            Harbour Lights carries a conflict in Sweden: two grants overlap by
            four months. Northern Passage is unsold in the Netherlands with the
            festival window closing in six weeks.
          </p>
        </div>
      </div>
    </DarkShell>
  );
}
