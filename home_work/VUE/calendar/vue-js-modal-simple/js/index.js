Vue.component('modal', {
  template: '#modal',
  data() {
    return {
      active: false };

  },
  methods: {
    click(e) {
      this.active = !this.active;
    } } });



new Vue({
  el: '#app' });