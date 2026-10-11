import type { MetadataRoute } from 'next';
import { firm, practiceAreas, team } from '@/content/site';

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url: firm.url, changeFrequency: 'monthly', priority: 1 },
    ...practiceAreas.map((p) => ({ url: `${firm.url}/practice/${p.slug}`, changeFrequency: 'monthly' as const, priority: 0.8 })),
    ...team.filter((m) => m.bio).map((m) => ({ url: `${firm.url}/team/${m.slug}`, changeFrequency: 'yearly' as const, priority: 0.6 })),
    ...['privacy', 'disclaimer', 'terms'].map((slug) => ({ url: `${firm.url}/${slug}`, changeFrequency: 'yearly' as const, priority: 0.2 })),
  ];
}
