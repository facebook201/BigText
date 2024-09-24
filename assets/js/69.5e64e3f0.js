(window.webpackJsonp=window.webpackJsonp||[]).push([[69],{411:function(_,v,t){_.exports=t.p+"assets/img/perspective.bdfde8ca.png"},597:function(_,v,t){_.exports=t.p+"assets/img/透视投影推导过程.4a2a8dbe.png"},899:function(_,v,t){"use strict";t.r(v);var r=t(30),a=Object(r.a)({},(function(){var _=this,v=_._self._c;return v("ContentSlotsDistributor",{attrs:{"slot-key":_.$parent.slotKey}},[v("h2",{attrs:{id:"_1-三维透视投影的定义"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_1-三维透视投影的定义"}},[_._v("#")]),_._v(" 1.三维透视投影的定义")]),_._v(" "),v("p",[_._v("透视投影的最终目的是将三维点投影到二维平面上，并通过 "),v("strong",[_._v("透视除法（透视校正）")]),_._v(" 来模拟人眼的视觉效果。我们通过构建一个透视投影矩阵，将三维坐标系中的点变换到裁剪坐标系，然后通过透视除法得到标准化设备坐标（"),v("code",[_._v("NDC")]),_._v("）。")]),_._v(" "),v("p",[_._v("正射投影看到的物体都是按照近大远小的规则来呈现的。与模型跟观察者的距离有直接的关系。\n这种近大远小的效果就赋予了模型深度感，或者称之为"),v("strong",[_._v("透视感")]),_._v("。")]),_._v(" "),v("p",[v("strong",[_._v("透视投影，可视范围是一个棱锥体盒子，下面是透视投影的可视范围的示意图。")]),_._v(" "),v("img",{attrs:{src:t(411)}})]),_._v(" "),v("h2",{attrs:{id:"_2-视锥体的定义"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_2-视锥体的定义"}},[_._v("#")]),_._v(" 2.视锥体的定义")]),_._v(" "),v("p",[v("strong",[_._v("透视投影，可视范围是一个视锥体")]),_._v("，定义视锥体时会用到以下参数：")]),_._v(" "),v("ul",[v("li",[_._v("视角"),v("code",[_._v("（Field of View, FOV")]),_._v("）：垂直视角的角度。")]),_._v(" "),v("li",[_._v("宽高比"),v("code",[_._v("（AspectRatio）")]),_._v("：视口的宽高比 "),v("code",[_._v("width/height")]),_._v("。")]),_._v(" "),v("li",[_._v("近平面"),v("code",[_._v("（Near Plane, n")]),_._v("：距离相机最近的平面"),v("code",[_._v("z-near")]),_._v("。")]),_._v(" "),v("li",[_._v("远平面"),v("code",[_._v("（Far Plane, f")]),_._v("：距离相机最远的平面 "),v("code",[_._v("z-far")]),_._v("。")])]),_._v(" "),v("h2",{attrs:{id:"_3推导步骤"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_3推导步骤"}},[_._v("#")]),_._v(" 3推导步骤")]),_._v(" "),v("h4",{attrs:{id:"_3-1定义视角参数"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_3-1定义视角参数"}},[_._v("#")]),_._v(" 3.1定义视角参数")]),_._v(" "),v("p",[_._v("视角参数包括视角 "),v("code",[_._v("（FOV）")]),_._v("、宽高比"),v("code",[_._v("（aspectRatio")]),_._v("）、近平面"),v("code",[_._v("n")]),_._v("和远平面"),v("code",[_._v("f")]),_._v("。")]),_._v(" "),v("ul",[v("li",[v("code",[_._v("θ")]),_._v(" 为视角的一半，即 "),v("code",[_._v("θ = FOV/2")])]),_._v(" "),v("li",[v("code",[_._v("t = n * tan(θ)")]),_._v(" 为近平面的高度的一半 "),v("code",[_._v("height/2")])]),_._v(" "),v("li",[v("code",[_._v("r = t*aspectRatio = n * tan(θ) * aspectRatio")]),_._v(" 为近平面的宽度的一半 "),v("code",[_._v("wight/2")])])]),_._v(" "),v("h4",{attrs:{id:"_3-2-透视投影矩阵的推导"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_3-2-透视投影矩阵的推导"}},[_._v("#")]),_._v(" 3.2 透视投影矩阵的推导")]),_._v(" "),v("p",[_._v("透视投影矩阵的推导包括将三维点映射到二维平面上，并进行"),v("strong",[_._v("透视除法")]),_._v("以实现透视效果。")]),_._v(" "),v("p",[_._v("接下来我们将推导一下"),v("strong",[_._v("透视投影")]),_._v("的矩阵是如何得到的。")]),_._v(" "),v("p",[_._v("假设模型中有一个点"),v("code",[_._v("p(x,y,z)")]),_._v("表示像素坐标,投影到近平面后的坐标为"),v("code",[_._v("p'(x',y',z')")]),_._v("，表示投影坐标。\n首先我们需要找出 "),v("code",[_._v("p")]),_._v("和 "),v("code",[_._v("p'")]),_._v("之间的关系。"),v("code",[_._v("p")]),_._v("和"),v("code",[_._v("p'")]),_._v("之间的关系可以用如下矩阵来表示。")]),_._v(" "),v("img",{attrs:{src:t(597)}}),_._v(" "),v("p",[_._v("上面的矩阵运算后可以得到下面的计算结果。")]),_._v(" "),v("div",{staticClass:"language-js extra-class"},[v("pre",{pre:!0,attrs:{class:"language-js"}},[v("code",[_._v("x' "),v("span",{pre:!0,attrs:{class:"token operator"}},[_._v("=")]),_._v(" ax "),v("span",{pre:!0,attrs:{class:"token operator"}},[_._v("+")]),_._v(" by "),v("span",{pre:!0,attrs:{class:"token operator"}},[_._v("+")]),_._v(" cz "),v("span",{pre:!0,attrs:{class:"token operator"}},[_._v("+")]),_._v(" d\ny' "),v("span",{pre:!0,attrs:{class:"token operator"}},[_._v("=")]),_._v(" ex "),v("span",{pre:!0,attrs:{class:"token operator"}},[_._v("+")]),_._v(" fy "),v("span",{pre:!0,attrs:{class:"token operator"}},[_._v("+")]),_._v(" gz "),v("span",{pre:!0,attrs:{class:"token operator"}},[_._v("+")]),_._v(" h\nz' "),v("span",{pre:!0,attrs:{class:"token operator"}},[_._v("=")]),_._v(" ix "),v("span",{pre:!0,attrs:{class:"token operator"}},[_._v("+")]),_._v(" jy "),v("span",{pre:!0,attrs:{class:"token operator"}},[_._v("+")]),_._v(" kz "),v("span",{pre:!0,attrs:{class:"token operator"}},[_._v("+")]),_._v(" l\nw' "),v("span",{pre:!0,attrs:{class:"token operator"}},[_._v("=")]),_._v(" mx "),v("span",{pre:!0,attrs:{class:"token operator"}},[_._v("+")]),_._v(" ny "),v("span",{pre:!0,attrs:{class:"token operator"}},[_._v("+")]),_._v(" oz "),v("span",{pre:!0,attrs:{class:"token operator"}},[_._v("+")]),_._v(" p \n")])])]),v("p",[_._v("根据上面的透视投影的示意图，我们根据相似三角形原理，可以得到如下公式。")]),_._v(" "),v("h4",{attrs:{id:"_1-x轴"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_1-x轴"}},[_._v("#")]),_._v(" 1. "),v("strong",[_._v("x轴")])]),_._v(" "),v("p",[_._v("假设一个点在相机坐标系中的位置为"),v("code",[_._v("(x,y,z)")]),_._v("，它在近平面上的投影点为 ($x_{proj}$ ,$x_{proj}$,n) 。\n根据相似三角形可以得到下面的计算公式。")]),_._v(" "),v("p",[_._v("$$\n\\frac{x_{proj}}{x} = \\frac{n}{z} \\Rightarrow x_{proj} = \\frac{n}{z} x\n$$")]),_._v(" "),v("p",[_._v("然后将 $x_{proj}$ 映射到标准化设备坐标"),v("code",[_._v("（NDC）")]),_._v("中的 "),v("code",[_._v("[-1, 1]")]),_._v(" 范围。为此，我们需要将 "),v("code",[_._v("x")]),_._v("  坐标从 "),v("code",[_._v("[-r, r]")]),_._v(" 映射到 "),v("code",[_._v("[-1, 1]")]),_._v("。")]),_._v(" "),v("p",[_._v("$$\nx_{ndc} = \\frac{x_{proj}}{r} = \\frac{\\frac{n}{z} x}{r} = \\frac{n x}{r z}\n$$")]),_._v(" "),v("p",[_._v("由于 "),v("code",[_._v("r = t*aspectRatio = n * tan(θ) * aspectRatio")]),_._v("，我们可以进一步简化：")]),_._v(" "),v("p",[_._v("$$\nx_{ndc} = \\frac{n x}{n \\cdot \\tan(\\theta) \\cdot \\text{aspectRatio} \\cdot z} = \\frac{x}{\\tan(\\theta) \\cdot \\text{aspectRatio} \\cdot z}\n$$")]),_._v(" "),v("p",[v("strong",[_._v("注意：")]),_._v(" 在透视投影矩阵中, 上面得到的这个计算过程是通过"),v("strong",[_._v("透视投影矩阵")]),_._v("的乘法和"),v("strong",[_._v("透视除法")]),_._v("实现的。同时说明 $x_{ndc}$ 的大小 跟"),v("code",[_._v("z")]),_._v("轴坐标的大小成反比。")]),_._v(" "),v("h4",{attrs:{id:"_2-y轴映射"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_2-y轴映射"}},[_._v("#")]),_._v(" 2. "),v("strong",[_._v("y轴映射")])]),_._v(" "),v("p",[_._v("我们需要将 "),v("code",[_._v("y")]),_._v(" 坐标从 "),v("code",[_._v("[−t,t]")]),_._v(" 映射到 "),v("code",[_._v("[−1,1]")]),_._v("。\n类似地，我们考虑在近平面上的投影点 ($x_{proj}$ ,$x_{proj}$,n) 。根据相似三角形原理：\n$$\n\\frac{y_{proj}}{y} = \\frac{n}{z} \\Rightarrow y_{proj} = \\frac{n}{z} y\n$$\n然后将 $y_{proj}$ 映射到标准化设备坐标"),v("code",[_._v("（NDC）")]),_._v("中的 "),v("code",[_._v("[-1, 1]")]),_._v(" 范围。为此，我们需要将 "),v("code",[_._v("x")]),_._v("  坐标从 "),v("code",[_._v("[-t, t]")]),_._v(" 映射到 "),v("code",[_._v("[-1, 1]")]),_._v("。\n$$\ny_{ndc} = \\frac{y_{proj}}{t} = \\frac{\\frac{n}{z} y}{r} = \\frac{n y}{t z}\n$$")]),_._v(" "),v("p",[_._v("由于 "),v("code",[_._v("t=n*tan(θ)")]),_._v("，我们可以进一步简化：\n$$\ny_{ndc} = \\frac{n y}{n \\cdot tan(\\theta) \\cdot z}\n= \\frac{y}{tan(\\theta) \\cdot z}\n$$")]),_._v(" "),v("p",[v("strong",[_._v("注意：")]),_._v(" 在透视投影矩阵中, 上面得到的这个计算过程是通过"),v("strong",[_._v("透视投影矩阵")]),_._v("的乘法和"),v("strong",[_._v("透视除法")]),_._v("实现的。同时说明 $y_{ndc}$ 的大小 跟"),v("code",[_._v("z")]),_._v("轴坐标的大小成反比。")]),_._v(" "),v("h4",{attrs:{id:"_3-z轴映射"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_3-z轴映射"}},[_._v("#")]),_._v(" 3. "),v("strong",[_._v("z轴映射")])]),_._v(" "),v("p",[_._v("我们需要将 "),v("code",[_._v("z")]),_._v(" 坐标从 "),v("code",[_._v("[n,f]")]),_._v(" 映射到 "),v("code",[_._v("[-1,1]")]),_._v("。对于 "),v("code",[_._v("z")]),_._v(" 轴映射，我们希望在近平面和远平面之间进行线性变换。\n线性变换的标准公式为：\n$$\nz_{proj} = A \\cdot z + B\n$$\n我们通过透视除法将齐次坐标转换到标准化设备坐标,这里的"),v("code",[_._v("w")]),_._v("分量我们使用"),v("code",[_._v("-z")]),_._v("表示。：\n$$\nz_{ndc} = \\frac{z_{proj}}{w} = \\frac{z_{proj}}{-z}\n= \\frac{A \\cdot z + B}{-z}\n= -A - \\frac{B}{z}\n$$\n我们希望满足以下条件：")]),_._v(" "),v("p",[_._v("$$\nz = n \\Rightarrow z_{ndc} = -1\n$$\n$$\nz = f \\Rightarrow z_{ndc} = 1\n$$")]),_._v(" "),v("p",[_._v("通过代入以上条件，我们可以得到两个方程：")]),_._v(" "),v("p",[_._v("$$\n-1 =  - A + \\frac{B}{n}\n$$")]),_._v(" "),v("p",[_._v("$$\n1 = - A + \\frac{B}{f}\n$$")]),_._v(" "),v("p",[_._v("解这组方程：")]),_._v(" "),v("p",[_._v("$$\n-A + \\frac{B}{n} = -1\n$$")]),_._v(" "),v("p",[_._v("$$\n-A + \\frac{B}{f} = 1\n$$")]),_._v(" "),v("p",[_._v("相减得到：")]),_._v(" "),v("p",[_._v("$$\n\\frac{B}{f} - \\frac{B}{n} = 2 \\Rightarrow B = \\frac{2fn}{n - f}\n$$")]),_._v(" "),v("p",[_._v("代入\n$$\n-1 =  - A + \\frac{B}{n}\\Rightarrow A = \\frac{B}{n} + 1\n= \\frac{\\frac{2fn}{n - f}}{n} + 1\n= \\frac{2f}{n-f} + 1\n= \\frac{f+n}{n-f}\n$$")]),_._v(" "),v("p",[_._v("因此，"),v("code",[_._v("z")]),_._v(" 轴的线性变换为：")]),_._v(" "),v("p",[_._v("$$\nz_{ndc} = -\\frac{f+n}{n-f} - \\frac{2fn}{n - f} \\cdot \\frac{1}{z}\n$$\n那么经过透视除法之前的裁剪坐标系中的坐标应该是\n$$\nz_{ndc}  \\cdot -z = \\frac{f+n}{n-f} \\cdot  + \\frac{2fn}{n - f}\n$$")]),_._v(" "),v("h4",{attrs:{id:"_4-透视投影矩阵的构建"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_4-透视投影矩阵的构建"}},[_._v("#")]),_._v(" 4.透视投影矩阵的构建")]),_._v(" "),v("p",[_._v("将上述公式整合到一个矩阵中，我们得到透视投影矩阵：")]),_._v(" "),v("p",[_._v("$$\n\\mathbf{P}_{perspective} = \\begin{bmatrix}\n\\frac{n}{r} & 0 & 0 & 0 \\\n0 & \\frac{n}{t} & 0 & 0 \\\n0 & 0 & -\\frac{f + n}{f - n} & -\\frac{2fn}{f - n} \\\n0 & 0 & -1 & 0\n\\end{bmatrix}\n$$")]),_._v(" "),v("p",[v("a",{attrs:{href:"https://github.com/tangjie-93/WebGL/blob/main/%E8%B7%9F%E7%9D%80%E5%AE%98%E7%BD%91%E5%AD%A6WebGL%2BWebGL%E7%BC%96%E7%A8%8B%E6%8C%87%E5%8D%97/%E6%8A%95%E5%BD%B1/demo/%E9%80%8F%E8%A7%86%E6%8A%95%E5%BD%B1.html",target:"_blank",rel:"noopener noreferrer"}},[_._v("透视投影demo地址"),v("OutboundLink")],1)]),_._v(" "),v("p",[v("strong",[_._v("参考文档")]),v("br"),_._v(" "),v("a",{attrs:{href:"https://webglfundamentals.org/webgl/lessons/zh_cn/webgl-3d-perspective.html",target:"_blank",rel:"noopener noreferrer"}},[_._v("WebGL 三维透视投影"),v("OutboundLink")],1),v("br"),_._v(" "),v("a",{attrs:{href:"https://juejin.cn/book/6844733755580481543/section/6844733755941191687",target:"_blank",rel:"noopener noreferrer"}},[_._v("透视投影"),v("OutboundLink")],1)]),_._v(" "),v("Valine")],1)}),[],!1,null,null,null);v.default=a.exports}}]);