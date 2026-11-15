import { OUTCOMES } from "@/lib/site";
import Reveal from "./Reveal";
import Section from "./Section";

export default function Outcomes() {
  return (
    <Section id="outcomes" eyebrow="Outcomes" title="What Better QA Looks Like">
      <ul className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
        {OUTCOMES.map((o, i) => (
          <li key={o}>
            <Reveal delay={(i % 3) * 80}>
              <div className="flex items-center gap-3 border border-line px-5 py-4">
                <span aria-hidden="true" className="h-1.5 w-1.5 bg-accent" />
                {o}
              </div>
            </Reveal>
          </li>
        ))}
      </ul>
      <p className="mt-8 text-sm text-muted">
        Actual outcomes depend on the product, team, process maturity, and scope of engagement.
      </p>
    </Section>
  );
}
