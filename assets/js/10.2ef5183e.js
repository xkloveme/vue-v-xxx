(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{241:function(n,u,e){"use strict";e.r(u);var t={name:"v-debounce",data:function(){return{num:0,num2:0}},methods:{addNum:function(){this.num++},addNum2:function(){this.num2++}}},a=e(1),d=Object(a.a)(t,(function(){var n=this,u=n.$createElement,e=n._self._c||u;return e("div",{staticClass:"v-xxx"},[e("h1",[n._v("未加防抖")]),e("h2",[n._v("点击次数:"+n._s(n.num))]),e("Button",{on:{click:n.addNum}},[n._v("(点我)")]),e("h1",[n._v("加入防抖")]),e("h2",[n._v("点击次数:"+n._s(n.num2))]),e("Button",{directives:[{name:"debounce",rawName:"v-debounce",value:n.addNum2,expression:"addNum2"}]},[n._v("(点我)")])],1)}),[],!1,null,null,null);u.default=d.exports}}]);