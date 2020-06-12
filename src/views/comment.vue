<template lang="html">
  <div class="evaStar">
    <div style='background-color:blue'  @click="$router.push('/')">
    <p>sajdgf</p>
    </div>

    <div class="model_rate">
      <div class="model_title">

        <label class="model_rate_name">商品评分：</label>
        <span class="model_rate_value">
          <v-start></v-start>
        </span>
      </div>
      <div class="model_title">
      <label class="model_rate_name">描述相符评分：</label>
        <span class="model_rate_value">
          <v-start></v-start>
        </span>
      </div>
      <div class="model_title">
        <label class="model_rate_name">服务态度评分：</label>
        <span class="model_rate_value">
          <v-start></v-start>
        </span>
      </div>
      <div class="model_title">
        <label class="model_rate_name">到货速度评分：</label>
        <span class="model_rate_value">
          <v-start></v-start>
        </span>
      </div>
 <div>
      <P @click="showconfirm">点击我就有弹窗</P>
    </div>

      <i></i>
      <div class="manual" @click="getColor">
        <p>ydsgfdrys</p>
        <div class="two_trans" :class="{show:isShow} " > </div>
          <!-- <div class="trans" @click="getColor()"></div> -->
        <div class="blue start" :class="{ active: isActive }"></div>
        <div class="gray start"></div>
      </div>
    </div>
    <div>
      <input
        class="ng-pristine ng-valid ng-empty ng-touched"
        id="input_search"
        style
        type="text"
        v-model="associateWords"
      />
      <p>{{associateWords}} fghfg</p>
    </div>
    <div>
      <div class="grid">
        <van-uploader v-model="fileList" multiple />
      </div>
      <div class="grid">
        <van-uploader v-model="fileList" multiple />
      </div>
      <div class="grid">
        <van-uploader v-model="fileList" multiple />
      </div>
      <div class="grid">
        <van-uploader v-model="fileList" multiple />
      </div>
      <div class="grid">
        <van-uploader v-model="fileList" multiple />
      </div>
      <div class="grid">
        <van-uploader v-model="fileList" multiple />
      </div>
      <div class="grid">
        <van-uploader v-model="fileList" multiple />
      </div>
      <div class="grid">
        <van-uploader v-model="fileList" multiple />
      </div>
      <div class="grid">
        <van-uploader v-model="fileList" multiple />
      </div>
      <div class="grid">
        <van-uploader v-model="fileList" multiple />
      </div>
    </div>

    <div class="search-top">
      <div @click="returnTop" class="search-top-scroll" :class="{'hidden':!toTop}" >
        <img src="../assets/img/shop_top@2x.png"/>
      </div>
    </div>

  </div>
</template>
<script>
import Start from '@/components/start.vue'
import { Icon, Uploader, Dialog } from 'vant'

export default {
  components: {
    'v-start': Start,
    [Icon.name]: Icon
  },
  data() {
    return {
      isActive: false,
      isShow: true,
      fileList: [],
      toTop: false //回到顶部按钮,

    }
  },
  computed: {
    associateWords: {
      get: function() {
        console.log(111)
      },
      set: function(newValue) {
        console.log(newValue)
        console.log(newValue, 333)
        // this.associateWords = newValue
      }
    }
  },
  mounted() {
    // 监听滚动事件
    window.addEventListener('scroll', this.handleScroll)
  },
  methods: {
    showconfirm() {
      // Dialog.confirm({
      //   title: '温馨提示',
      //   message:
      //     '本次购买商品将在5月30号至6月1号参与格力电器6.1直播活动，届时将有较大优惠，您可稍后购买',
      //   cancelButtonText: '我在看看',
      //   confirmButtonText: '继续购买'
      // })
      //   .then(() => {
      //     // on confirm
      //   })
      //   .catch(() => {
      //     this.$router.go(-1)
      //     // on cancel
      //   })
      // Dialog.confirm({
      //   title: '温馨提示',
      //   message: '本次购买的商品在六月一号会有较大优惠，您可稍后购买',
      //   confirmButtonText:'继续购买',
      //   cancelButtonText:'我再看看',
      // })
      //   .then(() => {
      //     // on confirm
      //   })
      //   .catch(() => {
      //     // on cancel
      //   })
    },
    getColor() {
      ;(this.isShow = !this.isShow), (this.isActive = !this.isActive)
    },
    // 返回顶部
    returnTop() {
      let top = document.documentElement.scrollTop || document.body.scrollTop
      const step = top / 20
      ;(function Up() {
        if (top > 10) {
          top -= step
          document.documentElement.scrollTop = document.body.scrollTop = top
          setTimeout(Up, 5)
        } else {
          document.documentElement.scrollTop = document.body.scrollTop = 0
        }
      })()
    },
    // 滚动条监听事件
    handleScroll() {
      const scrollTop =
        document.documentElement.scrollTop || document.body.scrollTop
      console.log(document.documentElement.scrollTop, 111)
      console.log(document.body.scrollTop, 222)
      console.log(scrollTop, 333)
      this.toTop = scrollTop >= 400
    },
    beforeDestroy() {
      // 移除滚动条事件
      window.removeEventListener('scroll', this.handleScroll)
    }
  },

  beforeRouteLeave(to, from, next) {
    console.log(123)
    // next()
  }
}
</script>
<style scoped lang="less">
// 回到顶部按钮
.search-top {
  position: fixed;
  bottom: 0px;
  right: 5px;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
  flex-direction: column;
  .search-top-scroll {
    width: 36px;
    height: 36px;
    transition: height 0.2s ease;
    -webkit-transition: height 0.2s ease;
  }
  .hidden {
    height: 0;
  }
}

