"use client";

import { useApp } from "./Providers";

export default function Education() {
  const { t } = useApp();

  return (
    <section id="education" className="section surface-alt">
      <div className="container-page">
        <SectionHead cmd="cat education.log" kicker={t.education.kicker} />

        <div className="mt-12 grid md:grid-cols-[1fr_3fr] gap-8 md:gap-16">
          <div />
          <div>
            <h2 className="section-title">{t.education.title}</h2>

            <ul className="mt-10 space-y-0">
              {t.education.items.map((ed, i) => (
                <li
                  key={ed.degree + ed.period}
                  className="grid md:grid-cols-[160px_1fr] gap-3 md:gap-10 py-8 border-t border-dashed border-ink/[0.18] first:border-t-0 first:pt-0 dark:border-white/[0.18]"
                >
                  <div className="md:pt-1">
                    <p className="mono text-xs text-ink-muted dark:text-slate-500">
                      [{String(i + 1).padStart(2, "0")}]
                    </p>
                    <p className="mt-2 mono text-sm text-ink dark:text-slate-100">
                      {ed.period}
                    </p>
                  </div>
                  <div>
                    <h3 className="font-display text-xl md:text-2xl font-normal tracking-tight text-ink text-balance dark:text-slate-100">
                      {ed.degree}
                    </h3>
                    <p className="mt-1.5 mono text-sm text-ink-muted dark:text-slate-400">
                      <span className="text-ink dark:text-slate-200">
                        {ed.school}
                      </span>
                      <span className="text-gold-dark/70 dark:text-gold-light/70">
                        {" @ "}
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

function SectionHead({ cmd, kicker }: { cmd: string; kicker: string }) {
  return (
    <div>
      <p className="prompt text-ink-soft dark:text-slate-300">{cmd}</p>
      <p className="cmt mt-1 text-xs">{kicker}</p>
      <div className="mt-4 rule-dashed" aria-hidden />
    </div>
  );
}
