<template lang="html">
  <div class="main">
  
  </div>
</template>

<script>
// import { Lazyload, getchildcategoryList } from 'mint-ui'
// import { advertisement } from '@/http/mock'
export default {
  props: ['datas'],
  data() {
    return {
      tabIndex: 0
    }
  },
  created() {
    sessionStorage.removeItem('SEARCH') //删除搜索关键字
  },
  mounted() {}
}
</script>

<style lang="less" scoped>
// @import '../../assets/css/nav_margin';

</style>
