import { generateOgImage, ogSize } from "@/lib/og-image";

export const runtime = "edge";
export const alt = "The Vibepreneur System";
export const size = ogSize;
export const contentType = "image/png";

export default function OgImage() {
  return generateOgImage(
    "The System",
    "A complete operating system for building ventures from expertise"
  );
}
