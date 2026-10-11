import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { Reveal } from '@/components/reveal';
import { cn } from '@/lib/utils';
import { team, type Lawyer } from '@/content/site';

const SKIP = new Set(['Barrister', 'Malik', 'M.', 'Muhammad']);

/** "Barrister Malik Kashif Rafique Rajwana" -> "KR" (first and last given names). */
export function initials(name: string) {
  const words = name.split(' ').filter((w) => !SKIP.has(w));
  const first = words[0]?.[0] ?? '';
  const last = words.length > 1 ? words[words.length - 1][0] : '';
  return first + last;
}

export function Portrait({ lawyer, sizes, className = '' }: { lawyer: Lawyer; sizes: string; className?: string }) {
  return (
    <div className={cn('relative overflow-hidden bg-bg', className)}>
      {lawyer.photo ? (
        <Image src={lawyer.photo} alt={lawyer.name} fill sizes={sizes} className="object-cover" />
      ) : (
        <span
          aria-hidden="true"
          className="absolute inset-0 grid place-items-center bg-[radial-gradient(120%_80%_at_50%_0%,var(--accent-soft),transparent)] font-display italic text-accent/60"
          style={{ fontSize: 'clamp(3rem, 7vw, 5.5rem)' }}
        >
          {initials(lawyer.name)}
        </span>
      )}
    </div>
  );
}

const founder = team.find((m) => m.role === 'Founding Partner');
const partners = team.filter((m) => m.role === 'Partner');
const advocates = team.filter((m) => m.role === 'Advocate');

export function Team() {
  return (
    <section id="team" className="bg-bg-2 py-20 lg:py-26">
      <Reveal>
        <div className="mx-auto flex max-w-6xl flex-col gap-10 px-4 sm:px-6 lg:px-10">
          <div className="mx-auto flex max-w-2xl flex-col items-center gap-4 text-center">
            <span className="rounded-full border border-line bg-bg px-3 py-1 text-[13px] font-medium text-muted">The firm</span>
            <h2 className="text-[clamp(1.9rem,4.4vw,3rem)] leading-[1.1]">Counsel you will actually speak to</h2>
            <p className="text-muted">
              Advocates of the Supreme Court and High Courts, including barristers trained at Lincoln&apos;s Inn.
            </p>
          </div>

          {founder && <FounderCard lawyer={founder} />}

          <div className="grid grid-cols-1 gap-3 md:grid-cols-2">
            {partners.map((p) => (
              <PartnerCard key={p.slug} lawyer={p} />
            ))}
          </div>

          <div>
            <h3 className="eyebrow mb-4 font-sans">Advocates</h3>
            <div className="grid grid-cols-2 gap-2.5 lg:grid-cols-4">
              {advocates.map((m) => (
                <AdvocateCard key={m.slug} lawyer={m} />
              ))}
            </div>
          </div>
        </div>
      </Reveal>
    </section>
  );
}

function FounderCard({ lawyer }: { lawyer: Lawyer }) {
  return (
    <article className="grid grid-cols-1 overflow-hidden rounded-[28px] border-[6px] border-card bg-card shadow-[0_0_0_1px_var(--line)] md:grid-cols-[minmax(0,5fr)_minmax(0,7fr)]">
      <Portrait lawyer={lawyer} sizes="(min-width:768px) 40vw, 100vw" className="aspect-[4/3] rounded-[22px] md:aspect-auto md:min-h-[420px]" />
      <div className="flex min-w-0 flex-col gap-4 p-6 sm:p-8">
        <span className="eyebrow text-accent-ink">{lawyer.role}</span>
        <div>
          <h3 className="text-[clamp(1.6rem,3vw,2.2rem)] leading-tight">{lawyer.name}</h3>
          <p className="mt-1 text-[15px] text-muted">{lawyer.enrolment}</p>
        </div>
        {lawyer.bio && <p className="max-w-[60ch] text-[15px] leading-relaxed">{lawyer.bio[0]}</p>}
        {lawyer.highlights && (
          <ul className="grid grid-cols-1 gap-x-6 gap-y-2 border-t border-line pt-4 text-[14px] sm:grid-cols-2">
            {lawyer.highlights.map((h) => (
              <li key={h} className="flex gap-2.5">
                <span className="mt-[9px] h-px w-3 shrink-0 bg-accent" aria-hidden="true" />
                {h}
              </li>
            ))}
          </ul>
        )}
        <Link
          href={`/team/${lawyer.slug}`}
          className="mt-auto inline-flex w-fit items-center gap-1.5 border-b border-ink pb-0.5 text-sm font-semibold"
        >
          Full profile <ArrowRight className="size-3.5" />
        </Link>
      </div>
    </article>
  );
}

function PartnerCard({ lawyer }: { lawyer: Lawyer }) {
  const hasProfile = Boolean(lawyer.bio);
  return (
    <article className="flex min-w-0 gap-4 rounded-[24px] border-[6px] border-card bg-card p-1 shadow-[0_0_0_1px_var(--line)] sm:gap-5">
      <Portrait lawyer={lawyer} sizes="160px" className="aspect-[4/5] w-28 shrink-0 self-start rounded-[18px] sm:w-36" />
      <div className="flex min-w-0 flex-col gap-2 py-3 pr-3">
        <span className="eyebrow text-accent-ink">{lawyer.role}</span>
        <h3 className="text-[19px] leading-snug">{lawyer.name}</h3>
        <p className="text-[13px] text-muted">{lawyer.enrolment}</p>
        {lawyer.practice && (
          <ul className="mt-1 flex flex-wrap gap-1.5">
            {lawyer.practice.map((p) => (
              <li key={p} className="rounded-full bg-bg-2 px-2.5 py-1 text-[12px]">{p}</li>
            ))}
          </ul>
        )}
        {hasProfile && (
          <Link href={`/team/${lawyer.slug}`} className="mt-auto inline-flex w-fit items-center gap-1.5 pt-2 text-sm font-semibold hover:text-accent-ink">
            Full profile <ArrowRight className="size-3.5" />
          </Link>
        )}
      </div>
    </article>
  );
}

// Watermelon team-1: portrait cards, qualifications revealed on hover or focus.
function AdvocateCard({ lawyer }: { lawyer: Lawyer }) {
  return (
    <article
      tabIndex={0}
      className="group relative aspect-[4/5] overflow-hidden rounded-[24px] border-[6px] border-card bg-bg shadow-[0_0_0_1px_var(--line)]"
    >
      <Portrait lawyer={lawyer} sizes="(min-width:1024px) 25vw, 50vw" className="absolute inset-x-0 top-0 h-[60%]" />
      <div className="absolute inset-x-1.5 bottom-1.5 rounded-[16px] bg-card px-3 py-2.5 sm:inset-x-2 sm:bottom-2 sm:px-4 sm:py-3">
        <h4 className="font-display text-[15px] leading-snug sm:text-[17px]">{lawyer.name}</h4>
        <p className="mt-0.5 text-[12px] text-accent-ink sm:text-[13px]">{lawyer.enrolment}</p>
        {lawyer.qualifications && (
          <div className="grid grid-rows-[0fr] transition-[grid-template-rows,margin] duration-300 group-hover:mt-2 group-hover:grid-rows-[1fr] group-focus:mt-2 group-focus:grid-rows-[1fr]">
            <ul className="overflow-hidden text-[12px] leading-relaxed text-muted">
              {lawyer.qualifications.map((q) => (
                <li key={q}>{q}</li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </article>
  );
}
