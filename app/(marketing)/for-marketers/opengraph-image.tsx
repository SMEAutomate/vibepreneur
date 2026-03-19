import { generateOgImage, ogSize } from "@/lib/og-image";

export const runtime = "edge";
export const alt = "Vibepreneur for Marketers";
export const size = ogSize;
export const contentType = "image/png";

export default function OgImage() {
  return generateOgImage(
    "For Marketers",
    "Turn marketing expertise into distribution-first products"
  );
}
