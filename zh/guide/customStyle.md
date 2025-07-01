---
outline: deep
---

# 外观与过渡

## 相关配置项

| 属性名               | 说明     | 类型        | 默认值     |
| ----------------- | ------ | --------- | ------- |
| disableTransition | 禁止过渡效果 | `boolean` | `false` |
| themeName         | 主题名称   | `string`  | -       |
| customStyle       | 自定义样式  | `object`  | -       |

## disableTransition

我们在本版本做了大量的过渡效果，比如插件显示和隐藏时，缩略图切换时，以及大图切换时，这无疑提供了良好的视觉效果，让一切不显得那么突兀，但也有些用户可能因为设备性能原因，或者图片数量巨大的原因，想要关闭过渡效果，于是我们提供了`disableTransition`配置项，您只需要将它设为`true`，即可关闭全局过渡效果。

## themeName

iOS26的液态玻璃给我们带来了新的灵感，于是我们也将液态玻璃这一全新的ui风格带到了插件中，但是由于前端技术限制，和ios中的效果相比肯定相差甚远，另外，我们考虑到可能并非所有用户都喜欢这一风格，所以我们将它制作成了一个主题，并命名为`glass-theme`，如果您需要，只要将它作为参数传递给`themeName`配置项即可，如果有需要，后续我们也将制作更多主题供您选择。

快点击下图即刻体验一下吧~

<div style="display:flex;flex-wrap:wrap">
  <div style="width: 100%">
    <img v-for="(item, index) in imgList" :src="item" style="width:25%;display: inline-block" @click="showImgList(index)" />
  </div>
</div>

<script setup>
 import { previewImages } from '/components/hevue-img-preview/v3'

 const imgList = [
  '/1.png',
  '/2.png',
  '/3.png',
  '/4.png'
 ]
 const showImgList = (index) => {
  previewImages({
    nowImgIndex: index,
    themeName: 'glass-theme',
    imgList
  })
 }

</script>

:::tip 注意
由于该滤镜和过渡效果不可同时存在，所以您会观察到，滤镜会在过渡效果结束后突然出现，目前作者也没有解决这个问题，所以您可以考虑是否使用此主题，如果确定使用，我们建议您可以在使用该主题的同时关闭全局过渡效果。
:::

## customStyle

虽然我们尽力提供了尽可能好看的默认的样式，但可能仍不符合您的网站风格，所以我们提供了部分样式的自定义功能，如果一下配置仍不能满足您的需求，您还可以通过控制台获取您想修改部分的类名，进行自定义css样式覆盖

自定义样式部分，我们使用的是css变量来实现的，所以字段名遵守css变量规范。我们提供了通用主变量来对全局样式进行控制，如果您想修改组件整体的背景色、文字颜色等，修改通用主变量会更加方便，如果您想对插件的某个部分做单独的样式调整，我们也提供了他们单独的配置项。

**使用方法**

```js
this.$hevueImgPreview({
  // 其他参数
  customStyle: {
    '--hevueimg-main-bg-color': 'rgba(255, 255, 255, 0.5)', // 全局背景主色调修改为半透明白色
    '--hevueimg-close-icon-text-color': 'blue' // 关闭按钮图标颜色修改为蓝色
  }
})
```

### 🎨 通用主变量

| 字段名                        | 默认值                      | 字段说明 |
| -------------------------- | ------------------------ | ---- |
| --hevueimg-main-bg-color   | rgba(0, 0, 0, 0.3)       | 背景颜色 |
| --hevueimg-main-text-color | rgba(255, 255, 255, 0.7) | 文本颜色 |
| --hevueimg-main-backdrop   | blur(5px)                | 背景滤镜 |
| --hevueimg-main-border     | none                     | 边框样式 |
| --hevueimg-main-box-shadow | none                     | 阴影效果 |

### 🛡 蒙层（Mask）

| 字段名                      | 默认值                           | 字段说明 |
| ------------------------ | ----------------------------- | ---- |
| --hevueimg-mask-bg-color | var(--hevueimg-main-bg-color) | 背景色  |
| --hevueimg-mask-backdrop | var(--hevueimg-main-backdrop) | 背景滤镜 |

### 🧭 右上角关闭按钮

| 字段名                              | 默认值                             | 字段说明    |
| -------------------------------- | ------------------------------- | ------- |
| --hevueimg-close-bg-color        | var(--hevueimg-main-bg-color)   | 背景色     |
| --hevueimg-close-backdrop        | var(--hevueimg-main-backdrop)   | 背景滤镜    |
| --hevueimg-close-border          | var(--hevueimg-main-border)     | 边框样式    |
| --hevueimg-close-box-shadow      | var(--hevueimg-main-box-shadow) | 阴影效果    |
| --hevueimg-close-icon-text-color | var(--hevueimg-main-text-color) | 图标/文本颜色 |

