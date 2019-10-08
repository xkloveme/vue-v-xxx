/*
 * @describe: v-click-out
 * @Author: superDragon
 * @Date: 2019-09-29 22:35:20
 * @LastEditors: superDragon
 * @LastEditTime: 2019-10-08 19:17:26
 */
// 定义一个listener存储回调
const listener = {}
// 下标计数
let i = 0
let handler = e => {
  Object.keys(listener).forEach(key => {
    if (typeof listener[key] === 'function') {
      listener[key](e)
    }
  })
}
const vClickOut = {
  bind: (el, binding, vnode) => {
    if (typeof binding.value === 'function') {
      el.__OUTKEY__ = i++
      listener[el.__OUTKEY__] = e => {
        if (e.target && !el.contains(e.target)) {
          binding.value(e, el)
        }
      }
      document.addEventListener('click', handler)
    }
  },
  // 绑定指令的元素插入DOM时调用
  inserted: (el, binding, vnode, oldVnode) => {
    if (typeof binding.value === 'function') {
      binding.value(el)
    }
  },
  unbind: (el, binding, vnode, oldVnode) => {
    delete listener[el.__OUTKEY__]
    delete el.__OUTKEY__
    document.removeEventListener('click', handler)
  }
}

export default vClickOut
