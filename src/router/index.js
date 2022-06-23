import Home from '../views/Home.vue';
import { createRouter, createWebHashHistory } from 'vue-router';

const routes = [{ path: '/', component: Home }];

const router = createRouter({
    history: createWebHashHistory(),
    routes,
});

export { router };
