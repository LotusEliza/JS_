import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Calendar from '@/components/Calendar'
import Modal from '@/components/Modal'
import Form from '@/components/Form.vue';

Vue.use(Router)

export default new Router({
  mode: 'history',
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
      },
      {
          path: '/form',
          name: 'Form',
          component: Form
      }
  ]
})
