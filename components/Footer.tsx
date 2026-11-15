import Link from "next/link";
import { SERVICES, SITE, whatsappHref } from "@/lib/site";

export default function Footer() {
  return (
    <footer className="border-t border-line bg-ink-2">
      <div className="mx-auto grid max-w-6xl gap-10 px-5 py-14 md:grid-cols-3">
        <div>
          <p className="text-sm font-bold tracking-[0.18em]">{SITE.name.toUpperCase()}</p>
          <p className="mt-1 text-[10px] tracking-[0.22em] text-accent">{SITE.descriptor.toUpperCase()}</p>
          <p className="mt-4 max-w-xs text-sm text-muted">
            Find the gaps. Fix the process. Ship with confidence.
          </p>
        </div>
        <div>
          <h2 className="text-xs font-semibold uppercase tracking-widest text-muted">Services</h2>
          <ul className="mt-4 space-y-2 text-sm">
            {SERVICES.map((s) => (
              <li key={s.slug}>
                <Link href={`/services/${s.slug}`} className="text-paper/80 hover:text-accent">
                  {s.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h2 className="text-xs font-semibold uppercase tracking-widest text-muted">Get in touch</h2>
          <ul className="mt-4 space-y-2 text-sm">
            <li>
              <Link href="/#consultation" className="text-paper/80 hover:text-accent">
                1-Hour Consultation
              </Link>
            </li>
            <li>
              <Link href="/#contact" className="text-paper/80 hover:text-accent">
                Book a Discovery Call
              </Link>
            </li>
            {whatsappHref() && (
              <li>
                <a href={whatsappHref()} target="_blank" rel="noopener noreferrer" className="text-paper/80 hover:text-accent">
                  WhatsApp
                </a>
              </li>
            )}
            <li>
              <Link href="/#contact" className="text-paper/80 hover:text-accent">
                Send a Message
              </Link>
            </li>
          </ul>
        </div>
      </div>
      <div className="border-t border-line py-5 text-center text-xs text-muted">
        © {new Date().getFullYear()} {SITE.name}. All rights reserved.
      </div>
    </footer>
  );
}
