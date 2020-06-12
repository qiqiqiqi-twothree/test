<template>
  <div class="all">
    <div class="icons">
      <van-swipe :options="swiperOption" :show-indicators="false">
        <van-swipe-item v-for="(page, index) of pages" :key="index">
          <router-link
            :to="{path:item.iconLink}"
            class="icons-grid"
            v-for="item of page"
            :key="item.id"
          >
            <div class="icons-grid-content" v-if="item.iconLink === '#'">
              <img class="grid-img" :src="item.imgPath | url" alt @click.stop="openXiaoneng" />
            </div>
            <div class="icons-grid-content" v-else>
              <img class="grid-img" :src="item.imgPath | url" alt />
            </div>
            <p class="img-des" v-text="item.title"></p>
          </router-link>
        </van-swipe-item>
        <div class="swiper-pagination" slot="pagination"></div>
      </van-swipe>
    </div>
    <div>
      <span>分割</span>
    </div>
  </div>
</template>

<script>
export default {
  props: ['navData'],
  data() {
    return {
      swiperOption: {
        pagination: '.swiper-pagination',
        autoplay: false
      }
    }
  },

  created() {},
  methods: {},
  computed: {
    pages() {
      const pages = []
      console.log(this.navData, 111)
      if (!this.navData) {
        return
      }

      this.navData.forEach((item, index) => {
        // console.log(item, index, 222)
        const page = Math.floor(index / 10)
        // console.log(page, 333)
        // console.log(pages[page], 3333)
        // console.log(!pages[page], 33344)
        //  let aa=[]
        // let aa = (pages[page] = [])

        // console.log(aa, 55555)

        if (!pages[page]) {
          pages[page] = []
          // console.log(pages[page], 55555)
        }

        pages[page].push(item)
      })
      // console.log(pages,2656)
      return pages
    }
  }
}
</script>

<style lang="less">
.icons {
  position: relative;
  margin: 8px 10px 20px 10px;
  .icons-grid {
    float: left;
    position: relative;
    width: 20%;
    margin-top: 12px;
    padding-bottom: 20%;
    overflow: hidden;
    .img-des {
      position: absolute;
      width: 100%;
      left: 0;
      bottom: 0;
      font-size: 12px;
      color: #171717;
      text-align: center;
    }
    .icons-grid-content {
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0.4rem;
      box-sizing: border-box;
      padding: 0.15rem;
      .grid-img {
        width: 50px;
        height: 50px;
        display: block;
        margin: 0 auto;
      }
    }
  }
}
</style>
