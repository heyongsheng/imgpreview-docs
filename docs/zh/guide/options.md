# 配置项

为了满足开发者不同的使用需求，本插件提供了丰富的配置项以供选择，只需要在调用插件时将配置项传入，即可实现不同的个性化效果。

```javascript
this.$hevueImgPreview(options)
```

## options

| 字段              | 类型    | 默认值               | 备注                           |
| ----------------- | ------- | -------------------- | ------------------------------ |
| url               | String  | 无                   | 预览的图片地址，多图预览时省略 |
| mainBackground    | String  | rgba(0,0,0,.4)       | 整体背景颜色（可选）           |
| controlColor      | String  | rgba(255,255,255,.6) | 控制条字体颜色（可选）         |
| controlBackground | String  | rgba(61, 61, 61, .4) | 控制条背景颜色 （可选）        |
| closeColor        | String  | rgba(61, 61, 61, .4) | 关闭图标的颜色 （可选）        |
| multiple          | Boolean | false                | 是否多图预览                   |
| nowImgIndex       | Number  | 0                    | 多图预览时默认显示的图片下标   |
| imgList           | Array   | 无                   | 多图预览时传入的图片数组       |
| keyboard          | Boolean | false                | 是否开启键盘控制               |
| clickMaskCLose    | Boolean | false                | 是否可以点击遮罩层关闭         |

## 全局配置项

对于某些配置，例如开启键盘事件，点击遮罩层关闭，我们可能要全局保持统一，但却需要在每一次调用时重复配置，为了解决这个问题，我们提供了全局配置项，您可以在引入插件的时候，将全局配置项作为第二个参数传入即可，以免再每次调用的时候重复配置。

```javascript
// main.js
import hevueImgPreview from 'hevueImgPreview'
Vue.use(hevueImgPreview, {
  keyboard: true,
  clickMaskCLose: true,
  mainBackground: 'rgba(0,0,0,.4)'
  ...
})
```

::: tip
配置项的优先级为 **组件内传入配置 > 全局配置 > 默认值**
:::

下面我们就通过示例来了解每一个配置项如何使用








