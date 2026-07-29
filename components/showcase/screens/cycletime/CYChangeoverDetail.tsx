import { CompactShell } from "../../CompactShell";

const NAV_ITEMS = [
  { icon: "◆", label: "Lines" },
  { icon: "◎", label: "Changeovers" },
  { icon: "▣", label: "Capacity" },
  { icon: "◈", label: "Products" },
  { icon: "⚙", label: "Settings" },
];

const EVENT = {
  ref: "CO-11842",
  line: "Line 3, Bulk Blend",
  from: "SKU 4471, Citrus Base",
  to: "SKU 8820, Neutral Base",
  date: "24 July 2026, 14:12",
  duration: "163 min",
  target: "90 min",
};

const STEPS = [
  { name: "Line clearance", planned: 12, actual: 14, note: "" },
  { name: "Strip down", planned: 18, actual: 22, note: "" },
  {
    name: "Clean in place",
    planned: 25,
    actual: 61,
    note: "Waited 34 min for CIP skid",
  },
  { name: "Reassembly", planned: 20, actual: 24, note: "" },
  {
    name: "Calibration",
    planned: 10,
    actual: 27,
    note: "Two failed verification runs",
  },
  { name: "Restart to spec", planned: 5, actual: 15, note: "Scrap 340kg" },
];

const CAUSES = [
  { cause: "CIP skid contention", minutes: 34, share: 47 },
  { cause: "Calibration retries", minutes: 17, share: 23 },
  { cause: "Restart out of spec", minutes: 10, share: 14 },
  { cause: "Tooling not staged", minutes: 8, share: 11 },
  { cause: "Other", minutes: 4, share: 5 },
];

export function CYChangeoverDetail() {
  return (
    <CompactShell
      productName="CycleTime"
      accentColor="lime"
      navItems={NAV_ITEMS}
      activeNav="Changeovers"
      title="Changeover Detail"
      subtitle={`${EVENT.ref} · ${EVENT.line}`}
      breadcrumb={["CycleTime", "Changeovers", EVENT.ref]}
      actions={
        <button className="rounded-md bg-lime-700 px-3 py-1.5 text-xs font-medium text-white">
          Raise improvement
        </button>
      }
    >
      <div className="space-y-5">
        <div className="rounded-lg border border-neutral-200 bg-white p-5">
          <div className="flex flex-wrap items-center justify-between gap-4">
            <div>
              <p className="text-sm font-medium text-neutral-800">
                {EVENT.from} → {EVENT.to}
              </p>
              <p className="text-[11px] text-neutral-500">{EVENT.date}</p>
            </div>
            <div className="flex items-center gap-6">
              <div>
                <p className="text-[10px] uppercase tracking-wider text-neutral-400">
                  Duration
                </p>
                <p className="text-lg font-semibold text-red-600">
                  {EVENT.duration}
                </p>
              </div>
              <div>
                <p className="text-[10px] uppercase tracking-wider text-neutral-400">
                  Target
                </p>
                <p className="text-lg font-semibold text-neutral-700">
                  {EVENT.target}
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="grid gap-4 lg:grid-cols-3">
          <div className="rounded-lg border border-neutral-200 bg-white p-5 lg:col-span-2">
            <p className="text-sm font-semibold text-neutral-900">
              Step breakdown
            </p>
            <div className="mt-4 space-y-3">
              {STEPS.map((step) => (
                <div key={step.name}>
                  <div className="flex items-center justify-between text-xs">
                    <span className="text-neutral-700">{step.name}</span>
                    <span
                      className={`font-medium ${step.actual > step.planned * 1.2 ? "text-red-600" : "text-neutral-700"}`}
                    >
                      {step.actual} min
                      <span className="ml-1 text-neutral-400">
                        / {step.planned}
                      </span>
                    </span>
                  </div>
                  <div className="mt-1.5 flex h-1.5 overflow-hidden rounded-full bg-neutral-100">
                    <div
                      className="h-full bg-lime-600"
                      style={{ width: `${(step.planned / 70) * 100}%` }}
                    />
                    {step.actual > step.planned && (
                      <div
                        className="h-full bg-red-400"
                        style={{
                          width: `${((step.actual - step.planned) / 70) * 100}%`,
                        }}
                      />
                    )}
                  </div>
                  {step.note && (
                    <p className="mt-1 text-[11px] text-red-600">{step.note}</p>
                  )}
                </div>
              ))}
            </div>
          </div>

          <div className="space-y-4">
            <div className="rounded-lg border border-neutral-200 bg-white p-5">
              <p className="text-sm font-semibold text-neutral-900">
                Delay causes
              </p>
              <div className="mt-4 space-y-3">
                {CAUSES.map((cause) => (
                  <div key={cause.cause}>
                    <div className="flex items-center justify-between text-xs">
                      <span className="text-neutral-600">{cause.cause}</span>
                      <span className="font-medium text-neutral-800">
                        {cause.minutes}m
                      </span>
                    </div>
                    <div className="mt-1 h-1 overflow-hidden rounded-full bg-neutral-100">
                      <div
                        className="h-full rounded-full bg-lime-600"
                        style={{ width: `${cause.share * 2}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="rounded-lg border border-lime-200 bg-lime-50 p-5">
              <p className="text-sm font-semibold text-lime-900">Pattern</p>
              <p className="mt-2 text-xs leading-relaxed text-lime-800">
                CIP skid contention appears in 14 of the last 21 Line 3
                changeovers. Sequencing bulk blends consecutively would remove
                most of it without any capital spend.
              </p>
            </div>
          </div>
        </div>
      </div>
    </CompactShell>
  );
}
