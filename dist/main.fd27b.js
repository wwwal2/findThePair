!function(_){var n={};function r(e){if(n[e])return n[e].exports;var t=n[e]={i:e,l:!1,exports:{}};return _[e].call(t.exports,t,t.exports,r),t.l=!0,t.exports}r.m=_,r.c=n,r.d=function(e,t,_){r.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:_})},r.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(t,e){if(1&e&&(t=r(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var _=Object.create(null);if(r.r(_),Object.defineProperty(_,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)r.d(_,n,function(e){return t[e]}.bind(null,n));return _},r.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="",r(r.s="./src/index.js")}({"./src/autoActions.js":function(module,__webpack_exports__,__webpack_require__){"use strict";eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"gameOverTimeOut\", function() { return gameOverTimeOut; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"transformMenu\", function() { return transformMenu; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"clearHighlight\", function() { return clearHighlight; });\n/* harmony import */ var _utility_selectElements__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utility/selectElements */ \"./src/utility/selectElements.js\");\n/* harmony import */ var _utility_switchProperty__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./utility/switchProperty */ \"./src/utility/switchProperty.js\");\n/* harmony import */ var _utility_createElement__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./utility/createElement */ \"./src/utility/createElement.js\");\n\n\n\n\nvar gameOverTimeOut = function gameOverTimeOut(time, stickTo) {\n  return setTimeout(function () {\n    Object(_utility_switchProperty__WEBPACK_IMPORTED_MODULE_1__[\"default\"])('disabled', true, Object(_utility_selectElements__WEBPACK_IMPORTED_MODULE_0__[\"default\"])('field-btns'));\n    var timeUpMessage = Object(_utility_createElement__WEBPACK_IMPORTED_MODULE_2__[\"default\"])('div', 'time-up-container', stickTo);\n    var image = Object(_utility_createElement__WEBPACK_IMPORTED_MODULE_2__[\"default\"])('img', 'time-up-image', timeUpMessage);\n    image.src = '../img/timeUp.png';\n  }, time);\n};\n\nvar transformMenu = function transformMenu() {\n  Object(_utility_switchProperty__WEBPACK_IMPORTED_MODULE_1__[\"default\"])('className', 'remove', Object(_utility_selectElements__WEBPACK_IMPORTED_MODULE_0__[\"default\"])('difficulty-btns-container', 'select-btn-container', 'start'));\n};\n\nvar clearHighlight = function clearHighlight() {\n  Object(_utility_switchProperty__WEBPACK_IMPORTED_MODULE_1__[\"default\"])('className', 'difficulty-btns', Object(_utility_selectElements__WEBPACK_IMPORTED_MODULE_0__[\"default\"])('highlight'));\n};\n\n\n\n//# sourceURL=webpack:///./src/autoActions.js?")},"./src/blockGenerator.js":function(module,__webpack_exports__,__webpack_require__){"use strict";eval('__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _utility_createElement__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utility/createElement */ "./src/utility/createElement.js");\n\n\nvar blockGenerator = function blockGenerator(stickTo) {\n  for (var _len = arguments.length, blocksGroup = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {\n    blocksGroup[_key - 1] = arguments[_key];\n  }\n\n  blocksGroup.forEach(function (block) {\n    var container = Object(_utility_createElement__WEBPACK_IMPORTED_MODULE_0__["default"])(\'div\', "".concat(block[0].className, "-container"), stickTo);\n    block.forEach(function (obj) {\n      var element = Object(_utility_createElement__WEBPACK_IMPORTED_MODULE_0__["default"])(obj.tag, obj.className, container);\n\n      if (obj.options) {\n        element.onchange = obj.onchange;\n        obj.options.forEach(function (option) {\n          var myOption = Object(_utility_createElement__WEBPACK_IMPORTED_MODULE_0__["default"])(\'option\', \'options\', element);\n          Object.assign(myOption, option);\n        });\n      } else {\n        Object.assign(element, obj);\n      }\n    });\n  });\n};\n\n/* harmony default export */ __webpack_exports__["default"] = (blockGenerator);\n\n//# sourceURL=webpack:///./src/blockGenerator.js?')},"./src/createGameSpace.js":function(module,__webpack_exports__,__webpack_require__){"use strict";eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _utility_createElement__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utility/createElement */ \"./src/utility/createElement.js\");\n\n\nfunction createGameSpace(stickTo) {\n  var mainContainer = Object(_utility_createElement__WEBPACK_IMPORTED_MODULE_0__[\"default\"])('div', 'main-container', stickTo);\n  var menuContainer = Object(_utility_createElement__WEBPACK_IMPORTED_MODULE_0__[\"default\"])('div', 'menu-container', mainContainer);\n  var fieldContainer = Object(_utility_createElement__WEBPACK_IMPORTED_MODULE_0__[\"default\"])('div', 'field-container', mainContainer);\n  return {\n    mainContainer: mainContainer,\n    menuContainer: menuContainer,\n    fieldContainer: fieldContainer\n  };\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (createGameSpace);\n\n//# sourceURL=webpack:///./src/createGameSpace.js?")},"./src/elementsData.js":function(module,__webpack_exports__,__webpack_require__){"use strict";eval("__webpack_require__.r(__webpack_exports__);\nvar getElements = function getElements(pickClass, func) {\n  return [{\n    tag: 'button',\n    className: 'difficulty-btns',\n    textContent: 'Little',\n    onclick: func\n  }, {\n    tag: 'button',\n    className: 'difficulty-btns',\n    textContent: 'Medium',\n    onclick: func\n  }, {\n    tag: 'button',\n    className: 'difficulty-btns',\n    textContent: 'Big',\n    onclick: func\n  }, {\n    tag: 'button',\n    className: 'start',\n    textContent: 'START',\n    onclick: func\n  }, {\n    tag: 'button',\n    className: 'play-again',\n    textContent: 'Play again',\n    onclick: func\n  }, {\n    tag: 'select',\n    className: 'select-btn',\n    options: [{\n      value: 3000,\n      textContent: '3 sec'\n    }, {\n      value: 4000,\n      textContent: '4 sec'\n    }, {\n      value: 5000,\n      textContent: '5 sec'\n    }, {\n      value: 6000,\n      textContent: '6 sec'\n    }, {\n      value: 7000,\n      textContent: '7 sec'\n    }],\n    onchange: func\n  }, {\n    tag: 'select',\n    className: 'select-btn',\n    options: [{\n      value: 60000,\n      textContent: '1 minute'\n    }, {\n      value: 120000,\n      textContent: '2 minutes'\n    }, {\n      value: 180000,\n      textContent: '3 minutes'\n    }, {\n      value: 240000,\n      textContent: '4 minutes'\n    }, {\n      value: 300000,\n      textContent: '5 minutes'\n    }, {\n      value: 360000,\n      textContent: '6 minutes'\n    }, {\n      value: 420000,\n      textContent: '7 minutes'\n    }, {\n      value: 480000,\n      textContent: '8 minutes'\n    }, {\n      value: 540000,\n      textContent: '9 minutes'\n    }, {\n      value: 600000,\n      textContent: 'Ten minutes!'\n    }],\n    onchange: func\n  }, {\n    tag: 'div',\n    className: 'select-textContent',\n    textContent: 'Set a preview time',\n    onclick: func\n  }, {\n    tag: 'div',\n    className: 'select-textContent',\n    textContent: 'Set a totall game time',\n    onclick: func\n  }].filter(function (btn) {\n    return btn.className === pickClass;\n  });\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (getElements);\n\n//# sourceURL=webpack:///./src/elementsData.js?")},"./src/game/compare.js":function(module,__webpack_exports__,__webpack_require__){"use strict";eval('__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _counter__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./counter */ "./src/game/counter.js");\n/* harmony import */ var _utility_switchProperty__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utility/switchProperty */ "./src/utility/switchProperty.js");\n\n\nvar picked = 0;\n\nvar getNum = function getNum(obj) {\n  var shortcut = obj.children.item(0).src;\n  return shortcut.replace(/\\D/g, \'\').substring(4, shortcut.length);\n};\n\nvar compare = function compare(object) {\n  if (picked === 0) {\n    picked = object;\n    return;\n  }\n\n  if (getNum(picked) === getNum(object)) {\n    picked = 0;\n    Object(_counter__WEBPACK_IMPORTED_MODULE_0__["refresh"])();\n  } else {\n    setTimeout(function () {\n      object.children.item(0).remove();\n      picked.children.item(0).remove();\n      Object(_utility_switchProperty__WEBPACK_IMPORTED_MODULE_1__["default"])(\'disabled\', false, [object, picked]);\n      picked = 0;\n      Object(_counter__WEBPACK_IMPORTED_MODULE_0__["refresh"])();\n    }, 800);\n  }\n};\n\n/* harmony default export */ __webpack_exports__["default"] = (compare);\n\n//# sourceURL=webpack:///./src/game/compare.js?')},"./src/game/counter.js":function(module,__webpack_exports__,__webpack_require__){"use strict";eval('__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "refresh", function() { return refresh; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "increase", function() { return increase; });\n// function counter() {\nvar count = 0;\n\nfunction refresh() {\n  count = 0;\n}\n\nfunction increase() {\n  count += 1;\n  return count;\n}\n\n\n\n//# sourceURL=webpack:///./src/game/counter.js?')},"./src/game/createField.js":function(module,__webpack_exports__,__webpack_require__){"use strict";eval('__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _utility_createElement__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utility/createElement */ "./src/utility/createElement.js");\n/* harmony import */ var _createImage__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./createImage */ "./src/game/createImage.js");\n\n\n\nvar createField = function createField(stickTo, field, gameAction, tableOfMatches) {\n  for (var i = 0; i < field[0]; i += 1) {\n    var row = Object(_utility_createElement__WEBPACK_IMPORTED_MODULE_0__["default"])(\'div\', \'rows\', stickTo);\n\n    for (var j = 0; j < field[1]; j += 1) {\n      var button = Object(_utility_createElement__WEBPACK_IMPORTED_MODULE_0__["default"])(\'button\', \'field-btns\', row);\n      button.dataset.x = i;\n      button.dataset.y = j;\n      button.onclick = gameAction;\n      button.disabled = true;\n      Object(_createImage__WEBPACK_IMPORTED_MODULE_1__["default"])(button, tableOfMatches, i, j);\n    }\n  }\n};\n\n/* harmony default export */ __webpack_exports__["default"] = (createField);\n\n//# sourceURL=webpack:///./src/game/createField.js?')},"./src/game/createImage.js":function(module,__webpack_exports__,__webpack_require__){"use strict";eval('__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _utility_createElement__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utility/createElement */ "./src/utility/createElement.js");\n\n\nvar createImage = function createImage(stickTo, tableOfMatches, x, y) {\n  var image = Object(_utility_createElement__WEBPACK_IMPORTED_MODULE_0__["default"])(\'img\', \'image\', stickTo);\n  image.src = "../img/".concat(tableOfMatches[x][y], ".png");\n};\n\n/* harmony default export */ __webpack_exports__["default"] = (createImage);\n\n//# sourceURL=webpack:///./src/game/createImage.js?')},"./src/game/fieldSizes.js":function(module,__webpack_exports__,__webpack_require__){"use strict";eval('__webpack_require__.r(__webpack_exports__);\nvar fieldSizes = {\n  little: [4, 4],\n  medium: [5, 5],\n  big: [6, 6]\n};\n/* harmony default export */ __webpack_exports__["default"] = (fieldSizes);\n\n//# sourceURL=webpack:///./src/game/fieldSizes.js?')},"./src/game/game.js":function(module,__webpack_exports__,__webpack_require__){"use strict";eval('__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _utility_switchProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utility/switchProperty */ "./src/utility/switchProperty.js");\n/* harmony import */ var _fieldSizes__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./fieldSizes */ "./src/game/fieldSizes.js");\n/* harmony import */ var _getRandomValues__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./getRandomValues */ "./src/game/getRandomValues.js");\n/* harmony import */ var _createField__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./createField */ "./src/game/createField.js");\n/* harmony import */ var _generateToM__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./generateToM */ "./src/game/generateToM.js");\n/* harmony import */ var _createImage__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./createImage */ "./src/game/createImage.js");\n/* harmony import */ var _compare__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./compare */ "./src/game/compare.js");\n/* harmony import */ var _counter__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./counter */ "./src/game/counter.js");\n/* harmony import */ var _youWin__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./youWin */ "./src/game/youWin.js");\n/* harmony import */ var _hidePictures__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./hidePictures */ "./src/game/hidePictures.js");\n\n\n\n\n\n\n\n\n\n\n\nvar initGame = function initGame(stickTo, settings, gameOverTimeStamp) {\n  var field = _fieldSizes__WEBPACK_IMPORTED_MODULE_1__["default"][settings.difficulty];\n  var randomValues = Object(_getRandomValues__WEBPACK_IMPORTED_MODULE_2__["default"])(field);\n  var tableOfMatches = Object(_generateToM__WEBPACK_IMPORTED_MODULE_4__["default"])(field, randomValues);\n\n  var gameAction = function gameAction(event) {\n    var eData = event.target.dataset;\n    Object(_utility_switchProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(\'disabled\', true, [event.target]);\n    var count = Object(_counter__WEBPACK_IMPORTED_MODULE_7__["increase"])();\n\n    if (count < 3) {\n      Object(_createImage__WEBPACK_IMPORTED_MODULE_5__["default"])(event.target, tableOfMatches, eData.x, eData.y);\n      Object(_compare__WEBPACK_IMPORTED_MODULE_6__["default"])(event.target);\n    } else {\n      event.target.classList.add(\'apply-shake\');\n      setTimeout(function () {\n        event.target.classList.remove(\'apply-shake\');\n      }, 500);\n      Object(_utility_switchProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(\'disabled\', false, [event.target]);\n    }\n\n    Object(_youWin__WEBPACK_IMPORTED_MODULE_8__["default"])(gameOverTimeStamp);\n  };\n\n  Object(_createField__WEBPACK_IMPORTED_MODULE_3__["default"])(stickTo, field, gameAction, tableOfMatches);\n  Object(_hidePictures__WEBPACK_IMPORTED_MODULE_9__["default"])(settings.preview);\n};\n\n/* harmony default export */ __webpack_exports__["default"] = (initGame);\n\n//# sourceURL=webpack:///./src/game/game.js?')},"./src/game/generateToM.js":function(module,__webpack_exports__,__webpack_require__){"use strict";eval('__webpack_require__.r(__webpack_exports__);\nvar generateTableOfMatches = function generateTableOfMatches(fieldSize, values) {\n  var tableOfMatches = [];\n\n  for (var i = 0; i < fieldSize[0]; i += 1) {\n    tableOfMatches.push([]);\n\n    for (var j = 0; j < fieldSize[1]; j += 1) {\n      tableOfMatches[i].push(values.pop());\n    }\n  }\n\n  return tableOfMatches;\n};\n\n/* harmony default export */ __webpack_exports__["default"] = (generateTableOfMatches);\n\n//# sourceURL=webpack:///./src/game/generateToM.js?')},"./src/game/getRandomValues.js":function(module,__webpack_exports__,__webpack_require__){"use strict";eval('__webpack_require__.r(__webpack_exports__);\nvar arrayLength = function arrayLength(fieldSize) {\n  return Math.ceil(fieldSize[0] * fieldSize[1] / 2);\n};\n\nvar duplicate = function duplicate(array) {\n  return array.concat(array);\n};\n\nvar shuffle = function shuffle(array) {\n  return array.sort(function () {\n    return Math.random() - 0.5;\n  });\n};\n\nvar getRandomValues = function getRandomValues(fieldSize) {\n  var array = [];\n\n  for (var i = arrayLength(fieldSize); i > 0; i -= 1) {\n    array.push(i);\n  }\n\n  return shuffle(duplicate(array));\n};\n\n/* harmony default export */ __webpack_exports__["default"] = (getRandomValues);\n\n//# sourceURL=webpack:///./src/game/getRandomValues.js?')},"./src/game/hidePictures.js":function(module,__webpack_exports__,__webpack_require__){"use strict";eval('__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _utility_selectElements__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utility/selectElements */ "./src/utility/selectElements.js");\n\n\nvar hidePictures = function hidePictures(timer) {\n  var buttons = Object(_utility_selectElements__WEBPACK_IMPORTED_MODULE_0__["default"])(\'field-btns\');\n  setTimeout(function () {\n    buttons.forEach(function (btn) {\n      btn.removeChild(btn.firstChild);\n      btn.disabled = false;\n    });\n  }, timer);\n};\n\n/* harmony default export */ __webpack_exports__["default"] = (hidePictures);\n\n//# sourceURL=webpack:///./src/game/hidePictures.js?')},"./src/game/youWin.js":function(module,__webpack_exports__,__webpack_require__){"use strict";eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _utility_selectElements__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utility/selectElements */ \"./src/utility/selectElements.js\");\n/* harmony import */ var _utility_createElement__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utility/createElement */ \"./src/utility/createElement.js\");\n\n\n\nvar youWin = function youWin(timeStamp) {\n  var buttons = Object(_utility_selectElements__WEBPACK_IMPORTED_MODULE_0__[\"default\"])('field-btns').filter(function (btn) {\n    return btn.childElementCount === 0;\n  });\n\n  if (buttons.length === 0) {\n    Object(_utility_selectElements__WEBPACK_IMPORTED_MODULE_0__[\"default\"])('field-container')[0].remove();\n    var congratContainer = Object(_utility_createElement__WEBPACK_IMPORTED_MODULE_1__[\"default\"])('div', 'congrat-container', Object(_utility_selectElements__WEBPACK_IMPORTED_MODULE_0__[\"default\"])('main-container')[0]);\n    var image = Object(_utility_createElement__WEBPACK_IMPORTED_MODULE_1__[\"default\"])('img', 'congrat-image', congratContainer);\n    image.src = '../img/Congratulation.png';\n    clearTimeout(timeStamp);\n  }\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (youWin);\n\n//# sourceURL=webpack:///./src/game/youWin.js?")},"./src/index.js":function(module,__webpack_exports__,__webpack_require__){"use strict";eval('__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _menu__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./menu */ "./src/menu.js");\n\nvar defaultSettings = {\n  preview: 3000,\n  gameOver: 60000,\n  difficulty: \'medium\'\n};\nObject(_menu__WEBPACK_IMPORTED_MODULE_0__["default"])(defaultSettings, document.body);\n\n//# sourceURL=webpack:///./src/index.js?')},"./src/menu.js":function(module,__webpack_exports__,__webpack_require__){"use strict";eval('__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.scss */ "./src/style.scss");\n/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_style_scss__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _createGameSpace__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./createGameSpace */ "./src/createGameSpace.js");\n/* harmony import */ var _elementsData__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./elementsData */ "./src/elementsData.js");\n/* harmony import */ var _autoActions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./autoActions */ "./src/autoActions.js");\n/* harmony import */ var _blockGenerator__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./blockGenerator */ "./src/blockGenerator.js");\n/* harmony import */ var _game_game__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./game/game */ "./src/game/game.js");\n\n\n\n\n\n\n\nfunction initMenu(defaultSettings, placeForApp) {\n  // create the game space\n  var _createGameSpace = Object(_createGameSpace__WEBPACK_IMPORTED_MODULE_1__["default"])(placeForApp),\n      mainContainer = _createGameSpace.mainContainer,\n      menuContainer = _createGameSpace.menuContainer,\n      fieldContainer = _createGameSpace.fieldContainer; // default presettings\n\n\n  var settings = defaultSettings;\n  var timeStamp; // main game handlers\n\n  var timeSelectHandler = function timeSelectHandler(event) {\n    if (event.target.value < 60000) {\n      settings.preview = event.target.value;\n    } else {\n      settings.gameOver = event.target.value;\n    }\n  };\n\n  var difficultyHandler = function difficultyHandler(event) {\n    settings.difficulty = event.target.innerText.toLowerCase();\n    Object(_autoActions__WEBPACK_IMPORTED_MODULE_3__["clearHighlight"])();\n    event.target.className = \'highlight\';\n  };\n\n  var startGameHandler = function startGameHandler() {\n    timeStamp = Object(_autoActions__WEBPACK_IMPORTED_MODULE_3__["gameOverTimeOut"])(settings.gameOver, menuContainer);\n    Object(_game_game__WEBPACK_IMPORTED_MODULE_5__["default"])(fieldContainer, settings, timeStamp);\n    Object(_autoActions__WEBPACK_IMPORTED_MODULE_3__["transformMenu"])();\n  };\n\n  var playAagainHandler = function playAagainHandler() {\n    mainContainer.remove();\n    initMenu(defaultSettings, placeForApp);\n    clearTimeout(timeStamp);\n  }; // constructing menu\n\n\n  var selectBtns = Object(_elementsData__WEBPACK_IMPORTED_MODULE_2__["default"])(\'select-btn\', timeSelectHandler);\n  var difficultyBtns = Object(_elementsData__WEBPACK_IMPORTED_MODULE_2__["default"])(\'difficulty-btns\', difficultyHandler);\n  var playAgainBtn = Object(_elementsData__WEBPACK_IMPORTED_MODULE_2__["default"])(\'play-again\', playAagainHandler);\n  var startBtn = Object(_elementsData__WEBPACK_IMPORTED_MODULE_2__["default"])(\'start\', startGameHandler);\n  Object(_blockGenerator__WEBPACK_IMPORTED_MODULE_4__["default"])(menuContainer, selectBtns, difficultyBtns, playAgainBtn.concat(startBtn));\n}\n\n/* harmony default export */ __webpack_exports__["default"] = (initMenu);\n\n//# sourceURL=webpack:///./src/menu.js?')},"./src/style.scss":function(module,exports,__webpack_require__){eval("// extracted by mini-css-extract-plugin\n\n//# sourceURL=webpack:///./src/style.scss?")},"./src/utility/createElement.js":function(module,__webpack_exports__,__webpack_require__){"use strict";eval('__webpack_require__.r(__webpack_exports__);\nvar createElement = function createElement(tag, className, stickTo) {\n  var element = document.createElement(tag);\n  element.className = className;\n  if (stickTo !== null) stickTo.appendChild(element);\n  return element;\n};\n\n/* harmony default export */ __webpack_exports__["default"] = (createElement);\n\n//# sourceURL=webpack:///./src/utility/createElement.js?')},"./src/utility/selectElements.js":function(module,__webpack_exports__,__webpack_require__){"use strict";eval('__webpack_require__.r(__webpack_exports__);\nvar selectElements = function selectElements() {\n  for (var _len = arguments.length, classes = new Array(_len), _key = 0; _key < _len; _key++) {\n    classes[_key] = arguments[_key];\n  }\n\n  return classes.reduce(function (acc, current) {\n    return acc.concat(Array.from(document.body.getElementsByClassName(current)));\n  }, []);\n};\n\n/* harmony default export */ __webpack_exports__["default"] = (selectElements);\n\n//# sourceURL=webpack:///./src/utility/selectElements.js?')},"./src/utility/switchProperty.js":function(module,__webpack_exports__,__webpack_require__){"use strict";eval('__webpack_require__.r(__webpack_exports__);\nvar switchProperty = function switchProperty(propertyName, value, elements) {\n  elements.forEach(function (obj) {\n    obj[propertyName] = value;\n  });\n};\n\n/* harmony default export */ __webpack_exports__["default"] = (switchProperty);\n\n//# sourceURL=webpack:///./src/utility/switchProperty.js?')}});