"use client";

import Image from "next/image";
import { Mail, ArrowRight } from "lucide-react";
import { useApp } from "./Providers";
import { withBase } from "@/lib/basePath";

export default function Hero() {
  const { t } = useApp();

  return (
    <section
      id="top"
      className="relative min-h-[92vh] flex items-center pt-32 pb-20 overflow-hidden"
    >
      <div
        aria-hidden
        className="absolute inset-0 -z-10 bg-gradient-to-b from-cream via-white to-white dark:from-[#0e1626] dark:via-[#0b1120] dark:to-[#0b1120]"
      />
      <div aria-hidden className="absolute inset-0 -z-10 noise-bg opacity-40" />

      <div className="container-page grid lg:grid-cols-[1.4fr_1fr] gap-14 lg:gap-20 items-center w-full">
        <div className="animate-fade-in-up max-w-2xl">
          <p className="section-kicker">{t.hero.kicker}</p>

          <h1 className="mt-6 font-display text-[2.75rem] leading-[1.05] md:text-6xl lg:text-[4.5rem] font-medium tracking-tight text-balance dark:text-slate-50">
            {t.common.firstName}{" "}
            <span className="italic text-gold-dark dark:text-gold-light">
              {t.common.lastName}
            </span>
          </h1>

          <p className="mt-4 text-sm md:text-[15px] uppercase tracking-[0.28em] text-ink-muted font-medium dark:text-slate-400">
            {t.hero.title_role}
          </p>

          <p className="mt-8 max-w-xl text-lg text-ink-soft leading-relaxed text-balance dark:text-slate-300">
            {t.hero.tagline}
          </p>

          <p className="mt-8 flex flex-wrap items-center gap-x-3 gap-y-1 text-sm text-ink-muted dark:text-slate-400">
            <span className="inline-flex items-center gap-2">
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
              {t.hero.badge_available}
            </span>
            <span aria-hidden className="text-ink-subtle dark:text-slate-600">·</span>
            <span>{t.common.location}</span>
          </p>

          <div className="mt-10 flex flex-wrap gap-3">
            <a href="#contact" className="btn-primary">
              <Mail className="h-4 w-4" />
              {t.hero.cta_contact}
            </a>
            <a href="#experience" className="btn-outline">
              {t.hero.cta_journey}
              <ArrowRight className="h-4 w-4" />
            </a>
          </div>
        </div>

        <aside className="animate-fade-in relative mx-auto w-full max-w-sm lg:max-w-none">
          <div
            aria-hidden
            className="absolute -inset-4 rounded-[2rem] bg-gradient-to-br from-gold/15 via-transparent to-transparent blur-3xl dark:from-gold-light/10"
          />
          <div className="relative overflow-hidden rounded-2xl border border-ink/[0.08] shadow-card dark:border-white/[0.08]">
            <div className="relative aspect-[4/5]">
              <Image
                src={withBase("/photo.jpeg")}
                alt={`${t.common.firstName} ${t.common.lastName}`}
                fill
                priority
                sizes="(min-width: 1024px) 28rem, (min-width: 640px) 22rem, 80vw"
                className="object-cover"
              />
            </div>
          </div>
        </aside>
      </div>
    </section>
  );
}
