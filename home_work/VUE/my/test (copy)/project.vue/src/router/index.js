import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Calendar from '@/components/Calendar'
import Modal from '@/components/Modal'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
      {
          path: '/calendar',
          name: 'Calendar',
          component: Calendar
      },
      {
          path: '/modal',
          name: 'Modal',
          component: Modal
      }
  ]
})
