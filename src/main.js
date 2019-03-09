// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'
import './mock/mockServer'

Vue.config.productionTip = false
import VueLazyLoad from "vue-lazyload"
import loadingGIF from "./images/timg.gif"

Vue.use(VueLazyLoad, {loading: loadingGIF})
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  VueLazyLoad,
  components: { App },
  template: '<App/>'

})
