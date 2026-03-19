import { generateOgImage, ogSize } from "@/lib/og-image";

export const runtime = "edge";
export const alt = "Vibepreneur Daily Brief";
export const size = ogSize;
export const contentType = "image/png";

export default function OgImage() {
  return generateOgImage(
    "Daily Brief",
    "Wake up to progress. Your venture moves forward overnight."
  );
}
