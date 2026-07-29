import { ProductShell } from "../../ProductShell";

const NAV_ITEMS = [
  { icon: "◆", label: "Renewals" },
  { icon: "◎", label: "Tenants" },
  { icon: "▣", label: "Portfolio" },
  { icon: "◈", label: "Reports" },
  { icon: "⚙", label: "Settings" },
];

const KPIS = [
  { label: "Expiring 12 Months", value: "84 leases", note: "£14.2M rent roll" },
  { label: "High Risk", value: "19", note: "£4.1M at stake" },
  { label: "Retention Rate", value: "78%", note: "Up 6 pts YoY" },
  { label: "Avg Lead Time", value: "11 months", note: "Was 3 months" },
];

const RENEWALS = [
  {
    tenant: "Harlow & Finch LLP",
    property: "Cornmarket House",
    expiry: "Feb 2027",
    rent: "£412K",
    risk: 88,
  },
  {
    tenant: "Bramwell Systems Ltd",
    property: "Kingsway Point",
    expiry: "Apr 2027",
    rent: "£348K",
    risk: 81,
  },
  {
    tenant: "Verity Health Group",
    property: "Aldgate Exchange",
    expiry: "Jan 2027",
    rent: "£276K",
    risk: 74,
  },
  {
    tenant: "Northgate Creative",
    property: "The Foundry",
    expiry: "Jun 2027",
    rent: "£194K",
    risk: 52,
  },
  {
    tenant: "Osric Financial",
    property: "Cornmarket House",
    expiry: "Mar 2027",
    rent: "£521K",
    risk: 34,
  },
];

function riskBadge(risk: number): string {
  if (risk >= 75) return "bg-red-50 text-red-700";
  if (risk >= 50) return "bg-amber-50 text-amber-700";
  return "bg-emerald-50 text-emerald-700";
}

export function TLRenewalPipeline() {
  return (
    <ProductShell
      productName="TenantLoop"
      accentColor="blue"
      navItems={NAV_ITEMS}
      activeNav="Renewals"
      title="Renewal Pipeline"
      subtitle="Next twelve months by risk"
      actions={
        <button className="rounded-lg bg-blue-600 px-3 py-1.5 text-xs font-medium text-white">
          Plan outreach
        </button>
      }
    >
      <div className="space-y-5">
        <div className="grid grid-cols-2 gap-3 lg:grid-cols-4">
          {KPIS.map((kpi) => (
            <div
              key={kpi.label}
              className="rounded-xl border border-neutral-200 bg-white p-4"
            >
              <p className="text-[10px] font-medium uppercase tracking-wider text-neutral-400">
                {kpi.label}
              </p>
              <p className="mt-1 text-xl font-semibold text-neutral-900">
                {kpi.value}
              </p>
              <p className="mt-1 text-[11px] text-neutral-500">{kpi.note}</p>
            </div>
          ))}
        </div>

        <div className="rounded-xl border border-neutral-200 bg-white p-5">
          <p className="text-sm font-semibold text-neutral-900">
            Upcoming expiries
          </p>
          <div className="mt-4 space-y-3">
            {RENEWALS.map((renewal) => (
              <div
                key={renewal.tenant}
                className="flex flex-wrap items-center justify-between gap-3 border-b border-neutral-100 pb-3 last:border-0 last:pb-0"
              >
                <div className="min-w-0">
                  <p className="text-sm font-medium text-neutral-800">
                    {renewal.tenant}
                  </p>
                  <p className="text-[11px] text-neutral-500">
                    {renewal.property} · expires {renewal.expiry}
                  </p>
                </div>
                <div className="flex items-center gap-4">
                  <span className="text-sm font-semibold text-neutral-900">
                    {renewal.rent}
                  </span>
                  <span
                    className={`rounded-full px-2 py-0.5 text-[10px] font-medium ${riskBadge(renewal.risk)}`}
                  >
                    Risk {renewal.risk}
                  </span>
                </div>
              </div>
            ))}
          </div>
          <p className="mt-4 text-xs text-neutral-500">
            Harlow &amp; Finch and Bramwell together represent £760K of rent
            roll at high risk. Both show the same pattern: utilisation below 40%
            and no space conversation initiated in nine months.
          </p>
        </div>
      </div>
    </ProductShell>
  );
}
