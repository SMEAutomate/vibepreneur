"use client";

import { Section } from "@/components/ui/section";
import { AnimatedHeadline } from "@/components/ui/animated-headline";
import { siteCopy } from "@/content/copy";

export function WhatIsVibepreneur() {
  const { whatIsVibepreneur } = siteCopy;

  return (
    <Section>
      <div className="mx-auto max-w-3xl text-center">
        <AnimatedHeadline
          text={whatIsVibepreneur.headline}
          className="text-display-sm"
        />
        <p className="mt-6 text-lg leading-relaxed text-neutral-600">
          {whatIsVibepreneur.body}
        </p>
      </div>
    </Section>
  );
}
