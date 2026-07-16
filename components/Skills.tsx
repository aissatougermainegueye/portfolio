"use client";

import { useApp } from "./Providers";
import { techStack, type TechGroupKind } from "@/lib/data";

export default function Skills() {
  const { t } = useApp();

  return (
    <section id="skills" className="section surface-base">
      <div className="container-page">
        <SectionHead cmd="cat stack.txt" kicker={t.skills.kicker} />

        <div className="mt-12 grid md:grid-cols-[1fr_3fr] gap-8 md:gap-16">
          <div />
          <div>
            <h2 className="section-title">{t.skills.title}</h2>

            <div className="mt-10 space-y-10">
              {t.skills.groups.map((g) => {
                const items = techStack[g.kind as TechGroupKind];
                return (
                  <div
                    key={g.kind}
                    className="border-t border-dashed border-ink/[0.18] pt-6 first:border-t-0 first:pt-0 dark:border-white/[0.18]"
                  >
                    <p className="cmt text-xs">{g.subtitle}</p>
                    <h3 className="mt-1 font-display text-xl md:text-2xl font-normal tracking-tight text-ink dark:text-slate-100">
                      {g.title}
                    </h3>
                    <p className="mt-4 mono text-sm text-ink-soft leading-[1.9] dark:text-slate-300">
                      <span className="text-gold-dark/70 dark:text-gold-light/70">
                        ${" "}
                      </span>
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

function SectionHead({ cmd, kicker }: { cmd: string; kicker: string }) {
  return (
    <div>
      <p className="prompt text-ink-soft dark:text-slate-300">{cmd}</p>
      <p className="cmt mt-1 text-xs">{kicker}</p>
      <div className="mt-4 rule-dashed" aria-hidden />
    </div>
  );
}
