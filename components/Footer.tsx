"use client";

import { useApp } from "./Providers";

export default function Footer() {
  const { t } = useApp();
  return (
    <footer className="border-t border-ink/[0.08] bg-white dark:bg-[#0b1120] dark:border-white/[0.08]">
      <div className="container-page py-8 flex flex-col md:flex-row items-center justify-between gap-3 mono text-xs text-ink-muted dark:text-slate-500">
        <p>
          <span className="text-gold-dark/70 dark:text-gold-light/70">$ </span>
          echo &quot;© {new Date().getFullYear()} {t.common.firstName}{" "}
          {t.common.lastName} - {t.footer.role}&quot;
        </p>
        <p>
          <span className="text-gold-dark/70 dark:text-gold-light/70">$ </span>
          exit 0
        </p>
      </div>
    </footer>
  );
}
