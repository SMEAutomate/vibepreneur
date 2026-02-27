import { AppShell } from "../AppShell";

const audiences = ["VP People Ops", "HR Coordinators", "COO / CFO"];
const angles = [
  {
    angle: "Time savings",
    messages: [
      {
        headline: "Stop spending 12 hours on onboarding.",
        hook: "Your team's time is worth more than paperwork.",
        proof: "Mid-market HR teams reclaim 12+ hours/week.",
      },
      {
        headline: "One click, not 47 manual steps.",
        hook: "Imagine every new hire onboarded before day one.",
        proof: "Zero missed provisioning tasks, every time.",
      },
      {
        headline: "Cut onboarding costs by 60%.",
        hook: "Every hour your HR team spends on admin has an ROI of zero.",
        proof: "Companies save $2,400/hire in process costs.",
      },
    ],
  },
  {
    angle: "Experience quality",
    messages: [
      {
        headline: "First impressions shouldn't be a checklist.",
        hook: "New hires form opinions in the first 48 hours.",
        proof: "+35 point NPS improvement in new hire satisfaction.",
      },
      {
        headline: "Make every new hire feel expected.",
        hook: "Day one should feel like a welcome, not a scramble.",
        proof: "92% of new hires rate the experience as 'excellent'.",
      },
      {
        headline: "Retention starts before day one.",
        hook: "23% of new hires leave within 45 days. Most cite poor onboarding.",
        proof: "Reduce early attrition by 40% with structured onboarding.",
      },
    ],
  },
  {
    angle: "Scale readiness",
    messages: [
      {
        headline:
          "Hire 10 people next month. Without hiring another HR person.",
        hook: "Your process should scale with your ambition.",
        proof: "Teams onboard 5–10 hires/month with the same headcount.",
      },
      {
        headline: "Compliance-ready from day one.",
        hook: "Growing fast shouldn't mean growing sloppy.",
        proof: "100% audit trail for every onboarding step.",
      },
      {
        headline: "The HR platform that grows with you.",
        hook: "Built for 50 employees today. Ready for 500 tomorrow.",
        proof: "No migration required as you scale.",
      },
    ],
  },
];

export function MessagingMatrix() {
  return (
    <AppShell
      activeNav="Positioning"
      title="Messaging Matrix"
      subtitle="3 audiences × 3 angles — ready to use."
      actions={
        <button className="rounded-lg bg-brand-600 px-4 py-2 text-xs font-medium text-white">
          Copy all
        </button>
      }
    >
      <div className="overflow-x-auto">
        <table className="w-full min-w-[800px] border-collapse">
          <thead>
            <tr>
              <th className="sticky left-0 z-10 bg-neutral-50 p-3 text-left text-[10px] font-semibold uppercase tracking-wider text-neutral-400">
                Angle
              </th>
              {audiences.map((a) => (
                <th
                  key={a}
                  className="p-3 text-left text-[10px] font-semibold uppercase tracking-wider text-neutral-400"
                >
                  {a}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {angles.map((row) => (
              <tr key={row.angle} className="border-t border-neutral-100">
                <td className="sticky left-0 z-10 bg-neutral-50 p-3 align-top">
                  <span className="text-xs font-semibold text-brand-700">
                    {row.angle}
                  </span>
                </td>
                {row.messages.map((msg, i) => (
                  <td key={i} className="p-3 align-top">
                    <div className="space-y-2 rounded-xl border border-neutral-200 bg-white p-4">
                      <p className="text-sm font-semibold text-neutral-900">
                        {msg.headline}
                      </p>
                      <p className="text-xs text-neutral-500">{msg.hook}</p>
                      <p className="text-[10px] font-medium text-emerald-600">
                        {msg.proof}
                      </p>
                    </div>
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </AppShell>
  );
}
