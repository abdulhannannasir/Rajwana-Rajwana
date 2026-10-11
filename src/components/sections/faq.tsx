'use client';
import { useState } from 'react';
import { Plus } from 'lucide-react';
import { Reveal } from '@/components/reveal';
import { faqs } from '@/content/site';

// Watermelon faq-6: two columns, dashed grid, numbered accordion.
export function Faq() {
  const [open, setOpen] = useState(0);
  return (
    <section id="faq" className="pb-20 lg:pb-26">
      <Reveal>
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-10">
          <div className="grid grid-cols-1 rounded border border-dashed border-line md:grid-cols-12">
            <div className="flex flex-col gap-4 border-b border-dashed border-line p-8 md:col-span-5 md:border-b-0 md:border-r md:p-12">
              <span className="eyebrow">FAQ</span>
              <h2 className="text-[clamp(2rem,4.6vw,3.4rem)] leading-[1.05]">Before your first meeting</h2>
              <p className="text-muted">Can&apos;t find your question? Ask it in the consultation form below.</p>
            </div>
            <div className="md:col-span-7">
              {faqs.map((f, i) => {
                const isOpen = open === i;
                const id = `faq-${i}`;
                return (
                  <div key={f.q} className="border-b border-dashed border-line px-5 last:border-b-0 md:px-8">
                    <button
                      type="button"
                      aria-expanded={isOpen}
                      aria-controls={id}
                      onClick={() => setOpen(isOpen ? -1 : i)}
                      className="flex w-full items-start gap-4 py-5 text-left"
                    >
                      <span className="w-6 shrink-0 font-mono text-xs leading-7 text-muted">{String(i + 1).padStart(2, '0')}</span>
                      <span className="flex-1 font-display text-[19px] leading-snug">{f.q}</span>
                      <Plus className={`mt-1 size-5 shrink-0 transition-transform duration-300 ${isOpen ? 'rotate-45' : ''}`} />
                    </button>
                    <div
                      id={id}
                      className={`grid transition-[grid-template-rows] duration-300 ${isOpen ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]'}`}
                    >
                      <div className="overflow-hidden">
                        <p className="max-w-[60ch] pb-5 pl-10 text-muted">{f.a}</p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
