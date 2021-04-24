(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{369:function(t,s,a){"use strict";a.r(s);var e={methods:{showImg:function(t){this.$hevueImgPreview(t)}}},r=a(26),n=Object(r.a)(e,(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"安装及使用"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#安装及使用"}},[t._v("#")]),t._v(" 安装及使用")]),t._v(" "),a("p",[a("a",{attrs:{href:"https://github.com/heyongsheng/hevue-img-preview"}},[a("img",{attrs:{src:"https://img.shields.io/github/stars/heyongsheng?style=social",alt:"star"}})]),t._v(" "),a("a",{attrs:{href:"https://github.com/heyongsheng/hevue-img-preview"}},[a("img",{attrs:{alt:"GitHub forks",src:"https://img.shields.io/github/forks/heyongsheng/hevue-img-preview?style=social"}})]),t._v(" "),a("a",{attrs:{href:"https://gitee.com/ihope_top/hevue-img-preview/stargazers"}},[a("img",{attrs:{src:"https://gitee.com/ihope_top/hevue-img-preview/badge/star.svg?theme=dark",alt:"star"}})]),t._v(" "),a("a",{attrs:{href:"https://www.npmjs.com/package/hevue-img-preview"}},[a("img",{attrs:{src:"https://img.shields.io/npm/dm/hevue-img-preview.svg",alt:"downloads"}})]),t._v(" "),a("a",{attrs:{href:"https://gitee.com/ihope_top/hevue-img-preview/stargazers"}},[a("img",{attrs:{alt:"GitHub release (latest by date)",src:"https://img.shields.io/github/v/release/heyongsheng/hevue-img-preview"}})]),t._v(" "),a("a",{attrs:{href:"https://www.npmjs.com/package/hevue-img-preview"}},[a("img",{attrs:{src:"https://img.shields.io/badge/License-MIT-green",alt:"downloads"}})])]),t._v(" "),a("div",{staticClass:"custom-block tip"},[a("p",{staticClass:"custom-block-title"},[t._v("简介")]),t._v(" "),a("p",[t._v("本组件是一个基于 vue 编写的 vue 图片预览组件，支持 pc 和手机端，支持单图和多图预览，仅传入一个图片地址，即可实现图片预览效果。手机端支持单指拖拽和双指缩放。页面各组件颜色均可可自定义，实现个性化设计，如果能帮上你，希望可以移步 "),a("a",{attrs:{href:"https://github.com/heyongsheng/hevue-img-preview",target:"_blank",rel:"noopener noreferrer"}},[t._v("GitHub"),a("OutboundLink")],1),t._v(" ，或者"),a("a",{attrs:{href:"https://gitee.com/ihope_top/hevue-img-preview",target:"_blank",rel:"noopener noreferrer"}},[t._v("码云"),a("OutboundLink")],1),t._v(" 给个小星星，如果有任何使用意见或建议，也欢迎回复或者提交 issure")])]),t._v(" "),a("h2",{attrs:{id:"兼容性"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#兼容性"}},[t._v("#")]),t._v(" 兼容性")]),t._v(" "),a("p",[t._v("本插件在Chrome浏览器环境下开发，对于其他浏览器兼容性没有测试，如项目对于浏览器兼容性有较高要求，建议谨慎使用。")]),t._v(" "),a("h2",{attrs:{id:"安装"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#安装"}},[t._v("#")]),t._v(" 安装")]),t._v(" "),a("div",{staticClass:"custom-block warning"},[a("p",{staticClass:"custom-block-title"},[t._v("注意")]),t._v(" "),a("p",[t._v("为了避免打包重复依赖造成的体积过大，本插件采用了直接发布源码的方式进行发布，所以您的项目必须安装的有Vue，否则本插件无法运行。同时由于此原因，您也可以更便捷的对源码进行修改，对功能、样式等进行更好的自定义，您只需要在项目的根目录下，进入 "),a("code",[t._v("node_modules/hevue-img-preview")]),t._v(" 文件夹，即可对插件的源码进行查看和修改。")])]),t._v(" "),a("p",[t._v("使用npm进行安装")]),t._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[t._v("npm")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("install")]),t._v(" hevue-img-preview\n")])])]),a("h2",{attrs:{id:"使用"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#使用"}},[t._v("#")]),t._v(" 使用")]),t._v(" "),a("p",[t._v("在main.js进行全局引入")]),t._v(" "),a("div",{staticClass:"language-javascript extra-class"},[a("pre",{pre:!0,attrs:{class:"language-javascript"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" hevueImgPreview "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'hevue-img-preview'")]),t._v("\nVue"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("use")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("hevueImgPreview"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),a("p",[t._v("在组件中进行使用")]),t._v(" "),a("div",{staticClass:"language-html extra-class"},[a("pre",{pre:!0,attrs:{class:"language-html"}},[a("code",[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("img")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v(":src")]),a("span",{pre:!0,attrs:{class:"token attr-value"}},[a("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("url"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),a("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("@click")]),a("span",{pre:!0,attrs:{class:"token attr-value"}},[a("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("previewImg(url)"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n")])])]),a("div",{staticClass:"language-javascript extra-class"},[a("pre",{pre:!0,attrs:{class:"language-javascript"}},[a("code",[t._v("methods"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\t"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("previewImg")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("url")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\t\t"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("$hevueImgPreview")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("url"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\t"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("h2",{attrs:{id:"示例"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#示例"}},[t._v("#")]),t._v(" 示例")]),t._v(" "),a("p",[t._v("点击下面这张图片试试看吧")]),t._v(" "),[a("img",{attrs:{src:"/img/img-1.jpg"},on:{click:function(s){return t.showImg("/img/img-1.jpg")}}})],t._v(" "),a("details",{staticClass:"custom-block details"},[a("summary",[t._v("点击查看代码")]),t._v(" "),a("div",{staticClass:"language-html extra-class"},[a("pre",{pre:!0,attrs:{class:"language-html"}},[a("code",[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("template")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("img")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("src")]),a("span",{pre:!0,attrs:{class:"token attr-value"}},[a("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("/img/img-1.jpg"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),a("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("@click")]),a("span",{pre:!0,attrs:{class:"token attr-value"}},[a("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("showImg("),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("'")]),t._v("/img/img-1.jpg"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("'")]),t._v(")"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("template")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n")])])]),a("div",{staticClass:"language-javascript extra-class"},[a("div",{staticClass:"highlight-lines"},[a("br"),a("br"),a("br"),a("br"),a("div",{staticClass:"highlighted"},[t._v(" ")]),a("br"),a("br"),a("br"),a("br"),a("br")]),a("pre",{pre:!0,attrs:{class:"language-javascript"}},[a("code",[a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("script"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("export")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("default")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  methods"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("showImg")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("url")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("$hevueImgPreview")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("url"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("script"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n")])])])]),t._v(" "),a("div",{staticClass:"custom-block tip"},[a("p",{staticClass:"custom-block-title"},[t._v("提示")]),t._v(" "),a("p",[t._v("本插件用函数调用的方法触发，所以您可以给任何元素添加事件来显示图片，如图片、文字、按钮等，您也可以在任何事件中调用本插件，如页面加载事件、点击事件等。")])])],2)}),[],!1,null,null,null);s.default=n.exports}}]);