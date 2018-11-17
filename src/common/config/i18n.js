import VueI18n from 'vue-i18n'
import Vue from 'vue'
import en from '../i18n/en'
import zhCN from '../i18n/zh-CN'
import zhTW from '../i18n/zh-TW'

import ElementLocale from 'element-ui/lib/locale'
import enUI from 'element-ui/lib/locale/lang/en'
import zhCNUI from 'element-ui/lib/locale/lang/zh-CN'
import zhTWUI from 'element-ui/lib/locale/lang/zh-TW'

Vue.use(VueI18n)

const messages = {
  en: {
    ...enUI,
    ...en
  },
  zhCN: {
    ...zhCNUI,
    ...zhCN
  },
  zhTW: {
    ...zhTWUI,
    ...zhTW
  }
}
// Create VueI18n instance with options
const i18n = new VueI18n({
  locale: navigator.language
    ? navigator.language.replace('-', '') === 'zhcn'
      ? 'zhCN'
      : navigator.language.replace('-', '')
    : 'zhCN', // set locale
  messages // set locale messages
})

ElementLocale.i18n((key, value) => i18n.t(key, value))

export default i18n
