"use client";

import { motion } from "framer-motion";
import type { ElementType, ReactNode } from "react";

export const ease = [0.22, 1, 0.36, 1] as const;
const viewport = { once: true, margin: "0px 0px -12% 0px" } as const;

/** Fade + lift when scrolled into view. */
export function Reveal({
  children,
  delay = 0,
  y = 28,
  className,
}: {
  children: ReactNode;
  delay?: number;
  y?: number;
  className?: string;
}) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={viewport}
      transition={{ duration: 1.1, ease, delay }}
    >
      {children}
    </motion.div>
  );
}

/** Masked line-by-line headline reveal. */
export function Lines({
  lines,
  as: Tag = "h2",
  className = "",
  delay = 0,
  animateOnMount = false,
}: {
  lines: ReactNode[];
  as?: ElementType;
  className?: string;
  delay?: number;
  animateOnMount?: boolean;
}) {
  return (
    <Tag className={className}>
      {lines.map((line, i) => (
        <motion.span
          key={i}
          className="block overflow-hidden pb-[0.12em] -mb-[0.12em]"
          initial="hidden"
          {...(animateOnMount ? { animate: "show" } : { whileInView: "show", viewport })}
        >
          <motion.span
            className="block"
            variants={{ hidden: { y: "115%" }, show: { y: "0%" } }}
            transition={{ duration: 1.25, ease, delay: delay + i * 0.1 }}
          >
            {line}
          </motion.span>
        </motion.span>
      ))}
    </Tag>
  );
}

/** Image that unveils (clip + settle) when it enters the viewport. */
export function ImageReveal({
  children,
  className = "",
  delay = 0,
}: {
  children: ReactNode;
  className?: string;
  delay?: number;
}) {
  return (
    <motion.div
      className={`relative overflow-hidden ${className}`}
      initial={{ clipPath: "inset(14% 10% 14% 10%)", opacity: 0.4 }}
      whileInView={{ clipPath: "inset(0% 0% 0% 0%)", opacity: 1 }}
      viewport={viewport}
      transition={{ duration: 1.5, ease, delay }}
    >
      <motion.div
        className="absolute inset-0"
        initial={{ scale: 1.2 }}
        whileInView={{ scale: 1 }}
        viewport={viewport}
        transition={{ duration: 1.9, ease, delay }}
      >
        {children}
      </motion.div>
    </motion.div>
  );
}
