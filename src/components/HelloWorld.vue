<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <h2>{{reversedMessage}} {{msg}}</h2>
      <div>
        <v-btn color="blue">Success</v-btn>
        <v-btn color="green">Error</v-btn>
        <v-btn color="grey">Warning</v-btn>
      </div>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  computed: {
    // a computed getter
    reversedMessage: function () {
      // `this` points to the vm instance
      return this.msg.split('').reverse().join('')
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
