!function(e){var t={};function n(i){if(t[i])return t[i].exports;var r=t[i]={i:i,l:!1,exports:{}};return e[i].call(r.exports,r,r.exports,n),r.l=!0,r.exports}n.m=e,n.c=t,n.d=function(e,t,i){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:i})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var i=Object.create(null);if(n.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)n.d(i,r,function(t){return e[t]}.bind(null,r));return i},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=1)}([function(e,t,n){},function(e,t,n){"use strict";function i(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}n.r(t),n(0);var r=function(){function e(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e)}var t,n;return t=e,n=[{key:"createElement",value:function(e,t){var n=document.createElement(e);return n.className=t,n}},{key:"selectElementsByClasses",value:function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return t.reduce((function(e,t){return e.concat(Array.from(document.body.getElementsByClassName(t)))}),[])}},{key:"switchProperty",value:function(e,t){for(var n=arguments.length,i=new Array(2<n?n-2:0),r=2;r<n;r++)i[r-2]=arguments[r];return i.forEach((function(n){n[e]=t}))}},{key:"generateRandomValues",value:function(e){for(var t=[],n=e;0<n;n-=1)t.push(n);return t.concat(t).sort((function(){return Math.random()-.5}))}}],null&&i(t.prototype,null),n&&i(t,n),e}();function a(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}var o=function(){function e(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e)}var t,n;return t=e,(n=[{key:"createBtn",value:function(e,t,n){var i=r.createElement("button",e);return i.disabled=!1,i.dataset.x=t,i.dataset.y=n,i}}])&&a(t.prototype,n),e}();function s(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}var l=function(){function e(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.counter=0,this.openImgTimeout=0,this.bufferCell={},this.nextBufferCell={}}var t,n;return t=e,(n=[{key:"collect",value:function(e,t){switch(this.counter){case 0:this.counter+=1,this.insertImage(e,t),this.bufferCell=e.target,this.bufferCell.imgSrc=t;break;case 1:this.counter+=1,this.insertImage(e,t),this.nextBufferCell=e.target,this.nextBufferCell.imgSrc=t,this.match();break;default:e.target.classList.add("apply-shake"),setTimeout((function(){e.target.classList.remove("apply-shake")}),1e3)}}},{key:"match",value:function(){var e=this;this.bufferCell.imgSrc===this.nextBufferCell.imgSrc?this.clear():this.openImgTimeout=setTimeout((function(){e.removeImage(e.bufferCell),e.removeImage(e.nextBufferCell),e.clear()}),1e3)}},{key:"insertImage",value:function(e,t){e.target.disabled=!0,this.image=r.createElement("img","image"),this.image.src="./img/cells/".concat(t,".png"),e.target.appendChild(this.image)}},{key:"removeImage",value:function(e){e.disabled=!1,e.children.item(0).remove()}},{key:"clear",value:function(){this.counter=0,this.nextBufferCell=0,this.bufferCell=0}},{key:"abort",value:function(){this.bufferCell.children&&this.bufferCell.children.item(0).remove(),this.nextBufferCell.children&&this.nextBufferCell.children.item(0).remove(),clearTimeout(this.openImgTimeout),this.clear()}}])&&s(t.prototype,n),e}();function c(e){return(c="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function u(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}function h(e,t){return!t||"object"!==c(t)&&"function"!=typeof t?function(e){if(void 0!==e)return e;throw new ReferenceError("this hasn't been initialised - super() hasn't been called")}(e):t}function f(e){return(f=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function m(e,t){return(m=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var d=function(){function e(t){var n;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),(n=h(this,f(e).call(this))).tableOfmatches=[],n.domLocation={},n.allCells=[],n.compare=new l,n.winCheck=t,n}var t,n;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&m(e,t)}(e,o),t=e,(n=[{key:"build",value:function(e,t){var n=this;this.tableOfmatches=[];var i=t*e;this.randomValues=r.generateRandomValues(Math.floor(i/2));var a=function(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e)){var n=[],i=!0,r=!1,a=void 0;try{for(var o,s=e[Symbol.iterator]();!(i=(o=s.next()).done)&&(n.push(o.value),!t||n.length!==t);i=!0);}catch(e){r=!0,a=e}finally{try{i||null==s.return||s.return()}finally{if(r)throw a}}return n}}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}(r.selectElementsByClasses("field-container"),1);this.domLocation=a[0];for(var o=0;o<t;o+=1){var s=r.createElement("div","row");this.tableOfmatches.push([]);for(var l=0;l<e;l+=1){var c=this.createBtn("cells",o,l);c.addEventListener("click",(function(e){return n.clickCell(e)})),c.disabled=!0,this.allCells.push(c),s.appendChild(c),this.tableOfmatches[o].push(this.randomValues.pop())}this.domLocation.appendChild(s)}}},{key:"showAll",value:function(){var e=this;this.allCells.forEach((function(t){var n=r.createElement("img","image");n.src="./img/cells/".concat(e.tableOfmatches[t.dataset.x][t.dataset.y],".png"),t.appendChild(n)}))}},{key:"hideAll",value:function(){this.allCells.forEach((function(e){e.disabled=!1,e.childNodes.item(0).remove()}))}},{key:"disableAll",value:function(){this.allCells.forEach((function(e){e.disabled=!0}))}},{key:"clickCell",value:function(e){var t=this.tableOfmatches[e.target.dataset.x][e.target.dataset.y];this.compare.collect(e,t),this.winCheck()}},{key:"removeField",value:function(){this.domLocation.childNodes&&(this.domLocation.innerHTML="",this.allCells=[])}}])&&u(t.prototype,n),e}();function v(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e)){var n=[],i=!0,r=!1,a=void 0;try{for(var o,s=e[Symbol.iterator]();!(i=(o=s.next()).done)&&(n.push(o.value),!t||n.length!==t);i=!0);}catch(e){r=!0,a=e}finally{try{i||null==s.return||s.return()}finally{if(r)throw a}}return n}}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}function y(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}var p=function(){function e(t,n,i){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.showAll=t,this.hideAll=n,this.disableAll=i,this.totallTime=0,this.minutes=0,this.seconds=0,this.timerValue={},this.timerLabel={},this.previewTimeout=0,this.gameoverTimeout=0}var t,n;return t=e,(n=[{key:"begin",value:function(e,t){var n=this;this.showAll();var i=v(r.selectElementsByClasses("timer-value"),1);this.timerValue=i[0];var a=v(r.selectElementsByClasses("timer-label"),1);this.timerLabel=a[0],this.previewTimeout=setTimeout((function(){n.hideAll(),n.startTimer(t)}),1e3*e)}},{key:"startTimer",value:function(e){var t=this;this.timerLabel.classList.remove("hidden"),this.totallTime=60*Number(e),this.parseTime(this.totallTime),this.timerValue.innerText="".concat(this.minutes,":").concat(this.seconds),this.gameoverTimeout=setInterval((function(){t.totallTime-=1,t.parseTime(t.totallTime),t.timerValue.innerText="".concat(t.minutes,":").concat(t.seconds),0===t.totallTime&&(t.clear(),t.timerValue.innerText="".concat(t.minutes,":").concat(t.seconds),t.disableAll(),t.timerValue.classList.add("gameOver"))}),1e3)}},{key:"clear",value:function(){clearTimeout(this.gameoverTimeout),clearTimeout(this.previewTimeout),""!==this.timerValue.innerText?(this.timerLabel.classList.add("hidden"),this.timerValue.classList.remove("gameOver"),this.timerValue.innerText=""):this.hideAll(),this.disableAll()}},{key:"parseTime",value:function(e){this.minutes=Math.floor(e/60),this.seconds=e%60,this.minutes=this.minutes<10?"0".concat(this.minutes):this.minutes,this.seconds=this.seconds<10?"0".concat(this.seconds):this.seconds}}])&&y(t.prototype,n),e}();function b(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e)){var n=[],i=!0,r=!1,a=void 0;try{for(var o,s=e[Symbol.iterator]();!(i=(o=s.next()).done)&&(n.push(o.value),!t||n.length!==t);i=!0);}catch(e){r=!0,a=e}finally{try{i||null==s.return||s.return()}finally{if(r)throw a}}return n}}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}function g(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}var w=function(){function e(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.height={},this.width={},this.preview={},this.gameover={},this.direction=1}var t,n;return t=e,(n=[{key:"addAll",value:function(e){var t=this,n=b(r.selectElementsByClasses("options"),1);this.optionsBar=n[0];var i=b(r.selectElementsByClasses("inform-pannel"),1);this.informPannel=i[0],Object.keys(e).forEach((function(n){t[n]={};var i=t[n],a=b(r.selectElementsByClasses(n),1);i.dom=a[0],i.dom.innerElements=Array.from(i.dom.children);var o=b(i.dom.innerElements,4);i.dom.label=o[0],i.dom.increase=o[1],i.dom.value=o[2],i.dom.reduce=o[3];var s=b(Object.values(e[n]),3);i.default=s[0],i.min=s[1],i.max=s[2],t.addMouseEvents(n),i.current=i.default,t.initialValidation(n),t.checkHighlightLimit(n),i.dom.value.innerText=i.current}))}},{key:"controllerHandler",value:function(e,t,n){switch(this.direction=t){case 1:this[e].current+=1,this[e].current=this.validate(e,n-this[e].current,n),this[e].dom.value.innerText=this[e].current,this.checkHighlightLimit(e);break;case-1:this[e].current-=1,this[e].current=this.validate(e,this[e].current-n,n),this[e].dom.value.innerText=this[e].current,this.checkHighlightLimit(e)}}},{key:"checkHighlightLimit",value:function(e){this[e].current===this[e].max?this.switchClasses(this[e].dom.increase,"up","up-limit"):this.switchClasses(this[e].dom.increase,"up-limit","up"),this[e].current===this[e].min?this.switchClasses(this[e].dom.reduce,"down","down-limit"):this.switchClasses(this[e].dom.reduce,"down-limit","down")}},{key:"validate",value:function(e,t,n){return t<0?n:this.height.current*this.width.current%2?t?this[e].current+this.direction:this[e].current-this.direction:this[e].current}},{key:"initialValidation",value:function(e){this.direction=1,this[e].current=this.validate(e,this[e].max-this[e].current,this[e].max),this.direction=-1,this[e].current=this.validate(e,this[e].current-this[e].min,this[e].min)}},{key:"addMouseEvents",value:function(e){var t=this;this[e].dom.increase.onclick=function(){t.controllerHandler(e,1,t[e].max)},this[e].dom.reduce.onclick=function(){t.controllerHandler(e,-1,t[e].min)},this[e].dom.onmouseover=function(){t.optionsBar.innerText=t[e].dom.label.innerText},this[e].dom.onmouseout=function(){t.optionsBar.innerText="OPTIONS"}}},{key:"switchClasses",value:function(e,t,n){e.classList.remove(t),e.classList.add(n)}},{key:"show",value:function(){r.switchProperty("className","inform-pannel",this.informPannel)}},{key:"hide",value:function(){r.switchProperty("className","remove",this.informPannel)}}])&&g(t.prototype,n),e}(),k=n.p+"img/congratulations.c4e28.png";function C(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}new(function(){function e(){var t=this,n=0<arguments.length&&void 0!==arguments[0]?arguments[0]:{height:{default:6,min:2,max:6},width:{default:6,min:2,max:6},preview:{default:4,min:1,max:7},gameover:{default:3,min:1,max:15}};!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.settings=n,this.controllers=new w,this.field=new d((function(){return t.winCheck()})),this.timer=new p((function(){return t.field.showAll()}),(function(){return t.field.hideAll()}),(function(){return t.field.disableAll()})),this.startClass="start",this.startBtn={},this.cellsLeft=[]}var t,n;return t=e,(n=[{key:"run",value:function(){var e=this;document.cookie&&this.readCookies(),this.controllers.addAll(this.settings);var t=function(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e)){var n=[],i=!0,r=!1,a=void 0;try{for(var o,s=e[Symbol.iterator]();!(i=(o=s.next()).done)&&(n.push(o.value),!t||n.length!==t);i=!0);}catch(e){r=!0,a=e}finally{try{i||null==s.return||s.return()}finally{if(r)throw a}}return n}}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}(r.selectElementsByClasses(this.startClass),1);this.startBtn=t[0],this.startBtn.dataset.phase="start",this.startBtn.onclick=function(){e.clickStart()}}},{key:"clickStart",value:function(){"start"===this.startBtn.dataset.phase?this.start():this.stop()}},{key:"start",value:function(){this.saveCookies(),this.startBtn.dataset.phase="stop",this.startBtn.innerText="Play again",this.controllers.hide(),this.field.removeField(),this.field.build(this.controllers.height.current,this.controllers.width.current),this.timer.begin(this.controllers.preview.current,this.controllers.gameover.current)}},{key:"stop",value:function(){this.startBtn.dataset.phase="start",this.startBtn.innerText="start",this.controllers.show(),this.field.compare.abort(),this.timer.clear()}},{key:"winCheck",value:function(){if(this.cellsLeft=this.field.allCells.filter((function(e){return 1===e.childElementCount})),this.cellsLeft.length===this.field.allCells.length){this.timer.clear(),this.field.removeField();var e=r.createElement("img","congratulation");e.src=k,e.style.backgroundColor="transparent",this.field.domLocation.appendChild(e)}}},{key:"saveCookies",value:function(){document.cookie=JSON.stringify({name:"FIND THE PAIR",height:this.controllers.height.current,width:this.controllers.width.current,preview:this.controllers.preview.current,gameover:this.controllers.gameover.current})}},{key:"readCookies",value:function(){var e=JSON.parse(document.cookie);this.settings.height.default=e.height,this.settings.width.default=e.width,this.settings.preview.default=e.preview,this.settings.gameover.default=e.gameover}}])&&C(t.prototype,n),e}())({height:{default:11,min:2,max:6},width:{default:12,min:2,max:6},preview:{default:1,min:1,max:7},gameover:{default:1,min:1,max:15}}).run()}]);
//# sourceMappingURL=main.1891b.js.map