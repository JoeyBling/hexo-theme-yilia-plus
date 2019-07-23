hexo-theme-yilia-plus
================

&#160;&#160;&#160;&#160;此项目是根据[hexo-theme-yilia](https://github.com/litten/hexo-theme-yilia)主题做了一些优化和改动，写这个项目的初衷就是深入学习`Hexo`。使用`yilia`主题可以快速迁移到`yilia-plus`

#### [立即体验](#三开始使用)

> **欢迎使用和Star支持，如使用过程中碰到问题，可以提出Issue，我会尽力完善**

## 介绍
- 功能还很少，欢迎各位给我提意见和建议~
- **本项目源于：[https://github.com/litten/hexo-theme-yilia](https://github.com/litten/hexo-theme-yilia "https://github.com/litten/hexo-theme-yilia")。向作者表示深深的敬意。**

[yilia-plus](https://github.com/JoeyBling/hexo-theme-yilia-plus) 是为 [hexo](https://github.com/hexojs/hexo) 2.4+制作的主题。
崇尚简约优雅，以及极致的性能。 你可以点击 [我的博客](https://zhousiwei.gitee.io) 查看效果。

如果想体验手机浏览效果，可以扫一下二维码：

![](./images/qrcode.png)

----------

## 关于主题：
1. 崇尚简约
2. 追求移动端体验
3. 希望把加载速度做到极致（努力中）
4. 让大家把注意力放到内容上。这是本主题设计初衷
5. 主题不支持IE6，7，8。以后也不会

## 一、外观

#### **常规**

![常规](./images/web.png)

## 二、开发者

&#160;&#160;&#160;&#160;为了性能和开发工程化考虑，[yilia-plus](https://github.com/JoeyBling/hexo-theme-yilia-plus) 需要使用`webpack`进行构建生成。
如果您对主题有一些定制化的需求，请参考wiki[《yilia-plus源码目录结构及构建须知》](https://github.com/JoeyBling/hexo-theme-yilia-plus/wiki/yilia-plus%E6%BA%90%E7%A0%81%E7%9B%AE%E5%BD%95%E7%BB%93%E6%9E%84%E5%8F%8A%E6%9E%84%E5%BB%BA%E9%A1%BB%E7%9F%A5)

## 三、开始使用

#### 1、安装

```bash
cd ./themes/
git clone https://github.com/JoeyBling/hexo-theme-yilia-plus.git
mv hexo-theme-yilia-plus yilia-plus
```

#### 2、配置

修改hexo根目录下的 `_config.yml`  ➡️  `theme: yilia-plus`

#### 3、更新

```bash
cd themes/yilia-plus
git pull
```

## 四、配置

&#160;&#160;&#160;&#160;主题配置文件在主目录下的`_config.yml`，请根据自己需要修改使用。

> 完整配置例子，可以参考[yilia-plus博客备份](http://github.com/JoeyBling/yilia-plus-demo)

```yaml
# Header-菜单
menu:
  主页: /
  技术笔记: https://zhousiwei.gitee.io/ibooks/
  个人简历: https://zhousiwei.gitee.io/cv/
  Java: /tags/Java/
  Linux: /tags/Linux/

# SubNav-导航
subnav:
  github: "https://github.com/JoeyBling"
  gitee: "https://gitee.com/zhousiwei" # 码云
  jianshu: "https://www.jianshu.com/u/02cbf31a043a" #简书
  csdn: "https://blog.csdn.net/qq_30930805"
  #rss: "#"
  zhihu: "https://zhihu.com/people/joeybling"
  qq: "img/2434387555.jpg"
  weixin: "img/weixin_.png"
  weibo: "http://weibo.com/jayinfo"
  #douban: "#"
  #segmentfault: "#"
  #bilibili: "#"
  #acfun: "#"
  #mail: "mailto:litten225@qq.com"
  #facebook: "#"
  #google: "#"
  #twitter: "#"
  #linkedin: "#"

# RSS订阅(关于如何配置启用:https://www.jianshu.com/p/2aaac7a19736)
rss: /atom.xml

# 是否需要修改 root 路径
# 如果您的网站存放在子目录中，例如 http://yoursite.com/blog，
# 请将您的 url 设为 http://yoursite.com/blog 并把 / 设为 /blog/。
root: /

# Content

# 文章太长，截断按钮文字
excerpt_link: more
# 文章卡片右下角常驻链接，不需要请设置为false
show_all_link: '展开全文'
# 数学公式
mathjax: false
# 是否在新窗口打开链接
open_in_new: true

# 打赏
# 打赏type设定：0-关闭打赏； 1-文章对应的md文件里有reward:true属性，才有打赏； 2-所有文章均有打赏
reward_type: 2
# 打赏wording
reward_wording: '谢谢你请我吃糖果'
# 支付宝二维码图片地址，跟你设置头像的方式一样。比如：/assets/img/alipay.jpg
alipay: /img/alipay.jpg
# 微信二维码图片地址
weixin: /img/weixin.png

# 目录
# 目录设定：0-不显示目录； 1-文章对应的md文件里有toc:true属性，才有目录； 2-所有文章均显示目录
toc: 1
# 根据自己的习惯来设置，如果你的目录标题习惯有标号，置为true即可隐藏hexo重复的序号；否则置为false
toc_hide_index: true
# 目录为空时的提示
toc_empty_wording: '目录，不存在的…'

# 是否有快速回到顶部的按钮
top: true

# Miscellaneous
# 百度统计
baidu_analytics: '11a1b5a8f55434714171a862b19c459c'
google_analytics: ''

# 网站图标
favicon: /favicon.ico

# 你的头像url
avatar: /img/head.jpg

# 是否开启分享
share_jia: true

# 评论：1、畅言；2、Disqus；3、Gitment
# 不需要使用某项，直接设置值为false，或注释掉
# 具体请参考wiki：https://github.com/JoeyBling/hexo-theme-yilia-plus/wiki

# 1、畅言
changyan_appid: false
changyan_conf: false

# 2、Disqus 在hexo根目录的config里也有disqus_shortname字段，优先使用yilia的
disqus: false

# 3、Gitment----码云
#gitment_owner: false      #你的 GitHub ID
#gitment_owner: JoeyBling      #你的 GitHub ID
#gitment_repo: 'JoeyBling.github.io'          #存储评论的 repo
giteement:
  enable: true
  # 是否使用官方js(可以提升访问速度)
  remote: false
  redirect_uri: https://zhousiwei.gitee.io/
  # oauth_uri: https://zhousiwei.gitee.io/
  # 不能更改
  oauth_uri: https://cors-anywhere.herokuapp.com/https://gitee.com/oauth/token
  giteeID: zhousiwei
  # 存储评论的 repo
  repo: zhousiwei
  gitment_oauth:
    client_id: ''           #client ID
    client_secret: ''       #client secret

# 是否开启访问量统计功能(不蒜子)
busuanzi:
  enable: true

# 网易云音乐插件
music:
  enable: true
  #id: 1332647902  # 网易云分享的ID
  autoplay: true  # 是否开启自动播放

# 页面点击小红心
clicklove:
  enable: true

# GitHub Ribbons(https://github.blog/2008-12-19-github-ribbons/)
github:
  url: https://github.com/JoeyBling/

# 页脚 Litten
pagefooter:
  litten: 码云:<a href="https://gitee.com/zhousiwei" target="_blank">思伟</a>

# 样式定制 - 一般不需要修改，除非有很强的定制欲望…
style:
  # 头像上面的背景颜色
  # header: '#D3D1DC'
  header: '#4d4d4d'
  # 右滑板块背景
  slider: 'linear-gradient(200deg,#a0cfe4,#e8c37e)'

# slider的设置
slider:
  # 是否默认展开tags板块
  showTags: false

# 智能菜单
# 如不需要，将该对应项置为false
# 比如
#smart_menu:
#  friends: false
smart_menu:
  innerArchive: '所有文章'
  friends: '友链'
  aboutme: '关于我'

# 友情链接
friends:
  技术笔记: https://zhousiwei.gitee.io/ibooks/
  GitHub: https://github.com/JoeyBling
  码云: https://gitee.com/zhousiwei
  简书: https://www.jianshu.com/u/02cbf31a043a
  CSDN: https://blog.csdn.net/qq_30930805
  知乎: https://www.zhihu.com/people/joeybling
  微博: http://weibo.com/jayinfo

# 关于我
aboutme: 主要涉及技术：<br>Java后端开发、聚合支付、<br>公众号开发、开源爱好者、Linux<br><br>联系QQ:2434387555<br><br>很惭愧<br><br>只做了一点微小的工作<br>谢谢大家
```

## 捐赠
&#160;&#160;&#160;&#160;**如果感觉对您有帮助，请作者喝杯咖啡吧，请注明您的名字或者昵称，方便作者感谢o(*￣︶￣*)o**

| 微信 | 支付宝 |
| :---: | :---: |
| ![](./images/weixin.png) | ![](./images/alipay.jpeg) |

## License

[Apache License](./LICENSE)