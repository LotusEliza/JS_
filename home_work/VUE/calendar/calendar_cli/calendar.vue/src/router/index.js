import Vue from 'vue'
import Router from 'vue-router'
import Calendar from '@/components/Calendar'
import Home from '@/components/Home'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/calendar',
      name: 'Calendar',
      component: Calendar
    },
    {
        path: '/home',
        name: 'Home',
        component: Home
    }
  ]
})
