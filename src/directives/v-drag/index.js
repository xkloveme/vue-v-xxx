/*
 * @describe: v-drag
 * @Author: superDragon
 * @Date: 2019-09-29 22:35:20
 * @LastEditors: superDragon
 * @LastEditTime: 2019-11-19 17:51:11
 */
const vDrag = {
  bind: (el, binding, node) => {
    // 绑定默认样式
    el.style.zIndex = 9
    el.style.position = 'absolute'
    el.style.top = binding.value.top + 'px'
    el.style.left = binding.value.left + 'px'
    // 如果为编辑状态
    if (binding.value || binding.value === undefined) {
      // 定义该元素的 top left width height
      let x; let y; let w; let h
      // 鼠标的起始和结束坐标
      let cxstart = null
      let cystart = null
      let cxend = null
      let cyend = null
      // 判断鼠标样式
      el.onmousemove = e => {
        // 获取鼠标当前位置
        let cxnow = e.clientX
        let cynow = e.clientY
        // 获取div右下角相对浏览器的位置
        let {
          top: eltop,
          left: elleft,
          width: elwidth,
          height: elheight
        } = el.getBoundingClientRect()
        let elbottomheight = eltop + elheight
        let elrightwidth = elleft + elwidth
        // 判断鼠标是否在div下边界
        let mouseinbottom =
          cynow <= elbottomheight + 5 && cynow >= elbottomheight - 5
        // 判断鼠标是否在div右边界
        let mouseinright =
          cxnow <= elrightwidth + 5 && cxnow >= elrightwidth - 5
        if (mouseinbottom && mouseinright) {
          el.style.cursor = 'se-resize'
        } else if (mouseinright) {
          el.style.cursor = 'e-resize'
        } else if (mouseinbottom) {
          el.style.cursor = 's-resize'
        } else {
          el.style.cursor = 'move'
        }
      }
      el.onmousedown = e => {
        let mouse = el.style.cursor
        // 更改默认样式
        el.style.backgroundColor = 'rgba(0,0,0,.1)'
        el.style.zIndex = 99
        // 对象解构赋值
        let { left: elx, top: ely, width: elw, height: elh } = window.getComputedStyle(el)
        x = elx
        y = ely
        w = elw
        h = elh
        cxstart = e.clientX
        cystart = e.clientY
        // 绑定移动事件
        document.onmousemove = e => {
          cxend = e.clientX
          cyend = e.clientY
          // 默认左下方向配置
          let xmove = cxend - cxstart
          let ymove = cyend - cystart
          let direct = ['width', 'height']
          let pos = [w, h]
          let move = [xmove, ymove]
          let limit = 50
          // 判断鼠标的类型进行对应的操作
          switch (mouse) {
            case 'e-resize':
              direct = ['width']
              pos = [w]
              move = [xmove]
              break
            case 's-resize':
              direct = ['height']
              pos = [h]
              move = [ymove]
              break
            case 'move':
              direct = ['left', 'top']
              pos = [x, y]
              limit = 0
              break
          }
          let position = {
            left: node.elm.parentNode.clientWidth - binding.value.width,
            top: node.elm.parentNode.clientHeight - binding.value.height
          }
          handlediv(direct, pos, move, limit, position)
        }
        // 取消移动事件
        document.onmouseup = e => {
          // 还原默认样式
          el.style.zIndex = 9
          el.style.backgroundColor = ''
          document.onmousemove = null
        }
        /**
         * 操作DOM位置和大小方法
         * @param direct 方向
         * @param pos 尺寸/坐标
         * @param move 拖动距离
         * @param limit 限定范围
         */
        function handlediv (direct, pos, move, limit, position) {
          for (let i = 0; i < direct.length; i++) {
            let val = parseInt(pos[i]) + move[i]
            if (val <= limit) {
              val = limit
            } else if (val >= position[direct[i]]) {
              val = position[direct[i]]
            }
            binding.value && (binding.value[direct[i]] = val)
            el.style[direct[i]] = val + 'px'
          }
        }
      }
    } else {
      el.style.cursor = 'default'
      // 移除点击事件
      el.onmousedown = null
      el.onmousemove = null
    }
  },
  update: (el, binding, node) => {
    if (binding.value.disabled) {
      el.style.cursor = 'default'
      // 移除点击事件
      el.onmousedown = null
      el.onmousemove = null
    }
  }
}
export default vDrag
