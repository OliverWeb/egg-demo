'use strict';
const url = require('url');

module.exports = options => {
  return async function adminauth(ctx, next) {
    /*
     1、用户没有登录跳转到登录页面
     2、只有登录以后才可以访问后台管理系统
    */
    // csrf全局变量
    ctx.state.csrf = ctx.csrf;
    // /admin/verify?mt=0.7466881301614958  转换成  /admin/verify
    const pathname = url.parse(ctx.request.url).pathname;
    // 已经登录
    if (ctx.session.userinfo) {
      // 如果存在usrInfo,设置全局userInfo
      ctx.state.userinfo = ctx.csrf.userinfo
      await next();
    } else {
      // 未登录
      // 排除不需要做权限判断的页面  /admin/verify?mt=0.7466881301614958
      // 白名单： 登录页，登录接口，验证码
      await next();
      // if (pathname === '/admin/login' || pathname === '/admin/doLogin' ||
      //   pathname === '/admin/verify') {
      //   await next();
      // } else {
      //   ctx.body = '当前未登录';
      //   // ctx.redirect('/admin/login');
      // }
    }

  };
};
