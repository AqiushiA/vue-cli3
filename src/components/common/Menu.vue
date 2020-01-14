<!--
 * @Author: liudengke@hd123.com
 * @Date: 2020-01-07 11:53:59
 * @LastEditTime : 2020-01-10 16:37:05
 * @LastEditors  : Please set LastEditors
 * @Description: 左边菜单导航组件
 * @FilePath: \htds-webe:\项目文档\project\htds-monitor\monitor\src\components\common\Menu.vue
 -->
<template>
  <div class="menu">
    <el-scrollbar style="height:100%">
      <el-menu :default-active="$route.path" :collapse="isCollapses" :router="true" class="el-menu-vertical-demo"
        text-color="#333333" active-text-color="#499DFC" unique-opened>
        <el-submenu v-for="(menu,index) in menuList" :key="index" :index="`item-${index}`"
          :popper-append-to-body="menu.sysPermissionResBeanList.length<1?false:true">
          <template slot="title">
            <el-menu-item :key="index" :index="menu.targetPage">
              <i :class="'iconfont '+menu.permissionClass"></i>
              <span>{{menu.name}}</span>
            </el-menu-item>
          </template>
          <el-menu-item-group>
            <el-menu-item v-for="(child ,i) in menu.sysPermissionResBeanList" :key="i"
              :index="child.targetPage">{{child.name}}
            </el-menu-item>
          </el-menu-item-group>
        </el-submenu>
      </el-menu>
    </el-scrollbar>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        menuList: [{
            "id": 1,
            "name": "首页",
            "parentId": 0,
            "permissionClass": "el-icon-s-home",
            "permissionKey": "",
            "permissionType": '',
            "sysPermissionResBeanList": [],
            "targetPage": "/home-page"
          },
          {
            "code": "mission_manage",
            "id": 2,
            "name": "配置管理",
            "parentId": 0,
            "permissionClass": "el-icon-s-cooperation",
            "permissionKey": "",
            "permissionType": 1,
            "sysPermissionResBeanList": [{
              "butPermList": null,
              "code": "mission_sche_maintenance",
              "id": 3,
              "name": "支付配置",
              "permissionKey": "",
              "permissionType": 1,
              "targetPage": "/pay-configure"
            }, {
              "butPermList": null,
              "code": "mission_sche_maintenance",
              "id": 4,
              "name": "服务配置",
              "permissionKey": "",
              "permissionType": 1,
              "targetPage": "/service-configure"
            }],
            "targetPage": ""
          },
          {
            "code": "mission_manage",
            "id": 5,
            "name": "监控管理",
            "parentId": 0,
            "permissionClass": "el-icon-s-platform",
            "permissionKey": "",
            "permissionType": 1,
            "sysPermissionResBeanList": [{
              "butPermList": null,
              "code": "mission_sche_maintenance",
              "id": 6,
              "name": "支付监控",
              "permissionKey": "",
              "permissionType": 1,
              "targetPage": "/pay-monitor"
            }, {
              "butPermList": null,
              "code": "mission_sche_maintenance",
              "id": 7,
              "name": "同步监控",
              "permissionKey": "",
              "permissionType": 1,
              "targetPage": "/sync-monitor"
            }],
            "targetPage": ""
          }
        ], //菜单列表
      };
    },
    props: ["isCollapses"],
    mounted(){
      console.log(this.isCollapses)
    }
  };

</script>

<style lang="less">
  .menu {
    height: 100%;
    .el-scrollbar {
      width: 100%;
      height: 100%;
      box-shadow:0px 0px 10px 0px rgba(0,0,0,0.06);
      .el-scrollbar__wrap {
        margin-right: -37px!important;
          .el-scrollbar__view {
            width: 100%;
            height: 100%;
            box-shadow:0px 0px 10px 0px rgba(0,0,0,0.06);
          }
        }

      }

      .el-menu {
        height: 100%;
        background:rgba(249,249,249,1);
        &>li{
          padding-right: 20px;
        }
        .el-submenu__title {
          padding : 0!important;
          &>li {
            padding-left: 20px!important;
            font-size: 16px;
            font-family: PingFangSC-Medium, PingFang SC;

            i {
              margin-right: 5px;
            }
          }
        }

        .el-menu--inline {
          li {
            padding: 0;
            font-size: 16px;
            font-family: PingFangSC-Medium, PingFang SC;

            .el-menu-item-group__title {
              padding: 0;
            }
          }
        }
      }
    }

</style>
