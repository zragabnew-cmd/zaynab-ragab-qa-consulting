import type { ReactNode } from "react";

export default function Section({
  id,
  eyebrow,
  title,
  intro,
  tone = "dark",
  children,
}: {
  id?: string;
  eyebrow?: string;
  title: string;
  intro?: string;
  tone?: "dark" | "alt" | "light";
  children?: ReactNode;
}) {
  const bg =
    tone === "light" ? "bg-paper text-ink" : tone === "alt" ? "bg-ink-2 text-paper" : "bg-ink text-paper";
  const introColor = tone === "light" ? "text-muted-dark" : "text-muted";
  return (
    <section id={id} className={`${bg} border-b border-line`}>
      <div className="mx-auto max-w-6xl px-5 py-20 md:py-24">
        {eyebrow && (
          <p className="mb-4 text-xs font-semibold uppercase tracking-[0.25em] text-accent-strong md:text-accent">
            {eyebrow}
          </p>
        )}
        <h2 className="max-w-3xl font-serif text-3xl leading-tight md:text-4xl">{title}</h2>
        {intro && <p className={`mt-5 max-w-2xl text-lg ${introColor}`}>{intro}</p>}
        <div className="mt-12">{children}</div>
      </div>
    </section>
  );
}