---

### ⬅️➡️ 屏幕两侧切换箭头

| 字段名                         | 默认值                             | 字段说明    |
| --------------------------- | ------------------------------- | ------- |
| --hevueimg-arrow-bg-color   | var(--hevueimg-main-bg-color)   | 背景色     |
| --hevueimg-arrow-backdrop   | var(--hevueimg-main-backdrop)   | 背景滤镜    |
| --hevueimg-arrow-border     | var(--hevueimg-main-border)     | 边框样式    |
| --hevueimg-arrow-box-shadow | var(--hevueimg-main-box-shadow) | 阴影效果    |
| --hevueimg-arrow-text-color | var(--hevueimg-main-text-color) | 文本/图标颜色 |

---

### ⚙️ 控制栏

| 字段名                              | 默认值                             | 字段说明 |
| -------------------------------- | ------------------------------- | ---- |
| --hevueimg-controlbar-bg-color   | var(--hevueimg-main-bg-color)   | 背景色  |
| --hevueimg-controlbar-backdrop   | var(--hevueimg-main-backdrop)   | 背景滤镜 |
| --hevueimg-controlbar-border     | var(--hevueimg-main-border)     | 边框样式 |
| --hevueimg-controlbar-box-shadow | var(--hevueimg-main-box-shadow) | 阴影效果 |
| --hevueimg-controlbar-text-color | var(--hevueimg-main-text-color) | 文本颜色 |

---

### 🔢 底部图片计数器

| 字段名                              | 默认值                             | 字段说明 |
| -------------------------------- | ------------------------------- | ---- |
| --hevueimg-controlnum-bg-color   | var(--hevueimg-main-bg-color)   | 背景色  |
| --hevueimg-controlnum-backdrop   | var(--hevueimg-main-backdrop)   | 背景滤镜 |
| --hevueimg-controlnum-border     | var(--hevueimg-main-border)     | 边框样式 |
| --hevueimg-controlnum-box-shadow | var(--hevueimg-main-box-shadow) | 阴影效果 |
| --hevueimg-controlnum-text-color | var(--hevueimg-main-text-color) | 文本颜色 |

---

### ❓ 快捷键帮助弹窗

| 字段名                        | 默认值                             | 字段说明 |
| -------------------------- | ------------------------------- | ---- |
| --hevueimg-help-bg-color   | var(--hevueimg-main-bg-color)   | 背景色  |
| --hevueimg-help-backdrop   | var(--hevueimg-main-backdrop)   | 背景滤镜 |
| --hevueimg-help-border     | var(--hevueimg-main-border)     | 边框样式 |
| --hevueimg-help-box-shadow | var(--hevueimg-main-box-shadow) | 阴影效果 |
| --hevueimg-help-text-color | var(--hevueimg-main-text-color) | 文本颜色 |

---

### 🔄 自定义旋转控制条

| 字段名                                 | 默认值                             | 字段说明   |
| ----------------------------------- | ------------------------------- | ------ |
| --hevueimg-custom-rotate-bg-color   | var(--hevueimg-main-bg-color)   | 背景色    |
| --hevueimg-custom-rotate-backdrop   | var(--hevueimg-main-backdrop)   | 背景滤镜   |
| --hevueimg-custom-rotate-border     | var(--hevueimg-main-border)     | 边框样式   |
| --hevueimg-custom-rotate-box-shadow | var(--hevueimg-main-box-shadow) | 阴影效果   |
| --hevueimg-custom-rotate-text-color | var(--hevueimg-main-text-color) | 按钮文本颜色 |

### 🔄 自定义旋转角度标签

| 字段名                                       | 默认值                             | 字段说明 |
| ----------------------------------------- | ------------------------------- | ---- |
| --hevueimg-custom-rotate-label-bg-color   | var(--hevueimg-main-bg-color)   | 背景色  |
| --hevueimg-custom-rotate-label-backdrop   | var(--hevueimg-main-backdrop)   | 背景滤镜 |
| --hevueimg-custom-rotate-label-border     | var(--hevueimg-main-border)     | 边框   |
| --hevueimg-custom-rotate-label-box-shadow | var(--hevueimg-main-box-shadow) | 阴影   |
| --hevueimg-custom-rotate-label-text-color | var(--hevueimg-main-text-color) | 文本颜色 |