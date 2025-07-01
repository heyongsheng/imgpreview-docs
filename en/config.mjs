import { defineAdditionalConfig } from 'vitepress'
import {
  groupIconMdPlugin,
  groupIconVitePlugin,
} from 'vitepress-plugin-group-icons'

// https://vitepress.dev/reference/site-config
export default defineAdditionalConfig({
  lang: 'en',
  title: 'hevue-img-preview',
  description: 'A VitePress Site',
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

    socialLinks: [
      { icon: 'github', link: 'https://github.com/vuejs/vitepress' },
    ],
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
