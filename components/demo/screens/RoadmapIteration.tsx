import { AppShell } from "../AppShell";
import { StaggerItem } from "../stagger-item";

const columns = [
  {
    label: "Now",
    items: [
      {
        title: "Team sharing for audit results",
        signal: "3 users requested this week",
        priority: "High",
      },
      {
        title: "EU compliance module (GDPR)",
        signal: "Blocker for 2 enterprise leads",
        priority: "High",
      },
      {
        title: "Annual pricing option",
        signal: "COO feedback + 4 waitlist mentions",
        priority: "Medium",
      },
    ],
  },
  {
    label: "Next",
    items: [
      {
        title: "LMS integration (Cornerstone, Docebo)",
        signal: "Feature request from 6 L&D managers",
        priority: "Medium",
      },
      {
        title: "IT provisioning automation",
        signal: "Top request in audit checklist feedback",
        priority: "Medium",
      },
      {
        title: "Bulk onboarding (5+ hires at once)",
        signal: "Growing companies need batch processing",
        priority: "Low",
      },
    ],
  },
  {
    label: "Later",
    items: [
      {
        title: "Mobile app for new hire portal",
        signal: "Nice-to-have, not blocking adoption",
        priority: "Low",
      },
      {
        title: "Custom reporting dashboard",
        signal: "Enterprise ask, not mid-market priority",
        priority: "Low",
      },
      {
        title: "Multi-language support",
        signal: "Relevant when expanding beyond English markets",
        priority: "Low",
      },
    ],
  },
];

const priorityColors: Record<string, string> = {
  High: "bg-red-50 text-red-700",
  Medium: "bg-amber-50 text-amber-700",
  Low: "bg-neutral-100 text-neutral-500",
};

export function RoadmapIteration() {
  return (
    <AppShell
      activeNav="Growth"
      title="Roadmap & Iteration"
      subtitle="Prioritised by traction signals, not guesswork."
    >
      <div className="grid gap-6 md:grid-cols-3">
        {columns.map((col, i) => (
          <StaggerItem key={col.label} index={i}>
            <div>
              <h2 className="mb-4 text-sm font-semibold text-neutral-900">
                {col.label}
              </h2>
              <div className="space-y-3">
                {col.items.map((item) => (
                  <div
                    key={item.title}
                    className="rounded-2xl border border-neutral-200 bg-white p-5"
                  >
                    <div className="flex items-start justify-between">
                      <p className="text-sm font-medium text-neutral-900">
                        {item.title}
                      </p>
                      <span
                        className={`shrink-0 rounded-full px-2 py-0.5 text-[10px] font-medium ${priorityColors[item.priority]}`}
                      >
                        {item.priority}
                      </span>
                    </div>
                    <div className="mt-3 flex items-start gap-2 rounded-lg bg-neutral-50 p-2.5">
                      <span className="mt-0.5 text-[10px] text-neutral-400">
                        Signal:
                      </span>
                      <p className="text-[10px] leading-relaxed text-neutral-600">
                        {item.signal}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </StaggerItem>
        ))}
      </div>
    </AppShell>
  );
}
