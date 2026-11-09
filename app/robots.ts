import type { MetadataRoute } from "next";
import { siteConfig } from "@/lib/site";

/**
 * Robôs de busca e de IA liberados explicitamente.
 * Permitir os crawlers de IA faz o site poder ser lido e citado
 * por ChatGPT, Perplexity, Claude, Gemini, Copilot e Apple Intelligence.
 */
const aiCrawlers = [
  "GPTBot",
  "OAI-SearchBot",
  "ChatGPT-User",
  "PerplexityBot",
  "Perplexity-User",
  "ClaudeBot",
  "Claude-SearchBot",
  "Claude-User",
  "Google-Extended",
  "Applebot",
  "Applebot-Extended",
  "Bingbot",
  "DuckAssistBot",
  "meta-externalagent",
  "Amazonbot",
  "CCBot",
];

export default function robots(): MetadataRoute.Robots {
  const sitemap = `${siteConfig.url}/sitemap.xml`;
  return {
    rules: [
      { userAgent: "*", allow: "/" },
      { userAgent: aiCrawlers, allow: "/" },
    ],
    sitemap: [sitemap],
    host: siteConfig.url.replace(/^https:\/\//, ""),
  };
}
