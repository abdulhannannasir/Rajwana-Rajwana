import { ArrowUpRight } from 'lucide-react';
import { GlassCard, GlassStage } from '@/components/glass-card';
import { Reveal } from '@/components/reveal';
import { insights } from '@/content/site';

// Glassmorphic article grid with cursor-tracking spotlight.
export function Insights() {
  return (
    <section id="insights" className="py-10 lg:py-14">
      <GlassStage>
      <Reveal>
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-10">
          <div className="mb-10 flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
            <div>
              <span className="eyebrow !text-white/50">Insights</span>
              <h2 className="mt-3 text-white text-[clamp(1.9rem,4.4vw,3rem)] leading-[1.1]">Notes on recent law and practice</h2>
            </div>
            <p className="max-w-xs text-sm text-white/60 md:text-right">Short explainers written by the firm&apos;s lawyers.</p>
          </div>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {insights.map((post) => (
              <GlassCard key={post.title} href={post.href} className="gap-3">
                <span className="text-[13px] font-semibold text-[#a9c6e6]">{post.category}</span>
                <h3 className="text-[21px] leading-snug text-white">{post.title}</h3>
                <p className="text-[15px] text-white/60">{post.excerpt}</p>
                <span className="mt-auto inline-flex items-center gap-1.5 text-sm font-semibold text-white">
                  Read
                  <ArrowUpRight className="size-4 transition-transform duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                </span>
              </GlassCard>
            ))}
          </div>
        </div>
      </Reveal>
      </GlassStage>
    </section>
  );
}
