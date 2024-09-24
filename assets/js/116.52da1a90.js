(window.webpackJsonp=window.webpackJsonp||[]).push([[116],{717:function(t,s,n){"use strict";n.r(s);var a=n(30),e=Object(a.a)({},(function(){var t=this,s=t._self._c;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("p",[s("code",[t._v("DOM(Document Object Model)")]),t._v(" 文档对象模型。提供系列的属性和方法，让我们可以在"),s("code",[t._v("js")]),t._v("中操作页面中的元素。")]),t._v(" "),s("h4",{attrs:{id:"_1、获取dom元素的属性和方法"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_1、获取dom元素的属性和方法"}},[t._v("#")]),t._v(" 1、获取dom元素的属性和方法")]),t._v(" "),s("ul",[s("li",[s("p",[s("code",[t._v("document.getElementById(id)")])])]),t._v(" "),s("li",[s("p",[s("code",[t._v("[context].getElementByTagName(tagname)")])])]),t._v(" "),s("li",[s("p",[s("code",[t._v("[context].getElementByClassName(classname)")]),t._v(" 在"),s("code",[t._v("IE6-8")]),t._v("下不兼容。")])]),t._v(" "),s("li",[s("p",[s("code",[t._v("document.getElementByName(name)")]),t._v(" 在"),s("code",[t._v("IE")]),t._v("浏览器中只对表单元素的"),s("code",[t._v("name")]),t._v("有作用")])]),t._v(" "),s("li",[s("p",[s("code",[t._v("[context].querySelector(selector)")]),t._v(" 在"),s("code",[t._v("IE6-8")]),t._v("下不兼容")])]),t._v(" "),s("li",[s("p",[s("code",[t._v("[context].querySelectorAll(selector)")]),t._v("在"),s("code",[t._v("IE6-8")]),t._v("下不兼容")])]),t._v(" "),s("li",[s("p",[s("code",[t._v("document.documentElement")]),t._v(" =>"),s("code",[t._v("html")]),t._v("元素")])]),t._v(" "),s("li",[s("p",[s("code",[t._v("document.head")])])]),t._v(" "),s("li",[s("p",[s("code",[t._v("document.body")])])]),t._v(" "),s("li",[s("p",[s("code",[t._v("childNodes")]),t._v(" 获取所有子节点")])]),t._v(" "),s("li",[s("p",[s("code",[t._v("children")]),t._v(" 获取所欲元素子节点 =>"),s("code",[t._v("IE6-8")]),t._v("中会把注释节点当做元素节点获取")])]),t._v(" "),s("li",[s("p",[s("code",[t._v("parentNode")])])]),t._v(" "),s("li",[s("p",[s("code",[t._v("firstChild")]),t._v("/"),s("code",[t._v("firstElementChild")])])]),t._v(" "),s("li",[s("p",[s("code",[t._v("lastChild")]),t._v("/"),s("code",[t._v("lastElemntChild")])])]),t._v(" "),s("li",[s("p",[s("code",[t._v("previousSibling")]),t._v("/"),s("code",[t._v("previousElementSibling")]),t._v(" "),s("code",[t._v("nextSibling")]),t._v("/"),s("code",[t._v("nextElementSibling")]),t._v("\n//=>所有带"),s("code",[t._v("Element")]),t._v("的在"),s("code",[t._v("IE6-8")]),t._v("下都不兼容")])])]),t._v(" "),s("h4",{attrs:{id:"_2、dom的增删改查"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_2、dom的增删改查"}},[t._v("#")]),t._v(" 2、DOM的增删改查")]),t._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[t._v("document"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("createElement")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("tagname"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\ndocument"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("createTextNode")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("text content"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\ninnerHTML"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("innerText \n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("parent"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("appendChild")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("newELe"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("parent"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("insertBefore")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("newEle"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("ele"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("ele"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("cloneNode")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("true")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),s("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("false")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("parent"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("removeChild")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("ele"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//设置自定义属性(property)")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("ele"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("xx"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("xxx"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//删除自定义属性")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("delete")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("ele"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("xx\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//设置元素属性")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("ele"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("setAttribute")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"xxx"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"xxx"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("ele"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("getAttribute")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"xxx"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("ele"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("removeAttribute")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"xxx"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),s("h4",{attrs:{id:"_3、获取元素样式和操作样式"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_3、获取元素样式和操作样式"}},[t._v("#")]),t._v(" 3、获取元素样式和操作样式")]),t._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//=>修改元素样式")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("ele"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("style"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("xxx"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("xxx"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//修改或者设置行内样式")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("ele"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("className"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("xxx"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//=>获取元素的样式")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("ele"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("style"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("xxx\n")])])])])}),[],!1,null,null,null);s.default=e.exports}}]);