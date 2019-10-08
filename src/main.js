/*
 * @describe: 入口
 * @Author: superDragon
 * @Date: 2019-09-25 10:27:43
 * @LastEditors: superDragon
 * @LastEditTime: 2019-10-08 13:50:53
 */
import packages, { components } from './packages'
import { directives } from './directives'

const install = function (Vue, opts = {}) {
  // 判断是否安装
  if (install.installed) return
  // 遍历注册全局组件
  components.forEach(component => {
    Vue.component(component.name, component)
  })

  Object.keys(directives).forEach((key) => {
    Vue.directive(key, directives[key])
  })

  Vue.prototype.$message = packages.Message
}
/* istanbul ignore if */
if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue)
}

export default { install, ...directives }
