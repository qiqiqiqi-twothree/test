<template>
  <div class="userInfo">
    <div class="infos">
      <span class="infoTitle">联系人信息</span>
      <div class="item">
        <div class="name">
          <span>姓名</span>
        </div>
        <input  type="text" placeholder="请添加姓名" />
        <img src="../assets/icons/icon_Address.png" />
      </div>
      <div class="item">
        <div class="name">
          <span>电话</span>
        </div>
        <input class="noimg" type="text" placeholder="请添加姓名" />
      </div>
      <div class="item">
        <div class="name">
          <span>省市区</span>
        </div>
        <input  type="text" placeholder="请添加姓名" />
        <img src="../assets/icons/icon_Positioning.png" />
      </div>
      <div class="item">
        <div class="name">
          <span>详细地址</span>
        </div>
        <input  class="noimg" type="text" placeholder="请添加姓名" />
      </div>
      <div class="item">
        <div class="botton">
          <van-checkbox v-model="checked">
            <span>设为默认联系人</span>
          </van-checkbox>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import Vue from 'vue'
import { Checkbox } from 'vant'

Vue.use(Checkbox)

export default {
  components: {},
  data() {
    return {
       checked: false
    }
  },
  created() {}
}
</script>
<style scoped lang="less">
.userInfo {
  width: 94%;
  margin: 0 auto;
  background-color: rgb(248, 234, 248);
  border-radius: 15px;
  .infos {
    padding: 3% 5%;
    box-shadow: 0px 2px 8px 0px rgba(0, 0, 0, 0.05);
  }
  .infoTitle {
    display: block;
    font-size: 18px;
    font-weight: bold;
  }
  .item {
    display: flex;
    justify-content: space-between;
    font-size: 13px;
    margin-top: 10px;
    height: 30px;

    .name {
      width: 20%;
      height: 30px;

      span {
        line-height: 30px;
        display: block;

        // width:65px;
        // display: block;
      }
    }
    .noimg{
      width:80%;
    }
    input {
      width: 70%;
      font-size: 10px;
      border-radius: 10px;
      border: 1px solid rgba(151, 151, 151, 0.5);
      padding-left: 10px;
      box-sizing: border-box;
    }
    img {
      width: 10%;
      display: block;
      vertical-align: center;
    }
  }
}
</style>
