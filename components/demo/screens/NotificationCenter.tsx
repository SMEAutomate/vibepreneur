import { AppShell } from "../AppShell";

const notifications = [
  {
    type: "insight",
    title: "New market signal detected",
    body: '"Onboarding automation" search volume up 34% this quarter. Consider creating content around this trend.',
    time: "2h ago",
    read: false,
    action: "View signal",
  },
  {
    type: "growth",
    title: "Experiment completed",
    body: "LinkedIn DM variant B (question-first) outperformed by 2.1x. Recommended: scale to 100 prospects/week.",
    time: "6h ago",
    read: false,
    action: "View results",
  },
  {
    type: "team",
    title: "Alex Rivera exported the solution brief",
    body: "The latest version of your OnboardFlow solution brief was downloaded as PDF.",
    time: "8h ago",
    read: true,
    action: null,
  },
  {
    type: "validation",
    title: "Hypothesis validated",
    body: "VP People Ops will trade email for a free audit checklist. 42 downloads in first week, 18% demo conversion.",
    time: "1d ago",
    read: true,
    action: "View tracker",
  },
  {
    type: "content",
    title: "Content scheduled for tomorrow",
    body: '"Customer pain story" LinkedIn post is ready to publish. Review and approve before 9am.',
    time: "1d ago",
    read: true,
    action: "Review post",
  },
  {
    type: "growth",
    title: "Referral milestone reached",
    body: "Alex Rivera just made their 7th referral. They&apos;ve earned 3 months free so far.",
    time: "2d ago",
    read: true,
    action: null,
  },
  {
    type: "insight",
    title: "Competitor update",
    body: "BambooHR announced a new onboarding feature. Review your competitive positioning.",
    time: "3d ago",
    read: true,
    action: "View radar",
  },
  {
    type: "system",
    title: "Weekly summary ready",
    body: "Your weekly growth report is ready: 23 signups, 3 demo requests, 2 experiments completed.",
    time: "5d ago",
    read: true,
    action: "View report",
  },
];

const typeColors: Record<string, string> = {
  insight: "bg-brand-50 text-brand-700",
  growth: "bg-emerald-50 text-emerald-700",
  team: "bg-blue-50 text-blue-700",
  validation: "bg-amber-50 text-amber-700",
  content: "bg-purple-50 text-purple-700",
  system: "bg-neutral-100 text-neutral-600",
};

export function NotificationCenter() {
  return (
    <AppShell
      activeNav="Home"
      title="Notifications"
      subtitle="Stay on top of what matters"
      actions={
        <button className="rounded-lg border border-neutral-200 px-4 py-2 text-xs font-medium text-neutral-600">
          Mark all read
        </button>
      }
    >
      <div className="flex gap-2 border-b border-neutral-200 pb-4">
        {["All", "Unread", "Insights", "Growth", "Team"].map((tab) => (
          <button
            key={tab}
            className={`rounded-full px-3 py-1 text-xs font-medium ${tab === "All" ? "bg-brand-600 text-white" : "bg-neutral-100 text-neutral-600"}`}
          >
            {tab}
            {tab === "Unread" && (
              <span className="ml-1 inline-flex h-4 w-4 items-center justify-center rounded-full bg-red-500 text-[10px] text-white">
                2
              </span>
            )}
          </button>
        ))}
      </div>

      <div className="mt-4 space-y-2">
        {notifications.map((n, i) => (
          <div
            key={i}
            className={`flex gap-4 rounded-2xl border p-5 ${n.read ? "border-neutral-200 bg-white" : "border-brand-200 bg-brand-50/20"}`}
          >
            <div className="flex-1">
              <div className="flex items-center gap-2">
                <span
                  className={`rounded-full px-2 py-0.5 text-[10px] font-medium ${typeColors[n.type]}`}
                >
                  {n.type}
                </span>
                {!n.read && (
                  <span className="h-1.5 w-1.5 rounded-full bg-brand-600" />
                )}
              </div>
              <p className="mt-2 text-sm font-medium text-neutral-900">
                {n.title}
              </p>
              <p className="mt-1 text-xs text-neutral-500">{n.body}</p>
            </div>
            <div className="shrink-0 text-right">
              <p className="text-[10px] text-neutral-400">{n.time}</p>
              {n.action && (
                <button className="mt-2 rounded-md border border-neutral-200 px-2 py-1 text-[10px] font-medium text-neutral-600">
                  {n.action}
                </button>
              )}
            </div>
          </div>
        ))}
      </div>
    </AppShell>
  );
}
