import Vue from 'vue'
import './plugins/vuetify'
import App from './App.vue'

import router from "./routes.js"
import store from "./store.js"

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')
