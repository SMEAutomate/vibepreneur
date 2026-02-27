import { Section } from "@/components/ui/section";
import { siteCopy } from "@/content/copy";

export function Differentiator() {
  const { differentiator } = siteCopy;

  return (
    <Section>
      <div className="grid items-center gap-12 lg:grid-cols-2">
        <div>
          <h2 className="text-display-sm">{differentiator.headline}</h2>
          <p className="mt-4 text-lg text-neutral-600">{differentiator.body}</p>
        </div>
        <div>
          <ul className="space-y-4">
            {differentiator.bullets.map((bullet) => (
              <li key={bullet} className="flex items-start gap-3">
                <span className="mt-1 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-brand-100">
                  <svg
                    className="h-3 w-3 text-brand-700"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={3}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                </span>
                <span className="text-neutral-700">{bullet}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </Section>
  );
}
