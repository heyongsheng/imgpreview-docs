<!--
 * @Author: 贺永胜
 * @Date: 2021-04-22 17:37:13
 * @email: 1378431028@qq.com
 * @LastEditors: 贺永胜
 * @LastEditTime: 2021-04-22 17:41:01
 * @Description: 单图预览
-->
# 单图预览

单图预览用到的配置项有以下配置

| 字段              | 类型    | 默认值               | 备注                           |
| ----------------- | ------- | -------------------- | ------------------------------ |
| url               | String  | 无                   | 预览的图片地址，多图预览时省略 |

## src

如果您需要预览单图，仅需将图片地址作为参数 `url` 传入即可。

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
