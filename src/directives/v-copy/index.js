/*
 * @describe: 一键copy
 * @Author: superDragon
 * @Date: 2019-09-22 19:52:10
 * @LastEditors: superDragon
 * @LastEditTime: 2019-09-22 20:22:36
 */
import { Message } from 'element-ui'

const vCopy = {
  /*
    bind 钩子函数，第一次绑定时调用，可以在这里做初始化设置
    el: 作用的 dom 对象
    value: 传给指令的值，也就是我们要 copy 的值
  */
  bind (el, { value, expression }) {
    el.$value = value || expression // 变量和字符串都支持
    el.handler = () => {
      if (!el.$value) {
        Message.warning('无复制内容')
        return
      }
      // 动态创建 textarea 标签
      const textarea = document.createElement('textarea')
      textarea.readOnly = 'readonly'
      textarea.style.position = 'absolute'
      textarea.style.left = '-9999px'
      // 将要 copy 的值赋给 textarea 标签的 value 属性
      textarea.value = el.$value
      // 将 textarea 插入到 body 中
      document.body.appendChild(textarea)
      // 选中值并复制
      textarea.select()
      // textarea.setSelectionRange(0, textarea.value.length);
      const result = document.execCommand('Copy')
      if (result) {
        Message.success('复制成功')
      }
      document.body.removeChild(textarea)
    }
    // 绑定点击事件，就是所谓的一键 copy 啦
    el.addEventListener('click', el.handler)
  },
  // 当传进来的值更新的时候触发
  componentUpdated (el, { value, expression }) {
    el.$value = value || expression
  },
  // 指令与元素解绑的时候，移除事件绑定
  unbind (el) {
    el.removeEventListener('click', el.handler)
  }
}

export default vCopy
