import { CompactShell } from "../../CompactShell";

const NAV_ITEMS = [
  { icon: "◆", label: "Lines" },
  { icon: "◎", label: "Changeovers" },
  { icon: "▣", label: "Capacity" },
  { icon: "◈", label: "Products" },
  { icon: "⚙", label: "Settings" },
];

const SCENARIO = [
  { label: "Current changeover share", value: "18.4%" },
  { label: "Top quartile benchmark", value: "12.3%" },
  { label: "Hours recoverable", value: "1,940 / yr" },
  { label: "Revenue equivalent", value: "$284K / yr" },
];

const ACTIONS = [
  {
    action: "Sequence bulk blends consecutively on Line 3",
    hours: 620,
    value: "$91K",
    capital: "None",
    effort: "Low",
  },
  {
    action: "Stage tooling kits before line stop across all lines",
    hours: 480,
    value: "$70K",
    capital: "$6K",
    effort: "Low",
  },
  {
    action: "Second CIP skid to remove contention",
    hours: 510,
    value: "$75K",
    capital: "$140K",
    effort: "High",
  },
  {
    action: "Calibration jig for Line 5 cartoner",
    hours: 330,
    value: "$48K",
    capital: "$18K",
    effort: "Medium",
  },
];

const QUARTERS = [
  { period: "Q3 25", pct: 21.2 },
  { period: "Q4 25", pct: 20.6 },
  { period: "Q1 26", pct: 19.8 },
  { period: "Q2 26", pct: 18.9 },
  { period: "Q3 26", pct: 18.4 },
];

function effortBadge(effort: string): string {
  if (effort === "Low") return "bg-emerald-50 text-emerald-700";
  if (effort === "Medium") return "bg-amber-50 text-amber-700";
  return "bg-red-50 text-red-700";
}

export function CYCapacityImpact() {
  return (
    <CompactShell
      productName="CycleTime"
      accentColor="lime"
      navItems={NAV_ITEMS}
      activeNav="Capacity"
      title="Capacity Impact"
      subtitle="Recoverable hours and what it takes"
      breadcrumb={["CycleTime", "Plant 2", "Capacity"]}
      actions={
        <button className="rounded-md bg-lime-700 px-3 py-1.5 text-xs font-medium text-white">
          Build business case
        </button>
      }
    >
      <div className="space-y-5">
        <div className="grid grid-cols-2 gap-3 lg:grid-cols-4">
          {SCENARIO.map((item) => (
            <div
              key={item.label}
              className="rounded-lg border border-neutral-200 bg-white p-4"
            >
              <p className="text-[10px] font-medium uppercase tracking-wider text-neutral-400">
                {item.label}
              </p>
              <p className="mt-1 text-xl font-semibold text-neutral-900">
                {item.value}
              </p>
            </div>
          ))}
        </div>

        <div className="grid gap-4 lg:grid-cols-3">
          <div className="rounded-lg border border-neutral-200 bg-white p-5 lg:col-span-2">
            <p className="text-sm font-semibold text-neutral-900">
              Improvement actions ranked by return
            </p>
            <div className="mt-4 space-y-3">
              {ACTIONS.map((action) => (
                <div
                  key={action.action}
                  className="rounded-lg border border-neutral-100 p-3"
                >
                  <div className="flex items-start justify-between gap-3">
                    <p className="text-sm text-neutral-800">{action.action}</p>
                    <span
                      className={`shrink-0 rounded-full px-2 py-0.5 text-[10px] font-medium ${effortBadge(action.effort)}`}
                    >
                      {action.effort}
                    </span>
                  </div>
                  <p className="mt-1.5 text-xs text-neutral-500">
                    {action.hours} hrs recovered ·{" "}
                    <span className="font-semibold text-emerald-600">
                      {action.value}
                    </span>{" "}
                    · capital {action.capital}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-lg border border-neutral-200 bg-white p-5">
            <p className="text-sm font-semibold text-neutral-900">
              Changeover share trend
            </p>
            <div className="mt-4 flex h-32 items-end gap-2">
              {QUARTERS.map((quarter) => (
                <div
                  key={quarter.period}
                  className="flex flex-1 flex-col items-center"
                >
                  <span className="mb-1 text-[9px] text-neutral-500">
                    {quarter.pct}
                  </span>
                  <div
                    className="w-full rounded-t bg-lime-600"
                    style={{ height: `${(quarter.pct / 22) * 100}%` }}
                  />
                  <span className="mt-1.5 text-[9px] text-neutral-400">
                    {quarter.period}
                  </span>
                </div>
              ))}
            </div>
            <p className="mt-3 text-[11px] text-neutral-500">
              Improving, but at 0.7 points per quarter the benchmark is nine
              quarters away. The two low-effort actions close most of the gap
              this year.
            </p>
          </div>
        </div>
      </div>
    </CompactShell>
  );
}
