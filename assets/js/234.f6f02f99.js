(window.webpackJsonp=window.webpackJsonp||[]).push([[234],{861:function(t,s,a){"use strict";a.r(s);var r=a(30),n=Object(r.a)({},(function(){var t=this,s=t._self._c;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h3",{attrs:{id:"_1、什么叫虚拟dom"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_1、什么叫虚拟dom"}},[t._v("#")]),t._v(" 1、什么叫虚拟dom？")]),t._v(" "),s("p",[s("code",[t._v("virtral Dom")]),t._v("就是将真实Dom的数据抽象处理，以"),s("strong",[t._v("对象的形式模拟树形结构")]),t._v("。虚拟DOM本质上是JavaScript对象,是对真实DOM的抽象。状态变更时，记录新树和旧树的差异（"),s("code",[t._v("diff算法")]),t._v("），最后把差异更新到真正的dom中（"),s("code",[t._v("patch算法")]),t._v("）。")]),t._v(" "),s("div",{staticClass:"language-javascript extra-class"},[s("pre",{pre:!0,attrs:{class:"language-javascript"}},[s("code",[t._v("    "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//真实dom")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("div"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("span"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("测试"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("span"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("div"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//虚拟dom 伪代码 Vnode和oldVnode都是对象")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" Vnode "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("tag")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'div'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("children")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n            "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("tag")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'span'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("text")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'测试'")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),s("p",[s("strong",[t._v("虚拟dom的优点")])]),t._v(" "),s("ul",[s("li",[t._v("1、保证性能下限。虚拟dom通过diff找出最小差异，然后批量进行patch，这种操作比起粗暴的直接操作dom，性能要好上很多。")]),t._v(" "),s("li",[t._v("2、无须直接操作dom，可以极大的提升开发效率。")]),t._v(" "),s("li",[t._v("3、跨平台。如服务端渲染，移动端开发。")])]),t._v(" "),s("p",[s("strong",[t._v("缺点:")])]),t._v(" "),s("ul",[s("li",[t._v("无法进行极致优化： 虽然虚拟 DOM + 合理的优化，足以应对绝大部分应用的性能需求，但在一些性能要求极高的应用中虚拟 DOM 无法进行针对性的极致优化。")])]),t._v(" "),s("h3",{attrs:{id:"_2、diff算法-差分算法"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_2、diff算法-差分算法"}},[t._v("#")]),t._v(" 2、diff算法（差分算法）")]),t._v(" "),s("p",[t._v("  采用diff算法比较新旧节点时，只会在同层级进行，不会跨层级比较。")])])}),[],!1,null,null,null);s.default=n.exports}}]);