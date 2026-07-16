"use client";

import { techStack } from "@/lib/data";
import { useApp } from "./Providers";

export default function Skills() {
  const { t } = useApp();

  return (
    <section id="skills" className="section surface-alt">
      <div className="container-page">
        <div className="grid md:grid-cols-[1fr_3fr] gap-8 md:gap-16">
          <div className="md:pt-2">
            <span className="eyebrow">{t.skills.kicker}</span>
          </div>
          <div>
            <h2 className="section-title">{t.skills.title}</h2>

            <div className="mt-14 space-y-12">
              {t.skills.groups.map((g) => {
                const items = techStack[g.kind];
                return (
                  <div
                    key={g.kind}
                    className="grid md:grid-cols-[180px_1fr] gap-4 md:gap-10 border-t border-ink/[0.08] pt-8 dark:border-white/[0.08]"
                  >
                    <div>
                      <h3 className="font-display text-lg font-normal text-ink dark:text-slate-100">
                        {g.title}
                      </h3>
                      <p className="mt-1 text-xs text-ink-muted dark:text-slate-500">
                        {g.subtitle}
                      </p>
                    </div>
                    <p className="text-ink-soft leading-[1.9] dark:text-slate-300">
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

