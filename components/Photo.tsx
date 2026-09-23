import Image from "next/image";
import type { SiteImage, Tone } from "@/data/site";

/**
 * Renders the café's real photo when `image.src` is set.
 * Otherwise renders an atmospheric, clearly-labelled placeholder
 * (warm bokeh + string lights) so layouts still feel like evenings.
 * Always fills its (relatively-positioned) parent.
 */

type Props = {
  image: SiteImage;
  sizes?: string;
  priority?: boolean;
  className?: string;
  labelClassName?: string;
  hideLabel?: boolean;
};

const palettes: Record<Tone, { base: string; mid: string; lights: string[] }> = {
  amber: {
    base: "#15130d",
    mid: "#2c2415",
    lights: ["236,170,92", "255,214,150", "196,112,58", "140,150,90"],
  },
  green: {
    base: "#0f1610",
    mid: "#1d2a1c",
    lights: ["132,160,96", "226,176,104", "90,120,70", "255,210,150"],
  },
  wine: {
    base: "#170e0e",
    mid: "#2e1716",
    lights: ["176,70,60", "240,176,110", "120,40,40", "255,206,150"],
  },
};

function hash(s: string) {
  let h = 2166136261;
  for (let i = 0; i < s.length; i++) h = Math.imul(h ^ s.charCodeAt(i), 16777619);
  return h >>> 0;
}

function rng(seed: number) {
  return () => {
    seed = (Math.imul(seed, 1664525) + 1013904223) >>> 0;
    return seed / 4294967296;
  };
}

const f = (n: number) => n.toFixed(1);

function placeholderBackground(image: SiteImage) {
  const p = palettes[image.tone ?? "amber"];
  const r = rng(hash(image.label + image.alt));
  const layers: string[] = [];

  // String of café lights across the upper third
  if (r() > 0.3) {
    const y0 = 8 + r() * 22;
    const sag = 6 + r() * 10;
    const n = 11 + Math.floor(r() * 6);
    for (let i = 0; i < n; i++) {
      const x = 4 + (92 / (n - 1)) * i;
      const t = (x - 50) / 46;
      const y = y0 + sag * (1 - t * t);
      layers.push(
        `radial-gradient(circle at ${f(x)}% ${f(y)}%, rgba(255,226,170,.95) 0%, rgba(255,190,110,.45) .45%, rgba(255,170,90,.12) 1.6%, transparent 3%)`
      );
    }
  }

  // Out-of-focus bokeh
  for (let i = 0; i < 9; i++) {
    const c = p.lights[Math.floor(r() * p.lights.length)];
    const size = 5 + r() * 18;
    const a = 0.12 + r() * 0.35;
    layers.push(
      `radial-gradient(circle at ${f(r() * 100)}% ${f(20 + r() * 75)}%, rgba(${c},${a.toFixed(2)}) 0%, rgba(${c},${(a * 0.4).toFixed(2)}) ${f(size * 0.55)}%, transparent ${f(size)}%)`
    );
  }

  // Warm floor glow + base
  layers.push(`radial-gradient(ellipse 90% 60% at ${f(30 + r() * 40)}% 100%, ${p.mid} 0%, transparent 70%)`);
  layers.push(`linear-gradient(180deg, ${p.base} 0%, ${p.mid} 55%, ${p.base} 100%)`);

  return layers.join(",");
}

export function Photo({ image, sizes = "100vw", priority, className = "", labelClassName = "", hideLabel }: Props) {
  if (image.src) {
    return (
      <Image
        src={image.src}
        alt={image.alt}
        fill
        sizes={sizes}
        priority={priority}
        className={`object-cover ${className}`}
      />
    );
  }

  return (
    <div
      role="img"
      aria-label={`${image.alt} (placeholder)`}
      className={`absolute inset-0 overflow-hidden ${className}`}
      style={{ background: placeholderBackground(image) }}
    >
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_40%,rgba(0,0,0,.55)_100%)]" />
      <div className="grain absolute inset-0 opacity-[.18] mix-blend-overlay" />
      {!hideLabel && (
        <span
          className={`absolute bottom-3 left-3 z-[1] max-w-[85%] font-mono text-[9px] leading-tight tracking-[.18em] text-[#f2e9d8]/60 uppercase md:text-[10px] ${labelClassName}`}
        >
          [{image.label}]
        </span>
      )}
    </div>
  );
}
