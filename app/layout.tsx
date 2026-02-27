import type { Metadata } from "next";
import "./globals.css";
import { Nav } from "@/components/layout/nav";
import { Footer } from "@/components/layout/footer";

export const metadata: Metadata = {
  title: "Vibepreneur — Future-Proof Your Skills. Build What the Market Needs.",
  description:
    "Transform real-world experience into scalable solutions with structured go-to-market and growth systems built in.",
  openGraph: {
    title:
      "Vibepreneur — Future-Proof Your Skills. Build What the Market Needs.",
    description:
      "Transform real-world experience into scalable solutions with structured go-to-market and growth systems built in.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="font-sans">
        <Nav />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
