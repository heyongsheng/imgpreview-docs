/*
 * @Author: 贺永胜
 * @Date: 2021-04-21 16:49:48
 * @email: 1378431028@qq.com
 * @LastEditors: 贺永胜
 * @LastEditTime: 2021-04-22 17:50:33
 * @Description: file content
 */
module.exports = {
  title: 'hevue-img-preview',
  description: 'Just playing around',
  themeConfig: {
    nav: [{
      text: '测试',
      link: '/test'
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
          ['options', '配置项'],
          ['onePicture', '单图预览'],
          ['morePicture', '多图预览']
        ]
      }]
    },
    sidebarDepth: 2,
    lastUpdated: '最后更新日期'
  }
}
