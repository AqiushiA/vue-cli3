<!--
 * @Author: liudengke@hd123.com
 * @Date: 2020-01-09 16:48:53
 * @LastEditTime : 2020-01-10 11:32:25
 * @LastEditors  : Please set LastEditors
 * @Description: 页面布局右边主体部分：查询条件，列表渲染等
 * @FilePath: \htds-webe:\项目文档\project\htds-monitor\monitor\src\components\hd-content\hd-content.vue
 -->

<template>
  <div class="hd-content">
    <el-header>
      <el-row>
        <el-col :span="24">
          <h2 class="hd-content-title">{{title}}</h2>
        </el-col>
      </el-row>
      <el-row>
        <el-col :xs="19" :sm="19" :md="19" :lg="19" :xl="19">
          <slot name="form"></slot>
        </el-col>
        <el-col :xs="5" :sm="5" :md="5" :lg="5" :xl="5">
          <slot name="btn"></slot>
        </el-col>
      </el-row>
    </el-header>
    <el-main>
      <el-row>
        <el-col :span="24">
          <slot name="table"></slot>
        </el-col>
      </el-row>
    </el-main>
  </div>
</template>

<script>
  export default {
    data() {
      return {};
    },
    props: {
      title: String
    },
    mounted() {

    }
  };

</script>

<style lang="less">
  .hd-content {
    .el-header {
      height: 100% !important;
      padding: 20px !important;
      background: #fff;
      margin-bottom: 10px;

      .hd-content-title {
        margin-top: 0;
        margin-bottom: 5px;
        font-size: 16px;
        font-family: PingFangSC-Medium, PingFang SC;
        font-weight: 600;
        color: rgba(51, 51, 51, 1);
      }
    }

    .el-main {
      margin: 20px;
      padding: 20px 40px 100px;
      background: #fff;
      border-radius: 4px;
    }
  }

</style>
