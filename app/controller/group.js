'use strict';

const Controller = require('egg').Controller;

/**
 * @controller group 组别接口
 */
class GroupController extends Controller {

  /**
   * @summary 新增小组
   * @description 新增小组，设置小组负责人
   * @router post /v1/groups
   * @request body createGroupRequest *body
   * @response 200 createGroupResponse 创建成功
   */
  async create() {
    const { ctx, service } = this;
    // 校验参数
    ctx.validate(ctx.rule.createGroupRequest);

    const req = ctx.request.body;

    ctx.body = await service.group.createGroup(req.groupName);

  }

  /**
   * @ignore
   */
  async nothing() {
    const { ctx } = this;
    ctx.body = 'nothing';
  }

}
module.exports = GroupController;
