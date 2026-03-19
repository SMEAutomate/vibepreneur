import { Section } from "@/components/ui/section";
import { BlogGrid } from "./blog-grid";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Blog | Vibepreneur",
  description:
    "Practical strategies for professionals turning expertise into structured, scalable ventures. Category-building thinking from the venture operating system.",
  alternates: { canonical: "/blog" },
};

export default function BlogPage() {
  return (
    <>
      <Section>
        <div className="mx-auto max-w-3xl">
          <h1 className="text-display-md">Blog</h1>
          <p className="mt-6 text-lg leading-relaxed text-neutral-600">
            Strategic thinking for professionals building ventures from
            expertise. From opportunity discovery to structured execution, these
            are the ideas shaping how domain knowledge becomes commercial
            ownership.
          </p>
        </div>
      </Section>

      <Section background="light">
        <BlogGrid />
      </Section>
    </>
  );
}
