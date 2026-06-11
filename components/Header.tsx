"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { BrandLogo } from "@/components/BrandLogo";
import { siteConfig } from "@/lib/site";

const navLinks = [
  { href: "/#inicio", label: "Início" },
  { href: "/sobre", label: "Sobre" },
  { href: "/servicos", label: "Serviços" },
  { href: "/marcas", label: "Marcas" },
  { href: "/regioes", label: "Regiões" },
  { href: "/blog", label: "Blog" },
  { href: "/atendimento-domicilio", label: "Atendimento" },
];

export function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 border-b transition-all duration-300 ${
        scrolled
          ? "border-gold/30 bg-navy-deep shadow-premium"
          : "border-gold/20 bg-navy-deep"
      }`}
    >
      <div className="gold-rule opacity-60" aria-hidden />
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-5 py-3 lg:px-8">
        <BrandLogo href="/#inicio" showTagline theme="dark" />

        <nav
          className={`absolute left-0 right-0 top-full border-b border-gold/15 bg-navy-deep px-5 py-6 shadow-premium lg:static lg:flex lg:border-0 lg:bg-transparent lg:p-0 lg:shadow-none ${
            open ? "block" : "hidden lg:flex"
          }`}
          aria-label="Menu principal"
        >
          <ul className="flex flex-col gap-1 lg:flex-row lg:items-center lg:gap-7">
            {navLinks.map((link) => {
              const isActive =
                (link.href !== "/#inicio" && pathname === link.href) ||
                (link.href === "/atendimento-domicilio" &&
                  pathname === "/atendimento-domicilio");
              return (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    onClick={() => setOpen(false)}
                    className={`block py-2 text-sm font-medium tracking-wide transition lg:py-0 ${
                      isActive
                        ? "text-gold-light"
                        : "text-slate-400 hover:text-white"
                    }`}
                  >
                    {link.label}
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>

        <div className="flex items-center gap-3">
          <a
            href={`tel:+55${siteConfig.phone}`}
            className="hidden text-sm font-medium text-slate-400 transition hover:text-gold-light xl:block"
          >
            {siteConfig.phoneDisplay}
          </a>
          <Link
            href="/atendimento-domicilio"
            className="btn-primary !px-5 !py-2.5 !text-xs"
          >
            Agendar visita
          </Link>
          <button
            type="button"
            className="inline-flex rounded-full border border-white/10 p-2.5 text-slate-400 transition hover:border-gold/40 hover:text-white lg:hidden"
            onClick={() => setOpen(!open)}
            aria-expanded={open}
            aria-label={open ? "Fechar menu" : "Abrir menu"}
          >
            <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              {open ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 8h16M4 16h16" />
              )}
            </svg>
          </button>
        </div>
      </div>
    </header>
  );
}
