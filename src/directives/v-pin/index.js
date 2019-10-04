/*
 * @describe: v-pin
 * @Author: superDragon
 * @Date: 2019-09-29 22:35:20
 * @LastEditors: superDragon
 * @LastEditTime: 2019-10-04 09:39:12
 */
const vPin = {
  bind: function (el, binding, vnode) {
    el.style.position = 'fixed'
    var s = (binding.arg === 'left' ? 'left' : 'top')
    el.style[s] = (binding.value || 0) + 'px'
  }
}
export default vPin
