"use client";

import { Sparkles, BookOpen, Camera, Languages } from "lucide-react";
import { useApp } from "./Providers";

const interestIcons = [Sparkles, BookOpen, Camera];

export default function About() {
  const { t } = useApp();

  return (
    <section id="about" className="section surface-base">
      <div className="container-page">
        <div className="max-w-3xl">
          <p className="section-kicker">{t.about.kicker}</p>
          <h2 className="section-title">
            {t.about.title_pre}{" "}
            <span className="italic text-gold-dark dark:text-gold-light">
              {t.about.title_accent}
            </span>
            {t.about.title_post}
          </h2>
        </div>

        <div className="mt-14 grid lg:grid-cols-[1.55fr_1fr] gap-12 lg:gap-16 items-start">
          <div className="space-y-6 text-ink-soft leading-relaxed text-[17px] dark:text-slate-300">
            <p className="text-balance">{t.about.p1}</p>
            <p className="text-balance text-ink-muted dark:text-slate-400">
              {t.about.p2}
            </p>

            <div className="pt-4">
              <h3 className="text-[11px] font-semibold uppercase tracking-[0.25em] text-ink-subtle mb-4 dark:text-slate-500">
                {t.about.qualities_title}
              </h3>
              <ul className="flex flex-wrap gap-2">
                {t.about.soft_skills.map((skill) => (
                  <li key={skill} className="badge">
                    {skill}
                  </li>
                ))}
              </ul>
            </div>

            <div className="pt-2">
              <h3 className="text-[11px] font-semibold uppercase tracking-[0.25em] text-ink-subtle mb-4 flex items-center gap-2 dark:text-slate-500">
                <Languages className="h-3.5 w-3.5" /> {t.about.languages_title}
              </h3>
              <ul className="grid sm:grid-cols-2 gap-x-8 gap-y-2.5">
                {t.about.languages.map((l) => (
                  <li
                    key={l.name}
                    className="flex items-baseline justify-between border-b border-ink/[0.06] pb-2 dark:border-white/[0.06]"
                  >
                    <span className="font-medium text-ink dark:text-slate-100">
                      {l.name}
                    </span>
                    <span className="text-xs text-ink-muted dark:text-slate-400">
                      {l.level}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <aside>
            <div className="card">
              <h3 className="text-[11px] font-semibold uppercase tracking-[0.25em] text-ink-subtle mb-5 dark:text-slate-500">
                {t.about.interests_title}
              </h3>
              <ul className="space-y-5">
                {t.about.interests.map((it, i) => {
                  const Icon = interestIcons[i] ?? Sparkles;
                  return (
                    <li key={it.title} className="flex gap-3">
                      <span className="mt-0.5 grid place-items-center h-9 w-9 rounded-lg bg-gold-soft text-gold-dark shrink-0 dark:bg-gold-dark/25 dark:text-gold-light">
                        <Icon className="h-4 w-4" />
                      </span>
                      <div>
                        <p className="font-medium text-ink dark:text-slate-100">
                          {it.title}
                        </p>
                        <p className="text-sm text-ink-muted dark:text-slate-400">
                          {it.description}
                        </p>
                      </div>
                    </li>
                  );
                })}
              </ul>
            </div>
          </aside>
        </div>
      </div>
    </section>
  );
}
