export default function JsonLd() {
    const jsonLd = {
        "@context": "https://schema.org",
        "@type": "LocalBusiness",
        "name": "ServitecPoa Assistência Técnica",
        "image": "https://servitecpoa.com.br/logo.png",
        "description": "Assistência técnica especializada em eletrodomésticos em Porto Alegre. 15 anos de experiência, técnicos qualificados. Parceiro Electrolux.",
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
        "openingHours": [
            "Mo-Fr 08:30-12:00,13:30-18:00",
            "Sa 09:00-12:00,13:00-18:00"
        ],
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
                        "name": "Conserto de Máquina de Lavar Porto Alegre",
                        "description": "Conserto de máquina de lavar em Porto Alegre. Reparo de centrífugas e tanquinhos com garantia 90 dias"
                    }
                },
                {
                    "@type": "Offer",
                    "itemOffered": {
                        "@type": "Service",
                        "name": "Conserto de Geladeira Porto Alegre",
                        "description": "Conserto de geladeira em Porto Alegre. Reparo de freezers e refrigeradores com peças originais"
                    }
                },
                {
                    "@type": "Offer",
                    "itemOffered": {
                        "@type": "Service",
                        "name": "Conserto de Microondas Porto Alegre",
                        "description": "Conserto de microondas em Porto Alegre. Reparo de fornos de microondas com atendimento domiciliar"
                    }
                },
                {
                    "@type": "Offer",
                    "itemOffered": {
                        "@type": "Service",
                        "name": "Conserto de Purificador de Água Porto Alegre",
                        "description": "Conserto de purificador de água em Porto Alegre. Reparo de filtros e bebedouros com garantia"
                    }
                },
                {
                    "@type": "Offer",
                    "itemOffered": {
                        "@type": "Service",
                        "name": "Conserto de Fogão Porto Alegre",
                        "description": "Conserto de fogão em Porto Alegre. Reparo de cooktops e fornos elétricos/a gás"
                    }
                }
            ]
        }
    }

    const faqLd = {
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
    }

    return (
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
            />
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(faqLd) }}
            />
        </>
    )
}
