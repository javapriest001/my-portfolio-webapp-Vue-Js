import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify'
import VueRouter from 'vue-router'
import routes from "./routes"
import AOS from 'aos'

AOS.init();

const router = new VueRouter({
  mode: "history",
  routes,
})



Vue.use(VueRouter);

Vue.config.productionTip = false
export const bus = new Vue();
new Vue({
  vuetify,
  router,
  render: h => h(App)
}).$mount('#app')
