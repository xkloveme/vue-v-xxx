/*
 * @describe: v-money
 * @Author: superDragon
 * @Date: 2019-09-29 22:35:20
 * @LastEditors: superDragon
 * @LastEditTime: 2019-10-06 23:49:14
 */
// import packages from '../../packages'
// let Message = packages.Message
let money = function (s, n) {
  n = n > 0 && n <= 20 ? n : 2
  s = parseFloat((s + '').replace(/[^\d\\.-]/g, '')).toFixed(n) + ''
  var l = s.split('.')[0].split('').reverse()
  var r = s.split('.')[1]
  let t = ''
  for (let i = 0; i < l.length; i++) {
    t += l[i] + ((i + 1) % 3 === 0 && (i + 1) !== l.length ? ',' : '')
  }
  return t.split('').reverse().join('') + '.' + r
}
const vMoney = {
  componentUpdated: function (el, binding, vnode) {
    console.log('🐛🐛🐛: vnode', vnode)
    console.log('🐛🐛🐛: binding', binding)
    el.value = binding.value || binding.expression
    console.log('🐛🐛🐛: el.$value', el.value)
    // vnode.context[binding.expression] = money(binding.value, 2)
    // el.style.position = 'fixed'
    // var s = (binding.arg === 'left' ? 'left' : 'top')
    // el.style[s] = (binding.value || 0) + 'px'
  },
  bind (el, binding) {
    el.value = binding.value || ''
    console.log('🐛🐛🐛: bind -> binding.value', binding.value)
  },
  inserted (el, binding, vnode) {
    console.log('🐛🐛🐛: inserted -> vnode', vnode)
    console.log('🐛🐛🐛: inserted -> binding', binding)
    el.addEventListener('keyup', () => {
      console.log('🐛🐛🐛: inserted -> binding.value', money(vnode.elm.value, 2), vnode.elm.value)
      let value = vnode.elm.value
      vnode.context[binding.expression] = money(value, 2)
      vnode.elm.value = value
    })
  }
}
export default vMoney
