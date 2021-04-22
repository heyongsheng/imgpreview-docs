/*
 * @Author: 贺永胜
 * @Date: 2021-04-22 15:30:17
 * @email: 1378431028@qq.com
 * @LastEditors: 贺永胜
 * @LastEditTime: 2021-04-22 15:33:46
 * @Description: file content
 */
import hevueImgPreview from 'hevue-img-preview'
export default ({
  Vue, // VuePress 正在使用的 Vue 构造函数
  options, // 附加到根实例的一些选项
  router, // 当前应用的路由实例
  siteData, // 站点元数据
  isServer // 当前应用配置是处于 服务端渲染 或 客户端
}) => {
  // ...做一些其他的应用级别的优化
  Vue.use(hevueImgPreview)
}
