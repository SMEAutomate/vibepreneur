import { TopBarShell } from "../../TopBarShell";

const NAV_ITEMS = [
  { icon: "◆", label: "Dashboard" },
  { icon: "◎", label: "Campaigns" },
  { icon: "▣", label: "Channels" },
  { icon: "◈", label: "Attribution" },
  { icon: "⚙", label: "Settings" },
];

const CHANNELS = [
  "LinkedIn Ads",
  "Google Search",
  "Content Syndication",
  "Webinars",
  "Email Nurture",
] as const;

const METRICS: {
  label: string;
  values: string[];
  best: number;
  worst: number;
}[] = [
  {
    label: "Monthly Spend",
    values: ["$42.8K", "$38.4K", "$18.2K", "$12.6K", "$8.1K"],
    best: 4,
    worst: 0,
  },
  {
    label: "Cost per Lead",
    values: ["$137", "$79", "$92", "$81", "$91"],
    best: 1,
    worst: 0,
  },
  {
    label: "Pipeline Generated",
    values: ["$2.1M", "$1.9M", "$1.4M", "$1.6M", "$1.1M"],
    best: 0,
    worst: 4,
  },
  {
    label: "Close Rate",
    values: ["18.2%", "12.4%", "21.7%", "24.3%", "16.8%"],
    best: 3,
    worst: 1,
  },
  {
    label: "CAC",
    values: ["$4,280", "$3,840", "$2,600", "$1,575", "$1,620"],
    best: 3,
    worst: 0,
  },
  {
    label: "LTV:CAC",
    values: ["8.2x", "9.1x", "13.5x", "22.3x", "21.6x"],
    best: 3,
    worst: 0,
  },
  {
    label: "Avg Time to Close",
    values: ["34 days", "41 days", "28 days", "22 days", "38 days"],
    best: 3,
    worst: 1,
  },
];

export function CIQChannelComparison() {
  return (
    <TopBarShell
      productName="ChannelIQ"
      accentColor="indigo"
      navItems={NAV_ITEMS}
      activeNav="Channels"
      title="Channel Comparison"
      subtitle="Side-by-side performance analysis across all active channels"
      actions={
        <button className="rounded-md bg-indigo-600 px-3 py-1.5 text-xs font-medium text-white">
          Download report
        </button>
      }
    >
      <div className="space-y-6">
        <div className="rounded-lg border border-neutral-200/60 bg-white p-5 shadow-sm">
          <h2 className="text-xs font-semibold uppercase tracking-wider text-neutral-400">
            Performance Matrix
          </h2>
          <div className="mt-4 overflow-x-auto">
            <table className="w-full text-left text-xs">
              <thead>
                <tr className="border-b border-neutral-100">
                  <th className="pb-3 pr-4 text-xs font-semibold uppercase tracking-wider text-neutral-400">
                    Metric
                  </th>
                  {CHANNELS.map((ch) => (
                    <th
                      key={ch}
                      className="pb-3 pr-4 text-xs font-semibold uppercase tracking-wider text-neutral-400"
                    >
                      {ch}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody className="divide-y divide-neutral-100">
                {METRICS.map((row) => (
                  <tr key={row.label}>
                    <td className="py-3 pr-4 font-medium text-neutral-700">
                      {row.label}
                    </td>
                    {row.values.map((val, i) => {
                      let bg = "";
                      if (i === row.best)
                        bg = "bg-emerald-50 text-emerald-700 font-semibold";
                      else if (i === row.worst) bg = "bg-red-50 text-red-600";
                      else bg = "text-indigo-600";
                      return (
                        <td key={i} className="py-3 pr-4">
                          <span
                            className={`inline-block rounded-md px-2 py-0.5 text-xs ${bg}`}
                          >
                            {val}
                          </span>
                        </td>
                      );
                    })}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="mt-4 flex items-center gap-4 text-[10px] text-neutral-400">
            <span className="flex items-center gap-1">
              <span className="inline-block h-2 w-2 rounded-full bg-emerald-400" />
              Best in category
            </span>
            <span className="flex items-center gap-1">
              <span className="inline-block h-2 w-2 rounded-full bg-red-400" />
              Lowest in category
            </span>
          </div>
        </div>

        <div className="rounded-lg border border-indigo-200/60 bg-indigo-50/40 p-5 shadow-sm">
          <h2 className="text-xs font-semibold uppercase tracking-wider text-indigo-600">
            Top Performer: Webinars
          </h2>
          <p className="mt-3 text-sm leading-relaxed text-indigo-700">
            Webinars lead in 4 of 7 metrics including close rate (24.3%), CAC
            ($1,575), LTV:CAC ratio (22.3x), and time to close (22 days).
            Despite lower absolute pipeline volume, this channel delivers the
            highest efficiency and strongest conversion rates. Consider
            increasing budget allocation from $12.6K to $20K/month to capture
            more volume at similar efficiency.
          </p>
          <div className="mt-4 grid grid-cols-3 gap-3">
            <div className="rounded-lg border border-neutral-200/60 bg-white p-3 shadow-sm">
              <p className="text-[10px] font-semibold uppercase tracking-wider text-neutral-400">
                Best metric
              </p>
              <p className="mt-1 text-sm font-semibold text-indigo-600">
                22.3x LTV:CAC
              </p>
            </div>
            <div className="rounded-lg border border-neutral-200/60 bg-white p-3 shadow-sm">
              <p className="text-[10px] font-semibold uppercase tracking-wider text-neutral-400">
                Efficiency rank
              </p>
              <p className="mt-1 text-sm font-semibold text-indigo-600">
                #1 of 5 channels
              </p>
            </div>
            <div className="rounded-lg border border-neutral-200/60 bg-white p-3 shadow-sm">
              <p className="text-[10px] font-semibold uppercase tracking-wider text-neutral-400">
                Recommended action
              </p>
              <p className="mt-1 text-sm font-semibold text-indigo-600">
                Increase budget 59%
              </p>
            </div>
          </div>
        </div>
      </div>
    </TopBarShell>
  );
}
