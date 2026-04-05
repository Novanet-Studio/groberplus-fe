const DOMAIN = "groberplus.com";
const BASE_URL = (path: string) => `https://${DOMAIN}/${path}`;
const OG_IMAGE_BASE_URL = (image: string) => `https://res.cloudinary.com/novanet-studio/image/upload/${image}`;

export const metadata: Record<string, any> = {
  home: {
    title: "GröberPlus - Innovation in Patents, Materials and Finishes",
    description: "GröberPlus was formed in Hückeswagen (Germany) in 2003. We improve and adapt our solutions, providing them an extra value by means of new patents, materials and finishes.",
    ogTitle: "GröberPlus - Innovation in Patents, Materials and Finishes",
    ogDescription: "GröberPlus was formed in Hückeswagen (Germany) in 2003. We improve and adapt our solutions, providing them an extra value by means of new patents, materials and finishes.",
    ogImage: OG_IMAGE_BASE_URL("v1773756060/groberplus/openGraph/Inicio.png"),
    ogUrl: BASE_URL(""),
    ogType: "website",
    twitterCard: "summary_large_image",
    themeColor: "#111111",
  },
  products: {
    title: "Products - GröberPlus",
    description: "Explore the GröberPlus product line. We innovate with new materials, patents, and top-tier finishes to provide extraordinary value.",
    ogTitle: "Products - GröberPlus",
    ogDescription: "Explore the GröberPlus product line. We innovate with new materials, patents, and top-tier finishes to provide extraordinary value.",
    ogImage: OG_IMAGE_BASE_URL("v1773756060/groberplus/openGraph/Products.png"),
    ogUrl: BASE_URL("products"),
    ogType: "website",
    twitterCard: "summary_large_image",
    themeColor: "#111111",
  }
};