.evaStar {
  width: 100%;
  padding: 5px 10px;
  box-sizing: border-box;
  .model_rate {
    &_name {
      font-size: 12px;
      font-family: PingFangSC-Regular, PingFang SC;
      font-weight: 400;

      line-height: 30px;
    }
  }
  .model_title {
    display: flex;
  }
  //画星星
  .manual {
    display: flex;
    .show {
      display: none;
    }
    .two_trans {
      width: 25px;
      height: 25px;
      position: absolute;

      background-color: rgb(233, 153, 233);
    }

    //trans
    .trans {
      width: 25px;
      height: 25px;
      position: absolute;
      z-index: 100;
      background-color: rgb(231, 152, 227);
      transition: width 2s;
      -webkit-transition: width 2s; /* Safari */
      //切割星星参数
      -webkit-clip-path: polygon(
        50% 0%,
        61% 35%,
        98% 35%,
        68% 57%,
        79% 91%,
        50% 70%,
        21% 91%,
        32% 57%,
        2% 35%,
        39% 35%
      );
      clip-path: polygon(
        50% 0%,
        61% 35%,
        98% 35%,
        68% 57%,
        79% 91%,
        50% 70%,
        21% 91%,
        32% 57%,
        2% 35%,
        39% 35%
      );
    }
    .trans:hover {
      width: 25px;
    }

    .blue {
      background-color: rgb(96, 230, 245);
      z-index: 99;
    }
    .gray {
      background-color: rgb(223, 223, 223);
    }
    .start {
      width: 25px;
      height: 25px;

      //切割星星参数
      -webkit-clip-path: polygon(
        50% 0%,
        61% 35%,
        98% 35%,
        68% 57%,
        79% 91%,
        50% 70%,
        21% 91%,
        32% 57%,
        2% 35%,
        39% 35%
      );
      clip-path: polygon(
        50% 0%,
        61% 35%,
        98% 35%,
        68% 57%,
        79% 91%,
        50% 70%,
        21% 91%,
        32% 57%,
        2% 35%,
        39% 35%
      );
    }
  }
  .grid {
    // background-color: cornflowerblue;
    display: grid;
    grid-template-columns: repeat(3, 33.33%);
    grid-template-rows: 90px 90px;
  }

  .active {
    background-color: rgb(250, 252, 121);
    position: relative;
    animation: mymove 5s infinite;
    -moz-animation: mymove 5s infinite; /* Firefox */
    -webkit-animation: mymove 5s infinite; /* Safari and Chrome */
    -o-animation: mymove 5s infinite; /* Opera */
    @keyframes mymove {
      from {
        left: 0px;
      }
      to {
        left: 24px;
      }
    }

    @-moz-keyframes mymove /* Firefox */ {
      from {
        left: 0px;
      }
      to {
        left: 24px;
      }
    }

    @-webkit-keyframes mymove /* Safari and Chrome */ {
      from {
        left: 0px;
      }
      to {
        left: 24px;
      }
    }

    @-o-keyframes mymove /* Opera */ {
      from {
        left: 0px;
      }
      to {
        left: 24px;
      }
    }
  }
}
</style>
