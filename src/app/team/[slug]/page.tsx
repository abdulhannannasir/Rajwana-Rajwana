import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import { Portrait } from '@/components/sections/team';
import { firm, founderWikipedia, team } from '@/content/site';

type Params = { slug: string };

const withProfiles = team.filter((m) => m.bio);

export function generateStaticParams() {
  return withProfiles.map((m) => ({ slug: m.slug }));
}

export const dynamicParams = false;

export async function generateMetadata({ params }: { params: Promise<Params> }): Promise<Metadata> {
  const { slug } = await params;
  const m = withProfiles.find((p) => p.slug === slug);
  if (!m) return {};
  return {
    title: `${m.name}, ${m.role}`,
    description: m.bio?.[0],
    alternates: { canonical: `/team/${m.slug}` },
    openGraph: { type: 'profile', title: m.name, description: m.bio?.[0] },
  };
}

export default async function LawyerPage({ params }: { params: Promise<Params> }) {
  const { slug } = await params;
  const m = withProfiles.find((p) => p.slug === slug);
  if (!m) notFound();

  const personLd = {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: m.name,
    jobTitle: `${m.role}, ${m.enrolment}`,
    worksFor: { '@type': 'LegalService', name: firm.name, url: firm.url },
    url: `${firm.url}/team/${m.slug}`,
    ...(m.role === 'Founding Partner' ? { sameAs: [founderWikipedia] } : {}),
  };

  const facts: { label: string; items?: string[] }[] = [
    { label: 'Practice', items: m.practice },
    { label: 'Public service and the Bar', items: m.highlights },
    { label: 'Education and training', items: m.qualifications },
  ];

  return (
    <>
      <section className="border-b border-line">
        <div className="mx-auto grid max-w-6xl grid-cols-1 gap-10 px-4 pb-14 pt-12 sm:px-6 md:grid-cols-[minmax(0,4fr)_minmax(0,7fr)] lg:px-10 lg:pt-16">
          <Portrait
            lawyer={m}
            sizes="(min-width:768px) 33vw, 100vw"
            className="aspect-[4/5] max-h-[520px] w-full rounded-[28px] border-[6px] border-card shadow-[0_0_0_1px_var(--line)]"
          />
          <div className="flex min-w-0 flex-col gap-5">
            <Link href="/#team" className="inline-flex w-fit items-center gap-1.5 text-sm font-medium text-muted hover:text-ink">
              <ArrowLeft className="size-4" /> The firm
            </Link>
            <span className="eyebrow text-accent-ink">{m.role}</span>
            <h1 className="text-[clamp(2.1rem,5vw,3.6rem)] leading-[1.05]">{m.name}</h1>
            <p className="text-lg text-muted">{m.enrolment}</p>
            <div className="flex max-w-[62ch] flex-col gap-4 text-[17px] leading-relaxed">
              {m.bio?.map((para) => (
                <p key={para.slice(0, 24)}>{para}</p>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto grid max-w-6xl grid-cols-1 gap-8 px-4 py-14 sm:px-6 md:grid-cols-3 lg:px-10">
        {facts
          .filter((f) => f.items && f.items.length > 0)
          .map((f) => (
            <div key={f.label}>
              <h2 className="eyebrow font-sans">{f.label}</h2>
              <ul className="mt-4 flex flex-col">
                {f.items!.map((it) => (
                  <li key={it} className="border-b border-line py-3 text-[15px] last:border-b-0">{it}</li>
                ))}
              </ul>
            </div>
          ))}
      </section>

      <section className="border-t border-line bg-bg-2">
        <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-6 px-4 py-12 sm:px-6 lg:px-10">
          <h2 className="max-w-[28ch] text-2xl leading-snug">Request a consultation with the firm</h2>
          <Link href="/#contact" className="inline-flex items-center gap-2 rounded-full bg-ink px-5 py-2.5 text-sm font-semibold text-bg">
            Book a consultation <ArrowRight className="size-4" />
          </Link>
        </div>
      </section>

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(personLd) }} />
    </>
  );
}
