(window.webpackJsonp=window.webpackJsonp||[]).push([[197],{816:function(t,s,a){"use strict";a.r(s);var n=a(30),e=Object(n.a)({},(function(){var t=this,s=t._self._c;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h2",{attrs:{id:"_1、hook是什么"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_1、hook是什么"}},[t._v("#")]),t._v(" 1、HOOk是什么?")]),t._v(" "),s("p",[s("code",[t._v("Hook")]),t._v(" 是一些可以让你在函数组件里“钩入” "),s("code",[t._v("React state")]),t._v(" 及生命周期等特性的函数。它不能在 "),s("code",[t._v("class")]),t._v(" 组件中使用。\n"),s("code",[t._v("Hook")]),t._v("是特殊的函数，可以让我们在不编写 "),s("code",[t._v("class")]),t._v(" 的情况下使用 "),s("code",[t._v("state")]),t._v(" 以及其他的 "),s("code",[t._v("React")]),t._v(" 特性。")]),t._v(" "),s("h2",{attrs:{id:"_2、hook的优点"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_2、hook的优点"}},[t._v("#")]),t._v(" 2、Hook的优点")]),t._v(" "),s("ul",[s("li",[s("code",[t._v("Hook")]),t._v(" 可以使我们在无需改变组件结构的情况下"),s("strong",[t._v("复用状态逻辑")]),t._v("。可以使用 "),s("code",[t._v("hook")]),t._v(" 在组件中提取状态逻辑，使得这些逻辑可以单独测试并复用。")]),t._v(" "),s("li",[s("code",[t._v("Hook")]),t._v(" 将组件中相互关联的部分拆分成更小的函数(比如订阅或请求数据),而并非强制按照生命周期划分。使得组件变得易于理解。")]),t._v(" "),s("li",[s("code",[t._v("Hook")]),t._v(" 使得我们在非 "),s("code",[t._v("class")]),t._v(" 的情况下可以使用更多的 "),s("code",[t._v("React")]),t._v(" 特性。（class不能很好的被压缩，而且会使热重载出现不稳定的情况）。")]),t._v(" "),s("li",[s("code",[t._v("Hook")]),t._v("和现有代码可以同时工作，你可以渐进式的使用他们。（"),s("code",[t._v("Hook")]),t._v(" 是向下兼容的）。")]),t._v(" "),s("li",[s("code",[t._v("Hook")]),t._v(" 是一种复用状态逻辑的方式，它不复用 "),s("code",[t._v("state")]),t._v(" 本身。事实上 "),s("code",[t._v("Hook")]),t._v(" 的每次调用都有一个完全独立的 "),s("code",[t._v("state")]),t._v(" —— 因此你可以在单个组件中多次调用同一个自定义 "),s("code",[t._v("Hook")]),t._v("。")])]),t._v(" "),s("h2",{attrs:{id:"_3、hook使用规则"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_3、hook使用规则"}},[t._v("#")]),t._v(" 3、Hook使用规则")]),t._v(" "),s("ul",[s("li",[t._v("只能在函数最外层调用 "),s("code",[t._v("Hook")]),t._v("。不要在循环、条件判断或者子函数中调用。\n遵守这条规则，你就能确保 "),s("code",[t._v("Hook")]),t._v(" 在"),s("strong",[t._v("每一次渲染中都按照同样的顺序被调用")]),t._v("。")]),t._v(" "),s("li",[t._v("只能在 "),s("code",[t._v("React")]),t._v(" 的函数组件中调用 "),s("code",[t._v("Hook")]),t._v("。\n"),s("ul",[s("li",[t._v("不要在其他 JavaScript 函数中调用。")]),t._v(" "),s("li",[t._v("可以在自定义的 "),s("code",[t._v("Hook")]),t._v(" 中 调用其他 "),s("code",[t._v("Hook")]),t._v(")")])])]),t._v(" "),s("li",[t._v("自定义  "),s("code",[t._v("Hook")]),t._v(" 以 "),s("code",[t._v("use")]),t._v(" 开头。是一个函数,函数内部可以调用其他的 "),s("code",[t._v("Hook")]),t._v("。\n如果自定义 "),s("code",[t._v("Hook")]),t._v(" 不遵循以 "),s("code",[t._v("use")]),t._v(" 开头的话，由于无法判断某个函数是否包含对其内部 "),s("code",[t._v("Hook")]),t._v("的调用,"),s("code",[t._v("React")]),t._v(" 将无法自动检查你的 "),s("code",[t._v("Hook")]),t._v(" 是否违反了 "),s("code",[t._v("Hook")]),t._v(" 的规则。")])]),t._v(" "),s("h2",{attrs:{id:"_3、常用-hook-介绍"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_3、常用-hook-介绍"}},[t._v("#")]),t._v(" 3、常用 Hook 介绍")]),t._v(" "),s("h4",{attrs:{id:"_1、usestate"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_1、usestate"}},[t._v("#")]),t._v(" 1、useState")]),t._v(" "),s("p",[s("code",[t._v("useState")]),t._v(" 会返回一对值：当前状态("),s("code",[t._v("state")]),t._v(")和一个让你更新它的函数，你可以在事件处理函数中或其他一些地方调用这个函数。这里的 "),s("code",[t._v("state")]),t._v(" 不一定要是一个对象，同时这个初始 "),s("code",[t._v("state")]),t._v(" 参数只在第一次渲染时会被用到。可以在一个组件中多次使用 "),s("code",[t._v("useState")]),t._v("。")]),t._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" React"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" useState "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'react'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("Example")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 声明一个叫 “count” 的 state 变量。")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("count"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" setCount"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("useState")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("fruit"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" setFruit"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("useState")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'banana'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("div"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("p"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("You clicked "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("count"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" times"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("p"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("button onClick"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("setCount")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("count "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n        Click me\n      "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("button"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("div"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),s("h4",{attrs:{id:"_2、useeffect"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_2、useeffect"}},[t._v("#")]),t._v(" 2、useEffect")]),t._v(" "),s("p",[t._v("在 "),s("code",[t._v("React")]),t._v(" 组件中执行过"),s("strong",[t._v("数据获取、订阅或者手动修改过 "),s("code",[t._v("DOM")])]),t._v("。我们统一把这些操作称为"),s("strong",[t._v("副作用")]),t._v("，或者简称为“作用”。\n"),s("code",[t._v("useEffect")]),t._v(" 就是一个 "),s("code",[t._v("Effect Hook")]),t._v("，给函数组件增加了操作副作用的能力。它跟 "),s("code",[t._v("class")]),t._v(" 组件中的 "),s("code",[t._v("componentDidMount")]),t._v("、"),s("code",[t._v("componentDidUpdate")]),t._v(" 和 "),s("code",[t._v("componentWillUnmount")]),t._v("具有相同的用途，只不过被合并成了一个 "),s("code",[t._v("API")]),t._v("。默认情况下，"),s("code",[t._v("React")]),t._v(" 会在每次渲染后调用副作用函数 —— 包括第一次渲染的时候。跟 "),s("code",[t._v("useState")]),t._v(" 一样，你可以在组件中多次使用 "),s("code",[t._v("useEffect")]),t._v(" 。")]),t._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" React"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" useState"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" useEffect "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'react'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("Example")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("count"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" setCount"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("useState")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 相当于 componentDidMount 和 componentDidUpdate:")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("useEffect")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 使用浏览器的 API 更新页面标题")]),t._v("\n    document"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("title "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token template-string"}},[s("span",{pre:!0,attrs:{class:"token template-punctuation string"}},[t._v("`")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("You clicked ")]),s("span",{pre:!0,attrs:{class:"token interpolation"}},[s("span",{pre:!0,attrs:{class:"token interpolation-punctuation punctuation"}},[t._v("${")]),t._v("count"),s("span",{pre:!0,attrs:{class:"token interpolation-punctuation punctuation"}},[t._v("}")])]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v(" times")]),s("span",{pre:!0,attrs:{class:"token template-punctuation string"}},[t._v("`")])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("div"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("p"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("You clicked "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("count"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" times"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("p"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("button onClick"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("setCount")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("count "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n        Click me\n      "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("button"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("div"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),s("p",[t._v("但我们"),s("strong",[t._v("订阅外部数据源时")]),t._v(",这时候的副作用使需要清除的。")]),t._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("ignore"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("dispatch"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("useReducer")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("useEffect")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function-variable function"}},[t._v("unsubscrite")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("dispatch")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("unsubscrite")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),s("p",[t._v("可以给 "),s("code",[t._v("useEffect")]),t._v("设置第二个参数,参数类型是数组,只有当第二个参数变化时，才会执行第一个参数里面的内容。")]),t._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[t._v("useEffect")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 使用浏览器的 API 更新页面标题")]),t._v("\n    document"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("title "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token template-string"}},[s("span",{pre:!0,attrs:{class:"token template-punctuation string"}},[t._v("`")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("You clicked ")]),s("span",{pre:!0,attrs:{class:"token interpolation"}},[s("span",{pre:!0,attrs:{class:"token interpolation-punctuation punctuation"}},[t._v("${")]),t._v("count"),s("span",{pre:!0,attrs:{class:"token interpolation-punctuation punctuation"}},[t._v("}")])]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v(" times")]),s("span",{pre:!0,attrs:{class:"token template-punctuation string"}},[t._v("`")])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("count"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),s("h4",{attrs:{id:"_3、usecontext"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_3、usecontext"}},[t._v("#")]),t._v(" 3、useContext")]),t._v(" "),s("p",[t._v("接收一个 "),s("code",[t._v("context")]),t._v(" 对象（"),s("code",[t._v("React.createContext")]),t._v(" 的返回值）并返回该 "),s("code",[t._v("context")]),t._v(" 的当前值。"),s("strong",[t._v("当前的 "),s("code",[t._v("context")]),t._v(" 值由上层组件中距离当前组件最近的 "),s("code",[t._v("<MyContext.Provider>")])]),t._v(" 的 "),s("code",[t._v("value prop")]),t._v(" 决定。调用了 "),s("code",[t._v("useContext")]),t._v(" 的组件总会在 "),s("code",[t._v("context")]),t._v(" 值变化时重新渲染。")]),t._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" value "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("useContext")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("MyContext"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),s("p",[s("strong",[t._v("注意：")])]),t._v(" "),s("ul",[s("li",[s("code",[t._v("useContext(MyContext)")]),t._v(" 相当于 "),s("code",[t._v("class")]),t._v(" 组件中的 "),s("code",[t._v("static contextType = MyContext")]),t._v(" 或者 "),s("code",[t._v("<MyContext.Consumer>")]),t._v("。")]),t._v(" "),s("li",[t._v("需要在上层组件树中使用 "),s("code",[t._v("<MyContext.Provider>")]),t._v(" 来为下层组件提供 "),s("code",[t._v("context")]),t._v("。")])]),t._v(" "),s("h4",{attrs:{id:"_4、uselayouteffect"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_4、uselayouteffect"}},[t._v("#")]),t._v(" 4、useLayoutEffect")]),t._v(" "),s("h4",{attrs:{id:"_5、usereducer"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_5、usereducer"}},[t._v("#")]),t._v(" 5、useReducer")]),t._v(" "),s("p",[s("code",[t._v("useState")]),t._v(" 的替代方案。它接收一个形如 "),s("code",[t._v("(state, action) => newState")]),t._v(" 的 "),s("code",[t._v("reducer")]),t._v("，并返回当前的 "),s("code",[t._v("state")]),t._v(" 以及与其配套的 "),s("code",[t._v("dispatch")]),t._v(" 方法。")]),t._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("state"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" dispatch"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("useReducer")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("reducer"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" initialState"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//内部实现")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("useReducer")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("reducer"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" initialState")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("state"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" setState"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("useState")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("initialState"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("dispatch")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("action")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" nextState "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("reducer")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("state"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" action"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("setState")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("nextState"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("state"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" dispatch"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),s("p",[s("strong",[t._v("初始化的两种方式")])]),t._v(" "),s("ul",[s("li",[t._v("指定初始 "),s("code",[t._v("state")])])]),t._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("state"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" dispatch"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("useReducer")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("\n  reducer"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),s("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("count")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" initialCount"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),s("ul",[s("li",[t._v("惰性初始化\n初始 "),s("code",[t._v("state")]),t._v(" 将被设置为 "),s("code",[t._v("init(initialArg)")]),t._v("。")])]),t._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("state"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" dispatch"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("useReducer")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("reducer"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" initialCount"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" init"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("init")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("initialCount")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),s("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("count")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" initialCount"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),s("h4",{attrs:{id:"_6、usecallback"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_6、usecallback"}},[t._v("#")]),t._v(" 6、useCallBack")]),t._v(" "),s("p",[t._v("把内联回调函数及依赖项数组作为参数传入 "),s("code",[t._v("useCallback")]),t._v("，它将返回该回调函数的 "),s("code",[t._v("memoized")]),t._v(" 版本，该回调函数仅在某个依赖项改变时才会更新。"),s("code",[t._v("useCallback(fn, deps)")]),t._v(" 相当于 "),s("code",[t._v("useMemo(() => fn, deps)")]),t._v("。\n"),s("strong",[t._v("注意:")]),t._v(" 依赖项数组不会作为参数传给回调函数。")]),t._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" memoizedCallback "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("useCallback")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("doSomething")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("a"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" b"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("a"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" b"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),s("h4",{attrs:{id:"_7、usememo"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_7、usememo"}},[t._v("#")]),t._v(" 7、useMemo")]),t._v(" "),s("p",[t._v("把“创建”函数和依赖项数组作为参数传入 "),s("code",[t._v("useMemo")]),t._v("，它仅会在某个依赖项改变时才重新计算 "),s("code",[t._v("memoized")]),t._v(" 值。不要在这个函数内部执行与渲染无关的操作，诸如副作用这类的操作。\n**注意：**依赖项数组不会作为参数传给“创建”函数。如果没有提供依赖项数组，"),s("code",[t._v("useMemo")]),t._v(" 在每次渲染时都会计算新的值。")]),t._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" memoizedValue "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("useMemo")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("computeExpensiveValue")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("a"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" b"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("a"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" b"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),s("h4",{attrs:{id:"_8、useref"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_8、useref"}},[t._v("#")]),t._v(" 8、useRef")]),t._v(" "),s("p",[s("code",[t._v("useRef")]),t._v(" 返回一个可变的 "),s("code",[t._v("ref")]),t._v(" 对象，其 "),s("code",[t._v(".current")]),t._v(" 属性被初始化为传入的参数（"),s("code",[t._v("initialValue")]),t._v("）。"),s("code",[t._v("useRef")]),t._v(" 会在每次渲染时返回同一个 "),s("code",[t._v("ref")]),t._v(" 对象。")]),t._v(" "),s("p",[s("strong",[t._v("注意：")]),t._v(" 当 "),s("code",[t._v("ref")]),t._v(" 对象内容发生变化时，"),s("code",[t._v("useRef")]),t._v(" 并不会通知你。变更 "),s("code",[t._v(".current")]),t._v("属性不会引发组件重新渲染。如果想要在 "),s("code",[t._v("React")]),t._v(" 绑定或解绑 "),s("code",[t._v("DOM")]),t._v("节点的 "),s("code",[t._v("ref")]),t._v(" 时运行某些代码，则需要使用回调 "),s("code",[t._v("ref")]),t._v(" 来实现。")]),t._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" refContainer "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("useRef")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("initialValue"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),s("h4",{attrs:{id:"_9、uselayouteffect"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_9、uselayouteffect"}},[t._v("#")]),t._v(" 9、useLayoutEffect")]),t._v(" "),s("p",[t._v("它会在所有的 "),s("code",[t._v("DOM")]),t._v(" 变更之后同步调用 "),s("code",[t._v("effect")]),t._v("。可以使用它来读取 "),s("code",[t._v("DOM")]),t._v(" 布局并同步触发重渲染。在浏览器执行绘制之前，"),s("code",[t._v("useLayoutEffect")]),t._v(" 内部的更新计划将被同步刷新。")])])}),[],!1,null,null,null);s.default=e.exports}}]);