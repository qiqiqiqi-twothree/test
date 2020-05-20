<template>
  <div id="boxLine">
    <h5>xixixiixixxi{{ datas.text }}</h5>
    <div class="line">
      <template v-for="(item, index) in datas.value">
        <p
          :key="index"
          @click="$emit('boxLineClick', item.text)"
        >{{ item.text }}</p>
      </template>
    </div>
  </div>
</template>

<script>
export default {
  components: {},
  props: ['datas'],
  created() {
    // console.log(this.datas,55555555)
  }
}
</script>

<style lang="less" scoped>
#boxLine {
  display: flex;
  align-items: center;
  font-size: 12px;
  margin: 8px 0;
  h5 {
    padding-left: 12px;
    color: #999;
    margin-right: 10px;
    flex: none;
  }
  .line {
    display: flex;
    align-items: center;
    overflow-x: scroll;
    padding: 5px 0;
    // border-radius: 13px;
    &::-webkit-scrollbar {
      display: none;
    }
  }
  p {
    padding: 5px 12px;
    background: #fff;
    border-radius: 13px;
    margin-right: 12px;
    color: #666;
    flex: none;
    box-shadow: 0px 2px 8px 0px rgba(0, 0, 0, 0.05);
  }
}
</style>
