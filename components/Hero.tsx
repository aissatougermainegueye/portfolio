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
        {/* Masthead — style une-de-journal */}
        <div className="rule-double" aria-hidden />
        <div className="flex items-center justify-between py-3 text-[11px] uppercase tracking-[0.22em] text-ink-muted dark:text-slate-400">
          <span className="smallcaps font-medium">{t.hero.kicker}</span>
          <span className="hidden sm:inline">
            {t.common.location} <span className="ornament" />{" "}
            {t.hero.badge_available}
          </span>
        </div>
        <div className="rule-double" aria-hidden />

        <div className="mt-14 md:mt-20 grid lg:grid-cols-[1.75fr_1fr] gap-12 lg:gap-16 items-end">
          <div>
            <h1 className="font-display display-huge text-ink dark:text-slate-50 text-balance">
              {t.common.firstName}
              <br />
              <span className="italic">{t.common.lastName}</span>
            </h1>

            <p className="mt-10 max-w-xl text-lg md:text-xl text-ink-soft leading-relaxed dark:text-slate-300">
              {t.hero.tagline}
            </p>

            <div className="mt-10 flex items-center gap-8 text-sm">
              <a href="#contact" className="link-underline font-medium">
                {t.hero.cta_contact}
              </a>
              <a
                href="#experience"
                className="text-ink-muted hover:text-ink transition-colors dark:text-slate-400 dark:hover:text-slate-100"
              >
                {t.hero.cta_journey} →
              </a>
            </div>
          </div>

          <div className="relative w-full max-w-xs lg:max-w-none justify-self-end">
            <div className="relative aspect-[4/5] overflow-hidden">
              <Image
                src={withBase("/photo.jpeg")}
                alt={`${t.common.firstName} ${t.common.lastName}`}
                fill
                priority
                sizes="(min-width: 1024px) 22rem, 60vw"
                className="object-cover grayscale-[0.15]"
              />
            </div>
            <p className="mt-3 border-t border-ink/20 pt-2 text-xs uppercase tracking-[0.22em] text-ink-muted dark:border-white/20 dark:text-slate-500 smallcaps">
              {t.hero.title_role}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}


