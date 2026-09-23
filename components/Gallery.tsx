"use client";

import { motion } from "framer-motion";
import { business, gallery } from "@/data/site";
import { CTA } from "./CTA";
import { InstagramIcon } from "./icons";
import { Lines, Reveal, ease } from "./motion";
import { Photo } from "./Photo";

export function Gallery() {
  return (
    <section id="moments" className="relative bg-cream py-24 md:py-40">
      <div className="mx-auto max-w-[1400px] px-5 md:px-12">
        <div className="mb-12 flex flex-col gap-8 md:mb-20 md:flex-row md:items-end md:justify-between">
          <div>
            <Reveal>
              <a
                href={business.instagram.url}
                target="_blank"
                rel="noopener noreferrer"
                className="eyebrow mb-6 inline-flex items-center gap-3 text-wine"
              >
                <span className="text-forest/40">(04)</span>
                <span className="live-dot h-1.5 w-1.5 rounded-full bg-wine" />
                {business.instagram.handle}
              </a>
            </Reveal>
            <Lines
              className="display text-[13vw] text-forest md:text-[6.5vw] xl:text-[6.25rem]"
              lines={["From our little corner", <em key="d">of Dehradun.</em>]}
            />
          </div>
          <Reveal delay={0.2}>
            <CTA href={business.instagram.url} variant="dark" icon="camera" iconFirst>
              Follow the moments →
            </CTA>
          </Reveal>
        </div>

        <div className="columns-2 gap-3 md:columns-3 md:gap-5 lg:columns-4">
          {gallery.map((g, i) => (
            <motion.a
              key={g.image.label}
              href={business.instagram.url}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "0px 0px -8% 0px" }}
              transition={{ duration: 1, ease, delay: (i % 4) * 0.1 }}
              className={`group relative mb-3 block break-inside-avoid overflow-hidden md:mb-5 ${g.ratio}`}
              aria-label="View on Instagram"
            >
              <div className="absolute inset-0 transition-transform duration-[1.4s] ease-soft group-hover:scale-[1.07]">
                <Photo image={g.image} sizes="(min-width: 1024px) 25vw, (min-width: 768px) 33vw, 50vw" />
              </div>
              <div className="absolute inset-0 flex items-center justify-center bg-forest/0 transition-colors duration-500 group-hover:bg-forest/45">
                <span className="flex translate-y-3 items-center gap-2 text-[10px] font-semibold tracking-[.24em] text-cream uppercase opacity-0 transition-all duration-500 ease-soft group-hover:translate-y-0 group-hover:opacity-100">
                  <InstagramIcon className="h-4 w-4" /> View
                </span>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
