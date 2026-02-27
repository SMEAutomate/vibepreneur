import { AppShell } from "../AppShell";

const days = [
  {
    day: "Mon",
    title: "Problem awareness post",
    platform: "LinkedIn",
    type: "Text post",
    preview:
      "12 hours. That's how much your HR team spends on onboarding every week...",
  },
  {
    day: "Tue",
    title: "Share free audit checklist",
    platform: "LinkedIn + Email",
    type: "Resource share",
    preview:
      "I put together a simple checklist for evaluating your onboarding process...",
  },
  {
    day: "Wed",
    title: "Customer pain story",
    platform: "LinkedIn",
    type: "Story post",
    preview:
      "Last month I talked to an HR lead who lost 3 new hires in 60 days...",
  },
  {
    day: "Thu",
    title: "Data-driven insight",
    platform: "Twitter/X + LinkedIn",
    type: "Stat post",
    preview:
      "23% of new hires experience at least one missed onboarding step...",
  },
  {
    day: "Fri",
    title: "Behind the scenes",
    platform: "LinkedIn",
    type: "Build in public",
    preview:
      "Here's what I'm building and why. Onboarding is broken for growing companies...",
  },
  {
    day: "Sat",
    title: "Comparison content",
    platform: "Blog",
    type: "Long-form",
    preview:
      "Manual vs. automated onboarding: what actually changes when you switch.",
  },
  {
    day: "Sun",
    title: "Week recap + CTA",
    platform: "Email newsletter",
    type: "Newsletter",
    preview:
      "This week's biggest insight: the companies that onboard well, retain well.",
  },
];

export function ContentLaunchKit() {
  return (
    <AppShell
      activeNav="Distribution"
      title="Content Launch Kit"
      subtitle="OnboardFlow — 7-day calendar"
      actions={
        <button className="rounded-lg bg-brand-600 px-4 py-2 text-xs font-medium text-white">
          Export calendar
        </button>
      }
    >
      <div className="space-y-3">
        {days.map((d) => (
          <div
            key={d.day}
            className="flex gap-4 rounded-2xl border border-neutral-200 bg-white p-5"
          >
            <div className="w-12 shrink-0 text-center">
              <span className="text-sm font-bold text-brand-600">{d.day}</span>
            </div>
            <div className="flex-1">
              <div className="flex items-center gap-3">
                <p className="text-sm font-medium text-neutral-900">
                  {d.title}
                </p>
                <span className="rounded-full bg-neutral-100 px-2 py-0.5 text-[10px] text-neutral-500">
                  {d.type}
                </span>
              </div>
              <p className="mt-1 text-xs text-neutral-400">{d.platform}</p>
              <div className="mt-3 rounded-lg bg-neutral-50 p-3">
                <p className="text-xs italic leading-relaxed text-neutral-600">
                  {d.preview}
                </p>
              </div>
            </div>
            <div className="flex shrink-0 flex-col gap-1">
              <button className="rounded-md border border-neutral-200 px-2 py-1 text-[10px] font-medium text-neutral-600">
                Edit
              </button>
              <button className="rounded-md border border-neutral-200 px-2 py-1 text-[10px] font-medium text-neutral-600">
                Copy
              </button>
            </div>
          </div>
        ))}
      </div>
    </AppShell>
  );
}
