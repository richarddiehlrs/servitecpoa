import Link from "next/link";
import { siteConfig } from "@/lib/site";
import { getWhatsAppUrl } from "@/lib/whatsapp";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-white/10 bg-ink py-14 text-slate-400">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <div className="flex flex-col gap-10 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-md">
            <p className="font-display text-3xl font-semibold text-white">
              Servitec<span className="text-brand-orange">Poa</span>
            </p>
            <p className="mt-2 text-sm uppercase tracking-[0.15em] text-slate-500">
              Consertos em Eletrodomésticos
            </p>
            <p className="mt-5 text-sm leading-relaxed">
              Assistência técnica especializada em Porto Alegre. Marcas nacionais e
              importadas, atendimento a domicílio e garantia de {siteConfig.warranty}.
            </p>
          </div>

          <div className="flex flex-wrap gap-12 text-sm">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.15em] text-slate-500">
                Contato
              </p>
              <ul className="mt-3 space-y-2">
                <li>
                  <a
                    href={`tel:+55${siteConfig.phone}`}
                    className="transition hover:text-brand-orange"
                  >
                    {siteConfig.phoneDisplay}
                  </a>
                </li>
                <li>
                  <a
                    href={getWhatsAppUrl()}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="transition hover:text-brand-orange"
                  >
                    WhatsApp
                  </a>
                </li>
                <li>CNPJ {siteConfig.cnpjDisplay}</li>
              </ul>
            </div>
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.15em] text-slate-500">
                Menu
              </p>
              <ul className="mt-3 space-y-2">
                {[
                  { href: "/servicos", label: "Serviços" },
                  { href: "#marcas", label: "Marcas" },
                  { href: "#faq", label: "FAQ" },
                  { href: "#solicitar-atendimento", label: "Solicitar atendimento" },
                { href: "#contato", label: "Contato" },
                ].map((link) => (
                  <li key={link.href}>
                    <Link href={link.href} className="transition hover:text-brand-orange">
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        <p className="mt-12 border-t border-white/10 pt-8 text-center text-xs text-slate-600">
          © {year} {siteConfig.name}. Todos os direitos reservados.
        </p>
      </div>
    </footer>
  );
}
