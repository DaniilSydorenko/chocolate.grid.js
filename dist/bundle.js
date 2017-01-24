'use strict';

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
	var Colors = __webpack_require__(5);

	module.exports = function Chocolate(params) {
		_classCallCheck(this, Chocolate);

		var elements = document.querySelectorAll(".js-tile");
		var element = document.querySelector(".js-tile");
		var gridContainer = document.querySelector('.js-chocolate');

		var elementsIMG = document.querySelectorAll(".js-tile");
		Sizes.setElementsHeight(elementsIMG);

		this._containerSelector = params.containerSelector;
		this._tileSelector = params.tileSelector;

		// Set grid, params, etc
		// Set number of columns and container width
		this._columnUserWidth = params.columnWidth;
		//this._containerUserWidth = params.containerWidth;

		this._columnUserMargin = params.columnMargin;

		this._columnWidth = elements[0].clientWidth;
		this._containerWidth = gridContainer.clientWidth;

		var numbers = Sizes.getElementsHeights(elements);
		var columns = Sizes.getColumnNumber(this._containerWidth, this._columnUserWidth);

		var grid = Grid.createGrid(numbers, columns);

		var containerFullWidth = Sizes.getContainerWidth(this._columnUserWidth, columns, this._columnUserMargin);

		// Init style
		Styles.setStyleToItems(grid, elements, gridContainer, containerFullWidth - 20);

		var colWidth = this._columnUserWidth,
		    colMargin = this._columnUserMargin;

		//window.addEventListener('load', setSize, true);
		setSize();
		window.addEventListener('resize', setSize);

		function setSize() {
			var containerWidth = document.querySelector('.js-chocolate').clientWidth;

			if (window.innerWidth <= containerWidth) {
				// recounting
				console.log(containerWidth);

				// Get new columns number because window width is only one important
				var _columns = Sizes.getColumnNumber(window.innerWidth, colWidth + colMargin);

				var _numbers = Sizes.getElementsHeights(elements);

				var _grid = Grid.createGrid(_numbers, _columns);

				var _containerFullWidth = Sizes.getContainerWidth(colWidth, _columns, colMargin) - 20;

				//console.log(columns);
				//console.log(containerFullWidth);

				Styles.setStyleToItems(_grid, elements, gridContainer, _containerFullWidth);
			} else if (window.innerWidth <= 1400) {
				// maxWidth instead 1400px
				var _columns2 = Sizes.getColumnNumber(window.innerWidth, colWidth + colMargin);

				var _numbers2 = Sizes.getElementsHeights(elements);

				var _grid2 = Grid.createGrid(_numbers2, _columns2);

				var _containerFullWidth2 = Sizes.getContainerWidth(colWidth, _columns2, colMargin) - 20;

				//console.log(columns);
				//console.log(containerFullWidth);

				Styles.setStyleToItems(_grid2, elements, gridContainer, _containerFullWidth2);
			}

			// pass new value of container and set new styles
		}

		//@TODO:
		// remove listeners
		// change somewhere vars -> lets
		// create grid with prototype
		// grid -> Map?
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
			key: 'setElementsHeight',
			value: function setElementsHeight(elements) {
				for (var e = 0; e < elements.length; e++) {
					elements[e].setAttribute("data-height", elements[e].clientHeight);
				}
			}
		}, {
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
				//
				return columnNumber * (columnWidth + columnMargin);
			}
		}, {
			key: 'getElementsHeights',
			value: function getElementsHeights(elements) {
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
		}, {
			key: 'height',
			get: function get() {
				return this._height;
			}
		}, {
			key: 'width',
			get: function get() {
				return this._width;
			}
		}]);

		return Sizes;
	}();

	module.exports = new Sizes();

	/***/
},
/* 3 */
/***/function (module, exports) {
	var Styles = function () {
		function Styles() {
			_classCallCheck(this, Styles);
		}

		_createClass(Styles, [{
			key: 'setStyleToItems',
			value: function setStyleToItems(grid, elements, container, containerFullWidth) {

				for (var col in grid) {

					if (grid.hasOwnProperty(col)) {

						var column = grid[col];
						var sum = 0;

						for (var e = 0; e < column.length; e++) {
							var element = column[e];

							for (var index in element) {

								if (element.hasOwnProperty(index)) {
									//console.log("Column: " + col + " Index: " + index + " and value: " + element[index] + " SUM: " + sum);

									//let gridColumn = parseInt(col) + 1;
									//let sumWithMargin = sum + (10 * e);

									elements[index].style.left = 270 * col + "px";
									elements[index].style.top = sum + 20 * e + "px";
									elements[index].classList.add("col-" + col);
									//elements[index].innerHTML = "<p>Height: " + element[index] + "<br>" + " Sum: " + sum + "</p>";
									//elements[index].style.transform = "translate(" + (100 * col) + "%" + "," + (sum + (10*e))+ "px)";

									sum += element[index];
								}
							}
						}
					}
				}

				container.style.height = sum + 'px';
				container.style.width = containerFullWidth + 'px';
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

		/**
   * Create grid
   */


		_createClass(Grid, [{
			key: 'createGrid',
			value: function createGrid(numbers, columns) {
				//var elements = document.querySelectorAll(".js-tile");
				//var numbers = Sizes.getElementsHeights(elements);

				var nlength = numbers.length;

				// !!!!!!
				//var columns = Sizes.getColumnNumber(this._containerUserWidth, this._columnUserWidth);

				var grid = {};

				// Set columns
				for (var j = 0; j < columns; j++) {
					grid[j] = [];
				}

				//////////////////////////////
				/*
     get element quantity
     set grid
     */
				//////////////////////////////

				// Get numbers
				for (var i = 0; i < nlength; i++) {

					for (var col in grid) {
						// change on "of" or "simple for"

						if (grid.hasOwnProperty(col)) {
							// remove
							var number = numbers.splice(0, 1)[0]; // Grab first element

							if (number) {
								// ?

								// Here start to fill columns by elements
								if (grid[col].length < 1) {
									grid[col].push(number); // Push element if column is empty

									// if not empty should detect smallest column
								} else if (grid[col].length >= 1) {
									// Simple else ?

									var allCols = []; // Count sum of heights of all former elements if column is not empty | change on CONST
									// All const on top !!

									for (var c in grid) {
										// change on "of" or "simple for"

										//console.log("---> Column2: " + c);

										if (grid.hasOwnProperty(c)) {
											// remove

											var s = grid[c]; // column

											// Convert object to simple numbers for sum counting
											var properValues = []; // All const on top !!??

											var _iteratorNormalCompletion = true;
											var _didIteratorError = false;
											var _iteratorError = undefined;

											try {
												for (var _iterator = s[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
													var forSumCol = _step.value;
													// go thru elements

													var newVal = 0; // All const on top !!?? | zero as default ???

													for (var colVal in forSumCol) {
														// change on "of" or "simple for"
														if (forSumCol.hasOwnProperty(colVal)) {
															//remove
															newVal = parseInt(forSumCol[colVal]);
														}
													}

													properValues.push(newVal);
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

											if (properValues.length === 1) {
												allCols.push(properValues[0]);
											} else if (properValues.length > 1) {
												var total = properValues.reduce(function (a, b) {
													return a + b;
												});

												allCols.push(total);
											}
										}
									}

									// Move to separate func
									// Get index of smallest value
									var index = 0,
									    // All const on top !!??
									value = allCols[0];
									for (var t = 1; t < allCols.length; t++) {
										if (allCols[t] < value) {
											value = allCols[t];
											index = t;
										}
									}

									// Insert value to the smallest column
									grid[index].push(number);
								}
							}
						}
					}
				}

				// Finally we got a grid with sorted elements
				return grid;
			}
		}, {
			key: 'getMultiGrid',
			value: function getMultiGrid() {
				return this.grid.filter(function (i) {
					return i < 20;
				});
			}
		}, {
			key: 'getMultiGrid2',
			value: function getMultiGrid2() {
				return this.grid.map(function (i) {
					return i * 2;
				});
			}
		}, {
			key: 'setGridColumns',
			value: function setGridColumns() {
				var gridContainer = document.querySelector('.js-chocolate');

				for (var i = 0; i < 3; i++) {

					// Create grid columns
					var gridVerticalColumn = document.createElement('div');
					gridVerticalColumn.id = "col-" + i;

					var _elements = document.getElementsByClassName('col-' + i);

					for (var e = 0; e <= _elements.length; e++) {
						var el = _elements[e];
						gridVerticalColumn.appendChild(_elements[e]);
					}

					gridContainer.appendChild(gridVerticalColumn);
				}
			}
		}]);

		return Grid;
	}();

	module.exports = new Grid();

	/***/
},
/* 5 */
/***/function (module, exports) {
	var Colors = function () {
		function Colors() {
			_classCallCheck(this, Colors);

			this._blue = "#cbd0e1";
			this._green = "#d1f313";
			this._red = "#ff0000";
		}

		_createClass(Colors, [{
			key: 'colors',
			get: function get() {
				return [this._blue, this._green, this._red];
			}
		}]);

		return Colors;
	}();

	module.exports = new Colors();

	/***/
}
/******/]);