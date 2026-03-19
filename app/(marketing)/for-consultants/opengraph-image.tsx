import { generateOgImage, ogSize } from "@/lib/og-image";

export const runtime = "edge";
export const alt = "Vibepreneur for Consultants";
export const size = ogSize;
export const contentType = "image/png";

export default function OgImage() {
  return generateOgImage(
    "For Consultants",
    "Turn consulting expertise into a scalable product business"
  );
}
