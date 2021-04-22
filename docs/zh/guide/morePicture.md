<!--
 * @Author: 贺永胜
 * @Date: 2021-04-22 17:38:13
 * @email: 1378431028@qq.com
 * @LastEditors: 贺永胜
 * @LastEditTime: 2021-04-22 17:42:47
 * @Description: 多图预览
-->

# 多图预览

多图预览用到的配置项有以下配置

| 字段              | 类型    | 默认值               | 备注                           |
| ----------------- | ------- | -------------------- | ------------------------------ |
| multiple          | Boolean | false                | 是否多图预览                   |
| nowImgIndex       | Number  | 0                    | 多图预览时默认显示的图片下标   |
| imgList           | Array   | 无                   | 多图预览时传入的图片数组       |

## multiple

如果您想启用多图预览， 则需要将 `multiple` 属性设为 `true` ,来告诉组件您开启了多图预览模式

## imgList

当您开启了多图预览模式后，原有的则需要将需要预览的图片

<script>
export default {
  methods: {
    showImg(url) {
      this.$hevueImgPreview(url)
    }
  }
}
</script>
