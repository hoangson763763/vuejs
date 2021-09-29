import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import {routes} from './router/router'

Vue.use(VueRouter)
Vue.config.productionTip = false

const router = new VueRouter({
  mode : 'history',
  routes // short for `routes: routes`
})

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
