"use client";

import Image from "next/image";
import { useState } from "react";
import { useApp } from "./Providers";
import { withBase } from "@/lib/basePath";

export default function Experience() {
  const { t } = useApp();

  return (
    <section id="experience" className="section surface-base">
      <div className="container-page">
        <div className="rule-double" aria-hidden />
        <div className="flex items-baseline gap-6 py-4">
          <span className="section-number">II</span>
          <span className="eyebrow smallcaps">{t.experience.kicker}</span>
        </div>
        <div className="rule" aria-hidden />

        <div className="mt-16 grid md:grid-cols-[1fr_3fr] gap-8 md:gap-16">
          <div />
          <div>
            <h2 className="section-title">{t.experience.title}</h2>
            {t.experience.lead && (
              <p className="section-lead">{t.experience.lead}</p>
            )}

            <ol className="mt-16 divide-y divide-ink/[0.12] dark:divide-white/[0.12]">
              {t.experience.items.map((exp, i) => (
                <li
                  key={exp.company + exp.period}
                  className="grid md:grid-cols-[140px_1fr] gap-4 md:gap-10 py-12 first:pt-0"
                >
                  <div className="md:pt-2">
                    <p className="font-display italic text-ink-muted text-lg dark:text-slate-400">
                      N°0{i + 1}
                    </p>
                    <p className="mt-2 text-sm font-medium text-ink dark:text-slate-200">
                      {exp.period}
                    </p>
                    {exp.current && (
                      <span className="mt-2 inline-flex items-center gap-2 text-[11px] uppercase tracking-[0.2em] text-emerald-700 dark:text-emerald-400 smallcaps">
                        <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
                        {t.experience.current_badge}
                      </span>
                    )}
                  </div>

                  <div>
                    <div className="flex items-center gap-3">
                      <CompanyLogo
                        src={exp.logo}
                        fit={exp.logoFit}
                        company={exp.company}
                      />
                      <p className="text-sm text-ink-muted dark:text-slate-400">
                        <span className="font-medium text-ink dark:text-slate-100">
                          {exp.company}
                        </span>
                        <span className="mx-2 text-ink-subtle dark:text-slate-600">
                          —
                        </span>
                        {exp.location}
                      </p>
                    </div>

                    <h3 className="mt-3 font-display text-2xl md:text-3xl font-normal tracking-tight text-ink dark:text-slate-100 text-balance">
                      {exp.role}
                    </h3>

                    {exp.description && (
                      <p className="mt-4 text-ink-soft dark:text-slate-300 max-w-2xl italic">
                        {exp.description}
                      </p>
                    )}

                    <ul className="mt-4 space-y-2 text-ink-soft dark:text-slate-300 max-w-2xl">
                      {exp.highlights.map((h, i) => (
                        <li key={i} className="flex gap-3">
                          <span className="mt-3 h-px w-3 bg-ink/40 shrink-0 dark:bg-white/40" />
                          <span>{h}</span>
                        </li>
                      ))}
                    </ul>

                    {exp.stack && exp.stack.length > 0 && (
                      <p className="mt-6 text-xs uppercase tracking-[0.18em] text-ink-muted dark:text-slate-500 smallcaps">
                        {exp.stack.join(" · ")}
                      </p>
                    )}
                  </div>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </div>
    </section>
  );
}

function CompanyLogo({
  src,
  company,
  fit = "contain",
}: {
  src?: string;
  company: string;
  fit?: "contain" | "cover";
}) {
  const [failed, setFailed] = useState(false);
  const initials = company
    .split(/\s+/)
    .map((w) => w[0])
    .filter(Boolean)
    .slice(0, 2)
    .join("")
    .toUpperCase();

  const showImage = src && !failed;
  const imgClass = fit === "cover" ? "object-cover" : "object-contain p-0.5";

  return (
    <div className="relative h-8 w-8 rounded-md overflow-hidden border border-ink/[0.08] bg-white shrink-0 dark:border-white/[0.08] dark:bg-white/95">
      {showImage ? (
        <Image
          src={withBase(src!)}
          alt={`${company} logo`}
          fill
          sizes="32px"
          className={imgClass}
          onError={() => setFailed(true)}
        />
      ) : (
        <span className="absolute inset-0 grid place-items-center font-display text-[10px] font-semibold text-ink">
          {initials}
        </span>
      )}
    </div>
  );
}


