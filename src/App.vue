<template>
  <div id="app">
    <header-up></header-up>
    <the-coin></the-coin>
    <the-pond></the-pond>
  </div>
</template>

<script>
export default {
  name: 'App',
  data: {
    showModal: false
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
