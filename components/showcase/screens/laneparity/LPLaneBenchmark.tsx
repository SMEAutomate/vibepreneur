import { DarkShell } from "../../DarkShell";

const NAV_ITEMS = [
  { icon: "◆", label: "Benchmark" },
  { icon: "◎", label: "Carriers" },
  { icon: "▣", label: "Trends" },
  { icon: "◈", label: "Contracts" },
  { icon: "⚙", label: "Settings" },
];

const KPIS = [
  { label: "Lanes Above Market", value: "84", note: "Of 412 active" },
  { label: "Overpay Exposure", value: "$1.84M", note: "Annualised" },
  { label: "Median Percentile", value: "58th", note: "Down from 66th" },
  { label: "Recovered YTD", value: "$612K", note: "11 renegotiations" },
];

const LANES = [
  {
    lane: "Chicago, IL → Dallas, TX",
    mode: "FTL Dry",
    rate: "$2,410",
    percentile: 88,
    exposure: "$184K",
  },
  {
    lane: "Newark, NJ → Atlanta, GA",
    mode: "FTL Dry",
    rate: "$1,980",
    percentile: 81,
    exposure: "$142K",
  },
  {
    lane: "Los Angeles, CA → Phoenix, AZ",
    mode: "FTL Reefer",
    rate: "$1,140",
    percentile: 74,
    exposure: "$96K",
  },
  {
    lane: "Memphis, TN → Columbus, OH",
    mode: "LTL",
    rate: "$860",
    percentile: 62,
    exposure: "$41K",
  },
  {
    lane: "Seattle, WA → Salt Lake City, UT",
    mode: "FTL Dry",
    rate: "$1,720",
    percentile: 41,
    exposure: "-",
  },
];

function percentileColor(percentile: number): string {
  if (percentile >= 80) return "text-red-400";
  if (percentile >= 65) return "text-amber-400";
  return "text-emerald-400";
}

export function LPLaneBenchmark() {
  return (
    <DarkShell
      productName="LaneParity"
      accentColor="slate"
      navItems={NAV_ITEMS}
      activeNav="Benchmark"
      title="Lane Benchmark"
      subtitle="Contract rates against market, Q3 2026"
      actions={
        <button className="rounded-md bg-slate-600 px-3 py-1.5 text-xs font-medium text-white">
          Build negotiation pack
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
          <p className="text-sm font-semibold text-neutral-100">
            Lanes ranked by overpay exposure
          </p>
          <div className="mt-4 overflow-x-auto">
            <table className="w-full min-w-[600px] text-left">
              <thead>
                <tr className="border-b border-neutral-700">
                  {["Lane", "Mode", "Your rate", "Percentile", "Exposure"].map(
                    (h) => (
                      <th
                        key={h}
                        className="pb-2 text-[10px] font-medium uppercase tracking-wider text-neutral-500"
                      >
                        {h}
                      </th>
                    )
                  )}
                </tr>
              </thead>
              <tbody>
                {LANES.map((lane) => (
                  <tr
                    key={lane.lane}
                    className="border-b border-neutral-700/50"
                  >
                    <td className="py-2.5 text-sm text-neutral-200">
                      {lane.lane}
                    </td>
                    <td className="py-2.5 text-xs text-neutral-400">
                      {lane.mode}
                    </td>
                    <td className="py-2.5 text-sm text-neutral-300">
                      {lane.rate}
                    </td>
                    <td
                      className={`py-2.5 text-sm font-semibold ${percentileColor(lane.percentile)}`}
                    >
                      {lane.percentile}th
                    </td>
                    <td className="py-2.5 text-sm text-neutral-300">
                      {lane.exposure}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="mt-4 text-xs text-neutral-500">
            Percentile is your contracted rate against comparable movements on
            the same lane, mode, and equipment type over the trailing 90 days.
          </p>
        </div>
      </div>
    </DarkShell>
  );
}
