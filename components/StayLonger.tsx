"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { business, images } from "@/data/site";
import { Lines, Reveal } from "./motion";
import { Photo } from "./Photo";

export function StayLonger() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], ["-12%", "12%"]);

  return (
    <section ref={ref} className="relative flex min-h-[110svh] items-center overflow-hidden bg-charcoal text-cream">
      <motion.div style={{ y }} className="absolute -inset-y-[14%] inset-x-0">
        <Photo image={images.stay} sizes="100vw" labelClassName="bottom-auto! top-[18%] left-auto! right-5 md:right-12" />
      </motion.div>
      <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/45 to-black/10" />
      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />

      <div className="relative mx-auto w-full max-w-[1400px] px-5 py-32 md:px-12">
        <Reveal>
          <p className="eyebrow mb-10 inline-flex items-center gap-3 border border-cream/25 px-4 py-2 text-cream/80">
            <span className="live-dot h-1.5 w-1.5 rounded-full bg-ember" />
            Dehradun • Nehru Colony{business.established ? ` • Est. ${business.established}` : ""}
          </p>
        </Reveal>

        <Lines
          className="display text-[18vw] md:text-[10vw] xl:text-[9.5rem]"
          lines={["Stay a little", <em key="l" className="text-ember">longer.</em>]}
        />

        <div className="mt-12 max-w-lg space-y-1 font-serif text-2xl leading-snug font-light md:mt-16 md:text-3xl">
          {["Maybe it’s the lights.", "Maybe it’s the music.", "Maybe it’s the people across the table."].map((t, i) => (
            <Reveal key={t} delay={0.15 * i}>
              <p className={i === 2 ? "italic" : ""}>{t}</p>
            </Reveal>
          ))}
        </div>
        <Reveal delay={0.5}>
          <p className="mt-8 max-w-md text-[15px] leading-relaxed text-cream/70">
            Whatever it is, Lychee Tree has a way of making an ordinary evening feel like a plan.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
