"use client";

import { Mail, Linkedin, ArrowUpRight } from "lucide-react";
import { contactInfo } from "@/lib/data";
import { useApp } from "./Providers";

export default function Contact() {
  const { t } = useApp();

  return (
    <section id="contact" className="section surface-alt">
      <div className="container-page">
        <div className="rule-double" aria-hidden />
        <div className="flex items-baseline gap-6 py-4">
          <span className="section-number">V</span>
          <span className="eyebrow smallcaps">{t.contact.kicker}</span>
        </div>
        <div className="rule" aria-hidden />

        <div className="mt-16 grid md:grid-cols-[1fr_3fr] gap-8 md:gap-16">
          <div />
          <div>
            <h2 className="section-title text-balance">
              {t.contact.title_pre} {t.contact.title_accent}
              {t.contact.title_post}
            </h2>
            <p className="mt-6 max-w-2xl text-ink-muted text-lg italic dark:text-slate-400">
              {t.contact.description}
            </p>

            <div className="mt-14 border-t border-ink/[0.12] dark:border-white/[0.12]">
              <ContactLine
                label={t.contact.row_email}
                value={contactInfo.email}
                href={`mailto:${contactInfo.email}`}
                icon={<Mail className="h-4 w-4" />}
              />
              <ContactLine
                label={t.contact.row_phone}
                value={contactInfo.phone}
                href={`tel:${contactInfo.phone.replace(/\s/g, "")}`}
              />
              <ContactLine
                label="LinkedIn"
                value={contactInfo.linkedin.replace(/^https?:\/\//, "")}
                href={contactInfo.linkedin}
                external
                icon={<Linkedin className="h-4 w-4" />}
              />
              <ContactLine
                label={t.contact.row_location}
                value={t.common.location}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function ContactLine({
  label,
  value,
  href,
  external,
  icon,
}: {
  label: string;
  value: string;
  href?: string;
  external?: boolean;
  icon?: React.ReactNode;
}) {
  const inner = (
    <>
      <span className="text-xs uppercase tracking-[0.22em] text-ink-muted md:pt-1 dark:text-slate-500 smallcaps">
        {label}
      </span>
      <span className="flex items-center gap-3 font-display text-lg md:text-xl text-ink dark:text-slate-100 group-hover:text-gold-dark dark:group-hover:text-gold-light transition-colors">
        {icon}
        <span className="break-all">{value}</span>
        {href && external && (
          <ArrowUpRight className="h-4 w-4 opacity-40 group-hover:opacity-100 transition-opacity" />
        )}
      </span>
    </>
  );

  const className =
    "group grid md:grid-cols-[140px_1fr] gap-2 md:gap-10 py-5 border-b border-ink/[0.12] dark:border-white/[0.12] items-center";

  if (href) {
    return (
      <a
        href={href}
        {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
        className={className}
      >
        {inner}
      </a>
    );
  }

  return <div className={className}>{inner}</div>;
}


