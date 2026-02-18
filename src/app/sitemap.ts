import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://servitecpoa.com.br'

  const routes = [
    '',
    '/servicos',
    '/sobre',
    '/depoimentos',
    '/contato',
    '/privacidade',
    '/termos',
    '/servicos/jardim-do-salso',
    '/servicos/centro-porto-alegre',
    '/servicos/moinhos-de-vento',
    '/servicos/petropolis',
    '/servicos/cidade-baixa',
    '/servicos/higienopolis',
    '/servicos/chacara-das-pedras',
    '/servicos/passo-dareia',
    '/servicos/montserrat',
    '/servicos/jardim-botanico',
    '/servicos/rio-branco',
    '/servicos/tres-figueiras',
    '/servicos/menino-deus',
    '/servicos/conserto-maquina-lavar-porto-alegre',
    '/servicos/conserto-geladeira-porto-alegre',
    '/servicos/conserto-microondas-porto-alegre',
    '/servicos/conserto-purificador-agua-porto-alegre',
    '/servicos/conserto-fogao-porto-alegre',
    '/servicos/conserto-lava-loucas-porto-alegre',
    '/servicos/instalacao-coifa-porto-alegre',
    '/servicos/conserto-eletroportateis-porto-alegre',
  ]

  return routes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: route === '' ? 'weekly' : 'monthly',
    priority: route === '' ? 1.0 : route.startsWith('/servicos/') ? 0.9 : 0.7,
  }))
}
