import type { SVGProps } from "react";

/** Small brand mark: a lychee on a stem with one leaf. */
export function LycheeMark(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 32 32" fill="none" aria-hidden="true" {...props}>
      <circle cx="16" cy="19" r="9" stroke="currentColor" strokeWidth="1.3" />
      <circle cx="16" cy="19" r="9" fill="#7a2f2f" fillOpacity=".55" />
      <path d="M16 10c0-3 1-5 3-6.5" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" />
      <path d="M17.5 6.5c3.8-2.2 7.6-1 9 .6-2.6 2.2-6.4 2.4-9-.6Z" fill="currentColor" fillOpacity=".85" />
      <path d="M12.5 16.5l1 1M18 15.5l1 1M14.5 21l1 1M20 20l1 1M11.5 20.5l.9.9" stroke="currentColor" strokeOpacity=".7" strokeLinecap="round" />
    </svg>
  );
}

/** Lucide no longer ships brand icons; this is a simple outline glyph. */
export function InstagramIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.6} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}>
      <rect x="3" y="3" width="18" height="18" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.5" cy="6.5" r=".6" fill="currentColor" />
    </svg>
  );
}
