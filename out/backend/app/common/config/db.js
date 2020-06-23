'use strict';
/**
 * db config
 * @type {Object}
 */

exports.__esModule = true;
exports.default = {
  type: 'mysql',
  adapter: {
    mysql: {
      host: 'rm-2zeu50a0e6dg2i482ao.mysql.rds.aliyuncs.com',
      port: '3306',
      database: 'diary',
      user: 'dyl_root',
      password: 'dyl123456@',
      prefix: '',
      encoding: 'utf8'
    },
    mongo: {}
  }
};