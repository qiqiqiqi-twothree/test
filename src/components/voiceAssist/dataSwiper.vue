<template>
  <div id="dataSwiper">
    <template>
      <div class="swiperSlide">
        <img
          class="img"
          src="../../assets/img/voice_assistant/0.jpg"
        />
        <p class="title">品圆定频冷暖正1.5匹空调</p>
        <p class="price">￥2699</p>
      </div>
      <div class="swiperSlide">
        <img
          class="img"
          src="../../assets/img/voice_assistant/0.jpg"
        />
        <p class="title">品圆定频冷暖正1.5匹空调</p>
        <p class="price">￥2699</p>
      </div>
      <div class="swiperSlide">
        <img
          class="img"
          src="../../assets/img/voice_assistant/0.jpg"
        />
        <p class="title">品圆定频冷暖正1.5匹空调</p>
        <p class="price">￥2699</p>
      </div>
      <div class="swiperSlide">
        <img
          class="img"
          src="../../assets/img/voice_assistant/0.jpg"
        />
        <p class="title">品圆定频冷暖正1.5匹空调</p>
        <p class="price">￥2699</p>
      </div>
      <div class="swiperSlide">
        <img
          class="img"
          src="../../assets/img/voice_assistant/0.jpg"
        />
        <p class="title">品圆定频冷暖正1.5匹空调</p>
        <p class="price">￥2699</p>
      </div>
      <div class="swiperSlide">
        <img
          class="img"
          src="../../assets/img/voice_assistant/0.jpg"
        />
        <p class="title">品圆定频冷暖正1.5匹空调</p>
        <p class="price">￥2699</p>
      </div>
    </template>
  </div>
</template>

<script>
export default {
  components: {},
  props: [],
  data() {
    return {}
  },
  created() {},
  watch: {},
  methods: {}
}
</script>

<style lang="less" scoped>
#dataSwiper {
  margin: 12px 0;
  margin-top: 10px;
  display: flex;
  overflow-y: scroll;
}
::-webkit-scrollbar {
  display: none;
}
.swiperSlide {
  width: 136px;
  margin-left: 10px;
  padding-bottom: 8px;
  background-color: rgba(255, 255, 255, 1);
  border-radius: 4px;
  padding-bottom: 8px;

  .img {
    height: 136px;
  }
  .title {
    margin-top: 3px;
    padding: 0 7px;
    font-size: 12px;
    font-weight: 400;
    color: rgba(63, 63, 63, 1);
    line-height: 17px;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }
  .price {
    padding: 0 7px;
    margin: 8px 0;
    font-size: 14px;
    font-weight: 500;
    color: rgba(255, 77, 79, 1);
    line-height: 20px;
  }
}
</style>
