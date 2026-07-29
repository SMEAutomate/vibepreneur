import { CompactShell } from "../../CompactShell";

const NAV_ITEMS = [
  { icon: "◆", label: "Punch List" },
  { icon: "◎", label: "Site Map" },
  { icon: "▣", label: "Handover" },
  { icon: "◈", label: "Trades" },
  { icon: "⚙", label: "Settings" },
];

const ZONES = [
  { name: "Reception", defects: 4, blocking: false },
  { name: "Atrium", defects: 2, blocking: false },
  { name: "Meeting Rms", defects: 18, blocking: true },
  { name: "Open Plan A", defects: 11, blocking: false },
  { name: "Open Plan B", defects: 26, blocking: true },
  { name: "Core / Lifts", defects: 7, blocking: true },
  { name: "WC Block", defects: 9, blocking: false },
  { name: "Plant Room", defects: 3, blocking: false },
  { name: "Terrace", defects: 14, blocking: false },
];

const FLOORS = [
  { level: "Level 3", defects: 61, ready: false },
  { level: "Level 2", defects: 48, ready: false },
  { level: "Level 1", defects: 27, ready: false },
  { level: "Ground", defects: 6, ready: true },
];

function zoneShade(defects: number): string {
  if (defects >= 20) return "bg-red-100 border-red-200";
  if (defects >= 10) return "bg-amber-100 border-amber-200";
  if (defects >= 5) return "bg-stone-100 border-stone-200";
  return "bg-emerald-50 border-emerald-200";
}

export function SPSiteMap() {
  return (
    <CompactShell
      productName="SitePunch"
      accentColor="stone"
      navItems={NAV_ITEMS}
      activeNav="Site Map"
      title="Site Map"
      subtitle="Defect density by zone"
      breadcrumb={["SitePunch", "Meridian Court", "Site Map"]}
      actions={
        <button className="rounded-md border border-neutral-200 px-3 py-1.5 text-xs font-medium text-neutral-700">
          Level 2
        </button>
      }
    >
      <div className="grid gap-4 lg:grid-cols-4">
        <div className="rounded-lg border border-neutral-200 bg-white p-5 lg:col-span-3">
          <p className="text-sm font-semibold text-neutral-900">
            Level 2 floor plan
          </p>
          <div className="mt-4 grid grid-cols-3 gap-3">
            {ZONES.map((zone) => (
              <div
                key={zone.name}
                className={`rounded-lg border p-4 ${zoneShade(zone.defects)}`}
              >
                <p className="text-xs font-medium text-neutral-800">
                  {zone.name}
                </p>
                <p className="mt-1 text-2xl font-semibold text-neutral-900">
                  {zone.defects}
                </p>
                {zone.blocking && (
                  <p className="mt-1 text-[10px] font-medium uppercase tracking-wider text-red-700">
                    Blocks handover
                  </p>
                )}
              </div>
            ))}
          </div>
          <div className="mt-4 flex flex-wrap items-center gap-4 text-[10px] text-neutral-500">
            {[
              {
                label: "0 to 4",
                className: "bg-emerald-50 border-emerald-200",
              },
              { label: "5 to 9", className: "bg-stone-100 border-stone-200" },
              { label: "10 to 19", className: "bg-amber-100 border-amber-200" },
              { label: "20 plus", className: "bg-red-100 border-red-200" },
            ].map((key) => (
              <span key={key.label} className="flex items-center gap-1.5">
                <span className={`h-3 w-3 rounded border ${key.className}`} />
                {key.label}
              </span>
            ))}
          </div>
        </div>

        <div className="space-y-4">
          <div className="rounded-lg border border-neutral-200 bg-white p-5">
            <p className="text-sm font-semibold text-neutral-900">
              Floor readiness
            </p>
            <div className="mt-4 space-y-3">
              {FLOORS.map((floor) => (
                <div
                  key={floor.level}
                  className="flex items-center justify-between text-xs"
                >
                  <span className="text-neutral-600">{floor.level}</span>
                  <span
                    className={`font-medium ${floor.ready ? "text-emerald-600" : "text-neutral-800"}`}
                  >
                    {floor.ready ? "Ready" : `${floor.defects} open`}
                  </span>
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-lg border border-stone-200 bg-stone-50 p-5">
            <p className="text-sm font-semibold text-stone-900">
              Critical path
            </p>
            <p className="mt-2 text-xs leading-relaxed text-stone-700">
              Open Plan B and the lift core hold 33 of the 142 open defects and
              both sit on the handover critical path. Clearing those two zones
              moves the completion date forward by an estimated nine days.
            </p>
          </div>
        </div>
      </div>
    </CompactShell>
  );
}
