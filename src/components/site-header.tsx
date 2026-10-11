'use client';
import Link from 'next/link';
import { useEffect, useRef, useState } from 'react';
import { AnimatePresence, motion } from 'motion/react';
import { ChevronDown, Menu, X } from 'lucide-react';
import { ScrollProgress } from '@/components/motion-primitives/scroll-progress';
import { Logo } from '@/components/logo';
import { firm, nav, practiceAreas } from '@/content/site';

// Watermelon navigation-1 pattern: sticky bar with a hover mega menu for practice areas.
export function SiteHeader() {
  const [megaOpen, setMegaOpen] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const closeTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  const open = () => {
    if (closeTimer.current) clearTimeout(closeTimer.current);
    setMegaOpen(true);
  };
  const scheduleClose = () => {
    closeTimer.current = setTimeout(() => setMegaOpen(false), 180);
  };

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setMegaOpen(false);
        setMobileOpen(false);
      }
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, []);

  const half = Math.ceil(practiceAreas.length / 2);
  const columns = [practiceAreas.slice(0, half), practiceAreas.slice(half)];

  return (
    <header className="sticky top-0 z-50 border-b border-line bg-bg/85 backdrop-blur-md">
      <ScrollProgress className="absolute top-0 z-[60] h-[3px] bg-accent" springOptions={{ stiffness: 280, damping: 18, mass: 0.3 }} />
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between gap-4 px-4 sm:px-6 lg:px-10">
        <Link href="/" className="flex items-center gap-3 whitespace-nowrap font-display text-[19px]" aria-label={`${firm.name} home`}>
          <Logo className="h-9 w-auto" title="" />
          <span className="leading-none">
            {firm.name}
            <span className="mt-1 hidden font-sans text-[10.5px] font-semibold uppercase tracking-[0.16em] text-muted sm:block">
              {firm.tagline}
            </span>
          </span>
        </Link>

        <nav aria-label="Main" className="hidden items-center gap-1 lg:flex">
          <button
            type="button"
            aria-expanded={megaOpen}
            aria-controls="mega-menu"
            onClick={() => setMegaOpen((v) => !v)}
            onMouseEnter={open}
            onMouseLeave={scheduleClose}
            className="inline-flex items-center gap-1.5 rounded-xl px-3 py-2 text-sm font-medium text-muted transition-colors hover:bg-bg-2 hover:text-ink aria-expanded:bg-bg-2 aria-expanded:text-ink"
          >
            Practice areas
            <ChevronDown className={`size-3.5 transition-transform ${megaOpen ? 'rotate-180' : ''}`} />
          </button>
          {nav.slice(1).map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="rounded-xl px-3 py-2 text-sm font-medium text-muted transition-colors hover:bg-bg-2 hover:text-ink"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <Link
          href="/#contact"
          className="hidden whitespace-nowrap rounded-full bg-ink px-4 py-2 text-sm font-semibold text-bg transition-transform active:scale-[0.97] lg:inline-flex"
        >
          Book a consultation
        </Link>

        <button
          type="button"
          className="inline-flex size-10 items-center justify-center rounded-xl border border-line lg:hidden"
          aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={mobileOpen}
          onClick={() => setMobileOpen((v) => !v)}
        >
          {mobileOpen ? <X className="size-5" /> : <Menu className="size-5" />}
        </button>
      </div>

      <AnimatePresence>
        {megaOpen && (
          <motion.div
            id="mega-menu"
            initial={{ opacity: 0, y: -6 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -6 }}
            transition={{ duration: 0.2 }}
            onMouseEnter={open}
            onMouseLeave={scheduleClose}
            className="absolute inset-x-0 top-full hidden border-b border-line bg-card shadow-[0_18px_40px_rgba(0,0,0,0.08)] lg:block"
          >
            <div className="mx-auto grid max-w-6xl grid-cols-[1fr_1fr_1.1fr] gap-8 px-10 py-7">
              {columns.map((col, i) => (
                <div key={i} className="flex flex-col">
                  {col.map((p) => (
                    <Link
                      key={p.slug}
                      href={`/practice/${p.slug}`}
                      onClick={() => setMegaOpen(false)}
                      className="group rounded-xl px-3 py-2.5 transition-colors hover:bg-bg-2"
                    >
                      <span className="block text-[15px] font-medium group-hover:text-accent-ink">{p.title}</span>
                      <span className="block text-sm text-muted">{p.law}</span>
                    </Link>
                  ))}
                </div>
              ))}
              <Link
                href="/#contact"
                onClick={() => setMegaOpen(false)}
                className="flex flex-col gap-2 rounded-2xl bg-bg-2 p-5"
              >
                <span className="eyebrow">Urgent matter?</span>
                <span className="font-display text-xl leading-snug">Stay applications and notices with short deadlines</span>
                <span className="text-sm text-muted">Send the notice and we will review it the same working day.</span>
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {mobileOpen && (
        <div className="border-t border-line px-4 py-3 sm:px-6 lg:hidden">
          <p className="eyebrow pt-2">Practice areas</p>
          {practiceAreas.map((p) => (
            <Link key={p.slug} href={`/practice/${p.slug}`} onClick={() => setMobileOpen(false)} className="block py-2 font-medium">
              {p.title}
            </Link>
          ))}
          <div className="my-2 border-t border-line" />
          {nav.slice(1).map((item) => (
            <Link key={item.href} href={item.href} onClick={() => setMobileOpen(false)} className="block py-2 font-medium">
              {item.label}
            </Link>
          ))}
        </div>
      )}
    </header>
  );
}
