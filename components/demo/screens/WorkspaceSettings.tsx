import { AppShell } from "../AppShell";

export function WorkspaceSettings() {
  return (
    <AppShell
      activeNav="Settings"
      title="Workspace Settings"
      subtitle="Defaults that apply across all your solutions."
    >
      <div className="mx-auto max-w-2xl space-y-6">
        <div className="rounded-2xl border border-neutral-200 bg-white p-6">
          <h2 className="text-sm font-semibold text-neutral-900">
            Brand Voice
          </h2>
          <div className="mt-4 space-y-4">
            <div>
              <label className="text-[10px] font-medium uppercase tracking-wider text-neutral-400">
                Tone
              </label>
              <div className="mt-2 flex gap-2">
                {["Professional", "Friendly", "Bold", "Understated"].map(
                  (t) => (
                    <span
                      key={t}
                      className={`rounded-full px-3 py-1 text-xs font-medium ${t === "Professional" ? "bg-brand-100 text-brand-700" : "bg-neutral-100 text-neutral-500"}`}
                    >
                      {t}
                    </span>
                  )
                )}
              </div>
            </div>
            <div>
              <label className="text-[10px] font-medium uppercase tracking-wider text-neutral-400">
                Writing style
              </label>
              <div className="mt-1 rounded-lg border border-neutral-200 bg-neutral-50 px-4 py-2.5 text-sm text-neutral-700">
                Concise, confident, no jargon. Speak like a trusted advisor, not
                a salesperson.
              </div>
            </div>
            <div>
              <label className="text-[10px] font-medium uppercase tracking-wider text-neutral-400">
                Words to avoid
              </label>
              <div className="mt-2 flex flex-wrap gap-1.5">
                {[
                  "synergy",
                  "leverage",
                  "disrupt",
                  "revolutionise",
                  "cutting-edge",
                  "AI-powered",
                ].map((w) => (
                  <span
                    key={w}
                    className="rounded-full bg-red-50 px-2.5 py-0.5 text-[10px] text-red-600"
                  >
                    {w}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="rounded-2xl border border-neutral-200 bg-white p-6">
          <h2 className="text-sm font-semibold text-neutral-900">
            Audience Defaults
          </h2>
          <div className="mt-4 space-y-4">
            <div>
              <label className="text-[10px] font-medium uppercase tracking-wider text-neutral-400">
                Primary industry
              </label>
              <div className="mt-1 rounded-lg border border-neutral-200 bg-neutral-50 px-4 py-2.5 text-sm text-neutral-700">
                SaaS / Technology
              </div>
            </div>
            <div>
              <label className="text-[10px] font-medium uppercase tracking-wider text-neutral-400">
                Company size
              </label>
              <div className="mt-1 rounded-lg border border-neutral-200 bg-neutral-50 px-4 py-2.5 text-sm text-neutral-700">
                50–200 employees
              </div>
            </div>
            <div>
              <label className="text-[10px] font-medium uppercase tracking-wider text-neutral-400">
                Primary buyer title
              </label>
              <div className="mt-1 rounded-lg border border-neutral-200 bg-neutral-50 px-4 py-2.5 text-sm text-neutral-700">
                VP People Operations
              </div>
            </div>
          </div>
        </div>

        <div className="rounded-2xl border border-neutral-200 bg-white p-6">
          <h2 className="text-sm font-semibold text-neutral-900">
            Consent & Privacy
          </h2>
          <div className="mt-4 space-y-4">
            {[
              {
                label: "Use my role data to detect opportunities",
                enabled: true,
              },
              {
                label: "Include industry benchmarks in outputs",
                enabled: true,
              },
              {
                label: "Share anonymised insights to improve recommendations",
                enabled: false,
              },
            ].map((s) => (
              <div key={s.label} className="flex items-center justify-between">
                <span className="text-sm text-neutral-700">{s.label}</span>
                <div
                  className={`h-5 w-9 rounded-full p-0.5 ${s.enabled ? "bg-brand-600" : "bg-neutral-200"}`}
                >
                  <div
                    className={`h-4 w-4 rounded-full bg-white shadow-sm transition-transform ${s.enabled ? "translate-x-4" : ""}`}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </AppShell>
  );
}
