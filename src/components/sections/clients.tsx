import { Reveal } from '@/components/reveal';
import { clients } from '@/content/site';

export function Clients() {
  return (
    <section aria-labelledby="clients-heading" className="pb-20 lg:pb-26">
      <Reveal>
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-10">
          <div className="mb-8 flex flex-wrap items-end justify-between gap-5">
            <div>
              <span className="eyebrow">Clients</span>
              <h2 id="clients-heading" className="mt-3 max-w-[20ch] text-[clamp(1.9rem,4.4vw,3rem)] leading-[1.1]">
                Clients the firm has represented
              </h2>
            </div>
            <p className="max-w-[40ch] text-muted">
              Including public power utilities and industry.
            </p>
          </div>
          <ul className="grid grid-cols-1 overflow-hidden rounded-3xl border border-line bg-card sm:grid-cols-2 lg:grid-cols-4">
            {clients.map((c) => (
              <li
                key={c.short}
                className="flex min-w-0 flex-col gap-2 border-line p-6 [&:not(:last-child)]:border-b sm:[&:nth-child(odd)]:border-r sm:[&:nth-last-child(-n+2)]:border-b-0 lg:border-b-0 lg:[&:not(:last-child)]:border-r"
              >
                <span className="font-display text-[28px] leading-none tracking-tight text-accent-ink">{c.short}</span>
                <span className="text-[15px] font-medium">{c.name}</span>
                <span className="font-mono text-xs text-muted">{c.sector}</span>
              </li>
            ))}
          </ul>
        </div>
      </Reveal>
    </section>
  );
}
