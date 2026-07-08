"use client";

import { locales, type Locale } from "@/lib/i18n";
import { useApp } from "./Providers";

export default function LangSwitch({
  className = "",
}: {
  className?: string;
}) {
  const { locale, setLocale, t } = useApp();

  return (
    <div
      role="group"
      aria-label={t.toggles.lang_aria}
      className={`inline-flex items-center rounded-full border border-ink/10 bg-white p-0.5 text-[11px] font-semibold uppercase tracking-widest dark:bg-white/[0.04] dark:border-white/10 ${className}`}
    >
      {locales.map((l: Locale) => {
        const active = l === locale;
        return (
          <button
            key={l}
            type="button"
            aria-pressed={active ? "true" : "false"}
            onClick={() => setLocale(l)}
            className={`px-2.5 py-1 rounded-full transition-colors ${
              active
                ? "bg-ink text-white dark:bg-gold-light dark:text-slate-900"
                : "text-ink-muted hover:text-ink dark:text-slate-400 dark:hover:text-slate-100"
            }`}
          >
            {l}
          </button>
        );
      })}
    </div>
  );
}
