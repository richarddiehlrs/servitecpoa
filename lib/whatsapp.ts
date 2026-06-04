import { siteConfig } from "./site";

export const WHATSAPP_DEFAULT_MESSAGE =
  "Vim pelo site e gostaria de agendar visita técnica.";

export function getWhatsAppUrl(extraMessage?: string) {
  const message = extraMessage
    ? `${WHATSAPP_DEFAULT_MESSAGE}\n\n${extraMessage}`
    : WHATSAPP_DEFAULT_MESSAGE;

  return `https://wa.me/${siteConfig.phone}?text=${encodeURIComponent(message)}`;
}
