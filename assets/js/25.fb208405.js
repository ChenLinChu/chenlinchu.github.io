(window.webpackJsonp=window.webpackJsonp||[]).push([[25],{478:function(t,a,r){"use strict";r.r(a);var s=r(8),e=Object(s.a)({},(function(){var t=this,a=t.$createElement,r=t._self._c||a;return r("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[r("p",[t._v("網格佈局。")]),t._v(" "),r("p",[t._v("Grid 是常見的排版方式之一，是在 Flex 之後出來的，Flex 是針對單一方向的排版，而 Grid 則是針對雙向進行排版。")]),t._v(" "),r("p",[t._v("本文將逐步解析，分為以下兩大部分：")]),t._v(" "),r("blockquote",[r("p",[t._v("外容器屬性：")])]),t._v(" "),r("ol",[r("li",[r("p",[r("code",[t._v("display")])]),t._v(" "),r("ul",[r("li",[r("code",[t._v("grid")])]),t._v(" "),r("li",[r("code",[t._v("inline-grid")])])])]),t._v(" "),r("li",[r("p",[r("code",[t._v("grid-template-columns || grid-template-rows")])])]),t._v(" "),r("li",[r("p",[r("code",[t._v("grid-auto-columns || grid-auto-rows")])])]),t._v(" "),r("li",[r("p",[r("code",[t._v("grid-template-areas")])])]),t._v(" "),r("li",[r("p",[r("code",[t._v("grid-auto-flow")])])]),t._v(" "),r("li",[r("p",[r("code",[t._v("grid-gap || grid-column-gap || grid-row-gap")])])])]),t._v(" "),r("blockquote",[r("p",[t._v("內元件屬性：")])]),t._v(" "),r("ol",[r("li",[r("code",[t._v("grid-column-start || grid-row-start")])]),t._v(" "),r("li",[r("code",[t._v("grid-column-end || grid-row-end")])]),t._v(" "),r("li",[r("code",[t._v("grid-column || grid-row")])]),t._v(" "),r("li",[r("code",[t._v("grid-area")])])]),t._v(" "),r("h2",{attrs:{id:"外容器屬性："}},[r("a",{staticClass:"header-anchor",attrs:{href:"#外容器屬性："}},[t._v("#")]),t._v(" 外容器屬性：")]),t._v(" "),r("ol",[r("li",[r("p",[r("code",[t._v("display")]),t._v("："),r("code",[t._v("grid")]),t._v("與"),r("code",[t._v("inline-grid")]),t._v("差別在於兩個 grid container 之間需不需要換行。")])]),t._v(" "),r("li",[r("p",[r("code",[t._v("grid-template-columns || grid-template-rows")]),t._v("：定義行 || 列的數量。")]),t._v(" "),r("div",{staticClass:"language-css extra-class"},[r("pre",{pre:!0,attrs:{class:"language-css"}},[r("code",[r("span",{pre:!0,attrs:{class:"token selector"}},[t._v(".container")]),t._v(" "),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),r("span",{pre:!0,attrs:{class:"token property"}},[t._v("display")]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" grid"),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),r("span",{pre:!0,attrs:{class:"token property"}},[t._v("grid-template-columns")]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 1fr 1fr 1fr"),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" //此容器共有3行\n  "),r("span",{pre:!0,attrs:{class:"token property"}},[t._v("grid-template-rows")]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 1fr 1fr"),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" //此容器共有2列\n"),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])])]),t._v(" "),r("li",[r("p",[r("code",[t._v("grid-auto-columns || grid-auto-rows")]),t._v("：定義行高 || 列高。")])]),t._v(" "),r("li",[r("p",[r("code",[t._v("grid-template-areas")]),t._v("：分配所有網格的空間，需配合內元件的命名使用。")]),t._v(" "),r("div",{staticClass:"language-css extra-class"},[r("pre",{pre:!0,attrs:{class:"language-css"}},[r("code",[r("span",{pre:!0,attrs:{class:"token selector"}},[t._v(".container")]),t._v(" "),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),r("span",{pre:!0,attrs:{class:"token property"}},[t._v("display")]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" grid"),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),r("span",{pre:!0,attrs:{class:"token property"}},[t._v("grid-template-columns")]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 1fr 1fr 1fr"),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),r("span",{pre:!0,attrs:{class:"token property"}},[t._v("grid-template-rows")]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 1fr 1fr 1fr"),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),r("span",{pre:!0,attrs:{class:"token property"}},[t._v("grid-template-areas")]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n    "),r("span",{pre:!0,attrs:{class:"token string"}},[t._v("'header header header'")]),t._v("\n    "),r("span",{pre:!0,attrs:{class:"token string"}},[t._v("'main main sidebar'")]),t._v("\n    "),r("span",{pre:!0,attrs:{class:"token string"}},[t._v("'footer footer sidebar'")]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])])]),t._v(" "),r("li",[r("p",[r("code",[t._v("grid-auto-flow")]),t._v("：定義行 || 列的排列方式。")])]),t._v(" "),r("li",[r("p",[r("code",[t._v("grid-gap || grid-column-gap || grid-row-gap")]),t._v("：定義行 || 列的間隔寬度。")])])]),t._v(" "),r("h2",{attrs:{id:"內元件屬性："}},[r("a",{staticClass:"header-anchor",attrs:{href:"#內元件屬性："}},[t._v("#")]),t._v(" 內元件屬性：")]),t._v(" "),r("ol",[r("li",[r("code",[t._v("grid-column-start || grid-row-start")]),t._v("：定義每個元件起始於第幾行 || 列的線。")]),t._v(" "),r("li",[r("code",[t._v("grid-column-end || grid-row-end")]),t._v("：定義每個元件結束於第幾行 || 列的線。")]),t._v(" "),r("li",[r("code",[t._v("grid-column || grid-row")]),t._v("：1.與 2.的融合，起始與結束的屬性值以 / 號區隔。")]),t._v(" "),r("li",[r("code",[t._v("grid-area")]),t._v("：定義對應外容器"),r("code",[t._v("grid-template-areas")]),t._v("的名稱。")])])])}),[],!1,null,null,null);a.default=e.exports}}]);