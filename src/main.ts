import '@fontsource/bebas-neue/latin-400.css';
import '@fontsource/dm-sans/latin-400.css';
import '@fontsource/dm-sans/latin-500.css';
import '@fontsource/dm-sans/latin-600.css';
import '@fontsource/dm-sans/latin-700.css';
import './styles/main.css';

import { registerSW } from 'virtual:pwa-register';
import { createApp } from 'vue';
import App from './App.vue';
import { router } from './router';

// Installs the service worker that makes the app available offline and
// fetches a new version in the background when one is published.
registerSW({ immediate: true });

createApp(App).use(router).mount('#app');
