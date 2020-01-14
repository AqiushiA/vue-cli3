/*
 * @Author: liudengke@hd123.com
 * @Date: 2020-01-07 13:46:03
 * @LastEditTime : 2020-01-10 15:12:11
 * @LastEditors  : Please set LastEditors
 * @Description: 路由配置
 * @FilePath: \htds-webe:\项目文档\project\htds-monitor\monitor\src\router\index.js
 */
import Vue from 'vue'
import VueRouter from 'vue-router'
import Layout from '@/components/common/Layout'
Vue.use(VueRouter)
const router = new VueRouter({
  routes: [{
      path: '/',
      name: 'login',
      component: resolve => require(['@/views/login/login'], resolve)
    },
    {
      path: '/',
      name: 'layout',
      component: Layout,
      children: [{
        /* 测试页面路由 */
        path: '/home-page',
        query: {
          mode: 1
        },
        meta: {
          title: '首页',
          keepAlive: true
        },
        component: resolve => require(['@/views/home-page/home-page'], resolve)
      }, {
        path: '/pay-configure',
        meta: {
          title: '支付配置',
          keepAlive: true
        },
        component: resolve => require(['@/views/configure-manage/pay-configure/pay-configure'], resolve)
      },{
        path: '/add-pay-configure',
        meta: {
          title: '新增支付配置',
          keepAlive: true
        },
        component: resolve => require(['@/views/configure-manage/pay-configure/add-pay-configure'], resolve)
      },{
        path: '/service-configure',
        meta: {
          title: '服务配置',
          keepAlive: true
        },
        component: resolve => require(['@/views/configure-manage/service-configure/service-configure'], resolve)
      },{
        path: '/pay-monitor',
        meta: {
          title: '支付监控',
          keepAlive: true
        },
        component: resolve => require(['@/views/monitor-manage/pay-monitor/pay-monitor'], resolve)
      },{
        path: '/sync-monitor',
        meta: {
          title: '同步监控',
          keepAlive: true
        },
        component: resolve => require(['@/views/monitor-manage/sync-monitor/sync-monitor'], resolve)
      }]
    }
  ]
})

router.beforeEach((to, from, next) => {
  /* 路由发生变化修改页面title */
  if (to.meta.title) {
    document.title = to.meta.title
  }
  next()
})

export default router
