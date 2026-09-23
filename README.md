# Cafe Lychee Tree — website MVP

Next.js 16 · React 19 · Tailwind CSS 4 · Framer Motion · Lucide

```bash
npm install
npm run dev     # http://localhost:3000
npm run build && npm start
```

## Editing content — everything is in `data/site.ts`

| What | Where in `data/site.ts` |
| --- | --- |
| Address, phone, Instagram, map links | `business` |
| Establishment year (shows "EST. ____" only when set) | `business.established` |
| Opening hours (+ "please confirm" note until `verified: true`) | `hours` |
| Signature dishes, categories, prices, descriptions | `menuItems` |
| Mood tiles (Slow Mornings, Date Nights…) | `experiences` |
| Instagram / Moments grid | `gallery` |
| Reviews — **real, verifiable ones only** | `reviews` |

### Replacing placeholder photos

Every image slot shows a labelled placeholder such as `[HERO IMAGE — REPLACE WITH CAFE PHOTO]`.

1. Put the café's own photo in `public/images/`, e.g. `public/images/hero.jpg`.
2. In `data/site.ts`, set that image's `src`, e.g. `hero: img("…", "…", "amber", "/images/hero.jpg")`.

Next.js optimises it (AVIF/WebP, responsive sizes, lazy loading) automatically.
Only use photos the café owns or has permission to use.

### Before launch
- Set `NEXT_PUBLIC_SITE_URL` to the real domain (for canonical URLs, sitemap and structured data).
- Confirm hours with the café, then set `hours.verified = true`. That also adds them to Google's structured data.
- Replace the example menu with the real menu and prices.
- Add verified reviews with their source (Google / Zomato / Tripadvisor).
