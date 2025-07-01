---
outline: deep
---

# 配置项

## 全局配置项

对于某些配置，例如开启键盘事件，点击遮罩层关闭，我们可能要全局保持统一，但却需要在每一次调用时重复配置，为了解决这个问题，我们提供了全局配置项，您可以在引入插件的时候，将全局配置项作为第二个参数传入即可，以免再每次调用的时候重复配置。

:::tip
由于在配置项使用方面，vue2和vue3区别不大，所以本章内容不会再单独区分。
:::

```js
// main.js
Vue.use(hevueImgPreview, options)
```

## 局部配置项

我们把在组件内使用插件时传入的参数叫做局部配置项，同时插件也对大部分配置项提供了默认值。他们的优先级如下

:::tip 优先级

配置项的优先级为 **组件内传入配置 > 全局配置 > 默认值**

:::

## options

此处会列出所有配置项供您快速查看，如果您对某一项有疑问，也可以参考后面对配置项的具体解释

| 属性名                   | 说明            | 类型         | 默认值   | 详细说明                     |
| --------------------- | ------------- | ---------- | ----- | ------------------------ |
| imgList               | 预览的图片地址       | `array`    | -     | [多图预览](./multiple)       |
| nowImgIndex           | 传入多图时当前图片的下标  | `number`   | 0     | [多图预览](./multiple)       |
| thumbnail             | 显示缩略图         | `boolean`  | true  | [多图预览](./multiple)       |
| controlBar            | 底部控制条配置       | `array`    | []    | [控制条](./controlBar)      |
| closeBtn              | 显示右上角关闭按钮     | `boolean`  | true  | -                        |
| arrowBtn              | 显示左右切换按钮      |            |       | -                        |
| clickMaskCLose        | 点击遮罩层是否关闭图片预览 | `boolean`  | true  | -                        |
| disabledImgRightClick | 禁止图片右击事件      | `boolean`  | false | -                        |
| disableTransition     | 禁止过渡效果        | `boolean`  | false | [外观与与过渡](./customStyle)  |
| customStyle           | 自定义样式         | `object`   | -     | [外观与与过渡](./customStyle)  |
| themeName             | 主题名称          | `string`   | -     | [外观与与过渡](./customStyle)  |
| closeFn               | 插件关闭回调函数      | `Function` | -     | [关闭事件](./closeFn)        |
| changeFn              | 多图切换回调函数      | `Function` | -     | [图片切换事件](./changeFn)     |
| locale                | 语言            | `string`   | zhCN  | zhCN: 中文<br/>en: English |
