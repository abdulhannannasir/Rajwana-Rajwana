import { LOGO_CHAR, LOGO_NAVY, LOGO_VIEWBOX } from '@/lib/logo-data';

/** Firm monogram. Colours come from --brand-navy and --brand-char so it stays legible in dark mode. */
export function Logo({ className, title = 'Rajwana & Rajwana' }: { className?: string; title?: string }) {
  return (
    <svg
      viewBox={LOGO_VIEWBOX}
      className={className}
      role={title ? 'img' : undefined}
      aria-label={title || undefined}
      aria-hidden={title ? undefined : true}
      xmlns="http://www.w3.org/2000/svg"
    >
      <g fill="var(--brand-navy)">
        {LOGO_NAVY.map(([t, d]) => (
          <path key={t} transform={`translate(${t})`} d={d} />
        ))}
      </g>
      <g fill="var(--brand-char)">
        {LOGO_CHAR.map(([t, d]) => (
          <path key={t} transform={`translate(${t})`} d={d} />
        ))}
      </g>
    </svg>
  );
}
