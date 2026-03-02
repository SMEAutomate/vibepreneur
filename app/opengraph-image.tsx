import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt =
  "Vibepreneur: Turn expertise into scalable products with built-in go-to-market";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OgImage() {
  return new ImageResponse(
    <div
      style={{
        background: "linear-gradient(135deg, #f8fafc 0%, #e2e8f0 100%)",
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        padding: "80px",
      }}
    >
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          textAlign: "center",
        }}
      >
        <div
          style={{
            fontSize: 72,
            fontWeight: 800,
            color: "#0f172a",
            lineHeight: 1.1,
            marginBottom: 24,
          }}
        >
          Vibepreneur
        </div>
        <div
          style={{
            fontSize: 32,
            fontWeight: 500,
            color: "#475569",
            lineHeight: 1.4,
            maxWidth: 800,
          }}
        >
          Turn expertise into scalable products with built-in go-to-market and
          growth systems
        </div>
        <div
          style={{
            marginTop: 48,
            fontSize: 20,
            fontWeight: 600,
            color: "#7c3aed",
            background: "#ede9fe",
            padding: "12px 32px",
            borderRadius: 100,
          }}
        >
          vibepreneur.com
        </div>
      </div>
    </div>,
    { ...size }
  );
}
