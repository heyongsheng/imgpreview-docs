import { defineAdditionalConfig } from 'vitepress'
import {
  groupIconMdPlugin,
  groupIconVitePlugin,
} from 'vitepress-plugin-group-icons'

// https://vitepress.dev/reference/site-config
export default defineAdditionalConfig({
  lang: 'en',
  title: 'hevue-img-preview',
  description:
    'hevue-img-preview是一个基于 vue 编写的 vue 图片预览组件，已对vue2和vue3同时兼容，支持 pc 和手机端，支持单图和多图预览，支持缩略图，图片懒加载、自定义样式、自定义旋转角度等',
  themeConfig: {
    logo: '/logo-small.png',
    search: {
      options: {
        translations: {
          button: {
            buttonText: 'Search docs',
            buttonAriaLabel: 'Search documentation',
          },
          modal: {
            noResultsText: 'No results found',
            resetButtonTitle: 'Clear search query',
            footer: {
              selectText: 'Select',
              navigateText: 'Navigate',
              closeText: 'Close',
            },
          },
        },
      },
    },
    // https://vitepress.dev/reference/default-theme-config
    // nav: [{ text: 'Quick Start', link: './guide/profile' }],

    sidebar: {
      '/en/guide/': {
        base: '/en/guide/',
        items: [
          {
            text: 'Getting Started',
            items: [
              { text: 'Changelog', link: 'updateLog' },
              { text: 'Internationalization', link: 'internationalization' },
              { text: 'Overview', link: 'profile' },
              { text: 'Quick Start', link: 'getting-started' },
            ],
          },
          {
            text: 'Configuration',
            items: [
              { text: 'Overview', link: 'options' },
              { text: 'Multiple Images Preview', link: 'multiple' },
              { text: 'Control Bar', link: 'controlBar' },
              { text: 'Appearance & Animations', link: 'customStyle' },
              { text: 'Close Event', link: 'closeFn' },
              { text: 'Image Switch Event', link: 'changeFn' },
            ],
          },
          {
            text: 'Support & Feedback',
            items: [{ text: 'Contact Us', link: 'help' }],
          },
        ],
      },
    },
    docFooter: {
      prev: 'Previous',
      next: 'Next',
    },

    outline: {
      label: 'On This Page',
    },

    lastUpdated: {
      text: 'Last updated',
    },

    notFound: {
      title: 'Page Not Found',
      quote:
        "But if you don't change direction, you may end up where you're heading.",
      linkLabel: 'Go Home',
      linkText: 'Take me back to home',
    },
    editLink: {
      pattern:
        'https://github.com/heyongsheng/imgpreview-docs/tree/master/:path',
      text: 'Edit this page on GitHub',
    },

    langMenuLabel: 'Languages',
    returnToTopLabel: 'Back to top',
    sidebarMenuLabel: 'Menu',
    darkModeSwitchLabel: 'Theme',
    lightModeSwitchTitle: 'Switch to light mode',
    darkModeSwitchTitle: 'Switch to dark mode',
    skipToContentLabel: 'Skip to content',
  },
})
