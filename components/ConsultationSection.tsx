import { CONSULTATION, SITE, whatsappHref } from "@/lib/site";
import { PrimaryCta } from "./Cta";
import Section from "./Section";

export default function ConsultationSection() {
  return (
    <Section
      id="consultation"
      tone="light"
      eyebrow="Book a Session"
      title="Need Quick, Focused Guidance? Book a 1-Hour Consultation."
      intro={CONSULTATION.blurb}
    >
      <div className="grid gap-10 md:grid-cols-[1fr_auto] md:items-start">
        <ul className="space-y-3">
          {CONSULTATION.includes.map((i) => (
            <li key={i} className="flex gap-3">
              <span aria-hidden="true" className="mt-2 h-1.5 w-1.5 shrink-0 bg-accent-strong" />
              <span>{i}</span>
            </li>
          ))}
        </ul>
        <div className="border border-ink/20 p-8 text-center md:min-w-64">
          <p className="text-xs uppercase tracking-widest text-muted-dark">{CONSULTATION.duration}</p>
          <p className="mt-2 font-serif text-5xl">{CONSULTATION.price}</p>
          <p className="mt-1 text-sm text-muted-dark">per session</p>
          {SITE.paymentUrl ? (
            <a
              href={SITE.paymentUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 inline-flex w-full items-center justify-center bg-accent px-6 py-3 text-sm font-semibold text-ink transition-colors hover:bg-ink hover:text-paper"
            >
              Pay {CONSULTATION.price} &amp; Book
            </a>
          ) : (
            <PrimaryCta className="mt-6 w-full">Book a Consultation</PrimaryCta>
          )}
          {whatsappHref() && (
            <a
              href={whatsappHref("Hello, I'd like to book the 1-hour QA consultation.")}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-3 inline-flex w-full items-center justify-center border border-ink/30 px-6 py-3 text-sm font-semibold hover:border-accent-strong hover:text-accent-strong"
            >
              Message on WhatsApp
            </a>
          )}
        </div>
      </div>
      <p className="mt-10 text-sm text-muted-dark">{CONSULTATION.note}</p>
    </Section>
  );
}
