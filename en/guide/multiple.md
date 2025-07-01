---
outline: deep
---

# Multiple Image Preview

## Related Configuration Options

| Property Name | Description                     | Type       | Default Value |
| ------------- | ------------------------------- | ---------- | ------------- |
| imgList       | Array of images for preview     | `array`    | -             |
| nowImgIndex   | Index of the currently displayed image | `number`   | 0             |
| thumbnail     | Enable bottom thumbnails        | `boolean`  | true          |

## imgList

You don't need separate configuration options for single and multiple image previews. Whether it's a single image or multiple images, we use the `imgList` parameter to receive image URLs. We will automatically determine the mode based on the number of image URLs you provide.

Additionally, we offer multiple ways to pass parameters, making it convenient for you to preview a single image. You can directly pass a `single image URL`, an `array of image URLs`, or `configuration options`. The following usage methods produce the same effect:

```js
this.$hevueImgPreview('/1.png')

this.$hevueImgPreview(['/1.png'])

this.$hevueImgPreview({
    imgList: ['/1.png']
})
```

## nowImgIndex

When you pass multiple image URLs, we need to know which image you want to start the preview from. You can specify this using the `nowImgIndex` configuration option. Note that the index starts from 0.

## thumbnail

The `thumbnail` configuration option controls whether thumbnails are enabled. Note that it only takes effect during multiple image previews. If you pass only one image URL, thumbnails will not be enabled even if `thumbnail` is set to `true`.

Additionally, as mentioned earlier, enabling thumbnails will load all images at once. If thumbnails are disabled, images will be loaded one by one as they are switched to. Please decide whether to enable thumbnails based on the number and size of images you need to browse at once.