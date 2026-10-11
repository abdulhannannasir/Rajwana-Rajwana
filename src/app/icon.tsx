import { ImageResponse } from 'next/og';
import { logoDataUri } from '@/lib/logo-data';

export const size = { width: 64, height: 64 };
export const contentType = 'image/png';

export default function Icon() {
  return new ImageResponse(
    // eslint-disable-next-line jsx-a11y/alt-text
    <img src={logoDataUri({ tile: true })} width={64} height={64} />,
    size,
  );
}
