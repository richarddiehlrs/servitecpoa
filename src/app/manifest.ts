import { MetadataRoute } from 'next'

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'ServitecPoa - Assistência Técnica de Eletrodomésticos',
    short_name: 'ServitecPoa',
    description: 'Assistência técnica especializada em eletrodomésticos em Porto Alegre. 15 anos de experiência, técnicos qualificados.',
    start_url: '/',
    display: 'standalone',
    background_color: '#1E3A5F',
    theme_color: '#FF8C00',
    icons: [
      {
        src: '/icon-192x192.png',
        sizes: '192x192',
        type: 'image/png',
      },
      {
        src: '/icon-512x512.png',
        sizes: '512x512',
        type: 'image/png',
      },
    ],
  }
}
