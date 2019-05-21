<template>
  <div>
    <app-header></app-header>

    <!--<add-blog></add-blog>-->
    <!--<show-blogs></show-blogs>-->
    <!--<list-blogs></list-blogs>-->
    <router-view></router-view>
  </div>
</template>

<script>

    import addBlog from './components/addBlog.vue';
    import showBlogs from './components/showBlogs.vue';
    import listBlogs from './components/listBlogs.vue';
    import header from './components/header.vue';

export default {
  name: 'App',

    components:{
      'add-blog': addBlog,
      'show-blogs': showBlogs,
      'list-blogs': listBlogs,
      'app-header': header,
    },

    data () {
        return {

        }
    },
    methods: {

    }
}
</script>


