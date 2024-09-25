(window.webpackJsonp=window.webpackJsonp||[]).push([[111],{712:function(t,s,a){"use strict";a.r(s);var n=a(30),r=Object(n.a)({},(function(){var t=this,s=t._self._c;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("blockquote",[s("p",[s("strong",[t._v("attribute：")]),t._v(" 是dom元素"),s("strong",[t._v("在文档中作为html标签")]),t._v("拥有的属性，如"),s("code",[t._v("id,class,src,title,alt")]),t._v("等标签属性，也可以自定义属性，通过 "),s("code",[t._v("dom.setAttribute('class', 'a')")]),t._v(" 来设置属性，通过"),s("code",[t._v("dom.getAttribute('class', 'a')")]),t._v(" 来获取属性；")])]),t._v(" "),s("blockquote",[s("p",[s("strong",[t._v("property:")]),t._v(" 就是dom元素"),s("strong",[t._v("在js中作为对象")]),t._v("拥有的属性。 赋值 "),s("code",[t._v("dom.className = 'a'")]),t._v(" ;取值 "),s("code",[t._v("dom.className")]),t._v(";")])]),t._v(" "),s("p",[s("strong",[t._v("区别：")])]),t._v(" "),s("blockquote",[s("p",[s("strong",[t._v("相同：")]),t._v(" 对于"),s("strong",[t._v("html的标准属性")]),t._v("来说，"),s("code",[t._v("attribute")]),t._v(" 和 "),s("code",[t._v("property")]),t._v(" 是同步的，是会自动更新的。"),s("br"),t._v(" "),s("strong",[t._v("不同:")]),t._v(" 但是对于"),s("strong",[t._v("自定义的属性")]),t._v("来说，他们是不同步的。")])]),t._v(" "),s("p",[t._v("请看下面例子。")]),t._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("div id"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"test"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("测试数据"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("div"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("button id"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"add"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("添加属性"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("button"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("button id"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"delete"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("删除属性"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("button"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\nwindow"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function-variable function"}},[t._v("onload")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" dom"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("document"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("getElementById")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"test"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" addBtn"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("document"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("getElementById")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"add"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" delBtn"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("document"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("getElementById")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"delete"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    addBtn"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function-variable function"}},[t._v("onclick")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        dom"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("setAttribute")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"class"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"name"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n       dom"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("setAttribute")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"test"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"name"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    delBtn"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function-variable function"}},[t._v("onclick")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        dom"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("className"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('""')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        dom"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("test"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('""')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\t  \t\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),s("p",[s("strong",[t._v("操作标准属性")]),t._v("(没添加属性之前————>添加属性之后————>删除属性之后)"),s("strong",[t._v("修改成功")]),t._v(" 。\n"),s("strong",[t._v("className")]),t._v("已经成空了。")]),t._v(" "),s("img",{staticStyle:{"padding-right":"'20px'"},attrs:{width:"30%",height:"200px",src:"https://user-gold-cdn.xitu.io/2019/4/9/16a02756ce8afb5e?w=473&h=603&f=png&s=43486"}}),t._v(" "),s("img",{staticStyle:{"padding-right":"'20px'"},attrs:{width:"30%",height:"200px",src:"https://user-gold-cdn.xitu.io/2019/4/9/16a02779437c1e72?w=556&h=613&f=png&s=50412"}}),t._v(" "),s("img",{staticStyle:{"padding-right":"'20px'"},attrs:{width:"30%",height:"200px",src:"https://user-gold-cdn.xitu.io/2019/4/9/16a0279f4dd1190f?w=468&h=602&f=png&s=47860"}}),t._v(" "),s("p",[s("strong",[t._v("操作自定义属性")]),t._v("(没添加属性之前————>添加属性之后————>删除属性之后) "),s("strong",[t._v("没修改成功")]),t._v(" 。\n"),s("code",[t._v("test")]),t._v(" 自定义属性还存在。")]),t._v(" "),s("img",{staticStyle:{"padding-right":"'20px'"},attrs:{width:"30%",height:"200px",src:"https://user-gold-cdn.xitu.io/2019/4/9/16a02756ce8afb5e?w=473&h=603&f=png&s=43486"}}),t._v(" "),s("img",{staticStyle:{"padding-right":"'20px'"},attrs:{width:"30%",height:"200px",src:"https://user-gold-cdn.xitu.io/2019/4/9/16a027fc139b82cb?w=474&h=608&f=png&s=49236"}}),t._v(" "),s("img",{staticStyle:{"padding-right":"'20px'"},attrs:{width:"30%",height:"200px",src:"https://user-gold-cdn.xitu.io/2019/4/9/16a027f3002bb5e9?w=469&h=602&f=png&s=48871"}})])}),[],!1,null,null,null);s.default=r.exports}}]);