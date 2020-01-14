<!--
 * @Author: liudengke@hd123.com
 * @Date: 2020-01-10 11:52:42
 * @LastEditTime : 2020-01-10 13:35:41
 * @LastEditors  : Please set LastEditors
 * @Description: 按钮样式从新定义
 * @FilePath: \htds-webe:\项目文档\project\htds-monitor\monitor\src\components\hd-button\hd-button.vue
 -->
<!--
  按钮 组件
  type 按钮类型
  size 按钮大小
  text 按钮文字
  addClick
 -->
<template>
  <div class="hd-button">
    <el-button :size="size" :type="type" @click="clickFun">{{text}}</el-button>
    <!-- <span v-text="text"></span> -->
  </div>
</template>

<script>
  export default {
    data() {
      return {

      }
    },
    methods: {
      clickFun() {
        this.$emit('click', '')
      }
    },
    props: ['size', 'text', 'type', 'icon']
  }

</script>

<style lang="less">
  

</style>
