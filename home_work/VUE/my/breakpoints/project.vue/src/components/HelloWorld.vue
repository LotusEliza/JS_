<template>
  <div class="hello">
    <mq-layout mq="lg">
      <div class="container">
        <div class="row">
          <div class="col">
            1 of 3
          </div>
          <div class="col">
            2 of 3
          </div>
          <div class="col">
            3 of 3
          </div>
        </div>
      </div>
    </mq-layout>

    <mq-layout :mq="['sm', 'md']">
      <div class="container">
        <div class="row">
          <div class="col">
            1 of 3
          </div>
        </div>
      </div>
    </mq-layout>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
