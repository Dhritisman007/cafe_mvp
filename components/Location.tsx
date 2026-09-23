import { business, hours } from "@/data/site";
import { CTA } from "./CTA";
import { Lines, Reveal } from "./motion";

export function Location() {
  return (
    <section id="visit" className="relative overflow-hidden bg-forest py-24 text-cream md:py-40">
      <div className="grain pointer-events-none absolute inset-0 opacity-[.06]" />
      <div className="relative mx-auto grid max-w-[1400px] grid-cols-12 gap-y-14 px-5 md:gap-x-12 md:px-12">
        <div className="col-span-12 md:col-span-5">
          <Reveal>
            <p className="eyebrow mb-6 text-ember">
              <span className="mr-3 text-cream/40">(06)</span> Visit
            </p>
          </Reveal>
          <Lines className="display text-[17vw] md:text-[8vw] xl:text-[7.5rem]" lines={["Come", <em key="f">find us.</em>]} />

          <Reveal delay={0.1}>
            <address className="mt-12 not-italic">
              <p className="eyebrow mb-3 text-cream/45">{business.name}</p>
              <p className="font-serif text-2xl leading-snug md:text-3xl">
                {business.address.lines.map((l) => (
                  <span key={l} className="block">
                    {l}
                  </span>
                ))}
              </p>
              <a
                href={`tel:${business.phone.tel}`}
                className="mt-6 inline-block font-serif text-2xl text-ember transition-opacity hover:opacity-80 md:text-3xl"
              >
                {business.phone.display}
              </a>
            </address>
          </Reveal>

          <Reveal delay={0.2}>
            <div className="mt-10 border-t border-cream/15 pt-6">
              <p className="eyebrow mb-4 text-cream/45">Hours</p>
              <dl className="space-y-2">
                {hours.schedule.map((h) => (
                  <div key={h.label} className="flex justify-between gap-6 text-sm">
                    <dt className="text-cream/70">{h.label}</dt>
                    <dd className="font-semibold">{hours.verified ? h.time : `approx. ${h.time}`}</dd>
                  </div>
                ))}
              </dl>
              {!hours.verified && <p className="mt-3 text-xs text-cream/45 italic">{hours.note}</p>}
            </div>
          </Reveal>

          <Reveal delay={0.3}>
            <div className="mt-10 flex flex-wrap gap-3">
              <CTA href={business.maps.directions} variant="light" icon="pin" iconFirst>
                Get directions
              </CTA>
              <CTA href={`tel:${business.phone.tel}`} variant="ghostLight" icon="phone" iconFirst>
                Call us
              </CTA>
            </div>
          </Reveal>
        </div>

        {/* Map */}
        <Reveal delay={0.15} className="col-span-12 md:col-span-7">
          <div className="relative aspect-[4/5] overflow-hidden border border-cream/15 bg-forest-2 sm:aspect-[4/3] md:aspect-auto md:h-full md:min-h-[560px]">
            <iframe
              title={`Map showing ${business.name}, Nehru Colony, Dehradun`}
              src={business.maps.embed}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="absolute inset-0 h-full w-full [filter:grayscale(.85)_sepia(.35)_contrast(1.05)_brightness(.85)]"
            />
            <div className="pointer-events-none absolute inset-0 shadow-[inset_0_0_120px_rgba(26,36,27,.65)]" />
            <a
              href={business.maps.place}
              target="_blank"
              rel="noopener noreferrer"
              className="group absolute bottom-4 left-4 flex items-center gap-3 bg-forest/90 px-4 py-3 backdrop-blur md:bottom-6 md:left-6"
            >
              <span className="relative flex h-2.5 w-2.5">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-ember opacity-60" />
                <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-ember" />
              </span>
              <span>
                <span className="block font-serif text-lg leading-none">Lychee Tree</span>
                <span className="mt-1 block text-[10px] tracking-[.2em] text-cream/60 uppercase">Near IDBI Bank · Nehru Colony</span>
              </span>
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
