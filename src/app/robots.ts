import type { MetadataRoute } from 'next';
import { firm } from '@/content/site';

// Search engines are kept out until the site is live on the firm's domain.
// When rajwanaandrajwana.com points here, set SITE_LIVE=true in Vercel and redeploy.
export default function robots(): MetadataRoute.Robots {
  if (process.env.SITE_LIVE !== 'true') {
    return { rules: { userAgent: '*', disallow: '/' } };
  }
  return { rules: { userAgent: '*', allow: '/' }, sitemap: `${firm.url}/sitemap.xml` };
}
