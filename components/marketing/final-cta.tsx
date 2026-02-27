import { Section } from "@/components/ui/section";
import { Button } from "@/components/ui/button";
import { siteCopy } from "@/content/copy";

export function FinalCta() {
  const { finalCta } = siteCopy;

  return (
    <Section background="brand">
      <div className="mx-auto max-w-2xl text-center">
        <h2 className="text-display-sm">{finalCta.headline}</h2>
        <p className="mt-4 text-lg text-neutral-600">{finalCta.body}</p>
        <div className="mt-8">
          <Button href="/waitlist" size="lg">
            {finalCta.cta}
          </Button>
        </div>
      </div>
    </Section>
  );
}
