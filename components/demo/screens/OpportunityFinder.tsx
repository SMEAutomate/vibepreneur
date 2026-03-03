import { AppShell } from "../AppShell";
import { StaggerItem } from "../stagger-item";

const opportunities = [
  {
    title: "Manual onboarding workflows in mid-market HR",
    score: 87,
    urgency: "High",
    buyers: "VP People Ops",
    industry: "SaaS / Tech",
  },
  {
    title: "Compliance reporting for distributed finance teams",
    score: 79,
    urgency: "High",
    buyers: "Finance Directors",
    industry: "Financial Services",
  },
  {
    title: "Client handoff gaps in consulting firms",
    score: 74,
    urgency: "Medium",
    buyers: "Managing Partners",
    industry: "Professional Services",
  },
  {
    title: "Sales enablement content is outdated within weeks",
    score: 71,
    urgency: "Medium",
    buyers: "Sales Leaders",
    industry: "B2B SaaS",
  },
  {
    title: "New hire ramp time exceeds 90 days in enterprise",
    score: 68,
    urgency: "Medium",
    buyers: "L&D Managers",
    industry: "Enterprise",
  },
  {
    title: "Vendor evaluation takes 3+ months with no standard",
    score: 64,
    urgency: "Low",
    buyers: "Procurement Leads",
    industry: "Manufacturing",
  },
];

export function OpportunityFinder() {
  return (
    <AppShell
      activeNav="Opportunities"
      title="Opportunity Finder"
      subtitle="Problems detected from your experience and industry signals."
      actions={
        <button className="rounded-lg bg-brand-600 px-4 py-2 text-xs font-medium text-white">
          Refresh signals
        </button>
      }
    >
      <div className="mb-6 flex items-center gap-3">
        <div className="flex-1 rounded-lg border border-neutral-200 bg-white px-4 py-2">
          <input
            type="text"
            placeholder="Search opportunities..."
            className="w-full bg-transparent text-sm text-neutral-700 outline-none placeholder:text-neutral-400"
            readOnly
          />
        </div>
        <select className="rounded-lg border border-neutral-200 bg-white px-3 py-2 text-xs text-neutral-600">
          <option>All industries</option>
        </select>
        <select className="rounded-lg border border-neutral-200 bg-white px-3 py-2 text-xs text-neutral-600">
          <option>Sort: Score ↓</option>
        </select>
      </div>

      <div className="space-y-3">
        {opportunities.map((opp, i) => (
          <StaggerItem key={opp.title} index={i}>
            <div className="flex items-center gap-4 rounded-2xl border border-neutral-200 bg-white p-5 transition-shadow hover:shadow-sm">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-brand-50">
                <span className="text-sm font-bold text-brand-700">
                  {opp.score}
                </span>
              </div>
              <div className="flex-1">
                <p className="text-sm font-medium text-neutral-900">
                  {opp.title}
                </p>
                <div className="mt-1 flex gap-3 text-xs text-neutral-500">
                  <span>{opp.buyers}</span>
                  <span className="text-neutral-300">·</span>
                  <span>{opp.industry}</span>
                </div>
              </div>
              <span
                className={`rounded-full px-3 py-1 text-xs font-medium ${opp.urgency === "High" ? "bg-red-50 text-red-700" : opp.urgency === "Medium" ? "bg-amber-50 text-amber-700" : "bg-neutral-100 text-neutral-600"}`}
              >
                {opp.urgency}
              </span>
              <button className="rounded-lg border border-neutral-200 px-3 py-1.5 text-xs font-medium text-neutral-600 hover:bg-neutral-50">
                Explore
              </button>
            </div>
          </StaggerItem>
        ))}
      </div>
    </AppShell>
  );
}
