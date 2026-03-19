import type { Metadata } from "next";
import Link from "next/link";
import { Section } from "@/components/ui/section";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = {
  title: "About",
  description:
    "Why Vibepreneur exists: turning professional expertise into structured, scalable businesses.",
  alternates: { canonical: "/about" },
};

export default function AboutPage() {
  return (
    <>
      <Section>
        <div className="mx-auto max-w-[680px]">
          <h1 className="text-display-md">
            Built for professionals who are done waiting.
          </h1>
          <p className="mt-6 text-lg leading-relaxed text-neutral-600">
            Most professionals spend years accumulating deep expertise, only to
            realise there is no clear path from &ldquo;I know how to do
            this&rdquo; to &ldquo;I own something built on what I know.&rdquo;
          </p>
          <p className="mt-4 text-lg leading-relaxed text-neutral-600">
            Vibepreneur exists to close that gap. We are building the operating
            system that takes real-world experience and turns it into structured
            ventures: with positioning, launch assets, go-to-market playbooks,
            and growth systems built in.
          </p>
        </div>
      </Section>

      <Section background="light">
        <div className="mx-auto max-w-[680px]">
          <h2 className="text-display-sm">Why this exists</h2>
          <p className="mt-4 text-lg leading-relaxed text-neutral-600">
            The tools for building a business were designed for people who
            already have one. Strategy frameworks assume you have a team.
            Marketing platforms assume you have an audience. Development tools
            assume you have a product.
          </p>
          <p className="mt-4 text-lg leading-relaxed text-neutral-600">
            Vibepreneur starts from a different place: your expertise. It
            identifies what you could build based on what you already know, then
            gives you the systems to actually build it. No guesswork. No blank
            pages. No hiring a team before you have revenue.
          </p>
        </div>
      </Section>

      <Section>
        <div className="mx-auto max-w-[680px]">
          <h2 className="text-display-sm">Building in public</h2>
          <p className="mt-4 text-lg leading-relaxed text-neutral-600">
            We believe in transparency. Our{" "}
            <Link
              href="/roadmap"
              className="font-medium text-brand-700 underline decoration-brand-200 underline-offset-2 hover:decoration-brand-400"
            >
              public roadmap
            </Link>{" "}
            shows what we are working on, what is shipped, and what is coming
            next. Early users shape the product directly.
          </p>
          <p className="mt-4 text-lg leading-relaxed text-neutral-600">
            This is not a startup pitch. It is a system being built by people
            who have watched talented professionals struggle to turn what they
            know into something they own.
          </p>
        </div>
      </Section>

      <Section background="brand">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-display-sm">Join the founding group.</h2>
          <p className="mt-4 text-neutral-600">
            Get early access, shape the product, and be among the first to build
            a venture from your expertise.
          </p>
          <div className="mt-8">
            <Button href="/waitlist" size="lg">
              Join the Waitlist
            </Button>
          </div>
        </div>
      </Section>
    </>
  );
}
