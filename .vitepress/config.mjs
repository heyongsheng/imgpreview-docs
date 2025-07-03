import { defineConfig } from 'vitepress'
import {
  groupIconMdPlugin,
  groupIconVitePlugin,
} from 'vitepress-plugin-group-icons'
// import zh from '../zh/config'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: 'hevue-img-preview',
  description:
    'hevue-img-preview是一个基于 vue 编写的 vue 图片预览组件，已对vue2和vue3同时兼容，支持 pc 和手机端，支持单图和多图预览，支持缩略图，图片懒加载、自定义样式、自定义旋转角度等',
  // base: '/imgpreview-docs/',
  rewrites: {
    'zh/:rest*': ':rest*',
  },
  themeConfig: {
    logo: '/logo-small.png',
    search: {
      provider: 'local',
    },
    // https://vitepress.dev/reference/default-theme-config
    // nav: [{ text: '快速开始', link: './guide/profile' }],

    socialLinks: [
      {
        icon: 'github',
        link: 'https://github.com/heyongsheng/hevue-img-preview',
      },
    ],
  },
  locales: {
    root: {
      label: '简体中文',
    },
    en: {
      label: 'English',
    },
  },
  head: [
    // heyongsheng.github.io/
    [
      'script',
      {},
      `
    var _hmt = _hmt || [];
    (function() {
    var hm = document.createElement("script");
    hm.src = "https://hm.baidu.com/hm.js?14f7a4912d6da4ec11a2bce92d3ce7fd";
    var s = document.getElementsByTagName("script")[0];
    s.parentNode.insertBefore(hm, s);
    })();
      `,
    ],
    // http://img-preview-doc.it1996.com/
    // [
    //   'script',
    //   {},
    //   `
    // var _hmt = _hmt || [];
    // (function() {
    // var hm = document.createElement("script");
    // hm.src = "https://hm.baidu.com/hm.js?071e423ecdf99e67b09f05cf1884106c";
    // var s = document.getElementsByTagName("script")[0];
    // s.parentNode.insertBefore(hm, s);
    // })();
    //   `,
    // ],
    [
      'script',
      {
        crossorigin: 'anonymous',
        async: true,
        src: 'https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-5787261417853528',
      },
    ],
  ],
  markdown: {
    config(md) {
      md.use(groupIconMdPlugin)
    },
  },
  vite: {
    plugins: [groupIconVitePlugin()],
    ssr: {
      noExternal: ['hevue-img-preview'],
    },
  },
})
