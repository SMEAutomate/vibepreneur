import type { MetadataRoute } from "next";
import { blogPosts } from "@/content/blog";
import { features } from "@/content/features";
import { mockScreens } from "@/lib/mockScreens";

const SITE_URL = "https://vibepreneur.com";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  const staticPages: MetadataRoute.Sitemap = [
    {
      url: SITE_URL,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 1.0,
    },
    {
      url: `${SITE_URL}/how-it-works`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.9,
    },
    {
      url: `${SITE_URL}/pricing`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.9,
    },
    {
      url: `${SITE_URL}/blog`,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 0.8,
    },
    {
      url: `${SITE_URL}/roadmap`,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 0.6,
    },
    {
      url: `${SITE_URL}/waitlist`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.7,
    },
  ];

  const featurePages: MetadataRoute.Sitemap = features.map((f) => ({
    url: `${SITE_URL}/features/${f.slug}`,
    lastModified: now,
    changeFrequency: "monthly" as const,
    priority: 0.8,
  }));

  const screenPages: MetadataRoute.Sitemap = features.flatMap((feature) =>
    feature.screenNames
      .map((name) => mockScreens.find((s) => s.componentName === name))
      .filter(Boolean)
      .map((screen) => ({
        url: `${SITE_URL}/features/${feature.slug}/${screen!.id}`,
        changeFrequency: "monthly" as const,
        priority: 0.5,
      }))
  );

  const blogPages: MetadataRoute.Sitemap = blogPosts.map((post) => ({
    url: `${SITE_URL}/blog/${post.slug}`,
    lastModified: new Date(post.date),
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  return [...staticPages, ...featurePages, ...screenPages, ...blogPages];
}
