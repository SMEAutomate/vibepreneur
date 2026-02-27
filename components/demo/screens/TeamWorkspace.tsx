import { AppShell } from "../AppShell";

const members = [
  {
    name: "Sarah Chen",
    email: "sarah@onboardflow.com",
    role: "Owner",
    lastActive: "Now",
    avatar: "SC",
  },
  {
    name: "Alex Rivera",
    email: "alex@onboardflow.com",
    role: "Editor",
    lastActive: "2h ago",
    avatar: "AR",
  },
  {
    name: "Maya Patel",
    email: "maya@onboardflow.com",
    role: "Viewer",
    lastActive: "1d ago",
    avatar: "MP",
  },
];

const pendingInvites = [
  { email: "david@onboardflow.com", role: "Editor", sent: "3d ago" },
  { email: "jen@onboardflow.com", role: "Viewer", sent: "5d ago" },
];

const recentActivity = [
  {
    user: "Sarah Chen",
    action: "Updated positioning canvas",
    time: "10m ago",
  },
  {
    user: "Alex Rivera",
    action: "Exported solution brief",
    time: "2h ago",
  },
  {
    user: "Sarah Chen",
    action: "Added 3 new keywords to SEO plan",
    time: "5h ago",
  },
  {
    user: "Maya Patel",
    action: "Viewed growth dashboard",
    time: "1d ago",
  },
  {
    user: "Alex Rivera",
    action: "Created comparison page draft",
    time: "1d ago",
  },
];

const roleColors: Record<string, string> = {
  Owner: "bg-brand-50 text-brand-700",
  Editor: "bg-emerald-50 text-emerald-700",
  Viewer: "bg-neutral-100 text-neutral-600",
};

export function TeamWorkspace() {
  return (
    <AppShell
      activeNav="Settings"
      title="Team Workspace"
      subtitle="OnboardFlow — Collaborate on your GTM"
      actions={
        <button className="rounded-lg bg-brand-600 px-4 py-2 text-xs font-medium text-white">
          Invite member
        </button>
      }
    >
      <div className="grid gap-6 lg:grid-cols-[1fr_320px]">
        <div className="space-y-6">
          <div className="rounded-2xl border border-neutral-200 bg-white p-6">
            <h2 className="text-sm font-semibold text-neutral-900">
              Team Members
            </h2>
            <div className="mt-4 space-y-2">
              {members.map((m) => (
                <div
                  key={m.email}
                  className="flex items-center gap-3 rounded-lg border border-neutral-100 p-4"
                >
                  <div className="flex h-8 w-8 items-center justify-center rounded-full bg-brand-100 text-[10px] font-bold text-brand-700">
                    {m.avatar}
                  </div>
                  <div className="flex-1">
                    <p className="text-sm font-medium text-neutral-900">
                      {m.name}
                    </p>
                    <p className="text-[10px] text-neutral-500">{m.email}</p>
                  </div>
                  <span
                    className={`rounded-full px-2.5 py-0.5 text-[10px] font-medium ${roleColors[m.role]}`}
                  >
                    {m.role}
                  </span>
                  <span className="text-[10px] text-neutral-400">
                    {m.lastActive}
                  </span>
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-2xl border border-neutral-200 bg-white p-6">
            <h2 className="text-sm font-semibold text-neutral-900">
              Pending Invites
            </h2>
            <div className="mt-4 space-y-2">
              {pendingInvites.map((inv) => (
                <div
                  key={inv.email}
                  className="flex items-center justify-between rounded-lg border border-neutral-100 p-4"
                >
                  <div>
                    <p className="text-xs font-medium text-neutral-800">
                      {inv.email}
                    </p>
                    <p className="text-[10px] text-neutral-400">
                      Invited as {inv.role} · Sent {inv.sent}
                    </p>
                  </div>
                  <div className="flex gap-2">
                    <button className="rounded-md border border-neutral-200 px-2 py-1 text-[10px] font-medium text-neutral-600">
                      Resend
                    </button>
                    <button className="rounded-md border border-neutral-200 px-2 py-1 text-[10px] font-medium text-red-600">
                      Revoke
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="space-y-4">
          <div className="rounded-2xl border border-neutral-200 bg-white p-5">
            <h3 className="text-xs font-semibold text-neutral-900">
              Workspace Stats
            </h3>
            <div className="mt-3 space-y-3">
              {[
                { label: "Team size", value: "3 members" },
                { label: "Pending invites", value: "2" },
                { label: "Solutions", value: "1 active" },
                { label: "Total exports", value: "14" },
                { label: "Plan", value: "Growth ($149/mo)" },
              ].map((s) => (
                <div key={s.label} className="flex justify-between text-xs">
                  <span className="text-neutral-500">{s.label}</span>
                  <span className="font-medium text-neutral-800">
                    {s.value}
                  </span>
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-2xl border border-neutral-200 bg-white p-5">
            <h3 className="text-xs font-semibold text-neutral-900">
              Recent Activity
            </h3>
            <div className="mt-3 space-y-2.5">
              {recentActivity.map((a, i) => (
                <div key={i} className="flex items-start gap-2">
                  <span className="mt-0.5 h-1.5 w-1.5 shrink-0 rounded-full bg-brand-400" />
                  <div>
                    <p className="text-[10px] text-neutral-700">
                      <span className="font-medium">{a.user}</span> {a.action}
                    </p>
                    <p className="text-[10px] text-neutral-400">{a.time}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </AppShell>
  );
}
