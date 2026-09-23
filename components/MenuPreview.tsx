"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useMemo, useState } from "react";
import { images, menuCategories, menuItems } from "@/data/site";
import { CTA } from "./CTA";
import { ImageReveal, Lines, Reveal, ease } from "./motion";
import { Photo } from "./Photo";

type Filter = (typeof menuCategories)[number];

export function MenuPreview() {
  const [filter, setFilter] = useState<Filter>("All");
  const items = useMemo(
    () => (filter === "All" ? menuItems : menuItems.filter((m) => m.category === filter)),
    [filter]
  );
  const [activeName, setActiveName] = useState(menuItems[0]?.name);
  const active = items.find((m) => m.name === activeName) ?? items[0];

  return (
    <section id="menu" className="relative bg-cream pt-24 pb-20 md:pt-40 md:pb-32">
      <div className="mx-auto max-w-[1400px] px-5 md:px-12">
        {/* Header */}
        <div className="grid grid-cols-12 gap-y-8 md:gap-x-8">
          <div className="col-span-12 md:col-span-8">
            <Reveal>
              <p className="eyebrow mb-6 text-wine">
                <span className="mr-3 text-forest/40">(03)</span> The Kitchen
              </p>
            </Reveal>
            <Lines
              className="display text-[22vw] text-forest md:text-[13vw] xl:text-[12rem]"
              lines={[
                <span key="c">
                  Come <em>hungry.</em>
                </span>,
              ]}
            />
          </div>
          <Reveal delay={0.2} className="col-span-12 self-end md:col-span-4 md:pb-6">
            <p className="max-w-xs font-serif text-2xl leading-snug text-forest/80 italic">
              Comfort food, café favourites and flavours for every kind of craving.
            </p>
          </Reveal>
        </div>

        {/* Category filter */}
        <div
          role="tablist"
          aria-label="Menu categories"
          className="no-scrollbar -mx-5 mt-12 flex gap-7 overflow-x-auto border-b border-forest/15 px-5 md:mx-0 md:mt-20 md:gap-10 md:px-0"
        >
          {menuCategories.map((c) => (
            <button
              key={c}
              role="tab"
              aria-selected={filter === c}
              onClick={() => setFilter(c)}
              className={`relative shrink-0 pb-4 text-[11px] font-semibold tracking-[.24em] whitespace-nowrap uppercase transition-colors ${
                filter === c ? "text-forest" : "text-forest/45 hover:text-forest/80"
              }`}
            >
              {c}
              {filter === c && (
                <motion.span layoutId="menu-tab" className="absolute inset-x-0 -bottom-px h-[2px] bg-wine" transition={{ duration: 0.6, ease }} />
              )}
            </button>
          ))}
        </div>

        {/* Editorial list + sticky image */}
        <div className="mt-10 grid grid-cols-12 md:mt-14 md:gap-x-8">
          <div className="relative col-span-5 hidden md:block">
            <div className="sticky top-28">
              <div className="relative aspect-[4/5] overflow-hidden bg-forest">
                <AnimatePresence mode="popLayout" initial={false}>
                  {active && (
                    <motion.div
                      key={active.name}
                      className="absolute inset-0"
                      initial={{ opacity: 0, scale: 1.08 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 0.9, ease }}
                    >
                      <Photo image={active.image} sizes="40vw" />
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
              <div className="mt-4 flex items-baseline justify-between text-forest/60">
                <span className="font-serif text-lg italic">{active?.name ?? "—"}</span>
                <span className="text-[10px] tracking-[.24em] uppercase">{active?.category}</span>
              </div>
            </div>
          </div>

          <div className="col-span-12 md:col-span-7">
            <AnimatePresence mode="wait">
              <motion.ul
                key={filter}
                initial="hidden"
                animate="show"
                exit={{ opacity: 0, transition: { duration: 0.2 } }}
                variants={{ show: { transition: { staggerChildren: 0.06 } } }}
              >
                {items.length === 0 && (
                  <motion.li
                    variants={{ hidden: { opacity: 0, y: 16 }, show: { opacity: 1, y: 0 } }}
                    className="border-b border-forest/15 py-10 font-serif text-2xl text-forest/50 italic"
                  >
                    {filter} — coming soon to this page. Ask at the counter.
                  </motion.li>
                )}
                {items.map((item, i) => (
                  <motion.li
                    key={item.name}
                    variants={{ hidden: { opacity: 0, y: 24 }, show: { opacity: 1, y: 0, transition: { duration: 0.8, ease } } }}
                    onMouseEnter={() => setActiveName(item.name)}
                    onFocus={() => setActiveName(item.name)}
                    tabIndex={0}
                    className="group relative flex cursor-default items-center gap-4 border-b border-forest/15 py-5 outline-none md:gap-6 md:py-7"
                  >
                    {/* Thumbnail on mobile */}
                    <div className="relative aspect-square w-20 shrink-0 overflow-hidden md:hidden">
                      <Photo image={item.image} sizes="80px" hideLabel />
                    </div>
                    <span className="hidden w-8 font-serif text-sm text-forest/40 italic md:block">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <div className="min-w-0 flex-1">
                      <h3 className="font-serif text-[2rem] leading-none text-forest transition-all duration-700 ease-soft group-hover:translate-x-2 group-hover:italic group-focus:italic md:text-6xl">
                        {item.name}
                      </h3>
                      <p className="mt-2 text-[10px] font-semibold tracking-[.24em] text-forest/45 uppercase">
                        {item.category}
                        {item.example && <span className="ml-3 text-wine/70 normal-case tracking-normal italic">example dish</span>}
                      </p>
                      {item.description && <p className="mt-2 text-sm text-charcoal/65">{item.description}</p>}
                    </div>
                    {item.price && <span className="font-serif text-2xl text-forest">{item.price}</span>}
                    <span
                      aria-hidden="true"
                      className="hidden shrink-0 -translate-x-2 text-lg text-wine opacity-0 transition-all duration-500 ease-soft group-hover:translate-x-0 group-hover:opacity-100 md:block"
                    >
                      ✦
                    </span>
                  </motion.li>
                ))}
              </motion.ul>
            </AnimatePresence>

            <div className="mt-10 flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
              <p className="max-w-sm text-xs leading-relaxed text-charcoal/50">
                A few dishes from public listings, shown as examples. Prices and the full menu are at the café.
              </p>
              <CTA href="/menu" variant="textDark">
                View full menu
              </CTA>
            </div>
          </div>
        </div>

        {/* Mixed-ratio food photography */}
        <div className="mt-24 grid grid-cols-12 items-start gap-3 md:mt-36 md:gap-6">
          {images.foodStrip.map((f, i) => (
            <figure
              key={f.caption}
              className={
                i === 0
                  ? "col-span-6 md:col-span-3 md:mt-24"
                  : i === 1
                    ? "col-span-12 row-start-1 md:col-span-6 md:row-start-auto"
                    : "col-span-6 mt-12 md:col-span-3 md:mt-40"
              }
            >
              <ImageReveal className={`group ${f.ratio}`} delay={i * 0.12}>
                <div className="absolute inset-0 transition-transform duration-[1.4s] ease-soft group-hover:scale-105">
                  <Photo image={f.image} sizes="(min-width: 768px) 45vw, 100vw" />
                </div>
              </ImageReveal>
              <Reveal delay={0.2 + i * 0.1}>
                <figcaption className="mt-3 font-serif text-base text-forest/70 italic md:text-lg">{f.caption}</figcaption>
              </Reveal>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
