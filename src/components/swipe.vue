<template>
  <div class="all">
    <button>滑动</button>

    <!-- <span></span>
    <el-input v-model="demo"></el-input>
    {{ value }} -->
  </div>
</template>
<script>
export default {
  name: 'index',
  data() {
    return {
      demo: '',
      value: ''
    }
  },
  watch: {
    demo() {
      this.value = this.demo
    }
  }
}
</script>
<style scoped lang="less">
.all {
  margin: 10px 0;
}
</style>
