import Link from 'next/link';
import type { Metadata } from 'next';
import { legalDocs } from '@/content/legal';

export function legalMetadata(slug: string): Metadata {
  const doc = legalDocs.find((d) => d.slug === slug)!;
  return { title: doc.title, description: doc.summary, alternates: { canonical: `/${slug}` } };
}

export function LegalPage({ slug }: { slug: string }) {
  const doc = legalDocs.find((d) => d.slug === slug)!;
  const others = legalDocs.filter((d) => d.slug !== slug);
  return (
    <article className="mx-auto max-w-6xl px-4 pb-20 pt-14 sm:px-6 lg:px-10 lg:pt-20">
      <header className="flex max-w-[62ch] flex-col gap-4 border-b border-line pb-10">
        <span className="eyebrow">Legal</span>
        <h1 className="text-[clamp(2.2rem,5vw,3.4rem)] leading-[1.05]">{doc.title}</h1>
        <p className="text-lg text-muted">{doc.summary}</p>
        <p className="font-mono text-xs text-muted">Last updated {doc.updated}</p>
      </header>
      <div className="grid grid-cols-1 gap-12 pt-10 lg:grid-cols-[minmax(0,1fr)_16rem]">
        <div className="flex max-w-[65ch] flex-col gap-9">
          {doc.sections.map((s) => (
            <section key={s.heading} className="flex flex-col gap-3">
              <h2 className="text-[22px] leading-snug">{s.heading}</h2>
              {s.body.map((p) => (
                <p key={p.slice(0, 32)} className="text-[16px] leading-relaxed text-ink/90">{p}</p>
              ))}
            </section>
          ))}
        </div>
        <aside className="flex flex-col gap-3 self-start rounded-2xl bg-bg-2 p-5 lg:sticky lg:top-24">
          <span className="eyebrow">Also see</span>
          {others.map((d) => (
            <Link key={d.slug} href={`/${d.slug}`} className="font-display text-lg hover:text-accent-ink">
              {d.title}
            </Link>
          ))}
        </aside>
      </div>
    </article>
  );
}
