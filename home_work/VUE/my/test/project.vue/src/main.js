// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'


let Bootstrap = require('bootstrap')
import jQuery from 'jquery'
global.jQuery = jQuery
import 'bootstrap/dist/css/bootstrap.css'


import BootstrapVue from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

Vue.use(BootstrapVue)

import VueMq from 'vue-mq'

Vue.use(VueMq, {
    breakpoints: { // default breakpoints - customize this
        sm: 450,
        md: 832,
        lg: Infinity,
    },
    defaultBreakpoint: 'sm' // customize this for SSR
})

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
