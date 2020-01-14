<template>
  <div class="login">
    <!-- <img src="../../assets/login-bg.png" class="login-bg-img" /> -->
    
    <div class="login-main">
      <el-row style="width:100%;text-align:center">
        <el-row class="login-main-logo">
          <el-col :span="24" class="login-main-logo-title">
            <img src="../../assets/logo.png" /><span class="main-logo-title">{{title}}</span>
          </el-col>

        </el-row>
        <el-row class="login-main-form">
          <el-form :model="ruleForm" :rules="rules" ref="ruleForm">
            <el-form-item prop="loginAccount">
              <el-input v-model="ruleForm.loginAccount" placeholder="请输入账号"></el-input>
            </el-form-item>
            <el-form-item prop="password">
              <el-input type="password" v-model="ruleForm.password" placeholder="请输入密码"></el-input>
            </el-form-item>
          </el-form>
        </el-row>
        <el-row>
          <el-button type="primary" @click="submitForm('ruleForm')">登录</el-button>
        </el-row>
      </el-row>
    </div>
    <el-row>
      <el-col class="hd-edition" :span="24">
        版本号：1.0.0
      </el-col>
    </el-row>
  </div>
</template>

<script>
 
  export default {
    data() {
      return {
        ruleForm: {
          loginAccount: "",
          password: "",
          platform: "PC"
        },
        title: 'TS监控平台',
        rules: {
          loginAccount: [{
            required: true,
            message: "请输入账号",
            trigger: ["change", "blur"]
          }],
          password: [{
            required: true,
            message: "请输入密码",
            trigger: ["change", "blur"]
          }]
        }
      };
    },
    methods: {
      //提示弹窗封装
      messageView(msg, types) {
        this.$message({
          message: msg,
          type: types
        });
      },
      submitForm(formName) {
        let self = this;
        console.log(formName)
        self.$refs[formName].validate(valid => {
          if (valid) {
           self.$router.push({
                  path: 'home-page'
                });
          } else {
            return false;
          }
        });

      },
     
      resetForm(formName) {
        this.$refs[formName].resetFields();
      }
    },
    mounted() {
      let self = this;
      document.onkeydown = function (e) {
        var ev = document.all ? window.event : e;
        if (ev.keyCode == 13) {
          if (self.$route.path == "/login" || self.$route.path == "/") {
            self.submitForm("ruleForm");
            return false;
          }

        }
      };
    }
  };
</script>
<style lang="less">
  @fontsize: 18px;
  @fontfamily: PingFangSC-Regular, PingFang SC;
  @fontweight: 400;
  @fontcolor: rgba(204, 204, 204, 1);
  @fontline: 28px;

  .login {
    width: 100%;
    height: 100%;
    background: rgba(64, 79, 122, 1);
    .login-main {
      display: flex;
      justify-content: center;
      align-items: center;

      .login-main-logo {
        margin-top: 10%;

        .login-main-logo-title {
          display: flex;
          justify-content: center;

          img {
            width: 115px;
            height: 35px;
            margin-top: 11px;
            margin-right: 20px;
          }

          .main-logo-title {
            height: 50px;
            line-height: 50px;
            font-size: 50px;
            font-family: PangMenZhengDao;
            color: rgba(218, 224, 241, 1);
            letter-spacing: 4px;
          }
        }
      }

      .login-main-form {
        text-align: center;
        margin-top: 60px;

        .el-form-item {
          margin-bottom: 40px;

          .el-input__inner {
            font-size: @fontsize;
            font-family: @fontfamily;
            font-weight: @fontweight;
            color: #333333;
            line-height: @fontline;
          }
        }

        input::-webkit-input-placeholder {
          font-size: @fontsize;
          font-family: @fontfamily;
          font-weight: @fontweight;
          color: @fontcolor;
          line-height: @fontline;
        }

        input::-moz-input-placeholder {
          font-size: @fontsize;
          font-family: @fontfamily;
          font-weight: @fontweight;
          color: @fontcolor;
          line-height: @fontline;
        }

        input::-ms-input-placeholder {
          font-size: @fontsize;
          font-family: @fontfamily;
          font-weight: @fontweight;
          color: @fontcolor;
          line-height: @fontline;
        }
      }

      .el-button {
        margin-top: 20px;
        width: 330px;
        height: 58px;
        background: linear-gradient(130deg,
            rgba(128, 204, 254, 1) 0%,
            rgba(73, 157, 252, 1) 100%);
        border-radius: 50px;
        font-size: 20px;
        color: rgba(255, 255, 255, 1);
      }

      .el-input {
        .el-input__inner {
          width: 330px;
          height: 58px;
          font-size: 16px;
          border-radius: 50px;
          text-align: center;
          font-size: 20px;
          color: rgba(204, 204, 204, 1);
        }
      }

      .el-form-item__error {
        position: relative;
      }
    }
    .hd-edition{
      position: fixed;
      left: 0;
      bottom: 10px;
      font-size:12px;
      font-family: @fontfamily;
      color:#999999;
      text-align: center;
    }
  }
</style>