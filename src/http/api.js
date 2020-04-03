import axios from 'axios'
// import config from '@/config'

// axios 默认配置值设置
const api = axios.create()
api.defaults.baseURL = 'https://pre2mall.gree.com/mobile/'
api.defaults.timeout = 15000

api.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded'
api.defaults.headers.post['X-Requested-With'] = 'XMLHttpRequest'
api.defaults.headers.post['mobile_login_token'] = ''

export default {
  install: function(vm) {
    vm.prototype.$api = api
  }
}
