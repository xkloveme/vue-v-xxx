/*
 * @describe: v-call
 * @Author: superDragon
 * @Date: 2019-09-29 22:35:20
 * @LastEditors: superDragon
 * @LastEditTime: 2019-10-04 10:06:50
 */
const vCall = {
  bind: function (el, binding) {
    el.$value = binding.value || binding.expression // 变量和字符串都支持
    el.style.cursor = 'pointer'
    const meta = document.createElement('meta')
    meta.name = 'format-detection'
    meta.content = 'telephone=yes'
    document.head.appendChild(meta)
    el.call = () => {
      const a = document.createElement('a')
      let arg = (binding.arg === 'sms' ? 'sms' : 'tel')
      a.href = `${arg}:${el.$value}`
      document.body.appendChild(a)
      a.click()
      document.body.removeChild(a)
    }
    el.addEventListener('click', el.call)
  },
  // 当传进来的值更新的时候触发
  componentUpdated (el, { value, expression }) {
    el.$value = value || expression
  },
  // 指令与元素解绑的时候，移除事件绑定
  unbind (el) {
    el.removeEventListener('click', el.call)
  }
}
export default vCall
