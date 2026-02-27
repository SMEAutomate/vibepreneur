import { Section } from "@/components/ui/section";
import { InlineScreenMock } from "@/components/marketing/inline-screen-mock";
import { BlogGrid } from "./blog-grid";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Blog | Vibepreneur",
  description:
    "Practical guides for professionals navigating AI displacement, career pivots, and building from expertise.",
};

export default function BlogPage() {
  return (
    <>
      <Section>
        <div className="mx-auto max-w-3xl">
          <h1 className="text-display-md">Blog</h1>
          <p className="mt-6 text-lg leading-relaxed text-neutral-600">
            Practical strategies for professionals rebuilding after AI
            displacement. No hype, no fluff. Just actionable frameworks for
            turning expertise into independence.
          </p>
        </div>

        <div className="mx-auto mt-12 max-w-5xl">
          <InlineScreenMock
            componentName="ContentLaunchKit"
            caption="Plan content across channels: articles, sequences, and social assets from a single workspace."
          />
        </div>
      </Section>

      <Section background="light">
        <BlogGrid />
      </Section>
    </>
  );
}
