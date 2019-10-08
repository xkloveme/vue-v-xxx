/*
 * @describe: v-debounce
 * @Author: superDragon
 * @Date: 2019-09-29 22:35:20
 * @LastEditors: superDragon
 * @LastEditTime: 2019-10-05 22:02:15
 */

const vDebounce = {
  inserted (el, binding, vnode) {
    let last = null
    let timer = null
    let interval = binding.arg || 500
    el.addEventListener('click', () => {
      let args = vnode.context[binding.expression]
      let now = +new Date()
      if (last && now - last < interval) {
        clearTimeout(timer)
        timer = setTimeout(() => {
          last = now
          args()
        }, interval)
      } else {
        last = now
        args()
      }
    })
  }
}
export default vDebounce
