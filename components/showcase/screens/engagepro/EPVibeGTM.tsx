import { AppShell } from "@/components/demo/AppShell";

const weeks = [
  {
    label: "Week 1",
    title: "Foundation",
    tasks: [
      {
        text: "Publish LinkedIn article on consulting ops mistakes that kill margins",
        channel: "LinkedIn",
        status: "done",
      },
      {
        text: "Set up landing page with free proposal template download",
        channel: "Website",
        status: "done",
      },
      {
        text: "Create free consulting proposal template (Google Docs + Notion)",
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
        text: "Cold outreach to 40 boutique consulting firm founders",
        channel: "LinkedIn",
        status: "planned",
      },
      {
        text: "Publish case study: manual proposals vs. templated workflows",
        channel: "Blog",
        status: "planned",
      },
      {
        text: "Post in 5 consulting communities (Pavilion, SoDA, independent groups)",
        channel: "Community",
        status: "planned",
      },
    ],
  },
  {
    label: "Week 3",
    title: "Content push",
    tasks: [
      {
        text: "Host webinar: Streamlining consulting ops for solo and small firms",
        channel: "Webinar",
        status: "planned",
      },
      {
        text: "Follow up on all Week 2 outreach responses",
        channel: "Email",
        status: "planned",
      },
      {
        text: "Reach out to 3 consulting tool review sites for partner listings",
        channel: "Partnerships",
        status: "planned",
      },
    ],
  },
  {
    label: "Week 4",
    title: "Conversion",
    tasks: [
      {
        text: "Demo EngagePro to webinar attendees and warm leads",
        channel: "Email",
        status: "planned",
      },
      {
        text: "Publish comparison: EngagePro vs. spreadsheets and manual tracking",
        channel: "Website",
        status: "planned",
      },
      {
        text: "Run traction review: signups, demos booked, conversion rate",
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

export function EPVibeGTM() {
  return (
    <AppShell
      activeNav="Go-To-Market"
      title="Go-To-Market Plan"
      subtitle="EngagePro. 30-day launch plan"
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
            { label: "Time commitment", value: "8-10 hrs/week" },
            { label: "Budget", value: "$0 (organic only)" },
            {
              label: "Tools",
              value: "LinkedIn, email, landing page, webinar platform",
            },
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
