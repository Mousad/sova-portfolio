
"use client";

import { useCallback, useEffect, useState } from "react";
import { Moon, Sun } from "lucide-react";

const THEME_KEY = "sova-theme";
const THEME_EVENT = "sova-theme-change";

function applyTheme(dark: boolean) {
  const root = document.documentElement;

  root.classList.toggle("dark", dark);
  root.classList.toggle("light", !dark);
  root.style.colorScheme = dark ? "dark" : "light";
}

export function ThemeToggle() {
  const [isDark, setIsDark] = useState(false);
  const [mounted, setMounted] = useState(false);

  const syncTheme = useCallback((dark: boolean) => {
    setIsDark(dark);
  }, []);

  useEffect(() => {
    const savedTheme = localStorage.getItem(THEME_KEY);
    const dark = savedTheme === "dark";

    applyTheme(dark);
    syncTheme(dark);
    setMounted(true);

    const handleThemeChange = (event: Event) => {
      const customEvent = event as CustomEvent<{ dark: boolean }>;
      syncTheme(customEvent.detail.dark);
    };

    const handleStorage = (event: StorageEvent) => {
      if (event.key !== THEME_KEY) return;

      const nextDark = event.newValue === "dark";
      applyTheme(nextDark);
      syncTheme(nextDark);
    };

    window.addEventListener(THEME_EVENT, handleThemeChange);
    window.addEventListener("storage", handleStorage);

    return () => {
      window.removeEventListener(THEME_EVENT, handleThemeChange);
      window.removeEventListener("storage", handleStorage);
    };
  }, [syncTheme]);

  function toggleTheme() {
    const nextDark = !isDark;

    applyTheme(nextDark);
    localStorage.setItem(THEME_KEY, nextDark ? "dark" : "light");

    window.dispatchEvent(
      new CustomEvent(THEME_EVENT, {
        detail: { dark: nextDark },
      })
    );

    setIsDark(nextDark);
  }

  return (
    <button
      type="button"
      onClick={toggleTheme}
      disabled={!mounted}
      aria-label={isDark ? "تفعيل الوضع الفاتح" : "تفعيل الوضع الداكن"}
      aria-pressed={isDark}
      title={isDark ? "الوضع الفاتح" : "الوضع الداكن"}
      className="inline-flex size-10 shrink-0 items-center justify-center rounded-full text-foreground transition-colors duration-200 hover:bg-accent hover:text-primary disabled:opacity-60"
    >
      {mounted && isDark ? (
        <Sun size={18} strokeWidth={1.6} />
      ) : (
        <Moon size={18} strokeWidth={1.6} />
      )}
    </button>
  );
}
