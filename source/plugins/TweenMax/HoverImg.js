/**
 * HoverImg.js
 * http://www.codrops.com
 *
 * Licensed under the MIT license.
 * http://www.opensource.org/licenses/mit-license.php
 * 
 * Copyright 2019, JoeyBling
 */
// from http://www.quirksmode.org/js/events_properties.html#position
const getMousePos = function (e) {
  let posx = 0;
  let posy = 0;
  if (!e) e = window.event;
  if (e.pageX || e.pageY) {
    posx = e.pageX;
    posy = e.pageY;
  } else if (e.clientX || e.clientY) {
    posx = e.clientX + document.body.scrollLeft + document.documentElement.scrollLeft;
    posy = e.clientY + document.body.scrollTop + document.documentElement.scrollTop;
  }
  return {
    x: posx,
    y: posy
  }
}

// Generate a random float.
const getRandomFloat = function (min, max) {
  (Math.random() * (max - min) + min).toFixed(2)
};

/**
 * One class per effect. 
 * Lots of code is repeated, so that single effects can be easily used. 
 */

// Effect 1
class HoverImgFx1 {
  constructor(el) {
    this.DOM = {
      el: el
    };
    this.DOM.reveal = document.createElement('div');
    this.DOM.reveal.className = 'hover-reveal';
    this.DOM.reveal.style.overflow = 'hidden';
    this.DOM.reveal.innerHTML = `<div class="hover-reveal__inner"><div class="hover-reveal__img" style="background-image:url(${this.DOM.el.dataset.img})"></div></div>`;
    this.DOM.el.appendChild(this.DOM.reveal);
    this.DOM.revealInner = this.DOM.reveal.querySelector('.hover-reveal__inner');
    this.DOM.revealInner.style.overflow = 'hidden';
    this.DOM.revealImg = this.DOM.revealInner.querySelector('.hover-reveal__img');
    this.DOM.letters = Array.from(this.DOM.el.querySelectorAll('span'));
    this.initEvents();
  }
  initEvents() {
    this.positionElement = (ev) => {
      const mousePos = getMousePos(ev);
      const docScrolls = {
        left: document.body.scrollLeft + document.documentElement.scrollLeft,
        top: document.body.scrollTop + document.documentElement.scrollTop
      };
      this.DOM.reveal.style.top = `${mousePos.y-220-docScrolls.top}px`;
      this.DOM.reveal.style.left = `${mousePos.x+1-docScrolls.left}px`;
    };
    this.mouseenterFn = (ev) => {
      this.positionElement(ev);
      this.showImage();
      this.animateLetters();
    };
    this.mousemoveFn = ev => requestAnimationFrame(() => {
      this.positionElement(ev);
    });
    this.mouseleaveFn = () => {
      this.hideImage();
    };

    this.DOM.el.addEventListener('mouseenter', this.mouseenterFn);
    this.DOM.el.addEventListener('mousemove', this.mousemoveFn);
    this.DOM.el.addEventListener('mouseleave', this.mouseleaveFn);
  }
  showImage() {
    TweenMax.killTweensOf(this.DOM.revealInner);
    TweenMax.killTweensOf(this.DOM.revealImg);

    this.tl = new TimelineMax({
        onStart: () => {
          this.DOM.reveal.style.opacity = 1;
          TweenMax.set(this.DOM.el, {
            zIndex: 1000
          });
        }
      })
      .add('begin')
      .set([this.DOM.revealInner, this.DOM.revealImg], {
        transformOrigin: '50% 100%'
      })
      .add(new TweenMax(this.DOM.revealInner, 0.4, {
        ease: Expo.easeOut,
        startAt: {
          x: '50%',
          y: '120%',
          rotation: 50
        },
        x: '0%',
        y: '0%',
        rotation: 0
      }), 'begin')
      .add(new TweenMax(this.DOM.revealImg, 0.4, {
        ease: Expo.easeOut,
        startAt: {
          x: '-50%',
          y: '-120%',
          rotation: -50
        },
        x: '0%',
        y: '0%',
        rotation: 0
      }), 'begin')
      .add(new TweenMax(this.DOM.revealImg, 0.7, {
        ease: Expo.easeOut,
        startAt: {
          scale: 2
        },
        scale: 1
      }), 'begin');
  }
  hideImage() {
    TweenMax.killTweensOf(this.DOM.revealInner);
    TweenMax.killTweensOf(this.DOM.revealImg);

    this.tl = new TimelineMax({
        onStart: () => {
          TweenMax.set(this.DOM.el, {
            zIndex: 999
          });
        },
        onComplete: () => {
          TweenMax.set(this.DOM.el, {
            zIndex: ''
          });
          TweenMax.set(this.DOM.reveal, {
            opacity: 0
          });
        }
      })
      .add('begin')
      //.set([this.DOM.revealInner, this.DOM.revealImg], {transformOrigin: '50% 0%'})
      .add(new TweenMax(this.DOM.revealInner, 0.6, {
        ease: Expo.easeOut,
        y: '-120%',
        rotation: -5
      }), 'begin')
      .add(new TweenMax(this.DOM.revealImg, 0.6, {
        ease: Expo.easeOut,
        y: '120%',
        rotation: 5,
        scale: 1.2
      }), 'begin')
  }
  animateLetters() {
    this.DOM.letters.forEach((letter, pos) => {
      TweenMax.set(letter, {
        opacity: 0
      });
      const delay = pos * 2 / 100;
      TweenMax.to(letter, pos * 0.07 + 0.2, {
        ease: Expo.easeOut,
        delay: delay,
        startAt: {
          x: '100%'
        },
        x: '0%',
        opacity: 1
      });
    });
  }
}


// 判断字符串是否是图片格式类型
function isImageType(typeStr) {
  return /\.(gif|jpg|jpeg|png)$/i.test(typeStr);
}
