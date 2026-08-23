// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: false },

  ssr: false,
  modules: ["@vite-pwa/nuxt", "@nuxt/image", "@vueuse/nuxt"],

  runtimeConfig: {
    public: {
      kairosApiUrl: process.env.KAIROS_API_URL,
      kairosApiKey: process.env.KAIROS_API_KEY,
    },
  },

  app: {
    head: {
      title: "GroberPlus",
      meta: [
        { name: "title", content: "GroberPlus" },
        { name: "description", content: "GroberPlus" },
        { name: "author", content: "Novanet Studio <info@novanet.studio>" },
        { name: "viewport", content: "width=device-width, initial-scale=1" },
      ],
      htmlAttrs: {
        lang: "en",
      },
      link: [
        { rel: "icon", href: "/icon.png", type: "image/png" },

        {
          rel: "stylesheet",
          href: "https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css",
        },
        {
          rel: "stylesheet",
          href: "https://cdn.jsdelivr.net/npm/font-awesome@4.7.0/css/font-awesome.min.css",
        },
      ],
      script: [
        {
          src: "https://cdnjs.cloudflare.com/ajax/libs/popper.js/2.11.0/umd/popper.min.js",
          defer: true,
        },
        {
          src: "https://cdnjs.cloudflare.com/ajax/libs/bootstrap/5.1.0/js/bootstrap.min.js",
          defer: true,
        },
      ],
    },
  },

  css: [
    "~/assets/scss/style.scss",
    "owl.carousel/dist/assets/owl.carousel.min.css",
    "owl.carousel/dist/assets/owl.theme.default.min.css",
    "magnific-popup/dist/magnific-popup.css",
  ],

  typescript: {
    tsConfig: {
      compilerOptions: {
        types: ["jquery", "owl.carousel"],
      },
    },
  },

  pwa: {
    registerType: "autoUpdate",
    manifest: {
      name: "GroberPlus",
      short_name: "GroberPlus",
      description: "GroberPlus application",
      lang: "en",
      theme_color: "#ffffff",
      background_color: "#ffffff",
      display: "standalone",
      start_url: "/",
      icons: [
        {
          src: "pwa-192x192.png",
          sizes: "192x192",
          type: "image/png",
        },
        {
          src: "pwa-512x512.png",
          sizes: "512x512",
          type: "image/png",
        },
        {
          src: "pwa-512x512.png",
          sizes: "512x512",
          type: "image/png",
          purpose: "any maskable",
        },
      ],
    },
    workbox: {
      globPatterns: ["**/*.{js,css,html,png,svg,ico}"],
      navigateFallback: null,
    },
    client: {
      installPrompt: true,
    },
    devOptions: {
      enabled: true,
      type: "module",
    },
  },

  image: {
    dir: "assets/images",
  },

  compatibilityDate: "2025-12-20",
});
