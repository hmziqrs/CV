!function(){var t=[,function(t,e,n){"use strict";n.r(e);var o=n(2);let i;const r=document.getElementById("header");let c;function d(t,e){t.clearRect(.5*-e.width,.5*-e.height,2*e.width,2*e.height),c.forEach((n=>{n.update(e,t)})),i=requestAnimationFrame((()=>d(t,e)))}!function(){const t=o.canvas();function e(){t.width=window.innerWidth-function(){const t=document.createElement("div");t.style.visibility="hidden",t.style.overflow="scroll",t.style.msOverflowStyle="scrollbar",document.body.appendChild(t);const e=document.createElement("div");t.appendChild(e);const n=t.offsetWidth-e.offsetWidth;return t.parentNode.removeChild(t),n}()-1,t.height=document.getElementById("header").offsetHeight,function(){null!=i&&(o.setVelocity(o.BASE_VELOCITY),cancelAnimationFrame(i));const t=o.canvas(),e=canvas.getContext("2d");e.translate(t.width/2,t.height/2),c=o.grid3d(t),d(e,t),window.addEventListener("mousemove",(function(t){const e=o.canvas(),n=canvas.getContext("2d"),i=e.width/2-.045*t.clientX,r=e.height/2-.045*t.clientY;n.setTransform(1,0,0,1,i,r)}))}()}window.addEventListener("resize",e,!1),e()}();var a=function(t){var e,n,o,i,r=(t=t||{}).delay||50;function c(){e=null,i=0}return c(),function(){return n=window.scrollY,null!=e&&(i=n-e),e=n,clearTimeout(o),o=setTimeout(c,r),i}}();const s=3*o.BASE_VELOCITY;window.onscroll=function(){const t=.22*window.scrollY;r.style.transform=`translateY(${t}px)`;var e=.15*a();e<-s&&(e=-s),e>s&&(e=s),0==e&&(e=o.BASE_VELOCITY),o.setVelocity(e);const n=document.getElementById("contact").offsetTop;if(window.scrollY>=n&&null!=i&&(cancelAnimationFrame(i),i=null),window.scrollY<n&&null==i){const t=o.canvas();d(t.getContext("2d"),t)}}},function(t,e,n){"use strict";function o(){return document.getElementById("canvas")}n.r(e),n.d(e,{canvas:function(){return o},BASE_VELOCITY:function(){return r},setVelocity:function(){return d},getDimensions:function(){return a},grid3d:function(){return s}});const i=()=>.16*(o().width+o().height),r=.08;var c=r;function d(t){c=t??c}function a(t){var e=o();const n={x:e.width/2,y:e.height/2};return{initial:{start:{xs:n.x-.14*e.width,ys:n.y-.14*e.height,xe:n.x+.14*e.width,ye:n.y+.14*e.height},end:{xs:n.x-.05*e.width,ys:n.y-.05*e.height,xe:n.x+.05*e.width,ye:n.y+.05*e.height}},center:n}}function s(t){t=o();const e=Math.floor(.26*(t.width+t.height));return Array(e).fill(0).map((()=>function(t){const e={init:!1,x:0,y:0,size:0,z:0,update:function(t,n){e.z-=c,(e.z<1||e.z>i())&&e.init(!0);var o=.1+l(e.z,0,t.width,e.size,0),r=l(e.x/e.z,0,1,0,t.width),d=l(e.y/e.z,0,1,0,t.height);n.beginPath(),n.arc(r,d,Math.abs(o),0,2*Math.PI,!1),n.fillStyle="white",n.fill()},init:function(n=!1){var o,r;e.x=(2*Math.random()-1)*(.045*t.height),e.y=(2*Math.random()-1)*(.045*t.height),e.size=.7+Math.random(),e.z=c<0?n?(o=0,r=.1,(Math.random()*(r-o)+o)*i()):e.z:n?Math.random()*i():e.z}};e.init||e.init(!1);return e}(t)))}function l(t,e,n,o,i){return(t-e)/(n-e)*(i-o)+o}},function(){window.isToggled=!1,window.toggle=function(){const t=[document.getElementById("download-card"),document.getElementById("footer"),document.getElementById("header")],e=[document.getElementById("contact"),document.getElementById("skills")];window.isToggled?(window.isToggled=!1,t.forEach((t=>{t.style.display="block"})),e.forEach((t=>{t.classList.remove("toggled")}))):(window.isToggled=!0,t.forEach((t=>{t.style.display="none"})),e.forEach((t=>{t.classList.add("toggled")})))}},function(t,e,n){"use strict";n.r(e);const o="active";let i=0;e.default=function(t){const e=document.getElementsByClassName("skill-anim-base");e[0].classList.add(o),setInterval((()=>{e[i].classList.remove(o),i++,e[i].classList.add(o)}),4e3)}}],e={};function n(o){var i=e[o];if(void 0!==i)return i.exports;var r=e[o]={exports:{}};return t[o](r,r.exports,n),r.exports}n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,{a:e}),e},n.d=function(t,e){for(var o in e)n.o(e,o)&&!n.o(t,o)&&Object.defineProperty(t,o,{enumerable:!0,get:e[o]})},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})};var o={};!function(){"use strict";n.r(o);n(1),n(3);var t=n(4);window.onload=function(){(0,t.default)()}}()}();