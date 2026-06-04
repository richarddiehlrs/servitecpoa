# servitecpoa2 — ServitecPoa

Site oficial da **ServitecPoa** — consertos em eletrodomésticos em Porto Alegre.

Repositório principal: **[github.com/richarddiehlrs/servitecpoa2](https://github.com/richarddiehlrs/servitecpoa2)**

Stack: **Next.js 15** · TypeScript · Tailwind CSS · deploy na **Vercel**

## O que o site inclui

- Design premium (azul e laranja)
- SEO: meta tags, Open Graph, `sitemap.xml`, `robots.txt`, JSON-LD
- Formulário de solicitação com busca de endereço por CEP
- Botão WhatsApp com mensagem padrão e animação pulsante
- Marcas nacionais e importadas · atendimento a domicílio

## Contato (configurado no site)

| Item | Valor |
|------|--------|
| WhatsApp / telefone | (51) 3051-4255 |
| CNPJ | 56.001.021/0001-86 |
| Site | www.servitecpoa.com.br |

## Rodar localmente

Clone o repositório e, na pasta do projeto:

```bash
git clone https://github.com/richarddiehlrs/servitecpoa2.git
cd servitecpoa2
npm install
npm run dev
```

Abra a URL exibida no terminal (geralmente [http://localhost:3000](http://localhost:3000)).

Cache corrompido no dev? Use:

```bash
npm run dev:fresh
```

## Deploy na Vercel

1. Acesse [vercel.com](https://vercel.com) → **Add New Project**
2. Importe o repositório **richarddiehlrs/servitecpoa2**
3. Framework: **Next.js** (detecção automática)
4. Domínio customizado: `www.servitecpoa.com.br`
5. Confirme em `lib/site.ts` que `url` aponta para o domínio final

## SEO após publicar

1. [Google Search Console](https://search.google.com/search-console) — envie `https://www.servitecpoa.com.br/sitemap.xml`
2. [Google Business Profile](https://business.google.com) — dados iguais ao site
3. Peça avaliações de clientes no Google

## Estrutura do projeto

```
app/           → páginas, layout, SEO
components/    → UI (Header, Hero, formulário, etc.)
lib/           → configuração, WhatsApp, ViaCEP
public/        → ícones
```

## Repositório

- **GitHub:** [servitecpoa2](https://github.com/richarddiehlrs/servitecpoa2)
- Branch principal: `main`
