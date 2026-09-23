import type { Metadata } from "next";
import { CTA } from "@/components/CTA";
import { Footer } from "@/components/Footer";
import { MobileCTA } from "@/components/MobileCTA";
import { Lines, Reveal } from "@/components/motion";
import { Navbar } from "@/components/Navbar";
import { business, menuCategories, menuItems } from "@/data/site";

export const metadata: Metadata = {
  title: "Menu | Cafe Lychee Tree, Dehradun",
  description: "Comfort food, café favourites and shakes at Cafe Lychee Tree, Nehru Colony, Dehradun.",
  alternates: { canonical: "/menu" },
};

export default function MenuPage() {
  const categories = menuCategories.filter((c) => c !== "All");

  return (
    <>
      <Navbar />
      <main>
        <section className="relative overflow-hidden bg-forest pt-40 pb-20 text-cream md:pt-52 md:pb-28">
          <div className="grain pointer-events-none absolute inset-0 opacity-[.07]" />
          <div className="relative mx-auto max-w-[1400px] px-5 md:px-12">
            <p className="eyebrow mb-6 text-ember">{business.name} — The Menu</p>
            <Lines
              as="h1"
              animateOnMount
              delay={0.2}
              className="display text-[20vw] md:text-[12vw] xl:text-[11rem]"
              lines={[
                <span key="c">
                  Come <em className="text-ember">hungry.</em>
                </span>,
              ]}
            />
            <p className="mt-8 max-w-md text-sm leading-relaxed text-cream/60">
              A preview built from dishes on public listings. The café’s complete menu and prices will appear here —
              until then, ask at the counter or call {business.phone.display}.
            </p>
          </div>
        </section>

        <section className="bg-cream py-20 md:py-32">
          <div className="mx-auto max-w-[1100px] space-y-20 px-5 md:space-y-28 md:px-12">
            {categories.map((cat, ci) => {
              const items = menuItems.filter((m) => m.category === cat);
              return (
                <Reveal key={cat}>
                  <div className="grid grid-cols-12 gap-y-6 md:gap-x-10">
                    <div className="col-span-12 md:col-span-4">
                      <p className="font-serif text-sm text-forest/40 italic">{String(ci + 1).padStart(2, "0")}</p>
                      <h2 className="font-serif text-5xl leading-none text-forest md:text-6xl">{cat}</h2>
                    </div>
                    <ul className="col-span-12 md:col-span-8">
                      {items.length === 0 && (
                        <li className="border-b border-dashed border-forest/20 py-5 font-serif text-xl text-forest/40 italic">
                          [Add {cat.toLowerCase()} in data/site.ts]
                        </li>
                      )}
                      {items.map((item) => (
                        <li key={item.name} className="group flex items-baseline gap-4 border-b border-forest/15 py-5">
                          <span className="font-serif text-3xl text-forest transition-all duration-500 group-hover:translate-x-1.5 group-hover:italic md:text-4xl">
                            {item.name}
                          </span>
                          <span className="mb-2 flex-1 border-b border-dotted border-forest/25" />
                          <span className="font-serif text-xl text-forest/70">
                            {item.price ?? <span className="text-xs tracking-[.2em] text-forest/40 uppercase">At café</span>}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </Reveal>
              );
            })}

            <div className="flex flex-wrap gap-3 pt-6">
              <CTA href={business.maps.directions} variant="dark" icon="pin" iconFirst>
                Get directions
              </CTA>
              <CTA href={`tel:${business.phone.tel}`} variant="ghostDark" icon="phone" iconFirst>
                Call us
              </CTA>
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <MobileCTA alwaysVisible />
    </>
  );
}
