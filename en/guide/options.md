---
outline: deep
---

# Configuration Options

## Global Configuration Options

For certain configurations, such as enabling keyboard events or closing the preview by clicking the mask layer, you may want to maintain consistency globally but need to repeatedly configure them for each invocation. To solve this problem, we provide global configuration options. You can pass the global configuration options as the second parameter when importing the plugin, avoiding repetitive configurations for each invocation.

:::tip
Since the usage of configuration options is similar in Vue 2 and Vue 3, this chapter will not distinguish between them.
:::

```js
// main.js
Vue.use(hevueImgPreview, options)
```

## Local Configuration Options

The parameters passed when using the plugin within a component are called local configuration options. The plugin also provides default values for most configuration options. Their priority is as follows:

:::tip Priority

The priority of configuration options is **Component-level configuration > Global configuration > Default values**

:::

## Options

Below is a list of all configuration options for quick reference. If you have questions about a specific option, you can refer to the detailed explanations later in this document.

| Property Name         | Description                                                         | Type       | Default Value | Detailed Explanation                       |
| --------------------- | ------------------------------------------------------------------- | ---------- | ------------- | ------------------------------------------ |
| imgList               | Array of image URLs for preview                                     | `array`    | -             | [Multiple Image Preview](./multiple)       |
| nowImgIndex           | Index of the currently displayed image when passing multiple images | `number`   | 0             | [Multiple Image Preview](./multiple)       |
| thumbnail             | Enable thumbnails                                                   | `boolean`  | true          | [Multiple Image Preview](./multiple)       |
| controlBar            | Configuration for the bottom control bar                            | `array`    | []            | [Control Bar](./controlBar)                |
| closeBtn              | Show the top-right close button                                     | `boolean`  | true          | -                                          |
| arrowBtn              | Show left and right navigation buttons                              | `boolean`  | true          | -                                          |
| clickMaskClose        | Close the preview by clicking the mask layer                        | `boolean`  | true          | -                                          |
| disabledImgRightClick | Disable right-click on images                                       | `boolean`  | false         | -                                          |
| disableTransition     | Disable transition effects                                          | `boolean`  | false         | [Appearance and Transition](./customStyle) |
| customStyle           | Custom styles                                                       | `object`   | -             | [Appearance and Transition](./customStyle) |
| themeName             | Theme name                                                          | `string`   | -             | [Appearance and Transition](./customStyle) |
| closeFn               | Callback function when the plugin is closed                         | `Function` | -             | [Close Event](./closeFn)                   |
| changeFn              | Callback function for image switching                               | `Function` | -             | 
[Image Switch Event](./changeFn)           |
| locale                | Language           | `string`   | zhCN  | zhCN: 中文<br/>en: English |
