<template>
  <div
    id="voiceAssist"
    ref="voiceAssist"
  >
    <header>
      <van-icon
        @click="$router.push('/')"
        name="arrow-left"
      />
      <p>小格智能导购助手</p>
    </header>
    <div
      class="speakData"
      ref="speakData"
    >
      <template>
        <speak-box :boxData="speakdata"></speak-box>
      </template>
    </div>
  </div>
</template>

<script>
import { Icon } from 'vant'
import speakBox from './speakBox'

export default {
  components: {
    [Icon.name]: Icon,
    speakBox
  },
  data() {
    return {
      speakdata: {
        name: 'qiqi',
        heigh: '165',
        weight: '50'
      }
    }
  }
}
</script>

<style lang="less" scoped>
html {
  overflow-y: scroll;
}
/deep/.van-icon-arrow-left {
  margin-left: 12px;
}
#voiceAssist {
  padding-top: 46px;
}
header {
  position: fixed;
  top: 0;
  width: 100%;
  display: flex;
  align-items: center;
  background-color: #ff4d4f;
  color: #fff;
  p {
    text-align: center;
    line-height: 46px;
    margin-left: 95px;
    font-size: 16px;
  }
}
</style>
