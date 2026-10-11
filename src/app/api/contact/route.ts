import { NextResponse } from 'next/server';
import { firm } from '@/content/site';

/**
 * Sends consultation requests to the firm's inbox through Resend (resend.com).
 * Set these environment variables in Vercel:
 *   RESEND_API_KEY   your Resend API key
 *   CONTACT_TO       inbox that receives requests (defaults to the firm email)
 *   CONTACT_FROM     verified sender, e.g. "Website <website@rajwanaandrajwana.com>"
 */
export async function POST(req: Request) {
  let data: Record<string, string>;
  try {
    data = await req.json();
  } catch {
    return NextResponse.json({ error: 'Invalid request.' }, { status: 400 });
  }

  // Honeypot field: real visitors never fill it.
  if (data.company) return NextResponse.json({ ok: true });

  const name = (data.name ?? '').trim().slice(0, 200);
  const email = (data.email ?? '').trim().slice(0, 200);
  const phone = (data.phone ?? '').trim().slice(0, 50);
  const matter = (data.matter ?? '').trim().slice(0, 100);
  const office = (data.office ?? '').trim().slice(0, 50);
  const message = (data.message ?? '').trim().slice(0, 5000);

  if (data.consent !== 'yes') {
    return NextResponse.json({ error: 'Please confirm you have read the privacy notice.' }, { status: 400 });
  }
  if (!name || !/^\S+@\S+\.\S+$/.test(email)) {
    return NextResponse.json({ error: 'Add your name and a valid email address.' }, { status: 400 });
  }

  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    return NextResponse.json({ error: 'The contact form is not connected yet.' }, { status: 503 });
  }

  const res = await fetch('https://api.resend.com/emails', {
    method: 'POST',
    headers: { Authorization: `Bearer ${apiKey}`, 'Content-Type': 'application/json' },
    body: JSON.stringify({
      from: process.env.CONTACT_FROM ?? `Website <website@${new URL(firm.url).hostname}>`,
      to: [process.env.CONTACT_TO ?? firm.email],
      reply_to: email,
      subject: `[${office || 'Website'}] Consultation request: ${matter || 'General'} (${name})`,
      text: [`Name: ${name}`, `Email: ${email}`, `Phone: ${phone || '-'}`, `Matter: ${matter || '-'}`, `Nearest office: ${office || '-'}`, '', message || '(no message)'].join('\n'),
    }),
  });

  if (!res.ok) {
    return NextResponse.json({ error: 'The message could not be sent.' }, { status: 502 });
  }
  return NextResponse.json({ ok: true });
}
