<!--
 * @Author: liudengke@hd123.com
 * @Date: 2020-01-09 15:53:07
 * @LastEditTime : 2020-01-10 15:38:30
 * @LastEditors  : Please set LastEditors
 * @Description: 新增支付配置
 * @FilePath: \htds-webe:\项目文档\project\htds-monitor\monitor\src\views\configure-manage\pay-configure\pay-configure.vue
 -->

<template>
  <div class="add-pay-configure">
    <hd-content title="新增支付配置">
      <template slot="form">
        <el-form ref="form" :model="form" :inline="true">
          <el-form-item>
            <el-select :size="size" v-model="form.store" placeholder="请选择项目">
              <el-option v-for="(item,index) in storeList" :key="index" :label="item.name" :value="item.value">
              </el-option>
            </el-select>
          </el-form-item>
          <el-form-item>
            <el-select :size="size" v-model="form.platform" placeholder="请选择平台">
              <el-option v-for="(item,index) in storeList" :key="index" :label="item.name" :value="item.value">
              </el-option>
            </el-select>
          </el-form-item>
          <el-form-item>
            <el-select :size="size" v-model="form.shop" placeholder="请选择商户类型">
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
            <el-select :size="size" v-model="form.payType" placeholder="请选择支付方式">
              <el-option v-for="(item,index) in storeList" :key="index" :label="item.name" :value="item.value">
              </el-option>
            </el-select>
          </el-form-item>
           <el-form-item>
            <el-select :size="size" v-model="form.payChannel" placeholder="请选择支付渠道">
              <el-option v-for="(item,index) in storeList" :key="index" :label="item.name" :value="item.value">
              </el-option>
            </el-select>
          </el-form-item>
        </el-form>
      </template>
      <template slot="table">
        <el-table :data="tableData" :header-cell-style="headerStyle" style="width: 100%">
          <el-table-column prop="date" label="key">
            <template slot-scope="scope">
              <el-input v-model="scope.row.input" placeholder="请输入key"></el-input>
            </template>
          </el-table-column>
          <el-table-column prop="name" label="value">
             <template slot-scope="scope">
              <el-input v-model="scope.row.input" placeholder="请输入name"></el-input>
            </template>
          </el-table-column>
          <el-table-column prop="address" label="描述">
             <template slot-scope="scope">
              <el-input type="textarea" v-model="scope.row.input" placeholder="请输入描述"></el-input>
            </template>
          </el-table-column>
          <el-table-column fixed="right" label="操作" width="200">
            <template >
              <el-button type="primary" size="small">新增</el-button>
              <el-button type="danger" size="small">删除</el-button>
            </template>
          </el-table-column>
        </el-table>
        <el-row class="add-pay-configure-table-btn">
          <el-col :xs="4" :sm="4" :md="4" :lg="4" :xl="4" :offset="8">
            <el-button type="danger">确定</el-button>
          </el-col>
          <el-col :xs="4" :sm="4" :md="4" :lg="4" :xl="4">
            <el-button >导入配置</el-button>
          </el-col>
        </el-row>
      </template>
    </hd-content>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        size: "medium", //输入框，下拉框大小
        form: {
          store: '', //项目
          platform: '', //平台
          shop: '', //收款方商户
          payType: '', //支付方式
          payChannel:''//支付渠道
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
  .add-pay-configure{
    .add-pay-configure-table-btn{
      padding-top: 20px;
    }
  }
</style>
