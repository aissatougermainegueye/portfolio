"use client";

import { useApp } from "./Providers";

export default function Education() {
  const { t } = useApp();

  return (
    <section id="education" className="section surface-base">
      <div className="container-page">
        <div className="grid md:grid-cols-[1fr_3fr] gap-8 md:gap-16">
          <div className="md:pt-2">
            <span className="eyebrow">{t.education.kicker}</span>
          </div>
          <div>
            <h2 className="section-title">{t.education.title}</h2>

            <ul className="mt-14 divide-y divide-ink/[0.08] dark:divide-white/[0.08]">
              {t.education.items.map((ed) => (
                <li
                  key={ed.degree + ed.period}
                  className="grid md:grid-cols-[140px_1fr] gap-3 md:gap-10 py-8"
                >
                  <p className="text-sm font-medium text-ink dark:text-slate-200 md:pt-1">
                    {ed.period}
                  </p>
                  <div>
                    <h3 className="font-display text-xl md:text-2xl font-normal tracking-tight text-ink text-balance dark:text-slate-100">
                      {ed.degree}
                    </h3>
                    <p className="mt-1.5 text-sm text-ink-muted dark:text-slate-400">
                      <span className="text-ink dark:text-slate-200">
                        {ed.school}
                      </span>
                      <span className="mx-2 text-ink-subtle dark:text-slate-600">
                        —
                      </span>
                      {ed.location}
                    </p>
                    {ed.description && (
                      <p className="mt-3 text-ink-soft dark:text-slate-300 max-w-2xl">
                        {ed.description}
                      </p>
                    )}
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

