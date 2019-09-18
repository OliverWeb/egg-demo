'use strict';

const Controller = require('egg').Controller;

class AppController extends Controller {
  async checkVersion() {
    const { ctx } = this;
    ctx.body = {
      code: 600,
      data: {
        appVersion: '1.1.3',
        url: 'http://47.104.88.119:7004/public/camsapp/app-release.apk',
      },
    };
  }
}

module.exports = AppController;
