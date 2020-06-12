<template>
  <div class="body">
    <div class="site-nav-bd1">
      <div class="nav-bd-l">
        <!-- <span>中国大陆</span> -->
        <van-dropdown-menu>
          <van-dropdown-item
            :options="option1"
            v-model="value1"
          />
          <span
            @click="login()"
            class="ora"
          >亲，请登录</span>
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
        <div
          :key="index"
          v-for="(item, index) in navimages"
        >
          <img v-lazy="item.src" />
        </div>
      </div>
    </div>
    <div class="site-body">
      <div class="search">
        <img src="https://gw.alicdn.com/tfs/TB1o2XHsHj1gK0jSZFuXXcrHpXa-190-140.gif" />
        <img
          src="http://5b0988e595225.cdn.sohucs.com/images/20181125/e521e3a87edc45c7a3bee380e4a4da7b.gif"
          style="width:150px;height:150px"
        />
        <van-search
          class="search-in"
          placeholder="请输入搜索关键词"
          shap="round"
          shape="round"
          show-action
        >
          <van-button
            slot="action"
            type="default"
          >搜索</van-button>
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
      <div class="butt">
        <v-comment @click.native="gotoComment"></v-comment>
      </div>
    </div>
    <div class="voiceAssist">
      <div
        @click="gotoVoice"
        class="voiceAssist-img"
      >
        <img
          alt
          src="../assets/img/voice_assistant/assistant_icon@2x.png"
        />
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
import comment from '../components/comment.vue'
import Dialog from 'vant'

export default {
  components: {
    'v-watch': watch,
    'v-swipe': swipe,
    'v-top': top,
    'v-aside': aside,
    'v-comment': comment
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
      navimages: [
        // { src: require('../assets/nav/0.png') },
        // { src: require('../assets/nav/1.png') },
        // { src: require('../assets/nav/2.png') },
        // { src: require('../assets/nav/3.png') },
        // { src: require('../assets/nav/4.png') },
        // { src: require('../assets/nav/5.png') }
      ],
      item_one: null,
      item_two: null,
      optlei1: [],
      optlei2: []
    }
  },

  methods: {
    login() {
      this.$router.push({ path: '/login' })
    },
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
    },
    gotoComment() {
      this.$router.push({ path: '/comment' })
    },
    gotoVoice() {
      this.$router.push('/voiceAssist')
    },
    showconfirm() {
      this.$dialog.confirm({
              title: '温馨提示',
              message: '本次购买商品将在5月30号至6月1号参与格力电器6.1直播活动，届时将有较大优惠，您可稍后购买',
              cancelButtonText: '我在看看',
              confirmButtonText: '继续购买'
            })
              .then(() => {
                // on confirm

              })
              .catch(() => {
                this.$router.go(-1)
                // on cancel
              })
      // this.$dialog.confirm({
      //   title: '标题',
      //   message: '弹窗内容'
      // })
      //   .then(() => {
      //     // on confirm
      //   })
      //   .catch(() => {
      //     // on cancel
      //   })
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
.voiceAssist {
  position: fixed;
  left: 38px;
  bottom: 160px;
  z-index: 99;
  width: 20px;
  &-img {
    width: 60px;
    img {
      width: 100%;
    }
  }
}
</style>
