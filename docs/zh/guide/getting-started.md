# 安装及使用

<a href='https://github.com/heyongsheng/hevue-img-preview'><img src='https://img.shields.io/github/stars/heyongsheng?style=social' alt='star'></img></a>
<a href='https://github.com/heyongsheng/hevue-img-preview'><img alt="GitHub forks" src="https://img.shields.io/github/forks/heyongsheng/hevue-img-preview?style=social"></img></a> 
<a href='https://gitee.com/ihope_top/hevue-img-preview/stargazers'><img src='https://gitee.com/ihope_top/hevue-img-preview/badge/star.svg?theme=dark' alt='star'></img></a> 
<a href='https://www.npmjs.com/package/hevue-img-preview'><img src='https://img.shields.io/npm/dm/hevue-img-preview.svg' alt='downloads'></img></a>
<a href='https://gitee.com/ihope_top/hevue-img-preview/stargazers'><img alt="GitHub release (latest by date)" src="https://img.shields.io/github/v/release/heyongsheng/hevue-img-preview"></a>
<a href='https://www.npmjs.com/package/hevue-img-preview'><img src='https://img.shields.io/badge/License-MIT-green' alt='downloads'></img></a>


::: tip 简介
本组件是一个基于 vue 编写的 vue 图片预览组件，支持 pc 和手机端，支持单图和多图预览，仅传入一个图片地址，即可实现图片预览效果。手机端支持单指拖拽和双指缩放。页面各组件颜色均可可自定义，实现个性化设计，如果能帮上你，希望可以移步 [GitHub](https://github.com/heyongsheng/hevue-img-preview) ，或者[码云](https://gitee.com/ihope_top/hevue-img-preview) 给个小星星，如果有任何使用意见或建议，也欢迎回复或者提交 issure
:::

## 兼容性

本插件在Chrome浏览器环境下开发，对于其他浏览器兼容性没有测试，如项目对于浏览器兼容性有较高要求，建议谨慎使用。

## 安装

::: warning
为了避免打包重复依赖造成的体积过大，本插件采用了直接发布源码的方式进行发布，所以您的项目必须安装的有Vue，否则本插件无法运行。同时由于此原因，您也可以更便捷的对源码进行修改，对功能、样式等进行更好的自定义，您只需要在项目的根目录下，进入 `node_modules/hevue-img-preview` 文件夹，即可对插件的源码进行查看和修改。
:::

使用npm进行安装
``` bash
npm install hevue-img-preview
```

## 使用

在main.js进行全局引入
```javascript
import hevueImgPreview from 'hevue-img-preview'
Vue.use(hevueImgPreview)
```

在组件中进行使用
```html
<img :src="url" @click="previewImg(url)">
```
```javascript
methods: {
	previewImg (url) {
		this.$hevueImgPreview(url)
	}
}
```
## 示例
点击下面这张图片试试看吧

<template>
  <img src="/img/img-1.jpg" @click="showImg('/img/img-1.jpg')">
</template>

::: details 点击查看代码
```html
<template>
  <img src="/img/img-1.jpg" @click="showImg('/img/img-1.jpg')">
</template>
```
```javascript {5}
<script>
export default {
  methods: {
    showImg(url) {
      this.$hevueImgPreview(url)
    }
  }
}
</script>
```
:::

::: tip
本插件用函数调用的方法触发，所以您可以给任何元素添加事件来显示图片，如图片、文字、按钮等，您也可以在任何事件中调用本插件，如页面加载事件、点击事件等。
:::


<script>
export default {
  methods: {
    showImg(url) {
      this.$hevueImgPreview(url)
    }
  }
}
</script>
