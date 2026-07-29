import { DarkShell } from "../../DarkShell";

const NAV_ITEMS = [
  { icon: "◆", label: "Benchmark" },
  { icon: "◎", label: "Carriers" },
  { icon: "▣", label: "Trends" },
  { icon: "◈", label: "Contracts" },
  { icon: "⚙", label: "Settings" },
];

const CARRIERS = [
  {
    name: "Ridgeway Transport",
    lanes: 84,
    rate: 71,
    onTime: 96,
    acceptance: 94,
    claims: 0.4,
  },
  {
    name: "Kestrel Freight Lines",
    lanes: 62,
    rate: 58,
    onTime: 92,
    acceptance: 88,
    claims: 0.7,
  },
  {
    name: "Bellamy Logistics",
    lanes: 51,
    rate: 84,
    onTime: 89,
    acceptance: 76,
    claims: 1.4,
  },
  {
    name: "Halcyon Carriers",
    lanes: 44,
    rate: 46,
    onTime: 97,
    acceptance: 91,
    claims: 0.3,
  },
  {
    name: "Torrance Haulage",
    lanes: 38,
    rate: 66,
    onTime: 84,
    acceptance: 71,
    claims: 2.1,
  },
];

function metricColor(value: number, goodAbove: number): string {
  if (value >= goodAbove) return "text-emerald-400";
  if (value >= goodAbove - 8) return "text-amber-400";
  return "text-red-400";
}

export function LPCarrierScorecard() {
  return (
    <DarkShell
      productName="LaneParity"
      accentColor="slate"
      navItems={NAV_ITEMS}
      activeNav="Carriers"
      title="Carrier Scorecard"
      subtitle="Trailing twelve months"
      actions={
        <button className="rounded-md border border-neutral-600 px-3 py-1.5 text-xs font-medium text-neutral-300">
          Export scorecard
        </button>
      }
    >
      <div className="space-y-4">
        {CARRIERS.map((carrier) => (
          <div
            key={carrier.name}
            className="rounded-lg border border-neutral-700 bg-neutral-800/60 p-5"
          >
            <div className="flex flex-wrap items-center justify-between gap-3">
              <div>
                <p className="text-sm font-semibold text-neutral-100">
                  {carrier.name}
                </p>
                <p className="text-[11px] text-neutral-500">
                  {carrier.lanes} lanes awarded
                </p>
              </div>
              <div className="grid grid-cols-4 gap-6 text-right">
                <div>
                  <p className="text-[10px] uppercase tracking-wider text-neutral-500">
                    Rate pctile
                  </p>
                  <p
                    className={`text-sm font-semibold ${carrier.rate >= 75 ? "text-red-400" : carrier.rate >= 60 ? "text-amber-400" : "text-emerald-400"}`}
                  >
                    {carrier.rate}th
                  </p>
                </div>
                <div>
                  <p className="text-[10px] uppercase tracking-wider text-neutral-500">
                    On time
                  </p>
                  <p
                    className={`text-sm font-semibold ${metricColor(carrier.onTime, 94)}`}
                  >
                    {carrier.onTime}%
                  </p>
                </div>
                <div>
                  <p className="text-[10px] uppercase tracking-wider text-neutral-500">
                    Acceptance
                  </p>
                  <p
                    className={`text-sm font-semibold ${metricColor(carrier.acceptance, 90)}`}
                  >
                    {carrier.acceptance}%
                  </p>
                </div>
                <div>
                  <p className="text-[10px] uppercase tracking-wider text-neutral-500">
                    Claims
                  </p>
                  <p
                    className={`text-sm font-semibold ${carrier.claims <= 0.5 ? "text-emerald-400" : carrier.claims <= 1.2 ? "text-amber-400" : "text-red-400"}`}
                  >
                    {carrier.claims}%
                  </p>
                </div>
              </div>
            </div>
          </div>
        ))}

        <div className="rounded-lg border border-slate-600/40 bg-slate-800/40 p-5">
          <p className="text-sm font-semibold text-slate-200">
            Award recommendation
          </p>
          <p className="mt-2 text-xs leading-relaxed text-slate-400">
            Bellamy holds 51 lanes at the 84th rate percentile with 76%
            acceptance. Halcyon prices at the 46th with better service on every
            metric. Moving 20 lanes recovers an estimated $214K annually before
            any negotiation takes place.
          </p>
        </div>
      </div>
    </DarkShell>
  );
}
