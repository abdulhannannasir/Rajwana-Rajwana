'use client';
import { useRef } from 'react';
import { useInView } from 'motion/react';
import { FadeInItem, FadeInStagger } from '@/components/fade-in-stagger';
import { AnimatedNumber } from '@/components/motion-primitives/animated-number';
import { stats } from '@/content/site';

// Watermelon stats-1 cards with Motion Primitives AnimatedNumber.
export function Stats() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: '0px 0px -15% 0px' });

  return (
    <section aria-label="The firm in numbers" className="pb-20 lg:pb-26">
      <div ref={ref} className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-10">
        <FadeInStagger className="grid grid-cols-1 gap-4 md:grid-cols-3">
        {stats.map((s) => (
          <FadeInItem key={s.label} className="flex">
            {/* Hover styling lives on the inner div: the entrance animation owns the wrapper's transform. */}
            <div className="flex w-full flex-col gap-2.5 rounded-[28px] bg-card p-7 shadow-[0_0_0_1px_var(--line),0_2px_4px_rgba(0,0,0,0.04)] transition-[transform,box-shadow] duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] hover:-translate-y-1.5 hover:shadow-[0_0_0_1px_var(--accent),0_24px_48px_-24px_rgba(0,0,0,0.3)]">
              <span className="font-display text-[clamp(2.9rem,6vw,4rem)] leading-none tracking-tight">
                <AnimatedNumber value={inView ? s.value : 0} springOptions={{ bounce: 0, duration: 1800 }} />
                {s.suffix}
              </span>
              <span className="font-semibold">{s.label}</span>
              <span className="text-sm text-muted">{s.detail}</span>
            </div>
          </FadeInItem>
        ))}
        </FadeInStagger>
      </div>
    </section>
  );
}
