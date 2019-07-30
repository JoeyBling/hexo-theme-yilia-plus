hexo-theme-yilia-plus
================

![star](https://img.shields.io/github/stars/JoeyBling/hexo-theme-yilia-plus "star")
![fork](https://img.shields.io/github/forks/JoeyBling/hexo-theme-yilia-plus "fork")
![GitHub last commit](https://img.shields.io/github/last-commit/JoeyBling/hexo-theme-yilia-plus.svg?label=commits "GitHub last commit")
![issues](https://img.shields.io/github/issues/JoeyBling/hexo-theme-yilia-plus "issues")
[![Author](https://img.shields.io/badge/Author-JoeyBling-red.svg "Author")](https://zhousiwei.gitee.io "Author")
[![LICENSE](https://img.shields.io/github/license/JoeyBling/hexo-theme-yilia-plus "LICENSE")](./LICENSE "LICENSE")
![hexo](https://img.shields.io/badge/hexo-blue.svg "hexo")



&#160;&#160;&#160;&#160;此项目是根据[hexo-theme-yilia](https://github.com/litten/hexo-theme-yilia)主题做了一些优化和改动，写这个项目的初衷就是深入学习`Hexo`。使用`yilia`主题可以快速迁移到`yilia-plus`

#### [立即体验](#三开始使用)

> **欢迎使用和Star支持，如使用过程中碰到问题，可以提出Issue，我会尽力完善**

> **同时也欢迎相同爱好者加入一起维护此项目**

## 关于[hexo-theme-yilia-plus](https://github.com/JoeyBling/hexo-theme-yilia-plus)主题在原基础上做了以下功能升级
1. 手机端头像添加主页跳转链接
2. 集成不蒜子访问量统计功能
3. 网易云音乐插件
4. 页面点击小红心效果
5. 增加了多个SubNav导航图标展示
6. 添加GitHub Ribbons(Fork me)
7. 页脚 Litten自定义
8. 添加版权声明
9. 添加百度站长平台主动推送
10. 集成 gitment 评论 ➡️ [https://github.com/JoeyBling/yilia-plus-demo](https://github.com/JoeyBling/yilia-plus-demo)
11. [集成码云评论](https://gitee.com/zhousiwei/giteement) ➡️ [https://gitee.com/zhousiwei/yilia-plus-demo](https://gitee.com/zhousiwei/yilia-plus-demo)
12. 添加网站成立年份
13. 页面加载进度条
14. 添加苹果图标
15. 标签页标题切换功能
16. 添加字数统计功能
17. 其他样式轻微调优、社交图标优化

> 如果有小伙伴有新功能的意见或者改进欢迎给我提意见和建议~


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

#### 评论支持
- [Gitment](https://github.com/imsun/gitment)
- [基于码云的评论系统](https://gitee.com/zhousiwei/giteement)
- DISQUS
- 搜狐畅言 

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
  日记本: /tags/日记本/

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
  mail: "mailto:zhousiwei0911@qq.com"
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
baidu_analytics: ''
google_analytics: ''

# 网站图标
favicon: /favicon.ico

# 你的头像url
avatar: /img/head.jpg

# 是否开启分享
share_jia: true

# 评论：1、畅言；2、Disqus；3、Gitment；4、Giteement
# 不需要使用某项，直接设置值为false，或注释掉
# 具体请参考wiki：https://github.com/JoeyBling/hexo-theme-yilia-plus/wiki

# 1、畅言
changyan_appid: false
changyan_conf: false

# 2、Disqus 在hexo根目录的config里也有disqus_shortname字段，优先使用yilia-plus的
disqus: false

# 3、Gitment----基于GitHub的评论系统(关闭请设置gitment_owner为false)
# 关于如何集成:https://www.jianshu.com/p/ac7658cc912f
#gitment_owner: false      #你的 GitHub ID
gitment_owner: JoeyBling      #你的 GitHub ID
gitment_remote: false  # 是否使用官方js(false可以提升访问速度)
gitment_repo: 'yilia-plus-demo'          #存储评论的 repo
gitment_oauth:
  client_id: '1062039060f4021e8ae2'           #client ID
  client_secret: '6ffbfcbd49ef5b123d524664657145a662179f34'       #client secret

# 4、Giteement----【国内用户建议使用这个，相对比较快】
# 关于如何集成:https://www.jianshu.com/p/f5c4633524c7
# 基于码云的评论系统(https://gitee.com/zhousiwei/giteement)
giteement:
  enable: false  # 是否启用码云评论系统
  # 是否使用官方js(false可以提升访问速度)
  remote: false
  redirect_uri: https://zhousiwei.gitee.io/   # 应用回调地址(请和配置的第三方应用保持一致)
  # oauth_uri: https://zhousiwei.gitee.io/
  # 不能更改(网上开源项目https://github.com/Rob--W/cors-anywhere作者提供的专门用来跨域服务器的配置)
  oauth_uri: https://cors-anywhere.herokuapp.com/https://gitee.com/oauth/token
  giteeID: zhousiwei  # 你的码云账号英文名
  # 存储评论的 repo
  repo: zhousiwei
  gitment_oauth:
    client_id: ''           #client ID
    client_secret: ''       #client secret

# 访问量统计功能(不蒜子)
busuanzi:
  enable: true
  site_visit: true  # 站点访问量显示
  article_visit: true  # 文章访问量显示

# 网易云音乐插件
music:
  enable: false
  #id: 1332647902  # 网易云分享的ID
  autoplay: true  # 是否开启自动播放

# 页面点击小红心
clicklove:
  enable: true

# GitHub Ribbons(https://github.blog/2008-12-19-github-ribbons/)
github:
  url: https://github.com/JoeyBling/hexo-theme-yilia-plus

# 页脚 Litten
pagefooter:
  litten: GitHub:<a href="https://github.com/JoeyBling/hexo-theme-yilia-plus" target="_blank">hexo-theme-yilia-plus</a>

# 开启百度站长平台主动推送(https://ziyuan.baidu.com/linksubmit/index)
baidu_push: false

# 版权声明
# 版权声明type设定：0-关闭版权声明； 1-文章对应的md文件里有copyright: true属性，才有版权声明； 2-所有文章均有版权声明
copyright_type: 2

# 网站成立年份(默认为 2018，若填入年份小于当前年份，则显示为 2018-2019 类似的格式)
since: 2018

# Progress Bar | 页面加载进度条
# Demo: http://github.hubspot.com/pace/docs/welcome/
# type: barber-shop|big-counter|bounce|center-atom|center-circle|
#       center-radar|center-simple|corner-indicator|flash|flat-top|
#       loading-bar|mac-osx|minimal
# color: black|blue|green|orange|pink|purple|red|silver|white|yellow|
progressBar:
  enable: false
  type: 'minimal'  # Keep Quotes | 保留引号避免出错(某些type会导致样式重叠排版错误)
  color: blue

# Apple Touch icon 苹果图标(关闭请设置为false)
apple_touch_icon: '/apple-touch-icon-180x180.png'

# Tab Title Change | 标签页标题切换
tab_title_change:
  enable: true
  left_tab_title: '(つェ⊂) 我藏好了哦~ '
  return_tab_title: '(*´∇｀*) 被你发现啦~ '

# 是否开启字数统计(关闭请设置enable为false)
# 必须安装`hexo-wordcount`插件，在根目录执行`npm i hexo-wordcount --save`
# 也可以单独在md文件里Front-matter设置`no_word_count: true`属性，来自定义关闭字数统计
word_count:
  enable: true
  # 只在文章详情显示(不在首页显示)
  only_article_visit: true

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

### Hexo博客优化
- [Hexo博客集成码云评论系统](https://www.jianshu.com/p/f5c4633524c7)
- [Hexo博客集成Gitment评论](https://www.jianshu.com/p/ac7658cc912f)
- [Hexo 编译文档时 JS或HTML 混乱解决方案](https://www.jianshu.com/p/2a8b850d3f92)
- [Hexo博客配置RSS插件](https://www.jianshu.com/p/2aaac7a19736)
- [Hexo博客使用gulp压缩静态资源](https://www.jianshu.com/p/1123c89c491a)
- [新增Hexo博客文章置顶功能](https://www.jianshu.com/p/a0afac70afc8)
- [Hexo博客添加helper-live2d动态模型插件](https://www.jianshu.com/p/a7f4a42e4b49)
- [Hexo博客添加访问量统计](https://www.jianshu.com/p/c9f83d5b893a)
- [Hexo博客yilia主题添加背景音乐 （网易云音乐）](https://www.jianshu.com/p/f3fe5cb74d32)
- [使用Hexo+GitHub搭建免费个人博客](https://www.jianshu.com/p/efebead840b2)

## 捐赠
&#160;&#160;&#160;&#160;**如果感觉对您有帮助，请作者喝杯咖啡吧，请注明您的名字或者昵称，方便作者感谢o(*￣︶￣*)o**

| 微信 | 支付宝 |
| :---: | :---: |
| ![](./images/weixin.png) | ![](./images/alipay.jpeg) |

## License

[![LICENSE](https://img.shields.io/github/license/JoeyBling/hexo-theme-yilia-plus "LICENSE")](./LICENSE "LICENSE")
