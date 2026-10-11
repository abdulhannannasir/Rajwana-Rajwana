import Link from 'next/link';

export default function NotFound() {
  return (
    <section className="mx-auto flex max-w-6xl flex-col items-start gap-5 px-4 py-28 sm:px-6 lg:px-10">
      <span className="eyebrow">404</span>
      <h1 className="text-5xl">This page could not be found</h1>
      <p className="text-muted">The link may be out of date. Start again from the homepage.</p>
      <Link href="/" className="rounded-full bg-ink px-5 py-2.5 text-sm font-semibold text-bg">Go to homepage</Link>
    </section>
  );
}
