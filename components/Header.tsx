"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { siteConfig } from "@/lib/site";
import { getWhatsAppUrl } from "@/lib/whatsapp";

const navLinks = [
  { href: "#inicio", label: "Início" },
  { href: "#diferenciais", label: "Sobre" },
  { href: "#servicos", label: "Serviços" },
  { href: "#marcas", label: "Marcas" },
  { href: "#faq", label: "FAQ" },
  { href: "#solicitar-atendimento", label: "Solicitar" },
  { href: "#contato", label: "Contato" },
];

export function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "border-b border-white/10 bg-ink/95 shadow-lg shadow-black/20 backdrop-blur-xl"
          : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-5 py-4 lg:px-8">
        <Link href="#inicio" className="group flex items-center gap-3">
          <span
            className="flex h-11 w-11 items-center justify-center rounded-full border border-brand-orange/40 bg-ink-light font-display text-lg font-semibold text-white transition group-hover:border-brand-orange"
            aria-hidden
          >
            S
          </span>
          <div className="leading-none">
            <span className="block font-display text-xl font-semibold tracking-tight text-white">
              Servitec<span className="text-brand-orange">Poa</span>
            </span>
            <span className="mt-1 block text-[10px] uppercase tracking-[0.18em] text-slate-500">
              Eletrodomésticos
            </span>
          </div>
        </Link>

        <nav
          className={`absolute left-0 right-0 top-full border-b border-white/10 bg-ink px-5 py-6 shadow-2xl lg:static lg:flex lg:border-0 lg:bg-transparent lg:p-0 lg:shadow-none ${
            open ? "block" : "hidden lg:flex"
          }`}
          aria-label="Menu principal"
        >
          <ul className="flex flex-col gap-1 lg:flex-row lg:items-center lg:gap-8">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="block py-2 text-sm font-medium tracking-wide text-slate-400 transition hover:text-white lg:py-0"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div className="flex items-center gap-3">
          <a
            href={`tel:+55${siteConfig.phone}`}
            className="hidden text-sm font-medium text-slate-400 transition hover:text-brand-orange xl:block"
          >
            {siteConfig.phoneDisplay}
          </a>
          <a
            href={getWhatsAppUrl()}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary !px-5 !py-2.5 !text-xs"
          >
            Contato
          </a>
          <button
            type="button"
            className="inline-flex rounded-full p-2.5 text-slate-400 transition hover:bg-white/5 hover:text-white lg:hidden"
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
