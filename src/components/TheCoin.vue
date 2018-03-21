<template>
  <div class="coinbox">
    <v-btn id="show-modal" @click="showModal = true" color="green">BTC</v-btn>
    <v-btn color="grey">ETC</v-btn>
    <v-btn color="blue">LTC</v-btn>
  </div>
</template>

<script>

import LightBox from './LightBox'

export default {
  name: 'TheCoin'
}

</script>

<style scoped>

.coinbox {
  margin: 20px 20px;
}

.animationtarget {
  -webkit-animation: animation 1007ms linear both;
  animation: animation 1007ms linear both;
}

/* Generated with Bounce.js. Edit at https://goo.gl/KssKx3 */

@-webkit-keyframes animation {
  0% { -webkit-transform: matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1); transform: matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1); }
  0.6% { -webkit-transform: matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1); transform: matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1); }
  0.7% { -webkit-transform: matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1); transform: matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1); }
  4.47% { -webkit-transform: matrix3d(1.745, 0, 0, 0, 0, 1.745, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1); transform: matrix3d(1.745, 0, 0, 0, 0, 1.745, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1); }
  8.25% { -webkit-transform: matrix3d(1.911, 0, 0, 0, 0, 1.911, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1); transform: matrix3d(1.911, 0, 0, 0, 0, 1.911, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1); }
  18.79% { -webkit-transform: matrix3d(1.495, 0, 0, 0, 0, 1.495, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1); transform: matrix3d(1.495, 0, 0, 0, 0, 1.495, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1); }
  29.32% { -webkit-transform: matrix3d(1.145, 0, 0, 0, 0, 1.145, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1); transform: matrix3d(1.145, 0, 0, 0, 0, 1.145, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1); }
  39.86% { -webkit-transform: matrix3d(1.025, 0, 0, 0, 0, 1.025, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1); transform: matrix3d(1.025, 0, 0, 0, 0, 1.025, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1); }
  50.4% { -webkit-transform: matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1); transform: matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1); }
  57.95% { -webkit-transform: matrix3d(1.002, 0, 0, 0, 0, 1.002, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1); transform: matrix3d(1.002, 0, 0, 0, 0, 1.002, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1); }
  100% { -webkit-transform: matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1); transform: matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1); }
}

@keyframes animation {
  0% { -webkit-transform: matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1); transform: matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1); }
  0.6% { -webkit-transform: matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1); transform: matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1); }
  0.7% { -webkit-transform: matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1); transform: matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1); }
  4.47% { -webkit-transform: matrix3d(1.745, 0, 0, 0, 0, 1.745, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1); transform: matrix3d(1.745, 0, 0, 0, 0, 1.745, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1); }
  8.25% { -webkit-transform: matrix3d(1.911, 0, 0, 0, 0, 1.911, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1); transform: matrix3d(1.911, 0, 0, 0, 0, 1.911, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1); }
  18.79% { -webkit-transform: matrix3d(1.495, 0, 0, 0, 0, 1.495, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1); transform: matrix3d(1.495, 0, 0, 0, 0, 1.495, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1); }
  29.32% { -webkit-transform: matrix3d(1.145, 0, 0, 0, 0, 1.145, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1); transform: matrix3d(1.145, 0, 0, 0, 0, 1.145, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1); }
  39.86% { -webkit-transform: matrix3d(1.025, 0, 0, 0, 0, 1.025, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1); transform: matrix3d(1.025, 0, 0, 0, 0, 1.025, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1); }
  50.4% { -webkit-transform: matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1); transform: matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1); }
  57.95% { -webkit-transform: matrix3d(1.002, 0, 0, 0, 0, 1.002, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1); transform: matrix3d(1.002, 0, 0, 0, 0, 1.002, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1); }
  100% { -webkit-transform: matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1); transform: matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1); }
}

</style>
