<template>
  <div>
    <h1>{{headline}}</h1>
  </div>
</template>

<script>
export default {
  name: 'HeaderUp',
  data () {
    return {
      headline: 'Toss a coin into the CryptoPond'
    }
  }
}
</script>

<style scoped>

h1 {
  display: inline-block;
  font-size: 3em;
  color: blue;
  animation: blinker 1s linear infinite;

}

@keyframes blinker {
  50% {
    opacity: 0;
  }
}

</style>
