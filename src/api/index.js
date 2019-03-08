// 引入ajax模块
import ajax from './ajax'

//使用代理
// const prefix = '/http://m.you.163.com'
const prefix = '/api'
// 请求mock数据

// 请求首页数据
export const reqMsiteData = () => ajax('/home');

// 请求分类列表数据
export const reqCateList = () => ajax('/classify');

// 请求识物组件内Tab懒数据
export const reqTabs = () => ajax(`${prefix}/topic/v1/find/getTabs.json`)

// 请求识物下推荐数据
export const reqRecommendData = () => ajax(`${prefix}/topic/v1/find/recManual.json`)

// 推荐数据上拉加载
export const reqAutoRecommendData = (page, size, exceptIds = '6409,6201,6408,6410,6490,6488,5821,5716,5711,5641,3583,6383,6242,4513,5950,4035,5823,5867,6458,2876,5714,5712,5868,3438,4648,4001,3334,5942,518,5578,4024,4061,3629,3383') => ajax(`${prefix}/topic/v1/find/recAuto.json`, {page, size, exceptIds})

// 获取其它组件数据
export const reqTabData = (page, size, tabId) => ajax(`${prefix}/topic/v1/find/getTabData.json`, {page, size, tabId})

// 获取show组件买家秀数据
export const reqList = (page, size, type) => ajax(`${prefix}/topic/v1/look/getList.json`, {page, size, type})
// 获取show组件collection数据
export const reqColection = (id) => ajax(`${prefix}/topic/v1/look/getCollection.json`, {id})

// 获取搜索组件初始化数据
export const reqInitSearch = () => ajax(`${prefix}/xhr/search/init.json`, 'POST')

