import { AppShell } from "../AppShell";

const testimonials = [
  {
    quote:
      "We cut onboarding from 5 days to under 24 hours. The compliance tracking alone saves us 6 hours a week.",
    author: "Alex Rivera",
    title: "VP People Ops",
    company: "TechCorp (142 employees)",
    source: "Interview",
    usedIn: ["Landing page", "Sales deck"],
    rating: 5,
  },
  {
    quote:
      "Finally, onboarding software that doesn't require an IT team to set up. We were live in 3 days.",
    author: "Priya Sharma",
    title: "HR Director",
    company: "ScaleUp Inc (89 employees)",
    source: "G2 review",
    usedIn: ["Comparison page"],
    rating: 5,
  },
  {
    quote:
      "The audit checklist sold me before I even tried the product. It showed me exactly what we were missing.",
    author: "Marcus Johnson",
    title: "Head of People",
    company: "CloudBase (67 employees)",
    source: "Email",
    usedIn: [],
    rating: 4,
  },
  {
    quote:
      "Our new hire NPS went from 32 to 68 in the first quarter. The portal experience is a game-changer.",
    author: "Emily Chen",
    title: "People Operations Manager",
    company: "DataFlow (112 employees)",
    source: "Survey",
    usedIn: ["LinkedIn post"],
    rating: 5,
  },
];

export function SocialProofCollector() {
  return (
    <AppShell
      activeNav="Growth"
      title="Social Proof Collector"
      subtitle="OnboardFlow — Testimonials and social proof"
      actions={
        <button className="rounded-lg bg-brand-600 px-4 py-2 text-xs font-medium text-white">
          Request testimonial
        </button>
      }
    >
      <div className="grid gap-4 md:grid-cols-4">
        {[
          { label: "Total collected", value: "4" },
          { label: "Used on site", value: "3" },
          { label: "Avg rating", value: "4.8" },
          { label: "Pending requests", value: "2" },
        ].map((m) => (
          <div
            key={m.label}
            className="rounded-2xl border border-neutral-200 bg-white p-5"
          >
            <p className="text-xs text-neutral-500">{m.label}</p>
            <p className="mt-2 text-2xl font-bold text-neutral-900">
              {m.value}
            </p>
          </div>
        ))}
      </div>

      <div className="mt-8 space-y-4">
        {testimonials.map((t) => (
          <div
            key={t.author}
            className="rounded-2xl border border-neutral-200 bg-white p-6"
          >
            <div className="flex items-start justify-between gap-4">
              <div className="flex-1">
                <div className="flex gap-0.5">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <span
                      key={i}
                      className={`text-xs ${i < t.rating ? "text-amber-400" : "text-neutral-200"}`}
                    >
                      ★
                    </span>
                  ))}
                </div>
                <blockquote className="mt-3 text-sm italic leading-relaxed text-neutral-700">
                  &ldquo;{t.quote}&rdquo;
                </blockquote>
                <div className="mt-3">
                  <p className="text-xs font-medium text-neutral-900">
                    {t.author}
                  </p>
                  <p className="text-[10px] text-neutral-500">
                    {t.title}, {t.company}
                  </p>
                </div>
              </div>
              <span className="shrink-0 rounded-full bg-neutral-100 px-2.5 py-0.5 text-[10px] text-neutral-500">
                via {t.source}
              </span>
            </div>

            <div className="mt-4 flex items-center justify-between border-t border-neutral-100 pt-3">
              <div className="flex gap-1.5">
                {t.usedIn.length > 0 ? (
                  t.usedIn.map((u) => (
                    <span
                      key={u}
                      className="rounded-full bg-brand-50 px-2 py-0.5 text-[10px] font-medium text-brand-700"
                    >
                      {u}
                    </span>
                  ))
                ) : (
                  <span className="text-[10px] text-neutral-400">
                    Not yet used
                  </span>
                )}
              </div>
              <div className="flex gap-2">
                <button className="rounded-md border border-neutral-200 px-2 py-1 text-[10px] font-medium text-neutral-600">
                  Copy
                </button>
                <button className="rounded-md border border-neutral-200 px-2 py-1 text-[10px] font-medium text-neutral-600">
                  Add to page
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </AppShell>
  );
}
