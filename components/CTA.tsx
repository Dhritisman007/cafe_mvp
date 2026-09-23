import { ArrowRight, Camera, MapPin, Phone } from "lucide-react";
import type { ReactNode } from "react";

type Variant = "light" | "dark" | "ghostLight" | "ghostDark" | "text" | "textDark";
type Icon = "arrow" | "pin" | "phone" | "camera" | "none";

const variants: Record<Variant, string> = {
  light: "bg-cream text-forest hover:bg-white",
  dark: "bg-forest text-cream hover:bg-olive",
  ghostLight: "border border-cream/35 text-cream hover:border-cream hover:bg-cream/10",
  ghostDark: "border border-forest/30 text-forest hover:border-forest hover:bg-forest/5",
  text: "text-cream px-0! h-auto!",
  textDark: "text-forest px-0! h-auto!",
};

function IconFor({ icon }: { icon: Icon }) {
  const cls = "h-4 w-4 shrink-0";
  switch (icon) {
    case "pin":
      return <MapPin className={`${cls} anim-pin`} strokeWidth={1.6} />;
    case "phone":
      return <Phone className={`${cls} anim-ring`} strokeWidth={1.6} />;
    case "camera":
      return <Camera className={`${cls} anim-shutter`} strokeWidth={1.6} />;
    case "arrow":
      return (
        <ArrowRight
          className={`${cls} transition-transform duration-500 ease-soft group-hover:translate-x-1.5`}
          strokeWidth={1.6}
        />
      );
    default:
      return null;
  }
}

export function CTA({
  href,
  children,
  variant = "light",
  icon = "arrow",
  iconFirst,
  className = "",
}: {
  href: string;
  children: ReactNode;
  variant?: Variant;
  icon?: Icon;
  iconFirst?: boolean;
  className?: string;
}) {
  const external = href.startsWith("http");
  const underline = variant === "text" || variant === "textDark";
  return (
    <a
      href={href}
      {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
      className={`group relative inline-flex h-13 items-center justify-center gap-3 rounded-full px-7 text-[11px] font-semibold tracking-[.24em] uppercase transition-colors duration-500 ease-soft ${variants[variant]} ${className}`}
    >
      {iconFirst && icon !== "arrow" && <IconFor icon={icon} />}
      <span className="relative">
        {children}
        {underline && (
          <span className="absolute -bottom-1.5 left-0 h-px w-full origin-left scale-x-100 bg-current opacity-40 transition-transform duration-700 ease-soft group-hover:scale-x-0 group-hover:origin-right" />
        )}
      </span>
      {(!iconFirst || icon === "arrow") && <IconFor icon={icon} />}
    </a>
  );
}
