// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: ["@pinia/nuxt", "@nuxt/icon", "nuxt-swiper"],
  css: ["~/assets/css/main.css"],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  app: {
    head: {
      link: [
        // Modern browsers - SVG favicon
        { rel: "icon", type: "image/svg+xml", href: "/favicon-simple.svg" },
        // Standard favicon formats
        {
          rel: "icon",
          type: "image/png",
          sizes: "32x32",
          href: "/favicon/favicon-32x32.png",
        },
        {
          rel: "icon",
          type: "image/png",
          sizes: "16x16",
          href: "/favicon/favicon-16x16.png",
        },
        { rel: "icon", type: "image/x-icon", href: "/favicon/favicon.ico" },
        // Apple touch icon
        {
          rel: "apple-touch-icon",
          sizes: "180x180",
          href: "/favicon/apple-touch-icon.png",
        },
        // Android/Chrome
        {
          rel: "icon",
          type: "image/png",
          sizes: "192x192",
          href: "/favicon/android-chrome-192x192.png",
        },
        {
          rel: "icon",
          type: "image/png",
          sizes: "512x512",
          href: "/favicon/android-chrome-512x512.png",
        },
        // Web app manifest
        { rel: "manifest", href: "/favicon/site.webmanifest" },
      ],
      meta: [
        // Theme colors for mobile browsers
        { name: "theme-color", content: "#BA9E1E" },
        { name: "msapplication-TileColor", content: "#BA9E1E" },
      ],
    },
  },
});
