import { logoSvg } from '@/lib/logo-data';

export const dynamic = 'force-static';

export function GET() {
  return new Response(logoSvg(), {
    headers: { 'Content-Type': 'image/svg+xml', 'Cache-Control': 'public, max-age=31536000, immutable' },
  });
}
