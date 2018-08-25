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

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _Errors = __webpack_require__(6);

var _Errors2 = _interopRequireDefault(_Errors);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Helper = function () {
	function Helper() {
		_classCallCheck(this, Helper);

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

	_createClass(Helper, [{
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
		key: 'parametersChecker',
		value: function parametersChecker(params) {
			var properties = [{ name: 'containerSelector', type: 'string' }, { name: 'containerMaxWidth', type: 'number' }, { name: 'itemSelector', type: 'string' }, { name: 'columnWidth', type: 'number' }, { name: 'columnMargin', type: 'number' }];

			properties.map(function (property) {
				if (params.hasOwnProperty(property.name)) {
					if (_typeof(params[property.name]) === property.type) {
						if (params[property.name] === undefined && params[property.name] === null && params[property.name] === false && params[property.name] === '') {
							_Errors2.default.throwError(property.name, 'E_003');
						}
					} else {
						_Errors2.default.throwError(property.name, 'E_002');
					}
				} else {
					_Errors2.default.throwError(property.name, 'E_001');
				}
			});
			return params;
		}
	}, {
		key: 'incomingData',
		value: function incomingData(containerWidth, options, items) {
			var numbers = this.getHeightOfItems(items);
			var columns = this.getColumnNumber(containerWidth, options.columnWidth);
			var containerFullWidth = this.getContainerWidth(options.columnWidth, columns, options.columnMargin);
			return {
				itemsHeight: numbers,
				columnsNumber: columns,
				itemSelector: options.itemSelector,
				itemWidth: options.columnWidth,
				itemMargin: options.columnMargin,
				containerSelector: options.containerSelector,
				containerFullWidth: containerFullWidth
			};
		}
	}]);

	return Helper;
}();

exports.default = new Helper();

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
    key: "setItemStylesBeforeGridCreated",


    /**
     * Good way to set styles on items before grid is ready
     * @param items
     * @param itemWidth
     * @param container
     * @param containerMaxWidth
     */
    value: function setItemStylesBeforeGridCreated(items, itemWidth, container, containerMaxWidth) {
      container.style.maxWidth = containerMaxWidth + "px";
      for (var e = 0; e < items.length; e++) {
        items[e].style.width = itemWidth + "px"; // item width
        items[e].style.position = "absolute"; // item position
        items[e].style.transition = "all ease .5s"; // animation
      }
    }

    /**
    * Set width, height and margin of container
     * @param container
     * @param height
     * @param width
     */

  }, {
    key: "setContainerStyles",
    value: function setContainerStyles(container, height, width) {
      container.style.position = 'relative';
      container.style.marginLeft = 'auto'; // depends of size, if not 100%
      container.style.marginRight = 'auto'; // depends of size, if not 100%
      container.style.height = height + "px";
      container.style.width = width + "px";
    }

    /**
    * Set item of grid styles
     * @param item
     * @param top
     * @param left
     */

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
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _Chocolate = __webpack_require__(3);

var _Chocolate2 = _interopRequireDefault(_Chocolate);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

window.Chocolate = _Chocolate2.default;

exports.default = _Chocolate2.default;

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _Styles = __webpack_require__(1);

var _Styles2 = _interopRequireDefault(_Styles);

var _Main = __webpack_require__(4);

var _Main2 = _interopRequireDefault(_Main);

var _Helper = __webpack_require__(0);

var _Helper2 = _interopRequireDefault(_Helper);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Chocolate = function Chocolate(params) {
	_classCallCheck(this, Chocolate);

	var options = _Helper2.default.parametersChecker(params);
	var items = document.querySelectorAll(".js-item");
	var gridContainer = document.querySelector('.js-chocolate');

	// *********** Set styles *********** //
	_Styles2.default.setItemStylesBeforeGridCreated(items, options.columnWidth, gridContainer, options.containerMaxWidth);

	// *********** Resize *********** //
	_Main2.default.runResize(items, gridContainer, options);
};

exports.default = Chocolate;

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _Grid = __webpack_require__(5);

var _Grid2 = _interopRequireDefault(_Grid);

var _Helper = __webpack_require__(0);

var _Helper2 = _interopRequireDefault(_Helper);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

// TODO new properties: animationSpeed, full size of container

var Main = function () {
    function Main() {
        _classCallCheck(this, Main);
    }

    _createClass(Main, [{
        key: 'runResize',
        value: function runResize(items, container, options) {
            function setSize() {
                var containerWidth = window.innerWidth <= options.containerMaxWidth ? window.innerWidth : options.containerMaxWidth;

                new _Grid2.default(_Helper2.default.incomingData(containerWidth - options.columnWidth / 2, options, items), items, container);
            }

            setSize();

            // Event Observer
            window.addEventListener('resize', setSize);
        }
    }]);

    return Main;
}();

exports.default = new Main();

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _Styles = __webpack_require__(1);

var _Styles2 = _interopRequireDefault(_Styles);

var _Helper = __webpack_require__(0);

var _Helper2 = _interopRequireDefault(_Helper);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Grid = function () {
    function Grid(params, items, container) {
        _classCallCheck(this, Grid);

        this.setGridContainerStyles(params, container, this.createGrid(params, items));
    }

    _createClass(Grid, [{
        key: 'createGrid',
        value: function createGrid(params, items) {
            // TODO params destruction ?

            var elementsOfGrid = params.itemsHeight;
            var numberOfColumns = params.columnsNumber;
            var indexOfSmallestColumn = 0;
            var sumOfHeightsForColumns = 0;

            var numberOfElementsInGrid = elementsOfGrid.length;
            var grid = {};

            // Set columns amount
            for (var j = 0; j < numberOfColumns; j++) {
                grid[j] = [];
            }

            for (var i = 0; i < numberOfElementsInGrid; i++) {
                for (var col = 0; col < numberOfColumns && elementsOfGrid.length > 0; col++) {
                    // Till elements array will not be empty
                    var elementOfGrid = elementsOfGrid.splice(0, 1)[0]; // Grab first element till zero length

                    if (elementOfGrid) {
                        // Here start to fill columns by elements
                        var item = items[Object.keys(elementOfGrid)[0]];

                        if (grid[col].length === 0) {
                            // Push first element if column is empty
                            _Styles2.default.setItemStyles(item, 0, (params.itemWidth + params.itemMargin) * col); // Set item of grid styles
                            grid[col].push(elementOfGrid);
                        } else if (grid[col].length > 0) {
                            // if not empty should detect smallest column
                            sumOfHeightsForColumns = _Helper2.default.getSumOfHeightsForColumns(grid);
                            indexOfSmallestColumn = _Helper2.default.getIndexOfSmallestColumn(sumOfHeightsForColumns);

                            /*** Set item of grid styles ***/
                            _Styles2.default.setItemStyles(item, sumOfHeightsForColumns[indexOfSmallestColumn] + params.itemMargin * grid[indexOfSmallestColumn].length, (params.itemWidth + params.itemMargin) * indexOfSmallestColumn);

                            grid[indexOfSmallestColumn].push(elementOfGrid); // Add next element to the smallest column
                        }
                    }
                }
            }

            return grid;
        }
    }, {
        key: 'getContainerHeight',
        value: function getContainerHeight(params, grid) {
            var sumOfHeightsForColumns = _Helper2.default.getSumOfHeightsForColumns(grid);
            var maxVal = Math.max.apply(Math, _toConsumableArray(sumOfHeightsForColumns));
            var maxValColIndex = sumOfHeightsForColumns.indexOf(maxVal);
            return maxVal + grid[maxValColIndex].length * params.itemMargin;
        }
    }, {
        key: 'setGridContainerStyles',
        value: function setGridContainerStyles(params, container, grid) {
            // TODO MAYBE move set styles to main and leave in grid only calculation?
            _Styles2.default.setContainerStyles(container, this.getContainerHeight(params, grid), params.containerFullWidth);
        }
    }]);

    return Grid;
}();

exports.default = Grid;

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Errors = function () {
	function Errors() {
		_classCallCheck(this, Errors);

		this.E_001 = 'Property is not defined';
		this.E_002 = 'Invalid type of parameter';
		this.E_003 = 'Property is empty';
		this.E_004 = 'Invalid size of container';
		this.E_005 = 'Invalid value';
		this.E_006 = 'Missing container selector property';
		this.E_007 = 'Missing item selector property';
		this.E_008 = 'Missing width of item';
		this.E_009 = 'Missing margin property';
		this.E_010 = 'Missing container max width property';
	}

	_createClass(Errors, [{
		key: 'throwError',
		value: function throwError(customMessage, errorCode) {
			throw new Error(customMessage + ": " + this[errorCode]);
		}
	}]);

	return Errors;
}();

module.exports = new Errors();

/***/ })
/******/ ]);
//# sourceMappingURL=application.js.map