"use client";

import { useState, useMemo, useCallback } from "react";
import { mockScreens, ALL_TAGS, type MockScreen } from "@/lib/mockScreens";
import { ScreenPreviewModal } from "./ScreenPreviewModal";

const STORAGE_KEY = "vibepreneur-demo-included";

function getStoredSet(key: string): Set<string> {
  try {
    const stored = localStorage.getItem(key);
    if (stored) return new Set(JSON.parse(stored));
  } catch {}
  return new Set();
}

function useLocalStorageSet(key: string): [Set<string>, (id: string) => void] {
  const [set, setSet] = useState<Set<string>>(() => {
    if (typeof window === "undefined") return new Set();
    return getStoredSet(key);
  });

  const toggle = useCallback(
    (id: string) => {
      setSet((prev) => {
        const next = new Set(prev);
        if (next.has(id)) next.delete(id);
        else next.add(id);
        localStorage.setItem(key, JSON.stringify([...next]));
        return next;
      });
    },
    [key]
  );

  return [set, toggle];
}

export function DemoGallery() {
  const [search, setSearch] = useState("");
  const [activeTags, setActiveTags] = useState<Set<string>>(new Set());
  const [compact, setCompact] = useState(false);
  const [showAnnotations, setShowAnnotations] = useState(false);
  const [activeScreen, setActiveScreen] = useState<MockScreen | null>(null);
  const [included, toggleIncluded] = useLocalStorageSet(STORAGE_KEY);

  const filtered = useMemo(() => {
    return mockScreens.filter((s) => {
      const matchesSearch =
        !search ||
        s.title.toLowerCase().includes(search.toLowerCase()) ||
        s.tags.some((t) => t.toLowerCase().includes(search.toLowerCase()));
      const matchesTags =
        activeTags.size === 0 || s.tags.some((t) => activeTags.has(t));
      return matchesSearch && matchesTags;
    });
  }, [search, activeTags]);

  const toggleTag = (tag: string) => {
    setActiveTags((prev) => {
      const next = new Set(prev);
      if (next.has(tag)) next.delete(tag);
      else next.add(tag);
      return next;
    });
  };

  const activeIndex = activeScreen
    ? filtered.findIndex((s) => s.id === activeScreen.id)
    : -1;

  const handlePrev = () => {
    if (activeIndex > 0) setActiveScreen(filtered[activeIndex - 1]);
  };
  const handleNext = () => {
    if (activeIndex < filtered.length - 1)
      setActiveScreen(filtered[activeIndex + 1]);
  };

  const includedCount = included.size;

  return (
    <div className="min-h-screen bg-neutral-50">
      <div className="border-b border-neutral-200 bg-white">
        <div className="mx-auto max-w-7xl px-6 py-6">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-xl font-bold text-neutral-900">
                Product UI Concepts
              </h1>
              <p className="mt-1 text-sm text-neutral-500">
                {filtered.length} screens · Selected: {includedCount}/
                {mockScreens.length}
              </p>
            </div>
            <div className="flex items-center gap-3">
              <button
                onClick={() => setShowAnnotations(!showAnnotations)}
                className={`rounded-lg border px-3 py-1.5 text-xs font-medium transition-colors ${showAnnotations ? "border-brand-200 bg-brand-50 text-brand-700" : "border-neutral-200 text-neutral-600 hover:bg-neutral-50"}`}
              >
                {showAnnotations ? "Annotations on" : "Show annotations"}
              </button>
              <button
                onClick={() => setCompact(!compact)}
                className="rounded-lg border border-neutral-200 px-3 py-1.5 text-xs font-medium text-neutral-600 hover:bg-neutral-50"
              >
                {compact ? "Comfortable" : "Compact"}
              </button>
            </div>
          </div>

          <div className="mt-4 flex flex-wrap items-center gap-3">
            <div className="flex-1 rounded-lg border border-neutral-200 bg-white px-4 py-2">
              <input
                type="text"
                placeholder="Search screens..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="w-full bg-transparent text-sm text-neutral-700 outline-none placeholder:text-neutral-400"
              />
            </div>
            <div className="flex flex-wrap gap-1.5">
              {ALL_TAGS.map((tag) => (
                <button
                  key={tag}
                  onClick={() => toggleTag(tag)}
                  className={`rounded-full px-3 py-1 text-xs font-medium transition-colors ${activeTags.has(tag) ? "bg-brand-600 text-white" : "bg-neutral-100 text-neutral-600 hover:bg-neutral-200"}`}
                >
                  {tag}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="mx-auto max-w-7xl px-6 py-8">
        <div
          className={`grid gap-4 ${compact ? "grid-cols-2 md:grid-cols-3 lg:grid-cols-4" : "grid-cols-1 md:grid-cols-2 lg:grid-cols-3"}`}
        >
          {filtered.map((screen) => (
            <button
              key={screen.id}
              onClick={() => setActiveScreen(screen)}
              className="group rounded-2xl border border-neutral-200 bg-white p-4 text-left transition-shadow hover:shadow-md"
            >
              <div
                className={`overflow-hidden rounded-lg border border-neutral-100 bg-neutral-50 ${compact ? "h-28" : "h-40"}`}
              >
                <div className="flex h-full items-center justify-center">
                  <div className="text-center">
                    <span className="text-2xl">
                      {screen.tags[0] === "Insight"
                        ? "◎"
                        : screen.tags[0] === "Solution"
                          ? "▣"
                          : screen.tags[0] === "Positioning"
                            ? "◈"
                            : screen.tags[0] === "GTM"
                              ? "▶"
                              : screen.tags[0] === "Distribution"
                                ? "◇"
                                : screen.tags[0] === "Growth"
                                  ? "△"
                                  : screen.tags[0] === "Validation"
                                    ? "◉"
                                    : screen.tags[0] === "Settings"
                                      ? "⚙"
                                      : screen.tags[0] === "Onboarding"
                                        ? "→"
                                        : "◆"}
                    </span>
                    <p className="mt-1 text-[10px] text-neutral-400">
                      Click to preview
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-3 flex items-start justify-between gap-2">
                <div>
                  <p
                    className={`font-medium text-neutral-900 group-hover:text-brand-700 ${compact ? "text-xs" : "text-sm"}`}
                  >
                    {screen.title}
                  </p>
                  {!compact && (
                    <p className="mt-1 line-clamp-2 text-xs text-neutral-500">
                      {screen.description}
                    </p>
                  )}
                </div>
                {included.has(screen.id) && (
                  <span className="shrink-0 rounded-full bg-brand-50 px-2 py-0.5 text-[10px] font-medium text-brand-700">
                    Included
                  </span>
                )}
              </div>

              <div className="mt-2 flex gap-1">
                {screen.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full bg-neutral-100 px-2 py-0.5 text-[10px] text-neutral-500"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </button>
          ))}
        </div>

        {filtered.length === 0 && (
          <div className="py-20 text-center">
            <p className="text-sm text-neutral-500">
              No screens match your filters.
            </p>
          </div>
        )}
      </div>

      <ScreenPreviewModal
        screen={activeScreen}
        onClose={() => setActiveScreen(null)}
        onPrev={handlePrev}
        onNext={handleNext}
        showAnnotations={showAnnotations}
        included={activeScreen ? included.has(activeScreen.id) : false}
        onToggleInclude={() => activeScreen && toggleIncluded(activeScreen.id)}
      />
    </div>
  );
}
