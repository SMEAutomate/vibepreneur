import { generateOgImage, ogSize } from "@/lib/og-image";

export const runtime = "edge";
export const alt = "Vibepreneur Roadmap";
export const size = ogSize;
export const contentType = "image/png";

export default function OgImage() {
  return generateOgImage(
    "Roadmap",
    "What we are building, what is shipped, and what is next"
  );
}
