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
/******/ 	return __webpack_require__(__webpack_require__.s = 3);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/***/ }),
/* 1 */
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
		key: 'setItemStylesBeforeGridCreated',
		value: function setItemStylesBeforeGridCreated(items, width, container, containerMaxWidth) {
			var transitionDuration = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : 0.5;
			var transitionTimingFunction = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : 'ease';

			container.style.maxWidth = containerMaxWidth + 'px';
			items.forEach(function (item, i) {
				item.style.width = width + 'px';
				item.style.position = "absolute";
				item.style.transition = 'all ' + transitionTimingFunction + ' ' + transitionDuration + 's';
				item.querySelector('.text').textContent = '' + i; // TEMPORARY
			});
		}
	}, {
		key: 'setContainerStyles',
		value: function setContainerStyles(container, height, width) {
			container.style.position = 'relative';
			container.style.marginLeft = 'auto'; // depends of size, if not 100%
			container.style.marginRight = 'auto'; // depends of size, if not 100%
			container.style.height = height + 'px';
			container.style.width = width + 'px';
		}
	}, {
		key: 'setItemStyles',
		value: function setItemStyles(item, top, left) {
			item.style.top = top + 'px';
			item.style.left = left + 'px';
		}
	}]);

	return Styles;
}();

exports.default = new Styles();

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _types = __webpack_require__(0);

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Utils = function () {
	function Utils() {
		_classCallCheck(this, Utils);

		this.getColumnNumber = function (containerWidth, columnWidth, columnMargin) {
			var scrollBarPixelWidth = 17;
			var columnNumber = Math.floor((containerWidth + columnMargin - scrollBarPixelWidth) / (columnWidth + columnMargin));
			return columnNumber === 0 ? 1 : columnNumber;
		};

		this.getContainerWidth = function (columnWidth, columnNumber, columnMargin) {
			return columnNumber * (columnWidth + columnMargin) - columnMargin;
		};

		this.getIndexOfSmallestColumn = function (allColumns) {
			return allColumns.indexOf(Math.min.apply(Math, _toConsumableArray(allColumns)));
		};

		this.getMapOfHeightsForEveryColumn = function (column) {
			// $FlowFixMe
			return column.map(function (e) {
				return parseInt(e[Object.keys(e)[0]]);
			});
		};
	}

	_createClass(Utils, [{
		key: 'getHeightOfItems',


		// OBJECT ???
		value: function getHeightOfItems(items) {
			var numbers = [];
			items.forEach(function (e, i) {
				numbers.push(_defineProperty({}, i, e.offsetHeight));
			});
			return numbers;
		}
	}, {
		key: 'getSumOfHeightsForColumns',
		value: function getSumOfHeightsForColumns(grid) {
			var _this = this;

			// $FlowFixMe
			return Object.keys(grid).map(function (i) {
				var mapOfHeights = _this.getMapOfHeightsForEveryColumn(grid[parseInt(i)]);
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
			// $FlowFixMe
			var maxVal = Math.max.apply(Math, _toConsumableArray(sumOfHeightsForColumns));
			return maxVal + grid[sumOfHeightsForColumns.indexOf(maxVal)].length * columnMargin;
		}
	}, {
		key: 'formatData',
		value: function formatData(containerWidth, columnWidth, columnMargin, items) {
			var itemsHeight = this.getHeightOfItems(items);
			var columnsNumber = this.getColumnNumber(containerWidth, columnWidth, columnMargin);
			var containerFullWidth = this.getContainerWidth(columnWidth, columnsNumber, columnMargin);
			return {
				itemsHeight: itemsHeight,
				columnsNumber: columnsNumber,
				columnWidth: columnWidth,
				columnMargin: columnMargin,
				containerFullWidth: containerFullWidth
			};
		}
	}]);

	return Utils;
}();

exports.default = new Utils();

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _Main = __webpack_require__(4);

var _Main2 = _interopRequireDefault(_Main);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

window.Chocolate = _Main2.default;

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _types = __webpack_require__(0);

var _Grid = __webpack_require__(5);

var _Grid2 = _interopRequireDefault(_Grid);

var _Utils = __webpack_require__(2);

var _Utils2 = _interopRequireDefault(_Utils);

var _Styles = __webpack_require__(1);

var _Styles2 = _interopRequireDefault(_Styles);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

// TODO: Horizontal grid
// TODO: new properties: fullSizeOfContainer, sideMargin, bottomMargin
// TODO: TESTS

var Main = function () {
	function Main(params) {
		_classCallCheck(this, Main);

		var items = document.querySelectorAll('.chocolate-item');
		var gridContainer = document.querySelector('.chocolate-container');
		var columnWidth = params.columnWidth,
		    columnMargin = params.columnMargin,
		    containerMaxWidth = params.containerMaxWidth,
		    transitionDuration = params.transitionDuration,
		    transitionTimingFunction = params.transitionTimingFunction;


		_Styles2.default.setItemStylesBeforeGridCreated(items, columnWidth, gridContainer, containerMaxWidth, transitionDuration, transitionTimingFunction);

		this.setSize(containerMaxWidth, columnWidth, columnMargin, items, gridContainer)();

		window.addEventListener('resize', this.setSize(containerMaxWidth, columnWidth, columnMargin, items, gridContainer));
	}

	_createClass(Main, [{
		key: 'setSize',
		value: function setSize(containerMaxWidth, columnWidth, columnMargin, items, gridContainer) {
			return function () {
				var containerWidth = window.innerWidth <= containerMaxWidth ? window.innerWidth : containerMaxWidth;

				var params = _Utils2.default.formatData(containerWidth, columnWidth, columnMargin, items);

				new _Grid2.default(params, items, gridContainer);
			};
		}
	}]);

	return Main;
}();

exports.default = Main;

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _types = __webpack_require__(0);

var _Styles = __webpack_require__(1);

var _Styles2 = _interopRequireDefault(_Styles);

var _Utils = __webpack_require__(2);

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

			var grid = {};
			var elementsOfGrid = itemsHeight;
			var indexOfSmallestColumn = 0;
			var sumOfHeightsForColumns = 0;
			var numberOfElementsInGrid = elementsOfGrid.length;

			for (var j = 0; j < columnsNumber; j++) {
				grid[j] = [];
			}

			for (var i = 0; i < numberOfElementsInGrid && elementsOfGrid.length > 0; i++) {
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

/***/ })
/******/ ]);
//# sourceMappingURL=application.js.map