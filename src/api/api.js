/*
 * @Author: liudengke@hd123.com
 * @Date: 2020-01-10 17:50:17
 * @LastEditTime : 2020-01-10 17:52:21
 * @LastEditors  : Please set LastEditors
 * @Description: 接口api文档
 * @FilePath: \htds-webe:\项目文档\project\htds-monitor\monitor\src\api\api.js
 */
import axios from './http.js'

export default {
  /*  获取项目配置:开票选择*/
  getConfig(data) {
    return axios({
      url: '/ts-server/ts/bapi/user/tsConfig',
      method: 'get',
      params: data
    })
  },
  /* 登录 */
  login(data) {
    return axios({
      url: '/ts-server/ts/bapi/login/accountLogin',
      method: 'post',
      data: data
    })
  }
}