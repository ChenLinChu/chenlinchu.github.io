(window.webpackJsonp=window.webpackJsonp||[]).push([[28],{481:function(t,a,n){"use strict";n.r(a);var s=n(8),e=Object(s.a)({},(function(){var t=this,a=t.$createElement,n=t._self._c||a;return n("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[n("p",[t._v("關鍵影格動畫。")]),t._v(" "),n("p",[t._v("以下將會一步一步將動畫設定的順序寫出來。")]),t._v(" "),n("h2",{attrs:{id:"_1-keyframe"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_1-keyframe"}},[t._v("#")]),t._v(" 1. "),n("code",[t._v("@keyframe")])]),t._v(" "),n("p",[t._v("首先我們要先設定整個動畫進行的流程。")]),t._v(" "),n("div",{staticClass:"language-css extra-class"},[n("pre",{pre:!0,attrs:{class:"language-css"}},[n("code",[n("span",{pre:!0,attrs:{class:"token atrule"}},[n("span",{pre:!0,attrs:{class:"token rule"}},[t._v("@keyframes")]),t._v(" test")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),n("span",{pre:!0,attrs:{class:"token selector"}},[t._v("from")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token property"}},[t._v("border-radius")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 10%"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n  "),n("span",{pre:!0,attrs:{class:"token selector"}},[t._v("to")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token property"}},[t._v("border-radius")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 50%"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),n("p",[t._v("整個動畫會以一個"),n("code",[t._v("@keyframe")]),t._v("包裹住，接著裡面用"),n("code",[t._v("from")]),t._v("、"),n("code",[t._v("to")]),t._v("代表著整段動畫的開頭到結尾，中間的影格將會由程式自動演算出來。")]),t._v(" "),n("p",[t._v("另外我們如果要制訂更細的動畫展現方式，也可以用"),n("code",[t._v("0%-100%")]),t._v("的撰寫模式，範例如下：")]),t._v(" "),n("div",{staticClass:"language-css extra-class"},[n("pre",{pre:!0,attrs:{class:"language-css"}},[n("code",[n("span",{pre:!0,attrs:{class:"token atrule"}},[n("span",{pre:!0,attrs:{class:"token rule"}},[t._v("@keyframes")]),t._v(" test")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),n("span",{pre:!0,attrs:{class:"token selector"}},[t._v("0%")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token property"}},[t._v("border-radius")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 10%"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n  "),n("span",{pre:!0,attrs:{class:"token selector"}},[t._v("25%")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token property"}},[t._v("border-radius")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 25%"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n  "),n("span",{pre:!0,attrs:{class:"token selector"}},[t._v("50%")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token property"}},[t._v("border-radius")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 50%"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),n("h2",{attrs:{id:"_2-animation屬性"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_2-animation屬性"}},[t._v("#")]),t._v(" 2. "),n("code",[t._v("animation")]),t._v("屬性")]),t._v(" "),n("p",[t._v("設定好動畫後，接著我們就要將動畫套用在元素上，並為它添加上各種不同的屬性，以下的屬性也可囊括在一個"),n("code",[t._v("animation")]),t._v("屬性內。")]),t._v(" "),n("blockquote",[n("p",[n("code",[t._v("animation: name duration delay iteration-count timing-function direction fill-mode;")])])]),t._v(" "),n("ul",[n("li",[n("code",[t._v("animation-name")]),t._v("：動畫名稱。")]),t._v(" "),n("li",[n("code",[t._v("animation-duration")]),t._v("：動畫時間，"),n("strong",[t._v("預設值為 0")]),t._v("，單位是 s 或 ms。")]),t._v(" "),n("li",[n("code",[t._v("animation-delay")]),t._v("：動畫延遲播放時間，"),n("strong",[t._v("預設值為 0")]),t._v("，單位是 s 或 ms。")]),t._v(" "),n("li",[n("code",[t._v("animation-iteration-count")]),t._v("：動畫播放次數，"),n("strong",[t._v("預設值為 1")]),t._v("。")]),t._v(" "),n("li",[n("code",[t._v("animation-timing-function")]),t._v("：動畫加速度函式，"),n("strong",[t._v("預設值為 ease")]),t._v("。")]),t._v(" "),n("li",[n("code",[t._v("animation-direction")]),t._v("：動畫播放方向，"),n("strong",[t._v("預設值為 normal")]),t._v("。")]),t._v(" "),n("li",[n("code",[t._v("animation-fill-mode")]),t._v("：動畫播放前後，"),n("strong",[t._v("預設值為 none")]),t._v("。")]),t._v(" "),n("li",[n("code",[t._v("animation-play-state")]),t._v("：動畫播放或暫停狀態，"),n("strong",[t._v("預設值為 running")]),t._v("。")])]),t._v(" "),n("h3",{attrs:{id:"animation-name："}},[n("a",{staticClass:"header-anchor",attrs:{href:"#animation-name："}},[t._v("#")]),t._v(" "),n("code",[t._v("animation-name")]),t._v("：")]),t._v(" "),n("p",[t._v("以下兩種方式皆可代表動畫名稱。")]),t._v(" "),n("div",{staticClass:"language-css extra-class"},[n("pre",{pre:!0,attrs:{class:"language-css"}},[n("code",[n("span",{pre:!0,attrs:{class:"token atrule"}},[n("span",{pre:!0,attrs:{class:"token rule"}},[t._v("@keyframes")]),t._v(" test")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  ..."),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token atrule"}},[n("span",{pre:!0,attrs:{class:"token rule"}},[t._v("@keyframes")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"test"')])]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  ..."),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),n("h3",{attrs:{id:"animation-duration："}},[n("a",{staticClass:"header-anchor",attrs:{href:"#animation-duration："}},[t._v("#")]),t._v(" "),n("code",[t._v("animation-duration")]),t._v("：")]),t._v(" "),n("p",[t._v("因動畫的"),n("strong",[t._v("預設值為 0")]),t._v("，故此屬性未設定的情況，動畫將不會進行播放。")]),t._v(" "),n("h3",{attrs:{id:"animation-delay："}},[n("a",{staticClass:"header-anchor",attrs:{href:"#animation-delay："}},[t._v("#")]),t._v(" "),n("code",[t._v("animation-delay")]),t._v("：")]),t._v(" "),n("p",[t._v("可設定正值或負值，如設定的為負值，將會像"),n("strong",[t._v("快轉")]),t._v("的方式，從指定秒數的影格開始播放動畫。")]),t._v(" "),n("h3",{attrs:{id:"animation-iteration-count："}},[n("a",{staticClass:"header-anchor",attrs:{href:"#animation-iteration-count："}},[t._v("#")]),t._v(" "),n("code",[t._v("animation-iteration-count")]),t._v("：")]),t._v(" "),n("p",[t._v("播放次數可設定為"),n("code",[t._v("infinite")]),t._v("，讓動畫無限次播放。")]),t._v(" "),n("h3",{attrs:{id:"animation-timing-function："}},[n("a",{staticClass:"header-anchor",attrs:{href:"#animation-timing-function："}},[t._v("#")]),t._v(" "),n("code",[t._v("animation-timing-function")]),t._v("：")]),t._v(" "),n("p",[t._v("有許多種加速度函式，能讓動畫表現得更加順暢。")]),t._v(" "),n("ul",[n("li",[n("code",[t._v("linear")]),t._v("：沒有加減速，動畫會呈現線性播放。")]),t._v(" "),n("li",[n("code",[t._v("ease")]),t._v("、"),n("code",[t._v("ease-in")]),t._v("、"),n("code",[t._v("ease-out")]),t._v("、"),n("code",[t._v("ease-in-out")]),t._v("：分別會在不同區段加減速。")]),t._v(" "),n("li",[n("code",[t._v("step-start")]),t._v("、"),n("code",[t._v("step-end")]),t._v("：將不會有中間演算的影格，會按照順序逐格播放。")]),t._v(" "),n("li",[n("code",[t._v("steps(int, start || end)")]),t._v("：隨著"),n("code",[t._v("int")]),t._v("的值越大，演算的影格也會越多。")]),t._v(" "),n("li",[n("code",[t._v("cubic=bezier(0, 0, 0, 0)")]),t._v("：貝茲曲線。")])]),t._v(" "),n("h3",{attrs:{id:"animation-direction："}},[n("a",{staticClass:"header-anchor",attrs:{href:"#animation-direction："}},[t._v("#")]),t._v(" "),n("code",[t._v("animation-direction")]),t._v("：")]),t._v(" "),n("p",[t._v("調整動畫播放的方向順序，以下以"),n("code",[t._v("0%")]),t._v("、"),n("code",[t._v("50%")]),t._v("、"),n("code",[t._v("100%")]),t._v("為例。")]),t._v(" "),n("ul",[n("li",[n("code",[t._v("normal")]),t._v("：正常播放，預設值，"),n("code",[t._v("0%")]),t._v("到"),n("code",[t._v("100%")]),t._v("。")]),t._v(" "),n("li",[n("code",[t._v("reverse")]),t._v("：反向播放，"),n("code",[t._v("100%")]),t._v("到"),n("code",[t._v("0%")]),t._v("。")]),t._v(" "),n("li",[n("code",[t._v("alternate")]),t._v("：正常與反向輪流播放，先是"),n("code",[t._v("0%")]),t._v("到"),n("code",[t._v("100%")]),t._v("，接著"),n("code",[t._v("100%")]),t._v("到"),n("code",[t._v("0%")]),t._v("，接著"),n("code",[t._v("0%")]),t._v("到"),n("code",[t._v("100%")]),t._v("，以此類推，如播放次數只設定一次，即為"),n("code",[t._v("0%")]),t._v("到"),n("code",[t._v("100%")]),t._v("。")]),t._v(" "),n("li",[n("code",[t._v("alternate-reverse")]),t._v("："),n("code",[t._v("alternate")]),t._v("的相反，先是"),n("code",[t._v("100%")]),t._v("到"),n("code",[t._v("0%")]),t._v("，接著"),n("code",[t._v("0%")]),t._v("到"),n("code",[t._v("100%")]),t._v("，接著"),n("code",[t._v("100%")]),t._v("到"),n("code",[t._v("0%")]),t._v("，以此類推，如播放次數只設定一次，即為"),n("code",[t._v("100%")]),t._v("到"),n("code",[t._v("0%")]),t._v("。")])]),t._v(" "),n("h3",{attrs:{id:"animation-fill-mode："}},[n("a",{staticClass:"header-anchor",attrs:{href:"#animation-fill-mode："}},[t._v("#")]),t._v(" "),n("code",[t._v("animation-fill-mode")]),t._v("：")]),t._v(" "),n("ul",[n("li",[n("code",[t._v("none")]),t._v("：預設值，結束後返回"),n("strong",[t._v("原始狀態")]),t._v("。")]),t._v(" "),n("li",[n("code",[t._v("forwards")]),t._v("：動畫結束後，保持在最後一個影格的狀態。")]),t._v(" "),n("li",[n("code",[t._v("backwards")]),t._v("：動畫結束後，保持在第一個影格的狀態。")]),t._v(" "),n("li",[n("code",[t._v("both")]),t._v("：依據動畫的次數或播放方向，保持在第一個影格或最後一個影格狀態，相當實用。")])]),t._v(" "),n("h3",{attrs:{id:"animation-play-state："}},[n("a",{staticClass:"header-anchor",attrs:{href:"#animation-play-state："}},[t._v("#")]),t._v(" "),n("code",[t._v("animation-play-state")]),t._v("：")]),t._v(" "),n("p",[t._v("透過下述兩個特性，可以輕易實現游標移動到區塊才進行動畫的效果。")]),t._v(" "),n("ul",[n("li",[n("code",[t._v("running")]),t._v("：預設值，動畫運行。")]),t._v(" "),n("li",[n("code",[t._v("paused")]),t._v("：動畫暫停。")])])])}),[],!1,null,null,null);a.default=e.exports}}]);