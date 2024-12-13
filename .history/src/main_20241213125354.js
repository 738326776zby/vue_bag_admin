import install from "vue-bag-admin"
const {app, framework, plugins} = install()
const {app} = install()
framework.use(plugins.useRouterPlugin)
app.mount('#app')