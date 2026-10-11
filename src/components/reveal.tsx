'use client';
import type { ReactNode } from 'react';
import { InView } from '@/components/motion-primitives/in-view';

/** Section entrance used site-wide (Motion Primitives InView). */
export function Reveal({ children }: { children: ReactNode }) {
  return (
    <InView
      once
      viewOptions={{ once: true, margin: '0px 0px -12% 0px' }}
      variants={{
        hidden: { opacity: 0, y: 28, filter: 'blur(6px)' },
        visible: { opacity: 1, y: 0, filter: 'blur(0px)' },
      }}
      transition={{ duration: 0.7, ease: [0.2, 0.7, 0.2, 1] }}
    >
      {children}
    </InView>
  );
}
