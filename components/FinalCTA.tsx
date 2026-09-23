"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { business, images } from "@/data/site";
import { CTA } from "./CTA";
import { Lines, Reveal } from "./motion";
import { Photo } from "./Photo";

export function FinalCTA() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end end"] });
  const scale = useTransform(scrollYProgress, [0, 1], [1.25, 1]);

  return (
    <section ref={ref} className="relative flex h-[100svh] min-h-[600px] items-center justify-center overflow-hidden bg-charcoal text-cream">
      <motion.div style={{ scale }} className="absolute inset-0">
        <Photo image={images.finalCta} sizes="100vw" labelClassName="bottom-auto! top-6 left-auto! right-5 md:right-12" />
      </motion.div>
      <div className="absolute inset-0 bg-black/55" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_20%,rgba(0,0,0,.6)_100%)]" />

      <div className="relative px-5 text-center">
        <Reveal>
          <p className="eyebrow mb-8 text-ember">Tonight, maybe?</p>
        </Reveal>
        <Lines
          className="display text-[17vw] md:text-[10vw] xl:text-[10rem]"
          lines={["Your table", <em key="w">is waiting.</em>]}
        />
        <Reveal delay={0.3}>
          <p className="mt-8 font-serif text-xl text-cream/80 italic md:text-2xl">Good food. Good people. Good evenings.</p>
        </Reveal>
        <Reveal delay={0.45}>
          <div className="mt-10 flex flex-wrap justify-center gap-3">
            <CTA href={business.maps.directions} variant="light" icon="pin" iconFirst>
              Get directions
            </CTA>
            <CTA href="/#menu" variant="ghostLight">
              Explore menu
            </CTA>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
