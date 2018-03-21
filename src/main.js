// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import Vuetify from 'vuetify'
import 'vuetify/dist/vuetify.min.css'
import App from './App'
import router from './router'
import ThePond from './components/ThePond'
import HelloWorld from './components/HelloWorld'
import HeaderUp from './components/HeaderUp'
import TheCoin from './components/TheCoin'
import LightBox from './components/LightBox'


Vue.component('the-pond', ThePond)
Vue.component('hello-world', HelloWorld)
Vue.component('header-up', HeaderUp)
Vue.component('the-coin', TheCoin)
Vue.component('modal', {
  template: '#modal-template'
})



Vue.use(Vuetify)

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
