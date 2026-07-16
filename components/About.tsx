"use client";

import { useApp } from "./Providers";

export default function About() {
  const { t } = useApp();

  return (
    <section id="about" className="section surface-base">
      <div className="container-page">
        <div className="grid md:grid-cols-[1fr_3fr] gap-8 md:gap-16">
          <div className="md:pt-2">
            <span className="eyebrow">{t.about.kicker}</span>
          </div>
          <div>
            <h2 className="section-title text-balance">
              {t.about.title_pre} {t.about.title_accent}
              {t.about.title_post}
            </h2>

            <div className="mt-12 grid lg:grid-cols-[1.6fr_1fr] gap-12 lg:gap-20 items-start">
              <div className="space-y-6 text-ink-soft leading-[1.75] text-[17px] dark:text-slate-300">
                <p className="text-balance">{t.about.p1}</p>
                <p className="text-balance text-ink-muted dark:text-slate-400">
                  {t.about.p2}
                </p>
              </div>

              <aside className="space-y-10 pt-1">
                <div>
                  <h3 className="eyebrow">{t.about.qualities_title}</h3>
                  <ul className="mt-4 flex flex-wrap gap-x-3 gap-y-2 text-sm text-ink-soft dark:text-slate-300">
                    {t.about.soft_skills.map((skill, i) => (
                      <li key={skill} className="flex items-center gap-3">
                        <span>{skill}</span>
                        {i < t.about.soft_skills.length - 1 && (
                          <span className="text-ink-subtle dark:text-slate-600">
                            /
                          </span>
                        )}
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h3 className="eyebrow">{t.about.languages_title}</h3>
                  <ul className="mt-4 divide-y divide-ink/[0.06] dark:divide-white/[0.06]">
                    {t.about.languages.map((l) => (
                      <li
                        key={l.name}
                        className="flex items-baseline justify-between py-2.5"
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

                <div>
                  <h3 className="eyebrow">{t.about.interests_title}</h3>
                  <ul className="mt-4 space-y-3 text-sm">
                    {t.about.interests.map((it) => (
                      <li key={it.title}>
                        <p className="font-medium text-ink dark:text-slate-100">
                          {it.title}
                        </p>
                        <p className="text-ink-muted dark:text-slate-400">
                          {it.description}
                        </p>
                      </li>
                    ))}
                  </ul>
                </div>
              </aside>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

