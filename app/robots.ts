import type { MetadataRoute } from "next";

const SITE_URL = "https://vibepreneur.com";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: [
          "/api/",
          "/demo/",
          "/waitlist/thanks",
          "/waitlist/your-solutions",
        ],
      },
    ],
    sitemap: `${SITE_URL}/sitemap.xml`,
  };
}
