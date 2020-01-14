<!--
 * @Author: liudengke@hd123.com
 * @Date: 2020-01-09 15:53:07
 * @LastEditTime : 2020-01-10 16:29:31
 * @LastEditors  : Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \htds-webe:\项目文档\project\htds-monitor\monitor\src\views\configure-manage\pay-configure\pay-configure.vue
 -->

<template>
  <div class="service-configure">
    <hd-content title="服务配置">
      <template slot="table">
        <el-table :data="tableData" border :span-method="objectSpanMethod" :header-cell-style="headerStyle"
          style="width: 100%; margin-top: 20px">
          <el-table-column prop="id" label="key" width="180">
          </el-table-column>
          <el-table-column prop="name" label="值">
          </el-table-column>
          <el-table-column prop="amount1" label="描述">
          </el-table-column>
          <el-table-column prop="amount1" label="平台">
          </el-table-column>
          <el-table-column fixed="right" label="操作" width="200">
            <template>
              <el-button type="primary" @click="editClick" size="small">编辑</el-button>
              <el-button type="danger" size="small">删除</el-button>
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
    <el-dialog title="编辑" :visible.sync="dialogVisible" >
      <el-table :data="tableData" :header-cell-style="headerStyle" style="width: 100%">
          <el-table-column prop="date" label="key">
            <template slot-scope="scope">
              <el-input v-model="scope.row.input" placeholder="请输入平台"></el-input>
            </template>
          </el-table-column>
          <el-table-column prop="name" label="value">
             <template slot-scope="scope">
              <el-input v-model="scope.row.input" placeholder="请输入name"></el-input>
            </template>
          </el-table-column>
          <el-table-column fixed="right" label="操作" width="200">
            <template >
              <el-button type="primary" size="small">新增</el-button>
              <el-button type="danger" size="small">删除</el-button>
            </template>
          </el-table-column>
        </el-table>
      <span slot="footer" class="dialog-footer">
        <el-button @click="dialogVisible = false">取 消</el-button>
        <el-button type="primary" @click="dialogVisible = false">确 定</el-button>
      </span>
    </el-dialog>
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
        dialogVisible:false,
        size: "medium", //输入框，下拉框大小
        headerStyle: { //表格头部样式
          background: '#F9F9F9',
          'font-size': '14px',
          'font-family': 'PingFangSC-Regular,PingFang SC',
          'font-weight': 600,
          color: '#333333',
        },
        tableData: [{
          id: 'appname',
          name: '王小虎：1111',
          amount1: '234',
          amount2: '3.2',
          amount3: 10
        }, {
          id: '12987123',
          name: '王小虎：222',
          amount1: '165',
          amount2: '4.43',
          amount3: 12
        }, {
          id: '12987124',
          name: '王小虎',
          amount1: '324',
          amount2: '1.9',
          amount3: 9
        }, {
          id: '12987125',
          name: '王小虎',
          amount1: '621',
          amount2: '2.2',
          amount3: 17
        }, {
          id: '12987126',
          name: '王小虎',
          amount1: '539',
          amount2: '4.1',
          amount3: 15
        }]
      }
    },
    methods: {
      objectSpanMethod({
        row,
        column,
        rowIndex,
        columnIndex
      }) {
        console.log(row, column)
        console.log("rowIndex", rowIndex)
        console.log("columnIndex", columnIndex)
        if (columnIndex === 0 || columnIndex === 4) {
          if (rowIndex % 2 === 0) {
            return {
              rowspan: 2,
              colspan: 1
            };
          } else {
            return {
              rowspan: 0,
              colspan: 0
            };
          }
        }
      },
      editClick() {
        this.dialogVisible = true;
      },
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
