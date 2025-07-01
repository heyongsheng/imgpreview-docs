---
outline: deep
---

# 底部控制条

## 相关配置项

| 属性名        | 说明    | 类型      | 默认值       |
| ---------- | ----- | ------- | --------- |
| controlBar | 底部控制条 | `array` | `boolean` |

## controlBar

我们使用了一个配置项`controlBar`来控制底部控制条的是否显示以及显示的顺序，它的逻辑如下

- 显示所有控制项-默认如此，无需操作
- 隐藏控制条-`controlBar: false`
- 只想要显示特定的控制项——`controlBar: ['zoomOut', 'zoomIn', 'help']`

### 具体控制项

| key          | 说明    | 备注        |
| ------------ | ----- | --------- |
| zoomOut      | 缩小    |           |
| zoomIn       | 放大    |           |
| rotateLeft   | 向左旋转  |           |
| customRotate | 自定义旋转 |           |
| rotateRight  | 向右旋转  |           |
| reset        | 复位    |           |
| prev         | 上一张   | 仅多图时生效    |
| next         | 下一张   | 仅多图时生效    |
| download     | 下载    |           |
| help         | 快捷键说明 | 仅开启快捷键时生效 |

:::tip

传入控制项的顺序也会决定它们在页面显示的顺序

:::


