// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  ssr: false,
  modules: ["@vite-pwa/nuxt", "@nuxt/image", "@nuxtjs/strapi"],

  app: {
    head: {
      titleTemplate: {
        textContent: `%s - GroberPlus`,
      },
      htmlAttrs: {
        lang: "en",
      },
      link: [
        {
          rel: "icon",
          href: "icon.png",
          type: "image/png",
        },
        {
          rel: "stylesheet",
          href: "https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css",
        },
        {
          rel: "stylesheet",
          href: "https://cdn.jsdelivr.net/npm/font-awesome@4.7.0/css/font-awesome.min.css",
        },
        {
          rel: "stylesheet",
          href: "https://cdn.jsdelivr.net/npm/owl.carousel@2.3.4/dist/assets/owl.carousel.min.css",
        },
        {
          rel: "stylesheet",
          href: "https://cdnjs.cloudflare.com/ajax/libs/OwlCarousel2/2.3.4/assets/owl.theme.default.min.css",
        },
        {
          rel: "stylesheet",
          href: "https://cdnjs.cloudflare.com/ajax/libs/magnific-popup.js/1.1.0/magnific-popup.min.css",
          integrity:
            "sha512-+EoPw+Fiwh6eSeRK7zwIKG2MA8i3rV/DGa3tdttQGgWyatG/SkncT53KHQaS5Jh9MNOT3dmFL0FjTY08And/Cw==",
          crossorigin: "anonymous",
          referrerpolicy: "no-referrer",
        },
      ],
      script: [
        // JQuery
        {
          type: "text/javascript",
          src: "https://cdnjs.cloudflare.com/ajax/libs/jquery/3.6.0/jquery.min.js",
          integrity:
            "sha512-894YE6QWD5I59HgZOGReFYm4dnWc1Qt5NtvYSaNcOP+u1T9qYdvdihz0PPSiiqn/+/3e7Jo4EaG7TubfWGUrMQ==",
          crossorigin: "anonymous",
          referrerpolicy: "no-referrer",
        },
        // Bootstrap
        {
          type: "text/javascript",
          src: "https://cdnjs.cloudflare.com/ajax/libs/popper.js/2.11.0/umd/popper.min.js",
        },
        {
          type: "text/javascript",
          src: "https://cdnjs.cloudflare.com/ajax/libs/bootstrap/5.1.0/js/bootstrap.min.js",
        },

        // Plugins
        {
          type: "text/javascript",
          src: "https://cdnjs.cloudflare.com/ajax/libs/scrollReveal.js/4.0.9/scrollreveal.min.js",
        },
        {
          type: "text/javascript",
          src: "https://cdnjs.cloudflare.com/ajax/libs/parallax.js/1.5.0/parallax.min.js",
        },
        {
          type: "text/javascript",
          src: "https://cdnjs.cloudflare.com/ajax/libs/waypoints/4.0.1/jquery.waypoints.min.js",
        },
        {
          type: "text/javascript",
          src: "https://cdnjs.cloudflare.com/ajax/libs/Counter-Up/1.0.0/jquery.counterup.min.js",
        },
        {
          type: "text/javascript",
          src: "https://cdnjs.cloudflare.com/ajax/libs/imgix.js/4.0.1/imgix.js",
        },
        {
          type: "text/javascript",
          src: "https://cdnjs.cloudflare.com/ajax/libs/OwlCarousel2/2.3.3/owl.carousel.min.js",
        },
        {
          type: "text/javascript",
          src: "https://cdnjs.cloudflare.com/ajax/libs/magnific-popup.js/1.1.0/jquery.magnific-popup.min.js",
        },
        {
          type: "text/javascript",
          src: "js/custom.js",
        },
      ],
    },
  },

  css: ["~/assets/scss/style.scss"],

  typescript: {
    tsConfig: {
      compilerOptions: {
        types: ["jquery", "owl.carousel"],
      },
    },
  },

  pwa: {
    manifest: {
      name: "GroberPlus",
      short_name: "GroberPlus",
      description: "GroberPlus",
      lang: "en",
      theme_color: "#ffffff",
      background_color: "#ffffff",
      display: "standalone",
      start_url: "/",
      icons: [
        {
          src: "/icon-192x192.png",
          sizes: "192x192",
          type: "image/png",
        },
        {
          src: "/icon.png",
          type: "image/png",
        },
      ],
    },
  },

  image: {
    dir: "assets/images",
  },

  compatibilityDate: "2024-09-01",
});
