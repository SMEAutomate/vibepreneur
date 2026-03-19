import { generateOgImage, ogSize } from "@/lib/og-image";

export const runtime = "edge";
export const alt = "About Vibepreneur";
export const size = ogSize;
export const contentType = "image/png";

export default function OgImage() {
  return generateOgImage(
    "About Vibepreneur",
    "Built for professionals who are done waiting"
  );
}
