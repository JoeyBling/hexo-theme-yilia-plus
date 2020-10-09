/* global hexo */
'use strict';
// 自定义控制台打印函数
const yilia_plus_log = require('../yilia_plus_log');

/** 自定义静态资源链接生成 */
hexo.extend.helper.register('yilia_plus_vendors', function (url) {
  if (!!url && url.startsWith('//')) return url;
  return this.url_for(`${url}`);
});

/** 自定义网站链接生成 */
hexo.extend.helper.register('yilia_plus_full_url', function (url) {
  yilia_plus_log("params url ===> " + url);
  if (!url || url.startsWith('//')) return url;
  // 项目访问上下文路径
  let blogUrl = hexo.config.url || '/';
  if (!blogUrl.endsWith(hexo.config.root)) {
    blogUrl = blogUrl + "/" + hexo.config.root
  }
  blogUrl = blogUrl.endsWith("/") ? blogUrl : blogUrl + '/';
  let fullUrl = (blogUrl + url).replace(/(\\|\/){2,}/g, '/')
    .replace(/((ht|f)tp\:(\\|\/)+)/ig, 'http://')
    .replace(/((ht|f)tps\:(\\|\/)+)/ig, 'https://');
  // .replace(/(\\|\/){2,}/g, '/').replace(/((ht|f)tp\:(\\|\/)+)/ig, 'http://')
  yilia_plus_log("yilia_plus_full_url finish ===> " + fullUrl);
  return fullUrl;
});
