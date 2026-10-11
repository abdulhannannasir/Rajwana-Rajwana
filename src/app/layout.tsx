import type { Metadata, Viewport } from 'next';
import { Hanken_Grotesk, IBM_Plex_Mono, Newsreader } from 'next/font/google';
import { Analytics } from '@vercel/analytics/next';
import { SiteHeader } from '@/components/site-header';
import { SiteFooter } from '@/components/site-footer';
import { firm, founderWikipedia, offices, team } from '@/content/site';
import './globals.css';

const newsreader = Newsreader({ subsets: ['latin'], style: ['normal', 'italic'], variable: '--font-newsreader', display: 'swap' });
const hanken = Hanken_Grotesk({ subsets: ['latin'], variable: '--font-hanken', display: 'swap' });
const plexMono = IBM_Plex_Mono({ subsets: ['latin'], weight: ['400', '500'], variable: '--font-plex-mono', display: 'swap' });

export const metadata: Metadata = {
  metadataBase: new URL(firm.url),
  title: { default: `${firm.name} | ${firm.tagline}`, template: `%s | ${firm.name}` },
  description: firm.description,
  openGraph: { type: 'website', siteName: firm.name, locale: 'en_PK', url: firm.url },
  twitter: { card: 'summary_large_image' },
  alternates: { canonical: '/' },
  // Review copies stay out of search results until SITE_LIVE=true (see robots.ts).
  robots: process.env.SITE_LIVE === 'true' ? undefined : { index: false, follow: false },
};

export const viewport: Viewport = {
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#f9fafb' },
    { media: '(prefers-color-scheme: dark)', color: '#0d1218' },
  ],
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'LegalService',
  name: firm.name,
  description: firm.description,
  url: firm.url,
  email: firm.email,
  telephone: firm.phone,
  logo: `${firm.url}/logo.svg`,
  founder: {
    '@type': 'Person',
    name: team[0].name,
    url: `${firm.url}/team/${team[0].slug}`,
    sameAs: [founderWikipedia],
  },
  areaServed: 'PK',
  address: {
    '@type': 'PostalAddress',
    streetAddress: offices[0].address.slice(0, -1).join(', '),
    addressLocality: offices[0].city,
    addressCountry: 'PK',
  },
  department: offices.slice(1).map((o) => ({
    '@type': 'LegalService',
    name: `${firm.name}, ${o.city}`,
    telephone: o.phone,
    ...(o.fax ? { faxNumber: o.fax } : {}),
    address: {
      '@type': 'PostalAddress',
      streetAddress: o.address.slice(0, -1).join(', '),
      addressLocality: o.city,
      addressCountry: 'PK',
    },
  })),
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${newsreader.variable} ${hanken.variable} ${plexMono.variable}`}>
      <body>
        <a href="#main" className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:rounded-lg focus:bg-ink focus:px-4 focus:py-2 focus:text-bg">
          Skip to content
        </a>
        <SiteHeader />
        <main id="main">{children}</main>
        <SiteFooter />
        <Analytics />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      </body>
    </html>
  );
}
