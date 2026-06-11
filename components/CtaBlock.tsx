import Link from "next/link";
import { siteConfig } from "@/lib/site";
import { getWhatsAppUrl } from "@/lib/whatsapp";

type CtaBlockProps = {
  title?: string;
  description?: string;
};

export function CtaBlock({
  title = "Agende assistência técnica a domicílio",
  description = `Atendimento em ${siteConfig.serviceArea} com garantia de ${siteConfig.warranty}.`,
}: CtaBlockProps) {
  return (
    <div className="panel-dark mt-14 p-8 text-center sm:p-10">
      <h2 className="font-display text-2xl font-semibold text-white">{title}</h2>
      <p className="mt-2 text-slate-400">{description}</p>
      <p className="mt-1 text-sm text-gold-light">{siteConfig.phoneDisplay}</p>
      <div className="mt-6 flex flex-col justify-center gap-3 sm:flex-row">
        <Link href="/atendimento-domicilio" className="btn-primary">
          Solicitar atendimento
        </Link>
        <a
          href={getWhatsAppUrl()}
          target="_blank"
          rel="noopener noreferrer"
          className="btn-outline-light"
        >
          WhatsApp
        </a>
      </div>
    </div>
  );
}
