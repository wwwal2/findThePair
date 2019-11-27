!function(n){var _={};function r(e){if(_[e])return _[e].exports;var t=_[e]={i:e,l:!1,exports:{}};return n[e].call(t.exports,t,t.exports,r),t.l=!0,t.exports}r.m=n,r.c=_,r.d=function(e,t,n){r.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},r.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(t,e){if(1&e&&(t=r(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var _ in t)r.d(n,_,function(e){return t[e]}.bind(null,_));return n},r.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="",r(r.s="./src/index.js")}({"./src/assemble.js":function(module,__webpack_exports__,__webpack_require__){"use strict";eval('__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _utility_createElement__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utility/createElement */ "./src/utility/createElement.js");\n\n\nvar assemble = function assemble(stickTo) {\n  for (var _len = arguments.length, blocksGroup = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {\n    blocksGroup[_key - 1] = arguments[_key];\n  }\n\n  blocksGroup.forEach(function (block) {\n    var container = Object(_utility_createElement__WEBPACK_IMPORTED_MODULE_0__["default"])(\'div\', "".concat(block[0].className, "-container"), stickTo);\n    block.forEach(function (obj) {\n      var element = Object(_utility_createElement__WEBPACK_IMPORTED_MODULE_0__["default"])(obj.tag, obj.className, container);\n\n      if (obj.options) {\n        obj.options.forEach(function (option) {\n          element.onchange = obj.onchange;\n          var myOption = Object(_utility_createElement__WEBPACK_IMPORTED_MODULE_0__["default"])(\'option\', \'options\', element);\n          myOption.value = option.value;\n          myOption.textContent = option.textContent;\n        });\n      } else {\n        element.textContent = obj.textContent;\n        element.onclick = obj.onclick;\n      }\n    });\n  });\n};\n\n/* harmony default export */ __webpack_exports__["default"] = (assemble);\n\n//# sourceURL=webpack:///./src/assemble.js?')},"./src/autoActions.js":function(module,__webpack_exports__,__webpack_require__){"use strict";eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"hideTimeOut\", function() { return hideTimeOut; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"gameOverTimeOut\", function() { return gameOverTimeOut; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"transformMenu\", function() { return transformMenu; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"fieldSize\", function() { return fieldSize; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"clearHighlight\", function() { return clearHighlight; });\n/* harmony import */ var _utility_selectElements__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utility/selectElements */ \"./src/utility/selectElements.js\");\n/* harmony import */ var _utility_switchProperty__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./utility/switchProperty */ \"./src/utility/switchProperty.js\");\n/* harmony import */ var _utility_createElement__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./utility/createElement */ \"./src/utility/createElement.js\");\n\n\n\n\nvar hideTimeOut = function hideTimeOut(time) {\n  setTimeout(function () {\n    Object(_utility_switchProperty__WEBPACK_IMPORTED_MODULE_1__[\"default\"])('disabled', false, Object(_utility_selectElements__WEBPACK_IMPORTED_MODULE_0__[\"default\"])('field-btns'));\n    Object(_utility_switchProperty__WEBPACK_IMPORTED_MODULE_1__[\"default\"])('className', 'hidden', Object(_utility_selectElements__WEBPACK_IMPORTED_MODULE_0__[\"default\"])('images'));\n  }, time);\n};\n\nvar gameOverTimeOut = function gameOverTimeOut(time, stickTo) {\n  return setTimeout(function () {\n    Object(_utility_switchProperty__WEBPACK_IMPORTED_MODULE_1__[\"default\"])('disabled', true, Object(_utility_selectElements__WEBPACK_IMPORTED_MODULE_0__[\"default\"])('field-btns'));\n    var timeUpMessage = Object(_utility_createElement__WEBPACK_IMPORTED_MODULE_2__[\"default\"])('div', 'time-up-container', stickTo);\n    var image = Object(_utility_createElement__WEBPACK_IMPORTED_MODULE_2__[\"default\"])('img', 'time-up-image', timeUpMessage);\n    image.src = '../img/timeUp.png';\n  }, time);\n};\n\nvar transformMenu = function transformMenu() {\n  Object(_utility_switchProperty__WEBPACK_IMPORTED_MODULE_1__[\"default\"])('className', 'remove', Object(_utility_selectElements__WEBPACK_IMPORTED_MODULE_0__[\"default\"])('difficulty-btns-container', 'select-btn-container', 'start'));\n};\n\nvar clearHighlight = function clearHighlight() {\n  Object(_utility_switchProperty__WEBPACK_IMPORTED_MODULE_1__[\"default\"])('className', 'difficulty-btns', Object(_utility_selectElements__WEBPACK_IMPORTED_MODULE_0__[\"default\"])('highlight'));\n};\n\nvar fieldSize = {\n  little: [4, 4],\n  medium: [5, 5],\n  big: [6, 6]\n};\n\n\n//# sourceURL=webpack:///./src/autoActions.js?")},"./src/coreFunctions/createField.js":function(module,__webpack_exports__,__webpack_require__){"use strict";eval('__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _utility_createElement__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utility/createElement */ "./src/utility/createElement.js");\n\n\nvar createBtn = function createBtn(action) {\n  var btn = Object(_utility_createElement__WEBPACK_IMPORTED_MODULE_0__["default"])(\'button\', \'field-btns\', null);\n  btn.addEventListener(\'click\', action, true);\n  return btn;\n};\n\nvar createImg = function createImg(icons, uniqueI, uniqJ) {\n  var image = Object(_utility_createElement__WEBPACK_IMPORTED_MODULE_0__["default"])(\'img\', \'images\', null);\n  image.src = "../img/".concat(icons.pop(), ".png");\n  var imageAlt = Object.assign(image.src);\n  image.alt = imageAlt.substring(imageAlt.length - 6);\n  image.dataset.name = image.alt;\n  image.dataset.uniqueId = "".concat(uniqueI, " ").concat(uniqJ);\n  return image;\n};\n\nvar createField = function createField(fieldSize, iconsArray, stickTo, action) {\n  for (var i = 0; i < fieldSize[0]; i += 1) {\n    var row = Object(_utility_createElement__WEBPACK_IMPORTED_MODULE_0__["default"])(\'div\', \'rows\', stickTo);\n\n    for (var j = 0; j < fieldSize[1]; j += 1) {\n      var button = createBtn(action);\n      button.disabled = true;\n      var image = createImg(iconsArray, i, j);\n      row.appendChild(button);\n      button.appendChild(image);\n    }\n  }\n};\n\n/* harmony default export */ __webpack_exports__["default"] = (createField);\n\n//# sourceURL=webpack:///./src/coreFunctions/createField.js?')},"./src/coreFunctions/createGameSpace.js":function(module,__webpack_exports__,__webpack_require__){"use strict";eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _utility_createElement__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utility/createElement */ \"./src/utility/createElement.js\");\n\n\nfunction createGameSpace(stickTo) {\n  var mainContainer = Object(_utility_createElement__WEBPACK_IMPORTED_MODULE_0__[\"default\"])('div', 'main-container', stickTo);\n  var menuContainer = Object(_utility_createElement__WEBPACK_IMPORTED_MODULE_0__[\"default\"])('div', 'menu-container', mainContainer);\n  var fieldContainer = Object(_utility_createElement__WEBPACK_IMPORTED_MODULE_0__[\"default\"])('div', 'field-container', mainContainer);\n  return {\n    mainContainer: mainContainer,\n    menuContainer: menuContainer,\n    fieldContainer: fieldContainer\n  };\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (createGameSpace);\n\n//# sourceURL=webpack:///./src/coreFunctions/createGameSpace.js?")},"./src/coreFunctions/gamePictures.js":function(module,__webpack_exports__,__webpack_require__){"use strict";eval('__webpack_require__.r(__webpack_exports__);\nvar arrayLength = function arrayLength(fieldSize) {\n  return Math.ceil(fieldSize[0] * fieldSize[1] / 2);\n};\n\nvar duplicate = function duplicate(array) {\n  return array.concat(array);\n};\n\nvar shuffle = function shuffle(array) {\n  return array.sort(function () {\n    return Math.random() - 0.5;\n  });\n};\n\nvar gamePictures = function gamePictures(fieldSize) {\n  var array = [];\n\n  for (var i = arrayLength(fieldSize); i > 0; i -= 1) {\n    array.push(i);\n  }\n\n  return shuffle(duplicate(array));\n};\n\n/* harmony default export */ __webpack_exports__["default"] = (gamePictures);\n\n//# sourceURL=webpack:///./src/coreFunctions/gamePictures.js?')},"./src/coreFunctions/openImgHandler.js":function(module,__webpack_exports__,__webpack_require__){"use strict";eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"openImgHandler\", function() { return openImgHandler; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"passTimestamp\", function() { return passTimestamp; });\n/* harmony import */ var _utility_selectElements__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utility/selectElements */ \"./src/utility/selectElements.js\");\n/* harmony import */ var _utility_createElement__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utility/createElement */ \"./src/utility/createElement.js\");\n/* harmony import */ var _utility_switchProperty__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utility/switchProperty */ \"./src/utility/switchProperty.js\");\n\n\n\nvar pickArray = [];\n\nvar eraseArray = function eraseArray(array) {\n  return array.splice(0, array.length);\n};\n\nvar gameOverTimestamp;\n\nvar passTimestamp = function passTimestamp(timestamp) {\n  gameOverTimestamp = timestamp;\n};\n\nvar youWin = function youWin() {\n  var getHidden = Object(_utility_selectElements__WEBPACK_IMPORTED_MODULE_0__[\"default\"])('hidden');\n\n  if (getHidden.length === 0) {\n    clearTimeout(gameOverTimestamp);\n    Object(_utility_selectElements__WEBPACK_IMPORTED_MODULE_0__[\"default\"])('field-container')[0].remove();\n    var congratContainer = Object(_utility_createElement__WEBPACK_IMPORTED_MODULE_1__[\"default\"])('div', 'congrat-container', Object(_utility_selectElements__WEBPACK_IMPORTED_MODULE_0__[\"default\"])('main-container')[0]);\n    var image = Object(_utility_createElement__WEBPACK_IMPORTED_MODULE_1__[\"default\"])('img', 'congrat-image', congratContainer);\n    image.src = '../img/Congratulation.png';\n  }\n};\n\nvar isEven = function isEven(arr) {\n  if (arr[0].target.dataset.name === arr[1].target.dataset.name && arr[0].target.dataset.uniqueId !== arr[1].target.dataset.uniqueId) {\n    Object(_utility_switchProperty__WEBPACK_IMPORTED_MODULE_2__[\"default\"])('disabled', true, arr.map(function (obj) {\n      return obj.target.parentNode;\n    }));\n    eraseArray(arr);\n  } else {\n    setTimeout(function () {\n      Object(_utility_switchProperty__WEBPACK_IMPORTED_MODULE_2__[\"default\"])('className', 'hidden', arr.map(function (obj) {\n        return obj.target;\n      }));\n      eraseArray(arr);\n    }, 500);\n  }\n};\n\nvar openImgHandler = function openImgHandler(event) {\n  event.target.className = 'visible';\n  pickArray.push(event);\n\n  if (pickArray.length >= 2) {\n    isEven(pickArray);\n  }\n\n  youWin();\n};\n\n\n\n//# sourceURL=webpack:///./src/coreFunctions/openImgHandler.js?")},"./src/elementsData.js":function(module,__webpack_exports__,__webpack_require__){"use strict";eval("__webpack_require__.r(__webpack_exports__);\nvar getElements = function getElements(pickClass, func) {\n  return [{\n    tag: 'button',\n    className: 'difficulty-btns',\n    textContent: 'Little',\n    onclick: func\n  }, {\n    tag: 'button',\n    className: 'difficulty-btns',\n    textContent: 'Medium',\n    onclick: func\n  }, {\n    tag: 'button',\n    className: 'difficulty-btns',\n    textContent: 'Big',\n    onclick: func\n  }, {\n    tag: 'button',\n    className: 'start',\n    textContent: 'START',\n    onclick: func\n  }, {\n    tag: 'button',\n    className: 'play-again',\n    textContent: 'Play again',\n    onclick: func\n  }, {\n    tag: 'select',\n    className: 'select-btn',\n    options: [{\n      value: 3000,\n      textContent: '3 sec'\n    }, {\n      value: 4000,\n      textContent: '4 sec'\n    }, {\n      value: 5000,\n      textContent: '5 sec'\n    }, {\n      value: 6000,\n      textContent: '6 sec'\n    }, {\n      value: 7000,\n      textContent: '7 sec'\n    }],\n    onchange: func\n  }, {\n    tag: 'select',\n    className: 'select-btn',\n    options: [{\n      value: 60000,\n      textContent: '1 minute'\n    }, {\n      value: 120000,\n      textContent: '2 minutes'\n    }, {\n      value: 180000,\n      textContent: '3 minutes'\n    }, {\n      value: 240000,\n      textContent: '4 minutes'\n    }, {\n      value: 300000,\n      textContent: '5 minutes'\n    }, {\n      value: 360000,\n      textContent: '6 minutes'\n    }, {\n      value: 420000,\n      textContent: '7 minutes'\n    }, {\n      value: 480000,\n      textContent: '8 minutes'\n    }, {\n      value: 540000,\n      textContent: '9 minutes'\n    }, {\n      value: 600000,\n      textContent: 'Ten minutes!'\n    }],\n    onchange: func\n  }, {\n    tag: 'div',\n    className: 'select-textContent',\n    textContent: 'Set a preview time',\n    onclick: func\n  }, {\n    tag: 'div',\n    className: 'select-textContent',\n    textContent: 'Set a totall game time',\n    onclick: func\n  }].filter(function (btn) {\n    return btn.className === pickClass;\n  });\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (getElements);\n\n//# sourceURL=webpack:///./src/elementsData.js?")},"./src/game.js":function(module,__webpack_exports__,__webpack_require__){"use strict";eval('__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.scss */ "./src/style.scss");\n/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_style_scss__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _coreFunctions_createGameSpace__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./coreFunctions/createGameSpace */ "./src/coreFunctions/createGameSpace.js");\n/* harmony import */ var _elementsData__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./elementsData */ "./src/elementsData.js");\n/* harmony import */ var _coreFunctions_createField__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./coreFunctions/createField */ "./src/coreFunctions/createField.js");\n/* harmony import */ var _coreFunctions_gamePictures__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./coreFunctions/gamePictures */ "./src/coreFunctions/gamePictures.js");\n/* harmony import */ var _autoActions__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./autoActions */ "./src/autoActions.js");\n/* harmony import */ var _coreFunctions_openImgHandler__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./coreFunctions/openImgHandler */ "./src/coreFunctions/openImgHandler.js");\n/* harmony import */ var _assemble__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./assemble */ "./src/assemble.js");\n\n\n\n\n\n\n\n\n\nfunction initGame(defaultSettings, placeForApp) {\n  // create the game space\n  var _createGameSpace = Object(_coreFunctions_createGameSpace__WEBPACK_IMPORTED_MODULE_1__["default"])(placeForApp),\n      mainContainer = _createGameSpace.mainContainer,\n      menuContainer = _createGameSpace.menuContainer,\n      fieldContainer = _createGameSpace.fieldContainer; // default presettings\n\n\n  var settings = defaultSettings;\n  var previewTimer;\n  var gameOverTimer; // main game handlers\n\n  var timeSelectHandler = function timeSelectHandler(event) {\n    if (event.target.value < 60000) {\n      settings.preview = event.target.value;\n    } else {\n      settings.gameOver = event.target.value;\n    }\n  };\n\n  var difficultyHandler = function difficultyHandler(event) {\n    settings.difficulty = event.target.innerText.toLowerCase();\n    Object(_autoActions__WEBPACK_IMPORTED_MODULE_5__["clearHighlight"])();\n    event.target.className = \'highlight\';\n  };\n\n  var startGameHandler = function startGameHandler() {\n    var getFieldSize = _autoActions__WEBPACK_IMPORTED_MODULE_5__["fieldSize"][settings.difficulty];\n    var getPicturesNames = Object(_coreFunctions_gamePictures__WEBPACK_IMPORTED_MODULE_4__["default"])(getFieldSize);\n    Object(_coreFunctions_createField__WEBPACK_IMPORTED_MODULE_3__["default"])(getFieldSize, getPicturesNames, fieldContainer, _coreFunctions_openImgHandler__WEBPACK_IMPORTED_MODULE_6__["openImgHandler"]);\n    previewTimer = Object(_autoActions__WEBPACK_IMPORTED_MODULE_5__["hideTimeOut"])(settings.preview);\n    gameOverTimer = Object(_autoActions__WEBPACK_IMPORTED_MODULE_5__["gameOverTimeOut"])(settings.gameOver, menuContainer);\n    Object(_coreFunctions_openImgHandler__WEBPACK_IMPORTED_MODULE_6__["passTimestamp"])(gameOverTimer);\n    Object(_autoActions__WEBPACK_IMPORTED_MODULE_5__["transformMenu"])();\n  };\n\n  var playAagainHandler = function playAagainHandler() {\n    clearTimeout(previewTimer);\n    clearTimeout(gameOverTimer);\n    mainContainer.remove();\n    initGame(defaultSettings, placeForApp);\n  }; // constructing menu\n\n\n  var selectBtns = Object(_elementsData__WEBPACK_IMPORTED_MODULE_2__["default"])(\'select-btn\', timeSelectHandler);\n  var difficultyBtns = Object(_elementsData__WEBPACK_IMPORTED_MODULE_2__["default"])(\'difficulty-btns\', difficultyHandler);\n  var playAgainBtn = Object(_elementsData__WEBPACK_IMPORTED_MODULE_2__["default"])(\'play-again\', playAagainHandler);\n  var startBtn = Object(_elementsData__WEBPACK_IMPORTED_MODULE_2__["default"])(\'start\', startGameHandler);\n  Object(_assemble__WEBPACK_IMPORTED_MODULE_7__["default"])(menuContainer, selectBtns, difficultyBtns, playAgainBtn.concat(startBtn));\n}\n\n/* harmony default export */ __webpack_exports__["default"] = (initGame);\n\n//# sourceURL=webpack:///./src/game.js?')},"./src/index.js":function(module,__webpack_exports__,__webpack_require__){"use strict";eval('__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _game__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./game */ "./src/game.js");\n\nvar defaultSettings = {\n  preview: 3000,\n  gameOver: 60000,\n  difficulty: \'medium\'\n};\nObject(_game__WEBPACK_IMPORTED_MODULE_0__["default"])(defaultSettings, document.body);\n\n//# sourceURL=webpack:///./src/index.js?')},"./src/style.scss":function(module,exports,__webpack_require__){eval("// extracted by mini-css-extract-plugin\n\n//# sourceURL=webpack:///./src/style.scss?")},"./src/utility/createElement.js":function(module,__webpack_exports__,__webpack_require__){"use strict";eval('__webpack_require__.r(__webpack_exports__);\nvar createElement = function createElement(tag, className, stickTo) {\n  var element = document.createElement(tag);\n  element.className = className;\n  if (stickTo !== null) stickTo.appendChild(element);\n  return element;\n};\n\n/* harmony default export */ __webpack_exports__["default"] = (createElement);\n\n//# sourceURL=webpack:///./src/utility/createElement.js?')},"./src/utility/selectElements.js":function(module,__webpack_exports__,__webpack_require__){"use strict";eval('__webpack_require__.r(__webpack_exports__);\nvar selectElements = function selectElements() {\n  for (var _len = arguments.length, classes = new Array(_len), _key = 0; _key < _len; _key++) {\n    classes[_key] = arguments[_key];\n  }\n\n  return classes.reduce(function (acc, current) {\n    return acc.concat(Array.from(document.body.getElementsByClassName(current)));\n  }, []);\n};\n\n/* harmony default export */ __webpack_exports__["default"] = (selectElements);\n\n//# sourceURL=webpack:///./src/utility/selectElements.js?')},"./src/utility/switchProperty.js":function(module,__webpack_exports__,__webpack_require__){"use strict";eval('__webpack_require__.r(__webpack_exports__);\nvar switchProperty = function switchProperty(propertyName, value, elements) {\n  elements.forEach(function (obj) {\n    obj[propertyName] = value;\n  });\n};\n\n/* harmony default export */ __webpack_exports__["default"] = (switchProperty);\n\n//# sourceURL=webpack:///./src/utility/switchProperty.js?')}});