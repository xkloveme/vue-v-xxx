/*
 * @describe: v-debounce
 * @Author: superDragon
 * @Date: 2019-09-29 22:35:20
 * @LastEditors: superDragon
 * @LastEditTime: 2019-10-01 20:18:12
 */

const vDebounce = {
  // update (el, binding) {
  //   console.log('🐛🐛🐛: inserted -> binding22', binding)
  // },
  inserted (el, binding) {
    // console.log('🐛🐛🐛: inserted -> el', el)
    // console.log('🐛🐛🐛: inserted -> binding', binding)
    let delay = binding.arg || 200
    let timer
    el.addEventListener('keyup', () => {
      if (timer) {
        clearTimeout(timer)
      }
      timer = setTimeout(() => {
        timer = null
        // binding.value()
        // console.log('🐛🐛🐛: timer -> binding', binding)
      }, delay)
    })
  }
}
export default vDebounce
