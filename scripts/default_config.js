'use strict';

const config = require('../package.json');

module.exports = {
  themeName: config.name,
  log: {
    // 日志开关【生产环境请关闭】
    enable: false,
    color: "blue"
  },
  // 生成meta `generator`
  meta_generator: true
};
