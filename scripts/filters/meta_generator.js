'use strict';
const config = require('../../package.json');
const defaultConfig = require('../default_config');

function hexoMetaGeneratorInject(data) {
  /* /i表示不区分大小写 */
  if (!defaultConfig.meta_generator || !data ||
    data.match(/<meta\s+name=['|"]?generator['|"]?/i)) {
    return data;
  }

  const hexoGeneratorTag = `\n  <meta name="generator" content="` + config.name + `">`;

  return data.replace('</title>', '</title>' + hexoGeneratorTag);
}

module.exports = hexoMetaGeneratorInject;
