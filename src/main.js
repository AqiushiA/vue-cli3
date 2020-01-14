/*
 * @Author: liudengke@hd123.com
 * @Date: 2020-01-07 13:46:03
 * @LastEditTime : 2020-01-10 17:55:37
 * @LastEditors  : Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \htds-webe:\项目文档\project\htds-monitor\monitor\src\main.js
 */
import Vue from 'vue'
import './plugins/axios'
import App from './App.vue'
import router from './router'
import store from './store'
import Element from 'element-ui'
import api from './api/api';
import hdContent from '@/components/hd-content/hd-content.vue'
import "./static/css/base.less";//全局公共样式
import 'element-ui/lib/theme-chalk/index.css'
Vue.prototype.$api = api;
Vue.config.productionTip = false
Vue.use(Element)
Vue.component('hd-content',hdContent)
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
