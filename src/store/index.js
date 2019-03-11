import Vue from 'vue'
import Vuex from 'vuex'
import state from './state'
import getters from './getters'
import cate from './modules/cate'
import topic from './modules/topic'
Vue.use(Vuex);
export default new Vuex.Store({
  state,
  getters,
  modules: {
    cate,
    topic,
  }
})
