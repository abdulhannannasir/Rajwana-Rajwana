import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { ArrowLeft, ArrowRight, Check } from 'lucide-react';
import { Icon } from '@/components/icons';
import { practiceAreas } from '@/content/site';

type Params = { slug: string };

export function generateStaticParams() {
  return practiceAreas.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: { params: Promise<Params> }): Promise<Metadata> {
  const { slug } = await params;
  const area = practiceAreas.find((p) => p.slug === slug);
  if (!area) return {};
  return {
    title: area.title,
    description: area.summary,
    alternates: { canonical: `/practice/${area.slug}` },
  };
}

export default async function PracticePage({ params }: { params: Promise<Params> }) {
  const { slug } = await params;
  const area = practiceAreas.find((p) => p.slug === slug);
  if (!area) notFound();
  const others = practiceAreas.filter((p) => p.slug !== area.slug);

  return (
    <>
      <section className="border-b border-line">
        <div className="mx-auto flex max-w-6xl flex-col gap-6 px-4 pb-16 pt-14 sm:px-6 lg:px-10 lg:pt-20">
          <Link href="/#practice" className="inline-flex w-fit items-center gap-1.5 text-sm font-medium text-muted hover:text-ink">
            <ArrowLeft className="size-4" /> All practice areas
          </Link>
          <span className="grid size-12 place-items-center rounded-xl bg-accent-soft text-accent-ink">
            <Icon name={area.icon} className="size-6" />
          </span>
          <h1 className="max-w-[16ch] text-[clamp(2.4rem,6vw,4.2rem)] leading-[1.05]">{area.title}</h1>
          <p className="max-w-[58ch] text-lg text-muted">{area.intro}</p>
          <span className="font-mono text-xs text-accent-ink">{area.law}</span>
        </div>
      </section>

      <section className="mx-auto grid max-w-6xl grid-cols-1 gap-12 px-4 py-16 sm:px-6 lg:grid-cols-[1.4fr_1fr] lg:px-10">
        <div>
          <h2 className="text-3xl">Matters we handle</h2>
          <ul className="mt-6 flex flex-col">
            {area.matters.map((m) => (
              <li key={m} className="flex gap-3 border-b border-line py-4 text-[17px] last:border-b-0">
                <Check className="mt-1 size-4 shrink-0 text-accent" strokeWidth={2} />
                {m}
              </li>
            ))}
          </ul>
        </div>
        <aside className="flex flex-col gap-6">
          <div className="rounded-3xl bg-bg-2 p-6">
            <h2 className="eyebrow font-sans">Forums</h2>
            <ul className="mt-3 flex flex-wrap gap-2">
              {area.forums.map((f) => (
                <li key={f} className="rounded-full border border-line bg-card px-3 py-1.5 text-sm">{f}</li>
              ))}
            </ul>
          </div>
          <div className="flex flex-col gap-3 rounded-3xl bg-ink p-6 text-bg">
            <h2 className="font-display text-2xl">Discuss a {area.title.toLowerCase()} matter</h2>
            <p className="text-sm opacity-80">Send the key documents and a lawyer will reply within one working day.</p>
            <Link href="/#contact" className="mt-2 inline-flex w-fit items-center gap-2 rounded-full bg-bg px-5 py-2.5 text-sm font-semibold text-ink">
              Book a consultation <ArrowRight className="size-4" />
            </Link>
          </div>
        </aside>
      </section>

      <section className="border-t border-line bg-bg-2">
        <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6 lg:px-10">
          <h2 className="eyebrow font-sans">Other practice areas</h2>
          <div className="mt-5 grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-5">
            {others.map((p) => (
              <Link key={p.slug} href={`/practice/${p.slug}`} className="rounded-2xl border border-line bg-card p-4 transition-colors hover:border-accent">
                <span className="font-display text-lg leading-snug">{p.title}</span>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
