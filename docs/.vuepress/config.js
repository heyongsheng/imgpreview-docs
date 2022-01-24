/*
 * @Author: 贺永胜
 * @Date: 2021-04-21 16:49:48
 * @email: 1378431028@qq.com
 * @LastEditors: 贺永胜
 * @LastEditTime: 2022-01-24 12:40:04
 * @Description: file content
 */
module.exports = {
  title: 'hevue-img-preview',
  description: '本组件是一个基于 vue 编写的 vue 图片预览组件，支持 pc 和手机端，支持单图和多图预览，仅传入一个图片地址，即可实现图片预览效果。手机端支持单指拖拽和双指缩放。页面各组件颜色均可可自定义，实现个性化设计，如果能帮上你，希望可以移步 GitHub ，或者码云 给个小星星，如果有任何使用意见或建议，也欢迎回复或者提交 issue',
  head: [
    ['script', {},
    `
    var _hmt = _hmt || [];
    (function() {
    var hm = document.createElement("script");
    hm.src = "https://hm.baidu.com/hm.js?14f7a4912d6da4ec11a2bce92d3ce7fd";
    var s = document.getElementsByTagName("script")[0];
    s.parentNode.insertBefore(hm, s);
    })();
      `
    ]
  ],
  themeConfig: {
    nav: [{
      text: '年兽大作战',
      link: 'https://heyongsheng.github.io/game/'
    }],
    sidebar: {
      '/zh/guide/': [{
        title: '快速上手',
        collapsable: false,
        children: [
          ['getting-started', '安装及使用']
        ]
      }, {
        title: '进阶',
        collapsable: false,
        children: [
          'options',
          'onePicture',
          'morePicture',
          'keyBoard',
          'clickMaskCLose',
          'theme',
          'control'
        ]
      }, 'support']
    },
    sidebarDepth: 2,
    repo: 'heyongsheng/hevue-img-preview',
    lastUpdated: '最后更新日期',
    evergreen: true
  }
}
