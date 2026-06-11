import Link from "next/link";
import { BrandLogo } from "@/components/BrandLogo";
import { seoServices } from "@/lib/seo";
import { siteConfig } from "@/lib/site";
import { getWhatsAppUrl } from "@/lib/whatsapp";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-gold/20 bg-navy-deep py-14 text-slate-400">
      <div className="gold-rule mb-10 opacity-40" aria-hidden />
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-4">
          <div className="lg:col-span-1">
            <BrandLogo href="/#inicio" showTagline theme="dark" size="footer" />
            <p className="mt-5 text-sm leading-relaxed text-slate-500">
              {siteConfig.primaryCategory} em Porto Alegre. Marcas nacionais e importadas,
              atendimento a domicílio e garantia de {siteConfig.warranty}.
            </p>
          </div>

          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.15em] text-gold-dark">
              Contato
            </p>
            <ul className="mt-3 space-y-2 text-sm">
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
              <li>
                <a
                  href={siteConfig.social.googleBusiness}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="transition hover:text-gold-light"
                >
                  Google Meu Negócio
                </a>
              </li>
              <li>CNPJ {siteConfig.cnpjDisplay}</li>
            </ul>
          </div>

          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.15em] text-gold-dark">
              Navegação
            </p>
            <ul className="mt-3 space-y-2 text-sm">
              {[
                { href: "/sobre", label: "Sobre" },
                { href: "/servicos", label: "Serviços" },
                { href: "/marcas", label: "Marcas" },
                { href: "/regioes", label: "Regiões" },
                { href: "/blog", label: "Blog" },
                { href: "/atendimento-domicilio", label: "Atendimento a domicílio" },
                { href: "/#faq", label: "FAQ" },
              ].map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="transition hover:text-gold-light">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.15em] text-gold-dark">
              Serviços em POA
            </p>
            <ul className="mt-3 space-y-2 text-sm">
              {seoServices.slice(0, 6).map((service) => (
                <li key={service.slug}>
                  <Link
                    href={`/servicos/${service.slug}`}
                    className="transition hover:text-gold-light"
                  >
                    {service.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <p className="mt-12 border-t border-white/8 pt-8 text-center text-xs text-slate-600">
          © {year} {siteConfig.name}. {siteConfig.primaryCategory} em Porto Alegre.
        </p>
      </div>
    </footer>
  );
}
