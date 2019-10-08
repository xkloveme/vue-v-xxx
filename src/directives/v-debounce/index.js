/*
 * @describe: v-debounce
 * @Author: superDragon
 * @Date: 2019-09-29 22:35:20
 * @LastEditors: superDragon
 * @LastEditTime: 2019-10-08 14:35:15
 */

const vDebounce = {
  inserted (el, binding, vnode) {
    let last = null
    let timer = null
    let interval = binding.arg || 500
    el.addEventListener('click', (e) => {
      let now = +new Date()
      if (last && now - last < interval) {
        clearTimeout(timer)
        timer = setTimeout(() => {
          last = now
          binding.value(e, el)
        }, interval)
      } else {
        last = now
        binding.value(e, el)
      }
    })
  }
}
export default vDebounce
