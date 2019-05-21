import Vue from 'vue'
import App from './App'
import router from './router'

import { store } from './store/store'

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  store: store,
  el: '#app',
  router,
  render: h => h(App)
})