import Vue from "vue";
import App from "./App.vue";
import router from "./router";
// import Ninjas from "./components/Ninjas.vue"; //globali register component

// Vue.component('ninjas', Ninjas);

Vue.config.productionTip = false;

export const bus = new Vue();

new Vue({
  router,
  render: h => h(App)
}).$mount("#app");
