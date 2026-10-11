'use client';
import Link from 'next/link';
import { useRef, type ComponentProps, type MouseEvent } from 'react';
import { cn } from '@/lib/utils';

// Layered glass card: translucent fill, heavy backdrop blur, hairline border.
// On hover it lifts, the border brightens, and a soft spotlight trails the cursor.
// Heavy, decelerating easing (no overshoot) keeps the motion weighty.
export function GlassCard({ className, children, ...props }: ComponentProps<typeof Link>) {
  const ref = useRef<HTMLAnchorElement>(null);
  const light = useRef<HTMLSpanElement>(null);

  const place = (e: MouseEvent<HTMLAnchorElement>, snap: boolean) => {
    const card = ref.current;
    const spot = light.current;
    if (!card || !spot) return;
    const r = card.getBoundingClientRect();
    // On entry, jump straight to the cursor so the light never sweeps in from a corner.
    if (snap) spot.style.transitionProperty = 'opacity';
    spot.style.transform = `translate3d(${e.clientX - r.left}px, ${e.clientY - r.top}px, 0) translate(-50%, -50%)`;
    if (snap) {
      void spot.offsetWidth;
      spot.style.transitionProperty = '';
    }
  };

  return (
    <Link
      ref={ref}
      onMouseEnter={(e) => place(e, true)}
      onMouseMove={(e) => place(e, false)}
      className={cn(
        'group relative isolate flex min-w-0 flex-col gap-2.5 overflow-hidden rounded-3xl p-6',
        'border border-white/10 bg-white/5 backdrop-blur-xl',
        'shadow-[0_1px_0_0_rgba(255,255,255,0.06)_inset,0_8px_24px_-12px_rgba(0,0,0,0.5)]',
        'transition-[transform,border-color,box-shadow,background-color] duration-700 ease-[cubic-bezier(0.22,1,0.36,1)]',
        'hover:-translate-y-1.5 hover:border-white/30 hover:bg-white/[0.07]',
        'hover:shadow-[0_1px_0_0_rgba(255,255,255,0.1)_inset,0_0_0_1px_rgba(255,255,255,0.06),0_28px_56px_-20px_rgba(0,0,0,0.7),0_0_40px_-12px_rgba(141,180,220,0.35)]',
        className,
      )}
      {...props}
    >
      <span
        ref={light}
        aria-hidden
        className="pointer-events-none absolute left-0 top-0 -z-10 size-[420px] rounded-full bg-[radial-gradient(circle_closest-side,rgba(169,198,230,0.22),rgba(169,198,230,0.07)_55%,transparent)] opacity-0 transition-[opacity,transform] duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:opacity-100"
        style={{ transform: 'translate3d(0, 0, 0) translate(-50%, -50%)' }}
      />
      {children}
    </Link>
  );
}

// Dark stage with soft colour orbs so the glass has something to refract.
export function GlassStage({ className, children }: { className?: string; children: React.ReactNode }) {
  return (
    <div className="px-3 sm:px-5">
      <div
        className={cn(
          'relative isolate mx-auto max-w-[88rem] overflow-hidden rounded-[2rem] bg-[#0a1017] py-16 lg:py-20',
          // Hairline edge + top highlight; in dark mode the page is nearly the same colour, so lift the panel a step.
          'shadow-[0_0_0_1px_rgba(255,255,255,0.08),inset_0_1px_0_rgba(255,255,255,0.1)]',
          'dark:bg-[#101a25] dark:shadow-[0_0_0_1px_rgba(255,255,255,0.12),inset_0_1px_0_rgba(255,255,255,0.14),0_30px_80px_-30px_rgba(0,0,0,0.8)]',
          className,
        )}
      >
        <div aria-hidden className="pointer-events-none absolute inset-0 -z-10">
          <div className="absolute -left-24 -top-24 size-[420px] rounded-full bg-[#1f4a71]/60 blur-3xl" />
          <div className="absolute -bottom-32 right-[-6rem] size-[480px] rounded-full bg-[#2f6aa3]/35 blur-3xl" />
          <div className="absolute left-1/2 top-1/3 size-[300px] -translate-x-1/2 rounded-full bg-[#8db4dc]/10 blur-3xl" />
        </div>
        {children}
      </div>
    </div>
  );
}
