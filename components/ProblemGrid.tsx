import { PROBLEMS } from "@/lib/site";
import Reveal from "./Reveal";
import Section from "./Section";

export default function ProblemGrid() {
  return (
    <Section id="problem" eyebrow="The Problem" title="Where Is Your QA Process Breaking Down?">
      <ul className="grid gap-px border border-line bg-line sm:grid-cols-2 lg:grid-cols-3">
        {PROBLEMS.map((p, i) => (
          <li key={p} className="bg-ink p-6">
            <Reveal delay={(i % 3) * 80}>
              <span className="mb-3 block text-xs text-accent">{String(i + 1).padStart(2, "0")}</span>
              <p className="text-base">{p}</p>
            </Reveal>
          </li>
        ))}
      </ul>
      <p className="mt-12 max-w-2xl font-serif text-2xl text-paper">
        You don&apos;t always need more testers. Sometimes you need a better testing system.
      </p>
    </Section>
  );
}
