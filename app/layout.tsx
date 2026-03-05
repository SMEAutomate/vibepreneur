import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { JsonLd } from "@/components/seo/json-ld";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

const SITE_URL = "https://vibepreneur.com";
const SITE_NAME = "Vibepreneur";
const DEFAULT_DESCRIPTION =
  "Transform real-world experience into scalable solutions with structured go-to-market and growth systems built in.";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Vibepreneur | Turn Expertise Into Scalable Products",
    template: "%s | Vibepreneur",
  },
  description: DEFAULT_DESCRIPTION,
  openGraph: {
    title: "Vibepreneur | Turn Expertise Into Scalable Products",
    description: DEFAULT_DESCRIPTION,
    type: "website",
    siteName: SITE_NAME,
    url: SITE_URL,
  },
  twitter: {
    card: "summary_large_image",
    title: "Vibepreneur | Turn Expertise Into Scalable Products",
    description: DEFAULT_DESCRIPTION,
  },
  alternates: {
    canonical: SITE_URL,
  },
  manifest: "/manifest.json",
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "16x16 32x32 48x48" },
      { url: "/icon.png", sizes: "192x192", type: "image/png" },
      { url: "/icon-512.png", sizes: "512x512", type: "image/png" },
    ],
    apple: [{ url: "/apple-icon.png", sizes: "180x180", type: "image/png" }],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={inter.variable}>
      <body className="font-sans">
        <JsonLd
          data={[
            {
              "@context": "https://schema.org",
              "@type": "Organization",
              name: SITE_NAME,
              url: SITE_URL,
              logo: `${SITE_URL}/logo-landscape.png`,
              description: DEFAULT_DESCRIPTION,
            },
            {
              "@context": "https://schema.org",
              "@type": "WebSite",
              name: SITE_NAME,
              url: SITE_URL,
              description: DEFAULT_DESCRIPTION,
              publisher: {
                "@type": "Organization",
                name: SITE_NAME,
              },
              potentialAction: {
                "@type": "SearchAction",
                target: {
                  "@type": "EntryPoint",
                  urlTemplate: `${SITE_URL}/blog?q={search_term_string}`,
                },
              },
            },
          ]}
        />
        {children}
      </body>
    </html>
  );
}
