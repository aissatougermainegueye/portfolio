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
        <SectionHead cmd="ls -la ./experience" kicker={t.experience.kicker} />

        <div className="mt-12 grid md:grid-cols-[1fr_3fr] gap-8 md:gap-16">
          <div />
          <div>
            <h2 className="section-title">{t.experience.title}</h2>
            {t.experience.lead && (
              <p className="section-lead">{t.experience.lead}</p>
            )}

            <ol className="mt-12 space-y-0">
              {t.experience.items.map((exp, i) => (
                <li
                  key={exp.company + exp.period}
                  className="grid md:grid-cols-[160px_1fr] gap-4 md:gap-10 py-10 border-t border-dashed border-ink/[0.18] first:border-t-0 first:pt-0 dark:border-white/[0.18]"
                >
                  <div className="md:pt-1">
                    <p className="mono text-xs text-ink-muted dark:text-slate-500">
                      [{String(i + 1).padStart(2, "0")}]
                    </p>
                    <p className="mt-2 mono text-sm text-ink dark:text-slate-100">
                      {exp.period}
                    </p>
                    {exp.current && (
                      <span className="mt-3 inline-flex items-center gap-2 mono text-[11px] text-emerald-700 dark:text-emerald-400">
                        <span className="h-1.5 w-1.5 rounded-full bg-emerald-500 animate-pulse" />
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
                      <p className="mono text-sm text-ink-muted dark:text-slate-400">
                        <span className="text-ink dark:text-slate-100">
                          {exp.company}
                        </span>
                        <span className="text-gold-dark/70 dark:text-gold-light/70">
                          {" @ "}
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

                    <ul className="mt-5 space-y-1.5 max-w-2xl">
                      {exp.highlights.map((h, j) => {
                        const last = j === exp.highlights.length - 1;
                        return (
                          <li key={j} className="flex gap-3 text-ink-soft dark:text-slate-300">
                            <span className="mono text-ink-muted dark:text-slate-500 shrink-0">
                              {last ? "└──" : "├──"}
                            </span>
                            <span>{h}</span>
                          </li>
                        );
                      })}
                    </ul>

                    {exp.stack && exp.stack.length > 0 && (
                      <p className="mt-6 mono text-xs text-ink-muted dark:text-slate-500">
                        <span className="text-gold-dark/70 dark:text-gold-light/70">
                          $ stack:{" "}
                        </span>
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

function SectionHead({ cmd, kicker }: { cmd: string; kicker: string }) {
  return (
    <div>
      <p className="prompt text-ink-soft dark:text-slate-300">{cmd}</p>
      <p className="cmt mt-1 text-xs">{kicker}</p>
      <div className="mt-4 rule-dashed" aria-hidden />
    </div>
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
  const imgClass = fit === "cover" ? "object-cover" : "object-contain p-1";

  return (
    <div className="relative h-14 w-14 overflow-hidden border border-ink/[0.15] bg-white shrink-0 dark:border-white/[0.15] dark:bg-white/95">
      {showImage ? (
        <Image
          src={withBase(src!)}
          alt={`${company} logo`}
          fill
          sizes="56px"
          className={imgClass}
          onError={() => setFailed(true)}
        />
      ) : (
        <span className="absolute inset-0 grid place-items-center mono text-sm font-semibold text-ink">
          {initials}
        </span>
      )}
    </div>
  );
}
