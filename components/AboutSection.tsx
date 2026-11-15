import { PrimaryCta } from "./Cta";
import Section from "./Section";

const AREAS = ["Web", "Mobile", "APIs", "Integration", "Banking & enterprise", "IoT", "Performance", "QA strategy", "AI-assisted testing"];

export default function AboutSection() {
  return (
    <Section id="about" eyebrow="About" title="Zaynab Ragab — Senior Software Testing Engineer & QA Consultant">
      <div className="max-w-2xl">
        <p className="text-lg text-muted">
          I work with engineering teams to diagnose testing problems, prioritize what to fix, and
          build practical habits that last, with a focus on regression, API testing, and
          AI-assisted QA.
        </p>
        <ul className="mt-8 flex flex-wrap gap-2" aria-label="Areas of experience">
          {AREAS.map((a) => (
            <li key={a} className="border border-line px-3 py-1.5 text-xs text-muted">
              {a}
            </li>
          ))}
        </ul>
        <div className="mt-10">
          <PrimaryCta>Let&apos;s Talk About Your QA Challenge</PrimaryCta>
        </div>
      </div>
    </Section>
  );
}
