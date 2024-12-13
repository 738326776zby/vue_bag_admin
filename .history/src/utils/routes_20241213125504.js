import {createWebHashHistory} from "vue-router"
import install from "vue-bag-admin"
const {app, framework, plugins} = install()

const routes = [
    {
        path: '/',
        component: () => import('@/layouts/index.vue'),
        children: [
            {
                path: '/home',
                name: 'home',
                component: () => import('@/app/views/home/index.vue'),

            }]
    },
    {
        path: '/about',
        name: 'about',
        component: () => import('@/app/views/about/index.vue'),

    },
]
framework.use(plugins.useRouterPlugin, {
    routes // 添加路由 会自动覆盖框架默认路由
})
app.mount('#app')