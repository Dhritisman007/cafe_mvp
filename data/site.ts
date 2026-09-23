/**
 * ─────────────────────────────────────────────────────────────
 *  CAFE LYCHEE TREE — SITE CONTENT
 *  Everything the café owner may want to change lives in this file.
 *
 *  IMAGES: every slot below currently points to a free stock photo in
 *  /public/images (from Unsplash, chosen to match the mood — none of them
 *  are actual photos of Cafe Lychee Tree). Replace any of them with the
 *  café's real photography by dropping a file into /public/images and
 *  updating that image's `src`, e.g. src: "/images/hero.jpg". Clearing
 *  `src` back to "" brings back the labelled placeholder.
 * ─────────────────────────────────────────────────────────────
 */

export type Tone = "amber" | "green" | "wine";

export type SiteImage = {
  /** Path inside /public (e.g. "/images/hero.jpg"). Leave "" to show a placeholder. */
  src: string;
  alt: string;
  /** Text printed on the placeholder so it's obvious what photo belongs here. */
  label: string;
  /** Colour mood of the placeholder only. */
  tone?: Tone;
};

const img = (label: string, alt: string, tone: Tone = "amber", src = ""): SiteImage => ({
  src,
  alt,
  label,
  tone,
});

/* ───────────── Business details ───────────── */

export const business = {
  name: "Cafe Lychee Tree",
  shortName: "Lychee Tree",
  tagline: "Cafe • Food • Music • Moments",
  address: {
    lines: ["G-2 / G24/5, Nehru Colony Road,", "near IDBI Bank, Dharampur,", "Dehradun, Uttarakhand 248001"],
    street: "G-2 / G24/5, Nehru Colony Road, near IDBI Bank, Dharampur",
    locality: "Dehradun",
    region: "Uttarakhand",
    postalCode: "248001",
    country: "IN",
  },
  phone: { display: "+91 88591 08780", tel: "+918859108780" },
  instagram: { handle: "@cafelycheetree", url: "https://www.instagram.com/cafelycheetree/?hl=en" },
  maps: {
    directions:
      "https://www.google.com/maps/dir/?api=1&destination=Cafe+Lychee+Tree%2C+Nehru+Colony+Road%2C+Dharampur%2C+Dehradun",
    place: "https://www.google.com/maps/search/?api=1&query=Cafe+Lychee+Tree%2C+Nehru+Colony%2C+Dehradun",
    embed:
      "https://maps.google.com/maps?q=Cafe%20Lychee%20Tree%2C%20Nehru%20Colony%20Road%2C%20Dharampur%2C%20Dehradun&z=16&output=embed",
  },
  /** Only set this once verified with the owner, e.g. 2019. Shown as "EST. 2019". */
  established: null as number | null,
  /** Used for SEO / canonical URLs. Set NEXT_PUBLIC_SITE_URL in production. */
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000",
};

/* ───────────── Opening hours ─────────────
 * Third-party listings show roughly 11 AM – 11 PM.
 * Flip `verified` to true once the café confirms; the "please call to confirm"
 * note disappears and the hours are added to Google's structured data.
 */
export const hours = {
  verified: false,
  note: "Based on public listings — call ahead to confirm.",
  schedule: [
    {
      label: "Every day",
      time: "11 AM – 11 PM",
      opens: "11:00",
      closes: "23:00",
      days: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
    },
  ],
};

/* ───────────── Navigation ───────────── */

export const nav = [
  { label: "Home", href: "/#home" },
  { label: "Menu", href: "/#menu" },
  { label: "The Space", href: "/#space" },
  { label: "Moments", href: "/#moments" },
  { label: "Visit", href: "/#visit" },
];

/* ───────────── Images ───────────── */

export const images = {
  hero: img("HERO IMAGE — REPLACE WITH CAFE PHOTO", "Warm-lit café evening (stock photo)", "amber", "/images/hero.jpg"),
  vibeMain: img("INTERIOR IMAGE", "Cosy café interior with plants (stock photo)", "green", "/images/vibe-main.jpg"),
  vibeSecondary: img("DRINK IMAGE", "A drink on a café table (stock photo)", "wine", "/images/vibe-secondary.jpg"),
  stay: img("INTERIOR / AMBIENCE IMAGE", "Evening café ambience (stock photo)", "amber", "/images/stay.jpg"),
  finalCta: img("FINAL CTA IMAGE — EVENING TABLE", "A table waiting in the evening (stock photo)", "wine", "/images/final-cta.jpg"),
  foodStrip: [
    { image: img("DRINK IMAGE — HANDS HOLDING SHAKE", "Hands holding a shake (stock photo)", "wine", "/images/food-shake-hands.jpg"), ratio: "aspect-[3/4]", caption: "Strawberry or Oreo? Both is an answer." },
    { image: img("TABLE SHOT", "A table full of food (stock photo)", "amber", "/images/food-table.jpg"), ratio: "aspect-[16/10]", caption: "The table, mid-conversation." },
    { image: img("PEOPLE SHARING FOOD", "Friends sharing plates (stock photo)", "green", "/images/food-sharing.jpg"), ratio: "aspect-square", caption: "Momos, shared (in theory)." },
  ],
};

/* ───────────── Experiences ───────────── */

