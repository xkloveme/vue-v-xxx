/*
 * @describe: 自定义指令合集
 * @Author: superDragon
 * @Date: 2019-09-22 19:49:27
 * @LastEditors: superDragon
 * @LastEditTime: 2019-10-04 09:26:52
 */
// 一键复制
import copy from './v-copy'
import focus from './v-focus'
import debounce from './v-debounce'
import throttle from './v-throttle'
import pin from './v-pin'
import call from './v-call'
// 自定义指令
export const directives = {
  copy,
  focus,
  debounce,
  throttle,
  pin,
  call
}
