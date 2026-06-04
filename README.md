# ServitecPoa — Consertos em Eletrodomésticos

Site profissional da ServitecPoa, assistência técnica de eletrodomésticos em Porto Alegre. Desenvolvido com Next.js 15, otimizado para SEO e deploy na Vercel.

## Recursos

- Design profissional com cores **azul** e **laranja**
- SEO: meta tags, Open Graph, sitemap, robots.txt, JSON-LD (LocalBusiness, FAQ, WebSite)
- Atendimento a domicílio, marcas nacionais e importadas
- WhatsApp flutuante e CTAs de contato
- Responsivo (mobile-first)

## Contato configurado

- Telefone / WhatsApp: **(51) 3051-4255**
- CNPJ: **56.001.021/0001-86**

## Desenvolvimento local

```bash
npm install
npm run dev
```

Acesse [http://localhost:3000](http://localhost:3000).

Se aparecer **Internal Server Error** ou página em branco, feche terminais antigos do `npm run dev` e rode:

```bash
npm run dev:fresh
```

Isso limpa o cache (`.next`) e reinicia o servidor na porta 3000.

## Deploy na Vercel

1. Crie uma conta em [vercel.com](https://vercel.com)
2. Importe este repositório (GitHub/GitLab) ou use a CLI:

```bash
npm i -g vercel
vercel
```

3. Configure o domínio `www.servitecpoa.com.br` nas configurações do projeto
4. Em `lib/site.ts`, confirme que `url` aponta para seu domínio final

## SEO pós-deploy (recomendado)

1. [Google Search Console](https://search.google.com/search-console) — verifique o domínio e envie o sitemap: `https://www.servitecpoa.com.br/sitemap.xml`
2. [Google Business Profile](https://business.google.com) — mantenha NAP (nome, endereço, telefone) idêntico ao site
3. Solicite avaliações de clientes no Google
4. Adicione `google-site-verification` em `app/layout.tsx` → `metadata.verification.google` quando tiver o código

## Estrutura

```
app/           → páginas, layout, SEO (sitemap, robots, OG image)
components/    → Header, Hero, Serviços, Marcas, FAQ, Contato
lib/           → configuração do site e dados estruturados
public/        → ícones estáticos
```
