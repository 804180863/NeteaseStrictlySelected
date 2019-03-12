import Mock from 'mockjs'
import classify_data from './fenlei_zhuanqu.json'
Mock.mock( '/classify', {
  code: 0,
  data: classify_data
});
