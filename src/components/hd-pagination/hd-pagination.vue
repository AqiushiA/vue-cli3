<!--
 * @Author: liudengke@hd123.com
 * @Date: 2020-01-09 16:48:53
 * @LastEditTime : 2020-01-10 10:49:49
 * @LastEditors  : Please set LastEditors
 * @Description: 列表分页
 * @FilePath: \htds-webe:\项目文档\project\htds-monitor\monitor\src\components\hd-content\hd-content.vue
 -->

<template>
  <div class="hd-pagination">
    <el-pagination @size-change="handleSizeChange" @current-change="handleCurrentChange" :current-page="pageNum"
      :page-sizes="pageSize" :page-size="pageRows" layout="total, sizes, prev, pager, next, jumper" :total="totalPage">
    </el-pagination>
  </div>
</template>

<script>
  import EventHandler from '../../common/js/EventHandler'; // 用于给同级组件之间传递事件
  export default {
    data() {
      return {
        // 分页信息
        pageSize: [10, 20, 50, 100],
        pageNum: 1,
        pageRows: 10,
        totalPage: 0,
      };
    },
    props: {
      title: String
    },
    methods: {
      //分页
      handleSizeChange(val) {
        this.pageRows = val;
        // 组件传值 发送
        EventHandler.$emit('handleSizeChange', val);
      },
      handleCurrentChange(val) {
        this.pageNum = val;
        // 组件传值 发送
        EventHandler.$emit('handleCurrentChange', val);
      }
    },
    mounted() {

    }
  };

</script>

<style lang="less">


</style>
