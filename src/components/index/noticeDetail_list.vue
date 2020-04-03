<template>
  <div class="noticeDetail_list">
    <div class="noticeDetail_list_boder">
      <div class="noticeDetail_list_title">
        <h1>{{ getList.title }}</h1>
      </div>
      <div class="noticeDetail_list_publishtime">
        <p>{{ getList.publishTime }}</p>
      </div>
      <div class="noticeDetail_list_text">
        <!-- <div
          v-if="getList.navigationImage && getList.ifimg"
          class="noticeDetail_list_text_img"
        >
          <img :src="getList.navigationImage" />
        </div> -->
        <div
          class="noticeDetail_list_text_context"
          v-html="getList.details.replace(/src=&quot;/g, content)"
        ></div>
      </div>
    </div>
  </div>
</template>
<script>
import { pic_url } from '@/http/mock'
export default {
  data() {
    return {
      content: 'src="' + pic_url
    }
  },
  props: ['getList']
}
</script>
<style lang="less" scoped>
.noticeDetail_list {
  width: 100%;
  .noticeDetail_list_boder {
    width: 90%;
    margin: 22px auto;
    .noticeDetail_list_title {
      text-align: center;
      h1 {
        font-size: 14px;
        font-family: PingFangSC-Medium, PingFang SC;
        font-weight: 500;
        color: rgba(51, 51, 51, 1);
        line-height: 20px;
      }
    }
    .noticeDetail_list_publishtime {
      text-align: center;
      margin: 12px auto;
      p {
        font-size: 10px;
        font-family: PingFangSC-Regular, PingFang SC;
        font-weight: 400;
        color: rgba(191, 191, 191, 1);
        line-height: 14px;
      }
    }
    .noticeDetail_list_text {
      margin: 3px auto;
      .noticeDetail_list_text_img {
        width: 100%;
        height: auto;
        img {
          width: 100%;
          height: auto;
        }
      }
    }
  }
}
.noticeDetail_list_text_context {
  width: 100%;
  height: auto;
  //   overflow: hidden;
  /deep/img {
    width: 100% !important;
  }
}
</style>
