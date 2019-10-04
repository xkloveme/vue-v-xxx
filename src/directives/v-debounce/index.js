/*
 * @describe: v-debounce
 * @Author: superDragon
 * @Date: 2019-09-29 22:35:20
 * @LastEditors: superDragon
 * @LastEditTime: 2019-10-03 11:53:30
 */

const vDebounce = {
  bind (el, { value }) {
    el.value = value
  },
  inserted (el, binding, vnode) {
    let delay = binding.arg || 2000
    let timer = null
    el.addEventListener('keyup', () => {
      if (timer) {
        clearTimeout(timer)
      }
      timer = setTimeout(() => {
        timer = null
        vnode.context[binding.expression] = el.value
      }, delay)
    })
  }
}
export default vDebounce
