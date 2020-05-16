<template lang="html">
  <div class="evaStar">
    <div class="model_rate">
      <div class="model_title">
        <label class="model_rate_name">商品评分：</label>
        <span class="model_rate_value">
          <v-start></v-start>
        </span>
      </div>
      <div class="model_title">   
      <label class="model_rate_name">描述相符评分：</label>
        <span class="model_rate_value">
          <v-start></v-start>
        </span>
      </div>
      <div class="model_title">
        <label class="model_rate_name">服务态度评分：</label>
        <span class="model_rate_value">
          <v-start></v-start>
        </span>
      </div>
      <div class="model_title">
        <label class="model_rate_name">到货速度评分：</label>
        <span class="model_rate_value">
          <v-start></v-start>
        </span>
      </div>
      <i></i>
      <div class="manual" @click="getColor">
        <p>ydsgfdrys</p>
        <div class="two_trans" :class="{show:isShow} " > </div>
          <!-- <div class="trans" @click="getColor()"></div> -->
        <div class="blue start" :class="{ active: isActive }"></div>
        <div class="gray start"></div>
      </div>
    </div>
    <div>
      <input 
        class="ng-pristine ng-valid ng-empty ng-touched"
        id="input_search"
        style
        type="text"
        v-model="associateWords"
      />
      <p>{{associateWords}} fghfg</p>
    </div>
  </div>
</template>
<script>
import Start from '@/components/start.vue'
export default {
  components: {
    'v-start': Start
  },
  data() {
    return {
      isActive: false,
      isShow: true,
      name: ''
    }
  },
  computed: {
    associateWords: {
      get: function() {
        console.log(111)
      },
      set: function(newValue) {
        console.log(newValue)
        console.log(newValue, 333)
        // this.associateWords = newValue
      }
    }
  },
  methods: {
    getColor() {
      ;(this.isShow = !this.isShow), (this.isActive = !this.isActive)
    }
  }
}
</script>
<style scoped lang="less">
//   i:after{
//       content:'';
//       position: absolute;
//       display: block;
//       top: 50%;
//       left: 50%;
//       width: 32px;
//       height: 32px;
//       margin-top: -16px;
//       margin-left: -16px;
//       background: url("../../assets/icon/play.png") no-repeat;
//       background-size: cover;
//       z-index: 5;
// }

    
//     i:before {
//       content: "";
//       position: absolute;
//       display: block;
//       border-radius: 7px;
//       top: 0;
//       left: 0;
//       width: 100%;
//       height: 100%;
//       background-color: rgba(0, 0, 0, 0.5);
//       z-index: 1;
//     }


.evaStar {
  width: 100%;
  padding: 5px 10px;
  box-sizing: border-box;
  .model_rate {
    &_name {
      font-size: 12px;
      font-family: PingFangSC-Regular, PingFang SC;
      font-weight: 400;

      line-height: 30px;
    }
  }
  .model_title {
    display: flex;
  }
  //画星星
  .manual {
    display: flex;
    .show {
      display: none;
    }
    .two_trans {
      width: 25px;
      height: 25px;
      position: absolute;

      background-color: rgb(233, 153, 233);
      //  -webkit-clip-path: polygon(
      //   50% 0%,
      //   61% 35%,
      //   98% 35%,
      //   68% 57%,
      //   79% 91%,
      //   50% 70%,
      //   21% 91%,
      //   32% 57%,
      //   2% 35%,
      //   39% 35%
      // );
      // clip-path: polygon(
      //   50% 0%,
      //   61% 35%,
      //   98% 35%,
      //   68% 57%,
      //   79% 91%,
      //   50% 70%,
      //   21% 91%,
      //   32% 57%,
      //   2% 35%,
      //   39% 35%
      // );
      // -webkit-clip-path: polygon(50% 0%, 100% 0, 100% 100%, 50% 100%);
      // clip-path: polygon(50% 0%, 100% 0, 100% 100%, 50% 100%);
    }

    //trans
    .trans {
      width: 25px;
      height: 25px;
      position: absolute;
      z-index: 100;
      background-color: rgb(231, 152, 227);
      transition: width 2s;
      -webkit-transition: width 2s; /* Safari */
      //切割星星参数
      -webkit-clip-path: polygon(
        50% 0%,
        61% 35%,
        98% 35%,
        68% 57%,
        79% 91%,
        50% 70%,
        21% 91%,
        32% 57%,
        2% 35%,
        39% 35%
      );
      clip-path: polygon(
        50% 0%,
        61% 35%,
        98% 35%,
        68% 57%,
        79% 91%,
        50% 70%,
        21% 91%,
        32% 57%,
        2% 35%,
        39% 35%
      );
    }
    .trans:hover {
      width: 25px;
    }

    .blue {
      background-color: rgb(96, 230, 245);
      z-index: 99;
    }
    .gray {
      background-color: rgb(223, 223, 223);
    }
    .start {
      width: 25px;
      height: 25px;

      //切割星星参数
      -webkit-clip-path: polygon(
        50% 0%,
        61% 35%,
        98% 35%,
        68% 57%,
        79% 91%,
        50% 70%,
        21% 91%,
        32% 57%,
        2% 35%,
        39% 35%
      );
      clip-path: polygon(
        50% 0%,
        61% 35%,
        98% 35%,
        68% 57%,
        79% 91%,
        50% 70%,
        21% 91%,
        32% 57%,
        2% 35%,
        39% 35%
      );
    }
  }
}

.active {
  background-color: rgb(250, 252, 121);
  position: relative;
  animation: mymove 5s infinite;
  -moz-animation: mymove 5s infinite; /* Firefox */
  -webkit-animation: mymove 5s infinite; /* Safari and Chrome */
  -o-animation: mymove 5s infinite; /* Opera */
  @keyframes mymove {
    from {
      left: 0px;
    }
    to {
      left: 24px;
    }
  }

  @-moz-keyframes mymove /* Firefox */ {
    from {
      left: 0px;
    }
    to {
      left: 24px;
    }
  }

  @-webkit-keyframes mymove /* Safari and Chrome */ {
    from {
      left: 0px;
    }
    to {
      left: 24px;
    }
  }

  @-o-keyframes mymove /* Opera */ {
    from {
      left: 0px;
    }
    to {
      left: 24px;
    }
  }
}
</style>
