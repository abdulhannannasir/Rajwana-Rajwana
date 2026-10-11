'use client';
import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';
import { Spotlight } from '@/components/motion-primitives/spotlight';
import { Icon } from '@/components/icons';
import { Reveal } from '@/components/reveal';
import { practiceAreas } from '@/content/site';

// Watermelon feature-1 grid with Motion Primitives Spotlight.
export function PracticeGrid() {
  return (
    <section id="practice" className="py-20 lg:py-26">
      <Reveal>
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-10">
          <div className="mb-10 flex flex-wrap items-end justify-between gap-5">
            <div>
              <span className="eyebrow">Practice areas</span>
              <h2 className="mt-3 max-w-[18ch] text-[clamp(1.9rem,4.4vw,3rem)] leading-[1.1]">
                Six areas of practice, one team behind each matter
              </h2>
            </div>
            <p className="max-w-[42ch] text-muted">
              Most matters cross more than one area. A tax notice can lead to a writ petition; a contract
              dispute can lead to a recovery suit.
            </p>
          </div>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {practiceAreas.map((p) => (
              <Link
                key={p.slug}
                href={`/practice/${p.slug}`}
                className="group relative flex min-w-0 flex-col gap-2.5 overflow-hidden rounded-3xl bg-bg-2 p-6 transition-[box-shadow,transform] duration-300 hover:-translate-y-0.5 hover:shadow-[0_10px_30px_rgba(0,0,0,0.10)]"
              >
                <Spotlight
                  className="from-accent/25 via-accent/10 to-transparent blur-2xl dark:from-accent/25 dark:via-accent/10 dark:to-transparent"
                  size={280}
                />
                <span className="relative mb-1.5 grid size-11 place-items-center rounded-xl bg-card text-accent-ink shadow-[inset_0_0_0_1px_var(--line)]">
                  <Icon name={p.icon} className="size-5" />
                </span>
                <h3 className="relative text-[23px] leading-tight">{p.title}</h3>
                <p className="relative text-[15px] text-muted">{p.summary}</p>
                <span className="relative mt-auto flex items-center justify-between pt-2">
                  <span className="font-mono text-xs text-accent-ink">{p.law}</span>
                  <ArrowUpRight className="size-4 text-muted transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-ink" />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </Reveal>
    </section>
  );
}
