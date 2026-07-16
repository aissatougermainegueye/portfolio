"use client";

import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { useApp } from "./Providers";
import LangSwitch from "./LangSwitch";
import ThemeSwitch from "./ThemeSwitch";

export default function Header() {
  const { t } = useApp();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  const navItems = [
    { label: t.nav.about, href: "#about" },
    { label: t.nav.experience, href: "#experience" },
    { label: t.nav.education, href: "#education" },
    { label: t.nav.skills, href: "#skills" },
    { label: t.nav.contact, href: "#contact" },
  ];

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/85 backdrop-blur-md border-b border-ink/[0.06] shadow-sm dark:bg-[#0b1120]/85 dark:border-white/[0.06]"
          : "bg-transparent"
      }`}
    >
      <nav className="container-page flex items-center justify-between h-16 md:h-20 gap-4">
        <a
          href="#top"
          className="font-display text-base md:text-lg font-medium tracking-tight text-ink dark:text-slate-100"
        >
          {t.common.firstName} {t.common.lastName}
        </a>

        <ul className="hidden lg:flex items-center gap-7">
          {navItems.map((item) => (
            <li key={item.href}>
              <a
                href={item.href}
                className="text-sm font-medium text-ink-muted hover:text-ink transition-colors dark:text-slate-400 dark:hover:text-slate-100"
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="hidden md:flex items-center gap-2.5">
          <LangSwitch />
          <ThemeSwitch />
        </div>

        <div className="md:hidden flex items-center gap-2">
          <ThemeSwitch />
          <button
            type="button"
            aria-label={open ? t.nav.close_menu : t.nav.open_menu}
            aria-expanded={open ? "true" : "false"}
            className="p-2 -mr-2 text-ink dark:text-slate-100"
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </nav>

      {open && (
        <div className="md:hidden border-t border-ink/[0.06] bg-white/95 backdrop-blur-md dark:bg-[#0b1120]/95 dark:border-white/[0.06]">
          <ul className="container-page py-4 space-y-1">
            {navItems.map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className="block py-2 text-sm font-medium text-ink-soft hover:text-gold-dark dark:text-slate-300 dark:hover:text-gold-light"
                >
                  {item.label}
                </a>
              </li>
            ))}
            <li className="pt-3">
              <LangSwitch />
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}
