"use client";

import { AnimatePresence, motion } from "framer-motion";
import { Navigation, Phone, UtensilsCrossed } from "lucide-react";
import { useEffect, useState } from "react";
import { business } from "@/data/site";
import { ease } from "./motion";

/** Sticky bottom action bar on phones — appears once the hero is scrolled past. */
export function MobileCTA({ alwaysVisible = false }: { alwaysVisible?: boolean }) {
  const [show, setShow] = useState(alwaysVisible);

  useEffect(() => {
    if (alwaysVisible) return;
    const onScroll = () => setShow(window.scrollY > window.innerHeight * 0.6);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [alwaysVisible]);

  const items = [
    { label: "Menu", href: "/#menu", Icon: UtensilsCrossed },
    { label: "Directions", href: business.maps.directions, Icon: Navigation },
    { label: "Call", href: `tel:${business.phone.tel}`, Icon: Phone },
  ];

  return (
    <AnimatePresence>
      {show && (
        <motion.nav
          aria-label="Quick actions"
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          transition={{ duration: 0.7, ease }}
          className="fixed inset-x-3 bottom-[max(0.75rem,env(safe-area-inset-bottom))] z-40 grid grid-cols-3 overflow-hidden rounded-full border border-cream/10 bg-forest/90 text-cream shadow-[0_20px_50px_-10px_rgba(0,0,0,.6)] backdrop-blur-xl md:hidden"
        >
          {items.map(({ label, href, Icon }, i) => (
            <a
              key={label}
              href={href}
              {...(href.startsWith("http") ? { target: "_blank", rel: "noopener noreferrer" } : {})}
              className={`flex h-14 items-center justify-center gap-2 text-[10px] font-semibold tracking-[.2em] uppercase active:bg-cream/10 ${
                i > 0 ? "border-l border-cream/10" : ""
              } ${label === "Directions" ? "bg-cream/[.06]" : ""}`}
            >
              <Icon className="h-4 w-4" strokeWidth={1.6} />
              {label}
            </a>
          ))}
        </motion.nav>
      )}
    </AnimatePresence>
  );
}
