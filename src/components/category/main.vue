<template lang="html">
  <div class="main">
    <div class="flbanner" v-if="datas.advertisementData">
      <a :href="datas.advertisementData.adURL">
        <!-- <img
          :src="datas.advertisementData.adSrc | url"
          :alt="1"
          v-if="datas.advertisementData.adSrc"
        /> -->
      </a>
    </div>

    <div
      class="classify_product"
      v-for="(item, index) in datas.childData"
      :key="index"
    >
      <div class="cp-title">
        <span>{{ item.name }}</span>
      </div>
      <ul>
        <li v-for="(item2, index) in item.categoryList" :key="index">
          <!-- <img :src="item2.picUrl | url" :alt="item2.name" /> -->
          <p>{{ item2.cname }}</p>
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
// import { pic_url } from '@/http/mock.js'

export default {
  props: ['datas'],

  data() {
    return {}
  },
  mounted() {},
  created() {
    console.log(this.datas)
  }
}
</script>
<style scoped lang="less">
.main {
  width: 265px;
  background-color: #fafafa;
  // margin: 11px 10px 8px 11px;
  // padding: 1%;
  padding: 11px 11px 58px 11px;
  position: absolute;
  right: 0;
  top: 0;
}
.main .flbanner {
  width: 100%;
}
.flbanner {
}
.main .flbanner a {
  display: block;
  // width: 256px;
}
.main .flbanner img {
  width: 100%;
  height: 60px;
  border-radius: 4px;
}
.classify_product {
  // margin: 7px 7px 7px 7px;
  margin: 10px 0;
  background: #ffffff;
  border-radius: 5px;
  border-radius: 4px;
}
.cp_title {
  font-size: 16px;
  color: #232326;
  padding-top: 5px;
  padding-left: 10px;
  position: relative;
  padding-bottom: 1px;
  background: #ffffff;
}
.classify_product ul {
  width: 100%;
  margin-top: 9px;
}
.classify_product ul li {
  width: 31%;
  text-align: center;
  display: inline-block;
  background: #ffffff;
  // margin: 1%;
}
.classify_product ul li img {
  width: 74px;
  height: 74px;
}
.classify_product ul li p {
  font-size: 12px;
  color: #686868;
  overflow: hidden;
  text-overflow: ellipsis;
  line-height: 25px;
  height: 25px;
}
</style>
