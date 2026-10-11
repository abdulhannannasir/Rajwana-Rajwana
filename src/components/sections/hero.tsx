'use client';
import Link from 'next/link';
import { motion } from 'motion/react';
import { ArrowRight } from 'lucide-react';
import { TextLoop } from '@/components/motion-primitives/text-loop';
import { Icon } from '@/components/icons';
import { hero } from '@/content/site';

// Watermelon hero-22 layout with Motion Primitives TextEffect + TextLoop.
export function Hero() {
  return (
    <section className="relative isolate overflow-hidden">
      <Colonnade />
      <div className="mx-auto flex max-w-6xl flex-col gap-7 px-4 pb-20 pt-20 sm:px-6 sm:pt-28 lg:px-10 lg:pb-24 lg:pt-32">
        <motion.span
          className="eyebrow"
          initial={{ opacity: 0, y: -8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          {hero.eyebrow}
        </motion.span>

        <h1 className="max-w-[14ch] text-[clamp(2.6rem,7vw,4.9rem)] leading-[1.05]">
          <WordReveal text={hero.headingStart} />{' '}
          <WordReveal text={hero.headingHighlight} offset={hero.headingStart.split(' ').length} className="italic text-accent-ink" />
        </h1>

        <motion.div
          className="max-w-[46ch] text-[clamp(1.05rem,2vw,1.25rem)] text-muted"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.6 }}
        >
          {hero.lead}{' '}
          <TextLoop interval={2.8} mode="sync" className="inline-grid overflow-hidden align-bottom font-semibold text-ink [&>*]:[grid-area:1/1]">
            {hero.rotating.map((t) => (
              <span key={t}>{t}</span>
            ))}
          </TextLoop>
        </motion.div>

        <motion.div
          className="flex flex-wrap gap-3"
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.75, duration: 0.5 }}
        >
          <Link
            href="/#contact"
            className="inline-flex items-center gap-2 rounded-full border border-ink bg-ink px-6 py-3 text-[15px] font-semibold text-bg transition-transform active:scale-[0.97]"
          >
            Book a consultation <ArrowRight className="size-4" />
          </Link>
          <Link
            href="/#practice"
            className="inline-flex items-center rounded-full border border-ink px-6 py-3 text-[15px] font-semibold transition-transform active:scale-[0.97]"
          >
            Our practice areas
          </Link>
        </motion.div>

        <div className="mt-2 flex flex-wrap gap-2.5" style={{ perspective: 600 }}>
          {hero.chips.map((c, i) => (
            <motion.div
              key={c.title}
              initial={{ opacity: 0, y: 22, rotateX: 18, scale: 0.96 }}
              animate={{ opacity: 1, y: 0, rotateX: 0, scale: 1 }}
              transition={{ type: 'spring', stiffness: 240, damping: 28, delay: 0.9 + i * 0.14 }}
              className="flex items-center gap-2.5 rounded-2xl border border-line bg-card/80 px-3.5 py-2.5 backdrop-blur"
            >
              <span className="grid size-9 place-items-center rounded-xl bg-accent-soft text-accent-ink">
                <Icon name={c.icon} className="size-[18px]" />
              </span>
              <span>
                <b className="block text-sm font-semibold leading-tight">{c.title}</b>
                <small className="text-[13px] text-muted">{c.text}</small>
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

/** Line drawing of a court colonnade, standing in for hero-22's background photo. */
function Colonnade() {
  const cols = Array.from({ length: 8 }, (_, i) => 78 + i * 62);
  return (
    <motion.div
      aria-hidden="true"
      className="pointer-events-none absolute bottom-0 right-0 -z-10 w-[min(620px,62%)] text-accent"
      initial={{ opacity: 0, scale: 1.08 }}
      animate={{ opacity: 0.45, scale: 1 }}
      transition={{ type: 'spring', stiffness: 60, damping: 20, mass: 1.2 }}
      style={{ transformOrigin: 'bottom right' }}
    >
      <svg viewBox="0 0 600 520" fill="none" stroke="currentColor" strokeWidth="1.2" className="h-auto w-full">
        <path d="M40 150 300 40l260 110Z" />
        <path d="M80 146 300 56l220 90" />
        <rect x="50" y="150" width="500" height="22" />
        <rect x="40" y="172" width="520" height="10" />
        {cols.map((x) => (
          <g key={x}>
            <rect x={x - 4} y="182" width="36" height="10" />
            <path d={`M${x} 192v268M${x + 28} 192v268M${x + 9} 196v260M${x + 19} 196v260`} />
            <rect x={x - 4} y="460" width="36" height="10" />
          </g>
        ))}
        <rect x="50" y="470" width="500" height="14" />
        <rect x="30" y="484" width="540" height="14" />
        <rect x="10" y="498" width="580" height="16" />
        <circle cx="300" cy="112" r="20" />
        <path d="M300 98v28M288 112h24" />
      </svg>
    </motion.div>
  );
}

/**
 * Word-by-word fade-in-blur, matching Motion Primitives TextEffect (preset "fade-in-blur").
 * Written inline so the italic highlight and line wrapping behave correctly.
 */
function WordReveal({ text, offset = 0, className }: { text: string; offset?: number; className?: string }) {
  const words = text.split(' ');
  return (
    <span className={className}>
      <span className="sr-only">{text}</span>
      {words.map((w, i) => (
        <span key={i} aria-hidden="true">
          <motion.span
            className="inline-block"
            initial={{ opacity: 0, y: 20, filter: 'blur(12px)' }}
            animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
            transition={{ duration: 0.6, delay: 0.15 + (offset + i) * 0.06, ease: [0.2, 0.7, 0.2, 1] }}
          >
            {w}
          </motion.span>
          {i < words.length - 1 ? ' ' : ''}
        </span>
      ))}
    </span>
  );
}
