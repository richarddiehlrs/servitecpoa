import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Script from 'next/script'
import './globals.css'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import WhatsAppFloat from '@/components/WhatsAppFloat'
import CallTracker from '@/components/CallTracker'
import JsonLd from '@/components/JsonLd'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'ServitecPoa - Assistência Técnica de Eletrodomésticos | Parceiro Electrolux',
  description: 'Assistência técnica especializada em eletrodomésticos em Porto Alegre. 15 anos de experiência, técnicos qualificados. Parceiro Electrolux. Atendemos geladeiras, fogões, máquinas de lavar, micro-ondas, purificadores de água, eletroportáteis, instalação de coifas e mais.',
  keywords: 'assistência técnica, eletrodomésticos, Porto Alegre, Electrolux, geladeira, fogão, máquina de lavar, micro-ondas, lava-louças, purificador água, eletroportáteis, cafeteira, liquidificador, técnico qualificado, instalação coifa, instalação eletrodomésticos, aspirador central, jardim do salso',
  authors: [{ name: 'ServitecPoa' }],
  creator: 'ServitecPoa',
  publisher: 'ServitecPoa',
  robots: 'index, follow',
  metadataBase: new URL('https://servitecpoa.com.br'),
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
  alternates: {
    canonical: 'https://servitecpoa.com.br',
  },
}

export const viewport = {
  width: 'device-width',
  initialScale: 1,
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


      </head>
      <body className={inter.className}>
        <Header />
        <main className="min-h-screen">
          {children}
        </main>
        <Footer />
        <WhatsAppFloat />
        <CallTracker />
        <JsonLd />
      </body>
    </html>
  )
}