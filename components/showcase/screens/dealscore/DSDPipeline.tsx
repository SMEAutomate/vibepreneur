import { DarkShell } from "../../DarkShell";

const NAV_ITEMS = [
  { icon: "◆", label: "Pipeline" },
  { icon: "◎", label: "Deals" },
  { icon: "▣", label: "Forecast" },
  { icon: "◈", label: "Insights" },
  { icon: "⚙", label: "Settings" },
];

const STAGES = [
  {
    name: "Discovery",
    deals: 12,
    value: "$840K",
    color: "bg-emerald-100 text-emerald-700",
  },
  {
    name: "Evaluation",
    deals: 8,
    value: "$620K",
    color: "bg-emerald-200 text-emerald-800",
  },
  {
    name: "Proposal",
    deals: 5,
    value: "$380K",
    color: "bg-emerald-300 text-emerald-800",
  },
  {
    name: "Negotiation",
    deals: 3,
    value: "$290K",
    color: "bg-emerald-400 text-emerald-900",
  },
  {
    name: "Closed Won",
    deals: 2,
    value: "$180K",
    color: "bg-emerald-500 text-white",
  },
];

const FORECAST = [
  { label: "Committed", value: "$180K", color: "bg-emerald-500" },
  { label: "Best Case", value: "$470K", color: "bg-emerald-300" },
  { label: "Pipeline", value: "$2.1M", color: "bg-emerald-100" },
];

const DEALS = [
  {
    name: "Enterprise License",
    company: "Acme Corp",
    score: 92,
    stage: "Negotiation",
    value: "$120K",
    close: "Mar 15",
    risk: "Low",
  },
  {
    name: "Platform Migration",
    company: "Globex Inc",
    score: 78,
    stage: "Proposal",
    value: "$85K",
    close: "Mar 28",
    risk: "Medium",
  },
  {
    name: "Annual Renewal",
    company: "Initech",
    score: 85,
    stage: "Negotiation",
    value: "$95K",
    close: "Apr 2",
    risk: "Low",
  },
  {
    name: "Pilot Program",
    company: "Soylent Corp",
    score: 54,
    stage: "Discovery",
    value: "$45K",
    close: "Apr 18",
    risk: "High",
  },
  {
    name: "Team Expansion",
    company: "Umbrella Ltd",
    score: 71,
    stage: "Evaluation",
    value: "$62K",
    close: "Apr 10",
    risk: "Medium",
  },
  {
    name: "Integration Suite",
    company: "Stark Industries",
    score: 88,
    stage: "Proposal",
    value: "$110K",
    close: "Mar 22",
    risk: "Low",
  },
  {
    name: "Data Platform",
    company: "Wayne Enterprises",
    score: 43,
    stage: "Discovery",
    value: "$78K",
    close: "May 5",
    risk: "High",
  },
  {
    name: "Security Add-on",
    company: "Oscorp",
    score: 66,
    stage: "Evaluation",
    value: "$38K",
    close: "Apr 25",
    risk: "Medium",
  },
];

function scoreColor(score: number): string {
  if (score >= 80) return "text-emerald-600";
  if (score >= 60) return "text-amber-600";
  return "text-red-600";
}

function riskBadge(risk: string): string {
  if (risk === "Low") return "bg-emerald-100 text-emerald-700";
  if (risk === "Medium") return "bg-amber-100 text-amber-700";
  return "bg-red-100 text-red-700";
}

export function DSDPipeline() {
  return (
    <DarkShell
      productName="DealScore"
      accentColor="emerald"
      navItems={NAV_ITEMS}
      activeNav="Pipeline"
      title="Pipeline Overview"
      subtitle="30 active deals across 5 stages"
      actions={
        <button className="rounded bg-emerald-500 px-3 py-1.5 text-xs font-medium text-white">
          + New deal
        </button>
      }
    >
      <div className="rounded-md border border-neutral-200 bg-white p-4">
        <div className="flex items-center justify-between">
          <h2 className="text-xs font-semibold text-neutral-800">
            Forecast Summary
          </h2>
        </div>
        <div className="mt-3 flex gap-6">
          {FORECAST.map((f) => (
            <div key={f.label}>
              <p className="text-[10px] text-neutral-400">{f.label}</p>
              <div className="mt-0.5 flex items-center gap-2">
                <span className={`h-2 w-2 rounded-full ${f.color}`} />
                <span className="text-sm font-bold text-emerald-600">
                  {f.value}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="mt-4 flex gap-2">
        {STAGES.map((s) => (
          <div key={s.name} className={`flex-1 rounded-md p-3 ${s.color}`}>
            <p className="text-[10px] font-medium uppercase tracking-wide">
              {s.name}
            </p>
            <p className="mt-1 text-lg font-bold">{s.deals}</p>
            <p className="text-[10px] opacity-80">{s.value}</p>
          </div>
        ))}
      </div>

      <div className="mt-4 rounded-md border border-neutral-200 bg-white">
        <table className="w-full text-xs">
          <thead>
            <tr className="border-b border-neutral-200 text-left text-[10px] font-semibold uppercase tracking-wider text-neutral-500">
              <th className="px-4 py-2.5">Deal</th>
              <th className="px-3 py-2.5">Company</th>
              <th className="px-3 py-2.5">Score</th>
              <th className="px-3 py-2.5">Stage</th>
              <th className="px-3 py-2.5">Value</th>
              <th className="px-3 py-2.5">Close</th>
              <th className="px-3 py-2.5">Risk</th>
            </tr>
          </thead>
          <tbody>
            {DEALS.map((d) => (
              <tr
                key={d.name}
                className="border-b border-neutral-100 last:border-0 even:bg-neutral-50"
              >
                <td className="px-4 py-2.5 font-medium text-neutral-900">
                  {d.name}
                </td>
                <td className="px-3 py-2.5 text-neutral-600">{d.company}</td>
                <td className={`px-3 py-2.5 font-bold ${scoreColor(d.score)}`}>
                  {d.score}
                </td>
                <td className="px-3 py-2.5 text-neutral-600">{d.stage}</td>
                <td className="px-3 py-2.5 font-medium text-neutral-800">
                  {d.value}
                </td>
                <td className="px-3 py-2.5 text-neutral-500">{d.close}</td>
                <td className="px-3 py-2.5">
                  <span
                    className={`rounded px-2 py-0.5 text-[10px] font-medium ${riskBadge(d.risk)}`}
                  >
                    {d.risk}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </DarkShell>
  );
}
