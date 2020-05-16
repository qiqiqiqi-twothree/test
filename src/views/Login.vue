<template>
  <div class="login-box">
    <div class="top">
      <van-icon name="arrow-left" />
      <div>
        <span>登陆</span>
      </div>
    </div>
    <div class="form">
      <div class="form-content">
        <div class="name">
          <span>用户名：</span>
        </div>
        <input v-model="userName" placeholder="请输入用户名或手机号" />
        <img src />
      </div>

      <div class="form-content">
        <div class="name">
          <span>密码：</span>
        </div>
        <input v-model="password" placeholder="请输入密码" />
        <img src />
      </div>
      <div class="submit">
        <van-button type="default" @click="submit()">提交</van-button>
      </div>
    </div>
  </div>
</template>
<script>
import { getLogin } from '@/http/mock.js'
import { rasEncrypt } from '@/util/common.js'

import Vue from 'vue'
import { Icon, Button, Toast } from 'vant'

Vue.use(Icon)
Vue.use(Button)
export default {
  components: {},
  data() {
    return {
      userName: '',
      raspassword:'',
      password: '',
      userflage:1
    }
  },
  created() {},
  methods: {
    submit() {
      if (this.userName !== '' && this.password !== '') {
      } else {
        Toast('账号密码不能为空')
      }
     this.raspassword=rasEncrypt(this.password)
      this.$api
        .post(getLogin, {
          loginName: this.userName,
          loginpwd: this.raspassword,
          userFlage:this.userflage
        })
        .then(res => {
          console.log(res,'res')
          if (res.data.code == 200) {
            Toast('登陆成功')
          }
        })
    }
  }
}
</script>
<style scoped lang="less">
.login-box {
  .top {
    width: 100%;
    height: auto;
    background-color: antiquewhite;
    .van-icon {
      margin-left: 5px;
      transform: scale(1.5);
    }
    div {
      display: inline-block;
      width: 90%;
      text-align: center;
      span {
        font-size: 20px;
        line-height: 40px;
        font-weight: 500;
      }
    }
  }
  .form {
    margin: 80px 10px 0;

    .form-content {
      margin-top: 10px;
      display: flex;

      .name {
        width: 20%;
      }
      input {
        width: 60%;
        height: 30px;
        font-size: 10px;
        border-radius: 10px;
        border: 1px solid rgba(151, 151, 151, 0.5);
        padding-left: 10px;
        box-sizing: border-box;
      }
    }
  }
}
</style>