export const experiences = [
  {
    title: "Slow Mornings",
    text: "Coffee, conversations and an easy start.",
    image: img("MORNING / COFFEE IMAGE", "Morning coffee (stock photo)", "green", "/images/exp-morning.jpg"),
  },
  {
    title: "Date Nights",
    text: "Warm lights, good food and somewhere to actually talk.",
    image: img("DATE NIGHT IMAGE", "A table for two under warm lights (stock photo)", "wine", "/images/exp-date.jpg"),
  },
  {
    title: "Weekend Vibes",
    text: "Brunch, friends and a table that somehow stays occupied for hours.",
    image: img("WEEKEND / FRIENDS IMAGE", "Friends at a weekend table (stock photo)", "amber", "/images/exp-weekend.jpg"),
  },
  {
    title: "Live Nights",
    text: "Music, drinks and the kind of evenings that become memories.",
    image: img("LIVE MUSIC IMAGE", "Live music night (stock photo)", "amber", "/images/exp-live.jpg"),
  },
];

/* ───────────── Menu ─────────────
 * These dishes appear on public listings / reviews. They are shown as
 * EXAMPLES until the café provides its real menu. Prices & descriptions are
 * intentionally empty — never invent them. Fill `price` (e.g. "₹240") and
 * `description` when confirmed, and set `example: false`.
 */

export const menuCategories = ["All", "Starters", "Mains", "Pasta & Pizza", "Asian", "Drinks", "Desserts"] as const;
export type MenuCategory = Exclude<(typeof menuCategories)[number], "All">;

export type MenuItem = {
  name: string;
  category: MenuCategory;
  price?: string;
  description?: string;
  example: boolean;
  image: SiteImage;
};

export const menuItems: MenuItem[] = [
  { name: "Veg Kathi Roll", category: "Starters", example: true, image: img("FOOD IMAGE — VEG KATHI ROLL", "Veg Kathi Roll (stock photo)", "amber", "/images/menu-kathi-roll.jpg") },
  { name: "Momos", category: "Asian", example: true, image: img("FOOD IMAGE — MOMOS", "Momos (stock photo)", "green", "/images/menu-momos.jpg") },
  { name: "Chilli Chicken", category: "Asian", example: true, image: img("FOOD IMAGE — CHILLI CHICKEN", "Chilli Chicken (stock photo)", "wine", "/images/menu-chilli-chicken.jpg") },
  { name: "Cottage Cheese Steak", category: "Mains", example: true, image: img("FOOD IMAGE — COTTAGE CHEESE STEAK", "Cottage Cheese Steak (stock photo)", "amber", "/images/menu-cottage-cheese-steak.jpg") },
  { name: "Pasta", category: "Pasta & Pizza", example: true, image: img("FOOD IMAGE — PASTA", "Pasta (stock photo)", "wine", "/images/menu-pasta.jpg") },
  { name: "Noodles", category: "Asian", example: true, image: img("FOOD IMAGE — NOODLES", "Noodles (stock photo)", "amber", "/images/menu-noodles.jpg") },
  { name: "Strawberry Shake", category: "Drinks", example: true, image: img("DRINK IMAGE — STRAWBERRY SHAKE", "Strawberry Shake (stock photo)", "wine", "/images/menu-strawberry-shake.jpg") },
  { name: "Oreo Shake", category: "Drinks", example: true, image: img("DRINK IMAGE — OREO SHAKE", "Oreo Shake (stock photo)", "green", "/images/menu-oreo-shake.jpg") },
];

/* ───────────── Instagram / Moments ─────────────
 * Only use the café's own photos, with permission. `ratio` controls the
 * masonry rhythm — mix them.
 */
export const gallery: { image: SiteImage; ratio: string }[] = [
  { image: img("INSTAGRAM IMAGE 1", "Café moment (stock photo)", "amber", "/images/gallery-1.jpg"), ratio: "aspect-[4/5]" },
  { image: img("INSTAGRAM IMAGE 2", "Café moment (stock photo)", "green", "/images/gallery-2.jpg"), ratio: "aspect-square" },
  { image: img("INSTAGRAM IMAGE 3", "Café moment (stock photo)", "wine", "/images/gallery-3.jpg"), ratio: "aspect-[3/4]" },
  { image: img("INSTAGRAM IMAGE 4", "Café moment (stock photo)", "amber", "/images/gallery-4.jpg"), ratio: "aspect-[4/3]" },
  { image: img("INSTAGRAM IMAGE 5", "Café moment (stock photo)", "green", "/images/gallery-5.jpg"), ratio: "aspect-[9/14]" },
  { image: img("INSTAGRAM IMAGE 6", "Café moment (stock photo)", "wine", "/images/gallery-6.jpg"), ratio: "aspect-square" },
  { image: img("INSTAGRAM IMAGE 7", "Café moment (stock photo)", "amber", "/images/gallery-7.jpg"), ratio: "aspect-[4/5]" },
  { image: img("INSTAGRAM IMAGE 8", "Café moment (stock photo)", "green", "/images/gallery-8.jpg"), ratio: "aspect-[4/3]" },
];

/* ───────────── Reviews ─────────────
 * Paste REAL, verifiable reviews only, with their actual source.
 * While this list is empty, clearly-marked placeholders are shown.
 */
export type Review = {
  quote: string;
  rating?: 1 | 2 | 3 | 4 | 5;
  author: string;
  source: "Google" | "Zomato" | "Tripadvisor";
  url?: string;
};

export const reviews: Review[] = [];
