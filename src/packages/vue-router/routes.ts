import { RouteConfig } from 'vue-router';

const routes: RouteConfig[] = [
    {
        path: '/home',
        name: 'home',
        component: () => import(/* webpackChunkName: "modules/home" */ '@/pages/home/home.vue'),
    },
    {
        path: '/',
        name: 'index',
        component: () => import(/* webpackChunkName: "modules/index" */ '@/pages/index/index.vue'),
    },
];

export default routes;
