/* global hexo */

'use strict';

// Hexo事件:https://hexo.io/zh-cn/api/events

/** 在静态文件生成前发布 */
hexo.on('generateBefore', () => {
  // Merge config.
  //require('./../filters/index')(hexo);
});
