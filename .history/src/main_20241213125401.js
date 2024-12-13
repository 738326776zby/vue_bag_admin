import {createWebHashHistory} from "vue-router"
import install from "vue-bag-admin"
const {app, framework, plugins} = install()

framework.use(plugins.useRouterPlugin)
app.mount('#app')