<template>
  <div class="rec-goods" :class="{ 'rec-goods-spring': isSpring }">
    <div class="title-bar">
      <div class="title-bar-top">
        <div class="title-bar-top-icon">
          <img src="../assets/img/forgoodicon@2x.png" />
        </div>
        <div class="title-bar-top-text-large">
          <span>店主爆款推荐</span>
        </div>
        <div class="title-bar-top-text-small">
          <span>精品好礼任意选</span>
        </div>
        <div class="title-bar-top-text-more">
          <span>立即抢购></span>
        </div>
      </div>
      <div class="goods-content" :class="{ 'goods-content-spring': isSpring }">
        <div class="goods-list" ref="goodsList" @scroll="handleBarScroll">
          <div
            class="list-item"
            v-for="(item, index) in hotGoods"
            :key="index"
            ref="li"
          >
            <img class="item-img" src="../assets/nav/0.png" />
            <span class="item-title">{{ itemtitle }}</span>
            <span class="item-price">￥{{ itemprice }}</span>
          </div>
        </div>
        <span
          class="scroll-button"
          ref="bar"
          :class="{ 'scroll-button-spring': isSpring }"
        >
          <span
            class="scroll-inner"
            ref="inner"
            :class="{ 'scroll-inner-spring': isSpring }"
          ></span>
        </span>
      </div>
    </div>

    <van-sticky :offset-top="20">
      <div class="title-list">
        <div class="title-list-all">
          <van-tabs>
            <van-tab
              v-for="(item, index) in titleTop"
              :key="index"
              :title="item.a"
            >
              {{ index }}
            </van-tab>
          </van-tabs>
        </div>
      </div>
    </van-sticky>

    <div class="title-bar">
      <div class="title-bar-top">
        <div class="title-bar-top-icon">
          <img src="../assets/img/forgoodicon@2x.png" />
        </div>
        <div class="title-bar-top-text-large">
          <span>店主爆款推荐</span>
        </div>
        <div class="title-bar-top-text-small">
          <span>精品好礼任意选</span>
        </div>
        <div class="title-bar-top-text-more">
          <span>立即抢购></span>
        </div>
      </div>
      <div class="goods-content" :class="{ 'goods-content-spring': isSpring }">
        <div class="goods-list" ref="goodsList" @scroll="handleBarScroll">
          <div
            class="list-item"
            v-for="(item, index) in hotGoods"
            :key="index"
            ref="li"
          >
            <img class="item-img" src="../assets/nav/0.png" />
            <span class="item-title">{{ itemtitle }}</span>
            <span class="item-price">￥{{ itemprice }}</span>
          </div>
        </div>
        <span
          class="scroll-button"
          ref="bar"
          :class="{ 'scroll-button-spring': isSpring }"
        >
          <span
            class="scroll-inner"
            ref="inner"
            :class="{ 'scroll-inner-spring': isSpring }"
          ></span>
        </span>
      </div>
    </div>
    <div class="title-bar">
      <div class="title-bar-top">
        <div class="title-bar-top-icon">
          <img src="../assets/img/forgoodicon@2x.png" />
        </div>
        <div class="title-bar-top-text-large">
          <span>店主爆款推荐</span>
        </div>
        <div class="title-bar-top-text-small">
          <span>精品好礼任意选</span>
        </div>
        <div class="title-bar-top-text-more">
          <span>立即抢购></span>
        </div>
      </div>
      <div class="goods-content" :class="{ 'goods-content-spring': isSpring }">
        <div class="goods-list" ref="goodsList" @scroll="handleBarScroll">
          <div
            class="list-item"
            v-for="(item, index) in hotGoods"
            :key="index"
            ref="li"
          >
            <img class="item-img" src="../assets/nav/0.png" />
            <span class="item-title">{{ itemtitle }}</span>
            <span class="item-price">￥{{ itemprice }}</span>
          </div>
        </div>
        <span
          class="scroll-button"
          ref="bar"
          :class="{ 'scroll-button-spring': isSpring }"
        >
          <span
            class="scroll-inner"
            ref="inner"
            :class="{ 'scroll-inner-spring': isSpring }"
          ></span>
        </span>
      </div>
    </div>
    <div class="title-bar">
      <div class="title-bar-top">
        <div class="title-bar-top-icon">
          <img src="../assets/img/forgoodicon@2x.png" />
        </div>
        <div class="title-bar-top-text-large">
          <span>店主爆款推荐</span>
        </div>
        <div class="title-bar-top-text-small">
          <span>精品好礼任意选</span>
        </div>
        <div class="title-bar-top-text-more">
          <span>立即抢购></span>
        </div>
      </div>
      <div class="goods-content" :class="{ 'goods-content-spring': isSpring }">
        <div class="goods-list" ref="goodsList" @scroll="handleBarScroll">
          <div
            class="list-item"
            v-for="(item, index) in hotGoods"
            :key="index"
            ref="li"
          >
            <img class="item-img" src="../assets/nav/0.png" />
            <span class="item-title">{{ itemtitle }}</span>
            <span class="item-price">￥{{ itemprice }}</span>
          </div>
        </div>
        <span
          class="scroll-button"
          ref="bar"
          :class="{ 'scroll-button-spring': isSpring }"
        >
          <span
            class="scroll-inner"
            ref="inner"
            :class="{ 'scroll-inner-spring': isSpring }"
          ></span>
        </span>
      </div>
    </div>
    <div class="title-bar">
      <div class="title-bar-top">
        <div class="title-bar-top-icon">
          <img src="../assets/img/forgoodicon@2x.png" />
        </div>
        <div class="title-bar-top-text-large">
          <span>店主爆款推荐</span>
        </div>
        <div class="title-bar-top-text-small">
          <span>精品好礼任意选</span>
        </div>
        <div class="title-bar-top-text-more">
          <span>立即抢购></span>
        </div>
      </div>
      <div class="goods-content" :class="{ 'goods-content-spring': isSpring }">
        <div class="goods-list" ref="goodsList" @scroll="handleBarScroll">
          <div
            class="list-item"
            v-for="(item, index) in hotGoods"
            :key="index"
            ref="li"
          >
            <img class="item-img" src="../assets/nav/0.png" />
            <span class="item-title">{{ itemtitle }}</span>
            <span class="item-price">￥{{ itemprice }}</span>
          </div>
        </div>
        <span
          class="scroll-button"
          ref="bar"
          :class="{ 'scroll-button-spring': isSpring }"
        >
          <span
            class="scroll-inner"
            ref="inner"
            :class="{ 'scroll-inner-spring': isSpring }"
          ></span>
        </span>
      </div>
    </div>
    <div class="title-bar">
      <div class="title-bar-top">
        <div class="title-bar-top-icon">
          <img src="../assets/img/forgoodicon@2x.png" />
        </div>
        <div class="title-bar-top-text-large">
          <span>店主爆款推荐</span>
        </div>
        <div class="title-bar-top-text-small">
          <span>精品好礼任意选</span>
        </div>
        <div class="title-bar-top-text-more">
          <span>立即抢购></span>
        </div>
      </div>
      <div class="goods-content" :class="{ 'goods-content-spring': isSpring }">
        <div class="goods-list" ref="goodsList" @scroll="handleBarScroll">
          <div
            class="list-item"
            v-for="(item, index) in hotGoods"
            :key="index"
            ref="li"
          >
            <img class="item-img" src="../assets/nav/0.png" />
            <span class="item-title">{{ itemtitle }}</span>
            <span class="item-price">￥{{ itemprice }}</span>
          </div>
        </div>
        <span
          class="scroll-button"
          ref="bar"
          :class="{ 'scroll-button-spring': isSpring }"
        >
          <span
            class="scroll-inner"
            ref="inner"
            :class="{ 'scroll-inner-spring': isSpring }"
          ></span>
        </span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      titleTop: [
        { a: '猜你喜欢', b: '你不喜欢' },
        { a: '冰洗专区', b: '你不喜欢' },
        { a: '热水器', b: '你不喜欢' },
        { a: '厨房小电', b: '你不喜欢' },
        { a: '生活电器', b: '你不喜欢' },
        { a: '中央空调', b: '你不喜欢' },
        { a: '净水机', b: '你不喜欢' }
      ],
      titleBotton: ['猜你喜欢', '爆款专区', '品质生活', '品质生活', '生活电器'],
      blockPercent: null,
      isSpring: true,
      hotGoods: {
        name: 1,
        price: 100,
        height: 120,
        gr: 4,
        a: 5,
        b: 6,
        c: 7,
        e: 8,
        sd: 9
      },

      itemtitle: '格力风微变频空调嘻嘻哈哈哈哈',
      itemprice: '2000.00'
    }
  },
  created() {
    this.blockPercent = 3 / 9
    this.$nextTick(() => {
      //   if (this.hotGoods.length > 3) {
      const barWidth = this.$refs.bar.clientWidth
      this.$refs.inner.style.width = this.blockPercent * barWidth + 'px'
      //   }
    })
  },

  methods: {
    handleBarScroll(e) {
      const scrollLeft = e.target.scrollLeft
      const barWidth = this.$refs.bar.clientWidth
      console.log(this.$refs.bar.clientWidth, 211)

      if (this.$refs.inner) {
        // 60为bar的宽度 8为左margin
        let scroll_X = Math.ceil(
          (scrollLeft * barWidth) / ((this.$refs.li[0].clientWidth + 8) * 9)
        )
        this.$refs.inner.style.marginLeft = scroll_X + 'px'
      }
    }
  }
}
</script>

