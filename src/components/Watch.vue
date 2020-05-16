<template>
  <div class="notice-wrapper">
    <div class="notice">
      <!-- <van-icon name="volume-o" color="#FF5C67" size="22" /> -->
      <!-- <van-icon name="comment" color="#FF5C67" size="22" /> -->
      <!-- <div class="notice-title">快报</div> -->
      <div class="notice-img">
        <img src="../assets/news@2x.png" />
      </div>

      <div class="notice-info">
        <div class="notice-info-new">最新</div>
        <div class="notice-info-detail">{{ newNotice }}</div>
      </div>
      <div class="more-icon">
        <img src="../assets/right-circle-fill.png" />
      </div>
    </div>
  </div>
</template>
<script>
import { Icon } from 'vant'
import { getMallNewsflash } from '@/http/mock.js'

export default {
  components: {
    [Icon.name]: Icon
  },
  data() {
    return {
      newNotice: ''
    }
  },
  created() {
    this.$api.post(getMallNewsflash).then(res => {
      // console.log(res)
      this.newNotice = res.data.result
    })
  }
}
</script>
<style scoped lang="less">
.notice-wrapper {
  width:100%;
  height: 30px;
  background: #fff;
  // margin: 12px 10px 8px -60px;

  border-radius: 8px;

  .notice {
    background-color: blanchedalmond;
    display: flex;
    align-items: center;
    justify-content: space-around;
    height: 30px;
    // margin: 0 10px;
  }

  .notice-title {
    margin: 0 5px 0 2px;
    font-size: 14px;
    transform: scaleY(1.2);
    color: #404040;
    font-family: FZMHJW--GB1-0, FZMHJW--GB1;
    font-weight: 500;
  }

  .notice-info {
    display: flex;
    margin: 0 10px 0 5px;
    font-size: 12px;

    &-new {
      margin-right: 5px;
      color: #ff5c67;
    }

    &-detail {
      color: #333333;
      width: 208px;
      overflow: hidden;
      white-space: nowrap;
      text-overflow: ellipsis;
    }
  }

  .more-icon {
    img {
      width: 13px;
      height: 13px;
    }
  }
}
</style>
