<template>
   <div>
      <h1>Home</h1>
      <modal name="hello-world">
         <div class="input-group">
            <div class="input-group-prepend">
               <span class="input-group-text">With textarea</span>
            </div>
            <textarea class="form-control" aria-label="With textarea"></textarea>
            <button v-on:click="hide">Hide me</button>
         </div>
      </modal>
      <button v-on:click="show">Click me</button>
   </div>
</template>

<script>
    export default {
        methods: {
            show () {
                this.$modal.show('hello-world');
            },
            hide () {
                this.$modal.hide('hello-world');
            }
        }
    }
</script>