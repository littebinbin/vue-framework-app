// 应用具体配置
export default {
  appName: 'demo',
  httpHeaders: {
    'Content-Type': 'application/json'
  },
  // 是否需要一开始就校验权限
  needGetUserInfoFirst: false,
  // session有效时间 ms
  sessionDuration: 30 * 60 * 1000,
  // 每个路由默认的权限校验状态
  defaultAuth: false,
  // 首页路由名称, 用于处理遭遇各种异常路由时的最终跳转路由
  indexPageName: 'index',
  // 登录页路由名称
  loginPageName: 'login',
  // 微信
  wx: {
    appId: 'wx7b3e1075c1ff53d3',
    secret: 'dc310e4a36b261549f24dcf1cf302987'
  },
  baseURL: {
    admin: '/xcip-admin-int-war', // 管理后台接口
    sys: '/xcip-prod-int-war' // 系统接口
  },
  apiPath: {
    development: '', // 开发
    test: 'http://www.baidu.com', // 测试环境
    production: 'http://www.bilibili.com' // 生产环境
  },
  accessToken: 'accessToken',
  // req切面配置
  requestInterceptor (req) {
    return req
  },
  // response切面配置
  responseInterceptor (res) {
    // 可以统一处理一些http层面的异常
    // 业务层面一些通用的异常可以在store/utils.js中处理，其余单独请求的异常请直接在接口api调用时catch就行
    return res.data
  },
  // 渲染错误处理
  errorHandler (e) {
    console.error('捕获到了错误：' + e)
  }
}
