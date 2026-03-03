import { notFound } from "next/navigation";
import type { Metadata } from "next";
import Link from "next/link";
import { Section } from "@/components/ui/section";
import { Button } from "@/components/ui/button";
import { JsonLd } from "@/components/seo/json-ld";
import { blogPosts, getBlogPostBySlug, defaultAuthor } from "@/content/blog";
import { ReadingProgress } from "./reading-progress";
import { BlogPostArticle } from "./blog-post-article";
import { RelatedPosts } from "./related-posts";

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
    title: post.title,
    description: post.excerpt,
    alternates: { canonical: `/blog/${slug}` },
    openGraph: {
      title: post.title,
      description: post.excerpt,
      type: "article",
      publishedTime: post.date,
      ...(post.updatedDate && { modifiedTime: post.updatedDate }),
      authors: [(post.author ?? defaultAuthor).name],
      url: `https://vibepreneur.com/blog/${slug}`,
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: post.excerpt,
    },
  };
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  const post = getBlogPostBySlug(slug);
  if (!post) notFound();

  const author = post.author ?? defaultAuthor;

  return (
    <>
      <JsonLd
        data={[
          {
            "@context": "https://schema.org",
            "@type": "BlogPosting",
            headline: post.title,
            description: post.excerpt,
            url: `https://vibepreneur.com/blog/${slug}`,
            image: `https://vibepreneur.com/blog/${slug}/opengraph-image`,
            datePublished: post.date,
            ...(post.updatedDate && { dateModified: post.updatedDate }),
            author: {
              "@type": "Person",
              name: author.name,
              jobTitle: author.role,
            },
            publisher: {
              "@type": "Organization",
              name: "Vibepreneur",
              url: "https://vibepreneur.com",
            },
            mainEntityOfPage: {
              "@type": "WebPage",
              "@id": `https://vibepreneur.com/blog/${slug}`,
            },
          },
          {
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            itemListElement: [
              {
                "@type": "ListItem",
                position: 1,
                name: "Home",
                item: "https://vibepreneur.com",
              },
              {
                "@type": "ListItem",
                position: 2,
                name: "Blog",
                item: "https://vibepreneur.com/blog",
              },
              {
                "@type": "ListItem",
                position: 3,
                name: post.title,
                item: `https://vibepreneur.com/blog/${slug}`,
              },
            ],
          },
        ]}
      />
      <ReadingProgress />

      <Section>
        <div className="mx-auto max-w-[680px]">
          <Link
            href="/blog"
            className="mb-6 inline-flex items-center gap-1.5 text-sm text-neutral-400 transition-colors hover:text-neutral-600"
          >
            <svg
              className="h-4 w-4"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18"
              />
            </svg>
            All articles
          </Link>
          <span className="inline-block rounded-full bg-brand-50 px-3 py-0.5 text-xs font-medium text-brand-700">
            {post.category}
          </span>
          <h1 className="mt-4 text-display-sm">{post.title}</h1>
          <div className="mt-4 flex flex-wrap items-center gap-3 text-sm text-neutral-400">
            <span>{author.name}</span>
            <span aria-hidden="true">·</span>
            <time dateTime={post.date}>
              {new Date(post.date).toLocaleDateString("en-GB", {
                day: "numeric",
                month: "short",
                year: "numeric",
              })}
            </time>
            {post.updatedDate && (
              <>
                <span aria-hidden="true">·</span>
                <span>
                  Updated{" "}
                  <time dateTime={post.updatedDate}>
                    {new Date(post.updatedDate).toLocaleDateString("en-GB", {
                      day: "numeric",
                      month: "short",
                      year: "numeric",
                    })}
                  </time>
                </span>
              </>
            )}
            <span aria-hidden="true">·</span>
            <span>{post.readTime}</span>
          </div>
        </div>
      </Section>

      <Section background="light">
        <BlogPostArticle post={post} />
      </Section>

      <RelatedPosts currentSlug={post.slug} category={post.category} />

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
