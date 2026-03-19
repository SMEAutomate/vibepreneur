import { generateOgImage, ogSize } from "@/lib/og-image";

export const runtime = "edge";
export const alt = "Vibepreneur for Corporate Professionals";
export const size = ogSize;
export const contentType = "image/png";

export default function OgImage() {
  return generateOgImage(
    "For Corporate Professionals",
    "Turn corporate expertise into a venture you own"
  );
}
