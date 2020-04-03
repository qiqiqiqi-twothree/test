<template lang="html">
  <div class="sdsfd">
    <v-aside></v-aside>
    <v-main></v-main>
  </div>
</template>
<script>
import { Toast } from 'vant'
import { getCategoryList } from '@/http/mock.js'
import Aside from '@/components/category/aside.vue'
import Main from '@/components/category/main.vue'
export default {
  components: {
    'v-aside': Aside,
    'v-main': Main
  },

  data() {
    return {
      tabIndex: 0,
      clid: 0,
      datas: []
    }
  },
  computed: {
    cid() {
      // let cid = this.$router.query.id || this.id
      let clid = 0
      let that = this
      this.datas.forEach((item, index) => {
        if (item.id == clid) {
          that.tabIndex = index
        }
      })
      return clid
    }
  },
  mounted() {},
  created() {
    Toast('*欢迎进入类目栏*')
    this.$api.post(getCategoryList).then(res => {
      console.log(res, 123)
      if (res.data.code == 200) {
        this.datas = res.data.result
      }
    })
  },
  methods: {
    changeTable(cid, index) {
      if (this.tabIndex === index) return
      this.tabIndex = index
      this.clid = cid
    }
  }
}
</script>
<style scoped lang="less">
.aside {
  width: 100px;
  background: rgba(255, 255, 255, 1);
  height: auto;
  overflow: hidden;
  .aside-content {
    padding: 10px 0;
    width: 70px;

    position: absolute;
    overflow: hidden;
    ul {
      padding: 0 0 10px 0;
      background-color: #fff;
      display: block;
      overflow: hidden;
    }
    ul li {
      padding: 3px 5px;
      overflow: hidden;
      text-overflow: ellipsis;
      text-align: center;
      white-space: nowrap; /*超出的空白区域不换行*/
      overflow: hidden; /*超出隐藏*/
      height: 32px;
      font-size: 14px;
      font-family: PingFangSC-Regular, PingFang SC;
      font-weight: 400;
      color: rgba(90, 90, 90, 1);
      line-height: 32px;
    }
  }
  .aside-content a {
    display: block;
  }
}
.aside ul li .active {
  font-size: 15px;
  // color: rgba(255, 77, 79, 1);
}
.aside ul li .tips {
  color: #fff;
  background-color: rgba(255, 77, 79, 1);
  width: 60px;
  height: 24px;
  line-height: 24px;
  margin: 11px auto;
  border-radius: 10px;
  text-overflow: ellipsis;
  white-space: nowrap;
}
</style>
