# Introduction

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

hevue-img-preview is a Vue-based image preview component compatible with both Vue 2 and Vue 3. It supports both PC and mobile devices, as well as single and multiple image previews. By simply passing an image URL, you can achieve image preview functionality. On mobile devices, it supports single-finger drag and two-finger zoom. The colors of all components on the page can be customized for personalized design. If this plugin is helpful to you, please consider giving it a star on [GitHub](https://github.com/heyongsheng/hevue-img-preview) or [Gitee](https://gitee.com/ihope_top/hevue-img-preview). If you have any feedback or suggestions, feel free to reply or submit an issue.

Features:

`Single Image Preview` `Multiple Image Preview` `Thumbnails` `Keyboard Shortcuts` `Custom Rotation` `Image Switch Event Callback` `Close Event Callback` `PC Support` `Mobile Support` `Save Image` `Custom Styles`

## Demo

<div style="display:flex;flex-wrap:wrap">
  <div style="width: 100%">
    <p style="text-align: center">Single Image Preview</p>
    <img src="/1.png" @click="showImg" />
  </div>
  <div style="width: 100%">
    <p style="text-align: center">Multiple Image Preview</p>
    <img v-for="(item, index) in imgList" :src="item" style="width:33%;display: inline-block" @click="showImgList(index)" />
  </div>
</div>

<script setup>
 import { previewImages } from 'hevue-img-preview/v3'

 const showImg = () => {
  previewImages('/1.png')
 }
 const imgList = [
  '/2.png',
  '/3.png',
  '/4.png'
 ]
 const showImgList = (index) => {
  previewImages({
    nowImgIndex: index,
    imgList
  })
 }

</script>

## Excellent Compatibility and Rich Configuration

Thanks to the excellent compatibility of Vue 2 and Vue 3, hevue-img-preview supports both versions. The installation steps remain unchanged; you only need to distinguish between the Vue 2 and Vue 3 versions when importing.

In terms of devices, hevue-img-preview supports both PC and mobile platforms. The plugin adapts to the device to provide the correct styles and interactions.

## Performance

Many plugins reload the image URL every time you switch images during multiple image previews. Unlike them, hevue-img-preview only loads each image the first time it is switched to. Subsequent switches do not reload the image, significantly reducing network requests and optimizing user experience by avoiding waiting during image switches.

::: tip Note
If thumbnails are enabled, all images will be loaded at the start, and each image will be loaded again when switched to. This means each image will be loaded twice. Please decide whether to enable thumbnails based on the number of images, their size, and the target user's device performance.
:::

## Project Links

[GitHub](https://github.com/heyongsheng/hevue-img-preview) https://github.com/heyongsheng/hevue-img-preview

[Gitee](https://gitee.com/ihope_top/hevue-img-preview) https://gitee.com/ihope_top/hevue-img-preview

