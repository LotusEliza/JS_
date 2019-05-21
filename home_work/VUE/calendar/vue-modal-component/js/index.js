
const Modal = {
  name: 'modal',
  template: '#modal',
  methods: {
    close(event) {
      this.$emit('close');
    } } };



new Vue({
  el: '#app',
  name: 'app',
  components: {
    modal: Modal },

  data() {
    return {
      isModalVisible: false };

  },
  methods: {
    showModal() {
      this.isModalVisible = true;
    },
    closeModal() {
      this.isModalVisible = false;
    } } });