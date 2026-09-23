"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { images } from "@/data/site";
import { ImageReveal, Lines, Reveal } from "./motion";
import { Photo } from "./Photo";

export function Vibe() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const drift = useTransform(scrollYProgress, [0, 1], ["8%", "-8%"]);

  return (
    <section id="space" ref={ref} className="relative z-10 bg-cream pt-24 md:pt-40">
      <div className="mx-auto grid max-w-[1400px] grid-cols-12 gap-x-4 px-5 md:gap-x-8 md:px-12">
        {/* Copy */}
        <div className="col-span-12 md:col-span-6 md:pt-10">
          <Reveal>
            <p className="eyebrow mb-8 flex items-center gap-3 text-wine">
              <span className="text-forest/40">(01)</span> The Space
            </p>
          </Reveal>
          <Lines
            className="display text-[17vw] text-forest md:text-[8vw] xl:text-[7.5rem]"
            lines={["More than", <em key="c">a café.</em>]}
          />

          <div className="mt-10 max-w-md space-y-1 font-serif text-2xl leading-snug text-forest/85 md:mt-14 md:text-[1.75rem]">
            <Reveal delay={0.1}>
              <p>Some places are meant for a quick coffee.</p>
            </Reveal>
            <Reveal delay={0.2}>
              <p className="italic">Some places make you forget to check the time.</p>
            </Reveal>
          </div>
          <Reveal delay={0.3}>
            <p className="mt-6 max-w-md text-[15px] leading-relaxed text-charcoal/70">
              Cafe Lychee Tree is somewhere in between — a warm, easygoing space in the heart of Dehradun made for
              conversations, comfort food, music and moments worth staying for.
            </p>
          </Reveal>

          {/* Secondary, offset image */}
          <div className="mt-14 flex items-end gap-5 md:mt-20">
            <ImageReveal className="aspect-[4/3] w-[62%] md:w-[58%]" delay={0.1}>
              <Photo image={images.vibeSecondary} sizes="(min-width: 768px) 30vw, 60vw" />
            </ImageReveal>
            <Reveal delay={0.4} className="pb-2">
              <p className="font-serif text-lg leading-tight text-forest/70 italic">
                Nehru Colony,
                <br />
                after sundown.
              </p>
            </Reveal>
          </div>
        </div>

        {/* Hero image — bleeds into the next section */}
        <div className="relative col-span-12 mt-14 md:col-span-5 md:col-start-8 md:mt-0 md:self-end">
          <motion.div style={{ y: drift }} className="relative -mb-40 md:-mb-72">
            <ImageReveal className="aspect-[3/4] w-full shadow-[0_40px_80px_-30px_rgba(0,0,0,.55)]">
              <Photo image={images.vibeMain} sizes="(min-width: 768px) 42vw, 100vw" />
            </ImageReveal>
            <span className="absolute -top-4 -left-4 hidden h-24 w-24 rounded-full border border-wine/40 md:block" />
          </motion.div>
        </div>
      </div>
      <div className="h-16 md:h-24" />
    </section>
  );
}
