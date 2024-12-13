import {createRouter, createWebHashHistory} from "vue-router"
import install from "vue-bag-admin"
const {app, framework, plugins} = install()

const files = import.meta.glob(`@/app/views/*/*.vue`, {eager: true}) // 获取所有文件路由地址，配合接口插件一起使用，动态路由

// 传递创建的实例
const router = createRouter({
    history: createWebHashHistory(),
    routes: [{
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
        }],
})

framework.use(plugins.useRouterPlugin, {
    files,
    router
})

framework.use(plugins.useApisPlugin, ['/menus'])
app.mount('#app')