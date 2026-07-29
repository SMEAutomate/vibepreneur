import { CompactShell } from "../../CompactShell";

const NAV_ITEMS = [
  { icon: "◆", label: "Punch List" },
  { icon: "◎", label: "Site Map" },
  { icon: "▣", label: "Handover" },
  { icon: "◈", label: "Trades" },
  { icon: "⚙", label: "Settings" },
];

const SECTIONS = [
  { name: "Defects closed and verified", count: "318 of 460", complete: true },
  { name: "Outstanding items with dates", count: "142 listed", complete: true },
  { name: "Trade sign-offs", count: "9 of 12", complete: false },
  { name: "Commissioning certificates", count: "7 of 7", complete: true },
  { name: "Warranty documentation", count: "11 of 14", complete: false },
  { name: "As-built drawings", count: "Issued", complete: true },
];

const SIGNOFFS = [
  {
    trade: "Electrical",
    contact: "K. Boateng",
    status: "Signed",
    date: "24 Jul",
  },
  {
    trade: "Mechanical",
    contact: "L. Prentice",
    status: "Signed",
    date: "22 Jul",
  },
  { trade: "Decoration", contact: "M. Okafor", status: "Pending", date: "-" },
  {
    trade: "Joinery",
    contact: "S. Whitfield",
    status: "Signed",
    date: "25 Jul",
  },
  { trade: "Flooring", contact: "A. Duval", status: "Pending", date: "-" },
  { trade: "Ceilings", contact: "P. Ramirez", status: "Pending", date: "-" },
];

export function SPHandoverReport() {
  return (
    <CompactShell
      productName="SitePunch"
      accentColor="stone"
      navItems={NAV_ITEMS}
      activeNav="Handover"
      title="Handover Report"
      subtitle="Meridian Court · Draft for client issue"
      breadcrumb={["SitePunch", "Meridian Court", "Handover"]}
      actions={
        <button className="rounded-md bg-stone-700 px-3 py-1.5 text-xs font-medium text-white">
          Issue to client
        </button>
      }
    >
      <div className="grid gap-4 lg:grid-cols-2">
        <div className="rounded-lg border border-neutral-200 bg-white p-5">
          <p className="text-sm font-semibold text-neutral-900">
            Close-out pack contents
          </p>
          <div className="mt-4 space-y-3">
            {SECTIONS.map((section) => (
              <div
                key={section.name}
                className="flex items-center justify-between border-b border-neutral-100 pb-2.5 last:border-0 last:pb-0"
              >
                <div className="flex items-center gap-2">
                  <span
                    className={`flex h-4 w-4 items-center justify-center rounded-full text-[9px] text-white ${section.complete ? "bg-emerald-500" : "bg-neutral-300"}`}
                  >
                    {section.complete ? "✓" : ""}
                  </span>
                  <span className="text-sm text-neutral-800">
                    {section.name}
                  </span>
                </div>
                <span className="text-xs text-neutral-500">
                  {section.count}
                </span>
              </div>
            ))}
          </div>
        </div>

        <div className="space-y-4">
          <div className="rounded-lg border border-neutral-200 bg-white p-5">
            <p className="text-sm font-semibold text-neutral-900">
              Trade sign-offs
            </p>
            <div className="mt-4 space-y-2.5">
              {SIGNOFFS.map((signoff) => (
                <div
                  key={signoff.trade}
                  className="flex items-center justify-between text-xs"
                >
                  <div>
                    <span className="text-neutral-800">{signoff.trade}</span>
                    <span className="ml-2 text-neutral-400">
                      {signoff.contact}
                    </span>
                  </div>
                  <span
                    className={`font-medium ${signoff.status === "Signed" ? "text-emerald-600" : "text-amber-600"}`}
                  >
                    {signoff.status === "Signed" ? signoff.date : "Pending"}
                  </span>
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-lg border border-stone-200 bg-stone-50 p-5">
            <p className="text-sm font-semibold text-stone-900">Before issue</p>
            <p className="mt-2 text-xs leading-relaxed text-stone-700">
              Three trade sign-offs and three warranty documents are still
              outstanding. The pack can issue as a draft with those items
              flagged, or hold four days for the decoration and flooring
              packages to complete.
            </p>
          </div>
        </div>
      </div>
    </CompactShell>
  );
}
