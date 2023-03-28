# 切换图片回调函数

切换图片回调函数用到的配置如下

| 字段        | 类型    | 默认值 | 备注                         |
| ----------- | ------- | ------ | ---------------------------- |
| changeFn     | Function | null  | 切换图片回调函数               |

## 回调参数

回调函数会返回以下参数

| 参数        | 类型    | 默认值 | 备注                         |
| ----------- | ------- | ------ | ---------------------------- |
| type     | string | null  | 切换类型，详细见下表               |
| fromImgIndex     | number | null  | 切换前图片索引               |
| fromImgUrl     | string | null  | 切换前图片地址               |
| toImgIndex     | number | null  | 切换后图片索引               |
| toImgUrl     | string | null  | 切换后图片地址               |
| way     | string | null  | 切换方式，详细见下表               |

type 说明

| 参数        | 说明                         | 
| ----------- | ---------------------------- |
| prev     | 上一张               |
| next     | 下一张               | 

way 说明

| 参数        | 说明                         | 备注                        |
| ----------- | ---------------------------- |---------
| key-a     | 键盘 a 键切换               | 需开启键盘控制支持               |
| key-d     | 键盘 d 键切换               | 需开启键盘控制支持               |
| btn     | 左右切换按钮切换               |

## 示例

```js
this.$hevueImgPreview({
  // ...
  changeFn: (data) => {
    // data => { type: 'next', fromImgIndex: 0, fromImgUrl: 'http://xxx', toImgIndex: 1, toImgUrl: 'http://xxx', way: 'key-d' }
    // 用户通过键盘 键盘d 切换到下一张图片
  }
})
```