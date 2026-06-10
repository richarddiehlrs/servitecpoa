import Image from "next/image";
import Link from "next/link";
import { siteConfig } from "@/lib/site";

type BrandLogoProps = {
  href?: string;
  showTagline?: boolean;
  size?: "header" | "footer";
  theme?: "light" | "dark";
  className?: string;
};

export function BrandLogo({
  href = "/#inicio",
  showTagline = true,
  size = "header",
  theme = "dark",
  className = "",
}: BrandLogoProps) {
  const isHeader = size === "header";
  const logoHeight = isHeader ? 44 : 52;
  const logoWidth = isHeader ? 130 : 150;
  const isLight = theme === "light";

  const content = (
    <div className={`flex flex-col gap-0.5 sm:flex-row sm:items-center sm:gap-3 ${className}`}>
      <Image
        src={siteConfig.logo.src}
        alt=""
        width={logoWidth}
        height={logoHeight}
        className="h-10 w-auto object-contain sm:h-11"
        priority={isHeader}
        aria-hidden
      />
      {showTagline && (
        <div className="leading-tight">
          <span
            className={`block font-display text-base font-semibold tracking-tight sm:text-lg ${
              isLight ? "text-ink" : "text-white"
            }`}
          >
            Servitec<span className="text-brand-orange">Poa</span>
          </span>
          <span
            className={`block text-[10px] font-medium uppercase tracking-[0.1em] sm:text-[11px] ${
              isLight ? "text-gold-dark" : "text-slate-400"
            }`}
          >
            Consertos Em Eletrodomésticos
          </span>
        </div>
      )}
    </div>
  );

  if (href) {
    return (
      <Link
        href={href}
        className="group shrink-0 transition opacity-95 hover:opacity-100"
        aria-label={siteConfig.logo.alt}
      >
        {content}
      </Link>
    );
  }

  return content;
}
