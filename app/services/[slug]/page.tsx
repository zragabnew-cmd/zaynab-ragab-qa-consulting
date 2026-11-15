import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { SERVICES } from "@/lib/site";
import { PrimaryCta, SecondaryCta } from "@/components/Cta";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return SERVICES.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const s = SERVICES.find((x) => x.slug === slug);
  if (!s) return {};
  const description = `${s.hero} ${s.solution}`;
  return {
    title: s.name,
    description,
    alternates: { canonical: `/services/${s.slug}` },
    openGraph: { title: s.name, description, url: `/services/${s.slug}`, type: "website" },
  };
}

function Block({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section className="border-b border-line py-14">
      <h2 className="font-serif text-2xl md:text-3xl">{title}</h2>
      <div className="mt-6">{children}</div>
    </section>
  );
}

function Bullets({ items }: { items: string[] }) {
  return (
    <ul className="grid gap-3 sm:grid-cols-2">
      {items.map((i) => (
        <li key={i} className="flex gap-3 border border-line px-5 py-4 text-sm">
          <span aria-hidden="true" className="mt-1.5 h-1.5 w-1.5 shrink-0 bg-accent" />
          {i}
        </li>
      ))}
    </ul>
  );
}

export default async function ServicePage({ params }: Props) {
  const { slug } = await params;
  const s = SERVICES.find((x) => x.slug === slug);
  if (!s) notFound();

  const faqLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: s.faq.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };

  return (
    <article>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqLd) }} />

      <header className="border-b border-line">
        <div className="mx-auto max-w-4xl px-5 py-20 md:py-28">
          <Link href="/#services" className="text-sm text-muted hover:text-accent">
            ← All services
          </Link>
          <h1 className="mt-6 font-serif text-4xl leading-tight md:text-5xl">{s.name}</h1>
          <p className="mt-6 max-w-2xl text-lg text-muted">{s.hero}</p>
          <div className="mt-10 flex flex-wrap gap-4">
            <PrimaryCta />
            <SecondaryCta href="/#contact">Discuss your requirements</SecondaryCta>
          </div>
        </div>
      </header>

      <div className="mx-auto max-w-4xl px-5">
        <Block title="The problem">
          <ul className="space-y-3 text-muted">
            {s.problems.map((p) => (
              <li key={p} className="flex gap-3">
                <span aria-hidden="true" className="text-accent">—</span>
                {p}
              </li>
            ))}
          </ul>
        </Block>
        <Block title="What we assess">
          <Bullets items={s.assess} />
        </Block>
        <Block title="What we do">
          <Bullets items={s.does} />
        </Block>
        <Block title="Deliverables">
          <Bullets items={s.deliverables} />
        </Block>
        <Block title="Expected outcomes">
          <Bullets items={s.outcomes} />
          <p className="mt-5 text-xs text-muted">
            Actual outcomes depend on the product, team, process maturity, and scope of engagement.
          </p>
        </Block>
        <Block title="Who it's for">
          <Bullets items={s.forWho} />
        </Block>
        <Block title="Process">
          <ol className="space-y-4">
            {s.process.map((p, i) => (
              <li key={p} className="flex gap-4">
                <span className="text-sm text-accent">{String(i + 1).padStart(2, "0")}</span>
                <span>{p}</span>
              </li>
            ))}
          </ol>
        </Block>
        <Block title="FAQ">
          <dl className="space-y-6">
            {s.faq.map((f) => (
              <div key={f.q}>
                <dt className="font-semibold">{f.q}</dt>
                <dd className="mt-2 text-muted">{f.a}</dd>
              </div>
            ))}
          </dl>
        </Block>

        <section className="py-16 text-center">
          <h2 className="font-serif text-3xl">Let&apos;s talk about your QA challenge.</h2>
          <p className="mx-auto mt-4 max-w-xl text-muted">
            Tell me what is slowing your team down and we&apos;ll see whether this is the right next step.
          </p>
          <div className="mt-8 flex justify-center">
            <PrimaryCta />
          </div>
        </section>
      </div>
    </article>
  );
}
