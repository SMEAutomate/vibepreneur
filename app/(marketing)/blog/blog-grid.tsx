"use client";

import { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Card } from "@/components/ui/card";
import { BlogThumbnail } from "@/components/blog/blog-thumbnail";
import { blogPosts, type BlogPost } from "@/content/blog";

const CATEGORIES = ["All", "Career Pivot", "Building", "Mindset"] as const;

function CategoryBadge({ category }: { category: string }) {
  return (
    <span className="inline-block w-fit rounded-full bg-brand-50 px-3 py-0.5 text-xs font-medium text-brand-700">
      {category}
    </span>
  );
}

function PostMeta({ post }: { post: BlogPost }) {
  return (
    <div className="flex items-center gap-3 text-xs text-neutral-400">
      <time dateTime={post.date}>
        {new Date(post.date).toLocaleDateString("en-GB", {
          day: "numeric",
          month: "short",
          year: "numeric",
        })}
      </time>
      <span>{post.readTime}</span>
    </div>
  );
}

function HeroCard({ post }: { post: BlogPost }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
    >
      <Link href={`/blog/${post.slug}`} className="block">
        <Card className="flex flex-col gap-0 overflow-hidden p-0">
          {post.thumbnail && <BlogThumbnail variant={post.thumbnail} />}
          <div className="flex flex-col gap-3 p-6">
            <div className="flex items-center gap-3">
              <CategoryBadge category={post.category} />
              <PostMeta post={post} />
            </div>
            <h2 className="text-xl font-semibold text-neutral-900">
              {post.title}
            </h2>
            <p className="text-sm leading-relaxed text-neutral-600">
              {post.excerpt}
            </p>
          </div>
        </Card>
      </Link>
    </motion.div>
  );
}

function GridCard({ post, index }: { post: BlogPost; index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.08 }}
    >
      <Link href={`/blog/${post.slug}`} className="block h-full">
        <Card className="flex h-full flex-col overflow-hidden p-0">
          {post.thumbnail && <BlogThumbnail variant={post.thumbnail} />}
          <div className="flex flex-1 flex-col p-6">
            <CategoryBadge category={post.category} />
            <h2 className="mt-3 text-base font-semibold text-neutral-900">
              {post.title}
            </h2>
            <p className="mt-2 flex-1 text-sm leading-relaxed text-neutral-600">
              {post.excerpt}
            </p>
            <div className="mt-4">
              <PostMeta post={post} />
            </div>
          </div>
        </Card>
      </Link>
    </motion.div>
  );
}

export function BlogGrid() {
  const [active, setActive] = useState<(typeof CATEGORIES)[number]>("All");

  const filtered =
    active === "All"
      ? blogPosts
      : blogPosts.filter((p) => p.category === active);

  const hero = filtered[0];
  const rest = filtered.slice(1);

  return (
    <div>
      <div className="mb-10 flex flex-wrap justify-center gap-2">
        {CATEGORIES.map((cat) => (
          <button
            key={cat}
            onClick={() => setActive(cat)}
            className="relative px-4 py-2 text-sm font-medium transition-colors"
          >
            <span
              className={
                active === cat
                  ? "font-semibold text-brand-700"
                  : "text-neutral-400 hover:text-neutral-600"
              }
            >
              {cat}
            </span>
            {active === cat && (
              <motion.div
                layoutId="blog-category"
                className="absolute inset-x-0 -bottom-px h-0.5 rounded-full bg-brand-600"
                transition={{ type: "spring", stiffness: 400, damping: 30 }}
              />
            )}
          </button>
        ))}
      </div>

      <AnimatePresence mode="wait">
        <motion.div
          key={active}
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -8 }}
          transition={{ duration: 0.25 }}
        >
          {hero && <HeroCard post={hero} />}

          {rest.length > 0 && (
            <div className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {rest.map((post, i) => (
                <GridCard key={post.slug} post={post} index={i} />
              ))}
            </div>
          )}
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
