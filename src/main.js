import Vue from 'vue'
import VueRouter from 'vue-router'
import VueNoty from 'vuejs-noty'
import Vuelidate from 'vuelidate'
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'
import firebase from 'firebase'

import App from './App.vue'
import router from './router/index.js'
import store from './store'
import axiosService from './services/service'

Vue.use(BootstrapVue)
Vue.use(IconsPlugin)
Vue.use(VueRouter)
Vue.use(VueNoty)
Vue.use(Vuelidate)

var app = '';
var firebaseConfig = {
        apiKey: process.env.VUE_APP_FIREBASE_API_KEY,
        authDomain: process.env.VUE_APP_FIREBASE_AUTH_DOMAIN,
        databaseURL: process.env.VUE_APP_FIREBASE_AUTH_DATABASE_URL,
        projectId: process.env.VUE_APP_FIREBASE_PROJECT_ID,
        storageBucket: process.env.VUE_APP_FIREBASE_STORAGE_BUCKET,
        messagingSenderId: process.env.VUE_APP_FIREBASE_MESSAGING_SENDER_ID,
        appId: process.env.VUE_APP_FIREBASE_APP_ID,
        measurementId: process.env.VUE_APP_FIREBASE_MEASUREMENT_ID
    }
    // activate the configuration
firebase.initializeApp(firebaseConfig);

Vue.prototype.$https = axiosService
Vue.prototype.$firebase = firebase;


Vue.config.productionTip = false


/* eslint-disable no-new */
firebase.auth().onAuthStateChanged(() => {
    // set token
    if (!app) {
      app = new Vue({
        render: h => h(App),
        router,
        store
      }).$mount('#app')
    }
})


