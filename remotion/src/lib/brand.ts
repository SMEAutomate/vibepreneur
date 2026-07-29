export const brand = {
  brand50: "#f0f4ff",
  brand100: "#dbe4ff",
  brand200: "#bac8ff",
  brand300: "#91a7ff",
  brand400: "#748ffc",
  brand500: "#5c7cfa",
  brand600: "#4c6ef5",
  brand700: "#4263eb",
  brand800: "#3b5bdb",
  brand900: "#364fc7",
  brand950: "#2b3fa0",
  ink: "#0f1119",
  ink2: "#1e2330",
  ink3: "#2a3040",
  paper: "#ffffff",
  paper2: "#f7f8fb",
  paper3: "#eef0f6",
  line: "#e3e6ef",
  text: "#0f1119",
  textMuted: "#5b6478",
  success: "#16a34a",
  warn: "#f59e0b",
  danger: "#dc2626",
} as const;

export const fonts = {
  sans: 'Inter, system-ui, -apple-system, "Segoe UI", sans-serif',
  mono: 'ui-monospace, SFMono-Regular, "SF Mono", Menlo, monospace',
} as const;

export type Format = "16x9" | "9x16";

export const sizes = {
  "16x9": { width: 1920, height: 1080 },
  "9x16": { width: 1080, height: 1920 },
} as const;

export const fps = 30;
