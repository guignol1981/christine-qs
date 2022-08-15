import { createApp } from 'vue';
import { createHead } from "@vueuse/head"
import App from './App.vue';
import { router } from './router';
import { i18n } from './i18n';
import './index.css';
const head = createHead();

createApp(App).use(i18n).use(head).use(router).mount('#app');
