import { AppShell } from "@/components/demo/AppShell";

export interface VibeSignal {
  label: string;
  value: string;
}

export interface VibeScoreLine {
  label: string;
  score: number;
}

export interface VibeOpportunityScreenProps {
  subtitle: string;
  problem: string;
  signals: VibeSignal[];
  urgency: string[];
  primaryBuyer: string;
  budgetHolder: string;
  champions: string;
  wedge: string;
  entryFormat: string;
  score: number;
  scoreLines: VibeScoreLine[];
}

export function VibeOpportunityScreen({
  subtitle,
  problem,
  signals,
  urgency,
  primaryBuyer,
  budgetHolder,
  champions,
  wedge,
  entryFormat,
  score,
  scoreLines,
}: VibeOpportunityScreenProps) {
  return (
    <AppShell
      activeNav="Opportunities"
      title="Opportunity Detail"
      subtitle={subtitle}
      actions={
        <button className="rounded-lg bg-brand-600 px-4 py-2 text-xs font-medium text-white">
          Build solution →
        </button>
      }
    >
      <div className="grid gap-6 lg:grid-cols-3">
        <div className="space-y-6 lg:col-span-2">
          <div className="rounded-2xl border border-neutral-200 bg-white p-6">
            <h2 className="text-sm font-semibold text-neutral-900">
              Problem Breakdown
            </h2>
            <p className="mt-3 text-sm leading-relaxed text-neutral-600">
              {problem}
            </p>
            <div className="mt-4 grid grid-cols-2 gap-3">
              {signals.map((signal) => (
                <div
                  key={signal.label}
                  className="rounded-lg bg-neutral-50 p-3"
                >
                  <p className="text-[10px] font-medium uppercase tracking-wider text-neutral-400">
                    {signal.label}
                  </p>
                  <p className="mt-1 text-sm font-semibold text-neutral-900">
                    {signal.value}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-2xl border border-neutral-200 bg-white p-6">
            <h2 className="text-sm font-semibold text-neutral-900">
              Urgency Signals
            </h2>
            <div className="mt-4 space-y-3">
              {urgency.map((signal) => (
                <div
                  key={signal}
                  className="flex items-start gap-2 text-sm text-neutral-600"
                >
                  <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-red-400" />
                  {signal}
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="space-y-6">
          <div className="rounded-2xl border border-neutral-200 bg-white p-6">
            <h2 className="text-sm font-semibold text-neutral-900">Who Pays</h2>
            <div className="mt-4 space-y-4">
              {[
                { label: "Primary buyer", value: primaryBuyer },
                { label: "Budget holder", value: budgetHolder },
                { label: "Champions", value: champions },
              ].map((role) => (
                <div key={role.label}>
                  <p className="text-[10px] font-medium uppercase tracking-wider text-neutral-400">
                    {role.label}
                  </p>
                  <p className="mt-1 text-sm font-medium text-neutral-800">
                    {role.value}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-2xl border border-brand-100 bg-brand-50/50 p-6">
            <h2 className="text-sm font-semibold text-brand-800">
              Suggested Wedge
            </h2>
            <p className="mt-3 text-sm leading-relaxed text-brand-700">
              {wedge}
            </p>
            <div className="mt-4 rounded-lg bg-white p-3">
              <p className="text-[10px] font-medium uppercase tracking-wider text-neutral-400">
                Entry format
              </p>
              <p className="mt-1 text-sm font-medium text-neutral-800">
                {entryFormat}
              </p>
            </div>
          </div>

          <div className="rounded-2xl border border-neutral-200 bg-white p-6">
            <h2 className="text-sm font-semibold text-neutral-900">
              Opportunity Score
            </h2>
            <div className="mt-3 flex items-end gap-2">
              <span className="text-3xl font-bold text-emerald-600">
                {score}
              </span>
              <span className="mb-1 text-sm text-neutral-400">/100</span>
            </div>
            <div className="mt-3 space-y-2">
              {scoreLines.map((line) => (
                <div
                  key={line.label}
                  className="flex items-center justify-between text-xs"
                >
                  <span className="text-neutral-500">{line.label}</span>
                  <span className="font-medium text-neutral-700">
                    {line.score}/10
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </AppShell>
  );
}
