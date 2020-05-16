<template>
  <div>
    <button>评价</button>

    <!-- <span></span>
    <el-input v-model="demo"></el-input>
    {{ value }}-->
  </div>
</template>
<script>
export default {
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
