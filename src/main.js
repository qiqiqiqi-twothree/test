import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './plugins/element.js'
import Api from '@/http/api'
import axios from 'axios'

Vue.prototype.$axios = axios
// import config from '@/config'
// Vue.prototype.$appConfig = config
Vue.use(Api)
Vue.config.productionTip = false
// import axios from 'axios'

import './plugins/element.js'

Vue.config.productionTip = false
Vue.prototype.name = 'zhangyaqi'

// 全局样式
import '@/assets/css/style.css'

// vant
import Vant from 'vant'
import 'vant/lib/index.css'
import { Lazyload } from 'vant'
Vue.use(Vant)
Vue.use(Lazyload)

//全局引用公用url路径
import { baseUrl } from '@/http/mock'
Vue.prototype.$baseUrl = baseUrl

// 引用VueResource
import VueResource from 'vue-resource'
Vue.use(VueResource)

// import {
//   pic_url
// } from '@/http/mock';

new Vue({
  router, //引用index.js中的
  store,
  render: h => h(App) //
}).$mount('#app')

// //使用全局配置在进行网络请求
// axios.defaults.baseURL = 'http://123.207.32.32:8000'
// axios({
//   url: '/home/multidata'
// }).then(res => {
//   console.log(res, 123)
// })
// axios
//   .all([
//     axios({ url: '/home/multidata' }),
//     axios({
//       url: '/home/data',
//       params: {
//         type: 'sell',
//         page: 5
//       }
//     })
//   ])
//   .then(
//     axios.spread((res1, res2) => {
//       console.log(res1, 1)
//       console.log(res2, 2)
//     })
//   )

// //创建对应的axios的实例
// const instancel = axios.create({
//   baseURL: 'http://123.207.32.32:8000',
//   timeout: 1500
// })
// instancel({
//   url: 'home/multidata'
// }).then(res => {
//   console.log(res, 123)
// })

// instancel({
//   url: 'home/data',
//   params: {
//     type: 'sell',
//     page: 1
//   }
// }).then(res => {
//   console.log(res,1111)
// })

// //封装request模块
// import { request } from './network/request'
// request({
//   url: 'home/multidata'
// })
//   .then(res => {
//     console.log(res, 111)
//   })
//   .catch(err => {
//     console.log(err, 222)
//   })

// request(
//   {
//     url: 'home/multidata'
//   },
//   res => {
//     console.log(res, 111)
//   },
//   err => {
//     console.log(err, 123)
//   }
// )

// request(
//   {
//     url: '/home/multidata'
//   },
//   res => {
//     console.log(res, 123)
//   },
//   err => {
//     console.log(err, 222)
//   }
// )
