function init() {
  // 由于hexo分页不支持，手工美化
  var $nav = document.querySelector('#page-nav')
  if ($nav && !document.querySelector('#page-nav .extend.prev')) {
    $nav.innerHTML = '<a class="extend prev disabled" rel="prev">&laquo; Prev</a>' + $nav.innerHTML
  }
  if ($nav && !document.querySelector('#page-nav .extend.next')) {
    $nav.innerHTML = $nav.innerHTML + '<a class="extend next disabled" rel="next">Next &raquo;</a>'
  }

  // 文章链接新窗口打开
  if (yiliaConfig && yiliaConfig.open_in_new) {
    let $a = document.querySelectorAll(('.article-entry a:not(.article-more-a)'))
    $a.forEach(($em) => {
      let target = $em.getAttribute('target');
      if (!target || target === '') {
        $em.setAttribute('target', '_blank');
      }
    })
  }
  // 目录序号
  if (yiliaConfig && yiliaConfig.toc_hide_index) {
    let $a = document.querySelectorAll(('.toc-number'))
    $a.forEach(($em) => {
      $em.style.display = 'none';
    })
  }

  // about me 转义html
  // var $aboutme = document.querySelector('#aboutme')
  // if ($aboutme && $aboutme.length !== 0) {
  //   $aboutme.innerHTML = $aboutme.innerText
  // }

  // 初始化data-img属性值(实现悬停元素预览图片效果)
  /* document.querySelectorAll("a").forEach($a => {
    console.log($a.href);
    if (isImageType($a.href)) {
      $a.setAttribute("data-img", $a.href)
    }
  }); */

}

// 判断字符串是否是图片格式类型
function isImageType(typeStr) {
  return /\.(gif|jpg|jpeg|png)$/i.test(typeStr);
}

module.exports = {
  init: init
}
