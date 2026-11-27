"use client";

import { useLayoutEffect, useSyncExternalStore } from "react";
import { applyTheme, readTheme, subscribeToTheme, themeStorageKey } from "./theme";

type ThemeToggleProps = {
  label: string;
};

export function ThemeToggle({ label }: ThemeToggleProps) {
  const theme = useSyncExternalStore(subscribeToTheme, readTheme, () => null);

  // In dev, Strict Mode remounts can reset <html> attributes; re-apply the saved theme.
  useLayoutEffect(() => {
    const saved = localStorage.getItem(themeStorageKey);
    if (saved === "light" || saved === "dark") applyTheme(saved);
  }, []);

  return (
    <button
      type="button"
      aria-label={label}
      aria-pressed={theme === null ? undefined : theme === "dark"}
      onClick={() => applyTheme(readTheme() === "dark" ? "light" : "dark")}
      className="grid size-10 place-items-center rounded-full border border-border text-fg transition-colors hover:bg-accent-soft"
    >
      {/* Moon in light mode, sun in dark mode: CSS-driven, so no flash before hydration. */}
      <svg aria-hidden="true" viewBox="0 0 24 24" className="size-5 dark:hidden" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M21 12.8A9 9 0 1 1 11.2 3a7 7 0 0 0 9.8 9.8z" />
      </svg>
      <svg aria-hidden="true" viewBox="0 0 24 24" className="hidden size-5 dark:block" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="4" />
        <path d="M12 2v2M12 20v2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M2 12h2M20 12h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4" />
      </svg>
    </button>
  );
}
