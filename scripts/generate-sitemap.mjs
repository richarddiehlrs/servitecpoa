import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const base = "https://www.servitecpoa.com.br";
const lastmod = new Date().toISOString().slice(0, 10);

/** Mantenha em sync com lib/seo.ts (slugMap). */
const paths = [
  { path: "", priority: "1.0", changefreq: "weekly" },
  { path: "/servicos", priority: "0.9", changefreq: "weekly" },
  { path: "/atendimento-domicilio", priority: "0.95", changefreq: "weekly" },
  { path: "/servicos/conserto-de-geladeira-freezer-em-porto-alegre", priority: "0.8", changefreq: "monthly" },
  { path: "/servicos/conserto-de-maquina-de-lavar-em-porto-alegre", priority: "0.8", changefreq: "monthly" },
  { path: "/servicos/conserto-de-lava-e-seca-em-porto-alegre", priority: "0.8", changefreq: "monthly" },
  { path: "/servicos/conserto-de-lava-loucas-em-porto-alegre", priority: "0.8", changefreq: "monthly" },
  { path: "/servicos/conserto-de-fogao-cooktop-premium-em-porto-alegre", priority: "0.8", changefreq: "monthly" },
  { path: "/servicos/conserto-de-secadora-em-porto-alegre", priority: "0.8", changefreq: "monthly" },
  { path: "/servicos/conserto-de-coifa-depurador-em-porto-alegre", priority: "0.8", changefreq: "monthly" },
  { path: "/servicos/conserto-de-adega-climatizada-em-porto-alegre", priority: "0.8", changefreq: "monthly" },
  { path: "/servicos/instalacao-de-eletrodomesticos-em-porto-alegre", priority: "0.8", changefreq: "monthly" },
];

const urls = paths
  .map(({ path: p, priority, changefreq }) => {
    const loc = p ? `${base}${p}` : base;
    return `<url>
<loc>${loc}</loc>
<lastmod>${lastmod}</lastmod>
<changefreq>${changefreq}</changefreq>
<priority>${priority}</priority>
</url>`;
  })
  .join("\n");

const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls}
</urlset>
`;

const root = path.join(path.dirname(fileURLToPath(import.meta.url)), "..");
const out = path.join(root, "public/sitemap.xml");
fs.writeFileSync(out, xml, "utf8");
console.log("generate-sitemap: public/sitemap.xml atualizado");
