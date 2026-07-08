"use client";

import { MapPin } from "lucide-react";
import { useApp } from "./Providers";

export default function Education() {
  const { t } = useApp();

  return (
    <section id="education" className="section surface-base">
      <div className="container-page">
        <div className="max-w-3xl">
          <p className="section-kicker">{t.education.kicker}</p>
          <h2 className="section-title">{t.education.title}</h2>
          <p className="section-lead">{t.education.lead}</p>
        </div>

        <div className="mt-14 grid md:grid-cols-2 gap-5">
          {t.education.items.map((ed) => (
            <article
              key={ed.degree + ed.period}
              className="card card-hover group"
            >
              <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-ink-subtle dark:text-slate-500">
                {ed.period}
              </p>
              <h3 className="mt-3 font-display text-lg md:text-xl font-medium text-ink text-balance dark:text-slate-100">
                {ed.degree}
              </h3>
              <p className="mt-2 text-sm font-medium text-gold-dark dark:text-gold-light">
                {ed.school}
              </p>
              <p className="mt-1 text-sm text-ink-muted flex items-center gap-1.5 dark:text-slate-400">
                <MapPin className="h-3.5 w-3.5" />
                {ed.location}
              </p>
              {ed.description && (
                <p className="mt-4 text-sm text-ink-soft leading-relaxed dark:text-slate-300">
                  {ed.description}
                </p>
              )}
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
