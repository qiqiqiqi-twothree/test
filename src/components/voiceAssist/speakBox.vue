<template>
  <div id="speakBox">
    <!-- 对话框时间 -->
    <div class="time">
      <P>{{day +'&nbsp;&nbsp;'+ time}}</P>
    </div>
    <!-- 语音对话框 -->
    <template v-if="boxData.name=='qiqi'">
      <div class="boxleft">
        <span></span>
        <p>您好，我是您的小格智能导购助手，您可以这样和我对话：我想买一台2000元的电脑</p>
      </div>
    </template>
    <!-- <template v-if="boxData.name=='qiqi'">
      <div class="boxright">
        <span></span>
        <p>我想买空调</p>
      </div>
    </template>-->
    <!-- 数据猜你喜欢 -->
    <template>
      <div class="guessLike"></div>
    </template>
    <data-swiper></data-swiper>
    <box-line></box-line>
  </div>
</template>

<script>
import moment from 'moment'
import { Icon } from 'vant'
import dataSwiper from './dataSwiper'
import boxLine from './boxLine'

export default {
  props: {
    boxData: Object
  },
  components: {
    [Icon.name]: Icon,
    dataSwiper,
    boxLine
  },
  data() {
    return {
      yi: '',
      day: '',
      time: moment().format('HH:mm')
    }
  },
  computed: {},
  created() {
    let data = moment().day()
    this.day = new Array(
      '星期日',
      '星期一',
      '星期二',
      '星期三',
      '星期四',
      '星期五',
      '星期六'
    )[0]
    this.yi = new Array('0', '1', '2', '3')
  },
  methods: {
    // moment,
  }
}
</script>

<style lang="less" scoped>
.time {
  width: 88px;
  height: 20px;
  text-align: center;
  margin: 9px auto;
  background-color: rgba(238, 238, 238, 1);
  border-radius: 10px;
  p {
    font-size: 10px;
    font-weight: 400;
    color: rgba(153, 153, 153, 1);
    line-height: 20px;
  }
}
.boxleft {
  display: flex;
  flex-direction: row;
  margin: 10px 0;
  span {
    width: 42px;
    height: 42px;
    background: url('../../assets/img/voice_assistant/assistant_icon@2x.png')
      no-repeat;
    background-size: cover;
  }
  p {
    margin-left: 3px;
    padding: 12px;
    max-width: 290px;
    font-size: 12px;
    background: white;
    border-radius: 6px;
  }
}
.boxright {
  display: flex;
  flex-direction: row-reverse;
  margin: 10px 0;
  span {
    margin-right: 5px;
    width: 42px;
    height: 42px;
    background: url('../../assets/img/voice_assistant/user.png') no-repeat;
    background-size: cover;
    border-radius: 5px;
  }
  p {
    margin-right: 3px;
    padding: 12px;
    max-width: 290px;
    font-size: 12px;
    background: rgba(248, 248, 248, 1);
    border-radius: 6px;
  }
}
.guessLike {
  width: 94px;
  height: 20px;
  margin: 10px auto;
  margin-top: 20px;
  background: url('../../assets/img/voice_assistant/like.png');
  background-size: cover;
}
</style>
