import { business, reviews, type Review } from "@/data/site";
import { CTA } from "./CTA";
import { Lines, Reveal } from "./motion";

/**
 * Shows real reviews from data/site.ts. While that list is empty,
 * it renders clearly-marked placeholders — never invented testimonials.
 */

const placeholders: (Review & { placeholder: true })[] = [1, 2, 3].map((n) => ({
  quote: `[VERIFIED REVIEW ${n} — paste a real review from Google, Zomato or Tripadvisor in data/site.ts]`,
  author: "[Reviewer name]",
  source: "Google",
  placeholder: true,
}));

function Stars({ rating, muted }: { rating?: number; muted?: boolean }) {
  if (!rating && !muted) return null;
  return (
    <p className={`tracking-[.3em] ${muted ? "text-forest/20" : "text-wine"}`} aria-label={rating ? `${rating} out of 5` : "rating"}>
      {"★".repeat(rating ?? 5)}
    </p>
  );
}

export function Reviews() {
  const list = reviews.length ? reviews.map((r) => ({ ...r, placeholder: false })) : placeholders;
  const [lead, ...rest] = list;

  return (
    <section className="relative bg-cream-2 py-24 md:py-40">
      <div className="mx-auto max-w-[1400px] px-5 md:px-12">
        <Reveal>
          <p className="eyebrow mb-6 text-wine">
            <span className="mr-3 text-forest/40">(05)</span> Word of mouth
          </p>
        </Reveal>
        <Lines
          className="display text-[14vw] text-forest md:text-[7vw] xl:text-[6.5rem]"
          lines={["People keep", <em key="c">coming back.</em>]}
        />

        <div className="mt-14 grid grid-cols-12 gap-y-14 md:mt-24 md:gap-x-12">
          {/* Lead quote */}
          <Reveal className="col-span-12 md:col-span-7">
            <figure className={lead.placeholder ? "border border-dashed border-forest/25 p-6 md:p-10" : ""}>
              <span className="block font-serif text-8xl leading-[.5] text-wine/70 md:text-[9rem]" aria-hidden="true">
                “
              </span>
              <blockquote
                className={`mt-4 font-serif text-3xl leading-tight md:text-5xl ${lead.placeholder ? "text-forest/40 italic" : "text-forest"}`}
              >
                {lead.quote}
              </blockquote>
              <figcaption className="mt-8 flex flex-wrap items-center gap-x-5 gap-y-2">
                <Stars rating={lead.rating} muted={lead.placeholder} />
                <span className="text-sm font-semibold text-forest/80">{lead.author}</span>
                <span className="text-[10px] tracking-[.24em] text-forest/50 uppercase">via {lead.source}</span>
              </figcaption>
            </figure>
          </Reveal>

          <div className="col-span-12 space-y-10 md:col-span-5 md:pt-24">
            {rest.map((r, i) => (
              <Reveal key={i} delay={0.15 * (i + 1)}>
                <figure className={`border-t border-forest/20 pt-6 ${r.placeholder ? "border-dashed" : ""}`}>
                  <blockquote className={`font-serif text-xl leading-snug md:text-2xl ${r.placeholder ? "text-forest/40 italic" : "text-forest"}`}>
                    “{r.quote}”
                  </blockquote>
                  <figcaption className="mt-4 flex flex-wrap items-center gap-x-4 gap-y-1 text-xs">
                    <Stars rating={r.rating} muted={r.placeholder} />
                    <span className="font-semibold text-forest/80">{r.author}</span>
                    <span className="tracking-[.2em] text-forest/50 uppercase">via {r.source}</span>
                  </figcaption>
                </figure>
              </Reveal>
            ))}
            <Reveal delay={0.4}>
              <CTA href={business.maps.place} variant="textDark">
                Read reviews on Google
              </CTA>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
