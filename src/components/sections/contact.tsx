'use client';
import { useState, type FormEvent } from 'react';
import { ChevronDown, Clock, Mail, Phone } from 'lucide-react';
import { BorderTrail } from '@/components/motion-primitives/border-trail';
import { Reveal } from '@/components/reveal';
import { contact, firm } from '@/content/site';

type Status = { kind: 'idle' | 'sending' | 'ok' | 'error'; message?: string };

// Watermelon contact-4 layout, floating-label fields, Motion Primitives BorderTrail.
export function Contact() {
  const [status, setStatus] = useState<Status>({ kind: 'idle' });

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = Object.fromEntries(new FormData(form)) as Record<string, string>;
    if (!data.name?.trim() || !/\S+@\S+\.\S+/.test(data.email ?? '')) {
      setStatus({ kind: 'error', message: 'Add your name and a valid email address.' });
      return;
    }
    if (data.consent !== 'yes') {
      setStatus({ kind: 'error', message: 'Tick the box to confirm you have read the privacy notice.' });
      return;
    }
    setStatus({ kind: 'sending' });
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });
      const body = await res.json().catch(() => ({}));
      if (!res.ok) throw new Error(body.error || 'The message could not be sent.');
      form.reset();
      setStatus({ kind: 'ok', message: 'Thank you. A lawyer will reply within one working day.' });
    } catch (err) {
      setStatus({
        kind: 'error',
        message: `${(err as Error).message} Please email ${firm.email} instead.`,
      });
    }
  }

  const ways = [
    { icon: Mail, label: 'Email', value: firm.email },
    { icon: Phone, label: 'Lahore head office', value: firm.phone },
    { icon: Clock, label: 'Hours', value: firm.hours },
  ];

  return (
    <section id="contact" className="overflow-hidden bg-bg-2 py-20 lg:py-26">
      <Reveal>
        <div className="mx-auto grid max-w-6xl grid-cols-1 items-center gap-12 px-4 sm:px-6 lg:grid-cols-2 lg:gap-16 lg:px-10">
          <div className="flex flex-col gap-5">
            <span className="eyebrow">Consultation</span>
            <h2 className="max-w-[12ch] text-[clamp(2.1rem,5vw,3.5rem)] leading-[1.05]">{contact.heading}</h2>
            <p className="max-w-[42ch] text-muted">{contact.lead}</p>
            <div className="flex flex-col gap-2.5">
              {ways.map((w) => (
                <div key={w.label} className="flex min-w-0 items-center gap-3 rounded-[18px] bg-bg p-1.5 pr-4">
                  <span className="grid size-11 shrink-0 place-items-center rounded-[13px] bg-card text-accent-ink">
                    <w.icon className="size-5" strokeWidth={1.6} />
                  </span>
                  <span className="min-w-0">
                    <small className="block text-xs text-muted">{w.label}</small>
                    <b className="block break-words text-[15px] font-semibold">{w.value}</b>
                  </span>
                </div>
              ))}
            </div>
          </div>

          <div className="relative rounded-[26px] border border-line">
            <BorderTrail className="bg-accent" size={90} transition={{ repeat: Infinity, duration: 6, ease: 'linear' }} />
            <form onSubmit={onSubmit} noValidate className="grid grid-cols-1 gap-3.5 rounded-[25px] bg-card p-5 sm:grid-cols-2 sm:p-8">
              <div className="field">
                <input id="name" name="name" placeholder=" " autoComplete="name" required />
                <label htmlFor="name">Full name</label>
              </div>
              <div className="field">
                <input id="phone" name="phone" placeholder=" " autoComplete="tel" />
                <label htmlFor="phone">Phone</label>
              </div>
              <div className="field sm:col-span-2">
                <input id="email" name="email" type="email" placeholder=" " autoComplete="email" required />
                <label htmlFor="email">Email</label>
              </div>
              <div className="field">
                <select id="office" name="office" defaultValue={contact.offices[0]}>
                  {contact.offices.map((c) => (
                    <option key={c}>{c}</option>
                  ))}
                </select>
                <label htmlFor="office">Nearest office</label>
                <ChevronDown className="pointer-events-none absolute right-3.5 top-1/2 size-4 -translate-y-1/2 text-muted" />
              </div>
              <div className="field">
                <select id="matter" name="matter" defaultValue={contact.matterTypes[0]}>
                  {contact.matterTypes.map((t) => (
                    <option key={t}>{t}</option>
                  ))}
                </select>
                <label htmlFor="matter">Type of matter</label>
                <ChevronDown className="pointer-events-none absolute right-3.5 top-1/2 size-4 -translate-y-1/2 text-muted" />
              </div>
              <div className="field sm:col-span-2">
                <textarea id="message" name="message" placeholder=" " />
                <label htmlFor="message">Briefly, what happened and any deadlines</label>
              </div>
              <label className="flex items-start gap-2.5 text-[13px] leading-relaxed text-muted sm:col-span-2">
                <input type="checkbox" name="consent" value="yes" required className="mt-1 size-4 shrink-0 accent-[var(--accent)]" />
                <span>
                  I understand that sending this form does not make me a client, and I agree to the{' '}
                  <a href="/privacy" className="underline underline-offset-2 hover:text-ink">privacy notice</a>.
                </span>
              </label>
              {/* Honeypot: hidden from people, filled in by bots */}
              <input type="text" name="company" tabIndex={-1} autoComplete="off" className="hidden" aria-hidden="true" />
              <div className="flex flex-wrap items-center gap-3.5 sm:col-span-2">
                <button
                  type="submit"
                  disabled={status.kind === 'sending'}
                  className="rounded-full bg-ink px-6 py-3 text-[15px] font-semibold text-bg transition-transform active:scale-[0.97] disabled:opacity-60"
                >
                  {status.kind === 'sending' ? 'Sending…' : 'Request consultation'}
                </button>
                <p role="status" className={`text-sm ${status.kind === 'error' ? 'text-red-700 dark:text-red-400' : 'text-accent-ink'}`}>
                  {status.message}
                </p>
              </div>
            </form>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
