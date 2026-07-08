"use client";

import Image from "next/image";
import { useState } from "react";
import { MapPin } from "lucide-react";
import { useApp } from "./Providers";

export default function Experience() {
  const { t } = useApp();

  return (
    <section id="experience" className="section surface-alt">
      <div className="container-page">
        <div className="max-w-3xl">
          <p className="section-kicker">{t.experience.kicker}</p>
          <h2 className="section-title">{t.experience.title}</h2>
          <p className="section-lead">{t.experience.lead}</p>
        </div>

        <ol className="mt-14 space-y-6">
          {t.experience.items.map((exp) => (
            <li key={exp.company + exp.period}>
              <article className="card card-hover grid md:grid-cols-[180px_1fr] gap-6 md:gap-10">
                <div className="md:border-r md:border-ink/[0.06] md:pr-8 dark:md:border-white/[0.06]">
                  <CompanyLogo
                    src={exp.logo}
                    fit={exp.logoFit}
                    company={exp.company}
                  />
                  <p className="mt-4 text-sm font-medium text-ink dark:text-slate-200">
                    {exp.period}
                  </p>
                  {exp.current && (
                    <span className="mt-3 inline-flex items-center gap-2 rounded-full bg-emerald-50 border border-emerald-200 px-2.5 py-1 text-[11px] font-medium text-emerald-700 dark:bg-emerald-500/15 dark:border-emerald-500/30 dark:text-emerald-300">
                      <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
                      {t.experience.current_badge}
                    </span>
                  )}
                </div>

                <div>
                  <h3 className="font-display text-xl md:text-2xl font-medium text-ink dark:text-slate-100">
                    {exp.role}
                  </h3>
                  <div className="mt-2 flex flex-wrap items-center gap-x-4 gap-y-1 text-sm">
                    <span className="font-medium text-gold-dark dark:text-gold-light">
                      {exp.company}
                    </span>
                    <span className="text-ink-subtle dark:text-slate-500">·</span>
                    <span className="text-ink-muted flex items-center gap-1.5 dark:text-slate-400">
                      <MapPin className="h-3.5 w-3.5" />
                      {exp.location}
                    </span>
                  </div>

                  {exp.description && (
                    <p className="mt-4 text-ink-soft dark:text-slate-300">
                      {exp.description}
                    </p>
                  )}

                  <ul className="mt-4 space-y-2 text-ink-soft dark:text-slate-300">
                    {exp.highlights.map((h, i) => (
                      <li key={i} className="flex gap-3">
                        <span className="mt-2.5 h-1 w-1 rounded-full bg-gold shrink-0 dark:bg-gold-light" />
                        <span>{h}</span>
                      </li>
                    ))}
                  </ul>

                  {exp.stack && exp.stack.length > 0 && (
                    <ul className="mt-6 flex flex-wrap gap-1.5">
                      {exp.stack.map((s) => (
                        <li key={s} className="badge">
                          {s}
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              </article>
            </li>
          ))}
        </ol>
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
  const imgClass =
    fit === "cover"
      ? "object-cover"
      : "object-contain p-0.5";

  return (
    <div className="relative h-12 w-12 md:h-14 md:w-14 rounded-xl overflow-hidden border border-ink/[0.08] bg-white shadow-sm dark:border-white/[0.08] dark:bg-white/95">
      {showImage ? (
        <Image
          src={src}
          alt={`${company} logo`}
          fill
          sizes="56px"
          className={imgClass}
          onError={() => setFailed(true)}
        />
      ) : (
        <span className="absolute inset-0 grid place-items-center font-display text-sm font-semibold text-ink">
          {initials}
        </span>
      )}
    </div>
  );
}
