// Підключення функціоналу "Чертоги Фрілансера"
import { isMobile } from "./functions.js";
// Підключення списку активних модулів
import { flsModules } from "./modules.js";
import ImageCompare from "image-compare-viewer";

const openBlock = (parentSelector = '._parent-block', btnSelector = '._btn-block', contentSelector = '._content-block') => {
  const parent = document.querySelectorAll(parentSelector);

  parent.forEach(item => {
      const btn = item.querySelector(btnSelector);
      const content = item.querySelector(contentSelector);
      btn.addEventListener('click', (e) => {
          e.preventDefault();
          item.classList.toggle('open');

      });
      // window.addEventListener('click', e => { 
      //     const target = e.target 
      //     if (!target.closest(content) && !target.closest(item)) { 
      //       content.classList.remove('open');
      //     }
      // })
  
  });

  
};

const element = document.getElementById("image-compare");
const optionsElement = {

  // UI Theme Defaults

  controlColor: "#73c781",
  controlShadow: false,
  addCircle: true,
  addCircleBlur: true,

  // Label Defaults

  showLabels: false,
  labelOptions: {
    before: 'Before',
    after: 'After',
    onHover: false
  },

  // Smoothing

  smoothing: true,
  smoothingAmount: 0,

  // Other options

  hoverStart: false,
  verticalMode: false,
  startingPoint: 50,
  fluidMode: false
};
const viewer = new ImageCompare(element, optionsElement).mount();

const hoverOnItem = () => {
  const item = document.querySelector('.item-hover');
  const items = document.querySelectorAll('.item-hover-hovered');
  let timeoutId = null;

  const isTouchDevice = navigator.maxTouchPoints > 0;

  if (!isTouchDevice) {
    item.addEventListener("mousemove", function(e) {
      if (!timeoutId) {
        timeoutId = setTimeout(function() {
          item.classList.add('_hover');
          items.forEach(element => {
            element.classList.add('_hovered');
          });
          timeoutId = null;
        }, 50);
      }
    });

    item.addEventListener("mouseleave", function() {
      clearTimeout(timeoutId);
      timeoutId = null;
      item.classList.remove('_hover');
      items.forEach(element => {
        element.classList.remove('_hovered');
      });
    });
  }
  
  item.addEventListener('click', (e) => {
    e.preventDefault();
    item.classList.toggle('_clicked');
    return false;
  });
};
const hoverOnItemTwo = () => {
  const item = document.querySelector('.item-hover-2');
  const items = document.querySelectorAll('.item-hover-hovered-2');
  let timeoutId = null;

  const isTouchDevice = navigator.maxTouchPoints > 0;

  if (!isTouchDevice) {
    item.addEventListener("mousemove", function(e) {
      if (!timeoutId) {
        timeoutId = setTimeout(function() {
          item.classList.add('_hover');
          items.forEach(element => {
            element.classList.add('_hovered');
          });
          timeoutId = null;
        }, 50);
      }
    });

    item.addEventListener("mouseleave", function() {
      clearTimeout(timeoutId);
      timeoutId = null;
      item.classList.remove('_hover');
      items.forEach(element => {
        element.classList.remove('_hovered');
      });
    });
  }
  
  item.addEventListener('click', (e) => {
    e.preventDefault();
    item.classList.toggle('_clicked');
    return false;
  });
};
const hoverOnItemThree = () => {
  const item = document.querySelector('.item-hover-3');
  const items = document.querySelectorAll('.item-hover-hovered-3');
  let timeoutId = null;

  const isTouchDevice = navigator.maxTouchPoints > 0;

  if (!isTouchDevice) {
    item.addEventListener("mousemove", function(e) {
      if (!timeoutId) {
        timeoutId = setTimeout(function() {
          item.classList.add('_hover');
          items.forEach(element => {
            element.classList.add('_hovered');
          });
          timeoutId = null;
        }, 50);
      }
    });

    item.addEventListener("mouseleave", function() {
      clearTimeout(timeoutId);
      timeoutId = null;
      item.classList.remove('_hover');
      items.forEach(element => {
        element.classList.remove('_hovered');
      });
    });
  }
  
  item.addEventListener('click', (e) => {
    e.preventDefault();
    item.classList.toggle('_clicked');
    return false;
  });
};

