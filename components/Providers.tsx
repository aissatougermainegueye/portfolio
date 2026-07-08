"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from "react";
import { dictionaries, type Dict, type Locale } from "@/lib/i18n";

type Theme = "light" | "dark";

type AppContextValue = {
  locale: Locale;
  setLocale: (l: Locale) => void;
  t: Dict;
  theme: Theme;
  setTheme: (t: Theme) => void;
  toggleTheme: () => void;
};

const AppContext = createContext<AppContextValue | null>(null);

export function useApp() {
  const ctx = useContext(AppContext);
  if (!ctx) throw new Error("useApp must be used within <Providers>");
  return ctx;
}

export const useT = () => useApp().t;

export default function Providers({ children }: { children: ReactNode }) {
  const [locale, setLocaleState] = useState<Locale>("fr");
  const [theme, setThemeState] = useState<Theme>("light");
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    // Read initial values (theme already applied by inline script in <head>)
    try {
      const l = localStorage.getItem("lang");
      if (l === "fr" || l === "en") setLocaleState(l);
      const t = document.documentElement.classList.contains("dark")
        ? "dark"
        : "light";
      setThemeState(t);
    } catch {
      /* noop */
    }
    setMounted(true);
  }, []);

  const setLocale = useCallback((l: Locale) => {
    setLocaleState(l);
    try {
      localStorage.setItem("lang", l);
      document.documentElement.setAttribute("lang", l);
    } catch {
      /* noop */
    }
  }, []);

  const setTheme = useCallback((t: Theme) => {
    setThemeState(t);
    try {
      localStorage.setItem("theme", t);
      document.documentElement.classList.toggle("dark", t === "dark");
    } catch {
      /* noop */
    }
  }, []);

  const toggleTheme = useCallback(() => {
    setTheme(theme === "dark" ? "light" : "dark");
  }, [theme, setTheme]);

  const value = useMemo<AppContextValue>(
    () => ({
      locale,
      setLocale,
      t: dictionaries[locale],
      theme,
      setTheme,
      toggleTheme,
    }),
    [locale, theme, setLocale, setTheme, toggleTheme]
  );

  return (
    <AppContext.Provider value={value}>
      <div data-mounted={mounted ? "true" : "false"}>{children}</div>
    </AppContext.Provider>
  );
}
