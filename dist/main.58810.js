!function(t){var e={};function i(n){if(e[n])return e[n].exports;var r=e[n]={i:n,l:!1,exports:{}};return t[n].call(r.exports,r,r.exports,i),r.l=!0,r.exports}i.m=t,i.c=e,i.d=function(t,e,n){i.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},i.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},i.t=function(t,e){if(1&e&&(t=i(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)i.d(n,r,function(e){return t[e]}.bind(null,r));return n},i.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return i.d(e,"a",e),e},i.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},i.p="",i(i.s=1)}([function(t,e,i){},function(t,e,i){"use strict";function n(t,e){for(var i=0;i<e.length;i++){var n=e[i];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}i.r(e),i(0);var r=function(){function t(){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t)}var e,i;return e=t,i=[{key:"createElement",value:function(t,e){var i=document.createElement(t);return i.className=e,i}},{key:"selectElementsByClasses",value:function(){for(var t=arguments.length,e=new Array(t),i=0;i<t;i++)e[i]=arguments[i];return e.reduce((function(t,e){return t.concat(Array.from(document.body.getElementsByClassName(e)))}),[])}},{key:"switchProperty",value:function(t,e){for(var i=arguments.length,n=new Array(2<i?i-2:0),r=2;r<i;r++)n[r-2]=arguments[r];return n.forEach((function(i){i[t]=e}))}},{key:"generateRandomValues",value:function(t){for(var e=[],i=t;0<i;i-=1)e.push(i);return e.concat(e).sort((function(){return Math.random()-.5}))}},{key:"addZero",value:function(t){return t<10?"0".concat(t):t}},{key:"createImg",value:function(e,i,n){var r=t.createElement("img",e);return r.disabled=!0,r.dataset.x=i,r.dataset.y=n,r}}],null&&n(e.prototype,null),i&&n(e,i),t}(),a=i.p+"img/cardBack.d4d88.jpg",s="frozen",o="active",l="opened",c="start",u="Play again",h="going";function f(t,e){for(var i=0;i<e.length;i++){var n=e[i];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}var m=function(){function t(){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this.counter=0,this.openImgTimeout=0,this.bufferCell={},this.nextBufferCell={}}var e,i;return e=t,(i=[{key:"init",value:function(t,e){t.target.dataset.state!==s&&t.target.dataset.state!==l&&(t.target.dataset.state=s,this.collect(t,e))}},{key:"collect",value:function(t,e){switch(this.counter){case 0:this.counter+=1,this.swapImage(t,e,"bufferCell");break;case 1:this.counter+=1,this.swapImage(t,e,"nextBufferCell"),this.match();break;default:t.target.dataset.state=o,t.target.classList.remove("apply-fadeIn"),t.target.classList.add("apply-shake"),setTimeout((function(){t.target.classList.remove("apply-shake")}),1e3)}}},{key:"match",value:function(){var t=this;this.bufferCell.imgSrc===this.nextBufferCell.imgSrc?(this.bufferCell.dataset.state=l,this.nextBufferCell.dataset.state=l,this.clear()):this.openImgTimeout=setTimeout((function(){t.swapBack(t.bufferCell),t.swapBack(t.nextBufferCell),t.clear()}),1e3)}},{key:"swapImage",value:function(t,e,i){t.target.src="img/cells/".concat(e,".png"),this[i]=t.target,this[i].imgSrc=e,this[i].classList.remove("cursor-pointer")}},{key:"swapBack",value:function(t){t.dataset.state=o,t.src=a,t.classList.add("cursor-pointer")}},{key:"clear",value:function(){this.counter=0,this.nextBufferCell=0,this.bufferCell=0}},{key:"abort",value:function(){this.bufferCell&&(this.bufferCell.src=a),this.nextBufferCell&&(this.nextBufferCell.src=a),clearTimeout(this.openImgTimeout),this.clear()}}])&&f(e.prototype,i),t}();function d(t,e){for(var i=0;i<e.length;i++){var n=e[i];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}var v=function(){function t(){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this.tableOfmatches=[],this.domLocation={},this.allCells=[],this.compare=new m}var e,i;return e=t,(i=[{key:"build",value:function(t){var e=this;this.tableOfmatches=[];var i=t*t;this.randomValues=r.generateRandomValues(Math.floor(i/2));var n=function(t,e){return function(t){if(Array.isArray(t))return t}(t)||function(t,e){if(Symbol.iterator in Object(t)||"[object Arguments]"===Object.prototype.toString.call(t)){var i=[],n=!0,r=!1,a=void 0;try{for(var s,o=t[Symbol.iterator]();!(n=(s=o.next()).done)&&(i.push(s.value),!e||i.length!==e);n=!0);}catch(t){r=!0,a=t}finally{try{n||null==o.return||o.return()}finally{if(r)throw a}}return i}}(t,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}(r.selectElementsByClasses("field-container"),1);return this.domLocation=n[0],this.domLocation.style.gridTemplateColumns="repeat(".concat(t,", 1fr)"),this.domLocation.classList.remove("hidden"),new Promise((function(i){for(var n=0;n<t;n+=1){e.tableOfmatches.push([]);for(var o=0;o<t;o+=1){var c=r.createImg("cells apply-fadeIn",n,o);c.src=a,c.dataset.state=s,e.allCells.push(c),e.domLocation.appendChild(c),e.tableOfmatches[n].push(e.randomValues.pop()),c.onclick=function(t){e.clickCell(t),e.cellsLeft=e.allCells.filter((function(t){return t.dataset.state===l})),e.cellsLeft.length===e.allCells.length&&i()}}}}))}},{key:"showAll",value:function(){var t=this;this.allCells.forEach((function(e){e.src="./img/cells/".concat(t.tableOfmatches[e.dataset.x][e.dataset.y],".png")}))}},{key:"hideAll",value:function(){this.allCells.forEach((function(t){t.src=a,t.dataset.state=o}))}},{key:"freezeAll",value:function(){this.allCells.forEach((function(t){t.dataset.state=s,t.classList.remove("cursor-pointer")}))}},{key:"addCursorPointer",value:function(){this.allCells.forEach((function(t){t.classList.add("cursor-pointer")}))}},{key:"clickCell",value:function(t){var e=this.tableOfmatches[t.target.dataset.x][t.target.dataset.y];this.compare.init(t,e)}},{key:"removeField",value:function(){this.domLocation.childNodes&&(this.domLocation.innerHTML="",this.allCells=[])}}])&&d(e.prototype,i),t}();function y(t,e){return function(t){if(Array.isArray(t))return t}(t)||function(t,e){if(Symbol.iterator in Object(t)||"[object Arguments]"===Object.prototype.toString.call(t)){var i=[],n=!0,r=!1,a=void 0;try{for(var s,o=t[Symbol.iterator]();!(n=(s=o.next()).done)&&(i.push(s.value),!e||i.length!==e);n=!0);}catch(t){r=!0,a=t}finally{try{n||null==o.return||o.return()}finally{if(r)throw a}}return i}}(t,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}function p(t,e){for(var i=0;i<e.length;i++){var n=e[i];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}var g=function(){function t(){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this.totalTime=0,this.minutes=0,this.seconds=0,this.timerValue={},this.timerLabel={},this.previewTimeout=0,this.gameoverTimeout=0,this.previewStatus=s}var e,i;return e=t,(i=[{key:"preview",value:function(t){var e=this,i=y(r.selectElementsByClasses("timer-container"),1);this.timerContainer=i[0];var n=y(r.selectElementsByClasses("timer-value"),1);this.timerValue=n[0];var a=y(r.selectElementsByClasses("timer-label"),1);return this.timerLabel=a[0],this.previewStatus=h,new Promise((function(i){e.previewTimeout=setTimeout((function(){e.previewStatus=s,i()}),1e3*t)}))}},{key:"gameover",value:function(t){var e=this;return this.timerContainer.classList.remove("remove"),this.totalTime=60*Number(t),this.parseTime(this.totalTime),this.timerValue.innerText="".concat(this.minutes,":").concat(this.seconds),new Promise((function(t){e.gameoverTimeout=setInterval((function(){e.totalTime-=1,e.parseTime(e.totalTime),e.timerValue.innerText="".concat(e.minutes,":").concat(e.seconds),e.totalTime<=0&&(e.clear(),t())}),1e3)}))}},{key:"clear",value:function(){clearTimeout(this.gameoverTimeout),clearTimeout(this.previewTimeout),this.previewStatus=s,""!==this.timerValue.innerText&&this.timerValue.classList.add("gameOver")}},{key:"hide",value:function(){this.timerValue.innerText="",this.timerValue.classList.remove("gameOver"),this.timerContainer.classList.add("remove")}},{key:"parseTime",value:function(t){this.minutes=Math.floor(t/60),this.seconds=t%60,this.minutes=r.addZero(this.minutes),this.seconds=r.addZero(this.seconds)}}])&&p(e.prototype,i),t}();function b(t,e){return function(t){if(Array.isArray(t))return t}(t)||function(t,e){if(Symbol.iterator in Object(t)||"[object Arguments]"===Object.prototype.toString.call(t)){var i=[],n=!0,r=!1,a=void 0;try{for(var s,o=t[Symbol.iterator]();!(n=(s=o.next()).done)&&(i.push(s.value),!e||i.length!==e);n=!0);}catch(t){r=!0,a=t}finally{try{n||null==o.return||o.return()}finally{if(r)throw a}}return i}}(t,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}function w(t,e){for(var i=0;i<e.length;i++){var n=e[i];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}var k=function(){function t(e,i,n){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this.saveSettings=e,this.buildField=i,this.removeField=n,this.fraction={},this.preview={},this.gameover={},this.direction=1}var e,i;return e=t,(i=[{key:"addAll",value:function(t){var e=this,i=b(r.selectElementsByClasses("options"),1);this.optionsBar=i[0];var n=b(r.selectElementsByClasses("inform-panel"),1);this.informPanel=n[0],Object.keys(t).forEach((function(i){e[i]={};var n=e[i],a=b(r.selectElementsByClasses(i),1);n.dom=a[0],n.dom.innerElements=Array.from(n.dom.children);var s=b(n.dom.innerElements,4);n.dom.label=s[0],n.dom.increase=s[1],n.dom.value=s[2],n.dom.reduce=s[3];var o=b(Object.values(t[i]),3);n.default=o[0],n.min=o[1],n.max=o[2],e.addMouseEvents(i),n.current=n.default,e.initialValidation(i),e.checkHighlightLimit(i),n.dom.value.innerText=n.current}))}},{key:"addMouseEvents",value:function(t){var e=this;this[t].dom.increase.onclick=function(){"fraction"===t&&e.fraction.current!==e.fraction.max&&(e.removeField(),e.buildField(e.fraction.current+2)),e.controllerHandler(t,1,e[t].max)},this[t].dom.reduce.onclick=function(){"fraction"===t&&e.fraction.current!==e.fraction.min&&(e.removeField(),e.buildField(e.fraction.current-2)),e.controllerHandler(t,-1,e[t].min)},this[t].dom.onmouseover=function(){e.optionsBar.innerText=e[t].dom.label.innerText},this[t].dom.onmouseout=function(){e.optionsBar.innerText="OPTIONS"}}},{key:"initialValidation",value:function(t){this.direction=1,this[t].current=this.validate(t,this[t].max-this[t].current,this[t].max),this.direction=-1,this[t].current=this.validate(t,this[t].current-this[t].min,this[t].min)}},{key:"controllerHandler",value:function(t,e,i){switch(this.direction=e){case 1:this[t].current+=1,this[t].current=this.validate(t,i-this[t].current,i),this[t].dom.value.innerText=this[t].current,this.checkHighlightLimit(t);break;case-1:this[t].current-=1,this[t].current=this.validate(t,this[t].current-i,i),this[t].dom.value.innerText=this[t].current,this.checkHighlightLimit(t)}this.saveSettings()}},{key:"checkHighlightLimit",value:function(t){this[t].current===this[t].max?this.switchClasses(this[t].dom.increase,"up","up-limit"):this.switchClasses(this[t].dom.increase,"up-limit","up"),this[t].current===this[t].min?this.switchClasses(this[t].dom.reduce,"down","down-limit"):this.switchClasses(this[t].dom.reduce,"down-limit","down")}},{key:"validate",value:function(t,e,i){return e<0?i:this.fraction.current%2?e?this[t].current+this.direction:this[t].current-this.direction:this[t].current}},{key:"switchClasses",value:function(t,e,i){t.classList.remove(e),t.classList.add(i)}},{key:"show",value:function(){r.switchProperty("className","inform-panel",this.informPanel)}},{key:"hide",value:function(){r.switchProperty("className","remove",this.informPanel)}}])&&w(e.prototype,i),t}(),C=i.p+"img/congratulations.c4e28.png";function T(t,e){return function(t){if(Array.isArray(t))return t}(t)||function(t,e){if(Symbol.iterator in Object(t)||"[object Arguments]"===Object.prototype.toString.call(t)){var i=[],n=!0,r=!1,a=void 0;try{for(var s,o=t[Symbol.iterator]();!(n=(s=o.next()).done)&&(i.push(s.value),!e||i.length!==e);n=!0);}catch(t){r=!0,a=t}finally{try{n||null==o.return||o.return()}finally{if(r)throw a}}return i}}(t,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}function x(t,e){for(var i=0;i<e.length;i++){var n=e[i];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}new(function(){function t(e){var i=this;!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this.settings=e,this.field=new v,this.controllers=new k((function(){return i.saveSettings()}),(function(t){return i.field.build(t)}),(function(){return i.field.removeField()})),this.timer=new g,this.startClass=c,this.startBtn={},this.cellsLeft=[],this.congratulation={}}var e,i;return e=t,(i=[{key:"run",value:function(){var t=this;localStorage.getItem("FindThePairGrid")&&this.readSettings(),this.controllers.addAll(this.settings),this.field.build(this.controllers.fraction.current).then((function(){return t.win()}));var e=T(r.selectElementsByClasses(this.startClass),1);this.startBtn=e[0],this.startBtn.dataset.phase=c,this.startBtn.onclick=function(){t.clickStart()}}},{key:"clickStart",value:function(){this.startBtn.dataset.phase===c?this.start():this.stop()}},{key:"start",value:function(){var t=this;this.startBtn.dataset.phase=u,this.startBtn.innerText=u,this.controllers.hide(),this.field.removeField(),this.field.build(this.controllers.fraction.current).then((function(){return t.win()})),this.field.showAll(),this.timer.preview(this.controllers.preview.current).then((function(){return t.field.hideAll(),t.field.addCursorPointer(),t.timer.gameover(t.controllers.gameover.current)})).then((function(){t.field.freezeAll()}))}},{key:"stop",value:function(){this.startBtn.dataset.phase=c,this.startBtn.innerText=c,this.controllers.show(),this.field.compare.abort(),this.timer.previewStatus===h&&this.field.hideAll(),this.timer.clear(),this.timer.hide(),this.field.freezeAll(),this.congratulationRemove()}},{key:"win",value:function(){this.timer.clear(),this.timer.hide(),this.field.removeField(),this.field.domLocation.classList.add("hidden");var t=T(r.selectElementsByClasses("congratulation"),1);this.congratulation=t[0];var e=r.createElement("img","winImage");e.src=C,this.congratulation.appendChild(e)}},{key:"congratulationRemove",value:function(){var t=this;this.congratulation.children&&this.congratulation.children.item(0)&&(this.congratulation.children.item(0).remove(),this.field.build(this.controllers.fraction.current).then((function(){return t.win()})))}},{key:"saveSettings",value:function(){localStorage.setItem("FindThePairGrid",JSON.stringify({fraction:this.controllers.fraction.current,preview:this.controllers.preview.current,gameover:this.controllers.gameover.current}))}},{key:"readSettings",value:function(){var t=localStorage.getItem("FindThePairGrid"),e=JSON.parse(t);this.settings.fraction.default=e.fraction,this.settings.preview.default=e.preview,this.settings.gameover.default=e.gameover}}])&&x(e.prototype,i),t}())({fraction:{default:4,min:2,max:6},preview:{default:1,min:1,max:7},gameover:{default:1,min:1,max:15}}).run()}]);
//# sourceMappingURL=main.58810.js.map