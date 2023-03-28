# 更新日志

## 6.1.0 增加关闭组件以及切换图片回调函数的支持
2023年03月28日17:04:08

关闭组件
```js
this.$hevueImgPreview({
  // ...
  closeFn: (data) => {
    // data-回调参数
    // data.way-关闭方式 'esc' 键盘关闭 'closeBtn' 关闭按钮关闭 'mask' 点击遮罩关闭
  }
})
```

切换图片
```js
this.$hevueImgPreview({
  // ...
  changeFn: (data) => {
    // data-回调参数
    // data.type-切换方式 'prev' 上一张 'next' 下一张
    // data.fromImgIndex-切换前图片索引
    // data.fromImgUrl-切换前图片地址
    // data.toImgIndex-切换后图片索引
    // data.toImgUrl-切换后图片地址
    // way-切换方式 'key-a' 键盘a 'key-d' 键盘d 'btn' 左右切换按钮
  }
})
```