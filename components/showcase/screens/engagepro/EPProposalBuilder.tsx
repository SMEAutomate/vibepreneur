import { SoftShell } from "../../SoftShell";

const NAV_ITEMS = [
  { icon: "◆", label: "Clients" },
  { icon: "◎", label: "Proposals" },
  { icon: "▣", label: "Engagements" },
  { icon: "◈", label: "Billing" },
  { icon: "⚙", label: "Settings" },
];

const SECTIONS = [
  {
    title: "Executive Summary",
    preview:
      "TechCorp is seeking a comprehensive digital transformation assessment to modernize their legacy infrastructure. This engagement will identify key opportunities for automation, cloud migration, and process improvement across their operations.",
  },
  {
    title: "Scope of Work",
    preview:
      "A full audit of existing technology stack, stakeholder interviews across five departments, gap analysis against industry benchmarks, and a prioritized transformation roadmap with cost projections.",
  },
  {
    title: "Approach & Methodology",
    preview:
      "We follow a three-phase methodology: Discovery (stakeholder interviews, system audits), Assessment (gap analysis, benchmarking), and Roadmap (prioritization, cost modeling, timeline planning).",
  },
  {
    title: "Timeline",
    preview:
      "8-week engagement beginning upon contract signature. Phase 1 runs weeks 1 through 2, Phase 2 covers weeks 3 through 6, and Phase 3 concludes in weeks 7 and 8.",
  },
  {
    title: "Team",
    preview:
      "Led by a senior digital strategist with two supporting consultants. A technical architect joins for the Assessment phase. All team members have 10+ years of enterprise transformation experience.",
  },
];

const PHASES = [
  {
    phase: "Phase 1: Discovery",
    description: "Stakeholder interviews, system audit",
    hours: 40,
    rate: 250,
    total: "$10,000",
  },
  {
    phase: "Phase 2: Assessment",
    description: "Gap analysis, benchmarking, evaluation",
    hours: 80,
    rate: 250,
    total: "$20,000",
  },
  {
    phase: "Phase 3: Roadmap",
    description: "Prioritization, cost modeling, planning",
    hours: 40,
    rate: 250,
    total: "$10,000",
  },
];

const TIMELINE_PHASES = [
  {
    label: "Discovery",
    weeks: "Weeks 1-2",
    width: "w-[25%]",
    color: "bg-blue-500",
  },
  {
    label: "Assessment",
    weeks: "Weeks 3-6",
    width: "w-[50%]",
    color: "bg-blue-400",
  },
  {
    label: "Roadmap",
    weeks: "Weeks 7-8",
    width: "w-[25%]",
    color: "bg-blue-300",
  },
];

export function EPProposalBuilder() {
  return (
    <SoftShell
      productName="EngagePro"
      accentColor="blue"
      navItems={NAV_ITEMS}
      activeNav="Proposals"
      title="Proposal Builder"
      subtitle="TechCorp, Digital Transformation Assessment"
      actions={
        <>
          <button className="rounded-xl border border-blue-200 px-4 py-2 text-xs font-medium text-blue-600">
            Preview PDF
          </button>
          <button className="rounded-xl bg-blue-600 px-4 py-2 text-xs font-medium text-white">
            Send proposal
          </button>
        </>
      }
    >
      <div className="grid gap-6 lg:grid-cols-2">
        <div className="space-y-4">
          {SECTIONS.map((s, i) => (
            <div
              key={s.title}
              className="rounded-xl border-2 border-dashed border-blue-200 p-5"
            >
              <div className="flex items-center gap-2">
                <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-blue-600 text-xs font-bold text-white">
                  {i + 1}
                </div>
                <h2 className="text-sm font-semibold text-neutral-900">
                  {s.title}
                </h2>
              </div>
              <p className="mt-3 text-xs leading-relaxed text-neutral-600">
                {s.preview}
              </p>
            </div>
          ))}
        </div>

        <div className="space-y-6">
          <div className="rounded-xl border border-blue-100/50 bg-white p-5 shadow-sm">
            <h2 className="text-sm font-semibold text-neutral-900">Pricing</h2>
            <table className="mt-4 w-full">
              <thead>
                <tr className="bg-blue-50 text-left text-[10px] font-medium uppercase tracking-wider text-blue-500">
                  <th className="rounded-l-lg px-3 py-2">Phase</th>
                  <th className="px-3 py-2">Hours</th>
                  <th className="px-3 py-2">Rate</th>
                  <th className="rounded-r-lg px-3 py-2 text-right">Total</th>
                </tr>
              </thead>
              <tbody>
                {PHASES.map((p) => (
                  <tr
                    key={p.phase}
                    className="border-b border-blue-50/50 last:border-0"
                  >
                    <td className="px-3 py-3">
                      <p className="text-xs font-medium text-neutral-800">
                        {p.phase}
                      </p>
                      <p className="mt-0.5 text-[10px] text-neutral-400">
                        {p.description}
                      </p>
                    </td>
                    <td className="px-3 py-3 font-mono text-xs text-neutral-600">
                      {p.hours}
                    </td>
                    <td className="px-3 py-3 font-mono text-xs text-neutral-600">
                      ${p.rate}/hr
                    </td>
                    <td className="px-3 py-3 text-right font-mono text-sm font-medium text-neutral-900">
                      {p.total}
                    </td>
                  </tr>
                ))}
              </tbody>
              <tfoot>
                <tr className="border-t-2 border-blue-100">
                  <td
                    colSpan={3}
                    className="px-3 pt-3 text-sm font-semibold text-neutral-900"
                  >
                    Total
                  </td>
                  <td className="px-3 pt-3 text-right font-mono text-lg font-bold text-neutral-900">
                    $40,000
                  </td>
                </tr>
              </tfoot>
            </table>
          </div>

          <div className="rounded-xl border border-blue-100/50 bg-white p-5 shadow-sm">
            <h2 className="text-sm font-semibold text-neutral-900">
              Engagement Timeline
            </h2>
            <p className="mt-1 text-xs text-neutral-500">8-week engagement</p>
            <div className="mt-4 flex gap-1">
              {TIMELINE_PHASES.map((t) => (
                <div
                  key={t.label}
                  className={`${t.width} ${t.color} flex h-4 items-center justify-center rounded-full`}
                >
                  <p className="text-[8px] font-bold text-white">{t.label}</p>
                </div>
              ))}
            </div>
            <div className="mt-2 flex gap-1">
              {TIMELINE_PHASES.map((t) => (
                <div key={t.label} className={`${t.width} text-center`}>
                  <p className="text-[10px] text-neutral-400">{t.weeks}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </SoftShell>
  );
}
