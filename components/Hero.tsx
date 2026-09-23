"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { business, images } from "@/data/site";
import { CTA } from "./CTA";
import { Lines, ease } from "./motion";
import { Photo } from "./Photo";

export function Hero() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const imgY = useTransform(scrollYProgress, [0, 1], ["0%", "22%"]);
  const textY = useTransform(scrollYProgress, [0, 1], ["0%", "35%"]);
  const fade = useTransform(scrollYProgress, [0, 0.65], [1, 0]);

  return (
    <section
      id="home"
      ref={ref}
      className="relative h-[100svh] min-h-[640px] overflow-hidden bg-charcoal text-cream"
    >
      {/* Photograph — slow Ken Burns on load, parallax on scroll */}
      <motion.div style={{ y: imgY }} className="absolute inset-0 will-change-transform">
        <motion.div
          className="absolute inset-0"
          initial={{ scale: 1.22, opacity: 0 }}
          animate={{ scale: 1.04, opacity: 1 }}
          transition={{ duration: 3.2, ease }}
        >
          <Photo
            image={images.hero}
            priority
            sizes="100vw"
            labelClassName="bottom-auto! top-24 left-auto! right-5 text-right md:right-12 md:top-28"
          />
        </motion.div>
      </motion.div>

      {/* Light-control overlays */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/55 via-black/10 to-black/80" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_20%_80%,rgba(0,0,0,.55),transparent_60%)]" />
      <div className="grain pointer-events-none absolute inset-0 opacity-[.08] mix-blend-overlay" />

      {/* Vertical side note */}
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.8, duration: 1.4 }}
        className="eyebrow absolute top-1/2 right-7 z-10 hidden -translate-y-1/2 text-cream/55 [writing-mode:vertical-rl] lg:block xl:right-10"
      >
        Come for the food <span className="mx-3 text-ember">✦</span> Stay for the vibe
      </motion.p>

      <motion.div
        style={{ y: textY, opacity: fade }}
        className="relative z-10 mx-auto flex h-full max-w-[1400px] flex-col justify-end px-5 pb-28 md:px-12 md:pb-24"
      >
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease, delay: 0.5 }}
          className="mb-6 flex items-center gap-4 md:mb-8"
        >
          <span className="h-px w-10 bg-ember" />
          <p className="eyebrow leading-relaxed text-cream/85">
            <span className="block sm:inline">{business.name}</span>
            <span className="mx-2 hidden text-cream/40 sm:inline">/</span>
            <span className="block text-cream/60 sm:inline sm:text-cream/85">Dehradun • Nehru Colony</span>
          </p>
        </motion.div>

        <Lines
          as="h1"
          animateOnMount
          delay={0.6}
          className="display text-[16.5vw] sm:text-[12vw] md:text-[9.5vw] xl:text-[8.6rem]"
          lines={[
            <span key="a">
              <span className="sr-only">{business.name} — </span>Good food.
            </span>,
            <span key="b">Better company.</span>,
            <em key="e" className="text-ember/95">
              Longer evenings.
            </em>,
          ]}
        />

        <div className="mt-8 flex flex-col gap-8 md:mt-12 md:flex-row md:items-end md:justify-between">
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, ease, delay: 1.3 }}
            className="max-w-sm text-[15px] leading-relaxed text-cream/80 md:text-base"
          >
            A cozy corner in Dehradun for good food, conversations, music and unhurried evenings.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, ease, delay: 1.5 }}
            className="flex flex-wrap gap-3"
          >
            <CTA href="/#menu" variant="light">
              Explore the menu
            </CTA>
            <CTA href="/#visit" variant="ghostLight" icon="pin">
              Find us
            </CTA>
          </motion.div>
        </div>
      </motion.div>

      {/* Scroll cue */}
      <motion.a
        href="/#space"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2.2, duration: 1 }}
        className="absolute bottom-5 left-1/2 z-10 flex -translate-x-1/2 flex-col items-center gap-2.5 md:bottom-6 md:gap-3"
      >
        <span className="text-[10px] font-semibold tracking-[.32em] text-cream/60 uppercase">Scroll to explore ↓</span>
        <span className="relative block h-7 w-px md:h-10 overflow-hidden bg-cream/15">
          <span className="cue-line absolute inset-0 bg-cream/80" />
        </span>
      </motion.a>
    </section>
  );
}
