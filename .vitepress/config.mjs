import { defineConfig } from 'vitepress'
import {
  groupIconMdPlugin,
  groupIconVitePlugin,
} from 'vitepress-plugin-group-icons'
// import zh from '../zh/config'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: 'hevue-img-preview',
  description: 'A VitePress Site',
  themeConfig: {
    logo: '/logo-small.png',
    search: {
      provider: 'local',
    },
    // https://vitepress.dev/reference/default-theme-config
    // nav: [{ text: '快速开始', link: './guide/profile' }],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/vuejs/vitepress' },
    ],
  },
  locales: {
    zh: {
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
  },
})
