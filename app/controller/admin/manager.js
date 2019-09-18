'use strict';
/*
* 管理员用户管理
* */
const Controller = require('egg').Controller;

class ManagerController extends Controller {
  async index() {
    // 查询管理员表并管理角色表，聚合查询
    const result = await this.ctx.model.Admin.aggregate([{
      $lookup: {
        from: 'role',
        foreignField: '_id',
        localField: 'role_id',
        as: 'role',
      },
    }])
    this.ctx.body = result;
  }

  async add() {
    // 5d51f2969fb0125d88a471b4
    const addResult = this.ctx.request.body;
    addResult.password = await this.service.tools.md5(addResult.password);
    // 判断当前用户是否存在
    const adminResult = await this.ctx.model.Admin.find({ username: addResult.username });
    if (adminResult.length > 0) {
      this.ctx.body = '此管理员已经存在';
    } else {
      const admin = new this.ctx.model.Admin(addResult);
      admin.save();
      this.ctx.body = '管理员里增加';
    }
  }
  async edit() {
    // console.log(this.ctx.request.body);
    const id = this.ctx.request.body.id;
    let password = this.ctx.request.body.password;
    const mobile = this.ctx.request.body.mobile;
    const email = this.ctx.request.body.email;
    const role_id = this.ctx.request.body.role_id;

    if (password) {
      // 修改密码
      password = await this.service.tools.md5(password);
      await this.ctx.model.Admin.updateOne({ _id: id }, {
        password,
        mobile,
        email,
        role_id,
      })
    } else {
      // 不修改密码
      await this.ctx.model.Admin.updateOne({ _id: id }, {
        mobile,
        email,
        role_id,
      })

    }
    this.ctx.body = '管理员里编辑成功';
  }
}

module.exports = ManagerController;
