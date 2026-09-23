"use client";

import { AnimatePresence, motion } from "framer-motion";
import { MapPin, Menu, Phone, X } from "lucide-react";
import { useEffect, useState } from "react";
import { business, nav } from "@/data/site";
import { LycheeMark } from "./icons";
import { ease } from "./motion";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.documentElement.style.overflow = open ? "hidden" : "";
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  return (
    <>
      <motion.header
        initial={{ y: -30, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1.2, ease, delay: 0.2 }}
        className="fixed inset-x-0 top-0 z-50 px-3 pt-3 md:px-6 md:pt-4"
      >
        <nav
          aria-label="Main"
          className={`mx-auto flex items-center justify-between rounded-full text-cream transition-all duration-700 ease-soft ${
            scrolled
              ? "max-w-5xl border border-cream/10 bg-forest/90 py-2 pr-2 pl-5 shadow-[0_10px_40px_-10px_rgba(0,0,0,.5)] backdrop-blur-xl"
              : "max-w-[1400px] border border-transparent py-3 pr-2 pl-2 md:pl-4"
          }`}
        >
          <a href="/#home" className="group flex items-center gap-2.5" aria-label={`${business.name} — home`}>
            <LycheeMark className="h-7 w-7 text-cream transition-transform duration-700 ease-soft group-hover:rotate-[-12deg]" />
            <span className="font-serif text-lg tracking-[.1em] uppercase sm:text-xl sm:tracking-[.14em]">{business.shortName}</span>
          </a>

          <ul className="hidden items-center gap-8 lg:flex">
            {nav.map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  className="group relative py-2 text-[11px] font-semibold tracking-[.24em] text-cream/80 uppercase transition-colors hover:text-cream"
                >
                  {item.label}
                  <span className="absolute -bottom-0.5 left-0 h-px w-full origin-right scale-x-0 bg-ember transition-transform duration-500 ease-soft group-hover:origin-left group-hover:scale-x-100" />
                </a>
              </li>
            ))}
          </ul>

          <div className="flex items-center gap-2">
            <a
              href={business.maps.directions}
              target="_blank"
              rel="noopener noreferrer"
              className="group hidden h-11 items-center gap-2 rounded-full bg-cream px-5 text-[11px] font-semibold tracking-[.22em] text-forest uppercase transition-colors hover:bg-white md:inline-flex"
            >
              <MapPin className="anim-pin h-4 w-4" strokeWidth={1.6} />
              Get directions
            </a>
            <button
              type="button"
              onClick={() => setOpen(true)}
              className="grid h-11 w-11 place-items-center rounded-full border border-cream/25 lg:hidden"
              aria-label="Open menu"
              aria-expanded={open}
            >
              <Menu className="h-5 w-5" strokeWidth={1.5} />
            </button>
          </div>
        </nav>
      </motion.header>

      <AnimatePresence>
        {open && (
          <motion.div
            className="fixed inset-0 z-[70] flex flex-col bg-forest text-cream lg:hidden"
            initial={{ clipPath: "inset(0 0 100% 0)" }}
            animate={{ clipPath: "inset(0 0 0% 0)" }}
            exit={{ clipPath: "inset(0 0 100% 0)" }}
            transition={{ duration: 0.8, ease }}
            role="dialog"
            aria-modal="true"
            aria-label="Menu"
          >
            <div className="grain pointer-events-none absolute inset-0 opacity-[.07]" />
            <div className="relative flex items-center justify-between px-5 pt-6">
              <span className="flex items-center gap-2.5">
                <LycheeMark className="h-7 w-7" />
                <span className="font-serif text-lg tracking-[.1em] uppercase sm:text-xl sm:tracking-[.14em]">{business.shortName}</span>
              </span>
              <button
                type="button"
                onClick={() => setOpen(false)}
                className="grid h-11 w-11 place-items-center rounded-full border border-cream/25"
                aria-label="Close menu"
              >
                <X className="h-5 w-5" strokeWidth={1.5} />
              </button>
            </div>

            <ul className="relative mt-14 flex-1 space-y-1 px-5">
              {nav.map((item, i) => (
                <li key={item.href} className="overflow-hidden">
                  <motion.a
                    href={item.href}
                    onClick={() => setOpen(false)}
                    initial={{ y: "100%" }}
                    animate={{ y: "0%" }}
                    transition={{ duration: 0.9, ease, delay: 0.25 + i * 0.06 }}
                    className="flex items-baseline gap-4 py-1 font-serif text-[13vw] leading-[1.05] font-light"
                  >
                    <span className="font-sans text-[10px] tracking-[.2em] text-cream/40">0{i + 1}</span>
                    {item.label}
                  </motion.a>
                </li>
              ))}
            </ul>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.7, duration: 0.8 }}
              className="relative space-y-5 border-t border-cream/10 px-5 pt-6 pb-10"
            >
              <p className="text-sm leading-relaxed text-cream/60">{business.address.lines.join(" ")}</p>
              <div className="grid grid-cols-2 gap-3">
                <a
                  href={business.maps.directions}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex h-13 items-center justify-center gap-2 rounded-full bg-cream text-[11px] font-semibold tracking-[.2em] text-forest uppercase"
                >
                  <MapPin className="h-4 w-4" strokeWidth={1.6} /> Directions
                </a>
                <a
                  href={`tel:${business.phone.tel}`}
                  className="flex h-13 items-center justify-center gap-2 rounded-full border border-cream/30 text-[11px] font-semibold tracking-[.2em] uppercase"
                >
                  <Phone className="h-4 w-4" strokeWidth={1.6} /> Call
                </a>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
