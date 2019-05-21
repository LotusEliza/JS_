<template>
  <div>

    <!--<h1>{{ title }}</h1>-->
    <!--<p>{{ greeting() }}</p>-->
    <!--<ninjas></ninjas>-->
    <app-header v-bind:title="title" v-on:changeTitle="updateTitle($event)"></app-header>
    <app-content v-bind:ninjas="ninjas"></app-content>
    <!--<hr>-->
    <!--<app-content v-bind:ninjas="ninjas"></app-content>-->
    <add-footer v-bind:title="title"></add-footer>
  </div>
</template>

  <script>

    // import Ninjas from './Ninjas.vue' //locally register components
    import Header from './Header.vue' //locally register components
    import Footer from './Footer.vue' //locally register components
    import Content from './Content.vue' //locally register components

  export default {
        components: {
            // 'ninjas': Ninjas,
            'app-header': Header,
            'add-footer': Footer,
            'app-content': Content,
        },
    data(){
        return{
            ninjas:[
                {name: 'Ryu', speciality: 'Vue Components', show:false},
                {name: 'Mario', speciality: 'HTML wizard', show:false},
                {name: 'Crystal', speciality: 'Click events', show:false},
                {name: 'Ryu', speciality: 'Vue Components', show:false},
                {name: 'Mario', speciality: 'HTML wizard', show:false},
                {name: 'Crystal', speciality: 'Click events', show:false},
            ],
            title: "Vue Ninjas",
        }
    },
      methods:{
        greeting: function () {
            return "Heyyyy cow boy!"
        },
          updateTitle:function (updatedTitle) {
             this.title = updatedTitle;
          }
      }

  };
  </script>

  <style scoped>
    h1{
      color: red;
    }
  </style>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<!--<style scoped>-->
<!--h3 {-->
  <!--margin: 40px 0 0;-->
<!--}-->
<!--ul {-->
  <!--list-style-type: none;-->
  <!--padding: 0;-->
<!--}-->
<!--li {-->
  <!--display: inline-block;-->
  <!--margin: 0 10px;-->
<!--}-->
<!--a {-->
  <!--color: #42b983;-->
<!--}-->
<!--</style>-->
