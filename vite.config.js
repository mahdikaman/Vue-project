import { defineConfig } from "vite";
import { VitePWA } from "vite-plugin-pwa";
import vue from "@vitejs/plugin-vue";

export default defineConfig({
  plugins: [
    VitePWA({
      manifest: {
        background_color: "grey",
        display: "standalone",
        icons: [
          {
            purpose: "any",
            sizes: "192x192",
            src: "manifest-icon-192.maskable.png",
            type: "image/png",
          },
          {
            purpose: "maskable",
            sizes: "192x192",
            src: "manifest-icon-192.maskable.png",
            type: "image/png",
          },
          {
            purpose: "any",
            sizes: "512x512",
            src: "manifest-icon-512.maskable.png",
            type: "image/png",
          },
          {
            purpose: "maskable",
            sizes: "512x512",
            src: "manifest-icon-512.maskable.png",
            type: "image/png",
          },
        ],
        name: "Testapplikation",
        short_name: "Testapp",
        start_url: ".",
        theme_color: "red",
      },
      registerType: "autoUpdate",
      workbox: {
        globPatterns: ["assets/**", "index.html", "manifest.webmanifest"],
      },
      runtimeCaching: [
        {
          handler: "NetworkFirst",

          urlPattern: "https://api.openbrewerydb.org/breweries/",
        },
        {
          handler: "NetworkFirst",

          urlPattern:
            /https:\/\/api\.openbrewerydb\.org\/breweries\/[0-9a-f-]+\/?/,
        },
      ],
    }),
    vue(),
  ],
});
