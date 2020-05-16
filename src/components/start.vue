<template lang="html">
  <div class="evaStar">
    <ul class="star">
      <li
        v-for="(itemClass, index) in itemClasses"
        :key="index"
        :class="itemClass"
        class="star-item"
        @click="stars(index)"
        track-by="index"
      ></li>
    </ul>
    <div class="yellow">
      <!-- <div class="manual">
        <div class="yellow start" :class="{ active: isActive }"></div>
        <div class="gray start"></div>
      </div> -->
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      isActive: true,
      score: ''
    }
  },
  computed: {
    itemClasses() {
      let result = [] // 返回的是一个数组,用来遍历输出星星
      let score = Math.floor(this.score * 2) / 2 // 计算所有星星的数量
      let hasDecimal = score % 1 !== 0 // 非整数星星判断
      let integer = Math.floor(score) // 整数星星判断

      for (let i = 0; i < integer; i++) {
        // 整数星星使用on
        result.push('on') // 一个整数星星就push一个CLS_ON到数组
      }
      if (hasDecimal) {
        // 非整数星星使用half
        result.push('half') // 类似
      }
      while (result.length < 5) {
        // 余下的用无星星补全,使用off
        result.push('off')
      }
      return result
    }
  },
  methods: {
    stars: function(index) {
      this.score = index + 1
    }
    // watch: {

    // },
  }
}
</script>
<style scoped lang="less">
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
    .yellow {
      background-color: rgb(96, 230, 245);
      z-index: 99;
    }
    .gray {
      background-color: rgb(223, 223, 223);
    }
    .start {
      width: 23px;
      height: 23px;

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

.evaStar {
  float: left;
  padding-top: 10px;
}
.star {
  font-size: 0;
}
.star-item {
  display: inline-block;
  background-repeat: no-repeat;
  width: 20px;
  height: 20px;
  margin-left: 5px;
  background-size: 100%;
}
.star-item.on {
  background-image: url(../assets/icons/on.png);
}
.star-item.half {
  background-image: url(../assets/icons/half.png);
}
.star-item.off {
  background-image: url(../assets/icons/off.png);
}
</style>
