// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import VueResource from 'vue-resource'

Vue.config.productionTip = false;

Vue.use(VueResource);

//custom directives globally

// Vue.directive('rainbow', {
//   bind(el, binding, vnode){
//     el.style.color = "#" + Math.random().toString().slice(2,8);
//   }
// });

Vue.directive("theme", {
  bind(el, binding, vnode){
    if(binding.value == 'wide'){
      el.style.maxWidth = "1200px";
    }else if(binding.value == 'narrow'){
        el.style.maxWidth = "500px";
    }

    if(binding.arg == 'column'){
        el.style.background = '#ddd';
        el.style.padding='20px';
    }
  }
});


//Filters globally

// Vue.filter('to-uppercase', function (value) {
//     return value.toUpperCase()
// });

Vue.filter('snippet', function (value) {
    return value.slice(0,100) + '...';
});

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
