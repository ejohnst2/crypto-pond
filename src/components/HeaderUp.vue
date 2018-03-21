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
  color: #efefef;
}
h1:hover, h1:hover + pre, h1:hover + pre + label {
  color: blue;
}

</style>
