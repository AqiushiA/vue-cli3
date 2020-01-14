<!--
 * @Author: liudengke@hd123.com
 * @Date: 2020-01-09 15:53:07
 * @LastEditTime : 2020-01-10 15:10:16
 * @LastEditors  : Please set LastEditors
 * @Description: 同步监控
 * @FilePath: \htds-webe:\项目文档\project\htds-monitor\monitor\src\views\configure-manage\pay-configure\pay-configure.vue
 -->

<template>
  <div class="sync-monitor">
    <hd-content title="同步监控">
      <template slot="table">
        <el-table :data="tableData" :header-cell-style="headerStyle" style="width: 100%">
           <el-table-column prop="date" label="任务名称">
          </el-table-column>
          <el-table-column prop="date" label="上次同步时间">
          </el-table-column>
          <el-table-column prop="name" label="下次同步时间">
          </el-table-column>
          <el-table-column prop="address" label="上次同步结果">
          </el-table-column>
          <el-table-column fixed="right" label="操作" width="200">
            <template >
              <el-button type="primary" size="small">同步</el-button>
            </template>
          </el-table-column>
        </el-table>
        <div class="hd-pagination">
          <el-pagination @size-change="handleSizeChange" @current-change="handleCurrentChange" :current-page="pageNum"
            :page-sizes="pageSize" :page-size="pageRows" layout="total, sizes, prev, pager, next, jumper"
            :total="totalPage">
          </el-pagination>
        </div>
      </template>
    </hd-content>
  </div>
</template>

<script>
  import {
    pageSize
  } from "@/common/js/config";
  export default {
    data() {
      return {
        // 分页信息
        pageSize: pageSize,
        pageNum: 1,
        pageRows: 10,
        totalPage: 0,
        size: "medium", //输入框，下拉框大小
        headerStyle: { //表格头部样式
          background: '#F9F9F9',
          'font-size': '14px',
          'font-family': 'PingFangSC-Regular,PingFang SC',
          'font-weight': 600,
          color: '#333333',
        },
        tableData: [{
          date: '2016-05-02',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        }, {
          date: '2016-05-04',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1517 弄'
        }, {
          date: '2016-05-01',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1519 弄'
        }, {
          date: '2016-05-03',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1516 弄'
        }]
      }
    },
    methods: {
      //分页
      handleSizeChange(val) {
        this.pageRows = val;
      },
      handleCurrentChange(val) {
        this.pageNum = val;
      }
    },
    mounted() {}
  }

</script>

<style lang="less">

</style>
