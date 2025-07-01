---
outline: deep
---

# Getting Started

## Using Package Managers

### Installation

Using a package manager will directly install the source version of the plugin, which includes `.vue` files. This is suitable for projects created with scaffolding tools. The installation method is the same for both Vue 2 and Vue 3 versions.

::: code-group

```sh [npm]
$ npm add -D hevue-img-preview
```

```sh [pnpm]
$ pnpm add -D hevue-img-preview
```

```sh [yarn]
$ yarn add -D hevue-img-preview
```

```sh [yarn (pnp)]
$ yarn add -D hevue-img-preview
```

```sh [bun]
$ bun add -D hevue-img-preview
```

:::

### Usage

#### Vue 2 Version

</br></br>

##### Global Usage

::: code-group

```js [main.js]
import Vue from 'vue'
import App from './App.vue'
import hevueImgPreview from 'hevue-img-preview/v2' // [!code focus]

Vue.use(hevueImgPreview) // [!code focus]

new Vue({
  render: (h) => h(App),
}).$mount('#app')
```
```vue [home.vue]
<template>
  <div id="app">
    <img alt="Vue logo" src="/1.png" @click="handleClick" />  <!-- [!code focus] -->
  </div>
</template>

<script>
export default {
  name: 'App',
  methods: {
    handleClick() {
      this.$hevueImgPreview('/1.png') // [!code focus]
    },
  },
}
</script>
```
:::

##### Local Usage

```vue [home.vue]
<template>
  <div id="app">
    <img alt="Vue logo" src="/1.png" @click="handleClick" />  <!-- [!code focus] -->
  </div>
</template>

<script>
import { previewImages } from 'hevue-img-preview/v2' // [!code focus]
export default {
  name: 'App',
  methods: {
    handleClick() {
      previewImages('/1.png') // [!code focus]
    },
  },
}
</script>
```

#### Vue 3 Version

</br></br>

##### Global Usage

::: code-group

```js [main.js]
import { createApp } from 'vue'
import App from './App.vue'
import hevueImgPreview from 'hevue-img-preview/v3' // [!code focus]

const app = createApp(App)
app.use(hevueImgPreview) // [!code focus]
app.mount('#app')
```

```vue [home.vue]
<template>
  <div id="app">
    <img alt="Vue logo" src="/1.png" @click="handleClick" />  <!-- [!code focus] -->
  </div>
</template>

<script setup>
import { getCurrentInstance } from 'vue' // [!code focus]
const global = getCurrentInstance().appContext.config.globalProperties // [!code focus]

const handleClick = () => { // [!code focus]
  global.$hevueImgPreview('/1.png') // [!code focus]
} // [!code focus]
</script>
```
:::

##### Local Usage

```vue [home.vue]
<template>
  <div id="app">
    <img alt="Vue logo" src="/1.png" @click="handleClick" />  <!-- [!code focus] -->
  </div>
</template>

<script setup>
import { previewImages } from 'hevue-img-preview/v2' // [!code focus]

const handleClick = () => { // [!code focus]
  previewImages('/1.png') // [!code focus]
} // [!code focus]
</script>
```

## Direct Browser Import

### Vue 2 Version

#### CDN Links

::: code-group

```js [jsdelivr]
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/hevue-img-preview@7.0.0/dist/v2/index.css"/>
<script src="https://cdn.jsdelivr.net/npm/hevue-img-preview@7.0.0/dist/v2/index.js"></script>
```

```js [unpkg]
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/hevue-img-preview@7.0.0/dist/v2/index.css"/>
<script src="https://app.unpkg.com/hevue-img-preview@7.0.0/files/v2/index.js"></script>
```
:::

#### Usage in HTML

```html
<!DOCTYPE html>
<html>
  <head>
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/hevue-img-preview@7.0.0/dist/v2/index.css"/> <!-- [!code focus] -->
    <script src="https://cdn.jsdelivr.net/npm/vue@2.7.16/dist/vue.js"></script>
    <script src="https://cdn.jsdelivr.net/npm/hevue-img-preview@7.0.0/dist/v2/index.js"></script> <!-- [!code focus] -->
  </head>

  <body>
    <div id="app">
      <img src="/1.png" @click="handleClick" />
    </div>

    <script>
      Vue.use(hevueImgPreview.default) // [!code focus]
      var app = new Vue({
        el: '#app',
        methods: {
          handleClick() {
            this.$hevueImgPreview('/1.png') // [!code focus]
          },
        },
      })
    </script>
  </body>
</html>

```

### Vue 3 Version

#### CDN Links

::: code-group

```js [jsdelivr]
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/hevue-img-preview@7.0.0/dist/v3/index.css"/>
<script src="https://cdn.jsdelivr.net/npm/hevue-img-preview@7.0.0/dist/v3/index.js"></script>
```

```js [unpkg]
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/hevue-img-preview@7.0.0/dist/v3/index.css"/>
<script src="https://app.unpkg.com/hevue-img-preview@7.0.0/files/v3/index.js"></script>
```
:::

#### Usage in HTML

```html
<!DOCTYPE html>
<html>
  <head>
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/hevue-img-preview@7.0.0/dist/v3/index.css"/> <!-- [!code focus] -->
    <script src="https://unpkg.com/vue@3/dist/vue.global.js"></script>
    <script src="https://cdn.jsdelivr.net/npm/hevue-img-preview@7.0.0/dist/v3/index.js"></script> <!-- [!code focus] -->
  </head>

  <body>
    <div id="app">
      <img src="http://localhost:3000/3.png" @click="handleClick" />
    </div>

    <script>
      const appVue = Vue.createApp({
        methods: {
          handleClick() {
            appVue.config.globalProperties.$hevueImgPreview('http://127.0.0.1:5173/3.png') // [!code focus]
          },
        },
      })

      appVue.use(hevueImgPreview.default) // [!code focus]
      appVue.mount('#app')
    </script>
  </body>
</html>

```
