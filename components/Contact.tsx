"use client";

import { Mail, Phone, MapPin, Linkedin, ArrowUpRight } from "lucide-react";
import { contactInfo } from "@/lib/data";
import { useApp } from "./Providers";

export default function Contact() {
  const { t } = useApp();

  return (
    <section id="contact" className="section surface-base">
      <div className="container-page">
        <div className="rounded-3xl bg-ink text-white px-6 py-16 md:px-16 md:py-20 relative overflow-hidden dark:bg-[#131b2e] dark:border dark:border-white/[0.06]">
          <div
            aria-hidden
            className="absolute inset-0 opacity-[0.06] bg-[radial-gradient(circle_at_20%_20%,#a67f3d_0,transparent_40%),radial-gradient(circle_at_80%_80%,#a67f3d_0,transparent_40%)]"
          />

          <div className="relative grid lg:grid-cols-[1.2fr_1fr] gap-12 items-start">
            <div>
              <p className="text-[11px] font-semibold uppercase tracking-[0.25em] text-gold-light">
                {t.contact.kicker}
              </p>
              <h2 className="mt-4 font-display text-3xl md:text-5xl font-medium tracking-tight text-balance">
                {t.contact.title_pre}{" "}
                <span className="italic text-gold-light">
                  {t.contact.title_accent}
                </span>
                {t.contact.title_post}
              </h2>
              <p className="mt-6 max-w-xl text-white/70 text-base md:text-lg leading-relaxed">
                {t.contact.description}
              </p>

              <div className="mt-8 flex flex-wrap gap-3">
                <a
                  href={`mailto:${contactInfo.email}`}
                  className="inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-medium text-ink hover:bg-gold-light hover:text-ink transition-colors"
                >
                  <Mail className="h-4 w-4" />
                  {t.contact.cta_email}
                </a>
                <a
                  href={contactInfo.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-full border border-white/20 px-6 py-3 text-sm font-medium text-white hover:border-gold-light hover:text-gold-light transition-colors"
                >
                  <Linkedin className="h-4 w-4" />
                  {t.contact.cta_linkedin}
                  <ArrowUpRight className="h-3.5 w-3.5" />
                </a>
              </div>
            </div>

            <ul className="space-y-4">
              <ContactRow
                href={`mailto:${contactInfo.email}`}
                icon={<Mail className="h-4 w-4" />}
                label={t.contact.row_email}
                value={contactInfo.email}
              />
              <ContactRow
                href={`tel:${contactInfo.phone.replace(/\s/g, "")}`}
                icon={<Phone className="h-4 w-4" />}
                label={t.contact.row_phone}
                value={contactInfo.phone}
              />
              <ContactRow
                icon={<MapPin className="h-4 w-4" />}
                label={t.contact.row_location}
                value={t.common.location}
              />
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

function ContactRow({
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
  const content = (
    <>
      <span className="grid place-items-center h-10 w-10 rounded-lg bg-white/[0.06] border border-white/10 text-gold-light shrink-0">
        {icon}
      </span>
      <div className="flex-1 min-w-0">
        <p className="text-[10px] uppercase tracking-[0.2em] text-white/50 font-semibold">
          {label}
        </p>
        <p className="mt-0.5 text-sm text-white break-all">{value}</p>
      </div>
      {href && (
        <ArrowUpRight className="h-4 w-4 text-white/40 group-hover:text-gold-light transition-colors shrink-0" />
      )}
    </>
  );

  const className =
    "group flex items-center gap-4 rounded-xl border border-white/10 bg-white/[0.02] px-4 py-3 transition-colors hover:border-white/25 hover:bg-white/[0.04]";

  if (href) {
    return (
      <li>
        <a
          href={href}
          {...(external
            ? { target: "_blank", rel: "noopener noreferrer" }
            : {})}
          className={className}
        >
          {content}
        </a>
      </li>
    );
  }

  return <li className={className}>{content}</li>;
}
