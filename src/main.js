import 'core-js/es6/promise'
import 'core-js/es6/string'
import 'core-js/es7/array'

import Vue from 'vue'
import BootstrapVue from 'bootstrap-vue'
import VueRouter from 'vue-router'

import App from './App.vue'
import {routes} from './routes'

Vue.use(VueRouter);
Vue.use(BootstrapVue);

const router = new VueRouter({
  mode:'history',
  routes: routes
})
new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
