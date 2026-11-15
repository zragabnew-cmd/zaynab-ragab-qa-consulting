import { HEALTH_CHECK } from "@/lib/site";
import { PrimaryCta, SecondaryCta } from "./Cta";
import Reveal from "./Reveal";
import Section from "./Section";

function List({ title, items }: { title: string; items: string[] }) {
  return (
    <div>
      <h3 className="text-xs font-semibold uppercase tracking-widest text-accent-strong">{title}</h3>
      <ul className="mt-5 space-y-3">
        {items.map((i) => (
          <li key={i} className="flex gap-3">
            <span aria-hidden="true" className="mt-2 h-1.5 w-1.5 shrink-0 bg-accent-strong" />
            <span>{i}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default function QAHealthCheck() {
  return (
    <Section
      id="health-check"
      tone="light"
      eyebrow="Flagship Offer"
      title="Not Sure What's Wrong? Start With a QA Health Check."
      intro="Understand where your testing process is leaking time, coverage, and quality."
    >
      <Reveal>
        <div className="grid gap-12 md:grid-cols-2">
          <List title="What we review" items={HEALTH_CHECK.review} />
          <List title="What you get" items={HEALTH_CHECK.deliverables} />
        </div>
        <div className="mt-12 flex flex-wrap gap-4">
          <PrimaryCta>Book a QA Discovery Call</PrimaryCta>
          <SecondaryCta href="/services/qa-health-check" className="!border-ink/30 !text-ink hover:!text-accent-strong">
            Learn More
          </SecondaryCta>
        </div>
      </Reveal>
    </Section>
  );
}
