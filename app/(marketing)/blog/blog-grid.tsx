"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { blogPosts } from "@/content/blog";

export function BlogGrid() {
  return (
    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {blogPosts.map((post, i) => (
        <motion.div
          key={post.slug}
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: i * 0.08 }}
        >
          <Link href={`/blog/${post.slug}`} className="block h-full">
            <Card className="flex h-full flex-col">
              <span className="inline-block w-fit rounded-full bg-brand-50 px-3 py-0.5 text-xs font-medium text-brand-700">
                {post.category}
              </span>
              <h2 className="mt-3 text-base font-semibold text-neutral-900">
                {post.title}
              </h2>
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
            </Card>
          </Link>
        </motion.div>
      ))}
    </div>
  );
}
