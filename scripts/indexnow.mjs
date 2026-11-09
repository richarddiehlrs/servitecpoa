/**
 * Avisa Bing (e demais buscadores do IndexNow) sobre as páginas do site.
 *
 * Uso (depois que a Vercel terminar de publicar):
 *   npm run indexnow              -> envia todas as URLs do sitemap publicado
 *   npm run indexnow -- /blog/x   -> envia só os caminhos informados
 *
 * A chave fica em public/<KEY>.txt e precisa estar acessível no site.
 */
const HOST = "www.servitecpoa.com.br";
const BASE = `https://${HOST}`;
const KEY = "bfa6d4cc6734e1af030916df01a3dc1d";
const KEY_LOCATION = `${BASE}/${KEY}.txt`;

async function main() {
  const keyRes = await fetch(KEY_LOCATION);
  const keyText = (await keyRes.text()).trim();
  if (!keyRes.ok || keyText !== KEY) {
    throw new Error(`Arquivo de chave não está publicado em ${KEY_LOCATION} (HTTP ${keyRes.status}). Aguarde o deploy da Vercel.`);
  }

  const args = process.argv.slice(2);
  let urls;
  if (args.length > 0) {
    urls = args.map((p) => (p.startsWith("http") ? p : `${BASE}${p.startsWith("/") ? p : `/${p}`}`));
  } else {
    const xml = await (await fetch(`${BASE}/sitemap.xml`)).text();
    urls = [...xml.matchAll(/<loc>([^<]+)<\/loc>/g)].map((m) => m[1].trim());
  }

  urls = [...new Set(urls)];
  console.log(`Enviando ${urls.length} URL(s) ao IndexNow...`);

  // Limite do protocolo: 10.000 URLs por requisição
  for (let i = 0; i < urls.length; i += 10000) {
    const res = await fetch("https://api.indexnow.org/indexnow", {
      method: "POST",
      headers: { "Content-Type": "application/json; charset=utf-8" },
      body: JSON.stringify({
        host: HOST,
        key: KEY,
        keyLocation: KEY_LOCATION,
        urlList: urls.slice(i, i + 10000),
      }),
    });
    const body = await res.text();
    console.log(`IndexNow respondeu HTTP ${res.status}${body ? `: ${body}` : ""}`);
    if (res.status >= 300) process.exitCode = 1;
  }
}

main().catch((err) => {
  console.error(err.message);
  process.exitCode = 1;
});
