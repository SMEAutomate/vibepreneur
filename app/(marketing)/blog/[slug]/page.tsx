import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { Section } from "@/components/ui/section";
import { Button } from "@/components/ui/button";
import { blogPosts, getBlogPostBySlug } from "@/content/blog";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return blogPosts.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = getBlogPostBySlug(slug);
  if (!post) return {};

  return {
    title: `${post.title} | Vibepreneur`,
    description: post.excerpt,
  };
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  const post = getBlogPostBySlug(slug);
  if (!post) notFound();

  return (
    <>
      <Section>
        <div className="mx-auto max-w-3xl">
          <span className="inline-block rounded-full bg-brand-50 px-3 py-0.5 text-xs font-medium text-brand-700">
            {post.category}
          </span>
          <h1 className="mt-4 text-display-sm">{post.title}</h1>
          <div className="mt-4 flex items-center gap-3 text-sm text-neutral-400">
            <time dateTime={post.date}>
              {new Date(post.date).toLocaleDateString("en-GB", {
                day: "numeric",
                month: "short",
                year: "numeric",
              })}
            </time>
            <span>{post.readTime}</span>
          </div>
        </div>
      </Section>

      <Section background="light">
        <div className="mx-auto max-w-3xl space-y-6">
          {post.body.map((paragraph, i) => (
            <p key={i} className="leading-relaxed text-neutral-600">
              {paragraph}
            </p>
          ))}
        </div>
      </Section>

      <Section background="brand">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-display-sm">
            Ready to turn your expertise into something you own?
          </h2>
          <p className="mt-4 text-neutral-600">
            Join the waitlist and get 3 personalised solution ideas based on
            your experience.
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
