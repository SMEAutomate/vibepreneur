import { ImageResponse } from "next/og";

export const ogSize = { width: 1200, height: 630 };

export function generateOgImage(
  title: string,
  subtitle: string
): ImageResponse {
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
            fontSize: 56,
            fontWeight: 800,
            color: "#0f172a",
            lineHeight: 1.1,
            marginBottom: 24,
            maxWidth: 900,
          }}
        >
          {title}
        </div>
        <div
          style={{
            fontSize: 28,
            fontWeight: 500,
            color: "#475569",
            lineHeight: 1.4,
            maxWidth: 800,
          }}
        >
          {subtitle}
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
    { ...ogSize }
  );
}
