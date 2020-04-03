<template>
  <div class="watchDetail">
    <!-- 标题 -->
    <div class="titleBar">
      <div class="titleBar-inside">
        <img @click="goBack" src="../assets/img/gobackway@2x.png" />
        <div>
          <h1 class="name">快报</h1>
        </div>
      </div>
    </div>
    <!-- 每日资讯 -->
    <div v-if="gotolist" class="detailBar">
      <div
        v-for="list in getList"
        :key="list.id"
        @click="gotoNoticedetail_list(list)"
      >
        <div class="deatilBar_info">
          <div class="deatilBar_updatatime">
            <div class="deatilBar_updatatime_determined">
              <h1>{{ list.publishTime }}</h1>
            </div>
          </div>
          <div class="detailBar_artical">
            <div class="detailBar_artical_table">
              <div v-if="list.ifimg" class="detailBar_artical_table_img">
                <img :src="list.navigationImage" />

                <!-- <img src="../assets/img/articalimg.png" /> -->
              </div>

              <div v-if="ifimg" class="detailBar_artical_table_script">
                <div class="detailBar_artical_table_script_title">
                  <h1>{{ list.title }}</h1>
                </div>
                <div class="detailBar_artical_table_script_text">
                  <p v-html="list.details"></p>
                </div>
              </div>
              <div v-else class="detailBar_artical_table_script_noimg">
                <div class="detailBar_artical_table_script_title">
                  <h1>{{ list.title }}</h1>
                </div>
                <div class="detailBar_artical_table_script_text">
                  <div
                    class="detail"
                    v-html="list.details.replace(/<\/?.+?\/?>/g, '')"
                  ></div>

                  <!-- <p v-html="list.details"></p> -->
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <detail :getList="postText" v-else></detail>
  </div>
</template>
<script>
import detail from '@/components/index/noticeDetail_list'
import { getNoticelist, pic_url } from '@/http/mock.js'

export default {
  components: {
    detail
  },
  data() {
    return {
      gotolist: true,
      postText: {},
      getList: [],
      demo: '',
      value: '',
      ifimg: true
    }
  },
  beforeRouterLeave(to, from, next) {
    if (!this.gotolist) {
      this.gotolist = !this.gotolist
      next(false)
      return
    }
    next()
  },
  mounted() {
    let _this = this
    this.getList = []
    this.$api.get(getNoticelist).then(res => {
      console.log(res, 123)
      getapi(1)
      function getapi(j) {
        _this.$api
          .get(getNoticelist, {
            params: {
              page: j
            }
          })
          .then(res => {
            // console.log(res, 123)
            if (res.data.result.length == 10) {
              j++
              getapi(j)
            }
            for (let i = 0; i < res.data.result.length; i++) {
              let currentList = {}
              currentList.id = res.data.result[i].id
              currentList.title = res.data.result[i].title
              currentList.publishTime = res.data.result[i].publishTime
              currentList.details = res.data.result[i].details
              currentList.ifimg = res.data.result[i].navigationImage
              currentList.navigationImage =
                pic_url + res.data.result[i].navigationImage
              _this.getList.push(currentList)
            }
            console.log(_this.getList, 111111111)
          })
      }
    })
  },
  methods: {
    gotoNoticedetail_list(list) {
      this.gotolist = false
      this.postText = list
    },

    goBack() {
      if (this.gotolist) {
        this.$router.push('/')
        this.getlist = []
      } else {
        this.$router.push('/watchDetail')
        this.gotolist = true
      }
    }
  }
}
</script>
<style scoped lang="less">
.watchDetail {
  .titleBar {
    background: rgba(255, 77, 79, 1);
    width: 100%;
    // height: auto;
    position: sticky;
    top: 0px;
    z-index: 10;

    .titleBar-inside {
      width: 90%;
      height: auto;
      margin: 0 auto;
      white-space: nowrap;
      padding: 15px 0px;

      img {
        display: inline-block;
        width: 18px;
        height: 18px;
        padding-bottom: 3px;
      }
      div {
        display: inline-block;
        width: 90%;
        text-align: center;
        height: auto;

        h1 {
          font-size: 18px;
          font-family: PingFangSC-Medium, PingFang SC;
          font-weight: 500;
          color: rgba(255, 255, 255, 1);
          line-height: 25px;
        }
      }
    }
  }
  .detailBar {
    background-color: #f9f9f9;
    width: 100%;
    box-sizing: border-box;
    padding: 10px 0;

    .deatilBar_info {
      width: 95%;
      margin: 0 auto;

      .deatilBar_updatatime {
        text-align: center;
        padding: 8px 0px;
        width: 50%;
        margin: 0 auto;

        .deatilBar_updatatime_determined {
          width: 70%;
          margin: 0 auto;
          background: rgba(255, 255, 255, 1);
          border-radius: 6px;

          h1 {
            font-size: 10px;
            font-family: PingFangSC-Regular, PingFang SC;
            font-weight: 400;
            color: rgba(191, 191, 191, 1);
            line-height: 14px;
          }
        }
      }
      .detailBar_artical {
        width: 100%;
        height: auto;
        background: rgba(255, 255, 255, 1);
        box-shadow: 0px 2px 8px 0px rgba(0, 0, 0, 0.05);
        border-radius: 4px;

        .detailBar_artical_table {
          box-sizing: border-box;
          width: 100%;
          height: auto;
          padding: 18px 12px;
          display: flex;

          .detailBar_artical_table_img {
            width: 45%;
            background: gray;
            position: relative;
            padding-bottom: 30%;

            img {
              width: 100%;
              height: 100%;
              position: absolute;
            }
          }

          .detailBar_artical_table_script {
            padding: 0px 0px 0px 11px;
            overflow: hidden;
            height: 100px;
            width: 100%;

            .detailBar_artical_table_script_title {
              h1 {
                margin: 0 0 0 0;
                font-size: 14px;
                font-family: PingFangSC-Medium, PingFang SC;
                font-weight: 500;
                color: rgba(51, 51, 51, 1);
                line-height: 20px;
              }
            }
            .detailBar_artical_table_script_text {
              height: auto;
              font-size: 12px;
              font-family: PingFangSC-Regular, PingFang SC;
              font-weight: 400;
              color: rgba(127, 127, 127, 1);
              line-height: 15px;

              display: -webkit-box;
              height: 100%;
              overflow: hidden;
              text-overflow: ellipsis;

              p {
                margin: 0 0 0 0;
                word-break: break-all;
                overflow: hidden;
              }
            }
          }
          .detailBar_artical_table_script_noimg {
            padding: 0px 0px 0px 11px;
            overflow: hidden;
            height: 102px;
            width: 100%;
            .detailBar_artical_table_script_title {
              h1 {
                margin: 0 0 0 0;
                font-size: 14px;
                font-family: PingFangSC-Medium, PingFang SC;
                font-weight: 500;
                color: rgba(51, 51, 51, 1);
                line-height: 20px;
              }
            }
            .detailBar_artical_table_script_text {
              font-size: 12px;
              font-family: PingFangSC-Regular, PingFang SC;
              font-weight: 400;
              color: rgba(127, 127, 127, 1);
              line-height: 15px;
              padding-top: 8px;

              p {
                margin: 0 0 0 0;
                word-break: break-all;
              }
            }
          }
        }
      }
    }
  }
}
</style>
