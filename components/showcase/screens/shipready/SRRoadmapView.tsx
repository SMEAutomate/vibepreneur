import { TopBarShell } from "../../TopBarShell";

const NAV_ITEMS = [
  { icon: "◆", label: "Roadmap" },
  { icon: "◎", label: "Features" },
  { icon: "▣", label: "Sprints" },
  { icon: "◈", label: "Insights" },
  { icon: "⚙", label: "Settings" },
];

const COLUMN_COLORS: Record<string, string> = {
  Now: "border-t-rose-400",
  Next: "border-t-amber-400",
  Later: "border-t-neutral-300",
};

const COLUMNS = [
  {
    title: "Now",
    items: [
      {
        name: "Dark mode",
        priority: "P0",
        effort: "M",
        votes: 47,
        owner: "KL",
      },
      {
        name: "API rate limiting",
        priority: "P0",
        effort: "L",
        votes: 38,
        owner: "JC",
      },
      {
        name: "Bulk import",
        priority: "P1",
        effort: "S",
        votes: 31,
        owner: "MR",
      },
    ],
  },
  {
    title: "Next",
    items: [
      {
        name: "Custom fields",
        priority: "P1",
        effort: "L",
        votes: 29,
        owner: "KL",
      },
      {
        name: "Webhook integrations",
        priority: "P1",
        effort: "M",
        votes: 26,
        owner: "JC",
      },
      {
        name: "Team permissions",
        priority: "P0",
        effort: "XL",
        votes: 42,
        owner: "AW",
      },
      {
        name: "Audit log",
        priority: "P2",
        effort: "M",
        votes: 18,
        owner: "MR",
      },
    ],
  },
  {
    title: "Later",
    items: [
      {
        name: "Mobile app",
        priority: "P2",
        effort: "XL",
        votes: 22,
        owner: "AW",
      },
      {
        name: "AI suggestions",
        priority: "P1",
        effort: "L",
        votes: 35,
        owner: "KL",
      },
      {
        name: "Multi-workspace",
        priority: "P2",
        effort: "XL",
        votes: 14,
        owner: "JC",
      },
    ],
  },
];

const PRIORITY_COLORS: Record<string, string> = {
  P0: "bg-red-50 text-red-700",
  P1: "bg-amber-50 text-amber-700",
  P2: "bg-neutral-100 text-neutral-500",
};

const EFFORT_COLORS: Record<string, string> = {
  S: "bg-emerald-50 text-emerald-700",
  M: "bg-sky-50 text-sky-700",
  L: "bg-amber-50 text-amber-700",
  XL: "bg-red-50 text-red-700",
};

export function SRRoadmapView() {
  return (
    <TopBarShell
      productName="ShipReady"
      accentColor="rose"
      navItems={NAV_ITEMS}
      activeNav="Roadmap"
      title="Roadmap"
      subtitle="Product roadmap Q1-Q2 2026"
      actions={
        <button className="rounded-md bg-rose-600 px-3 py-1.5 text-xs font-medium text-white">
          Add feature
        </button>
      }
    >
      <div className="grid gap-4 lg:grid-cols-3">
        {COLUMNS.map((col) => (
          <div key={col.title}>
            <div
              className={`mb-3 rounded-t-xl border-t-2 bg-white px-4 pb-2 pt-3 shadow-sm ${COLUMN_COLORS[col.title]}`}
            >
              <div className="flex items-center justify-between">
                <h2 className="text-sm font-semibold text-neutral-900">
                  {col.title}
                </h2>
                <span className="text-xs text-neutral-400">
                  {col.items.length} items
                </span>
              </div>
            </div>
            <div className="space-y-3">
              {col.items.map((item) => (
                <div
                  key={item.name}
                  className="rounded-xl bg-white p-4 shadow-sm"
                >
                  <div className="flex items-start justify-between gap-2">
                    <p className="text-sm font-medium text-neutral-900">
                      {item.name}
                    </p>
                    <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-rose-100 text-[10px] font-bold text-rose-700">
                      {item.owner}
                    </div>
                  </div>
                  <div className="mt-2 flex items-center gap-2">
                    <span
                      className={`rounded-md px-2 py-0.5 text-[10px] font-medium ${PRIORITY_COLORS[item.priority]}`}
                    >
                      {item.priority}
                    </span>
                    <span
                      className={`rounded-md px-2 py-0.5 text-[10px] font-medium ${EFFORT_COLORS[item.effort]}`}
                    >
                      {item.effort}
                    </span>
                    <span className="ml-auto text-[10px] text-neutral-400">
                      {item.votes} votes
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </TopBarShell>
  );
}
