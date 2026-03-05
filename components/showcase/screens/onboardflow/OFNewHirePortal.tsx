import { SoftShell } from "../../SoftShell";

const NAV_ITEMS = [
  { icon: "◆", label: "Dashboard" },
  { icon: "◎", label: "Onboardings" },
  { icon: "▣", label: "Templates" },
  { icon: "◈", label: "Portal" },
  { icon: "⚙", label: "Settings" },
];

const CHECKLIST = [
  { task: "Sign offer letter", done: true },
  { task: "Complete I-9 verification", done: true },
  { task: "Set up laptop", done: true },
  { task: "Enroll in benefits", done: true },
  { task: "Complete security training", done: true },
  { task: "Join Slack channels", done: true },
  { task: "Set up dev environment", done: true },
  { task: "Read team wiki", done: true },
  { task: "Schedule manager 1:1", done: false },
  { task: "Complete product overview", done: false },
  { task: "Meet your buddy", done: false },
  { task: "Submit first PR", done: false },
];

const RESOURCES = [
  { title: "Employee Handbook", desc: "Policies, culture, and expectations" },
  { title: "Benefits Guide", desc: "Health, 401k, and perks overview" },
  { title: "Team Wiki", desc: "Architecture docs and runbooks" },
  { title: "IT Support", desc: "Hardware, access, and troubleshooting" },
];

const TEAM = [
  { name: "Jordan Lee", role: "Engineering Manager", initials: "JL" },
  { name: "Sam Rivera", role: "Senior Engineer (Buddy)", initials: "SR" },
  { name: "Aisha Khan", role: "Staff Engineer", initials: "AK" },
  { name: "Chris Nguyen", role: "Product Manager", initials: "CN" },
];

export function OFNewHirePortal() {
  const completed = CHECKLIST.filter((c) => c.done).length;
  const total = CHECKLIST.length;
  const pct = Math.round((completed / total) * 100);

  return (
    <SoftShell
      productName="OnboardFlow"
      accentColor="cyan"
      navItems={NAV_ITEMS}
      activeNav="Portal"
      title="New Hire Portal"
      subtitle="Welcome, Alex!"
    >
      <div className="space-y-6">
        <div className="rounded-2xl bg-cyan-50 p-6">
          <h2 className="text-lg font-semibold text-neutral-900">
            Welcome, Alex Thompson
          </h2>
          <div className="mt-2 flex flex-wrap gap-4 text-xs text-cyan-700">
            <span>Senior Engineer</span>
            <span>Platform Team</span>
            <span>Started Feb 24, 2026</span>
          </div>
        </div>

        <div className="grid gap-6 lg:grid-cols-2">
          <div className="space-y-6">
            <div className="rounded-2xl border border-cyan-100/50 bg-white p-5 shadow-sm">
              <div className="flex items-center justify-between">
                <h2 className="text-sm font-semibold text-neutral-900">
                  Onboarding Checklist
                </h2>
                <span className="text-xs font-medium text-cyan-600">
                  {completed}/{total} complete
                </span>
              </div>
              <div className="mt-3 h-3 w-full rounded-full bg-cyan-100">
                <div
                  className="h-3 rounded-full bg-cyan-500"
                  style={{ width: `${pct}%` }}
                />
              </div>
              <div className="mt-4 space-y-1">
                {CHECKLIST.map((item) => (
                  <div
                    key={item.task}
                    className="flex items-center gap-3 py-2.5"
                  >
                    <span
                      className={`flex h-5 w-5 shrink-0 items-center justify-center rounded-lg ${
                        item.done
                          ? "bg-cyan-500 text-white"
                          : "bg-cyan-100 text-cyan-400"
                      } text-[10px]`}
                    >
                      {item.done ? "✓" : "○"}
                    </span>
                    <span
                      className={`text-sm ${
                        item.done
                          ? "text-neutral-400 line-through"
                          : "text-neutral-700"
                      }`}
                    >
                      {item.task}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="space-y-6">
            <div className="rounded-2xl border border-cyan-100/50 bg-white p-5 shadow-sm">
              <h2 className="text-sm font-semibold text-neutral-900">
                Resources
              </h2>
              <div className="mt-4 grid grid-cols-2 gap-3">
                {RESOURCES.map((r) => (
                  <div
                    key={r.title}
                    className="rounded-2xl bg-gradient-to-br from-cyan-50 to-white p-4"
                  >
                    <p className="text-sm font-medium text-neutral-800">
                      {r.title}
                    </p>
                    <p className="mt-1 text-[10px] text-neutral-500">
                      {r.desc}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            <div className="rounded-2xl bg-cyan-50 p-6">
              <h2 className="text-sm font-semibold text-neutral-900">
                Your Team
              </h2>
              <div className="mt-4 space-y-3">
                {TEAM.map((m) => (
                  <div
                    key={m.name}
                    className="flex items-center gap-3 rounded-2xl border border-cyan-100/50 bg-white p-4 shadow-sm"
                  >
                    <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-cyan-100 text-[10px] font-bold text-cyan-700">
                      {m.initials}
                    </div>
                    <div>
                      <p className="text-sm font-medium text-neutral-800">
                        {m.name}
                      </p>
                      <p className="text-[10px] text-neutral-500">{m.role}</p>
                    </div>
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
