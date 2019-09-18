'use strict'
module.exports = app => {
  const mongoose = app.mongoose;
  const Schema = mongoose.Schema;
  const d = new Date();
  const RoleAccessSchema = new Schema({
    access_id: { type: Schema.Types.ObjectId },
    role_id: { type: Schema.Types.ObjectId },
    add_time: {
      type: Number,
      default: d.getTime(),
    },
  });
  return mongoose.model('RoleAccess', RoleAccessSchema, 'role_access');
}
