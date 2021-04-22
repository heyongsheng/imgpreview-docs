# 自定义颜色

自定义颜色用到的配置如下

| 字段        | 类型    | 默认值 | 备注                         |
| ----------- | ------- | ------ | ---------------------------- |
| mainBackground    | String  | rgba(0,0,0,.4)       | 整体背景颜色（可选）           |
| controlColor      | String  | rgba(255,255,255,.6) | 控制条字体颜色（可选）         |
| controlBackground | String  | rgba(61, 61, 61, .4) | 控制条背景颜色 （可选）        |
| closeColor        | String  | rgba(61, 61, 61, .4) | 关闭图标的颜色 （可选）        |

> 同样的界面无法满足所有的用户需求（最主要的还是作者的审美不好啦），所以我们尽可能的把配色权交给你们，如果您对默认的配色不满意，完全可以根据配置项设计属于你的配色。（实在不行的话就审查元素看类名，直接覆盖样式吧）

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
```javascript {18-21}
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
        mainBackground: 'rgba(255，255，255，.6)',
        controlColor: '#fff',
        controlBackground: 'rgba(22, 134, 216, .6)',
        closeColor: 'rgba(22, 134, 216)'
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
        mainBackground: 'rgba(255，255，255，.6)',
        controlColor: '#fff',
        controlBackground: 'rgba(22, 134, 216, .6)',
        closeColor: 'rgba(22, 134, 216)'
      })
    }
  }
}
</script>
