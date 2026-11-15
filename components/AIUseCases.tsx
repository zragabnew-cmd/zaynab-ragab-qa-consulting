import { AI_PAIRS } from "@/lib/site";
import Reveal from "./Reveal";
import Section from "./Section";

export default function AIUseCases() {
  return (
    <Section
      id="ai-for-qa"
      tone="alt"
      eyebrow="AI for QA"
      title="AI Shouldn't Add More Noise to QA."
      intro="The goal isn't to use AI everywhere. The goal is to identify where AI can remove repetitive work, improve coverage, accelerate analysis, and help testers make better decisions."
    >
      <ul className="grid gap-4 md:grid-cols-2">
        {AI_PAIRS.map(([from, to], i) => (
          <li key={from}>
            <Reveal delay={(i % 2) * 100}>
              <div className="flex items-center gap-4 border border-line bg-ink p-5">
                <span className="w-2/5 text-sm text-muted">{from}</span>
                <svg width="48" height="12" viewBox="0 0 48 12" aria-hidden="true" className="shrink-0 text-accent">
                  <line x1="0" y1="6" x2="40" y2="6" stroke="currentColor" strokeWidth="1.5" className="flow-line" />
                  <path d="M38 1l8 5-8 5" fill="none" stroke="currentColor" strokeWidth="1.5" />
                </svg>
                <span className="flex-1 text-sm font-medium">{to}</span>
              </div>
            </Reveal>
          </li>
        ))}
      </ul>
    </Section>
  );
}
