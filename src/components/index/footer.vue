<template lang="html">
  <div class="footer">
    <van-tabbar v-model="active" @change="onChange">
      <van-tabbar-item icon="home-o">标签1</van-tabbar-item>
      <van-tabbar-item icon="search">标签2</van-tabbar-item>
      <van-tabbar-item icon="friends-o">标签3</van-tabbar-item>
      <van-tabbar-item icon="setting-o">标签4</van-tabbar-item>
    </van-tabbar>
  </div>
</template>
<script>
import Vue from 'vue'
import { Tabbar, TabbarItem } from 'vant'

Vue.use(Tabbar)
Vue.use(TabbarItem)
import { Notify } from 'vant'
export default {
  name: 'index',
  data() {
    return {
      active: 0
    }
  },
  computed: {},
  mounted() {},
  created() {},
  methods: {
    onChange(index) {
      Notify({ type: 'primary', message: index + 1 })
    }
  }
}
</script>
<style scoped lang="less"></style>
