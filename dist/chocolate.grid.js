'use strict';

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/******/(function (modules) {
	// webpackBootstrap
	/******/ // The module cache
	/******/var installedModules = {};

	/******/ // The require function
	/******/function __webpack_require__(moduleId) {

		/******/ // Check if module is in cache
		/******/if (installedModules[moduleId])
			/******/return installedModules[moduleId].exports;

		/******/ // Create a new module (and put it into the cache)
		/******/var module = installedModules[moduleId] = {
			/******/exports: {},
			/******/id: moduleId,
			/******/loaded: false
			/******/ };

		/******/ // Execute the module function
		/******/modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

		/******/ // Flag the module as loaded
		/******/module.loaded = true;

		/******/ // Return the exports of the module
		/******/return module.exports;
		/******/
	}

	/******/ // expose the modules object (__webpack_modules__)
	/******/__webpack_require__.m = modules;

	/******/ // expose the module cache
	/******/__webpack_require__.c = installedModules;

	/******/ // __webpack_public_path__
	/******/__webpack_require__.p = "";

	/******/ // Load entry module and return exports
	/******/return __webpack_require__(0);
	/******/
})(
/************************************************************************/
/******/[
/* 0 */
/***/function (module, exports, __webpack_require__) {

	'use strict';

	window.Chocolate = __webpack_require__(1);

	/***/
},
/* 1 */
/***/function (module, exports, __webpack_require__) {

	'use strict';

	/**
  * Dependencies
  */

	var Sizes = __webpack_require__(2);
	var Styles = __webpack_require__(3);
	var Grid = __webpack_require__(4);
	var Main = __webpack_require__(5);

	module.exports = function Chocolate(params) {
		_classCallCheck(this, Chocolate);

		var options = {};

		//@TODO: Parameters checker
		options.containerSelector = Main.parametersChecker(params, 'containerSelector', 'string');
		options.containerMaxWidth = Main.parametersChecker(params, 'containerMaxWidth', 'number');
		options.itemSelector = Main.parametersChecker(params, 'itemSelector', 'string');
		options.columnWidth = Main.parametersChecker(params, 'columnWidth', 'number');
		options.columnMargin = Main.parametersChecker(params, 'columnMargin', 'number');

		//@TODO: Move logic to main, leave only params checker ???
		//Main.run({
		//	 containerSelector
		//	 containerMaxWidth
		//	 itemSelector
		//	 columnWidth
		//	 columnMargin
		// })

		var elements = document.querySelectorAll(".js-item");
		var gridContainer = document.querySelector('.js-chocolate');

		Styles.setElementStylesBeforeGridCreated(elements, options.columnWidth, gridContainer, options.containerMaxWidth);

		/**
   * Common func for static grid and resize
   *
   * @param containerWidth
   * @returns {{numbers: *, columns: *, containerFullWidth: *}}
   */
		function sizesForGrid(containerWidth) {
			var numbers = Sizes.getHeightOfElements(elements);
			var columns = Sizes.getColumnNumber(containerWidth, options.columnWidth);
			var containerFullWidth = Sizes.getContainerWidth(options.columnWidth, columns, options.columnMargin);

			return {
				numbers: numbers,
				columns: columns,
				containerFullWidth: containerFullWidth
			};
		}

		var sizes = sizesForGrid(gridContainer.clientWidth);

		Styles.replaceItems({
			itemsHeight: sizes.numbers,
			columnsNumber: sizes.columns,
			itemSelector: options.itemSelector,
			itemWidth: options.columnWidth,
			itemMargin: options.columnMargin,
			containerSelector: options.containerSelector,
			containerFullWidth: sizes.containerFullWidth
		});

		// *********** Resize *********** //
		setSize();

		//@TODO:
		// remove listeners
		window.addEventListener('resize', setSize);

		function setSize() {
			if (window.innerWidth <= options.containerMaxWidth) {
				var _sizes = sizesForGrid(window.innerWidth);

				Styles.replaceItems({
					itemsHeight: _sizes.numbers,
					columnsNumber: _sizes.columns,
					itemSelector: options.itemSelector,
					itemWidth: options.columnWidth,
					itemMargin: options.columnMargin,
					containerSelector: options.containerSelector,
					containerFullWidth: _sizes.containerFullWidth
				});
			}
		}
	};

	/***/
},
/* 2 */
/***/function (module, exports) {

	'use strict';

	var Sizes = function () {
		function Sizes() {
			_classCallCheck(this, Sizes);

			this._height = window.innerHeight;
			this._width = window.innerWidth;
		}

		_createClass(Sizes, [{
			key: 'getColumnNumber',
			value: function getColumnNumber(containerWidth, columnWidth) {
				// container width exmp - 1200
				// col width exmp - 250
				// col number exmp - 4
				// 1200 / 250 = 4x250 + 200 // poka bez shiriny kolony
				// permanent margin ??

				//@TODO
				// Responsive column
				// Permanent column
				// need percents

				return Math.floor(containerWidth / columnWidth);
			}
		}, {
			key: 'getContainerWidth',
			value: function getContainerWidth(columnWidth, columnNumber, columnMargin) {
				// Minus last right margin
				return columnNumber * (columnWidth + columnMargin) - columnMargin;
			}
		}, {
			key: 'getHeightOfElements',
			value: function getHeightOfElements(elements) {
				var numbers = [];
				for (var index = 0; index < elements.length; index++) {
					var obj1 = _defineProperty({}, index, elements[index].clientHeight);
					numbers.push(obj1);
				}
				return numbers;
			}
		}, {
			key: 'getElementsWidth',
			value: function getElementsWidth(elements) {
				var numbers = [];
				for (var index = 0; index < elements.length; index++) {
					var obj1 = _defineProperty({}, index, elements[index].clientWidth);
					numbers.push(obj1);
				}
				return numbers;
			}
		}]);

		return Sizes;
	}();

	module.exports = new Sizes();

	/***/
},
/* 3 */
/***/function (module, exports, __webpack_require__) {

	'use strict';

	/**
  * Dependencies
  */

	var Grid = __webpack_require__(4);

	var Styles = function () {
		function Styles() {
			_classCallCheck(this, Styles);
		}

		_createClass(Styles, [{
			key: 'setElementStylesBeforeGridCreated',


			/**
    * Good way to set styles on items before grid is ready
    *
    * @param elements
    * @param itemWidth
    * @param container
    * @param containerMaxWidth
    */
			value: function setElementStylesBeforeGridCreated(elements, itemWidth, container, containerMaxWidth) {
				container.style.maxWidth = containerMaxWidth + "px";

				for (var e = 0; e < elements.length; e++) {
					elements[e].style.width = itemWidth + "px"; // item width
					elements[e].style.position = "absolute"; // item position
					elements[e].style.transition = "all ease .5s"; // animation
				}
			}

			/**
    * Create grid and set all items in grid
    *
    * @param params
    */

		}, {
			key: 'replaceItems',
			value: function replaceItems(params) {
				// Get grid
				var grid = Grid.createGrid(params.itemsHeight, params.columnsNumber);

				//Get items and container
				var items = document.querySelectorAll(params.itemSelector);
				var container = document.querySelector(params.containerSelector);
				var itemWidth = params.itemWidth;

				for (var col in grid) {
					if (grid.hasOwnProperty(col)) {
						var column = grid[col];
						var sum = 0;
						var mapOfSums = []; // For TEST

						for (var e = 0; e < column.length; e++) {
							var item = column[e];

							for (var index in item) {
								if (item.hasOwnProperty(index)) {
									items[index].style.transform = "matrix(1, 0, 0, 1, " + (params.itemWidth + params.itemMargin) * col + ", " + ( // Left
									sum + params.itemMargin * e) + ")"; // Top

									sum += item[index]; // Should count MARGINS !!!
									mapOfSums.push(sum);
								}
							}
						}
					}
				}

				// console.log(mapOfSums); // Sum of Last columns. NEED: Sum of biggest column
				// add max Width
				container.style.position = "relative";
				container.style.margin = "0 auto"; // depends of size, if not 100%
				container.style.height = sum + 'px'; // Height??
				container.style.width = params.containerFullWidth + 'px';
			}
		}]);

		return Styles;
	}();

	module.exports = new Styles();

	/***/
},
/* 4 */
/***/function (module, exports) {

	'use strict';

	var Grid = function () {
		function Grid() {
			_classCallCheck(this, Grid);
		}

		_createClass(Grid, [{
			key: 'getMapOfHeightsForEveryColumn',

			/**
    * Get every element{index:height} and return array of heights for every column
    *
    * @param column
    */
			value: function getMapOfHeightsForEveryColumn(column) {
				var mapOfHeights = [];
				var _iteratorNormalCompletion = true;
				var _didIteratorError = false;
				var _iteratorError = undefined;

				try {
					for (var _iterator = column[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
						var indexHeight = _step.value;

						var index = Object.keys(indexHeight)[0];
						mapOfHeights.push(parseInt(indexHeight[index]));
					}
				} catch (err) {
					_didIteratorError = true;
					_iteratorError = err;
				} finally {
					try {
						if (!_iteratorNormalCompletion && _iterator.return) {
							_iterator.return();
						}
					} finally {
						if (_didIteratorError) {
							throw _iteratorError;
						}
					}
				}

				return mapOfHeights;
			}

			/**
    * Return index of column with smallest sum
    *
    * @param storage
    */

		}, {
			key: 'getIndexOfSmallestColumn',
			value: function getIndexOfSmallestColumn(storage) {
				var i = 0;
				var v = storage[0];
				for (var t = 1; t < storage.length; t++) {
					if (storage[t] < v) {
						v = storage[t];
						i = t;
					}
				}

				return i;
			}

			/**
    * Make me magic here please and create grid :)
    *
    * @param elementsOfGrid
    * @param columns
    * @returns {{}}
    */

		}, {
			key: 'createGrid',
			value: function createGrid(elementsOfGrid, columns) {
				var elementsCount = elementsOfGrid.length,
				    grid = {};

				// Set columns amount
				for (var j = 0; j < columns; j++) {
					grid[j] = [];
				}

				var gridLength = Object.keys(grid).length;

				for (var i = 0; i < elementsCount; i++) {
					for (var col = 0; col < gridLength && elementsOfGrid.length > 0; col++) {
						// Till elements array will not be empty
						var elementOfGrid = elementsOfGrid.splice(0, 1)[0]; // Grab first element till zero length
						if (elementOfGrid) {
							// Here start to fill columns by elements
							if (grid[col].length === 0) {
								grid[col].push(elementOfGrid); // Push element if column is empty
							} else if (grid[col].length > 0) {
								// if not empty should detect smallest column
								var elementsSumStorage = []; // Store sum of heights for all counted elements

								for (var c = 0; c < gridLength; c++) {
									var mapOfHeights = this.getMapOfHeightsForEveryColumn(grid[c]);

									if (mapOfHeights.length === 1) {
										elementsSumStorage.push(mapOfHeights[0]);
									} else if (mapOfHeights.length > 1) {
										var total = mapOfHeights.reduce(function (a, b) {
											return a + b;
										});
										elementsSumStorage.push(total);
									}
								}

								var indexOfSmallestColumn = this.getIndexOfSmallestColumn(elementsSumStorage);
								grid[indexOfSmallestColumn].push(elementOfGrid); // Insert value to the smallest column
							}
						}
					}
				}

				return grid; // Finally we got a grid with sorted elements
			}
		}]);

		return Grid;
	}();

	module.exports = new Grid();

	/***/
},
/* 5 */
/***/function (module, exports, __webpack_require__) {

	'use strict';

	/**
  * Dependencies
  */

	var Sizes = __webpack_require__(2);
	var Styles = __webpack_require__(3);
	var Errors = __webpack_require__(6);

	var Main = function () {
		function Main() {
			_classCallCheck(this, Main);
		}

		_createClass(Main, [{
			key: 'run',
			value: function run(params) {}
		}, {
			key: 'parametersChecker',
			value: function parametersChecker(params, property, type) {
				if (params.hasOwnProperty(property)) {
					if (_typeof(params[property]) === type) {
						if (params[property] !== undefined && params[property] !== null && params[property] != false) {
							return params[property];
						} else {
							Errors.throwError(property, 'E_003');
						}
					} else {
						Errors.throwError(property, 'E_002');
					}
				} else {
					Errors.throwError(property, 'E_001');
				}
			}
		}, {
			key: 'setListeners',
			value: function setListeners() {}
		}, {
			key: 'resizeContainer',
			value: function resizeContainer(params) {}
		}]);

		return Main;
	}();

	module.exports = new Main();

	/***/
},
/* 6 */
/***/function (module, exports) {

	"use strict";

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
			this.E_008 = 'Missing width of item property';
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

	/***/
}
/******/]);