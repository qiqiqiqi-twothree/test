// const STORAGE_CARTLIST_KEY = 'STORAGE_CARTLIST_KEY';
// const STORAGE_QUERYMYLIST_KEY = 'STORAGE_QUERYMYLIST_KEY';
import api from '@/http/api.js'
import {
  JSEncrypt
} from 'jsencrypt'
// import {
//   checkInvoiceCode
// } from '../http/mock'
const STORAGE_USER_KEY = 'STORAGE_USER_KEY'

export const getCheckInvoice = (data) => {
  return api.get(checkInvoiceCode,

    {
      params: {
        companyName: data
      }
    }

  )
}
export const TEL_CHECK = /^[1][3,4,5,6,7,8,9][0-9]{9}$/ // 手机号正则验证

export const MOB_CHECK = /^(\(\d{3,4}\)|\d{3,4}-|\s)?\d{7,14}$/ // 固话验证

export const EMAIL_CHECK = /^\w+@[a-z0-9]+\.[a-z]+$/i // 邮箱号正则验证

export const INVOICE_CHECK = /^[A-Z0-9]{15,20}$/ // 税号正则  /^[A-Z]+$/
export const rasEncrypt = (input) => {
  const publicKey =
    'MIGfMA0GCSqGSIb3DQEBAQUAA4GNADCBiQKBgQCDSsM7GPsZzpWg8mX3St6inIUg3dYk9xQCxXm3OrmT8oIZDDDFNqxOcQFHw+G2y9oXY77csOV9ZmjIPCtjGcr3ax0qyQfqltplYmmq4MgxejU4nS9cGeOHMV3Z9ubhmQnLxhIzcidWwFWMLAp1AwjUD72LYaG+YSkV/qwXl9uDIQIDAQAB'
  const encrypt = new JSEncrypt()
  encrypt.setPublicKey(publicKey)
  const password = encrypt.encrypt(input)
  return 'LOGINPASSWORD' + encodeURIComponent(password)
}
const Util = {
  // 获取 localStorage
  getLocal(key = STORAGE_USER_KEY) {
    // console.log('get local operation')
    return JSON.parse(window.localStorage.getItem(key))
  },
  // 设置 localStorage
  setLocal(res, key = STORAGE_USER_KEY, isSaveOldData = false) {
    // 第三个参数是true的话,会增加数据而不是重新设置,res必须是数组
    if (isSaveOldData) {
      if (this.getLocal(key)) {
        const oldData = this.getLocal(key)
        return window.localStorage.setItem(key, JSON.stringify(oldData.concat(res)))
      }
    }
    return window.localStorage.setItem(key, JSON.stringify(res))
  },
  getImgUrlBase64(fileObj, name, callback) {
    var reader = new FileReader()
    reader.readAsDataURL(fileObj)
    reader.onload = function (e) {
      callback && callback(e.target.result, name)
    }
  },
  isWeixinBrowser() {
    var ua = navigator.userAgent.toLowerCase()
    return !!(/micromessenger/.test(ua))
  },

  isWifi() {
    var wifi = true
    var ua = window.navigator.userAgent
    var con = window.navigator.connection
    console.log('dddddddddddd', ua)
    // 如果是微信
    if (/MicroMessenger/.test(ua)) {
      // 如果是微信6.0以上版本，用UA来判断
      if (/NetType/.test(ua)) {
        console.log(/WIFI/.test(ua))
        if (!/WIFI/.test(ua)) {
          wifi = false
        }

        // 如果是微信6.0以下版本，调用微信私有接口WeixinJSBridge
      } else {
        console.log('shismdddddgfewgfweg')
        document.addEventListener('WeixinJSBridgeReady', function onBridgeReady() {
          WeixinJSBridge.invoke('getNetworkType', {}, function (e) {
            if (e.err_msg != 'network_type:wifi') {
              wifi = false
            }
          })
        })
      }

      // 如果支持navigator.connection
    } else if (con) {
      var network = con.type
      if (network != 'wifi' && network != '2' && network != 'unknown') { // unknown是为了兼容Chrome Canary
        wifi = false
      }
    }
    console.log('shism', wifi)
    return wifi
  },

  // 节流函数
  debounce(fn, wait) {
    let timeout = null
    return function () {
      if (timeout !== null) clearTimeout(timeout)
      timeout = setTimeout(fn, wait)
    }
  },
  // 防抖函数
//   throttle(fn, delay) {
//     var prev = Date.now()
//     return function () {
//       var now = Date.now()
//       if (now - prev > delay) {
//         fn()
//         prev = Date.now()
//       }
//     }
//   }
}
export default Util
