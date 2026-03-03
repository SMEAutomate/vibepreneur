import { AppShell } from "../AppShell";

const weeks = [
  {
    label: "Week 1",
    title: "Foundation",
    tasks: [
      {
        text: "Publish positioning article on LinkedIn",
        channel: "LinkedIn",
        status: "done",
      },
      {
        text: "Set up landing page with lead capture",
        channel: "Website",
        status: "done",
      },
      {
        text: "Create free onboarding audit checklist",
        channel: "Lead magnet",
        status: "in-progress",
      },
    ],
  },
  {
    label: "Week 2",
    title: "Outreach",
    tasks: [
      {
        text: "Cold outreach to 50 VP People Ops (LinkedIn)",
        channel: "LinkedIn",
        status: "planned",
      },
      {
        text: "Publish case study: manual vs automated onboarding",
        channel: "Blog",
        status: "planned",
      },
      {
        text: "Guest post pitch to 3 HR publications",
        channel: "PR",
        status: "planned",
      },
    ],
  },
  {
    label: "Week 3",
    title: "Content push",
    tasks: [
      {
        text: "Launch LinkedIn poll: biggest onboarding frustration",
        channel: "LinkedIn",
        status: "planned",
      },
      {
        text: "Webinar: 5 onboarding mistakes growing companies make",
        channel: "Webinar",
        status: "planned",
      },
      {
        text: "Follow up on all Week 2 outreach",
        channel: "Email",
        status: "planned",
      },
    ],
  },
  {
    label: "Week 4",
    title: "Conversion",
    tasks: [
      {
        text: "Direct outreach to audit checklist downloaders",
        channel: "Email",
        status: "planned",
      },
      {
        text: "Publish comparison: OnboardFlow vs manual process",
        channel: "Website",
        status: "planned",
      },
      {
        text: "Run traction review: what worked, what's next",
        channel: "Internal",
        status: "planned",
      },
    ],
  },
];

const statusColors: Record<string, string> = {
  done: "bg-emerald-50 text-emerald-700",
  "in-progress": "bg-amber-50 text-amber-700",
  planned: "bg-neutral-100 text-neutral-600",
};

export function GoToMarketPlan() {
  return (
    <AppShell
      activeNav="Go-To-Market"
      title="Go-To-Market Plan"
      subtitle="OnboardFlow. 30-day launch plan"
      actions={
        <button className="rounded-lg bg-brand-600 px-4 py-2 text-xs font-medium text-white">
          Export plan
        </button>
      }
    >
      <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
        {weeks.map((week) => (
          <div
            key={week.label}
            className="rounded-2xl border border-neutral-200 bg-white p-5"
          >
            <div className="flex items-center gap-2">
              <span className="text-xs font-bold text-brand-600">
                {week.label}
              </span>
              <span className="text-xs text-neutral-400">·</span>
              <span className="text-xs font-medium text-neutral-700">
                {week.title}
              </span>
            </div>
            <div className="mt-4 space-y-3">
              {week.tasks.map((task) => (
                <div
                  key={task.text}
                  className="rounded-lg border border-neutral-100 p-3"
                >
                  <p className="text-xs leading-relaxed text-neutral-700">
                    {task.text}
                  </p>
                  <div className="mt-2 flex items-center justify-between">
                    <span className="text-[10px] text-neutral-400">
                      {task.channel}
                    </span>
                    <span
                      className={`rounded-full px-2 py-0.5 text-[10px] font-medium ${statusColors[task.status]}`}
                    >
                      {task.status === "done"
                        ? "Done"
                        : task.status === "in-progress"
                          ? "In progress"
                          : "Planned"}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      <div className="mt-8 rounded-2xl border border-neutral-200 bg-white p-6">
        <h2 className="text-sm font-semibold text-neutral-900">
          Resources Needed
        </h2>
        <div className="mt-4 grid gap-4 md:grid-cols-3">
          {[
            { label: "Time commitment", value: "8–10 hrs/week" },
            { label: "Budget", value: "$0 (organic only)" },
            { label: "Tools", value: "LinkedIn, email, landing page" },
          ].map((r) => (
            <div key={r.label} className="rounded-lg bg-neutral-50 p-4">
              <p className="text-[10px] font-medium uppercase tracking-wider text-neutral-400">
                {r.label}
              </p>
              <p className="mt-1 text-sm font-medium text-neutral-800">
                {r.value}
              </p>
            </div>
          ))}
        </div>
      </div>
    </AppShell>
  );
}
