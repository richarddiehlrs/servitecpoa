"use client";

import { useEffect } from "react";

const ADS_ID = process.env.NEXT_PUBLIC_GOOGLE_ADS_ID ?? "AW-18204131668";
const WHATSAPP_LABEL =
  process.env.NEXT_PUBLIC_GOOGLE_ADS_WHATSAPP_LABEL ?? "vm9kCNzph8gcENSCtOhD";

declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void;
  }
}

function isWhatsAppLink(href: string) {
  return /wa\.me|api\.whatsapp\.com|whatsapp:/i.test(href);
}

export function WhatsAppConversion() {
  useEffect(() => {
    const sendTo = `${ADS_ID}/${WHATSAPP_LABEL}`;

    function handleClick(event: MouseEvent) {
      const target = event.target as HTMLElement | null;
      const link = target?.closest("a");
      if (!link) return;

      const href = link.getAttribute("href") ?? "";
      if (!isWhatsAppLink(href)) return;

      window.gtag?.("event", "conversion", { send_to: sendTo });
    }

    document.addEventListener("click", handleClick, { capture: true });
    return () => document.removeEventListener("click", handleClick, { capture: true });
  }, []);

  return null;
}
