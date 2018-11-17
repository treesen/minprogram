import axios from 'axios'
// import qs from 'qs'
import { Message, Loading } from 'element-ui'

if (process.env.NODE_ENV === 'development') {
  axios.defaults.baseURL = 'http://localhost:8090'
} else if (process.env.NODE_ENV === 'debug') {
  axios.defaults.baseURL = 'http://localhost:8088'
} else if (process.env.NODE_ENV === 'production') {
  // axios.defaults.baseURL = 'http://localhost:8088'
  axios.defaults.baseURL = 'https://wxwork.tenpay.com/'
}

axios.defaults.headers.common['Authorization'] = 'AUTH_TOKEN'
axios.defaults.headers.post['Content-Type'] = 'application/json;'
axios.defaults.withCredentials = true

// axios.defaults.transformRequest = [
//   function (data) {
//     // 数据序列化
//     return data
//     // return qs.stringify(data)
//   }
// ]

let loadingInstance
// 添加请求拦截器
axios.interceptors.request.use(
  function (config) {
    loadingInstance = Loading.service({
      background: 'rgba(255, 255, 255, 0.4)',
      text: showMsg('loadingTip')
    })
    // 配置config
    // config.headers.Accept = 'application/json'
    // config.headers.System = 'vue'
    // let token = Vue.localStorage.get('token')
    // if (token) {
    //   config.headers.Token = token
    // }
    // console.log(config)
    return config
  },
  function (error) {
    // 对请求错误做些什么
    return Promise.reject(error)
  }
)

// 添加响应拦截器
axios.interceptors.response.use(
  function (response) {
    loadingInstance.close()
    // 对响应数据做点什么
    let status = response.status
    if (status === 200) {
      let data = response.data
      if (
        (!data || data.retcode !== '0') &&
        response.request.responseType !== 'arraybuffer'
      ) {
        Message({
          message: showMsg(data.errmsg),
          type: 'error',
          showClose: true
        })
        return Promise.reject(response)
      }
      return Promise.resolve(response)
    } else {
      return Promise.reject(response)
    }
  },
  function (error) {
    if (loadingInstance) {
      loadingInstance.close()
    }

    // 对响应错误做点什么
    return Promise.reject(error)
  }
)
let i18n = {}
let setI18n = function (i18nInstance) {
  i18n = i18nInstance
}
let showMsg = function (msg) {
  if (i18n) {
    return i18n.t(msg)
  } else {
    return msg
  }
}

export default { axios, setI18n }
