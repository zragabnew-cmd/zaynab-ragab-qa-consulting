import Link from "next/link";
import { SERVICES } from "@/lib/site";
import Reveal from "./Reveal";
import Section from "./Section";

export default function ServicesGrid() {
  return (
    <Section
      id="services"
      eyebrow="Services"
      title="Focused Help for the Problems That Slow Your Team Down"
    >
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {SERVICES.map((s, i) => (
          <Reveal key={s.slug} delay={(i % 3) * 100}>
            <article className="flex h-full flex-col border border-line bg-ink-2 p-7 transition-colors hover:border-accent">
              <h3 className="text-xl font-semibold">{s.name}</h3>
              <dl className="mt-5 space-y-4 text-sm">
                <div>
                  <dt className="text-xs uppercase tracking-widest text-muted">Problem</dt>
                  <dd className="mt-1">{s.problem}</dd>
                </div>
                <div>
                  <dt className="text-xs uppercase tracking-widest text-muted">Solution</dt>
                  <dd className="mt-1">{s.solution}</dd>
                </div>
                <div>
                  <dt className="text-xs uppercase tracking-widest text-muted">Outcome</dt>
                  <dd className="mt-1 text-accent">{s.outcome}</dd>
                </div>
              </dl>
              <Link
                href={`/services/${s.slug}`}
                className="mt-auto pt-6 text-sm font-semibold text-paper hover:text-accent"
                aria-label={`Learn more about ${s.name}`}
              >
                Learn More →
              </Link>
            </article>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
