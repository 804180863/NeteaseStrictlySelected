// 首页状态管理
import {reqCateList} from '../../api'
import {RECRIVE_CATELIST} from '../mutation-type'
//状态数据
const state = {
  cateList: []
};
const mutations = {
  [RECRIVE_CATELIST] (state,{cateList}) {
    // 直接操作mu
    state.cateList = cateList
  }
};
const actions = {
  // 获取分类列表数据
  async getCateList ({commit}, cb) {
    // 发送ajax
    const result = await reqCateList();
    const cateList = result.data
    // 根据返回的数据调用mutations更改数据
    if (result.code === 0) {
      commit(RECRIVE_CATELIST, {cateList})
      typeof cb === 'function' && cb()
    }
  }

};

const getters = {

};

export default {
  state,
  mutations,
  actions,
  getters
}


