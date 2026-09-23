import { business } from "@/data/site";
import { LycheeMark } from "./icons";

export function Footer() {
  const links = [
    { label: "Instagram", href: business.instagram.url },
    { label: "Google Maps", href: business.maps.place },
    { label: "Call", href: `tel:${business.phone.tel}` },
  ];
  return (
    <footer className="relative overflow-hidden bg-charcoal pt-20 pb-28 text-cream md:pt-28 md:pb-12">
      <div className="mx-auto max-w-[1400px] px-5 md:px-12">
        <div className="flex flex-col gap-12 md:flex-row md:items-end md:justify-between">
          <div>
            <LycheeMark className="mb-6 h-10 w-10" />
            <p className="eyebrow text-cream/55">{business.tagline}</p>
            <p className="mt-2 text-sm text-cream/55">Dehradun, Uttarakhand</p>
          </div>
          <ul className="flex flex-wrap gap-x-10 gap-y-4">
            {links.map((l) => (
              <li key={l.label}>
                <a
                  href={l.href}
                  {...(l.href.startsWith("http") ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                  className="group relative font-serif text-2xl text-cream/85 transition-colors hover:text-cream"
                >
                  {l.label}
                  <span className="absolute -bottom-1 left-0 h-px w-full origin-right scale-x-0 bg-ember transition-transform duration-350 ease-soft group-hover:origin-left group-hover:scale-x-100" />
                </a>
              </li>
            ))}
          </ul>
        </div>

        <p
          className="mt-16 font-serif text-[21vw] leading-[.8] font-light tracking-[-0.04em] text-cream/[.92] select-none md:mt-24 xl:text-[18.5rem]"
          aria-hidden="true"
        >
          Lychee <em className="text-ember/90">Tree</em>
        </p>

        <div className="mt-10 flex flex-col gap-2 border-t border-cream/10 pt-6 text-[11px] tracking-[.12em] text-cream/40 md:flex-row md:justify-between">
          <p>© 2026 {business.name}</p>
          <p>{business.address.street}, Dehradun</p>
        </div>
      </div>
    </footer>
  );
}
