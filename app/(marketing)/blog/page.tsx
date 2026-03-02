import { Section } from "@/components/ui/section";
import { BlogGrid } from "./blog-grid";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Blog",
  description:
    "Practical guides for professionals navigating AI displacement, career pivots, and building from expertise.",
  alternates: { canonical: "/blog" },
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
      </Section>

      <Section background="light">
        <BlogGrid />
      </Section>
    </>
  );
}
