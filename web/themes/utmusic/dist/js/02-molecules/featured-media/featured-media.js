!function(e){var t={};function i(r){if(t[r])return t[r].exports;var l=t[r]={i:r,l:!1,exports:{}};return e[r].call(l.exports,l,l.exports,i),l.l=!0,l.exports}i.m=e,i.c=t,i.d=function(e,t,r){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},i.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(i.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var l in e)i.d(r,l,function(t){return e[t]}.bind(null,l));return r},i.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="",i(i.s=9)}({9:function(e,t){!function(e){"use strict";function t(e,t){let i;return i=window.innerWidth<400?Math.round(e.scrollLeft/t):0===e.scrollLeft?Math.round((e.scrollLeft+t/3)/t):Math.round((e.scrollLeft+t/2)/t),i}Drupal.behaviors.featuredMedia={attach(e){const i=e.querySelectorAll(".m-featured-media__items");i&&i.forEach(e=>{const i=e.querySelectorAll(".m-featured-media__item"),r=e.closest(".m-featured-media__items-wrapper").querySelector(".m-featured-media__items-next-btn"),l=e.closest(".m-featured-media__items-wrapper").querySelector(".m-featured-media__items-prev-btn");if(!l||!r)return;l.style.visibility="hidden";if(!e.closest(".m-featured-media__items-wrapper").querySelector(".liveregion")){var n=document.createElement("div");n.setAttribute("aria-live","polite"),n.setAttribute("aria-atomic","true"),n.setAttribute("class","liveregion u-visually--hidden visually-hidden"),e.closest(".m-featured-media__items-wrapper").appendChild(n)}r.addEventListener("click",n=>{n.preventDefault();const o=n.target.closest(".m-featured-media").querySelector(".m-featured-media__items"),s=o.firstElementChild.getBoundingClientRect().width;o.scrollLeft+=s,l.style.visibility="visible";let d=t(e,s)+1;n.target.closest(".m-featured-media").querySelector(".liveregion").innerText=Drupal.t("Item "+d+" of "+i.length);const a=o.scrollWidth-o.scrollLeft===o.clientWidth;r.style.visibility=a?"hidden":"visible"}),l.addEventListener("click",n=>{n.preventDefault();const o=n.target.closest(".m-featured-media").querySelector(".m-featured-media__items"),s=o.firstElementChild.getBoundingClientRect().width;o.scrollLeft-=s,r.style.visibility="visible";let d=t(e,s)+1;n.target.closest(".m-featured-media").querySelector(".liveregion").innerText=Drupal.t("Item "+d+" of "+i.length);const a=0===o.scrollLeft;l.style.visibility=a?"hidden":"visible"}),e.addEventListener("scroll",n=>{const o=n.target.closest(".m-featured-media").querySelector(".m-featured-media__items").firstElementChild.getBoundingClientRect().width;let s=t(e,o)+1;n.target.closest(".m-featured-media").querySelector(".liveregion").innerText=Drupal.t("Item "+s+" of "+i.length);const d=e.scrollWidth-e.scrollLeft===e.clientWidth;r.style.visibility=d?"hidden":"visible";const a=0===e.scrollLeft;l.style.visibility=a?"hidden":"visible"})})}}}(jQuery)}});