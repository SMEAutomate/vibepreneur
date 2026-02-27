import { AppShell } from "../AppShell";

const exports = [
  {
    name: "Solution Brief",
    type: "PDF",
    lastExported: "2h ago",
    status: "ready",
    pages: 1,
  },
  {
    name: "Positioning Canvas",
    type: "PDF",
    lastExported: "1d ago",
    status: "ready",
    pages: 1,
  },
  {
    name: "Buyer Persona",
    type: "PDF",
    lastExported: "3d ago",
    status: "ready",
    pages: 2,
  },
  {
    name: "GTM Plan",
    type: "PDF / Notion",
    lastExported: "5d ago",
    status: "ready",
    pages: 4,
  },
  {
    name: "Outreach Sequences",
    type: "CSV / Clipboard",
    lastExported: "1d ago",
    status: "ready",
    pages: null,
  },
  {
    name: "Content Calendar",
    type: "CSV / Google Sheets",
    lastExported: "Never",
    status: "ready",
    pages: null,
  },
  {
    name: "Landing Page",
    type: "HTML / Framer",
    lastExported: "Never",
    status: "draft",
    pages: null,
  },
  {
    name: "Comparison Page",
    type: "HTML / Markdown",
    lastExported: "Never",
    status: "draft",
    pages: null,
  },
  {
    name: "SEO Keyword Plan",
    type: "CSV / Google Sheets",
    lastExported: "Never",
    status: "ready",
    pages: null,
  },
  {
    name: "Full Solution Package",
    type: "ZIP (all assets)",
    lastExported: "Never",
    status: "ready",
    pages: null,
  },
];

const statusColors: Record<string, string> = {
  ready: "bg-emerald-50 text-emerald-700",
  draft: "bg-amber-50 text-amber-700",
  generating: "bg-brand-50 text-brand-700",
};

export function ExportCenter() {
  return (
    <AppShell
      activeNav="Settings"
      title="Export Center"
      subtitle="OnboardFlow — All your assets in one place"
      actions={
        <button className="rounded-lg bg-brand-600 px-4 py-2 text-xs font-medium text-white">
          Export all
        </button>
      }
    >
      <div className="grid gap-4 md:grid-cols-3">
        {[
          { label: "Total assets", value: "10" },
          { label: "Ready to export", value: "8" },
          { label: "Last export", value: "2h ago" },
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
          Available Exports
        </h2>
        <div className="mt-4 space-y-2">
          {exports.map((e) => (
            <div
              key={e.name}
              className="flex items-center gap-4 rounded-lg border border-neutral-100 p-4"
            >
              <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-neutral-50 text-[10px] font-bold text-neutral-400">
                {e.type.split(" ")[0]}
              </div>
              <div className="flex-1">
                <p className="text-sm font-medium text-neutral-900">{e.name}</p>
                <p className="text-[10px] text-neutral-500">
                  {e.type}
                  {e.pages && ` · ${e.pages} page${e.pages > 1 ? "s" : ""}`}
                </p>
              </div>
              <span className="text-[10px] text-neutral-400">
                {e.lastExported === "Never"
                  ? "Not yet exported"
                  : `Exported ${e.lastExported}`}
              </span>
              <span
                className={`rounded-full px-2 py-0.5 text-[10px] font-medium ${statusColors[e.status]}`}
              >
                {e.status}
              </span>
              <button className="rounded-md border border-neutral-200 px-3 py-1.5 text-[10px] font-medium text-neutral-600">
                Export
              </button>
            </div>
          ))}
        </div>
      </div>
    </AppShell>
  );
}
