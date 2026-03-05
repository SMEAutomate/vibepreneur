import { MinimalShell } from "../../MinimalShell";

const NAV_ITEMS = [
  { icon: "◆", label: "Components" },
  { icon: "◎", label: "Tokens" },
  { icon: "▣", label: "Adoption" },
  { icon: "◈", label: "Reports" },
  { icon: "⚙", label: "Settings" },
];

const COMPONENTS = [
  {
    name: "Button",
    uses: "2,340",
    version: "v2.1.0",
    status: "Stable",
    team: "Platform",
  },
  {
    name: "Card",
    uses: "1,890",
    version: "v1.8.2",
    status: "Stable",
    team: "Product",
  },
  {
    name: "Modal",
    uses: "1,120",
    version: "v3.0.0",
    status: "Stable",
    team: "Platform",
  },
  {
    name: "Input",
    uses: "2,780",
    version: "v2.4.1",
    status: "Stable",
    team: "Platform",
  },
  {
    name: "Table",
    uses: "940",
    version: "v1.2.0",
    status: "Beta",
    team: "Product",
  },
  {
    name: "Dropdown",
    uses: "1,450",
    version: "v2.0.3",
    status: "Stable",
    team: "Platform",
  },
  {
    name: "Toast",
    uses: "680",
    version: "v0.9.1",
    status: "Beta",
    team: "Growth",
  },
  {
    name: "Tabs",
    uses: "820",
    version: "v1.0.0",
    status: "Deprecated",
    team: "Mobile",
  },
];

const SUMMARY = [
  { label: "Total components", value: 148 },
  { label: "Stable", value: 112, color: "text-emerald-600" },
  { label: "Beta", value: 24, color: "text-amber-600" },
  { label: "Deprecated", value: 12, color: "text-red-500" },
];

function statusDot(status: string): string {
  if (status === "Stable") return "bg-emerald-500";
  if (status === "Beta") return "bg-amber-500";
  return "bg-red-500";
}

function accentBorder(status: string): string {
  if (status === "Stable") return "border-l-purple-400";
  if (status === "Beta") return "border-l-amber-400";
  return "border-l-red-400";
}

export function SSComponentLibrary() {
  return (
    <MinimalShell
      productName="SystemSync"
      accentColor="purple"
      navItems={NAV_ITEMS}
      activeNav="Components"
      title="Component Library"
      subtitle="148 components tracked"
      actions={
        <button className="rounded-full bg-purple-600 px-4 py-2 text-xs font-medium text-white">
          Add component
        </button>
      }
    >
      <div className="grid gap-6 lg:grid-cols-4">
        <div className="space-y-6 lg:col-span-3">
          <div className="grid grid-cols-2 gap-4">
            {COMPONENTS.map((c) => (
              <div
                key={c.name}
                className={`rounded-2xl border-l-4 ${accentBorder(c.status)} bg-neutral-50 p-5`}
              >
                <div className="flex items-center justify-between">
                  <h3 className="text-sm font-medium text-neutral-900">
                    {c.name}
                  </h3>
                  <div className="flex items-center gap-1.5">
                    <span
                      className={`inline-block h-2 w-2 rounded-full ${statusDot(c.status)}`}
                    />
                    <span className="text-[10px] text-neutral-500">
                      {c.status}
                    </span>
                  </div>
                </div>
                <p className="mt-3 text-xs text-neutral-500">{c.uses} uses</p>
                <div className="mt-3 flex items-center justify-between">
                  <span className="rounded-full bg-purple-100 px-2 py-0.5 font-mono text-[10px] text-purple-700">
                    {c.version}
                  </span>
                  <span className="text-[10px] text-neutral-400">{c.team}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="space-y-6">
          <div className="rounded-3xl border border-neutral-100 bg-white p-6">
            <h2 className="text-sm font-medium text-neutral-900">Summary</h2>
            <div className="mt-5 space-y-5">
              {SUMMARY.map((s) => (
                <div
                  key={s.label}
                  className="flex items-center justify-between"
                >
                  <span className="text-xs text-neutral-500">{s.label}</span>
                  <span
                    className={`text-lg font-bold ${s.color ?? "text-neutral-900"}`}
                  >
                    {s.value}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </MinimalShell>
  );
}
