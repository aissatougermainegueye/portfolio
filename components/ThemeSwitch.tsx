"use client";

import { Moon, Sun } from "lucide-react";
import { useApp } from "./Providers";

export default function ThemeSwitch({
  className = "",
}: {
  className?: string;
}) {
  const { theme, toggleTheme, t } = useApp();
  const isDark = theme === "dark";
  const label = isDark ? t.toggles.theme_to_light : t.toggles.theme_to_dark;

  return (
    <button
      type="button"
      aria-label={label}
      title={label}
      onClick={toggleTheme}
      className={`grid place-items-center h-9 w-9 rounded-full border border-ink/10 bg-white text-ink transition-colors hover:border-gold hover:text-gold-dark dark:bg-white/[0.04] dark:border-white/10 dark:text-slate-200 dark:hover:border-gold-light dark:hover:text-gold-light ${className}`}
    >
      {isDark ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
    </button>
  );
}
