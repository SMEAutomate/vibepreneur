"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Section } from "@/components/ui/section";
import { Card } from "@/components/ui/card";
import { BlogThumbnail } from "@/components/blog/blog-thumbnail";
import { blogPosts, type BlogPost } from "@/content/blog";

function getRelatedPosts(
  currentSlug: string,
  category: BlogPost["category"]
): BlogPost[] {
  const sameCategory = blogPosts.filter(
    (p) => p.slug !== currentSlug && p.category === category
  );

  if (sameCategory.length >= 3) return sameCategory.slice(0, 3);

  const remaining = blogPosts.filter(
    (p) =>
      p.slug !== currentSlug && !sameCategory.some((sc) => sc.slug === p.slug)
  );

  return [...sameCategory, ...remaining].slice(0, 3);
}

export function RelatedPosts({
  currentSlug,
  category,
}: {
  currentSlug: string;
  category: BlogPost["category"];
}) {
  const posts = getRelatedPosts(currentSlug, category);

  if (posts.length === 0) return null;

  return (
    <Section background="light">
      <div className="mx-auto max-w-5xl">
        <h2 className="text-display-xs text-center">Keep reading</h2>
        <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {posts.map((post, i) => (
            <motion.div
              key={post.slug}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
            >
              <Link href={`/blog/${post.slug}`} className="block h-full">
                <Card className="flex h-full flex-col overflow-hidden p-0">
                  {post.thumbnail && <BlogThumbnail variant={post.thumbnail} />}
                  <div className="flex flex-1 flex-col p-6">
                    <span className="inline-block w-fit rounded-full bg-brand-50 px-3 py-0.5 text-xs font-medium text-brand-700">
                      {post.category}
                    </span>
                    <h3 className="mt-3 text-base font-semibold text-neutral-900">
                      {post.title}
                    </h3>
                    <p className="mt-2 flex-1 text-sm leading-relaxed text-neutral-600">
                      {post.excerpt}
                    </p>
                    <div className="mt-4 flex items-center gap-3 text-xs text-neutral-400">
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
                </Card>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </Section>
  );
}
