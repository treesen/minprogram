// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import 'babel-polyfill'
import Vue from 'vue'
import App from './App'
import router from './router'
import ElementUI from 'element-ui'
import i18n from './common/config/i18n'
import http from './common/config/http'
import store from './store'
import vfilter from './common/js/common.js'
// import echarts from 'echarts'

import 'element-ui/lib/theme-chalk/index.css'
import '@/common/css/common.css'
import '@/common/css/animate.css'

Vue.config.productionTip = false
Vue.use(ElementUI)
// 公共方法
http.setI18n(i18n)
Vue.prototype.$http = http.axios
Vue.prototype.$msg = ElementUI.Message
Vue.prototype.$loading = ElementUI.Loading.service
Vue.prototype.$msgbox = ElementUI.MessageBox
Vue.prototype.$alert = ElementUI.MessageBox.alert
Vue.prototype.$confirm = ElementUI.MessageBox.confirm
Vue.prototype.$prompt = ElementUI.MessageBox.prompt
Vue.prototype.$notify = ElementUI.Notification
// Vue.prototype.$echarts = echarts

for (let key in vfilter) {
  Vue.filter(key, vfilter[key])
}

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  i18n,
  store,
  components: { App },
  template: '<App/>'
})
