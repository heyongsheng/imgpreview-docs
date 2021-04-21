/*
 * @Author: 贺永胜
 * @Date: 2021-04-21 16:49:48
 * @email: 1378431028@qq.com
 * @LastEditors: 贺永胜
 * @LastEditTime: 2021-04-21 17:58:47
 * @Description: file content
 */
module.exports = {
  title: 'hevue-img-preview',
  description: 'Just playing around',
  themeConfig: {
    nav: [{
        text: '测试',
        link: '/test'
      }
    ],
    sidebar: {
      '/': [
        "/",
        ['/test', '测试']
      ]
    },
    sidebarDepth: 2
  }
}
