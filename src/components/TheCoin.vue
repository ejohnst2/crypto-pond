<template>
  <div class="coinbox">
    <v-btn v-on:click="say('btcaddress')" color="orange">BTC</v-btn>
    <v-btn v-on:click="say('ethaddress')" color="dark grey">ETH</v-btn>
    <v-btn v-on:click="say('ltcaddress')" color="light blue">LTC</v-btn>
  </div>
</template>

<script>

import LightBox from './LightBox'

export default {
  name: 'TheCoin',
  methods: {
    say: function (message) {
      var wallet = 'Send selected coin and have the TX hash permeate through the cryptopond for eternity: '
      alert(wallet + message)
    }
  }
}

</script>

<style scoped>

.coinbox {
  margin: 20px 20px;
}

</style>
