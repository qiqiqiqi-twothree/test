<template lang="html">
  <div class="sdsfd">
    <v-aside
      :datas="allData"
      v-if="allData"
      @tran-form="getData"
      @index-num="index"
    ></v-aside>
    <v-main
      :datas="{
        childData: childData,
        advertisementData: advertisementData,
        recommendationData: recommendationData
      }"
    ></v-main>
  </div>
</template>
<script>
import {
  getCategoryList,
  getchildcategoryList,
  advertisement,
  recommendation
} from '@/http/mock.js'
import { Toast } from 'vant'
import Aside from '@/components/category/aside.vue'
import Main from '@/components/category/main.vue'
import * as axios from 'axios'

export default {
  components: {
    'v-aside': Aside,
    'v-main': Main,
    [Toast.name]: Toast
  },

  data() {
    return {
      allData: '',
      childData: '',
      advertisementData: [],
      recommendationData: []
    }
  },
  computed: {},
  created() {
    Toast('*欢迎进入类目栏*')
    let cid = this.$route.query.cid
    console.log(this.$route, 111)
    this.$api.post(getCategoryList).then(res => {
      this.allData = res.data.result
      axios
        .all([
          this.$api.post(getchildcategoryList, {
            cid: cid || this.allData[0].cid
          }), // 二三级类目
          this.$api.get(advertisement, {
            params: { cid: cid || this.allData[0].cid }
          }), // 广告
          this.$api.get(recommendation, {
            params: { cid: cid || this.allData[0].cid }
          })
        ])
        .then(
          axios.spread((childList, advertisementList, recommendationList) => {
            this.childData = childList.data.result
            console.log(this.childData, 'this.childData')
            this.advertisementData = this.randomAdvertisementData(
              advertisementList.data.result
            )
            this.recommendationData = recommendationList.data.result
          })
        )
    })
  },
  mounted() {
    document.documentElement.scrollTop = document.body.scrollTop = 0
  },
  methods: {
    randomAdvertisementData(data) {
      if (data.length === 0) return {}
      const index = Math.floor(Math.random() * (0 + data.length))
      return data[index]
    },
    getData(data) {
      this.childData = data.childData
      this.advertisementData = this.randomAdvertisementData(
        data.advertisementData
      )
      this.recommendationData = data.recommendationData
    },
    index(i) {
      this.allData.index = i
    }
  }
}
</script>
<style scoped lang="less"></style>
