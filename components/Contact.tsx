"use client";

import { Mail, Phone, MapPin, Linkedin } from "lucide-react";
import { useApp } from "./Providers";
import { contactInfo } from "@/lib/data";

export default function Contact() {
  const { t } = useApp();

  return (
    <section id="contact" className="section surface-alt">
      <div className="container-page">
        <SectionHead cmd="./contact --help" kicker={t.contact.kicker} />

        <div className="mt-12 grid md:grid-cols-[1fr_3fr] gap-8 md:gap-16">
          <div />
          <div>
            <h2 className="section-title text-balance">
              {t.contact.title_pre}
              {t.contact.title_accent && (
                <span className="italic">{t.contact.title_accent}</span>
              )}
              {t.contact.title_post}
            </h2>
            <p className="section-lead">{t.contact.description}</p>

            <div className="mt-10 grid md:grid-cols-2 gap-x-12 gap-y-4">
              <ContactLine
                icon={<Mail className="h-4 w-4" />}
                label={t.contact.row_email}
                value={contactInfo.email}
                href={`mailto:${contactInfo.email}`}
              />
              <ContactLine
                icon={<Phone className="h-4 w-4" />}
                label={t.contact.row_phone}
                value={contactInfo.phone}
                href={`tel:${contactInfo.phone.replace(/\s/g, "")}`}
              />
              <ContactLine
                icon={<Linkedin className="h-4 w-4" />}
                label="LinkedIn"
                value="linkedin.com/in/aïssatougueye"
                href={contactInfo.linkedin}
                external
              />
              <ContactLine
                icon={<MapPin className="h-4 w-4" />}
                label={t.contact.row_location}
                value={t.common.location}
              />
            </div>

            <div className="mt-12 flex flex-wrap items-center gap-6 mono text-sm">
              <a
                href={`mailto:${contactInfo.email}`}
                className="link-underline font-medium"
              >
                ./send-email.sh
              </a>
              <a
                href={contactInfo.linkedin}
                target="_blank"
                rel="noreferrer"
                className="text-ink-muted hover:text-ink transition-colors dark:text-slate-400 dark:hover:text-slate-100"
              >
                open linkedin &gt;
              </a>
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

function ContactLine({
  icon,
  label,
  value,
  href,
  external,
}: {
  icon: React.ReactNode;
  label: string;
  value: string;
  href?: string;
  external?: boolean;
}) {
  const body = (
    <div className="flex items-baseline gap-3 py-3 border-t border-dashed border-ink/[0.18] dark:border-white/[0.18]">
      <span className="mono text-xs text-gold-dark dark:text-gold-light shrink-0">
        //
      </span>
      <div className="flex-1 min-w-0">
        <p className="mono text-[11px] uppercase tracking-[0.15em] text-ink-muted dark:text-slate-500">
          {label}
        </p>
        <p className="mono text-sm text-ink dark:text-slate-100 truncate">
          {value}
        </p>
      </div>
      <span className="text-ink-muted dark:text-slate-500 shrink-0 pt-1">
        {icon}
      </span>
    </div>
  );

  if (!href) return body;
  return (
    <a
      href={href}
      target={external ? "_blank" : undefined}
      rel={external ? "noreferrer" : undefined}
      className="block hover:text-gold-dark dark:hover:text-gold-light transition-colors"
    >
      {body}
    </a>
  );
}
