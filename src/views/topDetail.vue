<template lang="html">
  <div class="all">
    <div class="iheader">
      <div class="iheader-nav">
        <div class="iheader-dmjbannar">
          <img src="../assets/img/dmjbanner.png" />
        </div>
        <div class="iheader-search" @click="search()">
          <!-- <van-search
            v-model="value"
            shape="round"
            placeholder="请输入搜索关键词"
          /> -->
          <span>
            <van-icon class="icon" name="search" size="18px" />
          </span>
          <span class="text">
            请输入要搜索的信息
          </span>
        </div>
        <div class="iheader-right">
          <img src="../assets/img/information_for_personel.png" />
          <span>消息</span>
        </div>
      </div>
    </div>

    <div class="swiper">
      <div class="swiper-bg"></div>
      <div class="swipe" ref="seiper">
        <van-swipe :autoplay="4000">
          <van-swipe-item v-for="(image, index) in images" :key="index">
            <img v-lazy="image" />
          </van-swipe-item>
        </van-swipe>
      </div>
      <!-- <div>
      <van-swipe :autoplay="3000">
        <van-swipe-item v-for="(image, index) in images" :key="index">
          <img v-lazy="image" />
        </van-swipe-item>
      </van-swipe>
    </div> -->
    </div>
    
    <v-nav :navData="items"></v-nav>
    <v-notice @click.native="gotoNotice"></v-notice>
    <v-area></v-area>
  </div>
</template>
<script>
import Nav from '@/components/index/icons.vue'
import Notice from '@/components/Watch.vue'
import Area from '@/components/area.vue'
import Vue from 'vue'
import { Swipe, SwipeItem, Toast } from 'vant'
Vue.use(Swipe)
  .use(SwipeItem)
  .use(Toast)
import { getFloorList,getShortcutlist } from '@/http/mock.js'

export default {
  components: {
    'v-nav': Nav,
    'v-notice': Notice,
    'v-area': Area
  },
  data() {
    return {
      nav: true,
      // navData:'',
      items:'',
      images: [
        'https://img.yzcdn.cn/vant/apple-1.jpg',
        'https://img.yzcdn.cn/vant/apple-2.jpg'
      ]
    }
  },

  mounted() {},
  created() {
    this.$api
      .get(getShortcutlist, {
        params: {
          type: 2,
          page: 1
        }
      })
      .then(navList => {
        // console.log(navList,123456)
        const temp = navList.data.result
        // console.log(temp,2222)


        temp.forEach((item, index) => {
          item.iconLink = item.iconLink.replace(/#/, '')
        })
        this.items = temp
        // console.log(temp,122222)
        // console.log(this.items,122222)

      })

    // // this.map();
    // this.$api
    //   .get(getFloorList, {
    //     params: {
    //       // cityRegionCode,
    //       pageType: 1
    //     }
    //   })
    //   .then(res => {
    //     console.log(res, 123)
    //     if (res.data.code == 200) {
    //       this.items = res.data.result.commonFloor.slice(0, 10) //创建选中的子数组
    //     }
    //   })
    // // Toast('你好呀')
  },
  methods: {
    goBack() {
      if (this.gotolist) {
        this.$router.push('/')
        this.getlist = []
      }
    },
    search() {
      Toast('你好呀')
    },
    gotoNotice() {
      this.$router.push('/watchDetail')
    }
    // map(array, func) {
    //   var res = []
    //   for (var i = 0; i < array.length; i++)
    //   res.push(func(array[i]))
    // }
  }
}
</script>
<style scoped lang="less">
.iheader {
  display: flex;
  flex-direction: column;
  position: fixed;
  top: 0;
  height: 70px;
  width: 100%;
  justify-content: center;
  transition: all 100ms ease 0ms;
  transform: translateY(0px);
  z-index: -1;
  background-color: #759bdb;
  .iheader-nav {
    display: flex;
    justify-content: space-around;

    width: 100%;
    height: 51px;
    margin: 0 auto;
    span {
      font-size: 10px;
    }
    .iheader-dmjbanner {
      width: 10%;
      img {
      }
    }
    // .van-search {
    //   padding: 0;
    //   border-radius: 30px !important;
    // }
    .iheader-search {
      background-color: rgba(255, 255, 255, 1);
      border-radius: 15px;
      // border:1px solid rgba(255,79,81,1);
      width: 90%;
      height: 30px;
      // margin: auto;
      margin-left: 30px;
      .icon {
        margin-top: 10px;
        margin-left: 10px;
      }
      .text {
        display: block;
        position: relative;
        top: -20px;
        left: 35px;
      }
      // span {
      //   width: 300px;
      //   height: 50px;
      // }
    }
    .iheader-right {
      display: flex;
      flex-direction: column;
      img {
        padding: 2px 5px;
      }
      span {
        text-align: center;
      }
    }
  }
}
.swiper-bg {
  position: absolute;
  top: 60px;
  height: 100px;
  width: 100%;
  border-bottom-right-radius: 140px 20px;
  border-bottom-left-radius: 140px 20px;
  background-color: rgba(117, 155, 219, 1);
}
.swipe {
  z-index: 1;
  margin: 60px 10px 0;
  img {
    width: 100%;
    height: 140px;
  }
}
.icons {
  margin: 8px 10px 20px 10px;

  .icons-grid {
    float: left;
    position: relative;
    width: 20%;
    margin-top: 5px;

    .img-des {
      position: relative;
      width: 90%;
    }
    p {
      margin: 5px auto;
      text-align: center;
      font-size: 12px;
      font-family: PingFangSC-Regular, PingFang SC;
      font-weight: 400;
      color: rgba(34, 34, 34, 1);
      line-height: 10px;
      height: 10px;
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
    }
  }
}
</style>
