import { Section } from "@/components/ui/section";
import { Card } from "@/components/ui/card";
import { siteCopy } from "@/content/copy";

export function HowItWorksPreview() {
  const { howItWorks } = siteCopy;

  return (
    <Section background="light">
      <h2 className="text-center text-display-sm">{howItWorks.headline}</h2>
      <div className="mt-16 grid gap-8 md:grid-cols-3">
        {howItWorks.steps.map((step) => (
          <Card key={step.number} className="relative">
            <span className="text-4xl font-bold text-brand-100">
              {step.number}
            </span>
            <h3 className="mt-4 text-lg font-semibold text-neutral-900">
              {step.title}
            </h3>
            <p className="mt-3 text-sm leading-relaxed text-neutral-600">
              {step.description}
            </p>
          </Card>
        ))}
      </div>
    </Section>
  );
}