window.onload = function() {
  gsap.from(".hero__messages .item.item-01 .item__body", {
    scrollTrigger: ".hero",
    delay: .2,
    y: 100,
    duration: .8
  });
  gsap.from(".header", {
    scrollTrigger: ".header",
    delay: .2,
    y: -200,
    duration: .8
  });
  gsap.from(".hero__messages .item.item-02 .item__body", {
    scrollTrigger: ".hero",
    delay: .3,
    y: 120,
    duration: .8
  });
  gsap.from(".hero__messages .item.item-03 .item__body", {
    scrollTrigger: ".hero",
    delay: .1,
    y: 140,
    duration: .8
  });
  gsap.from(".hero__messages .item.item-04 .item__body", {
    scrollTrigger: ".hero",
    delay: .4,
    y: 80,
    duration: .8
  });
  gsap.from(".hero__messages .item.item-05 .item__body", {
    scrollTrigger: ".hero",
    delay: .5,
    y: 180,
    duration: .8
  });
  gsap.from(".hero__image", {
    scrollTrigger: ".hero",
    delay: .2,
    y: "10rem",
    opacity: 0,
    duration: 1.2
  });
  gsap.from(".support__title", {
    scrollTrigger: ".support",
    delay: .2,
    x: "-100px",
    opacity: 0,
    duration: 0.8
  });
  gsap.from(".support__header-before", {
    scrollTrigger: ".support",
    delay: .2,
    opacity: 0,
    duration: 0.8
  });
  gsap.from(".footer__title", {
    scrollTrigger: ".footer",
    delay: .2,
    y: "100px",
    opacity: 0,
    duration: 0.8
  });
  gsap.from(".footer__buttons", {
    scrollTrigger: ".footer",
    delay: .2,
    opacity: 0,
    duration: 0.8
  });
  gsap.from(".footer__messages .item.item-01 .item__body", {
    scrollTrigger: ".footer",
    delay: .2,
    y: 200,
    duration: .8
  });
  gsap.from(".footer__messages .item.item-02 .item__body", {
    scrollTrigger: ".footer",
    delay: .2,
    y:200,
    duration: .8
  });
  gsap.from(".support__messages .item.item-01 .item__body", {
    scrollTrigger: ".support",
    delay: .2,
    y:200,
    opacity: 0,
    duration: .6
  });
  gsap.from(".support__messages .item.item-02 .item__body", {
    scrollTrigger: ".support",
    delay: .2,
    y:300,
    opacity: 0,
    duration: .8
  });
  gsap.from(".support__messages .item.item-03 .item__body", {
    scrollTrigger: ".support",
    delay: .2,
    y:400,
    opacity: 0,
    duration: 1
  });
  gsap.from(".support__images-image.img-02 img", {
    scrollTrigger: ".support",
    delay: .1,
    y:400,
    duration: 1.5
  });
  gsap.from(".support__images-image.img-01 img", {
    scrollTrigger: ".support",
    delay: .5,
    y:600,
    duration: 1
  });
  gsap.from(".transfer__cards", {
    scrollTrigger: ".transfer",
    delay: .5,
    y:100,
    opacity: 0,
    duration: 1
  });
  gsap.from(".transfer__title", {
    scrollTrigger: ".transfer",
    delay: .5,
    x:-100,
    opacity: 0,
    duration: 1
  });
  gsap.from(".transfer__messages .item.item-02 .item__body", {
    scrollTrigger: ".transfer",
    delay: .5,
    scale:0,
    opacity: 0,
    duration: 0.3
  });
  gsap.from(".transfer__messages .item.item-01 .item__body", {
    scrollTrigger: ".transfer",
    delay: .5,
    scale:0,
    opacity: 0,
    duration: 0.5
  });
  gsap.from(".transfer__header-cards .transfer__header-card.card-01", {
    scrollTrigger: ".transfer",
    delay: .7,
    x:-100,
    opacity: 0,
    duration: 1
  });
  gsap.from(".transfer__header-cards .transfer__header-card.card-02", {
    scrollTrigger: ".transfer",
    delay: 1,
    x:100,
    opacity: 0,
    duration: 1
  });
  
}
hoverOnItemThree();
hoverOnItemTwo();
hoverOnItem();
openBlock();