<style lang="less">
//foor楼层
.van-sticky {
  margin-top: 10px;
}
.van-tabs__nav {
  background-color: rgb(224, 224, 224);

  width: 100%;
  height: auto;
}
.van-tabs--line .van-tabs__wrap {
  border-radius: 15px;
}

.rec-goods-spring {
  background: #f9e370;
  height: 200px !important;
  position: relative;
  .title-bar-spring {
    width: 344px;
    height: 140px;
    position: absolute;
    top: -85px;
    left: 5px;
    > img {
      width: 344px;
      //   height: 140px;
    }
  }
  .goods-content-spring {
    top: 30px;
  }
  .scroll-button-spring {
    background-color: #fff;
  }
  .scroll-inner-spring {
    background-color: #f3c939;
  }
}
.rec-goods {
  margin-bottom: 10px;
  height: 220px;
  border-radius: 8px;
  background-image: url('../assets/img/background@2x.png');
  background-size: 100% 100%;

  .title-bar {
    width: 100%;
    height: auto;
    padding: 11px 1px;
    .title-bar-top {
      width: 95%;
      height: auto;
      display: flex;
      margin: 0 8px;
      box-sizing: border-box;
      .title-bar-top-icon {
        width: 5%;
        height: auto;
        img {
          width: 100%;
          height: auto;
        }
      }
      .title-bar-top-text-large {
        width: 35%;
        height: auto;
        margin: 0px 5px;
        span {
          font-size: 14px;
          font-family: Lantinghei SC;
          font-weight: 600;
          color: rgba(63, 66, 174, 1);
          line-height: 30px;
        }
      }
      .title-bar-top-text-small {
        width: 30%;
        height: auto;
        margin: 0 10px;
        span {
          font-size: 10px;
          font-family: FZLTHK;
          font-weight: normal;
          color: rgba(63, 66, 174, 1);
          line-height: 30px;
        }
      }
      .title-bar-top-text-more {
        width: 30%;
        height: auto;
        text-align: right;
        span {
          font-size: 10px;
          font-family: FZLTHK;
          font-weight: normal;
          color: rgba(63, 66, 174, 1);
          line-height: 5px;
        }
      }
    }
    .goods-content {
      position: relative;
      margin: 5px 8px 16px;
    }
    .goods-list {
      display: flex;
      overflow-x: scroll;
      overflow-y: hidden;
      transition: all 0.3s ease 0s;
      transform: translate3d(0px, 0px, 0px);
      &::-webkit-scrollbar {
        display: none;
      }

      .list-item {
        display: flex;
        flex-direction: column;
        align-items: center;
        background-color: rgb(255, 255, 255);
        //   padding:8px 15px;
        height: 150px;
        margin-right: 10px;
        border-radius: 10px;
      }
      .item-img {
        margin: 10px 10px;
        width: 80px;
        height: 80px;
      }
      .item-title {
        width: 60px;
        height: 17px;
        font-size: 12px;
        font-weight: 400;
        line-height: 17px;
        overflow: hidden;
        display: -webkit-box;
        -webkit-box-orient: vertical;
        -webkit-line-clamp: 1;
        overflow: hidden;
        color: rgba(63, 63, 63, 1);
      }
      .item-price {
        margin-top: 2px;
        min-width: 48px;
        height: 17px;
        font-size: 12px;
        font-weight: 500;
        color: rgba(255, 77, 79, 1);
        line-height: 17px;
      }
    }
  }
  .scroll-button {
    margin: 10px auto 0;
    display: block;
    width: 60px;
    height: 4px;
    background: rgba(216, 216, 216, 1);
    border-radius: 2px;
  }

  .scroll-inner {
    position: relative;
    background: rgba(145, 145, 145, 1);
    height: 4px;
    margin: 2px 0;
    display: block;
    border-radius: 2px;
  }
  //   div {
  //     width: 30px;
  //     margin: 0 auto;
  //   }
}
</style>
