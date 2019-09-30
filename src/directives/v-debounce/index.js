/*
 * @describe: v-debounce
 * @Author: superDragon
 * @Date: 2019-09-29 22:35:20
 * @LastEditors: superDragon
 * @LastEditTime: 2019-09-29 23:36:25
 */

/**
* 函数防抖 (只执行最后一次点击)
* 在事件被触发n秒后再执行回调，如果在这n秒内又被触发，则重新计时；典型的案例就是输入搜索：输入结束后n秒才进行搜索请求，n秒内又输入的内容，就重新计时
* @param fn
* @param delay
* @returns {Function}
* @constructor
*/
const Debounce = (fn, t) => {
  let delay = t || 200
  let timer
  return function () {
    let args = arguments
    if (timer) {
      clearTimeout(timer)
    }
    timer = setTimeout(() => {
      timer = null
      fn.apply(this, args)
    }, delay)
  }
}
const vFocus = {
  inserted (el) {
    Debounce()
  }
}
export default vFocus
