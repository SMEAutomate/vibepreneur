"use client";

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

export function BlogPostArticle({ post }: { post: BlogPost }) {
  const pullquoteIndex = Math.floor(post.body.length * 0.4);

  const graphicIndex = Math.min(3, Math.floor(post.body.length * 0.25));

  return (
    <div className="mx-auto max-w-[680px]">
      {post.body.map((paragraph, i) => (
        <div key={i}>
          {i === graphicIndex && post.steps && (
            <StepsGraphic steps={post.steps} />
          )}
          {i === graphicIndex && !post.steps && post.comparison && (
            <ComparisonGraphic comparison={post.comparison} />
          )}
          {i === pullquoteIndex && <PullQuote text={post.pullquote} />}
          <motion.p
            className={`mb-6 text-lg leading-[1.8] text-neutral-600${i === 0 ? "blog-drop-cap" : ""}`}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ delay: i * 0.06, duration: 0.4 }}
          >
            {paragraph}
          </motion.p>
        </div>
      ))}
    </div>
  );
}
