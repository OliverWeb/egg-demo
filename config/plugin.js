'use strict';

// /** @type Egg.EggPlugin */
// module.exports = {
//   // had enabled by egg
//   // static: {
//   //   enable: true,
//   // }
// };
exports.ejs = {
  enable: true,
  package: 'egg-view-ejs',
};
exports.nunjucks = {
  enable: true,
  package: 'egg-view-nunjucks',
};
// 数据库
exports.mongoose = {
  enable: true,
  package: 'egg-mongoose',
};
exports.swaggerdoc = {
  enable: true,
  package: 'egg-swagger-doc',
};
exports.cors = {
  enable: true,
  package: 'egg-cors',
};
