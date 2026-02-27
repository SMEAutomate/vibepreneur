import { AppShell } from "../AppShell";

const keywords = [
  {
    keyword: "onboarding automation",
    volume: "4,400",
    difficulty: 42,
    intent: "Commercial",
    position: "-",
    content: "Pillar page",
  },
  {
    keyword: "employee onboarding checklist",
    volume: "14,800",
    difficulty: 35,
    intent: "Informational",
    position: "#12",
    content: "Blog post + lead magnet",
  },
  {
    keyword: "onboarding software for small business",
    volume: "2,900",
    difficulty: 38,
    intent: "Commercial",
    position: "-",
    content: "Landing page",
  },
  {
    keyword: "bamboohr alternative",
    volume: "1,600",
    difficulty: 31,
    intent: "Commercial",
    position: "-",
    content: "Comparison page",
  },
  {
    keyword: "how to onboard new employees remotely",
    volume: "3,200",
    difficulty: 28,
    intent: "Informational",
    position: "#18",
    content: "Guide",
  },
  {
    keyword: "onboarding process template",
    volume: "6,600",
    difficulty: 33,
    intent: "Informational",
    position: "-",
    content: "Template kit (lead magnet)",
  },
  {
    keyword: "cost of bad onboarding",
    volume: "880",
    difficulty: 18,
    intent: "Informational",
    position: "#7",
    content: "Data-driven blog post",
  },
  {
    keyword: "onboarding compliance requirements 2026",
    volume: "720",
    difficulty: 14,
    intent: "Informational",
    position: "-",
    content: "Timely blog post",
  },
];

const difficultyColor = (d: number) =>
  d < 25
    ? "text-emerald-700 bg-emerald-50"
    : d < 40
      ? "text-amber-700 bg-amber-50"
      : "text-red-600 bg-red-50";

export function SEOKeywordPlanner() {
  return (
    <AppShell
      activeNav="Distribution"
      title="SEO Keyword Planner"
      subtitle="OnboardFlow. Organic growth strategy"
      actions={
        <button className="rounded-lg bg-brand-600 px-4 py-2 text-xs font-medium text-white">
          Export plan
        </button>
      }
    >
      <div className="grid gap-4 md:grid-cols-4">
        {[
          { label: "Target keywords", value: "8" },
          { label: "Avg difficulty", value: "30" },
          { label: "Total monthly volume", value: "35K" },
          { label: "Ranking keywords", value: "3" },
        ].map((m) => (
          <div
            key={m.label}
            className="rounded-2xl border border-neutral-200 bg-white p-5"
          >
            <p className="text-xs text-neutral-500">{m.label}</p>
            <p className="mt-2 text-2xl font-bold text-neutral-900">
              {m.value}
            </p>
          </div>
        ))}
      </div>

      <div className="mt-8 rounded-2xl border border-neutral-200 bg-white p-6">
        <h2 className="text-sm font-semibold text-neutral-900">
          Keyword Research
        </h2>
        <div className="mt-4">
          <div className="grid grid-cols-6 gap-2 border-b border-neutral-100 pb-2 text-[10px] font-medium uppercase tracking-wider text-neutral-400">
            <span className="col-span-2">Keyword</span>
            <span className="text-right">Volume</span>
            <span className="text-center">Difficulty</span>
            <span className="text-center">Position</span>
            <span>Content type</span>
          </div>
          {keywords.map((k) => (
            <div
              key={k.keyword}
              className="grid grid-cols-6 gap-2 border-b border-neutral-50 py-3 text-xs"
            >
              <div className="col-span-2">
                <p className="font-medium text-neutral-800">{k.keyword}</p>
                <span className="rounded-full bg-neutral-100 px-1.5 py-0.5 text-[10px] text-neutral-500">
                  {k.intent}
                </span>
              </div>
              <span className="text-right text-neutral-600">{k.volume}</span>
              <div className="text-center">
                <span
                  className={`rounded-full px-2 py-0.5 text-[10px] font-medium ${difficultyColor(k.difficulty)}`}
                >
                  {k.difficulty}
                </span>
              </div>
              <span className="text-center font-medium text-neutral-700">
                {k.position}
              </span>
              <span className="text-neutral-500">{k.content}</span>
            </div>
          ))}
        </div>
      </div>

      <div className="mt-6 rounded-2xl border border-brand-100 bg-brand-50/30 p-6">
        <h2 className="text-sm font-semibold text-brand-800">
          Content Roadmap
        </h2>
        <div className="mt-3 grid gap-3 md:grid-cols-3">
          {[
            {
              phase: "Month 1",
              focus: "Low-difficulty wins",
              pieces: "3 blog posts + 1 lead magnet",
            },
            {
              phase: "Month 2",
              focus: "Commercial intent pages",
              pieces: "2 comparison pages + 1 landing page",
            },
            {
              phase: "Month 3",
              focus: "Pillar content",
              pieces: "1 pillar page + 2 supporting articles",
            },
          ].map((p) => (
            <div key={p.phase} className="rounded-lg bg-white p-3">
              <p className="text-xs font-bold text-brand-700">{p.phase}</p>
              <p className="mt-1 text-xs font-medium text-brand-800">
                {p.focus}
              </p>
              <p className="mt-0.5 text-[10px] text-brand-600">{p.pieces}</p>
            </div>
          ))}
        </div>
      </div>
    </AppShell>
  );
}
