import { AppShell } from "../AppShell";

const sequences = [
  {
    type: "LinkedIn DM",
    steps: [
      {
        day: "Day 1",
        subject: "Connection request + personal note",
        preview:
          "Hi [Name], I noticed you're scaling the people team at [Company]. I've been working on something that might help...",
      },
      {
        day: "Day 3",
        subject: "Follow-up with value",
        preview:
          "Thanks for connecting! I put together a quick onboarding audit checklist. thought your team might find it useful.",
      },
      {
        day: "Day 7",
        subject: "Soft ask",
        preview:
          "Curious. what does onboarding look like for you right now? I've been talking to a lot of HR leads about this.",
      },
    ],
  },
  {
    type: "Cold Email",
    steps: [
      {
        day: "Day 1",
        subject: "Your team is spending 12 hours on this",
        preview:
          "Hi [Name], Most HR teams at [Company size] companies spend 12+ hours per week on manual onboarding. I built something that cuts that to under 2 hours...",
      },
      {
        day: "Day 4",
        subject: "Quick follow-up",
        preview:
          "Just wanted to make sure this didn't get buried. Here's the free audit checklist I mentioned. no strings attached.",
      },
      {
        day: "Day 8",
        subject: "One question",
        preview:
          "What's the biggest onboarding headache at [Company]? I'm collecting insights from HR leaders and would love your perspective.",
      },
    ],
  },
];

export function OutreachStudio() {
  return (
    <AppShell
      activeNav="Distribution"
      title="Outreach Studio"
      subtitle="OnboardFlow. Human-tone templates"
      actions={
        <button className="rounded-lg bg-brand-600 px-4 py-2 text-xs font-medium text-white">
          Export sequences
        </button>
      }
    >
      <div className="space-y-8">
        {sequences.map((seq) => (
          <div key={seq.type}>
            <h2 className="text-sm font-semibold text-neutral-900">
              {seq.type} Sequence
            </h2>
            <div className="mt-4 space-y-3">
              {seq.steps.map((step) => (
                <div
                  key={step.day}
                  className="rounded-2xl border border-neutral-200 bg-white p-5"
                >
                  <div className="flex items-center gap-3">
                    <span className="rounded-full bg-brand-50 px-3 py-1 text-xs font-medium text-brand-700">
                      {step.day}
                    </span>
                    <span className="text-sm font-medium text-neutral-800">
                      {step.subject}
                    </span>
                  </div>
                  <div className="mt-3 rounded-lg bg-neutral-50 p-4">
                    <p className="text-xs italic leading-relaxed text-neutral-600">
                      {step.preview}
                    </p>
                  </div>
                  <div className="mt-3 flex gap-2">
                    <button className="rounded-md border border-neutral-200 px-3 py-1 text-[10px] font-medium text-neutral-600">
                      Edit
                    </button>
                    <button className="rounded-md border border-neutral-200 px-3 py-1 text-[10px] font-medium text-neutral-600">
                      Copy
                    </button>
                    <button className="rounded-md border border-neutral-200 px-3 py-1 text-[10px] font-medium text-neutral-600">
                      Personalise
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </AppShell>
  );
}
