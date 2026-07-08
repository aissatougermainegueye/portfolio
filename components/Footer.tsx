"use client";

import { useApp } from "./Providers";

export default function Footer() {
  const { t } = useApp();
  return (
    <footer className="border-t border-ink/[0.06] bg-white dark:bg-[#0b1120] dark:border-white/[0.06]">
      <div className="container-page py-10 flex flex-col md:flex-row items-center justify-between gap-3 text-sm text-ink-muted dark:text-slate-400">
        <p>
          © {new Date().getFullYear()} {t.common.firstName} {t.common.lastName} — {t.footer.role}
        </p>
      </div>
    </footer>
  );
}
