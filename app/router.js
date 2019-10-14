'use strict';

/**
 * @param {Egg.Application} app - egg application
 */

module.exports = app => {
  const { router, controller } = app;
  router.get('/', controller.home.index);
  router.get('/app', controller.home.uniapp);
  router.post('/test', controller.home.test);
  // ios 下载
  router.get('/app/download', controller.app.iosDownload);
  // app更新
  router.get('/app/checkVersion', controller.app.checkVersion);
  // router.get('/app/checkVersion', controller.home.uniapp);
  // 登录页
  router.get('/admin/login', controller.admin.login.index);
  router.post('/admin/doLogin', controller.admin.login.doLogin);
  router.get('/admin/loginOut', controller.admin.login.loginOut);

  // 验证码
  router.get('/admin/verify', controller.admin.base.verify);
  // 全局删除
  router.get('/admin/delete', controller.admin.base.delete);

  // 管理员
  router.get('/admin/manager', controller.admin.manager.index);
  router.post('/admin/manager/add', controller.admin.manager.add);
  router.post('/admin/manager/edit', controller.admin.manager.edit);
  router.post('/admin/role/auth', controller.admin.role.auth);
  router.post('/admin/role/doAuth', controller.admin.role.doAuth);
  // 角色管理
  router.get('/admin/role', controller.admin.role.index);
  router.post('/admin/role/add', controller.admin.role.add);
  router.post('/admin/role/edit', controller.admin.role.edit);
  router.post('/admin/role/edit', controller.admin.role.edit);
  // 权限管理
  router.get('/admin/access', controller.admin.access.index);
  router.post('/admin/access/add', controller.admin.access.add);
  router.post('/admin/access/edit', controller.admin.access.edit);


  router.get('/admin/focus', controller.admin.focus.index);

  router.get('/admin/focus/multi', controller.admin.focus.multi);

  router.post('/admin/focus/doSingleUpload', controller.admin.focus.doSingleUpload);

  router.post('/admin/focus/doMultiUpload', controller.admin.focus.doMultiUpload);
};
