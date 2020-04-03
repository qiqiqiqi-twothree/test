<template>
  <div class="body">
    <div class="site-nav-bd1">
      <div class="nav-bd-l">
        <!-- <span>中国大陆</span> -->
        <van-dropdown-menu>
          <van-dropdown-item v-model="value1" :options="option1" />
          <span class="ora">亲，请登录</span>
          <span>免费注册</span>
        </van-dropdown-menu>
      </div>
      <div class="nav-bd-r">
        <div>
          <span class="r">我的淘宝</span>
        </div>
        <div>
          <span class="r">购物车</span>
        </div>

        <div>
          <span class="r">收藏夹</span>
        </div>
        <div>
          <span class="r">商品分类</span>
        </div>
        <div>
          <span class="r">千牛卖家中心</span>
        </div>
        <div>
          <span class="r">联系客服</span>
        </div>
        <div>
          <span class="r">网站导航</span>
        </div>
      </div>
    </div>
    <div class="site-nav-bd2">
      <div class="navimage">
        <div v-for="(item, index) in navimages" :key="index">
          <img v-lazy="item.src" />
        </div>
      </div>
    </div>
    <div class="site-body">
      <div class="search">
        <img
          src="https://gw.alicdn.com/tfs/TB1o2XHsHj1gK0jSZFuXXcrHpXa-190-140.gif"
        />
        <van-search
          class="search-in"
          placeholder="请输入搜索关键词"
          shape="round"
          show-action
          shap="round"
        >
          <van-button type="default" slot="action">搜索</van-button>
        </van-search>
      </div>
      <div class="butt">
        <v-watch @click.native="gotoWatch"></v-watch>
      </div>
      <div class="butt">
        <v-swipe @click.native="gotoSwipe"></v-swipe>
      </div>
      <div class="butt">
        <v-top @click.native="gotoTop"></v-top>
      </div>
      <div class="butt">
        <v-aside @click.native="gotoAside"></v-aside>
      </div>
    </div>
    <el-input v-model="demo" />
    <p>{{ value }}</p>
  </div>
</template>

<script>
// import { Toast } from 'vant';
import watch from '../components/Watch.vue'
import swipe from '../components/swipe.vue'
import top from '../components/top.vue'
import aside from '../components/aside.vue'

export default {
  components: {
    'v-watch': watch,
    'v-swipe': swipe,
    'v-top': top,
    'v-aside': aside
  },
  data() {
    return {
      demo: '',
      value: '',
      value1: 0,
      option1: [
        { text: '中国大陆', value: 0 },
        { text: '全球', value: 1 },
        { text: '中国大陆', value: 2 },
        { text: '中国香港', value: 3 },
        { text: '中国台湾', value: 4 },
        { text: '中国澳门', value: 5 },
        { text: '韩国', value: 6 },
        { text: '澳大利亚', value: 7 }
      ],
      login: '进入登陆页面',
      navimages: [
        // { src: require("../assets/nav/0.png") },
        // { src: require("../assets/nav/1.png") },
        // { src: require("../assets/nav/2.png") },
        // { src: require("../assets/nav/3.png") },
        // { src: require("../assets/nav/4.png") },
        // { src: require("../assets/nav/5.png") }
      ],
      item_one: null,
      item_two: null,
      optlei1: [],
      optlei2: []
    }
  },

  methods: {
    firstLogin() {
      this.$router.push({ path: '/home' })
    },
    gotoWatch() {
      this.$router.push({ path: '/watchDetail' })
    },
    gotoSwipe() {
      this.$router.push({ path: '/swipeDetail' })
    },
    gotoTop() {
      this.$router.push({ path: '/topDetail' })
    },
    gotoAside() {
      this.$router.push({ path: '/category' })
    }
  },
  watch: {
    demo() {
      this.value = this.demo
    }
  }
}
</script>

<style lang="less">
.butt {
  margin-bottom: 20px;
}
.site-nav-bd1 {
  height: 20px;
  width: 1190px;
  margin: 10px 50px;
  .nav-bd-l {
    float: left;
    .el-button {
      font-weight: 10%;
    }
    .van-dropdown-menu {
      height: 23px;
    }
    .ora {
      padding: 0 13px;
      color: #e69b8a !important;
    }
    .nav-bd-l span {
    }
    .van-popup--top {
      height: 300px;
      width: 300px;
    }
  }
  .nav-bd-r {
    display: flex;
    flex-direction: row;
    justify-content: flex-end;
    .r {
      padding: 0 6px;
    }
  }
}
.site-nav-bd2 {
  height: 100px;
  width: 1600px;
  .navimage {
    overflow: hidden;
    background-color: #f31f1f;
    padding: 0 10px;
  }
  .navimage img {
    margin: 0 10px;
    float: left;
  }
}
.site-body {
  margin: 10px 50px;
  .search {
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    img {
    }
  }
  .van-search__action {
    position: relative;
    right: 20px;
    background-color: lightgrey;
  }
}
.product {
  display: flex;
  margin-left: 46px;

  span {
    display: block;
    margin: 0 10px;
    line-height: 48px;
    font-weight: 100px;
  }
}
</style>
