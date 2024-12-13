mport {createWebHashHistory} from "vue-router"
import install from "vue-bag-admin"
const {app, framework, plugins} = install()

const files = import.meta.glob(`@/app/views/*/*.vue`, {eager: true}) // 获取所有文件路由地址，配合接口插件一起使用，动态路由
framework.use(plugins.useRouterPlugin, {
    files,
})
framework.use(plugins.useApisPlugin, ['/menus'])
app.mount('#app')