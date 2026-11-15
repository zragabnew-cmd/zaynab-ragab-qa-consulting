import { PROCESS } from "@/lib/site";
import Reveal from "./Reveal";
import Section from "./Section";

export default function ProcessTimeline() {
  return (
    <Section
      id="process"
      tone="alt"
      eyebrow="The Approach"
      title="From QA Problems to a Practical Improvement Plan"
    >
      <ol className="grid gap-10 md:grid-cols-4 md:gap-6">
        {PROCESS.map((s, i) => (
          <li key={s.n} className="relative border-l border-line pl-6 md:border-l-0 md:border-t md:pl-0 md:pt-6">
            <Reveal delay={i * 120}>
              <span className="absolute -left-[5px] top-1 h-2.5 w-2.5 rounded-full bg-accent md:-top-[5px] md:left-0" aria-hidden="true" />
              <span className="text-sm text-accent">{s.n}</span>
              <h3 className="mt-1 text-xl font-semibold">{s.title}</h3>
              <p className="mt-2 text-sm text-muted">{s.text}</p>
            </Reveal>
          </li>
        ))}
      </ol>
    </Section>
  );
}
