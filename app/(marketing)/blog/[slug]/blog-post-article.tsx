"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import type { BlogPost } from "@/content/blog";

function StepsGraphic({ steps }: { steps: { label: string; text: string }[] }) {
  return (
    <div className="my-12">
      <div className="relative flex flex-col gap-4 md:flex-row md:gap-0">
        <div className="absolute left-4 top-8 hidden h-0.5 w-[calc(100%-2rem)] bg-neutral-100 md:block" />
        {steps.map((step, i) => (
          <motion.div
            key={step.label}
            className="relative flex flex-1 flex-col items-start gap-3 md:items-center md:px-3"
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ delay: i * 0.1, duration: 0.4 }}
          >
            <div className="relative z-10 flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-brand-700 text-sm font-bold text-white">
              {i + 1}
            </div>
            <div className="md:text-center">
              <p className="text-sm font-semibold text-neutral-900">
                {step.label}
              </p>
              <p className="mt-1 text-sm leading-relaxed text-neutral-500">
                {step.text}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

function ComparisonGraphic({
  comparison,
}: {
  comparison: NonNullable<BlogPost["comparison"]>;
}) {
  return (
    <div className="my-12 overflow-hidden rounded-xl border border-neutral-100">
      <div className="grid grid-cols-2">
        <div className="border-b border-r border-neutral-100 bg-neutral-50 px-4 py-3">
          <p className="text-sm font-semibold text-neutral-400">
            {comparison.left}
          </p>
        </div>
        <div className="border-b border-neutral-100 bg-brand-50 px-4 py-3">
          <p className="text-sm font-semibold text-brand-700">
            {comparison.right}
          </p>
        </div>
      </div>
      {comparison.items.map((item, i) => (
        <motion.div
          key={i}
          className="grid grid-cols-2"
          initial={{ opacity: 0, x: -12 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-20px" }}
          transition={{ delay: i * 0.08, duration: 0.35 }}
        >
          <div className="border-b border-r border-neutral-100 px-4 py-3">
            <p className="text-sm leading-relaxed text-neutral-400">
              {item.left}
            </p>
          </div>
          <div className="border-b border-neutral-100 px-4 py-3">
            <p className="text-sm leading-relaxed text-neutral-700">
              {item.right}
            </p>
          </div>
        </motion.div>
      ))}
    </div>
  );
}

function PullQuote({ text }: { text: string }) {
  return (
    <motion.blockquote
      className="my-12 border-l-4 border-brand-400 bg-brand-50 px-6 py-5"
      initial={{ opacity: 0, scale: 0.97 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.5 }}
    >
      <p className="text-lg font-medium italic leading-relaxed text-neutral-800">
        &ldquo;{text}&rdquo;
      </p>
    </motion.blockquote>
  );
}

function ShareButtons({ title }: { title: string }) {
  const [copied, setCopied] = useState(false);

  function handleCopy() {
    navigator.clipboard.writeText(window.location.href);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  }

  function shareOnX() {
    const url = encodeURIComponent(window.location.href);
    const text = encodeURIComponent(title);
    window.open(
      `https://twitter.com/intent/tweet?url=${url}&text=${text}`,
      "_blank",
      "noopener"
    );
  }

  function shareOnLinkedIn() {
    const url = encodeURIComponent(window.location.href);
    window.open(
      `https://www.linkedin.com/sharing/share-offsite/?url=${url}`,
      "_blank",
      "noopener"
    );
  }

  return (
    <div className="mt-12 flex items-center gap-3">
      <button
        onClick={handleCopy}
        title={copied ? "Copied!" : "Copy link"}
        className="flex h-9 w-9 items-center justify-center rounded-lg text-neutral-400 transition-colors hover:bg-neutral-100 hover:text-neutral-600"
      >
        {copied ? (
          <svg
            className="h-5 w-5"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="m4.5 12.75 6 6 9-13.5"
            />
          </svg>
        ) : (
          <svg
            className="h-5 w-5"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M13.19 8.688a4.5 4.5 0 0 1 1.242 7.244l-4.5 4.5a4.5 4.5 0 0 1-6.364-6.364l1.757-1.757m13.35-.622 1.757-1.757a4.5 4.5 0 0 0-6.364-6.364l-4.5 4.5a4.5 4.5 0 0 0 1.242 7.244"
            />
          </svg>
        )}
      </button>
      <button
        onClick={shareOnX}
        title="Share on X"
        className="flex h-9 w-9 items-center justify-center rounded-lg text-neutral-400 transition-colors hover:bg-neutral-100 hover:text-neutral-600"
      >
        <svg className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor">
          <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
        </svg>
      </button>
      <button
        onClick={shareOnLinkedIn}
        title="Share on LinkedIn"
        className="flex h-9 w-9 items-center justify-center rounded-lg text-neutral-400 transition-colors hover:bg-neutral-100 hover:text-neutral-600"
      >
        <svg className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor">
          <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
        </svg>
      </button>
    </div>
  );
}

export function BlogPostArticle({ post }: { post: BlogPost }) {
  const pullquoteIndex = Math.floor(post.body.length * 0.4);

  const graphicIndex = Math.min(3, Math.floor(post.body.length * 0.25));

  const midpoint = Math.floor(post.body.length * 0.55);

  return (
    <article className="mx-auto max-w-[680px]">
      {post.body.map((paragraph, i) => (
        <div key={i}>
          {i === graphicIndex && post.steps && (
            <StepsGraphic steps={post.steps} />
          )}
          {i === graphicIndex && !post.steps && post.comparison && (
            <ComparisonGraphic comparison={post.comparison} />
          )}
          {i === pullquoteIndex && <PullQuote text={post.pullquote} />}
          {i === midpoint && (
            <h2 className="mb-4 mt-10 text-xl font-semibold text-neutral-900">
              {post.pullquote.length > 80
                ? post.pullquote.slice(
                    0,
                    post.pullquote.indexOf(".", 30) + 1
                  ) || post.pullquote
                : post.pullquote}
            </h2>
          )}
          <motion.p
            className={[
              "mb-6 text-lg leading-[1.8] text-neutral-600",
              i === 0 && "blog-drop-cap",
            ]
              .filter(Boolean)
              .join(" ")}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ delay: i * 0.06, duration: 0.4 }}
          >
            {paragraph}
          </motion.p>
        </div>
      ))}
      <ShareButtons title={post.title} />
    </article>
  );
}
