import type { Metadata } from "next";
import { Section } from "@/components/ui/section";
import { privacyPolicy } from "@/content/legal";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "How Vibepreneur collects, uses, and protects your personal data.",
  alternates: { canonical: "/privacy" },
};

export default function PrivacyPage() {
  return (
    <Section>
      <div className="mx-auto max-w-[680px]">
        <h1 className="text-display-sm">{privacyPolicy.title}</h1>
        <p className="mt-2 text-sm text-neutral-400">
          Last updated:{" "}
          {new Date(privacyPolicy.lastUpdated).toLocaleDateString("en-GB", {
            day: "numeric",
            month: "long",
            year: "numeric",
          })}
        </p>

        <div className="mt-10 space-y-8">
          {privacyPolicy.sections.map((section) => (
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
