import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import addBlog from '@/components/addBlog'
import showBlogs from '@/components/showBlogs'
import listBlogs from '@/components/listBlogs'
import singleBlog from '@/components/singleBlog'

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
          path: '/add',
          name: 'addBlog',
          component: addBlog
      },
      {
          path: '/show',
          name: 'showBlogs',
          component: showBlogs
      },
      {
          path: '/blog/:id',
          name: 'singleBlog',
          component: singleBlog
      },
      {
          path: '/list',
          name: 'listBlogs',
          component: listBlogs
      },
  ]
})
