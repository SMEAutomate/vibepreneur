import type { BlogCategory } from "@/content/blog";

export interface CategoryPalette {
  strong: string;
  mid: string;
  soft: string;
  bg: string;
}

/**
 * One palette per category, so a post's topic is readable from its thumbnail
 * and badge before reading a word. Each is a 600/400/200 triple plus a
 * 50-level background, which keeps contrast consistent with the rest of the
 * site. Shared by BlogThumbnail and CategoryBadge so the two never drift.
 */
export const CATEGORY_PALETTES: Record<BlogCategory, CategoryPalette> = {
  Building: {
    strong: "#4c6ef5",
    mid: "#748ffc",
    soft: "#bac8ff",
    bg: "#f0f4ff",
  },
  "Business Design": {
    strong: "#7c3aed",
    mid: "#a78bfa",
    soft: "#ddd6fe",
    bg: "#f5f3ff",
  },
  "Venture Systems": {
    strong: "#4338ca",
    mid: "#818cf8",
    soft: "#c7d2fe",
    bg: "#eef2ff",
  },
  "Validation & Launch": {
    strong: "#059669",
    mid: "#34d399",
    soft: "#a7f3d0",
    bg: "#ecfdf5",
  },
  "For Marketers": {
    strong: "#db2777",
    mid: "#f472b6",
    soft: "#fbcfe8",
    bg: "#fdf2f8",
  },
  "Career Pivot": {
    strong: "#d97706",
    mid: "#fbbf24",
    soft: "#fde68a",
    bg: "#fffbeb",
  },
  "For Corporate Professionals": {
    strong: "#0891b2",
    mid: "#22d3ee",
    soft: "#a5f3fc",
    bg: "#ecfeff",
  },
  Mindset: {
    strong: "#9333ea",
    mid: "#c084fc",
    soft: "#e9d5ff",
    bg: "#faf5ff",
  },
  "For Consultants": {
    strong: "#0d9488",
    mid: "#2dd4bf",
    soft: "#99f6e4",
    bg: "#f0fdfa",
  },
  "From Experience to Business": {
    strong: "#ea580c",
    mid: "#fb923c",
    soft: "#fed7aa",
    bg: "#fff7ed",
  },
  "For Operators": {
    strong: "#65a30d",
    mid: "#a3e635",
    soft: "#d9f99d",
    bg: "#f7fee7",
  },
  "Productizing Expertise": {
    strong: "#c026d3",
    mid: "#e879f9",
    soft: "#f5d0fe",
    bg: "#fdf4ff",
  },
};

export const FALLBACK_PALETTE: CategoryPalette = CATEGORY_PALETTES.Building;

export function paletteFor(category?: BlogCategory): CategoryPalette {
  return (category && CATEGORY_PALETTES[category]) || FALLBACK_PALETTE;
}
