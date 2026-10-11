'use client';
import { InfiniteSlider } from '@/components/motion-primitives/infinite-slider';
import { ProgressiveBlur } from '@/components/motion-primitives/progressive-blur';
import { forums } from '@/content/site';

// Motion Primitives InfiniteSlider + ProgressiveBlur.
export function ForumsStrip() {
  return (
    <section aria-label="Courts and forums" className="border-y border-line bg-bg-2">
      <div className="mx-auto flex max-w-6xl flex-col gap-3 px-4 py-5 sm:flex-row sm:items-center sm:gap-6 sm:px-6 lg:px-10">
        <span className="eyebrow shrink-0 sm:max-w-[7.5rem]">Appearing before</span>
        <div className="relative min-w-0 flex-1">
          <InfiniteSlider gap={52} speed={36} speedOnHover={10}>
            {forums.map((f) => (
              <span key={f} className="whitespace-nowrap font-display text-lg text-ink/75">
                {f}
              </span>
            ))}
          </InfiniteSlider>
          <ProgressiveBlur className="pointer-events-none absolute inset-y-0 left-0 w-20" direction="left" blurIntensity={1} />
          <ProgressiveBlur className="pointer-events-none absolute inset-y-0 right-0 w-20" direction="right" blurIntensity={1} />
          <div className="pointer-events-none absolute inset-y-0 left-0 w-12 bg-gradient-to-r from-bg-2 to-transparent" />
          <div className="pointer-events-none absolute inset-y-0 right-0 w-12 bg-gradient-to-l from-bg-2 to-transparent" />
        </div>
      </div>
    </section>
  );
}
