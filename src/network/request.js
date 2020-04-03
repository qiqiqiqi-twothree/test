import axios from 'axios'

export function request(config) {
  //1创建axios的实例
  const instance = axios.create({
    baseURL: 'http://123.207.32.32:8000',
    timeout: 5000
  })
  //2axios拦截器
  axios.interceptors.request.use(
    config => {
      console.log(config, 77)
      //config中的一些信息不符合服务器要求
      //发送请求时，希望有一些图标显示
      //某系请求（例如登陆token）必须携带一些特殊信息
      return config
    },
    err => {
      config.log(err, 78)
    }
  )
  axios.interceptors.response

  //发送真正的网络请求
  return instance(config)

  //   instance(config)
  //     .then(res => {
  //       //   console.log(res)
  //       success(res)
  //     })
  //     .catch(err => {
  //       //   console.log(err)
  //       failure(err)
  //     })
}
