import { CompactShell } from "../../CompactShell";

const NAV_ITEMS = [
  { icon: "◆", label: "Vendors" },
  { icon: "◎", label: "Contracts" },
  { icon: "▣", label: "Spend" },
  { icon: "◈", label: "Reports" },
  { icon: "⚙", label: "Settings" },
];

const VENDORS = [
  {
    name: "Cloudflare",
    category: "SaaS",
    spend: "$84K",
    status: "Active",
    owner: "Maya Chen",
    rating: 5,
  },
  {
    name: "Deloitte Advisory",
    category: "Services",
    spend: "$210K",
    status: "Active",
    owner: "James Park",
    rating: 4,
  },
  {
    name: "AWS",
    category: "Cloud",
    spend: "$320K",
    status: "Active",
    owner: "Tom Rivera",
    rating: 5,
  },
  {
    name: "Dell Technologies",
    category: "Hardware",
    spend: "$145K",
    status: "Under Review",
    owner: "Sarah Kim",
    rating: 3,
  },
  {
    name: "Salesforce",
    category: "SaaS",
    spend: "$156K",
    status: "Expiring",
    owner: "Lisa Patel",
    rating: 4,
  },
  {
    name: "McKinsey",
    category: "Services",
    spend: "$280K",
    status: "Active",
    owner: "Alex Novak",
    rating: 5,
  },
  {
    name: "Datadog",
    category: "SaaS",
    spend: "$62K",
    status: "Active",
    owner: "Rachel Wong",
    rating: 4,
  },
  {
    name: "Lenovo",
    category: "Hardware",
    spend: "$78K",
    status: "Expiring",
    owner: "David Liu",
    rating: 3,
  },
];

const CATEGORIES = [
  { name: "SaaS", count: 48, spend: "$1.2M" },
  { name: "Services", count: 34, spend: "$890K" },
  { name: "Cloud", count: 18, spend: "$640K" },
  { name: "Hardware", count: 15, spend: "$320K" },
  { name: "Other", count: 12, spend: "$180K" },
];

function statusDot(status: string): string {
  if (status === "Active") return "bg-emerald-500";
  if (status === "Expiring") return "bg-amber-500";
  return "bg-red-500";
}

function statusText(status: string): string {
  if (status === "Active") return "text-emerald-700";
  if (status === "Expiring") return "text-amber-700";
  return "text-red-700";
}

function renderStars(rating: number): string {
  return "★".repeat(rating) + "☆".repeat(5 - rating);
}

export function VVVendorDirectory() {
  return (
    <CompactShell
      productName="VendorVault"
      accentColor="stone"
      navItems={NAV_ITEMS}
      activeNav="Vendors"
      title="Vendor Directory"
      subtitle="127 active vendors"
      breadcrumb={["VendorVault", "Vendors"]}
      actions={
        <button className="rounded bg-stone-700 px-3 py-1.5 text-xs font-medium text-white">
          + Add vendor
        </button>
      }
    >
      <div className="grid gap-5 lg:grid-cols-4">
        <div className="lg:col-span-3">
          <div className="rounded border border-neutral-200 bg-white">
            <div className="border-b border-neutral-200 px-4 py-2.5">
              <h2 className="text-xs font-semibold text-neutral-800">
                All Vendors
              </h2>
            </div>
            <div className="divide-y divide-neutral-100">
              {VENDORS.map((v) => (
                <div
                  key={v.name}
                  className="border-b border-neutral-100 px-4 py-3 last:border-0"
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <span className="text-xs font-medium text-neutral-900">
                        {v.name}
                      </span>
                      <span className="rounded bg-stone-100 px-2 py-0.5 text-[10px] text-stone-600">
                        {v.category}
                      </span>
                      <div className="flex items-center gap-1.5">
                        <span
                          className={`h-1.5 w-1.5 rounded-full ${statusDot(v.status)}`}
                        />
                        <span
                          className={`text-[10px] font-medium ${statusText(v.status)}`}
                        >
                          {v.status}
                        </span>
                      </div>
                    </div>
                    <div className="flex items-center gap-4">
                      <span className="text-[10px] tracking-wide text-amber-500">
                        {renderStars(v.rating)}
                      </span>
                      <span className="text-xs text-neutral-500">
                        {v.owner}
                      </span>
                      <span className="w-16 text-right font-mono text-sm font-medium text-stone-800">
                        {v.spend}
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="space-y-5">
          <div className="rounded border border-neutral-200 bg-white p-4">
            <h2 className="text-xs font-semibold text-neutral-800">
              By Category
            </h2>
            <div className="mt-3 space-y-3">
              {CATEGORIES.map((cat) => (
                <div
                  key={cat.name}
                  className="border-b border-neutral-100 pb-2.5 last:border-0 last:pb-0"
                >
                  <div className="flex items-center justify-between">
                    <span className="rounded bg-stone-100 px-2 py-0.5 text-[10px] text-stone-600">
                      {cat.name}
                    </span>
                    <span className="font-mono text-sm font-medium text-stone-800">
                      {cat.spend}
                    </span>
                  </div>
                  <p className="mt-0.5 text-[10px] text-neutral-400">
                    {cat.count} vendors
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </CompactShell>
  );
}
