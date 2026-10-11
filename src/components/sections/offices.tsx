import { MapPin, Phone, Printer, UserRound } from 'lucide-react';
import { Reveal } from '@/components/reveal';
import { firm, offices } from '@/content/site';

const telHref = (n: string) => `tel:${n.replace(/[^\d+]/g, '')}`;
const mapsHref = (lines: string[]) =>
  `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(`${firm.name}, ${lines.join(', ')}, Pakistan`)}`;

// Watermelon contact-1 pattern: one column per office.
export function Offices() {
  return (
    <section id="offices" className="pb-20 lg:pb-26">
      <Reveal>
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-10">
          <div className="mb-10 flex flex-wrap items-end justify-between gap-5">
            <div>
              <span className="eyebrow">Offices</span>
              <h2 className="mt-3 max-w-[18ch] text-[clamp(1.9rem,4.4vw,3rem)] leading-[1.1]">
                Four cities, one firm
              </h2>
            </div>
            <p className="max-w-[42ch] text-muted">
              Matters are handled from the office nearest the court hearing them. Email reaches all offices:{' '}
              <span className="select-all font-medium text-ink">{firm.email}</span>
            </p>
          </div>

          <div className="grid grid-cols-1 overflow-hidden rounded-3xl border border-line bg-card sm:grid-cols-2 lg:grid-cols-4">
            {offices.map((o) => (
              <address
                key={o.city}
                className="flex min-w-0 flex-col gap-4 border-line p-6 not-italic [&:not(:last-child)]:border-b sm:[&:nth-child(odd)]:border-r lg:border-b-0 lg:[&:not(:last-child)]:border-r"
              >
                <div className="flex items-center justify-between gap-3">
                  <h3 className="text-2xl">{o.city}</h3>
                  <span className={`shrink-0 whitespace-nowrap rounded-full px-2.5 py-1 text-[11px] font-semibold uppercase tracking-wider ${o.label === 'Head office' ? 'bg-accent-soft text-accent-ink' : 'bg-bg-2 text-muted'}`}>
                    {o.label}
                  </span>
                </div>
                <p className="flex gap-2.5 text-[15px] leading-relaxed">
                  <MapPin className="mt-1 size-4 shrink-0 text-accent" strokeWidth={1.6} />
                  <span>
                    {o.address.map((l) => (
                      <span key={l} className="block">{l}</span>
                    ))}
                  </span>
                </p>
                <div className="flex flex-col gap-1.5 text-[15px]">
                  <a href={telHref(o.phone)} className="flex items-center gap-2.5 tabular-nums hover:text-accent-ink">
                    <Phone className="size-4 shrink-0 text-accent" strokeWidth={1.6} />
                    {o.phone}
                  </a>
                  {o.fax && (
                    <span className="flex items-center gap-2.5 tabular-nums text-muted">
                      <Printer className="size-4 shrink-0" strokeWidth={1.6} />
                      Fax {o.fax}
                    </span>
                  )}
                  {o.contact && (
                    <a href={telHref(o.contact.phone)} className="flex items-start gap-2.5 hover:text-accent-ink">
                      <UserRound className="mt-0.5 size-4 shrink-0 text-accent" strokeWidth={1.6} />
                      <span>
                        {o.contact.name}, {o.contact.role}
                        <span className="block tabular-nums text-muted">{o.contact.phone}</span>
                      </span>
                    </a>
                  )}
                </div>
                <a
                  href={mapsHref(o.address)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-auto inline-flex w-fit items-center gap-1.5 border-b border-ink pb-0.5 text-sm font-semibold"
                >
                  Get directions
                </a>
              </address>
            ))}
          </div>
        </div>
      </Reveal>
    </section>
  );
}
