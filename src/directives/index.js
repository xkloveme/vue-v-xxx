/*
 * @describe: 自定义指令合集
 * @Author: superDragon
 * @Date: 2019-09-22 19:49:27
 * @LastEditors: superDragon
 * @LastEditTime: 2019-11-04 17:41:56
 */
import copy from './v-copy'
import focus from './v-focus'
import debounce from './v-debounce'
import throttle from './v-throttle'
import pin from './v-pin'
import call from './v-call'
import ellipsis from './v-ellipsis'
import money from './v-money'
import clickOut from './v-click-out'
import drag from './v-drag'
// 自定义指令
export const directives = {
  copy,
  focus,
  debounce,
  throttle,
  pin,
  call,
  ellipsis,
  money,
  'click-out': clickOut,
  drag
}
