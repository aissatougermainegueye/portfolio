"use client";

import { techStack } from "@/lib/data";
import { useApp } from "./Providers";

export default function Skills() {
  const { t } = useApp();

  return (
    <section id="skills" className="section surface-base">
      <div className="container-page">
        <div className="rule-double" aria-hidden />
        <div className="flex items-baseline gap-6 py-4">
          <span className="section-number">IV</span>
          <span className="eyebrow smallcaps">{t.skills.kicker}</span>
        </div>
        <div className="rule" aria-hidden />

        <div className="mt-16 grid md:grid-cols-[1fr_3fr] gap-8 md:gap-16">
          <div />
          <div>
            <h2 className="section-title">{t.skills.title}</h2>

            <div className="mt-14 space-y-10">
              {t.skills.groups.map((g, i) => {
                const items = techStack[g.kind];
                return (
                  <div
                    key={g.kind}
                    className="grid md:grid-cols-[180px_1fr] gap-4 md:gap-10 border-t border-ink/[0.12] pt-8 dark:border-white/[0.12]"
                  >
                    <div>
                      <p className="font-display italic text-ink-muted text-sm dark:text-slate-400">
                        N°0{i + 1}
                      </p>
                      <h3 className="mt-1 font-display text-xl font-normal text-ink dark:text-slate-100">
                        {g.title}
                      </h3>
                      <p className="mt-1 text-xs italic text-ink-muted dark:text-slate-500">
                        {g.subtitle}
                      </p>
                    </div>
                    <p className="text-ink-soft leading-[1.9] text-[17px] dark:text-slate-300">
                      {items.join(" · ")}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}


