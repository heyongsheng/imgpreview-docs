# 多图预览

多图预览用到的配置如下

| 字段        | 类型    | 默认值 | 备注                         |
| ----------- | ------- | ------ | ---------------------------- |
| multiple    | Boolean | false  | 是否多图预览                 |
| nowImgIndex | Number  | 0      | 多图预览时默认显示的图片下标 |
| imgList     | Array   | 无     | 多图预览时传入的图片数组     |

## multiple

如果您想启用多图预览， 则需要将 `multiple` 属性设为 `true` ,来告诉组件您开启了多图预览模式

## nowImgIndex

多图预览的时候，您也许并不是每次都想从数组的第一张图片开始预览，我们为您提供了 `nowImgIndex` 属性，您只需要将需要预览的图片的下标赋值给 `nowImgIndex` 属性即可（注意是下标哦，下标从 0 开始）。

## imgList

当您开启了多图预览模式后，原有的 `src` 属性将失效，您需要将需要预览的图片以数组的形式赋值给 `imgList` 属性


## 示例

快点击下面的图片试试看吧

<template>
  <div>
    <img
      v-for="(item, index) in urlData"
      :key="index"
      :src="item"
      style="width:30%"
      @click="showImg(index)"
    />
  </div>
</template>

::: details 点击查看代码
```html
<template>
  <div>
    <img
      v-for="(item, index) in urlData"
      :key="index"
      :src="item"
      style="width:30%"
      @click="showImg(index)"
    />
  </div>
</template>
```
```javascript
<script>
export default {
  data () {
    return {
      urlData: [
        '/img/img-2.jpg',
        '/img/img-3.jpg',
        '/img/img-4.jpg'
      ]
    }
  },
  methods: {
    showImg(index) {
      this.$hevueImgPreview({
        multiple: true,
        nowImgIndex: index,
        imgList: this.urlData
      })
    }
  }
}
</script>
```
:::

<script>
export default {
  data () {
    return {
      urlData: [
        '/img/img-2.jpg',
        '/img/img-3.jpg',
        '/img/img-4.jpg'
      ]
    }
  },
  methods: {
    showImg(index) {
      this.$hevueImgPreview({
        multiple: true,
        nowImgIndex: index,
        imgList: this.urlData
      })
    }
  }
}
</script>
