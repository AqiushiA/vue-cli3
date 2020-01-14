<!--
 * @Author: liudengke@hd123.com
 * @Date: 2020-01-09 15:53:07
 * @LastEditTime : 2020-01-14 09:44:02
 * @LastEditors  : Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \htds-webe:\项目文档\project\htds-monitor\monitor\src\views\configure-manage\pay-configure\pay-configure.vue
 -->

<template>
  <div class="pay-configure">
    <hd-content title="支付配置">
      <template slot="form">
        <el-form ref="form" :model="form" :inline="true">
          <el-form-item>
            <el-select :size="size" v-model="form.store" placeholder="请选择项目">
              <el-option v-for="(item,index) in storeList" :key="index" :label="item.name" :value="item.value">
              </el-option>
            </el-select>
          </el-form-item>
          <el-form-item>
            <el-select :size="size" v-model="form.shop" placeholder="请选择收款方商户">
              <el-option v-for="(item,index) in storeList" :key="index" :label="item.name" :value="item.value">
              </el-option>
            </el-select>
          </el-form-item>
          <el-form-item>
            <el-select :size="size" v-model="form.platform" placeholder="请选择商户类型">
              <el-option v-for="(item,index) in storeList" :key="index" :label="item.name" :value="item.value">
              </el-option>
            </el-select>
          </el-form-item>
          
          <el-form-item>
            <el-select :size="size" v-model="form.payType" placeholder="请选择支付方式">
              <el-option v-for="(item,index) in storeList" :key="index" :label="item.name" :value="item.value">
              </el-option>
            </el-select>
          </el-form-item>
        </el-form>
      </template>
      <template slot="btn">
        <el-row class="hd-cost-btn">
          <el-col :xs="12" :sm="12" :md="12" :lg="8" :xl="8">
            <el-button :size="size" type="danger">同步</el-button>
          </el-col>
          <el-col :xs="12" :sm="12" :md="12" :lg="8" :xl="8">
            <el-button :size="size" type="primary">查询</el-button>
          </el-col>
          <el-col :xs="12" :sm="12" :md="12" :lg="8" :xl="8">
            <el-button :size="size">重置</el-button>
          </el-col>
        </el-row>
      </template>
      <template slot="table">
        <el-row class="hd-table-button">
          <el-col :span="24">
            <hd-button @click="addClick" size="small" type="primary" text="新增"></hd-button>
          </el-col>
        </el-row>
        <el-table :data="tableData" :header-cell-style="headerStyle" style="width: 100%">
          <el-table-column prop="date" label="支付渠道">
          </el-table-column>
          <el-table-column prop="name" label="项目">
          </el-table-column>
          <el-table-column prop="address" label="平台">
          </el-table-column>
          <el-table-column prop="date" label="收款商户">
          </el-table-column>
           <el-table-column prop="date" label="商户类型">
          </el-table-column>
          <el-table-column prop="name" label="支付类型名称">
          </el-table-column>
          <el-table-column prop="address" label="同cre匹配状态">
          </el-table-column>
          <el-table-column fixed="right" label="操作" width="200">
            <template>
              <el-button type="primary" size="small">编辑</el-button>
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
  </div>
</template>

<script>
  import hdButton from "../../../components/hd-button/hd-button"
  import {
    pageSize
  } from "@/common/js/config";
  export default {
    components: {
      "hd-button": hdButton
    },
    name: 'home',
    data() {
      return {
        // 分页信息
        pageSize: pageSize,
        pageNum: 1,
        pageRows: 10,
        totalPage: 0,
        size: "medium", //输入框，下拉框大小
        form: {
          store: '', //项目
          platform: '', //平台
          shop: '', //收款方商户
          payType: '' //支付方式
        },
        headerStyle: { //表格头部样式
          background: '#F9F9F9',
          'font-size': '14px',
          'font-family': 'PingFangSC-Regular,PingFang SC',
          'font-weight': 600,
          color: '#333333',
        },
        storeList: [{
            name: "项目一",
            value: 1
          },
          {
            name: "项目二",
            value: 2
          }
        ],
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
      loadData(){
         let self = this;
        self.$api.getConfig({}).then(res => {
          if (res.code == "0") {
            // let configList = res.data;
            
            // const configName = configList.filter(data => {
            //   return data.key == "appName";
            // })
           
          }

        });

      },
      addClick() {
        this.$router.push({
          path: 'add-pay-configure'
        });
      },
      //分页
      handleSizeChange(val) {
        this.pageRows = val;
      },
      handleCurrentChange(val) {
        this.pageNum = val;
      }
    },
    mounted() {
      this.loadData()
    }
  }

</script>

<style lang="less">

</style>
