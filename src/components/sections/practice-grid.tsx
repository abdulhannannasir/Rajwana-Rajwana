'use client';
import { ArrowUpRight } from 'lucide-react';
import { GlassCard, GlassStage } from '@/components/glass-card';
import { Icon } from '@/components/icons';
import { FadeInItem, FadeInStagger } from '@/components/fade-in-stagger';
import { Reveal } from '@/components/reveal';
import { practiceAreas } from '@/content/site';

// Glassmorphic practice-area grid with cursor-tracking spotlight.
export function PracticeGrid() {
  return (
    <section id="practice" className="py-10 lg:py-14">
      <GlassStage>
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-10">
          <Reveal>
          <div className="mb-10 flex flex-wrap items-end justify-between gap-5">
            <div>
              <span className="eyebrow !text-white/50">Practice areas</span>
              <h2 className="mt-3 max-w-[18ch] text-white text-[clamp(1.9rem,4.4vw,3rem)] leading-[1.1]">
                Six areas of practice, one team behind each matter
              </h2>
            </div>
            <p className="max-w-[42ch] text-white/60">
              Most matters cross more than one area. A tax notice can lead to a writ petition; a contract
              dispute can lead to a recovery suit.
            </p>
          </div>
          </Reveal>
          <FadeInStagger className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {practiceAreas.map((p) => (
              <FadeInItem key={p.slug} className="flex">
              <GlassCard href={`/practice/${p.slug}`} className="w-full">
                <span className="mb-1.5 grid size-11 place-items-center rounded-xl border border-white/10 bg-white/10 text-[#a9c6e6]">
                  <Icon name={p.icon} className="size-5" />
                </span>
                <h3 className="text-[23px] leading-tight text-white">{p.title}</h3>
                <p className="text-[15px] text-white/60">{p.summary}</p>
                <span className="mt-auto flex items-center justify-between pt-2">
                  <span className="font-mono text-xs text-[#a9c6e6]">{p.law}</span>
                  <ArrowUpRight className="size-4 text-white/50 transition-[transform,color] duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-white" />
                </span>
              </GlassCard>
              </FadeInItem>
            ))}
          </FadeInStagger>
        </div>
      </GlassStage>
    </section>
  );
}
