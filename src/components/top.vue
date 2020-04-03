<template>
  <div>
    <button>顶部</button>

    <!-- <span></span>
    <el-input v-model="demo"></el-input>
    {{ value }}-->
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
