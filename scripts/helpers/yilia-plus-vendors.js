/* global hexo */
'use strict';

/** 自定义静态资源链接生成 */
hexo.extend.helper.register('yilia_plus_vendors', function (url) {
  if (!!url && url.startsWith('//')) return url;
  return this.url_for(`${url}`);
});

/** 自定义网站链接生成 */
hexo.extend.helper.register('yilia_plus_full_url', function (url) {
  if (!!url && url.startsWith('//')) return url;
  // 项目访问上下文路径
  var blogUrl = hexo.config.url || '/';
  blogUrl = blogUrl.endsWith("/") ? blogUrl : blogUrl + '/';
  let fullUrl = blogUrl + url.replace(/(\\|\/){2,}/g, '/');
  // .replace(/(\\|\/){2,}/g, '/').replace(/((ht|f)tp\:(\\|\/)+)/ig, 'http://')
  return fullUrl;
});
