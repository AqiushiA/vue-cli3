<!--
 * @Author: liudengke@hd123.com
 * @Date: 2020-01-07 11:53:59
 * @LastEditTime : 2020-01-09 19:40:01
 * @LastEditors  : Please set LastEditors
 * @Description: 页面布局主体部分
 * @FilePath: \htds-webe:\项目文档\project\htds-monitor\monitor\src\components\common\Layout.vue
 -->
<template>
  <div class="layout">
    <el-container>
      <el-header>
        <t-header></t-header>
      </el-header>
      <el-container>
        <el-aside>
          <t-menu :isCollapses="isCollapse"></t-menu>
        </el-aside>
        <el-main :class="isCollapse==false?'layout-content':'layout-contents'">
           <keep-alive :include="tagsList">
              <router-view class="layout-view" @setTags="setTagNull" @closeTag="closeTagsByName" v-if="keepAlive">
              </router-view>
            </keep-alive>
            <router-view v-if="!keepAlive" class="layout-view" @setTags="setTagNull" @closeTag="closeTagsByName">
            </router-view>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script>
  import tHeader from "./Header.vue";
  import tMenu from "./Menu.vue";
  export default {
    components: {
      tHeader,
      tMenu
    },
    data() {
      return {
        tagsList:[],
        keepAlive:true,
        isCollapse: false,
      };
    },
    mounted() {
      var self = this;
      // 组件传值 接收
      this.$on("myMenuEv", function (data) {
        console.log(data)
        self.isCollapse = data;
      });
    },
    methods:{
      setShowChildMenu(val) {
        this.showChildMenu = val;
      },
      closeTagsByName(val) {
        this.$refs.vtsgs.closeTagsByName(val);
      },
      setTagNull() {
        this.tagsList = [];
        this.$refs.vtsgs.closeAll();
      },
      setTags(val) {
        let arr = [];
        if (val && val.length > 0) {
          for (let i = 0, len = val.length; i < len; i++) {
            val[i].name && arr.push(val[i].name);
          }
        }
        this.tagsList = arr;
      }
    }
  };

</script>

<style lang="less">
  .layout {
    height: 100%;

    .el-container {
      height: 100%;
      /*content样式*/
      .layout-content {
        padding: 0;
        position: absolute;
        left: 200px;
        right: 0;
        top: 60px;
        bottom: 0;
        width: auto;
        overflow-x: hidden;
      }

      .layout-contents {
        padding: 0;
        position: absolute;
        left: 64px;
        right: 0;
        top: 60px;
        bottom: 0;
        width: auto;
        padding: 15px;
        overflow-x: hidden;
      }

      .el-aside {
        max-width: 200px!important;
      }

      .el-header {
        padding: 0;
        height: 60px;
      }
    }
  }

</style>
