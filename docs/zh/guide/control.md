# 隐藏控制按钮

有些人喜欢简洁一些的页面，而插件自带的过多控制按钮，也确实影响美观，您可以像自定义主题那样，设置css来隐藏您不想看到的按钮，如果您觉得那样麻烦，我们也提供了配置项来对按钮的显示和隐藏进行控制。

| 字段              | 类型    | 默认值               | 备注                           |
| ----------------- | ------- | -------------------- | ------------------------------ |
| controlBar        | Boolean | true                 | 是否显示控制条及页码         |
| closeBtn          | Boolean | true                 | 是否显示关闭按钮         |
| arrowBtn          | Boolean | true                | 是否显示左右翻页按钮         |

## 示例

快点击下面的图片试试看吧

::: warning
如果您隐藏了关闭按钮，请一定要提供其他的关闭方式，例如点击遮罩层关闭。
:::

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
```javascript {18-20}
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
        controlBar: false,
        closeBtn: false,
        arrowBtn: false,
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
        controlBar: false,
        closeBtn: false,
        arrowBtn: false,
        clickMaskCLose: true
      })
    }
  }
}
</script>
