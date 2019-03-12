
// 管理topic组件状态
import {reqRecommendData, reqTabs, reqAutoRecommendData} from '../../api'
import {RECEIVE_TABS, RECEIVE_RECOMMENDDATA, RECEIVE_AUTORECOMMENDDATA, RECEIVE_TABDATA, RECEIVE_SHOWTABDATA, RECEIVE_SHOWCOLLECTION} from '../mutation-type'

const state = {
  tabs: [],
  recommendData: [],
  autoRecommendData: {
    hasMore:false,
    result: []
  },

  expertTabData: {
    hasMore:false,
    result: []
  },
  newTabData: {
    hasMore:false,
    result: []
  },
  homeTabData: {
    hasMore:false,
    result: []
  },
  // 晒单数据
  showTabData: {
    hasMore:false,
    type: 1,
    pagination: {
      page:0,
      size:0,
      total:0,
      totalPage:0
    },
    topicList: []
  },
  showCollection: {

  }
};
const mutations = {
  // Tab栏数据
  [RECEIVE_TABS] (state,{tabs}) {
    state.tabs = tabs
  },
  // 推荐数据
  [RECEIVE_RECOMMENDDATA] (state, {recommendData}) {
    state.recommendData = recommendData
  },
  // 推荐数据上拉加载
  [RECEIVE_AUTORECOMMENDDATA] (state, {autoRecommendData}) {
    if (!state.autoRecommendData.hasMore) {
      // 如果autoRecommendData还没有数据
      state.autoRecommendData = autoRecommendData
    } else if (state.autoRecommendData.hasMore) {
      // 如果有数据向其中追加
      state.autoRecommendData.result.push(...autoRecommendData.result)
    }
  },
};

const actions = {
  // 获取Tabs数据
  async getTabs ({commit}) {
    // 发送ajax请求
    const result = await reqTabs()
    if (result.code === '200') {
      // 根据ajax请求结果去commit给mutation更新数据
      const tabs = result.data;
      commit(RECEIVE_TABS, {tabs})
    }
  },

  // 获取推荐列表数据
  async getRecommendData ({commit}) {
    // 发送ajax请求
    const result = await reqRecommendData()
    if (result.code === '200') {
      // 根据ajax请求结果去commit给mutation更新数据
      const recommendData = result.data;
      commit(RECEIVE_RECOMMENDDATA, {recommendData})
    }
  },

  // 上拉加载获取数据
  async getAutoRecommendData ({commit},{page, size}) {
    // 发送ajax请求
    const result = await reqAutoRecommendData(page, size)
    if (result.code === '200') {
      // 根据ajax请求结果去commit给mutation更新数据
      const autoRecommendData = result.data;
      commit(RECEIVE_AUTORECOMMENDDATA, {autoRecommendData})
    }
  },

  // 获取识物组件其它数据
  async getTabData ({commit}, {page, size, tabId}) {
    // 发送ajax请求
    const result = await reqTabData(page, size, tabId)
    if (result.code === '200') {
      // 根据ajax请求结果去commit给mutation更新数据
      const tabData = result.data;
      commit(RECEIVE_TABDATA, {tabData, tabId})
    }
  },
};

const getters = {

};

export default {
  state,
  mutations,
  actions,
  getters
}
