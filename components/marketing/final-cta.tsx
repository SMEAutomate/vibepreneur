"use client";

import { Section } from "@/components/ui/section";
import { Button } from "@/components/ui/button";
import { GradientOrb } from "@/components/ui/gradient-orb";
import { siteCopy } from "@/content/copy";

export function FinalCta() {
  const { finalCta } = siteCopy;

  return (
    <Section background="brand">
      <div className="relative mx-auto max-w-2xl text-center">
        <GradientOrb
          className="-left-48 -top-24"
          size={320}
          color="bg-brand-300/20"
        />
        <h2 className="relative text-display-sm">{finalCta.headline}</h2>
        <p className="relative mt-4 text-lg text-neutral-600">
          {finalCta.body}
        </p>
        <div className="relative mt-8">
          <Button href="/waitlist" size="lg">
            {finalCta.cta}
          </Button>
        </div>
      </div>
    </Section>
  );
}
