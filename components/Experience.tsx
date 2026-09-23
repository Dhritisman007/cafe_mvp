"use client";

import { motion } from "framer-motion";
import { experiences } from "@/data/site";
import { Lines, Reveal, ease } from "./motion";
import { Photo } from "./Photo";

// Editorial layout on desktop: one tall portrait, one wide landscape, two smaller crops.
const layout = [
  "md:col-span-5 md:row-span-4",
  "md:col-span-7 md:row-span-2",
  "md:col-span-4 md:row-span-2",
  "md:col-span-3 md:row-span-2",
];

export function Experience() {
  return (
    <section className="relative overflow-hidden bg-forest pt-56 pb-24 text-cream md:pt-96 md:pb-36">
      <div className="grain pointer-events-none absolute inset-0 opacity-[.06]" />
      <div className="relative mx-auto max-w-[1400px] px-5 md:px-12">
        <div className="mb-12 flex flex-col gap-6 md:mb-16 md:flex-row md:items-end md:justify-between">
          <div>
            <Reveal>
              <p className="eyebrow mb-6 text-ember">
                <span className="mr-3 text-cream/40">(02)</span> Every kind of evening
              </p>
            </Reveal>
            <Lines
              className="display text-[14vw] md:text-[6.5vw] xl:text-[6rem]"
              lines={["Pick a mood.", <em key="e" className="text-cream/70">We’ll save the table.</em>]}
            />
          </div>
          <Reveal delay={0.2}>
            <p className="max-w-xs text-sm leading-relaxed text-cream/60">
              Mornings, dates, long weekends and live nights — the same corner, a different feeling every time.
            </p>
          </Reveal>
        </div>

        {/* Mobile: swipeable. Desktop: editorial grid. */}
        <div className="no-scrollbar -mx-5 flex snap-x snap-mandatory gap-3 overflow-x-auto px-5 pb-2 md:mx-0 md:grid md:grid-cols-12 md:auto-rows-[170px] md:gap-4 md:overflow-visible md:px-0 lg:auto-rows-[200px]">
          {experiences.map((exp, i) => (
            <motion.article
              key={exp.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "0px 0px -10% 0px" }}
              transition={{ duration: 0.55, ease, delay: i * 0.07 }}
              className={`group relative aspect-[3/4] w-[78vw] shrink-0 snap-start overflow-hidden sm:w-[46vw] md:aspect-auto md:w-auto ${layout[i]}`}
            >
              <div className="absolute inset-0 transition-transform duration-500 ease-soft group-hover:scale-[1.06]">
                <Photo image={exp.image} sizes="(min-width: 768px) 40vw, 80vw" labelClassName="bottom-auto! top-3 left-auto! right-3 text-right" />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/15 to-transparent transition-opacity duration-500 group-hover:opacity-90" />
              <div className="absolute inset-0 bg-wine/0 mix-blend-multiply transition-colors duration-500 group-hover:bg-wine/20" />

              <span className="absolute top-4 left-4 font-serif text-lg text-cream/70 italic md:top-5 md:left-5">
                0{i + 1}
              </span>
              <div className="absolute inset-x-0 bottom-0 p-5 md:p-7">
                <h3 className="font-serif text-4xl leading-none font-light tracking-tight break-words md:text-3xl lg:text-5xl">
                  {exp.title}
                </h3>
                <p className="mt-3 max-w-xs text-sm leading-relaxed text-cream/75 transition-all duration-500 ease-soft md:translate-y-2 md:opacity-80 md:group-hover:translate-y-0 md:group-hover:opacity-100">
                  {exp.text}
                </p>
                <span className="mt-4 block h-px w-10 bg-ember transition-all duration-500 ease-soft group-hover:w-20" />
              </div>
            </motion.article>
          ))}
        </div>
        <p className="mt-4 text-[10px] tracking-[.24em] text-cream/40 uppercase md:hidden">Swipe →</p>
      </div>
    </section>
  );
}
