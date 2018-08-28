/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 2);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Styles = function () {
  function Styles() {
    _classCallCheck(this, Styles);
  }

  _createClass(Styles, [{
    key: "setItemStylesBeforeGridCreated",

    // TODO container style set in twi func - fix this !!

    value: function setItemStylesBeforeGridCreated(items, width, container, containerMaxWidth) {
      container.style.maxWidth = containerMaxWidth + "px";
      for (var e = 0; e < items.length; e++) {
        items[e].style.width = width + "px"; // item width
        items[e].style.position = "absolute"; // item position
        items[e].style.transition = "all ease .5s"; // animation
      }
    }
  }, {
    key: "setContainerStyles",
    value: function setContainerStyles(container, height, width) {
      container.style.position = 'relative';
      container.style.marginLeft = 'auto'; // depends of size, if not 100%
      container.style.marginRight = 'auto'; // depends of size, if not 100%
      container.style.height = height + "px";
      container.style.width = width + "px";
    }
  }, {
    key: "setItemStyles",
    value: function setItemStyles(item, top, left) {
      item.style.top = top + "px";
      item.style.left = left + "px";
    }
  }]);

  return Styles;
}();

exports.default = new Styles();

/***/ }),
/* 1 */,
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _Main = __webpack_require__(3);

var _Main2 = _interopRequireDefault(_Main);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

window.Chocolate = _Main2.default;

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _Grid = __webpack_require__(4);

var _Grid2 = _interopRequireDefault(_Grid);

var _Utils = __webpack_require__(6);

var _Utils2 = _interopRequireDefault(_Utils);

var _Styles = __webpack_require__(0);

var _Styles2 = _interopRequireDefault(_Styles);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

// TODO new properties: animationSpeed, fullSizeOfContainer, innerLeftRightMargin, innerBottomMargin
// TODO: TESTS

var Main = function () {
	function Main(params) {
		_classCallCheck(this, Main);

		var options = _Utils2.default.guard(params);
		var items = document.querySelectorAll(".js-item");
		var gridContainer = document.querySelector('.js-chocolate');

		_Styles2.default.setItemStylesBeforeGridCreated(items, options.columnWidth, gridContainer, options.containerMaxWidth);
		this.execGridBuilder(items, gridContainer, options);
	}

	_createClass(Main, [{
		key: 'execGridBuilder',
		value: function execGridBuilder(items, container, options) {
			function setSize() {
				var containerWidth = window.innerWidth <= options.containerMaxWidth ? window.innerWidth : options.containerMaxWidth;

				new _Grid2.default(_Utils2.default.formatData(containerWidth - options.columnWidth / 2, options, items), items, container);
			}

			setSize();

			window.addEventListener('resize', setSize);
		}
	}]);

	return Main;
}();

exports.default = Main;

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _Styles = __webpack_require__(0);

var _Styles2 = _interopRequireDefault(_Styles);

var _Utils = __webpack_require__(6);

var _Utils2 = _interopRequireDefault(_Utils);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Grid = function () {
	function Grid(params, items, container) {
		_classCallCheck(this, Grid);

		_Styles2.default.setContainerStyles(container, _Utils2.default.getContainerHeight(params.columnMargin, this.createGrid(params, items)), params.containerFullWidth);
	}

	_createClass(Grid, [{
		key: 'createGrid',
		value: function createGrid(params, items) {
			var itemsHeight = params.itemsHeight,
			    columnsNumber = params.columnsNumber,
			    columnWidth = params.columnWidth,
			    columnMargin = params.columnMargin;

			var elementsOfGrid = itemsHeight;
			var indexOfSmallestColumn = 0;
			var sumOfHeightsForColumns = 0;

			var numberOfElementsInGrid = elementsOfGrid.length;
			var grid = {};

			for (var j = 0; j < columnsNumber; j++) {
				grid[j] = [];
			}

			for (var i = 0; i < numberOfElementsInGrid; i++) {
				for (var col = 0; col < columnsNumber && elementsOfGrid.length > 0; col++) {
					// Till elements array will not be empty
					var elementOfGrid = elementsOfGrid.splice(0, 1)[0]; // Grab first element till zero length
					if (elementOfGrid) {
						// Here start to fill columns by elements
						var position = { top: 0, left: 0, index: col };
						if (grid[col].length === 0) {
							// Push first element if column is empty
							position.left = (columnWidth + columnMargin) * col;
						} else if (grid[col].length > 0) {
							// if not empty should detect smallest column
							sumOfHeightsForColumns = _Utils2.default.getSumOfHeightsForColumns(grid);
							indexOfSmallestColumn = _Utils2.default.getIndexOfSmallestColumn(sumOfHeightsForColumns);
							position.top = sumOfHeightsForColumns[indexOfSmallestColumn] + columnMargin * grid[indexOfSmallestColumn].length;
							position.left = (columnWidth + columnMargin) * indexOfSmallestColumn;
							position.index = indexOfSmallestColumn;
						}
						grid[position.index].push(elementOfGrid);
						_Styles2.default.setItemStyles(items[Object.keys(elementOfGrid)[0]], position.top, position.left);
					}
				}
			}
			return grid;
		}
	}]);

	return Grid;
}();

