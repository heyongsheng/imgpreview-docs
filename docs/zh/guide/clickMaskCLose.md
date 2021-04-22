# 点击遮罩层关闭

点击遮罩层关闭用到的配置如下

| 字段        | 类型    | 默认值 | 备注                         |
| ----------- | ------- | ------ | ---------------------------- |
| clickMaskCLose    | Boolean | false                | 是否可以点击遮罩层关闭         |

## clickMaskCLose

有时候我们并不想去点击右上角小小的关闭按钮去关闭图片预览，而是想随手一点就能关闭，我们为此提供了点击遮罩层关闭的功能，只不过它是默认关闭的，如果您需要开启点击遮罩层关闭的功能，只需要将 `clickMaskCLose` 属性设为 `true` 即可。

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
```javascript {18}
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
        imgList: this.urlData,
        clickMaskCLose: true
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
        imgList: this.urlData,
        clickMaskCLose: true
      })
    }
  }
}
</script>
