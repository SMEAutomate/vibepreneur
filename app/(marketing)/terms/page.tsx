import type { Metadata } from "next";
import { Section } from "@/components/ui/section";
import { termsOfService } from "@/content/legal";

export const metadata: Metadata = {
  title: "Terms of Service",
  description:
    "Terms and conditions for using the Vibepreneur platform and website.",
  alternates: { canonical: "/terms" },
};

export default function TermsPage() {
  return (
    <Section>
      <div className="mx-auto max-w-[680px]">
        <h1 className="text-display-sm">{termsOfService.title}</h1>
        <p className="mt-2 text-sm text-neutral-400">
          Last updated:{" "}
          {new Date(termsOfService.lastUpdated).toLocaleDateString("en-GB", {
            day: "numeric",
            month: "long",
            year: "numeric",
          })}
        </p>

        <div className="mt-10 space-y-8">
          {termsOfService.sections.map((section) => (
            <div key={section.heading}>
              <h2 className="text-lg font-semibold text-neutral-900">
                {section.heading}
              </h2>
              {section.body.map((paragraph, i) => (
                <p
                  key={i}
                  className="mt-3 text-sm leading-relaxed text-neutral-600"
                >
                  {paragraph}
                </p>
              ))}
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
}
