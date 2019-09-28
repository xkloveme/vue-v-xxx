/*
 * @describe: 自定义指令合集
 * @Author: superDragon
 * @Date: 2019-09-22 19:49:27
 * @LastEditors: superDragon
 * @LastEditTime: 2019-09-28 18:45:50
 */
// 一键复制
import copy from './v-copy'
// 自定义指令
export const directives = {
  copy
}
// // 批量注册指令
// export default {
//   install (Vue) {
//     Object.keys(directives).forEach((key) => {
//       Vue.directive(key, directives[key])
//     })
//   }
// }
// export default {
//   directives
// }
