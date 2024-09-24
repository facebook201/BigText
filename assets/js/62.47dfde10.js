(window.webpackJsonp=window.webpackJsonp||[]).push([[62],{504:function(v,_,e){v.exports=e.p+"assets/img/computed的初始化流程图.523241a7.jpg"},505:function(v,_,e){v.exports=e.p+"assets/img/watch的初始化流程.051f9096.jpg"},844:function(v,_,e){"use strict";e.r(_);var t=e(30),c=Object(t.a)({},(function(){var v=this,_=v._self._c;return _("ContentSlotsDistributor",{attrs:{"slot-key":v.$parent.slotKey}},[_("h2",{attrs:{id:"_1、computed"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#_1、computed"}},[v._v("#")]),v._v(" 1、computed")]),v._v(" "),_("ul",[_("li",[v._v("1、"),_("code",[v._v("computed")]),v._v(" 是计算属性,也就是计算值,它更多用于"),_("strong",[v._v("计算值的场景")]),v._v("。")]),v._v(" "),_("li",[v._v("2、"),_("code",[v._v("computed")]),v._v(" "),_("strong",[v._v("具有缓存性")]),v._v(","),_("code",[v._v("computed")]),v._v(" 的值在 "),_("code",[v._v("getter")]),v._v(" 执行后是会缓存的，只有在它依赖的属性值改变之后，下一次获取 "),_("code",[v._v("computed")]),v._v(" 的值时才会重新调用对应的 "),_("code",[v._v("getter")]),v._v(" 来计算。每当触发重新渲染时，"),_("code",[v._v("调用方法")]),v._v("将总会再次执行函数。如果计算属性依赖的值没有变化，计算属性会立即返回之前的计算结果，而不必再次执行函数。")]),v._v(" "),_("li",[v._v("3、"),_("code",[v._v("computed")]),v._v(" 适用于计算"),_("strong",[v._v("比较消耗性能")]),v._v("的计算场景。")])]),v._v(" "),_("h4",{attrs:{id:"computed-初始化时的流程图如下"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#computed-初始化时的流程图如下"}},[v._v("#")]),v._v(" "),_("code",[v._v("Computed")]),v._v(" 初始化时的流程图如下：")]),v._v(" "),_("img",{attrs:{src:e(504),alt:"暂无图片"}}),v._v(" "),_("p",[_("strong",[_("code",[v._v("computed")]),v._v(" 的源码解析如下：")])]),v._v(" "),_("ul",[_("li",[v._v("1、在 "),_("code",[v._v("computed")]),v._v(" 初始化的过程中会创建一个 "),_("code",[v._v("watcher")]),v._v(" 并设置"),_("code",[v._v("lazy=true")]),v._v(",所以在初始化时会求值，在页面中调用 "),_("code",[v._v("computed")]),v._v(" 时，开始求值，调用 "),_("code",[v._v("watcher.evaluate()")]),v._v("方法,并将 "),_("code",[v._v("dirty=false")]),v._v("。")]),v._v(" "),_("li",[v._v("2、当 "),_("code",[v._v("computed")]),v._v("依赖的属性发生改变时，会调用  "),_("code",[v._v("watcher.update()")]),v._v(" 方法，将"),_("code",[v._v("dirty=true")]),v._v("。")]),v._v(" "),_("li",[v._v("3、当在页面中再次获取该属性时，如果"),_("code",[v._v("dirty")]),v._v("为 "),_("code",[v._v("true")]),v._v(",调用 "),_("code",[v._v("watcher.evaluate()")]),v._v(" 方法，否则返回原来计算的值。这就是"),_("code",[v._v("computed")]),v._v(" 为什么具有缓存效果的原因。")])]),v._v(" "),_("h2",{attrs:{id:"_2、watch"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#_2、watch"}},[v._v("#")]),v._v(" 2、watch")]),v._v(" "),_("ul",[_("li",[v._v("1、更多的是"),_("strong",[v._v("观察")]),v._v("的作用,类似于某些数据的监听回调,用于观察 "),_("code",[v._v("props $emit")]),v._v(" 或者本组件的值,当数据变化时来执行回调进行后续操作。")]),v._v(" "),_("li",[v._v("2、"),_("strong",[v._v("无缓存性")]),v._v("，页面重新渲染时值不变化也会执行")]),v._v(" "),_("li",[v._v("3、当需要在数据变化时执行异步或开销较大的操作时，这个方式是最有用的。")]),v._v(" "),_("li",[v._v("4、当我们需要深度监听对象中的属性时，可以打开 "),_("code",[v._v("deep：true")]),v._v(" 选项，这样便会对对象中的每一项进行监听。这样会带来性能问题，优化的话可以使用字符串形式监听，如果没有写到组件中，不要忘记使用 "),_("code",[v._v("unWatch")]),v._v(" 手动注销哦。")]),v._v(" "),_("li",[v._v("5、语境上的差异"),_("br"),v._v(" "),_("code",[v._v("watch")]),v._v(" 适合一个值影响多个值的情形。"),_("code",[v._v("computed")]),v._v(" 适合多个值影响一个值的情形。")])]),v._v(" "),_("p",[_("strong",[_("code",[v._v("watch")]),v._v(" 初始化时的流程图如下")]),v._v("：\n"),_("img",{attrs:{src:e(505),alt:"暂无图片"}})]),v._v(" "),_("h4",{attrs:{id:"watch-的源码解析如下"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#watch-的源码解析如下"}},[v._v("#")]),v._v(" "),_("code",[v._v("watch")]),v._v(" 的源码解析如下：")]),v._v(" "),_("ul",[_("li",[v._v("在 "),_("code",[v._v("watch")]),v._v(" 初始化测过程中，会创建一个 "),_("code",[v._v("watcher")]),v._v(",并添加 "),_("code",[v._v("user")]),v._v(" 属性，证明这是一个用户添加的 "),_("code",[v._v("watcher")]),v._v("。")]),v._v(" "),_("li",[v._v("当用户为 "),_("code",[v._v("watch")]),v._v("添加"),_("code",[v._v("immediate")]),v._v("属性且值为"),_("code",[v._v("true")]),v._v("时，会立刻执行 "),_("code",[v._v("watch")]),v._v("里面定义的"),_("code",[v._v("handler")]),v._v("，在这里要"),_("strong",[v._v("注意")]),v._v("，如果监听的对象或属性是来自"),_("code",[v._v("props")]),v._v("，那么它的值是 "),_("code",[v._v("props")]),v._v("的默认值。")]),v._v(" "),_("li",[v._v("当用户为 "),_("code",[v._v("watch")]),v._v(" 添加 "),_("code",[v._v("deep")]),v._v(" 属性时，会调用 "),_("code",[v._v("traverse(value)")]),v._v(" 方法，这个方法本质上是递归监听的对象，在递归的过程中会取值触发 "),_("code",[v._v("getter")]),v._v("钩子，给对象中的属性添加依赖。属性依赖的 "),_("code",[v._v("watcher")]),v._v("，跟对象的 "),_("code",[v._v("watcher")]),v._v("是同一个，因此在对象的属性发生变化时，也会触发更新，调用"),_("code",[v._v("Watch")]),v._v("类的"),_("code",[v._v("run")]),v._v("方法,在"),_("code",[v._v("run中")]),v._v("执行 "),_("code",[v._v("this.cb.call(this.vm, value, oldValue)")]),v._v("，来调用"),_("code",[v._v("watch")]),v._v("中的"),_("code",[v._v("handler")]),v._v("。")])]),v._v(" "),_("p",[_("strong",[v._v("小结:")]),_("br"),v._v("\n当我们要进行数值计算,而且依赖于其他数据，那么把这个数据设计为 "),_("code",[v._v("computed")]),v._v("。"),_("br"),v._v("\n如果你需要在某个数据变化时做一些事情，使用 "),_("code",[v._v("watch")]),v._v("来观察这个数据变化。")])])}),[],!1,null,null,null);_.default=c.exports}}]);