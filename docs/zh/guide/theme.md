# 主题

同样的界面无法满足所有的用户需求（最主要的还是作者的审美不好啦），所以我们尽可能的把配色权交给你们，在上一个版本中，我们将部分元素的颜色设为变量，通过接收用户传入的变量来改变元素的颜色，但我们觉得这样的方法过于繁琐并且限制极大，所以我们推荐大家直接写一个单独的css文件，来对组件内的样式进行覆盖。

## 内置主题

当然了，我们也内置了两套主题供大家选择。您只需在全局引入插件的时候分别引入相应的主题即可。

### theme-dark

```javascript
// main.js
import hevueImgPreview from 'hevue-img-preview'
import 'hevue-img-preview/css/theme-dark.css'
Vue.use(hevueImgPreview)
```

### theme-light

```javascript
// main.js
import hevueImgPreview from 'hevue-img-preview'
import 'hevue-img-preview/css/theme-light.css'
Vue.use(hevueImgPreview)
```

::: tip
请注意，插件本身有默认的样式显示，您即使不引入任何css，插件也可正常显示。
:::

## 自定义主题

由于我们发布的插件为未打包版本，即直接发布的源码，所以您可以直接在项目的根目录下，进入 `node_modules/hevue-img-preview` 文件夹查看插件的源码，您可以轻松知道每一个元素的类名，从而对其进行样式更改。

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
```javascript
// main.js
import hevueImgPreview from 'hevue-img-preview'
import 'hevue-img-preview/css/theme-dark.css'
Vue.use(hevueImgPreview)
```
:::

::: tip
由于框架限制，本文档无法单独对某个页面引入css，所以在此页面引入过暗黑主题之后，其他所有页面示例都将使用暗黑主题，如需查看默认主题，只需在其他页面刷新页面即可。
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
<style scoped>
@import '/css/theme-dark.css' 
</style>
