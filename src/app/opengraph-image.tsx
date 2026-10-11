import { ImageResponse } from 'next/og';
import { firm, offices } from '@/content/site';
import { logoDataUri } from '@/lib/logo-data';

export const alt = `${firm.name}, ${firm.tagline}`;
export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';

// Branded card shown when a link to the site is shared on WhatsApp, LinkedIn and similar apps.
export default async function OpengraphImage() {
  const logo = logoDataUri();

  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          background: '#f9fafb',
          padding: '140px 84px 0',
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: 48 }}>
          <img src={logo} width={250} height={181} alt="" />
          <div style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
            <div style={{ fontSize: 76, color: '#1c232c', letterSpacing: -2, lineHeight: 1 }}>{firm.name}</div>
            <div style={{ fontSize: 24, color: '#5a6370', letterSpacing: 6, textTransform: 'uppercase' }}>{firm.tagline}</div>
          </div>
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 40 }}>
          <div style={{ display: 'flex', gap: 28, fontSize: 30, color: '#1f4a71' }}>
            {offices.map((o, i) => (
              <div key={o.city} style={{ display: 'flex', gap: 28 }}>
                {i > 0 && <span style={{ color: '#9aa5b2' }}>·</span>}
                <span>{o.city}</span>
              </div>
            ))}
          </div>
          <div style={{ display: 'flex', height: 18, margin: '0 -84px', background: '#1f4a71' }} />
        </div>
      </div>
    ),
    size,
  );
}
