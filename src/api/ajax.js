// 封装发送ajax模块

import axios from 'axios'

export default function ajax (url, data = {}, method = 'GET') {

  return new Promise(((resolve, reject) => {
    //自定义promise对象
    let promise;
    if (method === 'GET') {
      //发送GET请求
      promise = axios.get(url, {params: data})  //会将data内的属性以query参数的形式拼接
    }else {
      //发送POST请求
      promise = axios.post(url, data)
    }
    promise
    .then(response => {
      resolve(response.data)
    })
    .catch(error => {
      reject('请求出错,出错信息是:' + error.message)
    })
  }))
}
