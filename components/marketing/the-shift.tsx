import { Section } from "@/components/ui/section";
import { siteCopy } from "@/content/copy";

export function TheShift() {
  const { theShift } = siteCopy;

  return (
    <Section>
      <div className="mx-auto max-w-3xl text-center">
        <h2 className="text-display-sm">{theShift.headline}</h2>
        <p className="mt-6 text-lg leading-relaxed text-neutral-600">
          {theShift.body}
        </p>
      </div>
    </Section>
  );
}
