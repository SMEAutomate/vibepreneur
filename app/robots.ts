import type { MetadataRoute } from "next";
import { SITE_URL } from "@/lib/site";

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
