!function(e){var t={};function n(i){if(t[i])return t[i].exports;var r=t[i]={i:i,l:!1,exports:{}};return e[i].call(r.exports,r,r.exports,n),r.l=!0,r.exports}n.m=e,n.c=t,n.d=function(e,t,i){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:i})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var i=Object.create(null);if(n.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)n.d(i,r,function(t){return e[t]}.bind(null,r));return i},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=1)}([function(e,t,n){},function(e,t,n){"use strict";function i(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}n.r(t),n(0);var r=function(){function e(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e)}var t,n;return t=e,n=[{key:"createElement",value:function(e,t){var n=document.createElement(e);return n.className=t,n}},{key:"selectElements",value:function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return t.reduce((function(e,t){return e.concat(Array.from(document.body.getElementsByClassName(t)))}),[])}},{key:"switchProperty",value:function(e,t){for(var n=arguments.length,i=new Array(2<n?n-2:0),r=2;r<n;r++)i[r-2]=arguments[r];return i.forEach((function(n){n[e]=t}))}},{key:"generateRandomValues",value:function(e){for(var t=[],n=e;0<n;n-=1)t.push(n);return t.concat(t).sort((function(){return Math.random()-.5}))}},{key:"addEvent",value:function(t,n){e.selectElements(n).forEach((function(e){e.onclick=t}))}}],null&&i(t.prototype,null),n&&i(t,n),e}();function a(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}var s=function(){function e(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e)}var t,n;return t=e,n=[{key:"Create",value:function(e,t,n){var i=r.createElement("button",e);return i.disabled=!1,i.dataset.x=t,i.dataset.y=n,i}}],null&&a(t.prototype,null),n&&a(t,n),e}(),o=n.p+"img/congratulations.c4e28.png";function l(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}var c=function(){function e(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.tableOfmatches=[],this.location={},this.randomValues=[],this.allCells=[],this.previewTimeout=0,this.previewAbort=!0,this.cellsLeft=[]}var t,n;return t=e,(n=[{key:"build",value:function(e){var t=e.width,n=e.height;this.tableOfmatches=[];var i=n*t;this.randomValues=r.generateRandomValues(Math.floor(i/2));var a=function(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e)){var n=[],i=!0,r=!1,a=void 0;try{for(var s,o=e[Symbol.iterator]();!(i=(s=o.next()).done)&&(n.push(s.value),!t||n.length!==t);i=!0);}catch(e){r=!0,a=e}finally{try{i||null==o.return||o.return()}finally{if(r)throw a}}return n}}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}(r.selectElements("field-container"),1);this.location=a[0];for(var o=0;o<n;o+=1){var l=r.createElement("div","row");this.tableOfmatches.push([]);for(var c=0;c<t;c+=1){var u=new s.Create("cells",o,c);l.appendChild(u),this.tableOfmatches[o].push(this.randomValues.pop())}this.location.appendChild(l)}}},{key:"preview",value:function(e,t){var n=this;this.previewAbort=!0,this.allCells=r.selectElements("cells"),this.allCells.forEach((function(e){e.disabled=!0;var t=r.createElement("img","image");t.src="./img/cells/".concat(n.tableOfmatches[e.dataset.x][e.dataset.y],".png"),e.appendChild(t)})),this.previewTimeout=setTimeout((function(){n.removeAllImages(),t(),n.previewAbort=!1}),1e3*e)}},{key:"removeField",value:function(){this.location.childNodes&&(this.location.innerHTML="")}},{key:"removeAllImages",value:function(){this.allCells.forEach((function(e){e.disabled=!1,e.childNodes.item(0).remove()}))}},{key:"congratulations",value:function(e){if(this.cellsLeft=this.allCells.filter((function(e){return 1===e.childElementCount})),this.cellsLeft.length===this.allCells.length){this.removeField();var t=r.createElement("img","congratulation");t.src=o,t.style.backgroundColor="transparent",this.location.appendChild(t),clearTimeout(e)}}}])&&l(t.prototype,n),e}();function u(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}var h=function(){function e(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.counter=0,this.openImgTimeout=0,this.bufferElement={},this.eventElement={},this.image={}}var t,n;return t=e,(n=[{key:"insertImage",value:function(e,t){e.target.disabled=!0,this.image=r.createElement("img","image"),this.image.src="./img/cells/".concat(t,".png"),e.target.appendChild(this.image)}},{key:"removeImage",value:function(e){e.disabled=!1,e.children.item(0).remove()}},{key:"match",value:function(e,t){var n=this;return 0===this.bufferElement?(this.insertImage(e,t),this.bufferElement=e.target,this.bufferElement.num=t,void(this.counter+=1)):this.bufferElement.num===t&&this.counter<2?(this.insertImage(e,t),this.bufferElement=0,void(this.counter=0)):void(this.counter<2?(this.insertImage(e,t),this.eventElement=e.target,this.counter+=1,this.openImgTimeout=setTimeout((function(){n.removeImage(n.bufferElement),n.removeImage(e.target),n.counter=0,n.bufferElement=0,n.eventElement=0}),1e3)):(e.target.classList.add("apply-shake"),setTimeout((function(){e.target.classList.remove("apply-shake")}),1e3)))}},{key:"abort",value:function(){this.bufferElement.children&&this.bufferElement.children.item(0).remove(),this.eventElement.children&&this.eventElement.children.item(0).remove()}}])&&u(t.prototype,n),e}();function f(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e)){var n=[],i=!0,r=!1,a=void 0;try{for(var s,o=e[Symbol.iterator]();!(i=(s=o.next()).done)&&(n.push(s.value),!t||n.length!==t);i=!0);}catch(e){r=!0,a=e}finally{try{i||null==o.return||o.return()}finally{if(r)throw a}}return n}}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}function m(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}var d=function(){function e(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.timerId=0,this.totallTime=0,this.minutes=0,this.seconds=0,this.timerValue={},this.timerLabel={}}var t,n;return t=e,(n=[{key:"start",value:function(e){var t=this,n=f(r.selectElements("timer-value"),1);this.timerValue=n[0];var i=f(r.selectElements("timer-label"),1);this.timerLabel=i[0],this.timerLabel.classList.remove("hidden"),this.totallTime=60*Number(e),this.parseTime(this.totallTime),this.timerValue.innerText="".concat(this.minutes,":").concat(this.seconds),this.timerId=setInterval((function(){if(t.totallTime=t.totallTime-1,t.parseTime(t.totallTime),t.timerValue.innerText="".concat(t.minutes,":").concat(t.seconds),0===t.totallTime){t.clear();var e=r.selectElements("cells");r.switchProperty.apply(r,["disabled",!0].concat(function(e){return function(e){if(Array.isArray(e)){for(var t=0,n=new Array(e.length);t<e.length;t++)n[t]=e[t];return n}}(e)||function(e){if(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e))return Array.from(e)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}()}(e))),t.timerValue.classList.add("gameOver")}}),1e3)}},{key:"clear",value:function(e,t){clearTimeout(this.timerId),clearTimeout(e),clearTimeout(t)}},{key:"parseTime",value:function(e){this.minutes=Math.floor(e/60),this.seconds=e%60,this.minutes=this.minutes<10?"0".concat(this.minutes):this.minutes,this.seconds=this.seconds<10?"0".concat(this.seconds):this.seconds}}])&&m(t.prototype,n),e}();function v(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e)){var n=[],i=!0,r=!1,a=void 0;try{for(var s,o=e[Symbol.iterator]();!(i=(s=o.next()).done)&&(n.push(s.value),!t||n.length!==t);i=!0);}catch(e){r=!0,a=e}finally{try{i||null==o.return||o.return()}finally{if(r)throw a}}return n}}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}function p(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}var y=function(){function e(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.settings={height:0,width:0,preview:0,gameover:0},this.direction=1}var t,n;return t=e,(n=[{key:"add",value:function(e,t,n){var i=this,a=n.standard,s=n.max,o=n.min,l=v(r.selectElements(t),1);this[e]=l[0];var c=v(r.selectElements("inform-pannel"),1);this.informPannel=c[0];var u=v(r.selectElements("options"),1);this.options=u[0],this[e].onmouseover=function(){i.options.innerText=i[e].label.innerText},this[e].onmouseout=function(){i.options.innerText="OPTIONS"},this[e].innerElements=Array.from(this[e].children);var h=v(this[e].innerElements,4);this[e].label=h[0],this[e].increase=h[1],this[e].value=h[2],this[e].reduce=h[3],this.settings[e]=a,this[e].value.innerText=this.settings[e],a===s&&this.switchClasses(this[e].increase,"up","up-limit"),a===o&&this.switchClasses(this[e].reduce,"down","down-limit"),this[e].increase.onclick=function(){i.controllerEvent(e,1,s)},this[e].reduce.onclick=function(){i.controllerEvent(e,-1,o)},this.validation(e,s-a)}},{key:"controllerEvent",value:function(e,t,n){switch(this.direction=t){case 1:this.settings[e]<n&&(this.settings[e]+=this.direction,this.switchClasses(this[e].reduce,"down-limit","down"),this.validation(e,n-this.settings[e]),this.settings[e]===n&&this.switchClasses(this[e].increase,"up","up-limit"));break;case-1:this.settings[e]>n&&(this.settings[e]+=this.direction,this.switchClasses(this[e].increase,"up-limit","up"),this.validation(e,this.settings[e]-n),this.settings[e]===n&&this.switchClasses(this[e].reduce,"down","down-limit"))}}},{key:"validation",value:function(e,t){this.settings.height*this.settings.width%2&&(this.settings[e]=t?this.settings[e]+this.direction:this.settings[e]-this.direction),this[e].value.innerText=this.settings[e]}},{key:"display",value:function(e){"hide"===e?r.switchProperty("className","remove",this.informPannel):r.switchProperty("className","inform-pannel",this.informPannel)}},{key:"switchClasses",value:function(e,t,n){e.classList.remove(t),e.classList.add(n)}}])&&p(t.prototype,n),e}();!function(e){var t={settings:{height:5,width:3,preview:5,gameOver:5},tableOfmatches:"empty",gameoverTimeout:"empty"},n=function(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e)){var n=[],i=!0,r=!1,a=void 0;try{for(var s,o=e[Symbol.iterator]();!(i=(s=o.next()).done)&&(n.push(s.value),!t||n.length!==t);i=!0);}catch(e){r=!0,a=e}finally{try{i||null==o.return||o.return()}finally{if(r)throw a}}return n}}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}(r.selectElements("start"),1)[0],i=new y;function a(e){var n=t.tableOfmatches[e.target.dataset.x][e.target.dataset.y];o.match(e,n),s.congratulations(l.timerId)}i.add("height","height-controller",{standard:t.settings.height,max:6,min:2}),i.add("width","width-controller",{standard:t.settings.width,max:6,min:2}),i.add("preview","preview-controller",{standard:t.settings.preview,max:7,min:1}),i.add("gameOver","gameOver-controller",{standard:t.settings.gameOver,max:15,min:1});var s=new c,o=new h,l=new d;n.onclick=function(){"start"===n.innerText?(n.innerText="play again",l.clear(s.previewTimeout),s.removeField(),o.bufferElement=0,o.counter=0,s.build(i.settings),s.preview(i.preview.value.innerText,(function(){l.start(i.gameOver.value.innerText)})),t.tableOfmatches=s.tableOfmatches,r.addEvent(a,"cells"),i.display("hide")):(i.display("show"),n.innerText="start",l.clear(s.previewTimeout,o.openImgTimeout),l.timerValue.innerText="",s.previewAbort&&s.removeAllImages(),r.switchProperty.apply(r,["disabled",!0].concat(function(e){return function(e){if(Array.isArray(e)){for(var t=0,n=new Array(e.length);t<e.length;t++)n[t]=e[t];return n}}(e)||function(e){if(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e))return Array.from(e)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}()}(s.allCells))),o.abort(),l.timerValue.classList&&(l.timerValue.classList.remove("gameOver"),l.timerLabel.classList.add("hidden")))}}()}]);
//# sourceMappingURL=main.7f2f8.js.map