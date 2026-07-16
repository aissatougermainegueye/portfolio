"use client";

import { useApp } from "./Providers";

export default function About() {
  const { t } = useApp();

  return (
    <section id="about" className="section surface-alt">
      <div className="container-page">
        <SectionHead cmd="cat about.md" kicker={t.about.kicker} />

        <div className="mt-12 grid md:grid-cols-[1fr_3fr] gap-8 md:gap-16">
          <div />
          <div>
            <h2 className="section-title text-balance">
              {t.about.title_pre} {t.about.title_accent}
              {t.about.title_post}
            </h2>

            <div className="mt-10 grid lg:grid-cols-[1.6fr_1fr] gap-12 lg:gap-16 items-start">
              <div className="space-y-6 text-ink-soft leading-[1.8] text-[17px] dark:text-slate-300">
                <p className="text-balance">{t.about.p1}</p>
                <p className="text-balance text-ink-muted dark:text-slate-400">
                  {t.about.p2}
                </p>
              </div>

              <aside className="space-y-8 pt-1">
                <div>
                  <p className="cmt text-xs">{t.about.qualities_title}</p>
                  <p className="mt-2 mono text-sm text-ink-soft leading-[1.9] dark:text-slate-300">
                    [{t.about.soft_skills.map((s) => `"${s}"`).join(", ")}]
                  </p>
                </div>

                <div>
                  <p className="cmt text-xs">{t.about.languages_title}</p>
                  <ul className="mt-2 mono text-sm space-y-1">
                    {t.about.languages.map((l) => (
                      <li
                        key={l.name}
                        className="flex items-baseline justify-between gap-4"
                      >
                        <span className="text-ink dark:text-slate-100">
                          {l.name}
                        </span>
                        <span className="text-ink-muted dark:text-slate-400">
                          [{l.level}]
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <p className="cmt text-xs">{t.about.interests_title}</p>
                  <ul className="mt-2 space-y-3 text-sm">
                    {t.about.interests.map((it) => (
                      <li key={it.title}>
                        <p className="mono text-ink dark:text-slate-100">
                          &gt; {it.title}
                        </p>
                        <p className="text-ink-muted dark:text-slate-400 pl-3">
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

function SectionHead({ cmd, kicker }: { cmd: string; kicker: string }) {
  return (
    <div>
      <p className="prompt text-ink-soft dark:text-slate-300">{cmd}</p>
      <p className="cmt mt-1 text-xs">{kicker}</p>
      <div className="mt-4 rule-dashed" aria-hidden />
    </div>
  );
}
