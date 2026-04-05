import commonData from '@/assets/data/common.json';

export const jsonld: Record<string, any> = {
    organization: {
        "@context": "https://schema.org",
        "@type": "WebSite",
        "@id": `${commonData.baseUrl}/#website`,
        "url": `${commonData.baseUrl}/`,
        "name": commonData.siteName,
        "publisher": {
            "@type": "Organization",
            "@id": `${commonData.baseUrl}/#organization`,
            "name": commonData.siteName,
            "url": `${commonData.baseUrl}/`,
            "logo": `${commonData.baseUrl}/images/brand/groberplus-logotipo-color.svg`,
            "description": "GröberPlus was formed in Hückeswagen (Germany) in 2003. We improve and adapt our solutions, providing them an extra value by means of new patents, materials and finishes.",
            "telephone": commonData.phone,
            "email": commonData.email,
            "address": {
                "@type": "PostalAddress",
                "streetAddress": commonData.address,
                "addressLocality": "Doral, FL",
                "addressCountry": "US"
            }
        }
    },
    home: {
        "@context": "https://schema.org",
        "@type": "WebSite",
        "@id": `${commonData.baseUrl}/#home`,
        "url": `${commonData.baseUrl}/`,
        "name": commonData.siteName,
        "publisher": {
            "@type": "Organization",
            "@id": `${commonData.baseUrl}/#organization`,
            "name": commonData.siteName,
            "url": `${commonData.baseUrl}/`,
            "logo": `${commonData.baseUrl}/images/brand/groberplus-logotipo-color.svg`,
            "description": "GröberPlus was formed in Hückeswagen (Germany) in 2003. We improve and adapt our solutions, providing them an extra value by means of new patents, materials and finishes.",
            "telephone": commonData.phone,
            "email": commonData.email,
            "address": {
                "@type": "PostalAddress",
                "streetAddress": commonData.address,
                "addressLocality": "Doral, FL",
                "addressCountry": "US"
            }
        }
    },
    products: {
        "@context": "https://schema.org",
        "@type": "WebPage",
        "@id": `${commonData.baseUrl}/products`,
        "url": `${commonData.baseUrl}/products`,
        "name": `Products - ${commonData.siteName}`,
        "description": "Explore the GröberPlus product line. We innovate with new materials, patents, and top-tier finishes to provide extraordinary value.",
        "provider": {
            "@id": `${commonData.baseUrl}/#organization`
        }
    },
    productCategory: (categoryData: any) => ({
        "@context": "https://schema.org",
        "@type": "CollectionPage",
        "@id": `${commonData.baseUrl}/products/${categoryData.slug || ''}`,
        "headline": categoryData.title,
        "image": categoryData.image?.[0]?.url || `${commonData.baseUrl}/images/placeholder.webp`,
        "publisher": {
            "@id": `${commonData.baseUrl}/#organization`
        }
    }),
    product: (productData: any) => ({
        "@context": "https://schema.org",
        "@type": "Product",
        "@id": `${commonData.baseUrl}/products/${productData.category?.slug}/${productData.slug || ''}`,
        "name": productData.name || productData.title,
        "description": productData.description || "GröberPlus Product",
        "image": productData.image?.[0]?.url || `${commonData.baseUrl}/images/placeholder.webp`,
        "brand": {
            "@id": `${commonData.baseUrl}/#organization`
        }
    })
};
