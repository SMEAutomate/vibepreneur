import { DarkShell } from "../../DarkShell";

const NAV_ITEMS = [
  { icon: "◆", label: "Benchmark" },
  { icon: "◎", label: "Carriers" },
  { icon: "▣", label: "Trends" },
  { icon: "◈", label: "Contracts" },
  { icon: "⚙", label: "Settings" },
];

const CORRIDORS = [
  {
    name: "Midwest → Southeast",
    change: "+6.2%",
    direction: "up",
    pressure: "Tight",
  },
  {
    name: "Northeast → Southeast",
    change: "+4.1%",
    direction: "up",
    pressure: "Tight",
  },
  {
    name: "West Coast → Southwest",
    change: "-1.8%",
    direction: "down",
    pressure: "Loose",
  },
  {
    name: "Texas → Midwest",
    change: "+0.4%",
    direction: "flat",
    pressure: "Balanced",
  },
  {
    name: "Pacific NW → Mountain",
    change: "-3.6%",
    direction: "down",
    pressure: "Loose",
  },
];

const SERIES = [
  { month: "Feb", value: 62 },
  { month: "Mar", value: 66 },
  { month: "Apr", value: 71 },
  { month: "May", value: 74 },
  { month: "Jun", value: 79 },
  { month: "Jul", value: 84 },
];

const MAX = 90;

const RENEWALS = [
  {
    lane: "Chicago → Dallas",
    expires: "12 Sep 2026",
    advice: "Delay, market softening in Q4",
  },
  {
    lane: "Newark → Atlanta",
    expires: "30 Sep 2026",
    advice: "Renegotiate now, rising",
  },
  {
    lane: "LA → Phoenix",
    expires: "15 Oct 2026",
    advice: "Lock 12 months at current",
  },
];

function directionColor(direction: string): string {
  if (direction === "up") return "text-red-400";
  if (direction === "down") return "text-emerald-400";
  return "text-neutral-400";
}

export function LPRateTrends() {
  return (
    <DarkShell
      productName="LaneParity"
      accentColor="slate"
      navItems={NAV_ITEMS}
      activeNav="Trends"
      title="Rate Trends"
      subtitle="Directional movement by corridor"
      actions={
        <button className="rounded-md border border-neutral-600 px-3 py-1.5 text-xs font-medium text-neutral-300">
          Six months
        </button>
      }
    >
      <div className="grid gap-4 lg:grid-cols-2">
        <div className="rounded-lg border border-neutral-700 bg-neutral-800/60 p-5">
          <p className="text-sm font-semibold text-neutral-100">
            Midwest to Southeast dry van index
          </p>
          <div className="mt-5 flex h-40 items-end gap-3">
            {SERIES.map((point) => (
              <div
                key={point.month}
                className="flex flex-1 flex-col items-center"
              >
                <div
                  className="w-full rounded-t bg-slate-500"
                  style={{ height: `${(point.value / MAX) * 100}%` }}
                />
                <span className="mt-2 text-[10px] text-neutral-500">
                  {point.month}
                </span>
              </div>
            ))}
          </div>
          <p className="mt-4 text-xs text-neutral-500">
            Up 35% since February. Capacity exits and fuel have both
            contributed. Contracts renewing into this corridor before December
            will price at the top of the range.
          </p>
        </div>

        <div className="space-y-4">
          <div className="rounded-lg border border-neutral-700 bg-neutral-800/60 p-5">
            <p className="text-sm font-semibold text-neutral-100">
              Corridor movement
            </p>
            <div className="mt-4 space-y-3">
              {CORRIDORS.map((corridor) => (
                <div
                  key={corridor.name}
                  className="flex items-center justify-between border-b border-neutral-700/50 pb-2.5 last:border-0 last:pb-0"
                >
                  <div>
                    <p className="text-sm text-neutral-200">{corridor.name}</p>
                    <p className="text-[11px] text-neutral-500">
                      Capacity {corridor.pressure.toLowerCase()}
                    </p>
                  </div>
                  <span
                    className={`text-sm font-semibold ${directionColor(corridor.direction)}`}
                  >
                    {corridor.change}
                  </span>
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-lg border border-neutral-700 bg-neutral-800/60 p-5">
            <p className="text-sm font-semibold text-neutral-100">
              Renewal timing
            </p>
            <div className="mt-4 space-y-3">
              {RENEWALS.map((renewal) => (
                <div key={renewal.lane}>
                  <div className="flex items-center justify-between text-xs">
                    <span className="text-neutral-200">{renewal.lane}</span>
                    <span className="text-neutral-500">{renewal.expires}</span>
                  </div>
                  <p className="mt-0.5 text-[11px] text-slate-400">
                    {renewal.advice}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </DarkShell>
  );
}
