import Link from 'next/link';
import { Logo } from '@/components/logo';
import { disclaimer, firm, offices, practiceAreas } from '@/content/site';

// Watermelon footer-29: brand column, link columns, oversized firm name.
export function SiteFooter() {
  return (
    <footer className="overflow-hidden border-t border-line bg-bg-2">
      <div className="mx-auto flex max-w-6xl flex-wrap justify-between gap-10 px-4 pb-8 pt-16 sm:px-6 lg:px-10">
        <div className="flex max-w-xs flex-col gap-4">
          <Logo className="h-14 w-auto self-start" title="" />
          <span className="text-base font-semibold uppercase tracking-[0.14em]">{firm.name}</span>
          <p className="text-[15px] text-muted">{firm.description}</p>
          <p className="select-all text-sm text-muted">{firm.email}</p>
        </div>
        <div className="grid grid-cols-2 gap-8 sm:grid-cols-3">
          <div>
            <h2 className="eyebrow mb-3.5 font-sans">Practice</h2>
            {practiceAreas.map((p) => (
              <Link key={p.slug} href={`/practice/${p.slug}`} className="block py-1 text-[15px] hover:text-accent-ink">
                {p.title}
              </Link>
            ))}
          </div>
          <div>
            <h2 className="eyebrow mb-3.5 font-sans">Firm</h2>
            <Link href="/#team" className="block py-1 text-[15px] hover:text-accent-ink">Our lawyers</Link>
            <Link href="/#insights" className="block py-1 text-[15px] hover:text-accent-ink">Insights</Link>
            <Link href="/#faq" className="block py-1 text-[15px] hover:text-accent-ink">FAQ</Link>
            <Link href="/#contact" className="block py-1 text-[15px] hover:text-accent-ink">Consultation</Link>
          </div>
          <div>
            <h2 className="eyebrow mb-3.5 font-sans">Offices</h2>
            {offices.map((o) => (
              <Link key={o.city} href="/#offices" className="block py-1 text-[15px] hover:text-accent-ink">
                {o.city} <span className="tabular-nums text-sm text-muted">{o.phone}</span>
              </Link>
            ))}
          </div>
        </div>
      </div>
      <div
        aria-hidden="true"
        className="select-none whitespace-nowrap px-4 font-display text-[clamp(3rem,13vw,12rem)] leading-[0.82] tracking-[-0.04em] text-accent/25 sm:px-6 lg:px-10"
      >
        {firm.name}
      </div>
      <div className="mx-auto flex max-w-6xl flex-wrap justify-between gap-3 border-t border-line px-4 py-5 text-[13px] text-muted sm:px-6 lg:px-10">
        <span>© {new Date().getFullYear()} {firm.name}</span>
        <span className="flex flex-wrap gap-x-4 gap-y-1">
          <Link href="/privacy" className="hover:text-ink">Privacy</Link>
          <Link href="/disclaimer" className="hover:text-ink">Disclaimer</Link>
          <Link href="/terms" className="hover:text-ink">Terms</Link>
          <span>{disclaimer}</span>
        </span>
      </div>
    </footer>
  );
}
