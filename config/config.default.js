/* eslint valid-jsdoc: "off" */

'use strict'
const path = require('path')
/**
 * @param {Egg.EggAppInfo} appInfo app info
 */
module.exports = appInfo => {
  /**
   * built-in config
   * @type {Egg.EggAppConfig}
   **/
  const config = exports = {}

  // use for cookie sign key, should change to your own and keep security
  config.keys = appInfo.name + '_1565274859179_5899'
  config.cluster = {
    listen: {
      path: '',
      port: 7004,
      hostname: '0.0.0.0',
    },
  }
  /*
  * 设置session
  * */
  config.session = {
    key: 'SESSION_ID',
    maxAge: 864000,
    httpOnly: true,
    encrypt: true,
    renew: true, //  延长会话有效期
  }
  // add your middleware config here
  // add your config here
  // config.middleware = [ 'adminauth' ]
  // config.adminauth = {
  //   match: '/admin',
  // }
  // 模板引擎
  config.view = {
    mapping: {
      '.html': 'ejs',
      '.nj': 'nunjucks',
    },
  }
  // 安全
  // config.security = {
  //   csrf: {
  //     queryName: '_csrf', // 通过 query 传递 CSRF token 的默认字段为 _csrf
  //     bodyName: '_csrf', // 通过 body 传递 CSRF token 的默认字段为 _csrf
  //     headerName: 'x-csrf-token', // 通过 header 传递 CSRF token 的默认字段为 x-csrf-token
  //   },
  // }
  config.swaggerdoc = {
    dirScanner: './app/controller',
    apiInfo: {
      title: 'egg-example-api',
      description: 'example for swaggerdoc',
      version: '1.0.0',
    },
    schemes: [ 'http' ],
    enable: true,
    routerMap: true,
  }

  // 配置mongoose连接mongodb数据库
  /*  exports.mongoose = {
    client: {
      url: 'mongodb://127.0.0.1/eggxiaomi',
      options: {},
    },
  };*/
  // // 配置静态文件 static
  exports.static = {
    prefix: '/public/',
    dir: path.join(appInfo.baseDir, '/app/public'),
  }
  // add your user config here
  const userConfig = {
    // myAppName: 'egg',
  }
  // config.multipart= {
  //   whitelist: [ '.png' ], // 覆盖整个白名单，只允许上传 '.png' 格式
  // }
  /* =================== 跨域 start=================== */
  // config.security = {
  //   csrf: {
  //     enable: false,
  //     ignoreJSON: true,
  //   },
  //   domainWhiteList: [
  //     'http://127.0.0.1:8888',
  //     'http://localhost:9529',
  //     'http://10.100.172.6:9107',
  //     'http://localhost:9527',
  //     'http://localhost:9526',
  //     'http://localhost:8080',
  //   ],
  // };
  config.cors = {
    // origin: 'http://localhost:9526',
    origin: '*',
    // allowMethods: 'GET,HEAD,PUT,POST,DELETE,PATCH',
    credentials: true,
  };
  return {
    ...config,
    ...userConfig,
  }
}
// 同源策略 https://segmentfault.com/q/1010000015791317
// https://blog.csdn.net/yanyang1116/article/details/78901600

// withCredentials的情况下，后端要设置Access-Control-Allow-Origin为你的源地址，例如http://localhost:8080，不能是*，而且还要设置header('Access-Control-Allow-Credentials: true');

