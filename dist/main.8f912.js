!function(e){var t={};function n(r){if(t[r])return t[r].exports;var i=t[r]={i:r,l:!1,exports:{}};return e[r].call(i.exports,i,i.exports,n),i.l=!0,i.exports}n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var i in e)n.d(r,i,function(t){return e[t]}.bind(null,i));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=1)}([function(e,t,n){},function(e,t,n){"use strict";function r(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}n.r(t),n(0);var i=function(){function e(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e)}var t,n;return t=e,n=[{key:"createElement",value:function(e,t){var n=document.createElement(e);return n.className=t,n}},{key:"selectElements",value:function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return t.reduce((function(e,t){return e.concat(Array.from(document.body.getElementsByClassName(t)))}),[])}},{key:"switchProperty",value:function(e,t){for(var n=arguments.length,r=new Array(2<n?n-2:0),i=2;i<n;i++)r[i-2]=arguments[i];return r.forEach((function(n){n[e]=t}))}},{key:"generateRandomValues",value:function(e){for(var t=[],n=e;0<n;n-=1)t.push(n);return t.concat(t).sort((function(){return Math.random()-.5}))}},{key:"addEvent",value:function(t,n){e.selectElements(n).forEach((function(e){e.onclick=t}))}}],null&&r(t.prototype,null),n&&r(t,n),e}();function a(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var o=function(){function e(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e)}var t,n;return t=e,n=[{key:"Create",value:function(e,t,n){var r=i.createElement("button",e);return r.disabled=!1,r.dataset.x=t,r.dataset.y=n,r}}],null&&a(t.prototype,null),n&&a(t,n),e}();function l(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var u=function(){function e(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.tableOfmatches=[],this.location={},this.randomValues=[],this.allCells=[],this.previewTimeout=0}var t,n;return t=e,(n=[{key:"build",value:function(e){var t=e.width,n=e.height;this.tableOfmatches=[];var r=n*t,a=r%2;this.randomValues=i.generateRandomValues(Math.floor(r/2));var l=function(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e)){var n=[],r=!0,i=!1,a=void 0;try{for(var o,l=e[Symbol.iterator]();!(r=(o=l.next()).done)&&(n.push(o.value),!t||n.length!==t);r=!0);}catch(e){i=!0,a=e}finally{try{r||null==l.return||l.return()}finally{if(i)throw a}}return n}}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}(i.selectElements("field-container"),1);this.location=l[0];for(var u=0;u<n;u+=1){var c=i.createElement("div","row");this.tableOfmatches.push([]);for(var s=0;s<t&&(!a||u!==Number(n)-1||s!==Number(t)-1);s+=1){var f=new o.Create("cells",u,s);c.appendChild(f),this.tableOfmatches[u].push(this.randomValues.pop())}this.location.appendChild(c)}}},{key:"preview",value:function(e){var t=this;this.allCells=i.selectElements("cells"),this.allCells.forEach((function(e){e.disabled=!0;var n=i.createElement("img","image");n.src="./img/cells/".concat(t.tableOfmatches[e.dataset.x][e.dataset.y],".png"),e.appendChild(n)})),this.previewTimeout=setTimeout((function(){t.allCells.forEach((function(e){e.disabled=!1,e.childNodes.item(0).remove()}))}),1e3*e)}},{key:"remove",value:function(){this.location.childNodes&&(this.location.innerHTML="")}}])&&l(t.prototype,n),e}();function c(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var s=function(){function e(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.counter=0,this.bufferElement=0}var t,n;return t=e,(n=[{key:"insertImage",value:function(e,t){e.target.disabled=!0,this.image=i.createElement("img","image"),this.image.src="./img/cells/".concat(t,".png"),e.target.appendChild(this.image)}},{key:"removeImage",value:function(e){e.disabled=!1,e.children.item(0).remove()}},{key:"match",value:function(e,t){var n=this;return 0===this.bufferElement?(this.insertImage(e,t),this.bufferElement=e.target,this.bufferElement.num=t,void(this.counter+=1)):this.bufferElement.num===t&&this.counter<2?(this.insertImage(e,t),this.bufferElement=0,void(this.counter=0)):void(this.counter<2?(this.insertImage(e,t),this.counter+=1,setTimeout((function(){n.removeImage(n.bufferElement),n.removeImage(e.target),n.counter=0,n.bufferElement=0}),2e3)):(e.target.classList.add("apply-shake"),setTimeout((function(){e.target.classList.remove("apply-shake")}),500)))}}])&&c(t.prototype,n),e}();function f(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var h=function(){function e(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.timerId=0,this.totallTime=0,this.minutes=0,this.seconds=0,this.timerValue={}}var t,n;return t=e,(n=[{key:"start",value:function(e){var t=this,n=function(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e)){var n=[],r=!0,i=!1,a=void 0;try{for(var o,l=e[Symbol.iterator]();!(r=(o=l.next()).done)&&(n.push(o.value),!t||n.length!==t);r=!0);}catch(e){i=!0,a=e}finally{try{r||null==l.return||l.return()}finally{if(i)throw a}}return n}}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}(i.selectElements("timer-value"),1);this.timerValue=n[0],this.totallTime=60*Number(e),this.timerId=setInterval((function(){if(t.totallTime=t.totallTime-1,t.minutes=Math.floor(t.totallTime/60),t.seconds=t.totallTime%60,t.timerValue.innerText="".concat(t.minutes," : ").concat(t.seconds),0===t.totallTime){t.clear();var e=i.selectElements("cells");i.switchProperty("disabled",!0,e),t.timerValue.classList.add("gameOver")}}),1e3)}},{key:"clear",value:function(){clearTimeout(this.timerId)}}])&&f(t.prototype,n),e}();function m(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e)){var n=[],r=!0,i=!1,a=void 0;try{for(var o,l=e[Symbol.iterator]();!(r=(o=l.next()).done)&&(n.push(o.value),!t||n.length!==t);r=!0);}catch(e){i=!0,a=e}finally{try{r||null==l.return||l.return()}finally{if(i)throw a}}return n}}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}function v(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var d=function(){function e(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e)}var t,n;return t=e,(n=[{key:"add",value:function(e,t,n){var r=this,a=n.standard,o=n.max,l=n.min,u=m(i.selectElements(t),1);this[e]=u[0],this[e].innerElements=Array.from(this[e].children);var c=m(this[e].innerElements,4);this[e].label=c[0],this[e].increase=c[1],this[e].value=c[2],this[e].reduce=c[3],this.direction=1,this[e].value.innerText=a,this[e].increase.onclick=function(){var t=Number(r[e].value.innerText);t<o&&(r.direction=1,r[e].value.innerText=t+r.direction,r.validation(e,o-r[e].value.innerText))},this[e].reduce.onclick=function(){var t=Number(r[e].value.innerText);l<t&&(r.direction=-1,r[e].value.innerText=t+r.direction,r.validation(e,r[e].value.innerText-l))}}},{key:"validation",value:function(e,t){var n=this.height.value.innerText,r=this.width.value.innerText,i=Number(this[e].value.innerText);n*r%2&&(this[e].value.innerText=t?i+this.direction:i-this.direction)}},{key:"display",value:function(e,t){var n=t.height,r=t.width,a=t.preview,o=t.gameOver;"hide"===e?i.switchProperty("className","remove",n,r,a,o):i.switchProperty("className","controller",n,r,a,o)}}])&&v(t.prototype,n),e}();!function(e){var t={settings:{width:3,height:3,preview:1,gameOver:1},tableOfmatches:"empty",gameoverTimeout:"empty"},n=function(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e)){var n=[],r=!0,i=!1,a=void 0;try{for(var o,l=e[Symbol.iterator]();!(r=(o=l.next()).done)&&(n.push(o.value),!t||n.length!==t);r=!0);}catch(e){i=!0,a=e}finally{try{r||null==l.return||l.return()}finally{if(i)throw a}}return n}}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}(i.selectElements("start"),1)[0],r=new d;function a(e){var n=t.tableOfmatches[e.target.dataset.x][e.target.dataset.y];l.match(e,n)}r.add("height","height-controller",{standard:t.settings.height,max:6,min:2}),r.add("width","width-controller",{standard:t.settings.width,max:6,min:2}),r.add("preview","preview-controller",{standard:t.settings.preview,max:7,min:1}),r.add("gameOver","gameOver-controller",{standard:t.settings.gameOver,max:10,min:1}),r.validation("width",r.width.value.innerText);var o=new u,l=new s,c=new h;n.onclick=function(){if("start"===n.innerText){n.innerText="play again",c.clear(),o.remove();var e={height:r.height.value.innerText,width:r.width.value.innerText,preview:r.preview.value.innerText,gameOver:r.gameOver.value.innerText};o.build(e),o.preview(t.settings.preview),c.start(r.gameOver.value.innerText),t.tableOfmatches=o.tableOfmatches,i.addEvent(a,"cells"),r.display("hide",r)}else r.display("show",r),n.innerText="start",c.clear(),c.timerValue.classList.remove("gameOver"),c.timerValue.innerText=""}}()}]);
//# sourceMappingURL=main.8f912.js.map