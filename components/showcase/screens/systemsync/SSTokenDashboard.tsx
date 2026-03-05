import { MinimalShell } from "../../MinimalShell";

const NAV_ITEMS = [
  { icon: "◆", label: "Components" },
  { icon: "◎", label: "Tokens" },
  { icon: "▣", label: "Adoption" },
  { icon: "◈", label: "Reports" },
  { icon: "⚙", label: "Settings" },
];

const TOKEN_CATEGORIES = [
  { name: "Colors", adoption: 94, tokens: 48, drifts: 2 },
  { name: "Typography", adoption: 87, tokens: 24, drifts: 5 },
  { name: "Spacing", adoption: 79, tokens: 16, drifts: 8 },
  { name: "Shadows", adoption: 72, tokens: 8, drifts: 4 },
  { name: "Border Radius", adoption: 91, tokens: 6, drifts: 1 },
];

const COLOR_SWATCHES = [
  { name: "Primary", hex: "#7C3AED", bg: "bg-purple-600" },
  { name: "Secondary", hex: "#A78BFA", bg: "bg-purple-400" },
  { name: "Success", hex: "#10B981", bg: "bg-emerald-500" },
  { name: "Warning", hex: "#F59E0B", bg: "bg-amber-500" },
  { name: "Error", hex: "#EF4444", bg: "bg-red-500" },
  { name: "Neutral 900", hex: "#171717", bg: "bg-neutral-900" },
  { name: "Neutral 500", hex: "#737373", bg: "bg-neutral-500" },
  { name: "Neutral 100", hex: "#F5F5F5", bg: "bg-neutral-100" },
];

const TYPOGRAPHY_SCALE = [
  { name: "Display", adoption: 96 },
  { name: "Heading", adoption: 91 },
  { name: "Subheading", adoption: 88 },
  { name: "Body", adoption: 94 },
  { name: "Caption", adoption: 82 },
  { name: "Overline", adoption: 71 },
];

const DRIFT_ALERTS = [
  {
    team: "Growth",
    token: "color.primary",
    actual: "#6D28D9",
    expected: "#7C3AED",
  },
  { team: "Mobile", token: "spacing.lg", actual: "20px", expected: "24px" },
  {
    team: "Marketing",
    token: "font.heading",
    actual: "Inter",
    expected: "Plus Jakarta Sans",
  },
  {
    team: "Internal Tools",
    token: "radius.md",
    actual: "6px",
    expected: "8px",
  },
];

export function SSTokenDashboard() {
  return (
    <MinimalShell
      productName="SystemSync"
      accentColor="purple"
      navItems={NAV_ITEMS}
      activeNav="Tokens"
      title="Token Dashboard"
      subtitle="Design token adoption"
      actions={
        <button className="rounded-full bg-purple-600 px-4 py-2 text-xs font-medium text-white">
          Sync tokens
        </button>
      }
    >
      <div className="space-y-6">
        <div className="rounded-3xl border border-neutral-100 bg-white p-6">
          <h2 className="text-sm font-medium text-neutral-900">
            Token Adoption by Category
          </h2>
          <div className="mt-5 space-y-5">
            {TOKEN_CATEGORIES.map((cat) => (
              <div key={cat.name}>
                <div className="flex items-center justify-between text-xs">
                  <span className="font-medium text-neutral-700">
                    {cat.name}
                  </span>
                  <div className="flex items-center gap-4">
                    <span className="text-neutral-400">
                      {cat.tokens} tokens
                    </span>
                    <span className="text-neutral-400">
                      {cat.drifts} drifts
                    </span>
                    <span className="font-semibold text-neutral-900">
                      {cat.adoption}%
                    </span>
                  </div>
                </div>
                <div className="mt-1.5 h-2 w-full rounded-full bg-neutral-100">
                  <div
                    className="h-2 rounded-full bg-purple-500"
                    style={{ width: `${cat.adoption}%` }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="grid gap-6 lg:grid-cols-2">
          <div className="rounded-3xl border border-neutral-100 bg-white p-6">
            <h2 className="text-sm font-medium text-neutral-900">
              Color Tokens
            </h2>
            <div className="mt-5 grid grid-cols-4 gap-4">
              {COLOR_SWATCHES.map((swatch) => (
                <div key={swatch.name} className="flex items-center gap-2.5">
                  <div
                    className={`h-6 w-6 shrink-0 rounded-full ${swatch.bg}`}
                  />
                  <div>
                    <p className="text-[10px] font-medium text-neutral-700">
                      {swatch.name}
                    </p>
                    <p className="font-mono text-[10px] text-neutral-400">
                      {swatch.hex}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-3xl border border-neutral-100 bg-white p-6">
            <h2 className="text-sm font-medium text-neutral-900">
              Typography Scale
            </h2>
            <div className="mt-5 space-y-4">
              {TYPOGRAPHY_SCALE.map((t) => (
                <div key={t.name} className="flex items-center gap-4">
                  <span className="w-20 shrink-0 text-xs font-medium text-neutral-700">
                    {t.name}
                  </span>
                  <div className="flex-1">
                    <div className="h-2 w-full rounded-full bg-neutral-100">
                      <div
                        className="h-2 rounded-full bg-purple-400"
                        style={{ width: `${t.adoption}%` }}
                      />
                    </div>
                  </div>
                  <span className="w-8 text-right text-xs font-semibold text-neutral-900">
                    {t.adoption}%
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="rounded-3xl border border-neutral-100 bg-white p-6">
          <h2 className="text-sm font-medium text-neutral-900">Drift Alerts</h2>
          <div className="mt-5 space-y-4">
            {DRIFT_ALERTS.map((d) => (
              <div
                key={d.token}
                className="flex items-center justify-between rounded-2xl bg-neutral-50 p-4"
              >
                <div className="flex items-center gap-4">
                  <span className="inline-block h-2 w-2 rounded-full bg-red-500" />
                  <div>
                    <p className="text-sm font-medium text-neutral-800">
                      {d.token}
                    </p>
                    <p className="text-[10px] text-neutral-400">{d.team}</p>
                  </div>
                </div>
                <div className="text-right">
                  <p className="font-mono text-xs text-red-500">{d.actual}</p>
                  <p className="text-[10px] text-neutral-400">
                    expected {d.expected}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </MinimalShell>
  );
}
