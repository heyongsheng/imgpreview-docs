# 简介


<div class="img-inline-wrap" style='margin-top: 20px;'>
<a href='https://github.com/heyongsheng/hevue-img-preview'><img src='https://img.shields.io/github/stars/heyongsheng?style=social' alt='star'></img></a>
<!-- <a href='https://github.com/heyongsheng/hevue-img-preview'><img alt="GitHub forks" src="https://img.shields.io/github/forks/heyongsheng/hevue-img-preview?style=social"></img></a>  -->
<a href='https://gitee.com/ihope_top/hevue-img-preview/stargazers'><img src='https://gitee.com/ihope_top/hevue-img-preview/badge/star.svg?theme=dark' alt='star'></img></a> 
<a href='https://www.npmjs.com/package/hevue-img-preview'><img src='https://img.shields.io/npm/dm/hevue-img-preview.svg' alt='downloads'></img></a>
<a href='https://gitee.com/ihope_top/hevue-img-preview/stargazers'><img alt="GitHub release (latest by date)" src="https://img.shields.io/github/v/release/heyongsheng/hevue-img-preview"></a>
<a href='https://www.npmjs.com/package/hevue-img-preview'><img src='https://img.shields.io/badge/License-MIT-green' alt='downloads'></img></a>
<a href='#'><img src='https://img.shields.io/badge/Vue2-%2365b687?logo=Vue.js&logoColor=white'></img></a>
<a href='#'><img src='https://img.shields.io/badge/Vue3-%2365b687?logo=Vue.js&logoColor=white'></img></a>
</div>

hevue-img-preview是一个基于 vue 编写的 vue 图片预览组件，已对vue2和vue3同时兼容，支持 pc 和手机端，支持单图和多图预览，仅传入一个图片地址，即可实现图片预览效果。手机端支持单指拖拽和双指缩放。页面各组件颜色均可自定义，实现个性化设计，如果能帮上你，希望可以移步 [GitHub](https://github.com/heyongsheng/hevue-img-preview) ，或者[码云](https://gitee.com/ihope_top/hevue-img-preview) 给个小星星，如果有任何使用意见或建议，也欢迎回复或者提交 issure

特色：

`单图预览` `多图预览` `单图预览` `缩略图` `快捷键` `自定义旋转` `切换图片事件回调` `关闭事件回调` `PC端` `移动端` `保存图片` `自定义样式`

## 体验

<div style="display:flex;flex-wrap:wrap">
  <div style="width: 100%">
    <p style="text-align: center">单图预览</p>
    <img src="/1.png" @click="showImg" />
  </div>
  <div style="width: 100%">
    <p style="text-align: center">多图预览</p>
    <img v-for="(item, index) in imgList" :src="item" style="width:33%;display: inline-block" @click="showImgList(index)" />
    <!-- <img src="/2.png" style="width:33%;display: inline-block" @click="showImgList(0)" />
    <img src="/3.png" style="width:33%;display: inline-block" @click="showImgList(1)" />
    <img src="/4.png" style="width:33%;display: inline-block" @click="showImgList(2)" /> -->
  </div>
</div>

<script setup>
 import { previewImages } from 'hevue-img-preview/v3'
 import { withBase } from 'vitepress'

 const showImg = () => {
  previewImages('/1.png')
 }
 const imgList = [
  withBase('/2.png'),
  withBase('/3.png'),
  withBase('/4.png')
 ]
 const showImgList = (index) => {
  previewImages({
    nowImgIndex: index,
    imgList
  })
 }

</script>

## 良好的兼容性和丰富的配置

得益于vue2和vue3良好的兼容性，hevue-img-preview同时支持了vue2和vue3，安装步骤没有变化，您仅需在引入时区分vue2版本和vue3版本即可。

在设备方面，hevue-img-preview同时支持了PC端和移动端，插件会自适应设备提供正确的样式以及交互。


## 性能

很多插件在多图预览时候，每次切换图片都会重新加载一次地址，与他们不同的是，hevue-img-preview每张图片仅会在首次切换到它的时候加载一次，重复切换不会重新加载，大大减少了网络请求，并优化了用户体验，不会让用户每次切换图片都进行等待。

::: tip 提示
需要注意的是，如果开启缩略图，则所有图片会在开始时全都加载一次，然后在每张图片被切换到的时候再加载一次，相当于每张图片需要加载两次，请您根据您多图预览的张数、图片的大小以及目标用户的设备性能视情况开启缩略图功能。
:::

## 项目地址

[GitHub](https://github.com/heyongsheng/hevue-img-preview) https://github.com/heyongsheng/hevue-img-preview

[码云](https://gitee.com/ihope_top/hevue-img-preview) https://gitee.com/ihope_top/hevue-img-preview

