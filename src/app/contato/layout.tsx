import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Contato | ServitecPoa - Orçamento Gratuito Porto Alegre',
  description: 'Entre em contato com a ServitecPoa. Orçamento gratuito para assistência técnica de eletrodomésticos. (51) 4063-8129. Rua São Simão, 505 - Jardim do Salso.',
  keywords: 'contato servitecpoa, orçamento assistência técnica, telefone porto alegre, endereço jardim do salso, instalação coifa, instalação eletrodomésticos, aspirador central electrolux'
}

export default function ContatoLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
