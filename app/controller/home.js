'use strict';

const Controller = require('egg').Controller;

class HomeController extends Controller {
  async index() {
    // const { ctx } = this;
    // ctx.body = 'hi, egg';
    await this.ctx.render('index/home.nj', {
      userName: 'nunjucks',
    });
  }
  async uniapp() {
    // const { ctx } = this;
    // ctx.body = 'hi, egg';
    await this.ctx.render('uniapp/index.html', {});
  }
  async test() {
    const { ctx } = this;
    ctx.body = { name: 'zhanlge' };
  }
}

module.exports = HomeController;
