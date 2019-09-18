'use strict';
/*
* 权限管理
*
* */
const Controller = require('egg').Controller;

class AccessController extends Controller {
  async index() {
    // 自己查自己
    // var result=await this.ctx.model.Access.find({});
    // console.log(result);
    // 1、在access表中找出  module_id=0的数据        管理员管理 _id    权限管理 _id    角色管理  (模块)
    // 2、让access表和access表关联    条件：找出access表中  module_id等于_id的数据
    const result = await this.ctx.model.Access.aggregate([
      {
        $lookup: {
          from: 'access',
          foreignField: 'module_id',
          localField: '_id',
          as: 'items',
        },
      },
      {
        $match: {
          module_id: '0',
        },
      },

    ]);


    console.log(result);
    this.ctx.body = '权限里列表';
  }

  async add() {
    const addResult = this.ctx.request.body;
    const module_id = addResult.module_id;
    // 菜单  或者操作
    if (module_id && module_id !== '0') {
      addResult.module_id = this.app.mongoose.Types.ObjectId(module_id); // 调用mongoose里面的方法把字符串转换成ObjectId
    }
    const access = new this.ctx.model.Access(addResult);
    access.save();
    this.ctx.body = '权限增加成功';
  }

  async getModule() {
    // 获取模块列表
    const result = await this.ctx.model.Access.find({ module_id: '0' });
    this.ctx.body = result;
  }

  async edit() {
    const id = this.ctx.request.query.id;
    // 获取编辑的数据
    const accessResult = await this.ctx.model.Access.find({ _id: id });
    const result = await this.ctx.model.Access.find({ module_id: '0' });
    await this.ctx.render('admin/access/edit', {
      list: accessResult[0],
      moduleList: result,
    });
    this.ctx.body = '权限里编辑';
  }

  async doEdit() {
    console.log(this.ctx.request.body);

    /*
    {


      id: '5b8e4422b3cc641f4894d7bc',
      _csrf: '8F3tGQd8-w1HtBpsyUbnBSQY5Up7OOqHXYSY',


      module_name: '权限管理111',
      type: '3',
      action_name: '增加权限1',
      url: '/admin/access/add',
      module_id: '5b8e3836f71aad20249c2f98',
      sort: '100',
      description: '增加权限---操作1111' }
    */
    const updateResult = this.ctx.request.body;
    const id = updateResult.id;
    const module_id = updateResult.module_id;
    // 菜单  或者操作
    if (module_id !== 0) {
      updateResult.module_id = this.app.mongoose.Types.ObjectId(module_id); // 调用mongoose里面的方法把字符串转换成ObjectId
    }
    const result = await this.ctx.model.Access.updateOne({ _id: id }, updateResult);
    this.ctx.body = result;
  }
}

module.exports = AccessController;
