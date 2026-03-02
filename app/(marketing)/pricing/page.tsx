import type { Metadata } from "next";
import { JsonLd } from "@/components/seo/json-ld";
import { pricingFaq } from "@/content/pricing";
import { PricingContent } from "./pricing-content";

export const metadata: Metadata = {
  title: "Pricing",
  description:
    "Start free, scale as you build. Vibepreneur pricing plans for professionals turning expertise into scalable solutions.",
  openGraph: {
    title: "Pricing | Vibepreneur",
    description:
      "Start free, scale as you build. Vibepreneur pricing plans for professionals turning expertise into scalable solutions.",
  },
  alternates: {
    canonical: "/pricing",
  },
};

export default function PricingPage() {
  return (
    <>
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: pricingFaq.map((item) => ({
            "@type": "Question",
            name: item.question,
            acceptedAnswer: {
              "@type": "Answer",
              text: item.answer,
            },
          })),
        }}
      />
      <PricingContent />
    </>
  );
}
