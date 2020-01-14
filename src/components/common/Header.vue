<template>
  <div class="header">
    <div class="header-logo">
      <img src="../../assets/logo.png" style="height: 20px; vertical-align: middle;width:60px" />
    </div>
    <div class="header-main">
      <el-row>
        <el-col :xs="2" :sm="2" :md="2" :lg="1" :xl="1" >
          <div class="header-main-toggleBtn" @click="sendMsg">
            <i :class="isCollapse==true?'el-icon-s-fold':'el-icon-s-unfold'"></i>
          </div>
        </el-col>
        <el-col class="header-main-personl" :xs="2" :sm="2" :md="2" :lg="2" :xl="1" :offset="20">
          <el-dropdown>
            <span class="el-dropdown-link">
              <i class="el-icon-user-solid"></i>
              <i class="el-icon-arrow-down"></i>
            </span>
            <el-dropdown-menu slot="dropdown">
              <el-dropdown-item>用户名：666</el-dropdown-item>
              <el-dropdown-item>
                <span class="hd-right-down">
                  修改密码
                </span>
              </el-dropdown-item>
              <el-dropdown-item>
                <span class="hd-right-down">
                  注销
                </span>
              </el-dropdown-item>
            </el-dropdown-menu>
          </el-dropdown>
        </el-col>
      </el-row>
    </div>
  </div>
</template>

<script>
  export default {
    data() {
      return {
         isCollapse: true,
      };
    },
    methods:{
      sendMsg(){
        // 组件传值 发送
        this.$emit('myMenuEv',this.isCollapse);
        this.isCollapse=!this.isCollapse;
      }
    }
  };

</script>

<style lang="less">
  .header {
    width: 100%;
    height: 60px;
    display: flex;
    background: rgba(64, 79, 122, 1);
    box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.06);

    .header-logo {
      width: 140px;
      height: 100%;
      display: flex;
      justify-content: center;
      align-items: center;
    }

    .header-main {
      flex: 1;

      .el-row {
        margin-top: 1.5%;
        .header-main-personl {
          span {
            i {
              font-size: 16px;
              font-family: PingFangSC-Medium, PingFang SC;
              font-weight: 500;
              color: rgba(255, 255, 255, 1);
            }

            .el-icon-arrow-down {
              margin-left: 15px;
            }
          }
        }
        .header-main-toggleBtn{
          i {
              font-size: 24px;
              font-family: PingFangSC-Medium, PingFang SC;
              font-weight: 500;
              color: rgba(255, 255, 255, 1);
            }
        }
      }

    }
  }

</style>
