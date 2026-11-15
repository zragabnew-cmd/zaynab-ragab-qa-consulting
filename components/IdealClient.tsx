import { GOOD_FIT, NOT_FIT } from "@/lib/site";
import Section from "./Section";

export default function IdealClient() {
  return (
    <Section id="who" tone="alt" eyebrow="Who This Is For" title="Is This the Right Fit?">
      <div className="grid gap-6 md:grid-cols-2">
        <div className="border border-accent/50 p-7">
          <h3 className="text-lg font-semibold">A good fit if you…</h3>
          <ul className="mt-5 space-y-3 text-sm">
            {GOOD_FIT.map((g) => (
              <li key={g} className="flex gap-3">
                <span aria-hidden="true" className="text-accent">✓</span>
                <span>{g}</span>
              </li>
            ))}
          </ul>
        </div>
        <div className="border border-line p-7">
          <h3 className="text-lg font-semibold">Probably not a fit if you…</h3>
          <ul className="mt-5 space-y-3 text-sm text-muted">
            {NOT_FIT.map((g) => (
              <li key={g} className="flex gap-3">
                <span aria-hidden="true">—</span>
                <span>{g}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </Section>
  );
}
