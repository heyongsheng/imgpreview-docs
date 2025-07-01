---
outline: deep
---

# Switch Event

## Relevant Configuration Options

| Property   | Description                      | Type       | Default |
|------------|----------------------------------|------------|---------|
| changeFn   | Callback function for switching images | `Function` | —       |

## changeFn

The `changeFn` option accepts a callback function that is triggered when the plugin switches images. The returned argument is `params`.

### params

| key            | Description         | Notes                                                                                                                            |
|----------------|---------------------|----------------------------------------------------------------------------------------------------------------------------------|
| type           | Direction           | `prev`: previous image<br/>`next`: next image<br/>`thumb`: thumbnail was clicked                                                |
| fromImgIndex   | Current image index |                                                                                                                                    |
| fromImgUrl     | Current image URL   |                                                                                                                                    |
| toImgIndex     | Target image index  |                                                                                                                                    |
| toImgUrl       | Target image URL    |                                                                                                                                    |
| way            | Trigger method      | `control-bar`: control bar<br/>`key-a`: key `a`<br/>`key-d`: key `d`<br/>`key-left`: arrow `←`<br/>`key-right`: arrow `→`<br/>`arrow-btn`: arrow button<br/>`thumb`: thumbnail |