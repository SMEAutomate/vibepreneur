import { ImageResponse } from "next/og";
import { getBlogPostBySlug, defaultAuthor } from "@/content/blog";

export const alt = "Vibepreneur Blog";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function OgImage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = getBlogPostBySlug(slug);

  if (!post) {
    return new ImageResponse(
      <div
        style={{
          background: "linear-gradient(135deg, #f8fafc 0%, #e2e8f0 100%)",
          width: "100%",
          height: "100%",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          fontSize: 48,
          fontWeight: 700,
          color: "#0f172a",
        }}
      >
        Vibepreneur Blog
      </div>,
      { ...size }
    );
  }

  const author = post.author ?? defaultAuthor;

  return new ImageResponse(
    <div
      style={{
        background: "linear-gradient(135deg, #f8fafc 0%, #e2e8f0 100%)",
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        padding: "64px 80px",
      }}
    >
      <div style={{ display: "flex", flexDirection: "column" }}>
        <div
          style={{
            fontSize: 18,
            fontWeight: 600,
            color: "#4c6ef5",
            textTransform: "uppercase",
            letterSpacing: "0.05em",
            marginBottom: 20,
          }}
        >
          {post.category}
        </div>
        <div
          style={{
            fontSize: 52,
            fontWeight: 800,
            color: "#0f172a",
            lineHeight: 1.15,
            maxWidth: 900,
          }}
        >
          {post.title}
        </div>
        <div
          style={{
            fontSize: 24,
            fontWeight: 400,
            color: "#64748b",
            lineHeight: 1.5,
            maxWidth: 800,
            marginTop: 20,
          }}
        >
          {post.excerpt}
        </div>
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "flex-end",
        }}
      >
        <div style={{ display: "flex", flexDirection: "column", gap: 4 }}>
          <div style={{ fontSize: 18, fontWeight: 600, color: "#334155" }}>
            {author.name}
          </div>
          <div style={{ fontSize: 16, color: "#94a3b8" }}>
            {new Date(post.date).toLocaleDateString("en-GB", {
              day: "numeric",
              month: "short",
              year: "numeric",
            })}{" "}
            · {post.readTime}
          </div>
        </div>
        <div
          style={{
            fontSize: 20,
            fontWeight: 600,
            color: "#4c6ef5",
            background: "#eef2ff",
            padding: "10px 28px",
            borderRadius: 100,
          }}
        >
          vibepreneur.com
        </div>
      </div>
    </div>,
    { ...size }
  );
}
