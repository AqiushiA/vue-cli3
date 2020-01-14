/*
 * @Author: your name
 * @Date: 2020-01-10 17:50:17
 * @LastEditTime : 2020-01-14 09:47:16
 * @LastEditors  : Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \htds-webe:\项目文档\project\htds-monitor\monitor\src\api\http.js
 */
import axios from 'axios'
import { Message } from 'element-ui'
// import store from '@/store'
import router from '@/router'
let baseUrl = "https://ts-dev.heading123.cn"
const service = axios.create({
  baseURL:process.env.VUE_APP_BASEURL == undefined ? baseUrl :process.env.VUE_APP_BASEURL, // api 的 base_url
  timeout: 15000, // request timeout  设置请求超时时间
  responseType: "json",
  // withCredentials: true, // 是否允许带cookie这些
  headers: {
    "Content-Type": "application/json;charset=utf-8"
  }
})
// http request 拦截器
service.interceptors.request.use(
  config => {
    console.log(config)
    // if (store.state.account.token) {
    //   config.headers.token = JSON.parse(store.state.account.token)
    // }
    return config
  },
  err => {
    return Promise.reject(err)
  })

// http response 拦截器
service.interceptors.response.use(
  response => {
    console.log(response)
    if (response.status === 200 && response.data !== null) {
      if(response.data.code != 0){
        Message({                  //使用element-ui的message进行信息提示
          showClose: true,
          message: response.data.message == null ?"操作失误":response.data.message,
          type: "error"
        });
      }
      return response.data
    } else {
      response.status !== '200' && response.data.message && Message.error(response.data.message || '网络异常')
      return response.data
    }
  },
  error => {
    if (error.response) {
      switch (error.response.status) {
        case 401:
          // store.commit('ACCOUNT_LOGOUT')
          router.replace({
            path: '/#',
            query: { redirect: router.currentRoute.fullPath }
          })
          break
      }
    }
    return Promise.reject(error.response && error.response.data)
  })

export default service
