import { AppShell } from "../AppShell";

export function BuyerPersonaEditor() {
  return (
    <AppShell
      activeNav="Positioning"
      title="Buyer Persona Editor"
      subtitle="OnboardFlow — Know exactly who you're selling to"
      actions={
        <>
          <button className="rounded-lg border border-neutral-200 px-4 py-2 text-xs font-medium text-neutral-600">
            Add persona
          </button>
          <button className="rounded-lg bg-brand-600 px-4 py-2 text-xs font-medium text-white">
            Export personas
          </button>
        </>
      }
    >
      <div className="grid gap-6 lg:grid-cols-3">
        <div className="rounded-2xl border border-brand-200 bg-white p-6 lg:col-span-2">
          <div className="flex items-center gap-3 border-b border-neutral-100 pb-4">
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-brand-100 text-sm font-bold text-brand-700">
              JM
            </div>
            <div>
              <h2 className="text-sm font-semibold text-neutral-900">
                Jessica Martinez
              </h2>
              <p className="text-xs text-neutral-500">
                VP People Operations · Primary buyer
              </p>
            </div>
            <span className="ml-auto rounded-full bg-brand-50 px-3 py-1 text-[10px] font-medium text-brand-700">
              Active
            </span>
          </div>

          <div className="mt-5 grid gap-5 md:grid-cols-2">
            <div>
              <h3 className="text-[10px] font-medium uppercase tracking-wider text-neutral-400">
                Demographics
              </h3>
              <div className="mt-2 space-y-2">
                {[
                  { label: "Age range", value: "32–45" },
                  { label: "Company size", value: "50–200 employees" },
                  { label: "Industry", value: "B2B SaaS / Tech" },
                  { label: "Reports to", value: "CEO or COO" },
                  { label: "Team size", value: "3–8 direct reports" },
                ].map((d) => (
                  <div key={d.label} className="flex justify-between text-xs">
                    <span className="text-neutral-500">{d.label}</span>
                    <span className="font-medium text-neutral-800">
                      {d.value}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-[10px] font-medium uppercase tracking-wider text-neutral-400">
                Goals
              </h3>
              <ul className="mt-2 space-y-1.5">
                {[
                  "Scale onboarding without scaling headcount",
                  "Reduce time-to-productivity for new hires",
                  "Pass compliance audits with confidence",
                  "Free team for strategic people initiatives",
                ].map((g) => (
                  <li
                    key={g}
                    className="flex items-start gap-2 text-xs text-neutral-600"
                  >
                    <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-emerald-400" />
                    {g}
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="text-[10px] font-medium uppercase tracking-wider text-neutral-400">
                Pain Points
              </h3>
              <ul className="mt-2 space-y-1.5">
                {[
                  "12+ hours/week on repetitive onboarding tasks",
                  "New hires falling through the cracks",
                  "No single source of truth for onboarding status",
                  "Manual processes create compliance risk",
                ].map((p) => (
                  <li
                    key={p}
                    className="flex items-start gap-2 text-xs text-neutral-600"
                  >
                    <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-red-400" />
                    {p}
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="text-[10px] font-medium uppercase tracking-wider text-neutral-400">
                Buying Triggers
              </h3>
              <ul className="mt-2 space-y-1.5">
                {[
                  "Hiring pace exceeds 5 new hires/month",
                  "Compliance audit on the horizon",
                  "Recent bad onboarding experience reported",
                  "Board pressure to improve retention metrics",
                ].map((t) => (
                  <li
                    key={t}
                    className="flex items-start gap-2 text-xs text-neutral-600"
                  >
                    <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-amber-400" />
                    {t}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="mt-5 border-t border-neutral-100 pt-4">
            <h3 className="text-[10px] font-medium uppercase tracking-wider text-neutral-400">
              Where They Hang Out
            </h3>
            <div className="mt-2 flex flex-wrap gap-1.5">
              {[
                "LinkedIn (daily)",
                "SHRM conferences",
                "People Ops Slack communities",
                "HR Tech podcasts",
                "Lattice / Culture Amp blogs",
              ].map((ch) => (
                <span
                  key={ch}
                  className="rounded-full bg-neutral-100 px-2.5 py-0.5 text-[10px] text-neutral-600"
                >
                  {ch}
                </span>
              ))}
            </div>
          </div>
        </div>

        <div className="space-y-4">
          <div className="rounded-2xl border border-neutral-200 bg-white p-5">
            <h3 className="text-xs font-semibold text-neutral-900">
              Other Personas
            </h3>
            <div className="mt-3 space-y-2">
              {[
                { initials: "MT", name: "IT Manager", role: "Influencer" },
                { initials: "DK", name: "CFO", role: "Economic buyer" },
                { initials: "NR", name: "New Hire", role: "End user" },
              ].map((p) => (
                <div
                  key={p.initials}
                  className="flex items-center gap-2 rounded-lg border border-neutral-100 p-3"
                >
                  <div className="flex h-7 w-7 items-center justify-center rounded-full bg-neutral-100 text-[10px] font-bold text-neutral-600">
                    {p.initials}
                  </div>
                  <div>
                    <p className="text-xs font-medium text-neutral-800">
                      {p.name}
                    </p>
                    <p className="text-[10px] text-neutral-400">{p.role}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-2xl border border-neutral-200 bg-white p-5">
            <h3 className="text-xs font-semibold text-neutral-900">
              Persona Completeness
            </h3>
            <div className="mt-3 space-y-3">
              {[
                { label: "Demographics", pct: 100 },
                { label: "Goals & pains", pct: 100 },
                { label: "Buying triggers", pct: 85 },
                { label: "Channels", pct: 70 },
                { label: "Objections", pct: 40 },
              ].map((s) => (
                <div key={s.label}>
                  <div className="flex justify-between text-[10px]">
                    <span className="text-neutral-500">{s.label}</span>
                    <span className="font-medium text-neutral-700">
                      {s.pct}%
                    </span>
                  </div>
                  <div className="mt-1 h-1 rounded-full bg-neutral-100">
                    <div
                      className="h-full rounded-full bg-brand-500"
                      style={{ width: `${s.pct}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </AppShell>
  );
}