exports.default = Grid;

/***/ }),
/* 5 */,
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Utils = function () {
	function Utils() {
		_classCallCheck(this, Utils);

		this.getColumnNumber = function (containerWidth, columnWidth) {
			return Math.floor(containerWidth / columnWidth);
		};

		this.getContainerWidth = function (columnWidth, columnNumber, columnMargin) {
			return columnNumber * (columnWidth + columnMargin) - columnMargin;
		};

		this.getIndexOfSmallestColumn = function (allColumns) {
			return allColumns.indexOf(Math.min.apply(Math, _toConsumableArray(allColumns)));
		};

		this.getMapOfHeightsForEveryColumn = function (column) {
			return column.map(function (e) {
				return parseInt(e[Object.keys(e)[0]]);
			});
		};
	}

	_createClass(Utils, [{
		key: 'getHeightOfItems',
		value: function getHeightOfItems(items) {
			var numbers = [];
			items.forEach(function (e, i) {
				numbers.push(_defineProperty({}, i, e.clientHeight));
			});
			return numbers;
		}
	}, {
		key: 'getSumOfHeightsForColumns',
		value: function getSumOfHeightsForColumns(grid) {
			var _this = this;

			return Object.keys(grid).map(function (i) {
				var mapOfHeights = _this.getMapOfHeightsForEveryColumn(grid[i]);
				if (mapOfHeights.length === 1) {
					return mapOfHeights[0];
				} else if (mapOfHeights.length > 1) {
					return mapOfHeights.reduce(function (a, b) {
						return a + b;
					});
				}
			});
		}
	}, {
		key: 'getContainerHeight',
		value: function getContainerHeight(columnMargin, grid) {
			var sumOfHeightsForColumns = this.getSumOfHeightsForColumns(grid);
			var maxVal = Math.max.apply(Math, _toConsumableArray(sumOfHeightsForColumns));
			return maxVal + grid[sumOfHeightsForColumns.indexOf(maxVal)].length * columnMargin;
		}
	}, {
		key: 'throwError',
		value: function throwError(customMessage, errorCode) {
			throw new Error(customMessage + ': ' + errorCode);
		}
	}, {
		key: 'guard',
		value: function guard(params) {
			var properties = [{ name: 'containerSelector', type: 'string' }, { name: 'containerMaxWidth', type: 'number' }, { name: 'itemSelector', type: 'string' }, { name: 'columnWidth', type: 'number' }, { name: 'columnMargin', type: 'number' }];

			var errorCodes = {
				E_001: 'Property is not defined',
				E_002: 'Invalid type of parameter',
				E_003: 'Property is empty',
				E_004: 'Invalid size of container',
				E_005: 'Invalid value',
				E_006: 'Missing container selector property',
				E_007: 'Missing item selector property',
				E_008: 'Missing width of item',
				E_009: 'Missing margin property',
				E_010: 'Missing container max width property'
			};

			properties.map(function (property) {
				if (params.hasOwnProperty(property.name)) {
					if (_typeof(params[property.name]) === property.type) {
						if (params[property.name] === undefined && params[property.name] === null && params[property.name] === false && params[property.name] === '') {
							this.throwError(property.name, errorCodes['E_003']);
						}
					} else {
						this.throwError(property.name, errorCodes['E_002']);
					}
				} else {
					this.throwError(property.name, errorCodes['E_001']);
				}
			});
			return params;
		}
	}, {
		key: 'formatData',
		value: function formatData(containerWidth, options, items) {
			var itemSelector = options.itemSelector,
			    columnWidth = options.columnWidth,
			    columnMargin = options.columnMargin,
			    containerSelector = options.containerSelector;

			var itemsHeight = this.getHeightOfItems(items);
			var columnsNumber = this.getColumnNumber(containerWidth, columnWidth);
			var containerFullWidth = this.getContainerWidth(columnWidth, columnsNumber, columnMargin);
			return {
				itemsHeight: itemsHeight,
				columnsNumber: columnsNumber,
				itemSelector: itemSelector,
				columnWidth: columnWidth,
				columnMargin: columnMargin,
				containerSelector: containerSelector,
				containerFullWidth: containerFullWidth
			};
		}
	}]);

	return Utils;
}();

exports.default = new Utils();

/***/ })
/******/ ]);
//# sourceMappingURL=application.js.map