import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const base = "https://www.servitecpoa.com.br";
const lastmod = new Date().toISOString().slice(0, 10);

/** Mantenha em sync com lib/seo.ts (slugMap). */
const paths = [
  { path: "", priority: "1.0", changefreq: "weekly" },
  { path: "/servicos", priority: "0.9", changefreq: "weekly" },
  { path: "/servicos/conserto-geladeira-freezer-porto-alegre", priority: "0.8", changefreq: "monthly" },
  { path: "/servicos/conserto-maquina-de-lavar-porto-alegre", priority: "0.8", changefreq: "monthly" },
  { path: "/servicos/conserto-lava-e-seca-porto-alegre", priority: "0.8", changefreq: "monthly" },
  { path: "/servicos/conserto-lava-loucas-porto-alegre", priority: "0.8", changefreq: "monthly" },
  { path: "/servicos/conserto-fogao-cooktop-premium-porto-alegre", priority: "0.8", changefreq: "monthly" },
  { path: "/servicos/conserto-secadora-porto-alegre", priority: "0.8", changefreq: "monthly" },
  { path: "/servicos/conserto-coifa-depurador-porto-alegre", priority: "0.8", changefreq: "monthly" },
  { path: "/servicos/conserto-adega-climatizada-porto-alegre", priority: "0.8", changefreq: "monthly" },
  { path: "/servicos/instalacao-eletrodomesticos-porto-alegre", priority: "0.8", changefreq: "monthly" },
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
