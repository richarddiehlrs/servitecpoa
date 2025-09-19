import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Contato | ServitecPoa - Assistência Técnica Oficial Porto Alegre',
  description: 'Entre em contato com a ServitecPoa. Única assistência técnica oficial de eletrodomésticos em Porto Alegre. (51) 4063-8129. Rua São Simão, 505 - Jardim do Salso.',
  keywords: 'contato servitecpoa, assistência técnica oficial, telefone porto alegre, endereço jardim do salso, instalação coifa, instalação eletrodomésticos, aspirador central electrolux'
}

export default function ContatoLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
