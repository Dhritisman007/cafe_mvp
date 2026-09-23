import type { Metadata, Viewport } from "next";
import { Cormorant_Garamond, Manrope } from "next/font/google";
import { Cursor } from "@/components/Cursor";
import { business, hours, menuItems } from "@/data/site";
import "./globals.css";

const serif = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["300", "400", "500"],
  style: ["normal", "italic"],
  variable: "--font-cormorant",
  display: "swap",
});

const sans = Manrope({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-manrope",
  display: "swap",
});

const title = "Cafe Lychee Tree | Cafe & Restaurant in Dehradun";
const description =
  "Cafe Lychee Tree — a cozy café in Nehru Colony, Dehradun for food, conversations, music and memorable evenings.";

export const metadata: Metadata = {
  metadataBase: new URL(business.url),
  title,
  description,
  alternates: { canonical: "/" },
  keywords: ["Cafe Lychee Tree", "cafe in Dehradun", "Nehru Colony cafe", "Dharampur restaurant", "Dehradun live music cafe"],
  openGraph: {
    title,
    description,
    type: "website",
    locale: "en_IN",
    siteName: business.name,
  },
  twitter: { card: "summary_large_image", title, description },
};

export const viewport: Viewport = {
  themeColor: "#1a241b",
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": ["Restaurant", "CafeOrCoffeeShop"],
  name: business.name,
  description,
  url: business.url,
  telephone: business.phone.tel,
  hasMenu: `${business.url}/menu`,
  servesCuisine: ["Café"],
  sameAs: [business.instagram.url],
  address: {
    "@type": "PostalAddress",
    streetAddress: business.address.street,
    addressLocality: business.address.locality,
    addressRegion: business.address.region,
    postalCode: business.address.postalCode,
    addressCountry: business.address.country,
  },
  // Only published once the owner confirms hours (see data/site.ts)
  ...(hours.verified && {
    openingHoursSpecification: hours.schedule.map((h) => ({
      "@type": "OpeningHoursSpecification",
      dayOfWeek: h.days,
      opens: h.opens,
      closes: h.closes,
    })),
  }),
  ...(menuItems.length && {
    hasMenuSection: {
      "@type": "MenuSection",
      name: "Selected dishes",
      hasMenuItem: menuItems.map((m) => ({ "@type": "MenuItem", name: m.name })),
    },
  }),
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en-IN" className={`${serif.variable} ${sans.variable}`}>
      <body>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
        {children}
        <Cursor />
        {/* Page-wide film grain */}
        <div className="grain pointer-events-none fixed inset-0 z-[90] opacity-[.035]" aria-hidden="true" />
      </body>
    </html>
  );
}
