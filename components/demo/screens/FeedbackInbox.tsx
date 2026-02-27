import { AppShell } from "../AppShell";

const feedback = [
  {
    from: "Alex T., HR Manager",
    text: "Love the audit checklist. Would be great if it also covered IT provisioning steps.",
    tags: ["Feature request", "Provisioning"],
    action: "Add to roadmap",
    time: "2h ago",
  },
  {
    from: "Maria S., VP People Ops",
    text: "The onboarding timeline view is exactly what I needed. Can I share it with my team?",
    tags: ["Positive", "Sharing"],
    action: "Enable team sharing",
    time: "5h ago",
  },
  {
    from: "James K., COO",
    text: "Pricing feels right for our size (120 people). Would want annual discount.",
    tags: ["Pricing", "Enterprise"],
    action: "Review annual pricing",
    time: "1d ago",
  },
  {
    from: "Priya R., HR Coordinator",
    text: "Compliance checklist is missing GDPR-specific items for our EU team.",
    tags: ["Bug", "Compliance"],
    action: "Add EU compliance module",
    time: "1d ago",
  },
  {
    from: "David L., Head of HR",
    text: "Tried the cold outreach templates — got 3 replies from 20 messages. Better than expected.",
    tags: ["Positive", "Outreach"],
    action: "Track as validation data",
    time: "2d ago",
  },
  {
    from: "Lisa W., L&D Manager",
    text: "Would love integration with our LMS for training assignments.",
    tags: ["Feature request", "Integration"],
    action: "Evaluate LMS integration",
    time: "3d ago",
  },
];

export function FeedbackInbox() {
  return (
    <AppShell
      activeNav="Insights"
      title="Feedback Inbox"
      subtitle="6 items · 2 need action"
      actions={
        <select className="rounded-lg border border-neutral-200 bg-white px-3 py-2 text-xs text-neutral-600">
          <option>All tags</option>
          <option>Feature request</option>
          <option>Positive</option>
          <option>Bug</option>
          <option>Pricing</option>
        </select>
      }
    >
      <div className="space-y-3">
        {feedback.map((f) => (
          <div
            key={f.from}
            className="rounded-2xl border border-neutral-200 bg-white p-5"
          >
            <div className="flex items-start justify-between gap-4">
              <div className="flex-1">
                <div className="flex items-center gap-2">
                  <span className="text-xs font-medium text-neutral-800">
                    {f.from}
                  </span>
                  <span className="text-[10px] text-neutral-400">{f.time}</span>
                </div>
                <p className="mt-2 text-sm leading-relaxed text-neutral-600">
                  {f.text}
                </p>
                <div className="mt-3 flex flex-wrap gap-1.5">
                  {f.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full bg-neutral-100 px-2.5 py-0.5 text-[10px] font-medium text-neutral-600"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
              <div className="shrink-0 rounded-lg border border-brand-200 bg-brand-50/50 px-3 py-1.5">
                <p className="text-[10px] font-medium text-brand-700">
                  {f.action}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </AppShell>
  );
}
