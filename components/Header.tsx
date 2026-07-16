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
    { label: t.nav.about, href: "#about", cmd: "about" },
    { label: t.nav.experience, href: "#experience", cmd: "experience" },
    { label: t.nav.education, href: "#education", cmd: "education" },
    { label: t.nav.skills, href: "#skills", cmd: "skills" },
    { label: t.nav.contact, href: "#contact", cmd: "contact" },
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
          ? "bg-white/90 backdrop-blur-md border-b border-ink/[0.08] dark:bg-[#0b1120]/90 dark:border-white/[0.08]"
          : "bg-transparent"
      }`}
    >
      <nav className="container-page flex items-center justify-between h-16 md:h-20 gap-4">
        <a
          href="#top"
          className="mono text-sm md:text-[15px] font-medium text-ink dark:text-slate-100"
        >
          <span className="text-gold-dark dark:text-gold-light">~/</span>
          {t.common.firstName.toLowerCase().replace(/\s+/g, "")}.
          <span className="text-ink-muted dark:text-slate-400">
            {t.common.lastName.toLowerCase()}
          </span>
        </a>

        <ul className="hidden lg:flex items-center gap-6">
          {navItems.map((item) => (
            <li key={item.href}>
              <a
                href={item.href}
                className="mono text-sm text-ink-muted hover:text-ink transition-colors dark:text-slate-400 dark:hover:text-slate-100"
              >
                <span className="text-gold-dark/60 dark:text-gold-light/60">
                  ./
                </span>
                {item.cmd}
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
        <div className="md:hidden border-t border-ink/[0.08] bg-white/95 backdrop-blur-md dark:bg-[#0b1120]/95 dark:border-white/[0.08]">
          <ul className="container-page py-4 space-y-1">
            {navItems.map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className="block py-2 mono text-sm text-ink-soft hover:text-gold-dark dark:text-slate-300 dark:hover:text-gold-light"
                >
                  <span className="text-gold-dark/60 dark:text-gold-light/60">
                    ./
                  </span>
                  {item.cmd}
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
