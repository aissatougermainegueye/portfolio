"use client";

import { Code2, Layers, Wrench } from "lucide-react";
import { techStack } from "@/lib/data";
import { useApp } from "./Providers";

const iconByKind = {
  languages: Code2,
  frameworks: Layers,
  tools: Wrench,
} as const;

export default function Skills() {
  const { t } = useApp();

  return (
    <section id="skills" className="section surface-alt">
      <div className="container-page">
        <div className="max-w-3xl">
          <p className="section-kicker">{t.skills.kicker}</p>
          <h2 className="section-title">{t.skills.title}</h2>
          <p className="section-lead">{t.skills.lead}</p>
        </div>

        <div className="mt-14 grid md:grid-cols-3 gap-5">
          {t.skills.groups.map((g) => {
            const Icon = iconByKind[g.kind];
            const items = techStack[g.kind];
            return (
              <div key={g.kind} className="card card-hover">
                <div className="flex items-center gap-3">
                  <span className="grid place-items-center h-10 w-10 rounded-lg bg-gold-soft text-gold-dark dark:bg-gold-dark/25 dark:text-gold-light">
                    <Icon className="h-4 w-4" />
                  </span>
                  <div>
                    <h3 className="font-display text-lg font-medium text-ink leading-tight dark:text-slate-100">
                      {g.title}
                    </h3>
                    <p className="text-xs text-ink-muted mt-0.5 dark:text-slate-400">
                      {g.subtitle}
                    </p>
                  </div>
                </div>
                <ul className="mt-6 flex flex-wrap gap-1.5">
                  {items.map((s) => (
                    <li key={s} className="badge">
                      {s}
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
