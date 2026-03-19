import { generateOgImage, ogSize } from "@/lib/og-image";

export const runtime = "edge";
export const alt = "Join the Vibepreneur Waitlist";
export const size = ogSize;
export const contentType = "image/png";

export default function OgImage() {
  return generateOgImage(
    "Join the Waitlist",
    "Get early access and your first tailored business directions"
  );
}
