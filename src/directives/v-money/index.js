/*
 * @describe: v-money
 * @Author: superDragon
 * @Date: 2019-09-29 22:35:20
 * @LastEditors: superDragon
 * @LastEditTime: 2019-10-08 10:53:08
 */
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
    el.value = binding.value || binding.expression
  },
  bind (el, binding) {
    el.value = binding.value || ''
  },
  inserted (el, binding, vnode) {
    el.addEventListener('keyup', () => {
      let value = vnode.elm.value
      vnode.context[binding.expression] = money(value, 2)
      vnode.elm.value = value
    })
  }
}
export default vMoney
