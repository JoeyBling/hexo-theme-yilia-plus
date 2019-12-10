'use strict';
const config = require('../../package.json');
const defaultConfig = require('../default_config');
// 自定义控制台打印函数
const yilia_plus_log = require('../yilia_plus_log');

function hexoMetaGeneratorInject(data) {
  /* /i表示不区分大小写 */
  if (!defaultConfig.meta_generator || !data ||
    data.match(/<meta\s+name=['|"]?generator['|"]?/i)) {
    return data;
  }
  /* if (data.match(/<meta\s+name=['|"]?description['|"]?/i)) {
    yilia_plus_log("匹配meta `description`成功");
  } */
  const hexoGeneratorTag = `\n  <meta name="generator" content="` + config.name + `">`;

  return data.replace('</title>', '</title>' + hexoGeneratorTag);
}

module.exports = hexoMetaGeneratorInject;
