"use client";

import { useApp } from "./Providers";

export default function About() {
  const { t } = useApp();

  return (
    <section id="about" className="section surface-alt">
      <div className="container-page">
        <SectionHeader number="I" kicker={t.about.kicker} />

        <div className="mt-16 grid md:grid-cols-[1fr_3fr] gap-8 md:gap-16">
          <div />
          <div>
            <h2 className="section-title text-balance">
              {t.about.title_pre} {t.about.title_accent}
              {t.about.title_post}
            </h2>

            <div className="mt-12 grid lg:grid-cols-[1.6fr_1fr] gap-12 lg:gap-20 items-start">
              <div className="space-y-6 text-ink-soft leading-[1.8] text-[17px] dark:text-slate-300">
                <p className="dropcap text-balance">{t.about.p1}</p>
                <p className="text-balance text-ink-muted dark:text-slate-400">
                  {t.about.p2}
                </p>

                <blockquote className="pull-quote border-l-2 border-gold pl-6 mt-10 dark:border-gold-light">
                  “{t.about.soft_skills.slice(0, 3).join(" · ")}”
                </blockquote>
              </div>

              <aside className="space-y-10 pt-1">
                <div>
                  <h3 className="eyebrow smallcaps">
                    {t.about.qualities_title}
                  </h3>
                  <p className="mt-4 text-sm text-ink-soft leading-[1.9] dark:text-slate-300">
                    {t.about.soft_skills.join(" · ")}
                  </p>
                </div>

                <div>
                  <h3 className="eyebrow smallcaps">
                    {t.about.languages_title}
                  </h3>
                  <ul className="mt-4 divide-y divide-ink/[0.12] dark:divide-white/[0.12]">
                    {t.about.languages.map((l) => (
                      <li
                        key={l.name}
                        className="flex items-baseline justify-between py-2.5"
                      >
                        <span className="font-medium text-ink dark:text-slate-100">
                          {l.name}
                        </span>
                        <span className="text-xs italic text-ink-muted dark:text-slate-400">
                          {l.level}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h3 className="eyebrow smallcaps">
                    {t.about.interests_title}
                  </h3>
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

function SectionHeader({
  number,
  kicker,
}: {
  number: string;
  kicker: string;
}) {
  return (
    <>
      <div className="rule-double" aria-hidden />
      <div className="flex items-end justify-between gap-6 py-4">
        <div className="flex items-baseline gap-6">
          <span className="section-number">{number}</span>
          <span className="eyebrow smallcaps">{kicker}</span>
        </div>
      </div>
      <div className="rule" aria-hidden />
    </>
  );
}


