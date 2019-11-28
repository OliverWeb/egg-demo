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
  async demo() {
    const { ctx } = this;
    ctx.body = {
      status: 200,
      result: {
        id: 0,
        name: '',
        code: '',
        isAdmin: false,
        permissions: [
          {
            text: '全部权限',
            value: 'all',
            selected: false,
            children: [
              {
                text: '用户管理',
                value: 'user',
                selected: false,
                children: [
                  {
                    text: '查看用户列表',
                    value: 'user.getAll',
                    selected: false,
                  },
                  {
                    text: '查看单个用户',
                    value: 'user.get',
                    selected: false,
                  },
                  {
                    text: '添加用户',
                    value: ' user.creat',
                    selected: false,
                  },
                  {
                    text: '修改用户',
                    value: 'user.update',
                    selected: false,
                  },
                  {
                    text: '修改用户',
                    value: 'user.delete',
                    selected: false,
                  },
                ],

              },
            ],
          },
        ],
      },
    }
  }
}

module.exports = HomeController;
