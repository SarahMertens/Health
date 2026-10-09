import { fileURLToPath, URL } from 'node:url';
import vue from '@vitejs/plugin-vue';
import { VitePWA } from 'vite-plugin-pwa';
import { defineConfig } from 'vitest/config';

export default defineConfig({
  // Relative asset paths: the same build works on GitHub Pages
  // (https://<user>.github.io/<repo>/) and on any other host or sub-folder.
  base: './',

  plugins: [
    vue(),
    VitePWA({
      registerType: 'autoUpdate',
      includeAssets: ['favicon.svg', 'apple-touch-icon.png'],
      manifest: {
        name: 'Mijn vaste plan',
        short_name: 'Mijn plan',
        description: 'Trainingsschema, recepten en boodschappenlijst op één plek.',
        lang: 'nl',
        start_url: './',
        scope: './',
        display: 'standalone',
        background_color: '#0d1b2a',
        theme_color: '#0d1b2a',
        icons: [
          { src: 'icon-192.png', sizes: '192x192', type: 'image/png' },
          { src: 'icon-512.png', sizes: '512x512', type: 'image/png' },
          {
            src: 'icon-maskable-512.png',
            sizes: '512x512',
            type: 'image/png',
            purpose: 'maskable',
          },
        ],
      },
      workbox: {
        // Precache everything, fonts included, so the app works in the gym
        // or the supermarket without a connection.
        globPatterns: ['**/*.{js,css,html,svg,png,woff2}'],
      },
    }),
  ],

  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
    },
  },

  test: {
    environment: 'jsdom',
    include: ['src/**/*.spec.ts'],
  },
});
