import { RouteConfig } from 'vue-router';

const routes: RouteConfig[] = [
    {
        path: '/',
        name: 'index',
        component: () => import(/* webpackChunkName: "modules/index" */ '@/pages/index/index.vue'),
    },
    {
        path: '/home',
        name: 'doc',
        component: () => import(/* webpackChunkName: "modules/doc" */ '@/pages/doc/index.vue'),
    },
];

export default routes;
