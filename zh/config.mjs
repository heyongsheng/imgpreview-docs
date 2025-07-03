import { defineAdditionalConfig } from 'vitepress'
import {
  groupIconMdPlugin,
  groupIconVitePlugin,
} from 'vitepress-plugin-group-icons'

// https://vitepress.dev/reference/site-config
export default defineAdditionalConfig({
  title: 'hevue-img-preview',
  description:
    'hevue-img-preview是一个基于 vue 编写的 vue 图片预览组件，已对vue2和vue3同时兼容，支持 pc 和手机端，支持单图和多图预览，支持缩略图，图片懒加载、自定义样式、自定义旋转角度等',
  themeConfig: {
    logo: '/logo-small.png',
    search: {
      provider: 'local',
      options: {
        locales: {
          zh: {
            translations: {
              button: {
                buttonText: '搜索文档',
                buttonAriaLabel: '搜索文档',
              },
              modal: {
                noResultsText: '无法找到相关结果',
                resetButtonTitle: '清除查询条件',
                footer: {
                  selectText: '选择',
                  navigateText: '切换',
                  closeText: '关闭',
                },
              },
            },
          },
        },
      },
    },
    // https://vitepress.dev/reference/default-theme-config
    // nav: [{ text: '快速开始', link: './guide/profile' }],

    sidebar: {
      '/zh/guide/': {
        base: '/zh/guide/',
        items: [
          {
            text: '开始',
            items: [
              { text: '更新日志', link: 'updateLog' },
              { text: '国际化', link: 'internationalization' },
              { text: '简介', link: 'profile' },
              { text: '快速上手', link: 'getting-started' },
            ],
          },
          {
            text: '配置项',
            items: [
              { text: '概览', link: 'options' },
              { text: '多图预览', link: 'multiple' },
              { text: '控制条', link: 'controlBar' },
              { text: '外观与动效', link: 'customStyle' },
              { text: '关闭事件', link: 'closeFn' },
              { text: '图片切换事件', link: 'changeFn' },
            ],
          },
          {
            text: '支持与反馈',
            items: [{ text: '联系我们', link: 'help' }],
          },
        ],
      },
    },

    docFooter: {
      prev: '上一页',
      next: '下一页',
    },

    outline: {
      label: '页面导航',
    },

    lastUpdated: {
      text: '最后更新于',
    },

    notFound: {
      title: '页面未找到',
      quote:
        '但如果你不改变方向，并且继续寻找，你可能最终会到达你所前往的地方。',
      linkLabel: '前往首页',
      linkText: '带我回首页',
    },
    editLink: {
      pattern:
        'https://github.com/heyongsheng/imgpreview-docs/tree/master/:path',
      text: '在 GitHub 上编辑此页面',
    },

    langMenuLabel: '多语言',
    returnToTopLabel: '回到顶部',
    sidebarMenuLabel: '菜单',
    darkModeSwitchLabel: '主题',
    lightModeSwitchTitle: '切换到浅色模式',
    darkModeSwitchTitle: '切换到深色模式',
    skipToContentLabel: '跳转到内容',
  },
})
