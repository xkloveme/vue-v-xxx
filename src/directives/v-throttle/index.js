/*
 * @describe: v-throttle
 * @Author: superDragon
 * @Date: 2019-09-29 22:35:20
 * @LastEditors: superDragon
 * @LastEditTime: 2019-10-01 14:32:19
 */

/**
 * 函数节流
 * 规定在一个单位时间内，只能触发一次函数，如果这个单位时间内触发多次函数，只有一次生效； 典型的案例就是鼠标不断点击触发，规定在n秒内多次点击只有一次生效
 * @param fn
 * @param interval
 * @returns {Function}
 * @constructor
 */
export const Throttle = (fn, t) => {
  let last
  let timer
  let interval = t || 500
  return function () {
    let args = arguments
    let now = +new Date()
    if (last && now - last < interval) {
      clearTimeout(timer)
      timer = setTimeout(() => {
        last = now
        fn.apply(this, args)
      }, interval)
    } else {
      last = now
      fn.apply(this, args)
    }
  }
}
const vThrottle = {
  inserted (el) {
    Throttle()
  }
}
export default vThrottle
