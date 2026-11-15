import Link from "next/link";
import { SPEAKING } from "@/lib/site";
import Section from "./Section";

export default function SpeakingSection() {
  return (
    <Section id="speaking" tone="alt" eyebrow="Speaking & Training" title="From QA Practice to Team Enablement">
      <ul className="grid gap-3 md:grid-cols-2">
        {SPEAKING.map((s) => (
          <li key={s} className="border border-line px-5 py-4">
            {s}
          </li>
        ))}
      </ul>
      <Link href="/services/qa-workshops" className="mt-8 inline-block text-sm font-semibold hover:text-accent">
        About QA Team Workshops →
      </Link>
    </Section>
  );
}
