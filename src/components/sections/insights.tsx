import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';
import { Reveal } from '@/components/reveal';
import { insights } from '@/content/site';

// Watermelon blog-1: header row and three-column article grid.
export function Insights() {
  return (
    <section id="insights" className="py-20 lg:py-26">
      <Reveal>
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-10">
          <div className="mb-10 flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
            <div>
              <span className="eyebrow">Insights</span>
              <h2 className="mt-3 text-[clamp(1.9rem,4.4vw,3rem)] leading-[1.1]">Notes on recent law and practice</h2>
            </div>
            <p className="max-w-xs text-sm text-muted md:text-right">Short explainers written by the firm&apos;s lawyers.</p>
          </div>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {insights.map((post) => (
              <Link
                key={post.title}
                href={post.href}
                className="group flex min-w-0 flex-col gap-3 rounded-[20px] border border-line bg-card p-6 transition-colors hover:border-accent"
              >
                <span className="text-[13px] font-semibold text-accent-ink">{post.category}</span>
                <h3 className="text-[21px] leading-snug">{post.title}</h3>
                <p className="text-[15px] text-muted">{post.excerpt}</p>
                <span className="mt-auto inline-flex items-center gap-1.5 text-sm font-semibold">
                  Read
                  <ArrowUpRight className="size-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </Reveal>
    </section>
  );
}
