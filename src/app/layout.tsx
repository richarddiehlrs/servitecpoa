import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Script from 'next/script'
import './globals.css'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import WhatsAppFloat from '@/components/WhatsAppFloat'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'ServitecPoa - Assistência Técnica de Eletrodomésticos | Parceiro Electrolux',
  description: 'Única assistência técnica oficial especializada em eletrodomésticos em Porto Alegre. 15 anos de experiência, técnicos qualificados. Parceiro Electrolux. Atendemos geladeiras, fogões, máquinas de lavar, micro-ondas, purificadores de água, eletroportáteis, instalação de coifas e mais.',
  keywords: 'assistência técnica, eletrodomésticos, Porto Alegre, Electrolux, geladeira, fogão, máquina de lavar, micro-ondas, lava-louças, purificador água, eletroportáteis, cafeteira, liquidificador, técnico qualificado, instalação coifa, instalação eletrodomésticos, aspirador central, jardim do salso',
  authors: [{ name: 'ServitecPoa' }],
  creator: 'ServitecPoa',
  publisher: 'ServitecPoa',
  robots: 'index, follow',
  openGraph: {
    type: 'website',
    locale: 'pt_BR',
    url: 'https://servitecpoa.com.br',
    siteName: 'ServitecPoa',
    title: 'ServitecPoa - Assistência Técnica de Eletrodomésticos',
    description: 'Assistência técnica especializada em eletrodomésticos em Porto Alegre. 15 anos de experiência, técnicos qualificados.',
    images: [
      {
        url: '/logo.png',
        width: 1200,
        height: 630,
        alt: 'ServitecPoa - Assistência Técnica',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'ServitecPoa - Assistência Técnica de Eletrodomésticos',
    description: 'Assistência técnica especializada em eletrodomésticos em Porto Alegre. 15 anos de experiência.',
  },
  viewport: 'width=device-width, initial-scale=1',
  alternates: {
    canonical: 'https://servitecpoa.com.br',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-BR">
      <head>
        {/* Google Search Console Verification */}
        <meta name="google-site-verification" content="google94eb8cc8cfdd2ecc" />
        
        {/* Google Analytics 4 */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-XWX14N5T89"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-XWX14N5T89');
          `}
        </Script>
        
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              "name": "ServitecPoa Assistência Técnica",
              "image": "https://servitecpoa.com.br/logo.png",
              "description": "Única assistência técnica oficial especializada em eletrodomésticos em Porto Alegre",
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "Rua São Simão, 505",
                "addressLocality": "Porto Alegre",
                "addressRegion": "RS",
                "addressCountry": "BR",
                "postalCode": "91040-000"
              },
              "geo": {
                "@type": "GeoCoordinates",
                "latitude": -30.0346,
                "longitude": -51.2177
              },
              "telephone": "+55 51 4063-8129",
              "openingHours": ["Mo-Fr 08:30-12:00,13:30-18:00", "Sa 09:00-12:00,13:00-18:00"],
              "serviceArea": {
                "@type": "City",
                "name": "Porto Alegre"
              },
              "priceRange": "$$",
              "url": "https://servitecpoa.com.br",
              "hasOfferCatalog": {
                "@type": "OfferCatalog",
                "name": "Serviços de Assistência Técnica",
                "itemListElement": [
                  {
                    "@type": "Offer",
                    "itemOffered": {
                      "@type": "Service",
                      "name": "Assistência Técnica de Geladeiras e Freezers",
                      "description": "Reparo completo em geladeiras, freezers e refrigeradores de todas as marcas"
                    }
                  },
                  {
                    "@type": "Offer",
                    "itemOffered": {
                      "@type": "Service",
                      "name": "Conserto de Máquinas de Lavar",
                      "description": "Conserto de máquinas de lavar roupas, centrífugas e tanquinhos"
                    }
                  },
                  {
                    "@type": "Offer",
                    "itemOffered": {
                      "@type": "Service",
                      "name": "Reparo de Fogões e Cooktops",
                      "description": "Assistência técnica para fogões, cooktops e fornos elétricos/a gás"
                    }
                  },
                  {
                    "@type": "Offer",
                    "itemOffered": {
                      "@type": "Service",
                      "name": "Instalação de Coifas",
                      "description": "Instalação profissional de coifas e depuradores de todas as marcas"
                    }
                  },
                  {
                    "@type": "Offer",
                    "itemOffered": {
                      "@type": "Service",
                      "name": "Instalação de Eletrodomésticos",
                      "description": "Instalação completa de eletrodomésticos em geral com garantia"
                    }
                  }
                ]
              }
            })
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "FAQPage",
              "mainEntity": [
                {
                  "@type": "Question",
                  "name": "Vocês atendem em domicílio?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Sim! Realizamos atendimento em domicílio em toda Porto Alegre. Nossa equipe vai até sua casa para diagnóstico e reparo dos seus eletrodomésticos."
                  }
                },
                {
                  "@type": "Question",
                  "name": "Vocês trabalham com peças originais?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Sim! Como parceiros Electrolux, temos acesso direto às peças originais da fábrica. Para outras marcas, priorizamos sempre peças originais ou de primeira qualidade."
                  }
                },
                {
                  "@type": "Question",
                  "name": "Vocês oferecem garantia dos serviços?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Sim! Todos os nossos reparos possuem garantia de 90 dias, garantindo sua tranquilidade e a qualidade do nosso trabalho."
                  }
                }
              ]
            })
          }}
        />
      </head>
      <body className={inter.className}>
        <Header />
        <main className="min-h-screen">
          {children}
        </main>
        <Footer />
        <WhatsAppFloat />
      </body>
    </html>
  )
}