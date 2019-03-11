
// 管理topic组件状态
import {reqRecommendData, reqTabs, reqAutoRecommendData, reqTabData, reqList, reqColection} from '../../api'
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
  // 获取其它组件数据
  [RECEIVE_TABDATA] (state, {tabData, tabId}) {
    // 根据tabId判断要往哪个状态里存放数据
    /*
    *   9: 推荐
    *   4: 达人
    *   5: 上新
    *   7: 晒单
    *   6: HOME
    * */
    // const dataArr = [{id:4, tabData: 'expertTabData'}]
    if (tabId === 4) {
      if (!state.expertTabData.hasMore) {
        // 如果tabData还没有数据
        state.expertTabData = tabData
      } else if (state.expertTabData.hasMore) {
        // 如果有数据向其中追加
        state.expertTabData.result.push(...tabData.result)
      }
    } else if (tabId === 5) {
      if (!state.newTabData.hasMore) {
        // 如果tabData还没有数据
        state.newTabData = tabData
      } else if (state.newTabData.hasMore) {
        // 如果有数据向其中追加
        state.newTabData.result.push(...tabData.result)
      }
    } else if (tabId === 6) {
      if (!state.homeTabData.hasMore) {
        // 如果tabData还没有数据
        state.homeTabData = tabData
      } else if (state.homeTabData.hasMore) {
        // 如果有数据向其中追加
        state.homeTabData.result.push(...tabData.result)
      }
    }
  },

  // 获取show组件数据
  [RECEIVE_SHOWTABDATA] (state, {showTabData}) {
    if (!state.showTabData.hasMore) {
      // 如果tabData还没有数据
      state.showTabData = showTabData
    } else if (state.showTabData.hasMore) {
      // 如果有数据向其中追加
      // 进一步判断type类型
      if (state.showTabData.type === showTabData.type) {
        // 如果类型相同再追加, 否则不追加, 避免所有数据都追加在一个数组内
        state.showTabData.topicList.push(...showTabData.topicList)
      } else {
        // 不相同, 直接赋值
        state.showTabData = showTabData
      }
    }
  },

  [RECEIVE_SHOWCOLLECTION] (state, {showCollection}) {
    state.showCollection = showCollection
  }

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

  // 获取show组件买家秀数据
  async getList ({commit}, {page, size, type}) {
    // 发送ajax请求
    const result = await reqList(page, size, type)
    if (result.code === '200') {
      // 根据ajax请求结果去commit给mutation更新数据
      let showTabData = result.data;
      // 加工拿到的showTabData数据, 为其添加type属性
      showTabData.type = type
      commit(RECEIVE_SHOWTABDATA, {showTabData})
    }
  },

  // 获取show组件Collection数据
  async getCollection ({commit}, {id}) {
    // 发送ajax请求
    const result = await reqColection(id)
    if (result.code === '200') {
      // 根据ajax请求结果去commit给mutation更新数据
      const showCollection = result.data;
      commit(RECEIVE_SHOWCOLLECTION, {showCollection})
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
