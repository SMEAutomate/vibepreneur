import { generateOgImage, ogSize } from "@/lib/og-image";

export const runtime = "edge";
export const alt = "Vibepreneur Pricing";
export const size = ogSize;
export const contentType = "image/png";

export default function OgImage() {
  return generateOgImage("Pricing", "Start free. Scale with traction.");
}
