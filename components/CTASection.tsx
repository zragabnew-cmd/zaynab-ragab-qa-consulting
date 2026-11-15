import { PrimaryCta, SecondaryCta } from "./Cta";
import ContactForm from "./ContactForm";

export default function CTASection() {
  return (
    <section id="contact" className="bg-ink">
      <div className="mx-auto grid max-w-6xl gap-14 px-5 py-20 md:py-24 lg:grid-cols-2">
        <div>
          <p className="mb-4 text-xs font-semibold uppercase tracking-[0.25em] text-accent">Contact</p>
          <h2 className="font-serif text-3xl leading-tight md:text-4xl">Let&apos;s Talk About Your QA Challenge.</h2>
          <p className="mt-5 max-w-md text-lg text-muted">
            Tell me what is slowing your team down. We&apos;ll explore the problem, identify where the
            biggest opportunities are, and determine whether a QA consulting engagement makes sense.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <PrimaryCta />
            <SecondaryCta href="#contact-form">Send a Message</SecondaryCta>
          </div>
        </div>
        <ContactForm />
      </div>
    </section>
  );
}
