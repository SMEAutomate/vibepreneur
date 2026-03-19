import { generateOgImage, ogSize } from "@/lib/og-image";

export const runtime = "edge";
export const alt = "How Vibepreneur Works";
export const size = ogSize;
export const contentType = "image/png";

export default function OgImage() {
  return generateOgImage(
    "How It Works",
    "From expertise to structured venture in five stages"
  );
}
