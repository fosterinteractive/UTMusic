!function(e){var r={};function n(t){if(r[t])return r[t].exports;var o=r[t]={i:t,l:!1,exports:{}};return e[t].call(o.exports,o,o.exports,n),o.l=!0,o.exports}n.m=e,n.c=r,n.d=function(e,r,t){n.o(e,r)||Object.defineProperty(e,r,{enumerable:!0,get:t})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,r){if(1&r&&(e=n(e)),8&r)return e;if(4&r&&"object"==typeof e&&e&&e.__esModule)return e;var t=Object.create(null);if(n.r(t),Object.defineProperty(t,"default",{enumerable:!0,value:e}),2&r&&"string"!=typeof e)for(var o in e)n.d(t,o,function(r){return e[r]}.bind(null,o));return t},n.n=function(e){var r=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(r,"a",r),r},n.o=function(e,r){return Object.prototype.hasOwnProperty.call(e,r)},n.p="",n(n.s=17)}({17:function(e,r,n){Drupal.behaviors.readmore={attach(e){const r=n(18);r(e.querySelectorAll(".js-read-smore"),{moreText:"Read more",lessText:"Read less",blockClassName:"u-readmore",isInline:!1}).init();r(e.querySelectorAll(".js-read-smore-inline"),{moreText:"Read more",lessText:"Read less",blockClassName:"u-readmore--inline",isInline:!0}).init()}}},18:function(e,r){var n={blockClassName:"read-smore",wordsCount:30,charsCount:null,moreText:"Read More",lessText:"Read Less",isInline:!1};function t(e,r){r=Object.assign({},n,r);var t={originalContentArr:[],truncatedContentArr:[]};function o(e){return void 0!==e.dataset.readSmoreChars||null!==r.charsCount}return{init:function(){for(var n=0,a=e.length;n<a;++n)l=n,u=function(e){return void 0!==e.dataset.readSmoreChars?parseInt(e.dataset.readSmoreChars):null!==r.charsCount?parseInt(r.charsCount):void 0!==e.dataset.readSmoreWords?parseInt(e.dataset.readSmoreWords):null!==r.wordsCount?parseInt(r.wordsCount):void 0}(i=e[n]),d=function(e,r,n){void 0===n&&(n=!1);var t=function(e){return e.replace(/(^\s*)|(\s*$)/gi,"")}(e);return n?t.split("").slice(0,r-1).join("")+"...":t.split(/\s+/).slice(0,r-1).join(" ")+"..."}(c=i.innerHTML,u,o(i)),f=o(i)?c.length:(s=c,null!==s&&""!==s&&s.replace(/<[^>]+>/g,"")).split(" ").filter((function(e){return""!==e.trim()})).length,t.originalContentArr.push(c),t.truncatedContentArr.push(d),u<f&&(i.innerHTML=t.truncatedContentArr[l],function(n){var o=document.createElement("span");o.className=r.blockClassName+"__link-wrap",o.innerHTML=function(e){return'\n      <a id="'+r.blockClassName+"_"+e+'"\n        class="'+r.blockClassName+'__link"\n        style="cursor:pointer">\n          '+r.moreText+"\n      </a>\n    "}(n),e[n].after(o),function(n){document.querySelector("#"+r.blockClassName+"_"+n).addEventListener("click",(function(o){e[n].classList.toggle("is-expanded");var a=o.currentTarget;"true"!==a.dataset.clicked?(e[n].innerHTML=t.originalContentArr[n],a.innerHTML=r.lessText,a.dataset.clicked=!0):(e[n].innerHTML=t.truncatedContentArr[n],a.innerHTML=r.moreText,a.dataset.clicked=!1)}))}(n)}(l));var s,i,l,u,c,d,f}}}t.options=n,e.exports=t}});