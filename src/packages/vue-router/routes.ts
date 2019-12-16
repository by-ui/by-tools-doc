import { RouteConfig } from 'vue-router';

const routes: RouteConfig[] = [
    {
        path: '/index',
        name: 'index',
        component: () => import(/* webpackChunkName: "modules/index" */ '@/pages/index/index.vue'),
    },
];

export default routes;
