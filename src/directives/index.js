/*
 * @describe: 自定义指令合集
 * @Author: superDragon
 * @Date: 2019-09-22 19:49:27
 * @LastEditors: superDragon
 * @LastEditTime: 2019-10-04 10:44:35
 */
import copy from './v-copy'
import focus from './v-focus'
import debounce from './v-debounce'
import throttle from './v-throttle'
import pin from './v-pin'
import call from './v-call'
import ellipsis from './v-ellipsis'
// 自定义指令
export const directives = {
  copy,
  focus,
  debounce,
  throttle,
  pin,
  call,
  ellipsis
}
