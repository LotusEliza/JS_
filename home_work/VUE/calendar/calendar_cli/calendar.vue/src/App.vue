<template>
  <div id="app">
    <app-header></app-header>
    <router-view></router-view>
    <app-modal></app-modal>
  </div>
</template>


<script>


import Calendar from './components/Calendar.vue';
import Header from './components/Header.vue';
import Home from './components/Home.vue';
import Modal from './components/modal.vue';

import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'jquery/src/jquery.js'
import 'bootstrap/dist/js/bootstrap.min.js'

export default {
    data() {
        return {
            // showModal: false,
        };
    },

  name: 'App',
    components:{
        'home': Home,
        'calendar': Calendar,
        'app-header': Header,
        'app-modal': Modal,
    },

}
</script>

<style>
/*#app {*/
  /*font-family: 'Avenir', Helvetica, Arial, sans-serif;*/
   /*-webkit-font-smoothing: antialiased;*/
   /*-moz-osx-font-smoothing: grayscale;*/
  /*text-align: center;*/
  /*color: #2c3e50;*/
  /*margin-top: 60px;*/
/*}*/
/*@import'~bootstrap/dist/css/bootstrap.css';*/
</style>
