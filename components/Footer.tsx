import Image from "next/image";
import Link from "next/link";
import { siteConfig } from "@/lib/site";
import { getWhatsAppUrl } from "@/lib/whatsapp";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-gold/20 bg-navy-deep py-14 text-slate-400">
      <div className="gold-rule mb-10 opacity-40" aria-hidden />
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <div className="flex flex-col gap-10 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-md">
            <Link href="/#inicio" className="inline-block">
              <Image
                src={siteConfig.logo.src}
                alt={siteConfig.logo.alt}
                width={160}
                height={56}
                className="h-12 w-auto object-contain sm:h-14"
              />
            </Link>
            <p className="mt-3 text-sm font-medium uppercase tracking-[0.12em] text-gold-muted">
              {siteConfig.tagline}
            </p>
            <p className="mt-5 text-sm leading-relaxed text-slate-500">
              Assistência técnica especializada em Porto Alegre. Marcas nacionais e
              importadas, atendimento a domicílio e garantia de {siteConfig.warranty}.
            </p>
          </div>

          <div className="flex flex-wrap gap-12 text-sm">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.15em] text-gold-dark">
                Contato
              </p>
              <ul className="mt-3 space-y-2">
                <li>
                  <a
                    href={`tel:+55${siteConfig.phone}`}
                    className="transition hover:text-gold-light"
                  >
                    {siteConfig.phoneDisplay}
                  </a>
                </li>
                <li>
                  <a
                    href={getWhatsAppUrl()}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="transition hover:text-gold-light"
                  >
                    WhatsApp
                  </a>
                </li>
                <li>CNPJ {siteConfig.cnpjDisplay}</li>
              </ul>
            </div>
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.15em] text-gold-dark">
                Menu
              </p>
              <ul className="mt-3 space-y-2">
                {[
                  { href: "/servicos", label: "Serviços" },
                  { href: "/atendimento-domicilio", label: "Atendimento a domicílio" },
                  { href: "/#marcas", label: "Marcas" },
                  { href: "/#faq", label: "FAQ" },
                  { href: "/#contato", label: "Contato" },
                ].map((link) => (
                  <li key={link.href}>
                    <Link href={link.href} className="transition hover:text-gold-light">
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        <p className="mt-12 border-t border-white/8 pt-8 text-center text-xs text-slate-600">
          © {year} {siteConfig.name}. Todos os direitos reservados.
        </p>
      </div>
    </footer>
  );
}
