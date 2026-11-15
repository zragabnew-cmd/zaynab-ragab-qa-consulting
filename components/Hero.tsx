import { PrimaryCta, SecondaryCta } from "./Cta";

const MOTIF = ["Problem", "Assessment", "Solution", "Improvement"];

export default function Hero() {
  return (
    <section className="relative overflow-hidden border-b border-line">
      <div className="mx-auto max-w-6xl px-5 pb-20 pt-20 md:pb-28 md:pt-28">
        <p className="mb-6 text-xs font-semibold uppercase tracking-[0.25em] text-accent">
          Find the gaps. Fix the process. Ship with confidence.
        </p>
        <h1 className="max-w-4xl font-serif text-4xl leading-[1.1] md:text-6xl">
          Your QA Process Has Gaps. Let&apos;s Find Them — and Fix Them.
        </h1>
        <p className="mt-7 max-w-2xl text-lg text-muted">
          I help engineering teams improve testing quality, reduce regression effort, strengthen API
          testing, and adopt AI where it actually creates value.
        </p>
        <div className="mt-10 flex flex-wrap gap-4">
          <PrimaryCta />
          <SecondaryCta href="/#services">Explore Services</SecondaryCta>
        </div>

        <ol aria-label="How the work flows" className="mt-16 flex flex-wrap items-center gap-x-3 gap-y-3 text-xs uppercase tracking-widest text-muted">
          {MOTIF.map((m, i) => (
            <li key={m} className="flex items-center gap-3">
              <span className={i === MOTIF.length - 1 ? "text-accent" : ""}>{m}</span>
              {i < MOTIF.length - 1 && (
                <svg width="40" height="2" aria-hidden="true">
                  <line x1="0" y1="1" x2="40" y2="1" stroke="currentColor" className="flow-line" />
                </svg>
              )}
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
