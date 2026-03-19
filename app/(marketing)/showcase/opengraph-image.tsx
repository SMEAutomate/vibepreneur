import { generateOgImage, ogSize } from "@/lib/og-image";

export const runtime = "edge";
export const alt = "Vibepreneur Showcase";
export const size = ogSize;
export const contentType = "image/png";

export default function OgImage() {
  return generateOgImage(
    "Showcase",
    "Real ventures built by professionals using Vibepreneur"
  );
}
