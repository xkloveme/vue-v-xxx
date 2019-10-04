/*
 * @describe: v-ellipsis
 * @Author: superDragon
 * @Date: 2019-09-29 22:35:20
 * @LastEditors: superDragon
 * @LastEditTime: 2019-10-04 14:35:23
 */
const vEllipsis = {
  inserted (el, binding) {
    el.style.overflow = 'hidden'
    let NodeList = el.childNodes
    NodeList.forEach(element => {
      if (element.style) {
        element.style.overflow = 'hidden'
      }
    })
    el.title = el.innerText
    if (binding.arg && Number(binding.arg) > 1) {
      el.style.display = '-webkit-box'
      el.style['-webkit-box-orient'] = 'vertical'
      el.style['-webkit-line-clamp'] = Number(binding.arg)
    } else {
      el.style['text-overflow'] = 'ellipsis'
      el.style['white-space'] = 'nowrap'
      el.style['word-break'] = 'break-all'
    }
  }
}
export default vEllipsis
