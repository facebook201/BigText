(window.webpackJsonp=window.webpackJsonp||[]).push([[55],{448:function(t,s,a){t.exports=a.p+"assets/img/w3c标准盒模型.c9daa6ec.png"},449:function(t,s,a){t.exports=a.p+"assets/img/ie标准盒模型.be981681.png"},710:function(t,s,a){"use strict";a.r(s);var e=a(30),o=Object(e.a)({},(function(){var t=this,s=t._self._c;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("div",{staticClass:"language-html extra-class"},[s("pre",{pre:!0,attrs:{class:"language-html"}},[s("code")])]),s("p",[t._v("  共分为2种类型：W3C标准盒模型（默认） 和 IE标准盒模型（怪异盒模型）。"),s("code",[t._v("CSS")]),t._v("盒子模式包括如下属性：外边距（"),s("code",[t._v("margin")]),t._v("）、边框（"),s("code",[t._v("border")]),t._v("）、内边距（"),s("code",[t._v("padding")]),t._v("）、内容（"),s("code",[t._v("content")]),t._v("）\n"),s("strong",[t._v("css3中有一个新属性对应着盒模型。box-sizing: content-box|border-box|inherit;")])]),t._v(" "),s("blockquote",[s("p",[s("code",[t._v("css3")]),t._v("属性"),s("code",[t._v("box-sizing")]),t._v("的"),s("code",[t._v("content-box")]),t._v("属性对应着"),s("code",[t._v("W3C")]),t._v("标准盒模型；"),s("br"),t._v(" "),s("code",[t._v("css3")]),t._v("属性"),s("code",[t._v("box-sizing")]),t._v("的"),s("code",[t._v("border-box")]),t._v("(宽、高包括"),s("code",[t._v("border")]),t._v(")属性对应着IE标准盒模型；")])]),t._v(" "),s("blockquote",[s("p",[s("strong",[t._v("1、W3C标准盒模型-content-box:")]),t._v(" （默认）\n在W3C标准下,我们定义的元素的"),s("code",[t._v("width")]),t._v("值即为盒模型中的"),s("code",[t._v("content")]),t._v("的宽度值，"),s("code",[t._v("style")]),t._v("中定义的"),s("code",[t._v("height")]),t._v("即为盒模型中的"),s("code",[t._v("content")]),t._v("的高度值。\n"),s("img",{attrs:{src:a(448)}})])]),t._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[t._v("元素的宽 "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("width")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("content的宽"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" padding"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("left "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" padding"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("right "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" border"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("left "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" border"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("right\n\n元素的高 "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("height")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("content的高"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" padding"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("top "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" padding"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("bottom "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" border"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("top "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" border"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("bottom\n")])])]),s("blockquote",[s("p",[s("strong",[t._v("2、IE标准盒模型-border-box")])])]),t._v(" "),s("img",{attrs:{src:a(449),alt:"暂无数据"}}),t._v(" "),s("div",{staticClass:"language-css extra-class"},[s("pre",{pre:!0,attrs:{class:"language-css"}},[s("code",[t._v("元素的宽"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("style中定义的width"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" = "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("width")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("padding-left + padding-right + border-left + border-right+content的宽"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n元素的高"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("style中定义的height"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" = "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("height")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("padding-top + padding-bottom + border-top + border-bottom+content的高"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])])])}),[],!1,null,null,null);s.default=o.exports}}]);