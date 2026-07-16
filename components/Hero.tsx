"use client";

import Image from "next/image";
import { useApp } from "./Providers";
import { withBase } from "@/lib/basePath";

export default function Hero() {
  const { t } = useApp();

  return (
    <section
      id="top"
      className="relative pt-32 pb-16 md:pt-36 md:pb-24 surface-base"
    >
      <div className="container-page">
        <div className="grid lg:grid-cols-[1.75fr_1fr] gap-12 lg:gap-16 items-end">
          <div>
            <p className="prompt text-ink-soft dark:text-slate-300">
              whoami
            </p>
            <p className="cmt mt-1 text-xs">
              {t.common.location} · {t.hero.badge_available}
            </p>

            <h1 className="mt-8 font-display display-huge text-ink dark:text-slate-50 text-balance">
              {t.common.firstName}
              <br />
              {t.common.lastName}
            </h1>

            <p className="mt-3 mono text-sm text-gold-dark dark:text-gold-light">
              &gt; {t.hero.title_role.toLowerCase()}
              <span className="caret" />
            </p>

            <p className="mt-10 max-w-xl text-lg md:text-xl text-ink-soft leading-relaxed dark:text-slate-300">
              {t.hero.tagline}
            </p>

            <div className="mt-10 flex items-center gap-8 mono text-sm">
              <a href="#contact" className="link-underline font-medium">
                ./contact.sh
              </a>
              <a
                href="#experience"
                className="text-ink-muted hover:text-ink transition-colors dark:text-slate-400 dark:hover:text-slate-100"
              >
                cat experience &gt;
              </a>
            </div>
          </div>

          <div className="relative w-full max-w-xs lg:max-w-none justify-self-end">
            <div className="mono text-[11px] text-ink-muted dark:text-slate-500 mb-2 flex items-center justify-between">
              <span>./photo.jpg</span>
              <span>4:5</span>
            </div>
            <div className="relative aspect-[4/5] overflow-hidden border border-ink/[0.15] dark:border-white/[0.15]">
              <Image
                src={withBase("/photo.jpg")}
                alt={`${t.common.firstName} ${t.common.lastName}`}
                fill
                priority
                sizes="(min-width: 1024px) 22rem, 60vw"
                className="object-cover grayscale-[0.15]"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}



