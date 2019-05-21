import Vue from 'vue'
import Router from 'vue-router'
import Products from '@/components/Products'
import Cart from '@/components/Cart'

Vue.use(Router);

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'products',
      component: Products
    },
    {
      path: '/cart',
      name: 'cart',
      component: Cart
    }
  ]
})