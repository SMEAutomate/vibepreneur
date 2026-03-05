import { SoftShell } from "../../SoftShell";

const NAV_ITEMS = [
  { icon: "◆", label: "Tickets" },
  { icon: "◎", label: "Analytics" },
  { icon: "▣", label: "Knowledge Base" },
  { icon: "◈", label: "Routing" },
  { icon: "⚙", label: "Settings" },
];

const ARTICLES = [
  {
    title: "Getting started with SSO integration",
    category: "Setup",
    views: 2840,
    helpfulness: 94,
    updated: "Mar 2",
  },
  {
    title: "How to configure webhook endpoints",
    category: "API",
    views: 2210,
    helpfulness: 91,
    updated: "Feb 28",
  },
  {
    title: "Managing team member permissions",
    category: "Admin",
    views: 1980,
    helpfulness: 89,
    updated: "Feb 25",
  },
  {
    title: "Troubleshooting email delivery issues",
    category: "Email",
    views: 1760,
    helpfulness: 87,
    updated: "Feb 22",
  },
  {
    title: "Setting up custom ticket workflows",
    category: "Workflows",
    views: 1540,
    helpfulness: 92,
    updated: "Feb 20",
  },
  {
    title: "Data export and compliance guide",
    category: "Compliance",
    views: 1320,
    helpfulness: 86,
    updated: "Feb 18",
  },
  {
    title: "API rate limits and best practices",
    category: "API",
    views: 1180,
    helpfulness: 90,
    updated: "Feb 15",
  },
  {
    title: "Billing FAQ and plan comparisons",
    category: "Billing",
    views: 1050,
    helpfulness: 83,
    updated: "Feb 12",
  },
];

const GAPS = [
  "Two-factor authentication setup",
  "Bulk ticket import from CSV",
  "Custom SLA policy configuration",
  "Slack integration walkthrough",
  "Audit log interpretation guide",
];

const AI_SUGGESTIONS = [
  {
    title: "Password reset troubleshooting guide",
    reason: "38 tickets this week about password reset failures",
  },
  {
    title: "Mobile app push notification setup",
    reason: "22 tickets asking about notification configuration",
  },
  {
    title: "SAML assertion debugging steps",
    reason: "15 SSO-related tickets with similar root cause",
  },
];

export function RAKnowledgeBase() {
  return (
    <SoftShell
      productName="ResolveAI"
      accentColor="sky"
      navItems={NAV_ITEMS}
      activeNav="Knowledge Base"
      title="Knowledge Base"
      subtitle="234 articles published"
      actions={
        <button className="rounded-xl bg-sky-600 px-4 py-2 text-xs font-medium text-white">
          + New article
        </button>
      }
    >
      <div className="space-y-6">
        <div className="rounded-xl border border-sky-100 bg-white p-4">
          <div className="rounded-xl border border-sky-200 bg-sky-50/50 px-4 py-2.5">
            <span className="text-sm text-neutral-400">
              Search articles, topics, or keywords...
            </span>
          </div>
        </div>

        <div className="grid gap-6 lg:grid-cols-3">
          <div className="space-y-6 lg:col-span-2">
            <div className="rounded-xl border border-sky-100 bg-white p-4">
              <h2 className="text-sm font-semibold text-neutral-900">
                Published Articles
              </h2>
              <div className="mt-4 space-y-2">
                {ARTICLES.map((a) => (
                  <div
                    key={a.title}
                    className="rounded-lg border border-sky-50 bg-white px-4 py-3 shadow-sm"
                  >
                    <div className="flex items-center justify-between">
                      <div className="flex min-w-0 items-center gap-3">
                        <span className="truncate text-sm font-medium text-neutral-800">
                          {a.title}
                        </span>
                        <span className="shrink-0 rounded-lg bg-sky-50 px-2 py-0.5 text-[10px] font-medium text-sky-700">
                          {a.category}
                        </span>
                      </div>
                      <div className="ml-3 flex shrink-0 items-center gap-4">
                        <span className="text-xs text-neutral-500">
                          {a.views.toLocaleString()} views
                        </span>
                        <span className="text-xs font-medium text-emerald-600">
                          {a.helpfulness}% helpful
                        </span>
                        <span className="text-[10px] text-neutral-400">
                          {a.updated}
                        </span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="space-y-6">
            <div className="rounded-xl border border-sky-100 bg-white p-4">
              <h2 className="text-sm font-semibold text-neutral-900">
                Gap Analysis
              </h2>
              <p className="mt-1 text-[10px] text-neutral-400">
                Top topics missing articles (from ticket analysis)
              </p>
              <div className="mt-4 space-y-2">
                {GAPS.map((gap, i) => (
                  <div
                    key={gap}
                    className="flex items-center gap-3 rounded-lg border border-sky-50 bg-white px-4 py-3 shadow-sm"
                  >
                    <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-lg bg-red-50 text-[10px] font-bold text-red-600">
                      {i + 1}
                    </span>
                    <span className="text-sm text-neutral-700">{gap}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="rounded-xl border border-sky-100 bg-sky-50/60 p-4">
              <h2 className="text-sm font-semibold text-sky-800">
                AI-Suggested Articles
              </h2>
              <div className="mt-4 space-y-3">
                {AI_SUGGESTIONS.map((s) => (
                  <div
                    key={s.title}
                    className="rounded-lg bg-white px-4 py-3 shadow-sm"
                  >
                    <p className="text-sm font-medium text-neutral-800">
                      {s.title}
                    </p>
                    <p className="mt-1 text-[10px] text-neutral-500">
                      {s.reason}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </SoftShell>
  );
}
