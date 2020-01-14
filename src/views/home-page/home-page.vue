<!--
 * @Author:  liudengke@hd123.com
 * @Date: 2020-01-07 13:46:03
 * @LastEditTime : 2020-01-14 09:38:31
 * @LastEditors  : Please set LastEditors
 * @Description: 登录首页
 * @FilePath: \htds-webe:\项目文档\project\htds-monitor\monitor\src\views\home-page\home-page.vue
 -->

<template>
  <div class="home-page">
    <div>
      <h3>WELCOME</h3>
      <p>欢迎使用TS监控平台</p>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'home'
  }

</script>

<style lang="less">
  .home-page {
    width: 100%;
    height: 100%;
    background: #fff;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    h3 {
      margin: 0;
      width: 100%;
      font-size: 40px;
      font-family: PingFangSC-Medium, PingFang SC;
      font-weight: 600;
      color: rgba(73, 157, 252, 1);
    }

    p {
      width: 100%;
      font-size: 20px;
      font-family: PingFangSC-Medium, PingFang SC;
      font-weight: 500;
      color: rgba(51, 51, 51, 1);
      text-align: center;
    }
  }

</style>
